'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function ArchivesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Sample archive items
  const archives = [
    {
      id: 1,
      title: 'Ancient Manuscript – Rumtek',
      desc: 'Digitized manuscript from 1700s with Tibetan script.',
    },
    {
      id: 2,
      title: 'Wall Mural – Pemayangtse',
      desc: 'High-resolution mural scan with symbolic references.',
    },
    {
      id: 3,
      title: 'Historical Document – Tashiding',
      desc: 'Rare letter archived from the 18th century.',
    },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">Monastery360</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-emerald-600">Home</a>
            <a href="/map" className="hover:text-emerald-600">Map</a>
            <a href="/virtual-tours" className="hover:text-emerald-600">Virtual Tours</a>
            <a href="/archives" className="text-emerald-600 font-semibold">Archives</a>
            <a href="/events" className="hover:text-emerald-600">Events</a>
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
              <a href="/" className="hover:text-emerald-600">Home</a>
              <a href="/map" className="hover:text-emerald-600">Map</a>
              <a href="/virtual-tours" className="hover:text-emerald-600">Virtual Tours</a>
              <a href="/archives" className="text-emerald-600 font-semibold">Archives</a>
              <a href="/events" className="hover:text-emerald-600">Events</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Digital Archives
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Explore Sikkim’s rich manuscripts, murals, and documents with AI-powered search and tagging.
        </p>
      </section>

      {/* SEARCH BAR */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Search the Archive</h3>
          <div className="mt-4 flex gap-3 flex-col sm:flex-row">
            <input
              aria-label="search archives"
              className="flex-1 rounded-full border px-4 py-2 text-sm"
              placeholder="Search manuscripts, murals, or documents..."
            />
            <button className="rounded-full bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-600">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ARCHIVE LIST */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h3 className="text-xl md:text-2xl font-semibold">Featured Items</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {archives.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-base md:text-lg">{item.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <button className="px-3 py-1 rounded-full border hover:border-emerald-500">
                  View
                </button>
                <button className="px-3 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY INVOLVEMENT */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Community Contributions</h3>
          <p className="text-xs md:text-sm text-slate-600 mt-2">
            Locals and scholars can upload documents, murals, or stories to preserve cultural assets digitally.
          </p>
          <button className="mt-4 rounded-full bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-600">
            Upload Archive
          </button>
        </div>
        <aside className="rounded-2xl border border-slate-200 p-6">
          <h4 className="font-semibold">Volunteer</h4>
          <p className="text-sm text-slate-600 mt-2">
            Join participatory archiving and help digitize Sikkim’s heritage.
          </p>
          <button className="mt-4 w-full rounded-full border px-4 py-2 hover:border-emerald-500">
            Become a Volunteer
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
