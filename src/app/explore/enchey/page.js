"use client";

import React from 'react';
import { MapPin, Building, Utensils, Hotel, Mountain, Sun, Menu, X, Clock, Calendar } from 'lucide-react';
import EncheyMap from './map/encheyMap';

// Mock data for Enchey Monastery and local attractions
const encheyMonastery = {
    name: "Enchey Monastery",
    location: "Gangtok, Sikkim",
    established: "1909 (Current structure)",
    details: "Perched majestically on a ridge above Gangtok, the Enchey Monastery is a crucial seat of the Nyingma order of Tibetan Buddhism. The name 'Enchey' translates to the 'Solitary Temple,' referencing the 18th-century hermitage built by Lama Druptob Karpo. The site is revered for its peaceful ambiance, ancient murals, and collection of religious artifacts. It plays a central role in the annual 'Chaam' (masked dance) festivals, drawing pilgrims and tourists alike.",
    bannerUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Close_view_of_Enchey_Gompa_in_Gangtok.jpg/1280px-Close_view_of_Enchey_Gompa_in_Gangtok.jpg",
    amenities: [
        { type: 'Food', name: 'Taste of Sikkim', description: 'Authentic Sikkimese Thali and local dishes.', icon: Utensils, coords: { lat: 27.33, lng: 88.62 } },
        { type: 'Hotel', name: 'Hotel Dewdrop Inn', description: 'Budget-friendly comfort near the main town.', icon: Hotel, coords: { lat: 27.32, lng: 88.61 } },
        { type: 'Restaurant', name: 'The Roll House', description: 'Famous for hot momos, thukpa, and fast snacks.', icon: Utensils, coords: { lat: 27.31, lng: 88.60 } },
        { type: 'Cafe', name: 'Local Brew Coffee', description: 'Cozy spot for a warm drink with mountain views.', icon: Utensils, coords: { lat: 27.30, lng: 88.63 } },
    ],
    touristicPlaces: [
        { name: 'Tsomgo Lake', distance: '35 km', type: 'High Altitude Lake', icon: Mountain },
        { name: 'Ganesh Tok', distance: '3 km', type: 'Temple & Viewpoint', icon: Sun },
        { name: 'Hanuman Tok', distance: '7 km', type: 'Temple & Panoramic View', icon: Sun },
    ],
};

// Component to render individual amenity cards
const AmenityCard = ({ amenity }) => {
    const Icon = amenity.icon;
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-emerald-600" />
                <h4 className="font-semibold text-lg text-slate-800">{amenity.name}</h4>
            </div>
            <p className="text-sm text-slate-600 mt-2">{amenity.description}</p>
            <div className="flex items-center text-xs text-slate-400 mt-2">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Lat: {amenity.coords.lat}, Lng: {amenity.coords.lng}</span>
            </div>
        </div>
    );
};

// Component to render individual touristic place cards
const TouristicPlaceCard = ({ place }) => {
    const Icon = place.icon;
    return (
        <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-800">{place.name}</h4>
                <Icon className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-sm text-slate-600 mt-1">{place.type}</p>
            <div className="text-xs text-emerald-700 font-medium mt-2">
                {place.distance} away
            </div>
        </div>
    );
};


const EncheyMonasteryPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    // Filter amenities by type for display
    const foodAndRestaurants = encheyMonastery.amenities.filter(a => a.type === 'Food' || a.type === 'Restaurant' || a.type === 'Cafe');
    const hotelsAndStays = encheyMonastery.amenities.filter(a => a.type === 'Hotel');


    return (
        <main className="min-h-screen bg-white text-slate-900 font-inter">
            
            {/* HEADER */}
            <header className="border-b sticky top-0 bg-white z-10 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-lg sm:text-xl font-bold tracking-tight text-emerald-700">
                        {encheyMonastery.name}
                    </h1>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a className="hover:text-emerald-600 font-medium" href='/'>Home</a> {/* Added Home Link */}
                        <a className="hover:text-emerald-600 font-medium" href='/explore'>Explore</a> {/* Added Explore Link */}
                        <a className="hover:text-emerald-600 font-medium" href='#details'>Details</a>
                        <a className="hover:text-emerald-600 font-medium" href='#amenities'>Amenities</a>
                        <a className="hover:text-emerald-600 font-medium" href='#attractions'>Attractions</a>
                        <button className="bg-emerald-600 text-white rounded-full px-4 py-2 text-xs font-semibold hover:bg-emerald-700 shadow-md transition">Plan Visit</button>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 rounded hover:bg-slate-100"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t bg-white">
                        <nav className="flex flex-col gap-3 px-4 py-4 text-sm">
                            <a className="hover:text-emerald-600 font-medium" onClick={() => setMobileMenuOpen(false)} href='/'>Home</a> {/* Added Home Link */}
                            <a className="hover:text-emerald-600 font-medium" onClick={() => setMobileMenuOpen(false)} href='/explore'>Explore</a> {/* Added Explore Link */}
                            <a className="hover:text-emerald-600" onClick={() => setMobileMenuOpen(false)} href='#details'>Details</a>
                            <a className="hover:text-emerald-600" onClick={() => setMobileMenuOpen(false)} href='#amenities'>Amenities</a>
                            <a className="hover:text-emerald-600" onClick={() => setMobileMenuOpen(false)} href='#attractions'>Attractions</a>
                            <button className="mt-2 bg-emerald-600 text-white rounded-full px-4 py-2 text-xs font-semibold w-max">Plan Visit</button>
                        </nav>
                    </div>
                )}
            </header>

            {/* BANNER IMAGE & HERO */}
            <section className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={encheyMonastery.bannerUrl}
                    alt={`${encheyMonastery.name} exterior view`}
                    className="w-full h-full object-cover transition-transform duration-500"
                    // Fallback using onerror
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/1200x500/10B981/ffffff?text=Enchey+Monastery+Banner"
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="max-w-6xl mx-auto px-4 pb-6 w-full">
                        <h2 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
                            {encheyMonastery.name}
                        </h2>
                        <p className="text-emerald-100 text-lg mt-1 flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {encheyMonastery.location}
                        </p>
                    </div>
                </div>
            </section>

            {/* MONASTERY DETAILS */}
            <section id="details" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Key Info Card */}
                    <div className="md:col-span-1 bg-emerald-50 rounded-2xl p-6 shadow-lg border border-emerald-100">
                        <h3 className="text-xl font-bold text-emerald-800 mb-4">Key Information</h3>
                        <div className="space-y-3">
                            <div className="flex items-center text-slate-700">
                                <Building className="w-5 h-5 mr-3 text-emerald-600" />
                                <div>
                                    <span className="font-medium block">Established:</span>
                                    {encheyMonastery.established}
                                </div>
                            </div>
                            <div className="flex items-center text-slate-700">
                                <Clock className="w-5 h-5 mr-3 text-emerald-600" />
                                <div>
                                    <span className="font-medium block">Best Time to Visit:</span>
                                    October - May
                                </div>
                            </div>
                            <div className="flex items-center text-slate-700">
                                <Calendar className="w-5 h-5 mr-3 text-emerald-600" />
                                <div>
                                    <span className="font-medium block">Annual Festivals:</span>
                                    Detor Chaam (Jan/Feb), Kagyed Dance
                                </div>
                            </div>
                        </div>
                        <a href="#" className="mt-6 block text-center bg-emerald-600 text-white py-2 rounded-full hover:bg-emerald-700 transition">
                            See Gallery & History
                        </a>
                    </div>
                    
                    {/* Description */}
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-bold mb-4">The Solitary Temple</h3>
                        <p className="text-slate-700 leading-relaxed">{encheyMonastery.details}</p>
                        <div className="mt-6 p-4 border-l-4 border-amber-500 bg-amber-50 rounded-md">
                            <p className="font-semibold text-amber-800">Note:</p>
                            <p className="text-sm text-amber-700">Photography is often restricted inside the main prayer hall. Please respect local customs.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* LOCAL AMENITIES (MAP CONCEPT) */}
            <section id="amenities" className="bg-slate-50 py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-3xl font-bold mb-8 text-center">Local Amenities & Services</h3>
                    
                    {/* Conceptual Map Placeholder */}
                    <div className="rounded-2xl border border-slate-200 overflow-hidden mb-10">
  <EncheyMap
    center={[27.331, 88.616]}   // center on Enchey Monastery
    zoom={15}
    height="h-[400px]"          // taller map height
    amenities={encheyMonastery.amenities.map(a => ({
      id: a.name,
      type: a.type.toLowerCase(),    // e.g. 'food', 'hotel', 'cafe'
      name: a.name,
      lat: a.coords.lat,
      lng: a.coords.lng,
      desc: a.description
    }))}
    sites={[{
      id: 'enchey',
      type: 'temple',
      name: encheyMonastery.name,
      lat: 27.3310,
      lng: 88.6166,
      desc: encheyMonastery.details,
      img: encheyMonastery.bannerUrl
    }]}
  />
</div>


                    {/* Hotel Section */}
                    <h4 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                        <Hotel className="w-6 h-6 mr-2 text-emerald-600"/>
                        Hotels & Stays Nearby
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {hotelsAndStays.map((a, index) => (
                            <AmenityCard key={index} amenity={a} />
                        ))}
                    </div>

                    {/* Food & Restaurant Section */}
                    <h4 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                        <Utensils className="w-6 h-6 mr-2 text-emerald-600"/>
                        Local Food & Restaurants
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {foodAndRestaurants.map((a, index) => (
                            <AmenityCard key={index} amenity={a} />
                        ))}
                    </div>

                </div>
            </section>

            {/* TOURISTIC PLACES */}
            <section id="attractions" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <h3 className="text-3xl font-bold mb-8 text-center">Nearby Touristic Places</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {encheyMonastery.touristicPlaces.map((p, index) => (
                        <TouristicPlaceCard key={index} place={p} />
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t bg-slate-800 text-white">
                <div className="max-w-6xl mx-auto px-4 py-8 text-xs text-center">
                    <p className="text-lg font-semibold text-emerald-400 mb-2">{encheyMonastery.name}</p>
                    <p>Experience the solitude and sacred beauty of Sikkim.</p>
                    <p className='mt-4'>© {new Date().getFullYear()} Monastery360| All Rights Reserved</p>
                </div>
            </footer>
        </main>
    );
};

export default EncheyMonasteryPage;
