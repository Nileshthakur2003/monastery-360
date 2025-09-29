'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

// Theme constants based on the existing pages (White BG, Emerald Accent)
const primaryBg = 'bg-white'
const primaryText = 'text-slate-900'
const accentColorClass = 'text-emerald-600' // Primary highlight color
const accentBgClass = 'bg-emerald-500' // Primary button color
const buttonHoverClass = 'hover:bg-emerald-600'
const borderColorClass = 'border-slate-200'

export default function RumtekPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className={`min-h-screen ${primaryBg} ${primaryText} font-sans`}>
      {/* HEADER */}
      <header className={`border-b ${borderColorClass}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">Monastery360</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className={`hover:${accentColorClass}`} href="/archives">Archives</a>
            <a className={`hover:${accentColorClass}`} href="/virtual-tours">Virtual Tours</a>
            <a className={`hover:${accentColorClass}`} href="/explore">Explore</a>
            <a className={`hover:${accentColorClass}`} href="/events">Events</a>
            <a className={`hover:${accentColorClass}`} href="/tours">Tours</a>
            <button className={`border rounded-full px-4 py-1 hover:bg-emerald-50 border-slate-300 text-slate-700`}>Visit</button>
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
              <a href="/map" className={`hover:${accentColorClass}`}>Map</a>
              <a href="/virtual-tours" className={`hover:${accentColorClass}`}>Virtual Tours</a>
              <a href="/archives" className={`hover:${accentColorClass}`}>Archives</a>
              <a href="/events" className={`hover:${accentColorClass}`}>Events</a>
              <a href="/tours" className={`hover:${accentColorClass}`}>Tours</a>
              <a href="/explore/rumtek" className={`${accentColorClass} font-semibold`}>Rumtek</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max border-slate-300 text-slate-700">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Rumtek Dharma Chakra Centre
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Explore the seat of the Karma Kagyu lineage, the largest monastery in Sikkim, and its magnificent Golden Stupa—available for viewing in immersive 360°.
        </p>
      </section>

      {/* VIRTUAL TOUR */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="aspect-video rounded-2xl overflow-hidden border border-slate-300 bg-slate-100 flex items-center justify-center">
            {/* Rumtek 360 tour embed */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!4v1759125873991!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDJnWVdjb2dF!2m2!1d27.2885258949387!2d88.56180959787903!3f33.92405195884333!4f-10.783421397063108!5f0.7820865974627469"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>{'}'}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <button className={`rounded-full ${accentBgClass} text-white px-6 py-2 text-sm font-medium ${buttonHoverClass}`}>
                Book Guided Tour
            </button>
            <button className={`rounded-full border border-slate-300 px-6 py-2 text-sm text-slate-700 hover:border-emerald-500 hover:${accentColorClass}`}>
                View Digital Archives
            </button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-8 md:grid-cols-2">
        {/* About Rumtek */}
        <div className={`rounded-2xl border ${borderColorClass} p-6 bg-slate-50/50`}>
          <h3 className={`text-base md:text-lg font-semibold ${accentColorClass}`}>About Rumtek Monastery</h3>
          <p className="text-sm text-slate-700 mt-3">
            Originally built in the 16th century and rebuilt in the 1960s, Rumtek is a stunning example of traditional Tibetan architecture. It is the spiritual home of the Karma Kagyu order, hosting hundreds of monks and preserving rare Buddhist artifacts.
          </p>
        </div>
        {/* Visitor Info */}
        <div className={`rounded-2xl border ${borderColorClass} p-6 bg-slate-50/50`}>
          <h3 className={`text-base md:text-lg font-semibold ${accentColorClass}`}>Visitor Information</h3>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>Location: 24 km from Gangtok, East Sikkim</li>
            <li>Altitude: Approximately 5,800 ft (1,770 m)</li>
            <li>Highlights: The Golden Stupa, Rare Artifacts, Annual **Losar** (Tibetan New Year) festivities.</li>
            <li>Note: Visitors are subject to security checks due to the monastery's high significance.</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`border-t ${borderColorClass}`}>
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-500">
          <div>Monastery360 — Preserving Sikkim’s spiritual heritage</div>
          <div>© {new Date().getFullYear()} Monastery360</div>
        </div>
      </footer>
    </main>
  )
}