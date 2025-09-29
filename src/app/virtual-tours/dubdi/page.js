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

export default function DubdiMonasteryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Use a new placeholder embed for the virtual tour section
  const virtualTourEmbed = (
    <iframe 
      src="http://googleusercontent.com/maps.google.com/4" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Dubdi Monastery Virtual Tour"
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
              <a href="/explore/dubdi" className={`${accentColorClass} font-semibold`}>Dubdi Monastery</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max border-slate-300 text-slate-700">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Dubdi Monastery
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Step back in time at Sikkim's **oldest monastery**, the 'Hermit's Cell,' built in 1701 to commemorate the consecration of the state’s first Chogyal.
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
            Start Virtual Hike
          </button>
          <button className={`rounded-full border border-slate-300 px-6 py-2 text-sm text-slate-700 hover:border-emerald-500 hover:${accentColorClass}`}>
            Read Historical Texts
          </button>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-8 md:grid-cols-2">
        {/* About Dubdi */}
        <div className={`rounded-2xl border ${borderColorClass} p-6 bg-slate-50/50`}>
          <h3 className={`text-base md:text-lg font-semibold ${accentColorClass}`}>About Dubdi</h3>
          <p className="text-sm text-slate-700 mt-3">
            Also known as the **Yuksom Monastery**, Dubdi was established in **1701**, making it the oldest existing monastery in Sikkim. Its name literally means 'the Hermit's Cell' and it holds immense historical value, particularly related to the Nyingma sect and the state's founding.
          </p>
        </div>
        {/* Visitor Info */}
        <div className={`rounded-2xl border ${borderColorClass} p-6 bg-slate-50/50`}>
          <h3 className={`text-base md:text-lg font-semibold ${accentColorClass}`}>Access and Experience</h3>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>Location: Near **Yuksom**, West Sikkim.</li>
            <li>Access: Requires an approximately **one-hour uphill trek** (3 km) from Yuksom village, offering a true sense of seclusion.</li>
            <li>Historical Role: It commemorates the site of the coronation of the first Chogyal of Sikkim.</li>
            <li>Architecture: Features whitewashed walls, a gilded rooftop, and houses images of **Lama Lhatsun Namkha Jigme**, the founder of the Nyingma sect in Sikkim.</li>
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