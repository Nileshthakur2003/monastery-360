'use client'

import React, { useState } from 'react'
import { Menu, X, CalendarDays, MapPin } from 'lucide-react'

export default function UpcomingEventsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedEventId, setExpandedEventId] = useState(null)
  const [showRegisterMessage, setShowRegisterMessage] = useState(false)
  const [showVolunteerMessage, setShowVolunteerMessage] = useState(false)

  const events = [
    {
      id: 1,
      title: 'Cham Dance Festival – Rumtek Monastery',
      date: 'October 15, 2025',
      location: 'Rumtek Monastery, Sikkim',
      desc: 'Experience the vibrant masked dance festival with sacred rituals, chants, and traditional music.',
      details: 'This festival includes sacred mask dances performed by monks, accompanied by ritual instruments and chants. Visitors are welcome to observe and participate in cultural exchanges.'
    },
    {
      id: 2,
      title: 'Manuscript Conservation Workshop',
      date: 'November 5–7, 2025',
      location: 'Pemayangtse Monastery Library',
      desc: 'Hands-on workshop for scholars and volunteers on preserving ancient texts.',
      details: 'Led by experts in archival science, this workshop covers cleaning, repairing, and digitizing rare manuscripts. Participants will receive certification.'
    },
    {
      id: 3,
      title: 'Heritage Mapping Hackathon',
      date: 'December 12, 2025',
      location: 'Gangtok Cultural Centre',
      desc: 'Collaborate to digitally map monasteries and artifacts using AI tools.',
      details: 'Teams will use open-source tools to geotag and document monastic sites. Prizes for best mapping logic and community impact.'
    },
  ]

  const toggleExpand = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id)
  }

  const handleRegisterClick = () => {
    setShowRegisterMessage(true)
    setTimeout(() => setShowRegisterMessage(false), 3000)
  }

  const handleVolunteerClick = () => {
    setShowVolunteerMessage(true)
    setTimeout(() => setShowVolunteerMessage(false), 3000)
  }

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
            <a className="text-emerald-600 font-semibold" href="/events">Events</a>
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
              <a className="hover:text-emerald-600" href="/archives">Archives</a>
              <a className="hover:text-emerald-600" href="/virtual-tours">Virtual Tours</a>
              <a className="hover:text-emerald-600" href="/explore">Explore</a>
              <a className="hover:text-emerald-600" href="/events">Events</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Upcoming Events
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Join festivals, workshops, and community initiatives preserving Sikkim’s spiritual heritage.
        </p>
      </section>

      {/* EVENTS LIST */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h3 className="text-xl md:text-2xl font-semibold">Featured Events</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border border-slate-200 p-5 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-base md:text-lg">{event.title}</h4>
              <div className="mt-2 flex items-center text-slate-500 text-sm gap-2">
                <CalendarDays className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-slate-500 text-sm gap-2 mt-1">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <p className="text-sm text-slate-600 mt-3">{event.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <button
                  onClick={() => toggleExpand(event.id)}
                  className="px-3 py-1 rounded-full border hover:border-emerald-500"
                >
                  {expandedEventId === event.id ? 'Hide Details' : 'Learn More'}
                </button>
                <button
                  onClick={handleRegisterClick}
                  className="px-3 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
                >
                  Register
                </button>
              </div>

              {expandedEventId === event.id && (
                <div className="mt-4 text-sm text-slate-700 bg-slate-50 p-3 rounded-md border">
                  {event.details}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dummy Register Message */}
        {showRegisterMessage && (
          <div className="mt-6 text-center text-sm text-emerald-700 bg-emerald-50 border border-emerald-300 rounded p-3">
            Registration feature coming soon. This event will be featured later.
          </div>
        )}
      </section>

      {/* COMMUNITY SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-slate-200 p-6">
          <h3 className="text-base md:text-lg font-semibold">Host an Event</h3>
          <p className="text-xs md:text-sm text-slate-600 mt-2">
            Monasteries and community groups can submit events to be featured on Monastery360.
          </p>
          <button className="mt-4 rounded-full bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-600">
            Submit Event
          </button>
        </div>
        <aside className="rounded-2xl border border-slate-200 p-6">
          <h4 className="font-semibold">Volunteer</h4>
          <p className="text-sm text-slate-600 mt-2">
            Help organize and document Sikkim’s spiritual gatherings.
          </p>
          <button
            onClick={handleVolunteerClick}
            className="mt-4 w-full rounded-full border px-4 py-2 hover:border-emerald-500"
          >
            Become a Volunteer
          </button>
                   {showVolunteerMessage && (
            <div className="mt-4 text-sm text-emerald-700 bg-emerald-50 border border-emerald-300 rounded p-3 text-center">
              Thanks for your interest! Volunteer registration will open soon. Stay tuned for updates.
            </div>
          )}
        </aside>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-500">
          <div>Monastery360 — Preserving Sikkim’s spiritual heritage</div>
          <div>© {new Date().getFullYear()} Monastery360. All rights reserved.</div>
        </div>
      </footer>
    </main>
  )
}