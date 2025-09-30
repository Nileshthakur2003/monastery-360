'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, MapPin, LayoutGrid, List } from 'lucide-react'

export default function UpcomingEventsPage() {
  const [expandedEventId, setExpandedEventId] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [showRegisterMessage, setShowRegisterMessage] = useState(false)
  const [showVolunteerMessage, setShowVolunteerMessage] = useState(false)
  const [showCalendarMessage, setShowCalendarMessage] = useState(false)

  const events = [
    {
      id: 1,
      title: 'Cham Dance Festival – Rumtek Monastery',
      date: 'October 15, 2025',
      location: 'Rumtek Monastery, Sikkim',
      desc: 'Experience the vibrant masked dance festival with sacred rituals, chants, and traditional music.',
      details:
        'This festival includes sacred mask dances performed by monks, accompanied by ritual instruments and chants. Visitors are welcome to observe and participate in cultural exchanges.',
      image: '/images/events/cham.jpg',
    },
    {
      id: 2,
      title: 'Manuscript Conservation Workshop',
      date: 'November 5–7, 2025',
      location: 'Pemayangtse Monastery Library',
      desc: 'Hands-on workshop for scholars and volunteers on preserving ancient texts.',
      details:
        'Led by experts in archival science, this workshop covers cleaning, repairing, and digitizing rare manuscripts. Participants will receive certification.',
      image: '/images/events/workshop.jpg',
    },
    {
      id: 3,
      title: 'Heritage Mapping Hackathon',
      date: 'December 12, 2025',
      location: 'Gangtok Cultural Centre',
      desc: 'Collaborate to digitally map monasteries and artifacts using AI tools.',
      details:
        'Teams will use open-source tools to geotag and document monastic sites. Prizes for best mapping logic and community impact.',
      image: '/images/events/hackathon.jpg',
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

  const addToCalendar = (event) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:20251015T090000Z
DTEND:20251015T170000Z
LOCATION:${event.location}
DESCRIPTION:${event.desc}
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${event.title}.ics`
    link.click()
    URL.revokeObjectURL(url)

    // Show toast notification
    setShowCalendarMessage(true)
    setTimeout(() => setShowCalendarMessage(false), 3000)
  }

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900"
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/monastery-hero.jpg')" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            Upcoming Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-3 text-slate-700 max-w-xl mx-auto text-sm md:text-base"
          >
            Join festivals, workshops, and initiatives preserving Sikkim’s
            spiritual heritage.
          </motion.p>
        </div>
      </section>

      {/* SEARCH + VIEW TOGGLE */}
      <section className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/3 border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
        />
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg border ${
              viewMode === 'grid'
                ? 'bg-emerald-500 text-white'
                : 'hover:bg-slate-100'
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('timeline')}
            className={`p-2 rounded-lg border ${
              viewMode === 'timeline'
                ? 'bg-emerald-500 text-white'
                : 'hover:bg-slate-100'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        {viewMode === 'grid' ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all bg-white overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="font-semibold text-lg text-slate-800">
                    {event.title}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                      <CalendarDays className="w-4 h-4" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1 bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                      <MapPin className="w-4 h-4" /> {event.location}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">{event.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-sm">
                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="px-3 py-1 rounded-full border border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition"
                    >
                      {expandedEventId === event.id
                        ? 'Hide Details'
                        : 'Learn More'}
                    </button>
                    <button
                      onClick={handleRegisterClick}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:scale-105 transition"
                    >
                      Register
                    </button>
                    <button
                      onClick={() => addToCalendar(event)}
                      className="px-3 py-1 rounded-full border border-teal-500 text-teal-600 hover:bg-teal-50 transition"
                    >
                      Add to Calendar
                    </button>
                  </div>
                  {expandedEventId === event.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-sm text-slate-700 bg-slate-50 p-3 rounded-md border"
                    >
                      {event.details}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative border-l border-slate-300 pl-6 space-y-8">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                <h4 className="font-semibold text-lg">{event.title}</h4>
                <p className="text-sm text-slate-600">
                  {event.date} • {event.location}
                </p>
                <p className="mt-2 text-slate-700 text-sm">{event.desc}</p>
                <div className="mt-2 flex gap-3">
                  <button
                    onClick={() => toggleExpand(event.id)}
                    className="text-emerald-600 text-sm hover:underline"
                  >
                    {expandedEventId === event.id ? 'Hide Details' : 'Read More'}
                  </button>
                  <button
                    onClick={handleRegisterClick}
                    className="text-emerald-600 text-sm hover:underline"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => addToCalendar(event)}
                    className="text-emerald-600 text-sm hover:underline"
                  >
                    Add to Calendar
                  </button>
                </div>
                {expandedEventId === event.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-sm bg-slate-50 border p-3 rounded"
                  >
                    {event.details}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Toasts */}
        {showRegisterMessage && (
          <div className="fixed bottom-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded shadow-lg">
            Registration feature coming soon!
          </div>
        )}
        {showVolunteerMessage && (
          <div className="fixed bottom-6 right-6 bg-teal-500 text-white px-4 py-2 rounded shadow-lg">
            Volunteer registration will open soon!
          </div>
        )}
        {showCalendarMessage && (
          <div className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded shadow-lg">
            Calendar event downloaded! Open it to add to your calendar.
          </div>
        )}
      </section>

      {/* COMMUNITY SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
          <h3 className="text-base md:text-lg font-semibold">Host an Event</h3>
          <p className="text-xs md:text-sm text-slate-600 mt-2">
            Monasteries and community groups can submit events to be featured on Monastery360.
          </p>
          <button className="mt-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 hover:scale-105 transition">
            Submit Event
          </button>
        </div>
        <aside className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
          <h4 className="font-semibold">Volunteer</h4>
          <p className="text-sm text-slate-600 mt-2">
            Help organize and document Sikkim’s spiritual gatherings.
          </p>
          <button
            onClick={handleVolunteerClick}
            className="mt-4 w-full rounded-full border border-teal-500 text-teal-700 hover:bg-teal-50 transition px-4 py-2"
          >
            Become a Volunteer
          </button>
        </aside>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-500">
          <div>Monastery360 — Preserving Sikkim’s spiritual heritage</div>
          <div>© {new Date().getFullYear()} Monastery360. All rights reserved.</div>
        </div>
      </footer>
    </motion.main>
  )
}
