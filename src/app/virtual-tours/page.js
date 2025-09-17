'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function VirtualToursPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [region, setRegion] = useState('All')

  const tours = [
    {
      id: 'rumtek',
      title: 'Rumtek Monastery 360° Tour',
      region: 'East Sikkim',
      short: 'Explore the main prayer halls, vibrant murals, and gardens.',
      iframe: 'https://www.example.com/rumtek-360', // replace with real link
    },
    {
      id: 'pemayangtse',
      title: 'Pemayangtse Monastery 360° Tour',
      region: 'West Sikkim',
      short: 'Walk through the ancient monastery and admire panoramic views.',
      iframe: 'https://www.example.com/pemayangtse-360',
    },
    {
      id: 'tashiding',
      title: 'Tashiding Monastery 360° Tour',
      region: 'West Sikkim',
      short: 'Discover the sacred island-like monastery along the Rathong river.',
      iframe: 'https://www.example.com/tashiding-360',
    },
  ]

  const filteredTours = tours.filter((t) => region === 'All' || t.region === region)

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">Monastery360</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/map" className="hover:text-emerald-600">Map</a>
            <a href="/virtual-tours" className="text-emerald-600 font-semibold">Virtual Tours</a>
            <a href="/archives" className="hover:text-emerald-600">Archives</a>
            <a href="/events" className="hover:text-emerald-600">Events</a>
            <a href="/tours" className="hover:text-emerald-600">Tours</a>
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
              <a href="/virtual-tours" className="text-emerald-600 font-semibold">Virtual Tours</a>
              <a href="/archives" className="hover:text-emerald-600">Archives</a>
              <a href="/events" className="hover:text-emerald-600">Events</a>
              <a href="/tours" className="hover:text-emerald-600">Tours</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Virtual Tours
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Take immersive 360° tours of Sikkim’s monasteries from anywhere in the world.
        </p>
      </section>

      {/* FILTERS */}
      <section className="max-w-6xl mx-auto px-4 pb-6">
        <label className="block text-sm text-slate-600 mb-2">
          Filter by Region
          <select
            className="mt-1 w-full rounded-full border px-3 py-2 text-sm"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option>All</option>
            <option>East Sikkim</option>
            <option>West Sikkim</option>
            <option>North Sikkim</option>
            <option>South Sikkim</option>
          </select>
        </label>
      </section>

      {/* TOURS GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="rounded-2xl border border-slate-200 p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-base md:text-lg">{tour.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{tour.short}</p>
              <div className="mt-4 aspect-video rounded-xl overflow-hidden border">
                <iframe
                  src={tour.iframe}
                  title={tour.title}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <button className="px-3 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
                  Explore
                </button>
                <button className="px-3 py-1 rounded-full border hover:border-emerald-500">
                  Details
                </button>
              </div>
            </div>
          ))}
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
