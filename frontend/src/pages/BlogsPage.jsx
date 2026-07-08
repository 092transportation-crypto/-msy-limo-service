import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DOMPurify from "dompurify";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, User, Tag, Share2, Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { toast } from "sonner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Social Share Buttons Component
const ShareButtons = ({ title, slug }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://msylimoservice.com/blog";
  const shareText = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-amber-500/10">
      <span className="text-white/40 text-xs">Share:</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 bg-[#1877F2] rounded-md flex items-center justify-center hover:opacity-80"
      >
        <Facebook className="w-3.5 h-3.5 text-white" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 bg-black border border-white/20 rounded-md flex items-center justify-center hover:opacity-80"
      >
        <Twitter className="w-3.5 h-3.5 text-white" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 bg-[#0A66C2] rounded-md flex items-center justify-center hover:opacity-80"
      >
        <Linkedin className="w-3.5 h-3.5 text-white" />
      </a>
      <button
        onClick={copyToClipboard}
        className={`w-7 h-7 rounded-md flex items-center justify-center ${copied ? "bg-green-500" : "bg-amber-500/20 hover:bg-amber-500/30"}`}
      >
        {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Link2 className="w-3.5 h-3.5 text-amber-400" />}
      </button>
    </div>
  );
};

const blogPosts = [
  {
    id: 1,
    slug: "ultimate-guide-msy-airport-transportation",
    title: "The Ultimate Guide to MSY Airport Transportation in 2026",
    excerpt: "Everything you need to know about getting to and from Louis Armstrong New Orleans International Airport in style. From flight tracking to luggage assistance, discover why luxury limo service is the best choice.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    category: "Airport",
    author: "MSY Limo Team",
    date: "February 15, 2026",
    readTime: "8 min read",
    featured: true,
    content: `
      <h2>Why Choose Professional Airport Transportation?</h2>
      <p>Traveling can be stressful, but your ride to the airport doesn't have to be. Louis Armstrong New Orleans International Airport (MSY) serves millions of passengers each year, and getting there on time is crucial for a smooth travel experience.</p>
      
      <h3>Benefits of Luxury Airport Limo Service</h3>
      <ul>
        <li><strong>Flight Tracking:</strong> Our chauffeurs monitor your flight in real-time, adjusting pickup times for delays or early arrivals.</li>
        <li><strong>No Parking Hassles:</strong> Skip the expensive airport parking fees and the long walk from the parking garage.</li>
        <li><strong>Door-to-Door Service:</strong> We pick you up from your home, hotel, or office and drop you right at the terminal.</li>
        <li><strong>Luggage Assistance:</strong> Our professional chauffeurs help with your bags, making your journey effortless.</li>
      </ul>
      
      <h3>MSY Airport Tips</h3>
      <p>Louis Armstrong International Airport has undergone significant renovations, with a new terminal that opened in 2019. Here are some insider tips:</p>
      <ul>
        <li>Arrive at least 2 hours before domestic flights and 3 hours for international.</li>
        <li>The new terminal has excellent dining options, so don't rush your meal before arriving.</li>
        <li>TSA PreCheck and Clear lanes can significantly reduce wait times.</li>
      </ul>
      
      <h3>Booking Your Airport Transfer</h3>
      <p>When you book with MSY Limo Service, you're guaranteed:</p>
      <ul>
        <li>60-minute complimentary wait time for domestic arrivals</li>
        <li>90-minute complimentary wait time for international arrivals</li>
        <li>Meet and greet service available at baggage claim</li>
        <li>Child car seats upon request</li>
      </ul>
    `
  },
  {
    id: 2,
    slug: "top-10-reasons-hire-wedding-limo-new-orleans",
    title: "Top 10 Reasons to Hire a Wedding Limo in New Orleans",
    excerpt: "Your wedding day deserves the best. Discover why couples across Louisiana choose professional limo service for their special day and how it can make your celebration unforgettable.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    category: "Weddings",
    author: "MSY Limo Team",
    date: "February 12, 2026",
    readTime: "6 min read",
    featured: true,
    content: `
      <h2>Make Your Wedding Day Magical</h2>
      <p>New Orleans is one of the most romantic cities in America, and your wedding transportation should match the magic of the Big Easy.</p>
      
      <h3>Top 10 Reasons to Hire a Wedding Limo</h3>
      <ol>
        <li><strong>Grand Entrance:</strong> Arrive at your venue in style and make a statement.</li>
        <li><strong>Stress-Free Travel:</strong> Let a professional handle the driving while you enjoy your day.</li>
        <li><strong>Photo Opportunities:</strong> Luxury vehicles make for stunning wedding photos.</li>
        <li><strong>Keep the Party Together:</strong> Transport your wedding party safely between venues.</li>
        <li><strong>Champagne Toast:</strong> Celebrate with your spouse in the privacy of your limo.</li>
        <li><strong>On-Time Arrivals:</strong> Professional chauffeurs ensure you're never late.</li>
        <li><strong>VIP Treatment:</strong> Red carpet service for the bride and groom.</li>
        <li><strong>Safe Transportation:</strong> After the reception, get home safely.</li>
        <li><strong>Memorable Experience:</strong> Create lasting memories of your special day.</li>
        <li><strong>Coordinate with Your Theme:</strong> Choose vehicles that match your wedding colors.</li>
      </ol>
      
      <h3>Popular Wedding Venues We Serve</h3>
      <p>MSY Limo provides wedding transportation to all New Orleans venues, including:</p>
      <ul>
        <li>The Roosevelt New Orleans</li>
        <li>Race & Religious</li>
        <li>The Columns Hotel</li>
        <li>Audubon Tea Room</li>
        <li>The Presbytère</li>
        <li>Felicity Church</li>
      </ul>
    `
  },
  {
    id: 3,
    slug: "saints-game-day-transportation-guide",
    title: "Your Complete Guide to Saints Game Day Transportation",
    excerpt: "Who Dat Nation! Learn how to get to the Caesars Superdome stress-free. Skip the parking nightmare and arrive at the game ready to cheer for the black and gold.",
    image: "https://images.unsplash.com/photo-1706092647576-8c4ce0229954?auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    author: "MSY Limo Team",
    date: "February 10, 2026",
    readTime: "7 min read",
    featured: false,
    content: `
      <h2>Game Day in the Big Easy</h2>
      <p>There's nothing quite like a Saints game at the Caesars Superdome. The energy, the noise, the passion of Who Dat Nation – it's an experience every football fan should have. But getting there? That can be the challenging part.</p>
      
      <h3>The Parking Problem</h3>
      <p>Parking near the Superdome on game day is expensive (often $40-$100) and the traffic can add an hour to your journey. Many fans spend more time finding parking than watching the pregame warmups.</p>
      
      <h3>The Limo Solution</h3>
      <p>With MSY Limo Service, you get:</p>
      <ul>
        <li>Door-to-door service from anywhere in Greater New Orleans</li>
        <li>Drop-off right at the Superdome entrance</li>
        <li>No parking fees or long walks</li>
        <li>Post-game pickup when the crowds have cleared</li>
        <li>Safe transportation if you've been celebrating</li>
      </ul>
      
      <h3>Tailgate Transportation</h3>
      <p>Planning a tailgate? We can drop your group at Champions Square or your preferred tailgate location hours before kickoff, then pick you up after the game.</p>
      
      <h3>Corporate Entertainment</h3>
      <p>Taking clients to a Saints game? Impress them with luxury transportation that shows you mean business – even when you're having fun.</p>
    `
  },
  {
    id: 4,
    slug: "cruise-port-new-orleans-everything-you-need-know",
    title: "Cruise Port New Orleans: Everything You Need to Know",
    excerpt: "Planning a cruise from New Orleans? From the Julia Street Terminal to Caribbean destinations, here's your complete guide to cruise port transportation.",
    image: "https://images.unsplash.com/photo-1710615209322-77731e33d4a6?auto=format&fit=crop&w=800&q=80",
    category: "Cruise",
    author: "MSY Limo Team",
    date: "February 8, 2026",
    readTime: "9 min read",
    featured: false,
    content: `
      <h2>New Orleans: Gateway to the Caribbean</h2>
      <p>The Port of New Orleans is one of the busiest cruise ports in the Gulf of Mexico, offering year-round sailings to Mexico, the Caribbean, and beyond. Starting your vacation with stress-free transportation sets the tone for an amazing trip.</p>
      
      <h3>About the Julia Street Terminal</h3>
      <p>The Julia Street Cruise Terminal, also known as the Erato Street Cruise Terminal, is conveniently located in downtown New Orleans along the Mississippi River. Major cruise lines including Carnival, Norwegian, and Disney operate from this terminal.</p>
      
      <h3>Getting to the Port</h3>
      <p>The cruise terminal is about:</p>
      <ul>
        <li>20-30 minutes from MSY Airport</li>
        <li>5-10 minutes from the French Quarter</li>
        <li>15-20 minutes from Metairie</li>
        <li>25-35 minutes from Kenner</li>
      </ul>
      
      <h3>Why Book a Port Transfer?</h3>
      <p>Start your vacation the moment you leave home:</p>
      <ul>
        <li>No fighting for parking at the port</li>
        <li>Luggage assistance included</li>
        <li>Direct drop-off at the terminal entrance</li>
        <li>Stress-free experience before your cruise</li>
      </ul>
      
      <h3>Pre-Cruise New Orleans Experience</h3>
      <p>Arriving a day early? We offer city tours so you can experience the best of New Orleans before setting sail. Visit the French Quarter, sample beignets at Café Du Monde, and explore the Garden District.</p>
    `
  },
  {
    id: 5,
    slug: "corporate-transportation-new-orleans-business-travel",
    title: "Corporate Transportation in New Orleans: A Business Travel Guide",
    excerpt: "Make the right impression with executive transportation. Learn how professional car service can enhance your business meetings and corporate events in the Big Easy.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
    category: "Corporate",
    author: "MSY Limo Team",
    date: "February 5, 2026",
    readTime: "6 min read",
    featured: false,
    content: `
      <h2>First Impressions Matter</h2>
      <p>In business, how you arrive says a lot about your company. Whether you're meeting a client, attending a conference, or hosting executives, professional transportation demonstrates attention to detail and respect for your guests.</p>
      
      <h3>Corporate Transportation Services</h3>
      <ul>
        <li><strong>Executive Sedans:</strong> Perfect for individual business travelers</li>
        <li><strong>Luxury SUVs:</strong> Ideal for small groups or executives with luggage</li>
        <li><strong>Sprinter Vans:</strong> Great for team transportation to conferences</li>
        <li><strong>Roadshows:</strong> Multi-stop itineraries for investor meetings</li>
      </ul>
      
      <h3>Popular Business Destinations</h3>
      <p>We provide corporate transportation throughout New Orleans:</p>
      <ul>
        <li>Ernest N. Morial Convention Center</li>
        <li>New Orleans Downtown Business District</li>
        <li>Warehouse District offices</li>
        <li>Corporate headquarters in Metairie</li>
        <li>Business hotels throughout the city</li>
      </ul>
      
      <h3>Corporate Accounts</h3>
      <p>Set up a corporate account for simplified booking, consolidated billing, and priority service. Your administrative team will love the easy expense reporting.</p>
    `
  },
  {
    id: 6,
    slug: "french-quarter-nightlife-safe-transportation",
    title: "French Quarter Nightlife: How to Get Home Safely",
    excerpt: "Bourbon Street calls! But after a night of jazz, cocktails, and celebration, getting home safely is essential. Here's your guide to responsible nightlife transportation.",
    image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=800&q=80",
    category: "Nightlife",
    author: "MSY Limo Team",
    date: "February 3, 2026",
    readTime: "5 min read",
    featured: false,
    content: `
      <h2>Experience the Best of NOLA Nightlife</h2>
      <p>New Orleans is famous for its nightlife. From the live jazz on Frenchmen Street to the party atmosphere of Bourbon Street, the city truly comes alive after dark. But with great nightlife comes great responsibility – getting home safely.</p>
      
      <h3>Why Professional Transportation?</h3>
      <p>After enjoying New Orleans' famous cocktails and hospitality:</p>
      <ul>
        <li>Never drink and drive – it's not worth the risk</li>
        <li>Skip the surge pricing of rideshare apps at 2 AM</li>
        <li>Have a reliable pickup time and location</li>
        <li>Travel in comfort and safety</li>
      </ul>
      
      <h3>Popular Nightlife Destinations</h3>
      <ul>
        <li>Bourbon Street</li>
        <li>Frenchmen Street</li>
        <li>Magazine Street bars</li>
        <li>Warehouse District clubs</li>
        <li>Harrah's Casino</li>
      </ul>
      
      <h3>Bachelor & Bachelorette Parties</h3>
      <p>Planning a celebration? We offer group transportation packages that keep your party together and safe throughout the night. Multiple pickups and drop-offs? No problem.</p>
    `
  },
  {
    id: 7,
    slug: "mardi-gras-transportation-survival-guide",
    title: "Mardi Gras Transportation: Your Survival Guide",
    excerpt: "Laissez les bons temps rouler! Mardi Gras is the ultimate New Orleans experience, but navigating the city during Carnival season requires planning. Here's how to do it right.",
    image: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?auto=format&fit=crop&w=800&q=80",
    category: "Events",
    author: "MSY Limo Team",
    date: "January 30, 2026",
    readTime: "8 min read",
    featured: true,
    content: `
      <h2>The Ultimate Mardi Gras Experience</h2>
      <p>Mardi Gras in New Orleans is unlike any celebration in the world. Millions of visitors descend on the city for parades, balls, and festivities. Getting around during this time requires expert navigation.</p>
      
      <h3>Mardi Gras Transportation Challenges</h3>
      <ul>
        <li>Street closures for parade routes</li>
        <li>Massive crowds in the French Quarter</li>
        <li>Limited parking availability</li>
        <li>Surge pricing on rideshare apps</li>
        <li>Public transportation delays</li>
      </ul>
      
      <h3>Why Book a Limo for Mardi Gras?</h3>
      <p>Professional chauffeurs who know the city can:</p>
      <ul>
        <li>Navigate around parade routes efficiently</li>
        <li>Find the best drop-off and pickup locations</li>
        <li>Get you to your destination on time</li>
        <li>Provide a comfortable retreat from the crowds</li>
      </ul>
      
      <h3>Popular Mardi Gras Destinations</h3>
      <ul>
        <li>St. Charles Avenue parade route</li>
        <li>French Quarter</li>
        <li>Magazine Street</li>
        <li>Krewe balls and parties</li>
        <li>Private events and galas</li>
      </ul>
      
      <h3>Book Early!</h3>
      <p>Mardi Gras is our busiest time of year. Book your transportation weeks in advance to ensure availability.</p>
    `
  },
  {
    id: 8,
    slug: "jazz-fest-transportation-tips",
    title: "Jazz Fest Transportation Tips: Getting to the Fair Grounds",
    excerpt: "Jazz Fest is a New Orleans tradition. With hundreds of thousands of music lovers converging on the Fair Grounds, smart transportation planning is essential.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    category: "Events",
    author: "MSY Limo Team",
    date: "January 25, 2026",
    readTime: "6 min read",
    featured: false,
    content: `
      <h2>New Orleans Jazz & Heritage Festival</h2>
      <p>Every spring, the New Orleans Jazz & Heritage Festival brings world-class music, incredible food, and Louisiana culture to the Fair Grounds Race Course. Getting there and back is half the battle.</p>
      
      <h3>Fair Grounds Location</h3>
      <p>The Fair Grounds is located in the Gentilly neighborhood, about 15-20 minutes from downtown New Orleans. During Jazz Fest, traffic in the area is intense.</p>
      
      <h3>Transportation Options</h3>
      <ul>
        <li><strong>Professional Car Service:</strong> Door-to-door, no parking worries</li>
        <li><strong>Public Shuttles:</strong> Crowded but functional</li>
        <li><strong>Rideshare:</strong> Expensive during peak times</li>
        <li><strong>Biking:</strong> Good option if you're staying nearby</li>
      </ul>
      
      <h3>Why Choose MSY Limo for Jazz Fest?</h3>
      <ul>
        <li>Drop-off near the gates</li>
        <li>Scheduled pickup when you're ready to leave</li>
        <li>Avoid the parking lot madness</li>
        <li>Arrive refreshed and ready for music</li>
        <li>Air-conditioned comfort after a hot day</li>
      </ul>
      
      <h3>Multi-Day Packages</h3>
      <p>Attending multiple days of Jazz Fest? Ask about our multi-day packages for discounted rates.</p>
    `
  },
  {
    id: 9,
    slug: "luxury-fleet-guide-which-vehicle-right-for-you",
    title: "Luxury Fleet Guide: Which Vehicle is Right for You?",
    excerpt: "From executive sedans to spacious SUVs, choosing the right vehicle for your needs matters. Here's our complete guide to our luxury fleet.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    category: "Fleet",
    author: "MSY Limo Team",
    date: "January 20, 2026",
    readTime: "7 min read",
    featured: false,
    content: `
      <h2>Choosing Your Perfect Ride</h2>
      <p>Different occasions call for different vehicles. Whether you're traveling solo to a business meeting or transporting a wedding party, we have the perfect option for you.</p>
      
      <h3>Executive Sedans</h3>
      <p><strong>Best for:</strong> Business travel, airport transfers, couples</p>
      <ul>
        <li>Seats up to 3 passengers comfortably</li>
        <li>Ample trunk space for luggage</li>
        <li>Professional, understated elegance</li>
        <li>Leather interior, climate control</li>
      </ul>
      
      <h3>Luxury SUVs</h3>
      <p><strong>Best for:</strong> Families, groups, executives with luggage</p>
      <ul>
        <li>Seats up to 6 passengers</li>
        <li>Extra cargo space for golf clubs, luggage</li>
        <li>Higher seating position, great views</li>
        <li>Perfect for airport runs with multiple bags</li>
      </ul>
      
      <h3>Stretch Limousines</h3>
      <p><strong>Best for:</strong> Weddings, proms, special celebrations</p>
      <ul>
        <li>Seats up to 10 passengers</li>
        <li>Bar area for champagne service</li>
        <li>Mood lighting and entertainment</li>
        <li>Maximum wow factor</li>
      </ul>
      
      <h3>Sprinter Vans</h3>
      <p><strong>Best for:</strong> Large groups, corporate teams, wine tours</p>
      <ul>
        <li>Seats up to 14 passengers</li>
        <li>Executive seating configuration</li>
        <li>Great for team building events</li>
        <li>Cost-effective for groups</li>
      </ul>
    `
  },
  {
    id: 10,
    slug: "new-orleans-best-kept-secrets-locals-guide",
    title: "New Orleans' Best Kept Secrets: A Local's Guide",
    excerpt: "Beyond Bourbon Street lies the real New Orleans. Discover the hidden gems that locals love and how to explore them with a private chauffeur.",
    image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=800&q=80",
    category: "Travel",
    author: "MSY Limo Team",
    date: "January 15, 2026",
    readTime: "10 min read",
    featured: false,
    content: `
      <h2>The Real New Orleans</h2>
      <p>While the French Quarter is iconic, New Orleans has so much more to offer. Our chauffeurs know the city inside and out, and we love sharing our favorite spots with visitors.</p>
      
      <h3>Magazine Street</h3>
      <p>Six miles of boutiques, galleries, restaurants, and cafes. This is where locals shop and dine. Start at Audubon Park and work your way toward the Quarter.</p>
      
      <h3>Garden District</h3>
      <p>Stunning antebellum mansions, oak-lined streets, and Lafayette Cemetery No. 1. A walking tour here is like stepping back in time.</p>
      
      <h3>Frenchmen Street</h3>
      <p>Skip Bourbon Street and head to Frenchmen for authentic live music. This is where New Orleans musicians play for New Orleans people.</p>
      
      <h3>Bywater & Marigny</h3>
      <p>Colorful shotgun houses, quirky art galleries, and some of the city's best restaurants. Don't miss Bacchanal Wine for sunset.</p>
      
      <h3>City Park</h3>
      <p>1,300 acres of green space, the New Orleans Museum of Art, and the magical Storyland sculpture garden. Perfect for a morning stroll.</p>
      
      <h3>Custom Tours</h3>
      <p>Want to explore New Orleans your way? We offer custom tours with knowledgeable chauffeurs who can create an itinerary based on your interests.</p>
    `
  },
  {
    id: 11,
    slug: "business-etiquette-car-service",
    title: "Business Etiquette: Making the Most of Your Car Service",
    excerpt: "Professional transportation is about more than just getting from A to B. Learn the unwritten rules of business travel etiquette.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
    category: "Corporate",
    author: "MSY Limo Team",
    date: "January 10, 2026",
    readTime: "5 min read",
    featured: false,
    content: `
      <h2>The Art of Professional Travel</h2>
      <p>Whether you're hosting a client or being transported yourself, there's an etiquette to professional car service that sets the tone for successful business relationships.</p>
      
      <h3>When Hosting Clients</h3>
      <ul>
        <li>Book in advance and share trip details with your guest</li>
        <li>Let them sit in the seat of honor (rear right)</li>
        <li>Ensure the vehicle is appropriate for the occasion</li>
        <li>Have water and reading materials available</li>
      </ul>
      
      <h3>When Being Transported</h3>
      <ul>
        <li>Be ready at your scheduled pickup time</li>
        <li>Communicate any changes promptly</li>
        <li>Respect the vehicle – no smoking, excessive mess</li>
        <li>Tip your chauffeur for excellent service</li>
      </ul>
      
      <h3>Mobile Office Tips</h3>
      <p>Use your travel time productively:</p>
      <ul>
        <li>Review meeting notes</li>
        <li>Make phone calls (hands-free)</li>
        <li>Respond to emails</li>
        <li>Decompress before important meetings</li>
      </ul>
    `
  },
  {
    id: 12,
    slug: "planning-perfect-date-night-new-orleans",
    title: "Planning the Perfect Date Night in New Orleans",
    excerpt: "Romance is in the air in the Big Easy. From fine dining to live jazz, here's how to plan an unforgettable date night with luxury transportation.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    category: "Romance",
    author: "MSY Limo Team",
    date: "January 5, 2026",
    readTime: "6 min read",
    featured: false,
    content: `
      <h2>Romance in the Crescent City</h2>
      <p>New Orleans is one of the most romantic cities in America. The architecture, the music, the food – everything here is designed for falling in love. Make your date night extra special with luxury transportation.</p>
      
      <h3>The Perfect Evening Itinerary</h3>
      <ol>
        <li><strong>6:00 PM:</strong> Pickup from your home or hotel</li>
        <li><strong>6:30 PM:</strong> Cocktails at the Sazerac Bar</li>
        <li><strong>7:30 PM:</strong> Dinner at Commander's Palace</li>
        <li><strong>9:30 PM:</strong> Live jazz on Frenchmen Street</li>
        <li><strong>11:30 PM:</strong> Nightcap and beignets at Café Du Monde</li>
        <li><strong>12:30 AM:</strong> Private drive home</li>
      </ol>
      
      <h3>Why a Private Car?</h3>
      <ul>
        <li>No worrying about parking or driving</li>
        <li>Enjoy drinks throughout the evening</li>
        <li>Romantic atmosphere in the vehicle</li>
        <li>Arrive at each destination in style</li>
        <li>Focus entirely on each other</li>
      </ul>
      
      <h3>Special Touches</h3>
      <p>Let us know if you're celebrating something special – we can arrange champagne, flowers, or other romantic touches in the vehicle.</p>
    `
  }
];

const categories = ["All", "Airport", "Weddings", "Sports", "Cruise", "Corporate", "Nightlife", "Events", "Fleet", "Travel", "Romance"];

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-amber-400 text-sm tracking-wider mb-4">MSY LIMO BLOG</p>
            <h1 
              className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Travel Tips & Local Insights
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Your guide to luxury transportation, New Orleans travel, and making the most of every journey in the Big Easy.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-amber-500 text-black"
                    : "bg-gray-800 text-white/70 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && (
        <section className="py-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-medium mb-8 text-amber-400"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Featured Articles
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {featuredPosts.slice(0, 3).map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-black border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-500/40 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full">{post.category}</span>
                      <span className="text-white/40 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-white/60 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <button 
                      onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                      className="text-amber-400 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      {expandedPost === post.id ? "Close" : "Read More"} <ArrowRight className="w-4 h-4" />
                    </button>
                    <ShareButtons title={post.title} slug={post.slug} />
                  </div>
                  {expandedPost === post.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      <div 
                        className="prose prose-invert prose-amber prose-sm max-w-none text-white/70"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                      />
                    </motion.div>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-medium mb-8 text-amber-400"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 border border-amber-500/10 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-white/60 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                  <button 
                    onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                    className="text-amber-400 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {expandedPost === post.id ? "Close Article" : "Read Full Article"} <ArrowRight className="w-4 h-4" />
                  </button>
                  <ShareButtons title={post.title} slug={post.slug} />
                </div>
                {expandedPost === post.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-amber-500/10 pt-4"
                  >
                    <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div 
                      className="prose prose-invert prose-amber prose-sm max-w-none text-white/70
                        [&_h2]:text-amber-400 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:mb-3
                        [&_h3]:text-white [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2
                        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
                        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1
                        [&_li]:text-white/70
                        [&_strong]:text-amber-400
                        [&_p]:mb-3"
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                    />
                  </motion.div>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-medium mb-4 text-black" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Experience Luxury Transportation?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black/70 mb-8"
          >
            Book your ride today and discover why MSY Limo Service is New Orleans' premier transportation choice.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="bg-black text-amber-400 px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors inline-block">
                Book Your Ride
              </Link>
            </motion.div>
            <motion.a 
              href="tel:+18776091919" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-amber-400 transition-colors inline-block"
            >
              Call (877) 609-1919
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default BlogsPage;
