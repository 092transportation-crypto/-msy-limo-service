from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend email configuration
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFY_EMAIL = os.environ.get('NOTIFY_EMAIL', 'info@msylimoservice.com')

# Create the main app
app = FastAPI(
    title="MSY Limo Service API",
    description="Backend API for MSY Limo Service - Premium Chauffeur Service in New Orleans, Louisiana",
    version="1.0.0"
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# ============ Models ============

class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    service_type: str
    pickup_location: Optional[str] = ""
    dropoff_location: Optional[str] = ""
    date: Optional[str] = ""
    message: Optional[str] = ""
    status: str = Field(default="pending")
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class QuoteRequestCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    service_type: str
    pickup_location: Optional[str] = ""
    dropoff_location: Optional[str] = ""
    date: Optional[str] = ""
    message: Optional[str] = ""

class QuoteRequestResponse(BaseModel):
    id: str
    name: str
    email: str
    phone: str
    service_type: str
    pickup_location: str
    dropoff_location: str
    date: str
    message: str
    status: str
    created_at: str

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = ""
    service_type: Optional[str] = ""
    date: Optional[str] = ""
    time: Optional[str] = ""
    pickup_location: Optional[str] = ""
    dropoff_location: Optional[str] = ""
    passengers: Optional[str] = ""
    message: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    serviceType: Optional[str] = ""
    date: Optional[str] = ""
    time: Optional[str] = ""
    pickupLocation: Optional[str] = ""
    dropoffLocation: Optional[str] = ""
    passengers: Optional[str] = ""
    message: Optional[str] = ""

class ChatMessageRequest(BaseModel):
    message: str
    session_id: str

class ChatMessageResponse(BaseModel):
    response: str
    session_id: str

# ============ Routes ============

@api_router.get("/")
async def root() -> Dict[str, str]:
    return {
        "message": "MSY Limo Service API",
        "version": "1.0.0",
        "status": "operational"
    }

@api_router.get("/health")
async def health_check() -> Dict[str, str]:
    return {"status": "healthy", "service": "MSY Limo Service API"}

# Quote Request Endpoints
@api_router.post("/quote-request", response_model=QuoteRequestResponse)
async def create_quote_request(input: QuoteRequestCreate):
    """Submit a new quote request for limo service"""
    try:
        quote_dict = input.model_dump()
        quote_obj = QuoteRequest(**quote_dict)
        
        # Convert to dict for MongoDB
        doc = quote_obj.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        
        await db.quote_requests.insert_one(doc)
        
        # Return response without _id
        return QuoteRequestResponse(
            id=doc['id'],
            name=doc['name'],
            email=doc['email'],
            phone=doc['phone'],
            service_type=doc['service_type'],
            pickup_location=doc['pickup_location'] or "",
            dropoff_location=doc['dropoff_location'] or "",
            date=doc['date'] or "",
            message=doc['message'] or "",
            status=doc['status'],
            created_at=doc['created_at']
        )
    except Exception as e:
        logging.error(f"Error creating quote request: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit quote request")

@api_router.get("/quote-requests", response_model=List[QuoteRequestResponse])
async def get_quote_requests():
    """Get all quote requests (admin endpoint)"""
    try:
        quotes = await db.quote_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
        return [QuoteRequestResponse(**q) for q in quotes]
    except Exception as e:
        logging.error(f"Error fetching quote requests: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch quote requests")

# Email notification helper
async def send_quote_notification(contact_data: dict):
    """Send email notification for new quote request"""
    try:
        html_content = f"""
        <html>
        <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="background: linear-gradient(to right, #f59e0b, #d97706); padding: 20px; text-align: center;">
                    <h1 style="color: #000000; margin: 0; font-size: 24px;">New Quote Request!</h1>
                </div>
                <div style="padding: 30px;">
                    <h2 style="color: #f59e0b; margin-top: 0;">Contact Details</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{contact_data.get('name', 'N/A')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{contact_data.get('email', 'N/A')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:{contact_data.get('phone', '')}" style="color: #f59e0b;">{contact_data.get('phone', 'N/A')}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service Type:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{contact_data.get('service_type', 'N/A')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Date:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{contact_data.get('date', 'N/A')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Time:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{contact_data.get('time', 'N/A')}</td>
                        </tr>
                    </table>
                    
                    <h3 style="color: #f59e0b; margin-top: 25px;">Message</h3>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                        <p style="margin: 0; color: #333;">{contact_data.get('message', 'No additional details provided.')}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding: 20px; background-color: #000; border-radius: 8px; text-align: center;">
                        <p style="color: #f59e0b; margin: 0 0 10px 0; font-weight: bold;">Quick Actions</p>
                        <a href="tel:{contact_data.get('phone', '')}" style="display: inline-block; background-color: #f59e0b; color: #000; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">Call Customer</a>
                        <a href="mailto:{contact_data.get('email', '')}" style="display: inline-block; background-color: #333; color: #f59e0b; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 5px;">Reply by Email</a>
                    </div>
                </div>
                <div style="background-color: #000; padding: 15px; text-align: center;">
                    <p style="color: #888; margin: 0; font-size: 12px;">MSY Limo Service - New Orleans, Louisiana</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        params = {
            "from": SENDER_EMAIL,
            "to": [NOTIFY_EMAIL],
            "subject": f"🚗 New Quote Request: {contact_data.get('name', 'Customer')} - {contact_data.get('service_type', 'Service')}",
            "html": html_content
        }
        
        # Run sync SDK in thread to keep FastAPI non-blocking
        await asyncio.to_thread(resend.Emails.send, params)
        logging.info(f"Email notification sent for quote from {contact_data.get('name')}")
        return True
    except Exception as e:
        logging.error(f"Failed to send email notification: {str(e)}")
        return False

# Contact Message Endpoints
@api_router.post("/contact")
async def create_contact_message(input: ContactMessageCreate):
    """Submit a contact message and send email notification"""
    try:
        # Convert from camelCase (frontend) to snake_case (backend)
        contact_data = {
            "name": input.name,
            "email": input.email,
            "phone": input.phone or "",
            "service_type": input.serviceType or "",
            "date": input.date or "",
            "time": input.time or "",
            "pickup_location": input.pickupLocation or "",
            "dropoff_location": input.dropoffLocation or "",
            "passengers": input.passengers or "",
            "message": input.message or ""
        }
        
        contact_obj = ContactMessage(**contact_data)
        doc = contact_obj.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        
        await db.contact_messages.insert_one(doc)
        
        # Send email notification (non-blocking, don't fail if email fails)
        asyncio.create_task(send_quote_notification(doc))
        
        return {
            "success": True,
            "message": "Contact message sent successfully",
            "id": doc['id']
        }
    except Exception as e:
        logging.error(f"Error creating contact message: {e}")
        raise HTTPException(status_code=500, detail="Failed to send contact message")

# Service Info Endpoints (for SEO / structured data)
@api_router.get("/services")
async def get_services():
    """Get list of services offered"""
    return {
        "services": [
            {
                "id": "airport",
                "name": "Airport Transportation",
                "description": "Reliable airport transfers to BWI, DCA, and IAD airports with flight tracking and meet & greet service."
            },
            {
                "id": "corporate",
                "name": "Corporate Transportation",
                "description": "Professional executive car service for business travelers, meetings, and corporate events."
            },
            {
                "id": "wedding",
                "name": "Wedding Limo Service",
                "description": "Elegant wedding transportation including stretch limousines and luxury sedans for your special day."
            },
            {
                "id": "events",
                "name": "Special Events & Nightlife",
                "description": "Safe and stylish transportation for concerts, galas, proms, and nights out."
            },
            {
                "id": "hourly",
                "name": "Hourly Chauffeur Service",
                "description": "Flexible point-to-point and hourly charter service with a dedicated chauffeur."
            }
        ]
    }

@api_router.get("/service-areas")
async def get_service_areas():
    """Get list of service areas"""
    return {
        "areas": [
            {
                "region": "Maryland",
                "cities": ["Baltimore", "Annapolis", "Columbia", "Glen Burnie", "Ellicott City", "Laurel", "Bethesda", "Silver Spring", "Rockville", "Bowie"]
            },
            {
                "region": "Washington DC",
                "cities": ["Downtown DC", "Capitol Hill", "Georgetown", "Dupont Circle", "Adams Morgan", "Navy Yard"]
            },
            {
                "region": "Northern Virginia",
                "cities": ["Arlington", "Alexandria", "Fairfax", "Tysons Corner", "McLean", "Reston"]
            },
            {
                "region": "Delaware",
                "cities": ["Wilmington", "Newark", "Dover", "Middletown"]
            }
        ],
        "airports": [
            {"code": "BWI", "name": "Baltimore/Washington International"},
            {"code": "DCA", "name": "Reagan National Airport"},
            {"code": "IAD", "name": "Dulles International Airport"}
        ]
    }

@api_router.get("/fleet")
async def get_fleet():
    """Get list of vehicles in fleet"""
    return {
        "vehicles": [
            {
                "id": 1,
                "name": "Mercedes-Benz S-Class",
                "passengers": 3,
                "luggage": 2,
                "features": ["Leather Interior", "WiFi", "Privacy Glass"],
                "ideal_for": ["Executive travel", "Airport transfers"]
            },
            {
                "id": 2,
                "name": "Cadillac Escalade",
                "passengers": 5,
                "luggage": 5,
                "features": ["Premium Leather", "Entertainment System"],
                "ideal_for": ["Group travel", "Corporate events"]
            },
            {
                "id": 3,
                "name": "Mercedes Sprinter",
                "passengers": 14,
                "luggage": 6,
                "features": ["Executive Seating", "Conference Setup"],
                "ideal_for": ["Corporate groups", "Airport shuttles"]
            },
            {
                "id": 4,
                "name": "Stretch Limousine",
                "passengers": 9,
                "luggage": 2,
                "features": ["Bar", "LED Lighting", "Premium Sound"],
                "ideal_for": ["Weddings", "Proms", "Night out"]
            }
        ]
    }

# AI Chat Endpoint
CHAT_SYSTEM_MESSAGE = """You are a helpful customer service assistant for MSY Limo Service, a premium luxury transportation company based in Columbia, Maryland.

ABOUT THE COMPANY:
- Phone: (877) 609-1919
- Email: info@msylimoservice.com
- Location: Columbia, Maryland, USA
- Available 24/7

SERVICES OFFERED:
1. Airport Transportation - BWI, DCA (Reagan National), IAD (Dulles) airports with flight tracking
2. Corporate Transportation - Executive car service for business travelers
3. Wedding Limo Service - Elegant transportation for weddings
4. Special Events - Concerts, galas, proms, nights out
5. Hourly Charter - Flexible point-to-point service

SERVICE AREAS:
- Maryland: Baltimore, Annapolis, Columbia, Bethesda, Silver Spring, Rockville
- Washington DC: All areas
- Northern Virginia: Arlington, Alexandria, Fairfax, McLean
- Delaware: Wilmington, Newark, Dover

FLEET:
- Mercedes-Benz S-Class (3 passengers)
- Cadillac Escalade (5 passengers)
- Mercedes Sprinter (14 passengers)
- Stretch Limousine (9 passengers)

YOUR ROLE:
- Answer questions about services, pricing inquiries, and booking
- Be professional, friendly, and helpful
- For booking, direct users to the booking widget on the website or call (877) 609-1919
- Keep responses concise but informative
- If you don't know specific pricing, suggest they contact us for a custom quote"""

@api_router.post("/chat", response_model=ChatMessageResponse)
async def chat_with_ai(request: ChatMessageRequest):
    """AI-powered customer service chat"""
    try:
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        if not api_key:
            raise HTTPException(status_code=500, detail="Chat service not configured")
        
        chat = LlmChat(
            api_key=api_key,
            session_id=request.session_id,
            system_message=CHAT_SYSTEM_MESSAGE
        ).with_model("openai", "gpt-5.2")
        
        user_message = UserMessage(text=request.message)
        response = await chat.send_message(user_message)
        
        # Store chat history in MongoDB
        chat_doc = {
            "session_id": request.session_id,
            "user_message": request.message,
            "ai_response": response,
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        await db.chat_history.insert_one(chat_doc)
        
        return ChatMessageResponse(
            response=response,
            session_id=request.session_id
        )
    except Exception as e:
        logging.error(f"Chat error: {e}")
        raise HTTPException(status_code=500, detail="Failed to process chat message")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# Gzip compression middleware
from starlette.middleware.gzip import GZipMiddleware
app.add_middleware(GZipMiddleware, minimum_size=500)
