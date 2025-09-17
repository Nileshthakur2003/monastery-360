'use client'


import dynamic from 'next/dynamic'
const SikkimMap = dynamic(() => import('@/components/map'), {
  ssr: false, // disables SSR for this component
})
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // Hamburger & Close icons

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const featuredMonasteries = [
    { id: 'rumtek', name: 'Rumtek Monastery', short: 'Historic seat of the Karmapa lineage with vibrant murals.' },
    { id: 'pemayangtse', name: 'Pemayangtse Monastery', short: '17th-century monastery overlooking Pelling valley.' },
    { id: 'tashiding', name: 'Tashiding Monastery', short: 'Sacred island-like monastery on the Rathong river.' },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">Monastery360</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-emerald-600" href='/archives'>Archives</a>
            <a className="hover:text-emerald-600" href='virtual-tours'>Virtual Tours</a>
            <a className="hover:text-emerald-600" href='/archives'>Archives</a>
            <a className="hover:text-emerald-600" href='/'>Events</a>
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
              <a className="hover:text-emerald-600" href='/archives'>Archives</a>
            <a className="hover:text-emerald-600" href='virtual-tours'>Virtual Tours</a>
            <a className="hover:text-emerald-600" href='/explore'>Explore</a>
            <a className="hover:text-emerald-600" href='/events'>Events</a>
            <button className="border rounded-full px-4 py-1 hover:bg-emerald-50">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Sikkim’s Monasteries, Digitally Reimagined
          </h2>
          <p className="mt-3 text-slate-600 max-w-md text-sm md:text-base">
            Immersive 360° tours, multilingual narrated walkthroughs, and a rich digital archive built with the communities of Sikkim.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-emerald-500 text-white px-5 py-2 text-sm font-semibold hover:bg-emerald-600">
              Start Tour
            </button>
            <button className="rounded-full border border-slate-200 px-5 py-2 text-sm text-slate-700 hover:border-emerald-500">
              Explore Map
            </button>
          </div>
        </div>
        <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!4v1758080993202!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREV5b0tld1FF!2m2!1d27.33057556039704!2d88.57925088915772!3f349.76108492589!4f4.440589017093217!5f0.7820865974627469"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* INTERACTIVE MAP */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 md:py-16">
        <div className="md:col-span-2 rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Interactive Map</h3>
          <div className="mt-4 h-64 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
            <SikkimMap />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <button className="px-4 py-1 rounded-full border hover:border-emerald-500">Attractions</button>
            <button className="px-4 py-1 rounded-full border hover:border-emerald-500">Route</button>
            <button className="px-4 py-1 rounded-full border hover:border-emerald-500">Transport</button>
          </div>
        </div>
        <aside className="rounded-2xl border border-slate-200 p-6">
          <h4 className="font-semibold">Upcoming Events</h4>
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            <li>Losar Festival</li>
            <li>Cham Dance at Pemayangtse</li>
            <li>Community Archiving Day</li>
          </ul>
          <button className="mt-4 w-full rounded-full bg-emerald-500 text-white py-2 text-sm hover:bg-emerald-600">
            Full Calendar
          </button>
        </aside>
      </section>

      {/* FEATURED MONASTERIES */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-xl md:text-2xl font-semibold">Featured Monasteries</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredMonasteries.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl border border-slate-200 p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-base md:text-lg">{m.name}</h4>
              <p className="text-sm text-slate-600 mt-2">{m.short}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <button className="px-3 py-1 rounded-full border hover:border-emerald-500">View</button>
                <button className="px-3 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600">Book</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHIVES */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 md:py-16">
        <div className="md:col-span-2 rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Digital Archives</h3>
          <p className="text-xs md:text-sm text-slate-600 mt-2">
            Search manuscripts, murals, and documents with AI-powered tags.
          </p>
          <div className="mt-4 flex gap-3 flex-col sm:flex-row">
            <input
              aria-label="search archives"
              className="flex-1 rounded-full border px-4 py-2 text-sm"
              placeholder="Search archives..."
            />
            <button className="rounded-full bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-600">
              Search
            </button>
          </div>
        </div>
        <aside className="rounded-2xl border border-slate-200 p-6">
          <h4 className="font-semibold">Community</h4>
          <p className="text-sm text-slate-600 mt-2">
            Participatory archiving and volunteer programs.
          </p>
          <button className="mt-4 w-full rounded-full border px-4 py-2 hover:border-emerald-500">
            Join Volunteer
          </button>
        </aside>
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
