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

export default function TashidingMonasteryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Use the newly provided iframe embed for the virtual tour section
  const virtualTourEmbed = (
    <iframe 
      src="https://www.google.com/maps/embed?pb=!4v1759127859710!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6c08zSWc.!2m2!1d27.30891943909927!2d88.29787983128344!3f101.40874716075287!4f0!5f0.7820865974627469" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Tashiding Monastery Virtual Tour"
    ></iframe>
  )

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
              <a href="/explore/tashiding" className={`${accentColorClass} font-semibold`}>Tashiding</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max border-slate-300 text-slate-700">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Tashiding Monastery
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Visit the holiest monastery in Sikkim, perched atop a hill, where tradition says a single glimpse can cleanse a lifetime of sins. Explore its sacred chortens and tranquil grounds virtually.
        </p>
      </section>

      {/* VIRTUAL TOUR */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="aspect-video rounded-2xl overflow-hidden border border-slate-300 bg-slate-100 flex items-center justify-center">
          {virtualTourEmbed}
        </div>

        {/* Action Buttons - Themed */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button className={`rounded-full ${accentBgClass} text-white px-6 py-2 text-sm font-medium ${buttonHoverClass}`}>
            Plan Physical Pilgrimage
          </button>
          <button className={`rounded-full border border-slate-300 px-6 py-2 text-sm text-slate-700 hover:border-emerald-500 hover:${accentColorClass}`}>
            Festival Calendar
          </button>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-8 md:grid-cols-2">
        {/* About Tashiding */}
        <div className={`rounded-2xl border ${borderColorClass} p-6 bg-slate-50/50`}>
          <h3 className={`text-base md:text-lg font-semibold ${accentColorClass}`}>About Tashiding</h3>
          <p className="text-sm text-slate-700 mt-3">
            Founded in the 17th century, Tashiding ("The Devoted Central Glory") is revered as the center of Sikkim's holy land. It belongs to the Nyingma order and is situated at the confluence of the Rathong and Rangeet rivers. The location is believed to be blessed by Guru Padmasambhava himself.
          </p>
        </div>
        {/* Visitor Info */}
        <div className={`rounded-2xl border ${borderColorClass} p-6 bg-slate-50/50`}>
          <h3 className={`text-base md:text-lg font-semibold ${accentColorClass}`}>Sacred Highlights</h3>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>Holiness: Considered the **holiest site** for Buddhists in Sikkim.</li>
            <li>Key Event: Hosts the **Bhumchu Festival** (Holy Water Ceremony) in February/March.</li>
            <li>Architecture: Famous for its towering **chortens** (stupas), which are an essential part of the pilgrimage.</li>
            <li>Location: West Sikkim, accessible from Yuksom and Pelling.</li>
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