'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import dynamic from 'next/dynamic'

const SikkimMap = dynamic(() => import('@/components/map'), { ssr: false })

export default function ExplorePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [region, setRegion] = useState('All')
  const [century, setCentury] = useState('All')

  const monasteries = [
    {
      id: 'rumtek',
      name: 'Rumtek Monastery',
      short: 'Historic seat of the Karmapa lineage with vibrant murals.',
      region: 'East Sikkim',
      century: '18th',
    },
    {
      id: 'pemayangtse',
      name: 'Pemayangtse Monastery',
      short: '17th-century monastery overlooking Pelling valley.',
      region: 'West Sikkim',
      century: '17th',
    },
    {
      id: 'tashiding',
      name: 'Tashiding Monastery',
      short: 'Sacred island-like monastery on the Rathong river.',
      region: 'West Sikkim',
      century: '17th',
    },
  ]

  // Simple filter logic
  const filtered = monasteries.filter((m) => {
    return (
      (region === 'All' || m.region === region) &&
      (century === 'All' || m.century === century)
    )
  })

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
              <a className="hover:text-emerald-600" href='/archives'>Archives</a>
            <a className="hover:text-emerald-600" href='virtual-tours'>Virtual Tours</a>
            <a className="hover:text-emerald-600" href='/explore'>Explore</a>
            <a className="hover:text-emerald-600" href='/events'>Events</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Explore Monasteries
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Interactive maps, filters, and detailed profiles of Sikkim’s monasteries with 360° tours.
        </p>
      </section>

      {/* FILTERS + MAP */}
      <section className="max-w-6xl mx-auto px-4 pb-10 grid gap-8 md:grid-cols-3 md:pb-16">
        {/* Filters Sidebar */}
        <aside className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Filters</h3>
          <div className="mt-4 space-y-3">
            <label className="block text-sm text-slate-600">
              Region
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
            <label className="block text-sm text-slate-600">
              Century
              <select
                className="mt-1 w-full rounded-full border px-3 py-2 text-sm"
                value={century}
                onChange={(e) => setCentury(e.target.value)}
              >
                <option>All</option>
                <option>17th</option>
                <option>18th</option>
                <option>19th</option>
              </select>
            </label>
          </div>
        </aside>

        {/* Map */}
        <div className="md:col-span-2 rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Interactive Map</h3>
          <div className="mt-4 h-64 rounded-xl bg-slate-50 overflow-hidden">
            <SikkimMap />
          </div>
        </div>
      </section>

      {/* MONASTERIES GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h3 className="text-xl md:text-2xl font-semibold">Monasteries</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl border border-slate-200 p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-base md:text-lg">{m.name}</h4>
              <p className="text-sm text-slate-600 mt-2">{m.short}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <button className="px-3 py-1 rounded-full border hover:border-emerald-500">
                  View
                </button>
                <button className="px-3 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
                  360° Tour
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
