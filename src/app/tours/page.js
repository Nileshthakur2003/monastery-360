'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function ToursPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tours = [
    {
      id: 'east-sikkim-tour',
      title: 'East Sikkim Monastery Trail',
      desc: 'Visit Rumtek, Enchey, and other iconic monasteries over 3 days.',
      duration: '3 Days',
      price: '$250',
    },
    {
      id: 'west-sikkim-tour',
      title: 'West Sikkim Cultural Experience',
      desc: 'Explore Pemayangtse, Tashiding, and scenic Pelling valley.',
      duration: '2 Days',
      price: '$180',
    },
    {
      id: 'full-sikkim-tour',
      title: 'Complete Sikkim Heritage Tour',
      desc: 'A 7-day journey covering monasteries, festivals, and local culture.',
      duration: '7 Days',
      price: '$600',
    },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight" >Monastery360</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-emerald-600" href='/archives'>Archives</a>
            <a className="hover:text-emerald-600" href='virtual-tours'>Virtual Tours</a>
            <a className="hover:text-emerald-600" href='/explore'>Explore</a>
            <a className="hover:text-emerald-600" href='/events'>Events</a>
            <button className="border rounded-full px-4 py-1 hover:bg-emerald-50">Visit</button>
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
              <a href="/map" className="hover:text-emerald-600">Map</a>
              <a href="/virtual-tours" className="hover:text-emerald-600">Virtual Tours</a>
              <a href="/archives" className="hover:text-emerald-600">Archives</a>
              <a href="/events" className="hover:text-emerald-600">Events</a>
              <a href="/tours" className="text-emerald-600 font-semibold">Tours</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Tours & Travel
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Curated travel experiences across Sikkim’s monasteries. Plan your spiritual and cultural journey with ease.
        </p>
      </section>

      {/* TOURS GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-6">Featured Tours</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-base md:text-lg">{tour.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{tour.desc}</p>
              <div className="mt-3 flex justify-between text-sm text-slate-700">
                <span>{tour.duration}</span>
                <span>{tour.price}</span>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-full bg-emerald-500 text-white py-2 text-sm hover:bg-emerald-600">
                  Book Now
                </button>
                <button className="flex-1 rounded-full border py-2 text-sm hover:border-emerald-500">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAVEL INFO */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Travel Logistics</h3>
          <ul className="mt-3 text-sm text-slate-600 space-y-2">
            <li>Local transport: Taxis, buses, and guided shuttles available.</li>
            <li>Recommended routes: East, West, North, and South Sikkim trails.</li>
            <li>Lodging: Monastery guesthouses, hotels, and homestays.</li>
            <li>Best season: March to June & September to November.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Nearby Attractions</h3>
          <ul className="mt-3 text-sm text-slate-600 space-y-2">
            <li>Scenic viewpoints: Tsomgo Lake, Nathula Pass, Pelling Ridge.</li>
            <li>Festivals & rituals at local monasteries.</li>
            <li>Cultural workshops: Thangka painting, meditation sessions.</li>
            <li>Local markets: Handicrafts and Sikkimese cuisine tasting.</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-500">
          <div>Monastery360 — Preserving Sikkim’s spiritual heritage</div>
          <div>© {new Date().getFullYear()} Monastery360</div>
        </div>
      </footer>
    </main>
  )
}
