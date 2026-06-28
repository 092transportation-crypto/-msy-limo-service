import { motion } from "framer-motion";
import { Users, Briefcase, Star } from "lucide-react";
import { Link } from "react-router-dom";

const fleet = [
  {
    id: 1,
    name: "Mercedes E-Class",
    image: "https://92limo.com/wp-content/uploads/2025/06/mercedes-e-class-removebg-preview-300x138.png",
    passengers: 3,
    luggage: 2,
    category: "Business Class",
    features: ["Leather Interior", "WiFi", "Climate Control", "Professional"]
  },
  {
    id: 2,
    name: "Mercedes S-Class",
    image: "https://92limo.com/wp-content/uploads/2025/06/mercedes-s-class-300x186.png",
    passengers: 3,
    luggage: 2,
    category: "First Class",
    features: ["Premium Leather", "Massage Seats", "Privacy Glass", "Mini Bar"]
  },
  {
    id: 3,
    name: "Cadillac Escalade",
    image: "https://92limo.com/wp-content/uploads/2025/06/cadillac-escalade-300x169.png",
    passengers: 5,
    luggage: 5,
    category: "Premium SUV",
    features: ["Spacious", "Premium Sound", "TV Screens", "USB Charging"]
  },
  {
    id: 4,
    name: "Mercedes Sprinter",
    image: "https://92limo.com/wp-content/uploads/2025/06/mercedes-sprinter-300x200.png",
    passengers: 13,
    luggage: 12,
    category: "Sprinter Van",
    features: ["Group Travel", "Conference Setup", "WiFi", "USB Ports"]
  }
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24 bg-black relative overflow-hidden" data-testid="fleet-section">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Your Journey, Our Fleet</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-white">Luxury </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Vehicles</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Choose from our meticulously maintained fleet of premium vehicles</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((vehicle) => (
            <div key={vehicle.id} className="bg-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl overflow-hidden group hover:border-amber-500/50 transition-all">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
                <img src={vehicle.image} alt={`${vehicle.name} luxury limo New Orleans`} className="w-full h-full object-contain" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold rounded-lg">{vehicle.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{vehicle.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span className="flex items-center gap-1"><Users className="w-4 h-4 text-amber-400" />{vehicle.passengers} Pax</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-amber-400" />{vehicle.luggage} Bags</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.slice(0, 2).map((feature) => (
                    <span key={feature} className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded text-xs text-white/70">{feature}</span>
                  ))}
                </div>
                <Link to="/contact" className="block w-full text-center py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all">
                  Book This Vehicle
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/fleet" className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition-all">
            View Full Fleet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
