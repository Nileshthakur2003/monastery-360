'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function PemayangtsePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">Monastery360</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-emerald-600" href="/archives">Archives</a>
            <a className="hover:text-emerald-600" href="/virtual-tours">Virtual Tours</a>
            <a className="hover:text-emerald-600" href="/explore">Explore</a>
            <a className="hover:text-emerald-600" href="/events">Events</a>
            <a className="hover:text-emerald-600" href="/tours">Tours</a>
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
              <a href="/tours" className="hover:text-emerald-600">Tours</a>
              <a href="/explore/pemayangtse" className="text-emerald-600 font-semibold">Pemayangtse</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Pemayangtse Monastery
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Experience the spiritual aura of the 17th-century Pemayangtse Monastery overlooking the Pelling valley — now in full 360° view.
        </p>
      </section>

      {/* VIRTUAL TOUR */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="aspect-video rounded-2xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1758102162360!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVoSlhucEFF!2m2!1d27.30518919282202!2d88.25156580066201!3f280.8142634626025!4f-4.855874927554552!5f0.7820865974627469"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button className="rounded-full bg-emerald-500 text-white px-6 py-2 text-sm hover:bg-emerald-600">
            Book Guided Tour
          </button>
          <button className="rounded-full border px-6 py-2 text-sm hover:border-emerald-500">
            Learn More
          </button>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">About Pemayangtse</h3>
          <p className="text-sm text-slate-600 mt-3">
            Founded in the 17th century, Pemayangtse Monastery is one of the oldest and most significant monasteries in Sikkim. 
            It offers panoramic views of the Kanchenjunga range and holds intricate murals, sculptures, and spiritual relics.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Visitor Information</h3>
          <ul className="mt-3 text-sm text-slate-600 space-y-2">
            <li>Location: Near Pelling, West Sikkim</li>
            <li>Best Time to Visit: March to June & September to November</li>
            <li>Highlights: Cham Dance Festival, 3D Wooden Sculptures</li>
            <li>Accessibility: Well connected by road, local taxis available</li>
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
