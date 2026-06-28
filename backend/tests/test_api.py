"""
MSY Limo Service API Tests
Tests for all backend endpoints including health, services, fleet, contact, and quote requests
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthEndpoints:
    """Health and root endpoint tests"""
    
    def test_root_endpoint(self):
        """Test root API endpoint returns service info"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert data["message"] == "MSY Limo Service API"
        assert data["version"] == "1.0.0"
        assert data["status"] == "operational"
    
    def test_health_endpoint(self):
        """Test health check endpoint"""
        response = requests.get(f"{BASE_URL}/api/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        assert data["service"] == "MSY Limo Service API"


class TestServicesEndpoint:
    """Tests for /api/services endpoint"""
    
    def test_get_services(self):
        """Test services list endpoint"""
        response = requests.get(f"{BASE_URL}/api/services")
        assert response.status_code == 200
        data = response.json()
        assert "services" in data
        assert len(data["services"]) == 5
        
        # Verify all expected services are present
        service_ids = [s["id"] for s in data["services"]]
        assert "airport" in service_ids
        assert "corporate" in service_ids
        assert "wedding" in service_ids
        assert "events" in service_ids
        assert "hourly" in service_ids
    
    def test_services_have_required_fields(self):
        """Test each service has required fields"""
        response = requests.get(f"{BASE_URL}/api/services")
        data = response.json()
        
        for service in data["services"]:
            assert "id" in service
            assert "name" in service
            assert "description" in service
            assert len(service["name"]) > 0
            assert len(service["description"]) > 0


class TestServiceAreasEndpoint:
    """Tests for /api/service-areas endpoint"""
    
    def test_get_service_areas(self):
        """Test service areas endpoint"""
        response = requests.get(f"{BASE_URL}/api/service-areas")
        assert response.status_code == 200
        data = response.json()
        assert "areas" in data
        assert "airports" in data
    
    def test_service_areas_regions(self):
        """Test all expected regions are present"""
        response = requests.get(f"{BASE_URL}/api/service-areas")
        data = response.json()
        
        regions = [area["region"] for area in data["areas"]]
        assert "Maryland" in regions
        assert "Washington DC" in regions
        assert "Northern Virginia" in regions
        assert "Delaware" in regions
    
    def test_airports_list(self):
        """Test airports list contains expected airports"""
        response = requests.get(f"{BASE_URL}/api/service-areas")
        data = response.json()
        
        airport_codes = [a["code"] for a in data["airports"]]
        assert "BWI" in airport_codes
        assert "DCA" in airport_codes
        assert "IAD" in airport_codes


class TestFleetEndpoint:
    """Tests for /api/fleet endpoint"""
    
    def test_get_fleet(self):
        """Test fleet endpoint returns vehicles"""
        response = requests.get(f"{BASE_URL}/api/fleet")
        assert response.status_code == 200
        data = response.json()
        assert "vehicles" in data
        assert len(data["vehicles"]) >= 4
    
    def test_vehicles_have_required_fields(self):
        """Test each vehicle has required fields"""
        response = requests.get(f"{BASE_URL}/api/fleet")
        data = response.json()
        
        for vehicle in data["vehicles"]:
            assert "id" in vehicle
            assert "name" in vehicle
            assert "passengers" in vehicle
            assert "luggage" in vehicle
            assert "features" in vehicle
            assert "ideal_for" in vehicle
            assert isinstance(vehicle["features"], list)
            assert isinstance(vehicle["ideal_for"], list)


class TestContactEndpoint:
    """Tests for /api/contact endpoint"""
    
    def test_submit_contact_message(self):
        """Test contact form submission"""
        payload = {
            "name": "TEST_Contact User",
            "email": "test_contact@example.com",
            "phone": "555-123-4567",
            "message": "This is a test contact message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["success"] is True
        assert "id" in data
        assert data["message"] == "Contact message sent successfully"
    
    def test_contact_without_phone(self):
        """Test contact form submission without optional phone"""
        payload = {
            "name": "TEST_No Phone User",
            "email": "test_nophone@example.com",
            "message": "Test message without phone"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["success"] is True
    
    def test_contact_invalid_email(self):
        """Test contact form with invalid email"""
        payload = {
            "name": "TEST_Invalid Email",
            "email": "not-an-email",
            "message": "Test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422  # Validation error
    
    def test_contact_missing_required_fields(self):
        """Test contact form with missing required fields"""
        payload = {
            "name": "TEST_Missing Fields"
            # Missing email and message
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422


class TestQuoteRequestEndpoint:
    """Tests for /api/quote-request endpoint"""
    
    def test_submit_quote_request(self):
        """Test quote request submission"""
        payload = {
            "name": "TEST_Quote User",
            "email": "test_quote@example.com",
            "phone": "555-987-6543",
            "service_type": "airport",
            "pickup_location": "BWI Airport",
            "dropoff_location": "Columbia, MD",
            "date": "2026-02-15",
            "message": "Need airport pickup"
        }
        response = requests.post(f"{BASE_URL}/api/quote-request", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "TEST_Quote User"
        assert data["email"] == "test_quote@example.com"
        assert data["service_type"] == "airport"
        assert data["status"] == "pending"
        assert "id" in data
        assert "created_at" in data
    
    def test_quote_request_minimal_fields(self):
        """Test quote request with only required fields"""
        payload = {
            "name": "TEST_Minimal Quote",
            "email": "test_minimal@example.com",
            "phone": "555-111-2222",
            "service_type": "wedding"
        }
        response = requests.post(f"{BASE_URL}/api/quote-request", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "TEST_Minimal Quote"
        assert data["service_type"] == "wedding"
    
    def test_get_quote_requests(self):
        """Test getting all quote requests"""
        response = requests.get(f"{BASE_URL}/api/quote-requests")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
    
    def test_quote_request_invalid_email(self):
        """Test quote request with invalid email"""
        payload = {
            "name": "TEST_Invalid",
            "email": "invalid-email",
            "phone": "555-000-0000",
            "service_type": "corporate"
        }
        response = requests.post(f"{BASE_URL}/api/quote-request", json=payload)
        assert response.status_code == 422


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
