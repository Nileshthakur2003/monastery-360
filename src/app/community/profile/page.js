'use client'

import React, { useState } from 'react'
import { Menu, X, User, Trophy, BookOpen, Clock, TrendingUp, Download, Eye } from 'lucide-react'

// Theme constants based on the original request (White BG, Emerald Accent)
const primaryBg = 'bg-white'
const primaryText = 'text-slate-900'
const accentColorClass = 'text-emerald-600' // Primary highlight color
const accentBgClass = 'bg-emerald-500' // Primary button color
const buttonHoverClass = 'hover:bg-emerald-600'
const borderColorClass = 'border-slate-200'

// Sample Profile Data
const member = {
  name: 'Tenzing Gyatso',
  title: 'Lead Digital Archivist & Translator',
  location: 'Gangtok, Sikkim',
  joinDate: 'Joined May 2022',
  bio: "A dedicated volunteer specializing in Tibetan Buddhist texts. Tenzing's work is crucial in accurately translating and tagging 17th-century manuscripts from Rumtek Monastery. He coordinates the local Field Reporter team.",
  contributions: {
    manuscripts: 124,
    murals: 45,
    totalHours: 850,
    archivedEvents: 6,
  },
  badges: [
    { name: 'Master Archivist', icon: <Trophy className="w-5 h-5 text-yellow-600" /> },
    { name: 'Translation Lead', icon: <BookOpen className="w-5 h-5 text-indigo-600" /> },
    { name: 'Top Contributor 2023', icon: <TrendingUp className="w-5 h-5 text-emerald-600" /> },
  ],
  recentActivity: [
    { type: 'Uploaded', item: 'A high-res scan of a mandala from Pemayangtse.', date: '3 days ago', icon: <Download className="w-4 h-4 text-emerald-500" /> },
    { type: 'Translated', item: 'Page 54 of the Karma Kagyu lineage document.', date: '1 week ago', icon: <BookOpen className="w-4 h-4 text-indigo-500" /> },
    { type: 'Reviewed', item: 'Metadata for three historical documents.', date: '2 weeks ago', icon: <Eye className="w-4 h-4 text-slate-500" /> },
  ]
}

export default function CommunityMemberProfile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className={`min-h-screen ${primaryBg} ${primaryText} font-sans`}>
      {/* HEADER */}
      <header className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">Monastery360</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className={`hover:${accentColorClass}`} href='/archives'>Archives</a>
            <a className={`hover:${accentColorClass}`} href='virtual-tours'>Virtual Tours</a>
            <a className={`hover:${accentColorClass}`} href='/explore'>Explore</a>
            <a className={`hover:${accentColorClass}`} href='/events'>Events</a>
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
          <div className={`md:hidden border-t ${primaryBg}`}>
            <nav className="flex flex-col gap-3 px-4 py-4 text-sm">
              <a className={`hover:${accentColorClass}`} href='/archives'>Archives</a>
              <a className={`hover:${accentColorClass}`} href='virtual-tours'>Virtual Tours</a>
              <a className={`hover:${accentColorClass}`} href='/explore'>Explore</a>
              <a className={`hover:${accentColorClass}`} href='/events'>Events</a>
              <button className="mt-2 border rounded-full px-4 py-1 hover:bg-emerald-50 w-max border-slate-300 text-slate-700">Visit</button>
            </nav>
          </div>
        )}
      </header>

      {/* PROFILE HEADER */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-6 border-b border-slate-200">
          <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center border-4 border-emerald-500 shrink-0">
            <User className={`w-12 h-12 text-slate-500`} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              {member.name}
            </h2>
            <p className={`mt-1 text-lg font-medium ${accentColorClass}`}>{member.title}</p>
            <p className="text-sm text-slate-500 mt-1">
              {member.location} &bull; {member.joinDate}
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-8 md:grid-cols-3">
        
        {/* LEFT COLUMN (Bio, Badges) */}
        <div className="md:col-span-2 space-y-8">
          
          {/* Bio & Details */}
          <div className={`rounded-2xl border ${borderColorClass} p-6 bg-slate-50/50`}>
            <h3 className="text-xl font-semibold mb-3">About Tenzing</h3>
            <p className="text-slate-700 text-sm leading-relaxed">{member.bio}</p>
          </div>

          {/* Badges */}
          <div className={`rounded-2xl border ${borderColorClass} p-6 bg-slate-50/50`}>
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <div className="flex flex-wrap gap-4">
              {member.badges.map((badge) => (
                <div key={badge.name} className={`flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 text-sm bg-white shadow-sm`}>
                  {badge.icon}
                  <span className="text-slate-700 font-medium">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className={`rounded-2xl border ${borderColorClass} p-6 bg-slate-50/50`}>
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-3">
              {member.recentActivity.map((activity, index) => (
                <li key={index} className="flex items-center justify-between text-sm border-b border-slate-100 pb-2 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    {activity.icon}
                    <span className="font-medium text-slate-800">{activity.type}:</span>
                    <span className="text-slate-600">{activity.item}</span>
                  </div>
                  <span className="text-xs text-slate-400 shrink-0"><Clock className="w-3 h-3 inline mr-1" />{activity.date}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* RIGHT COLUMN (Contribution Dashboard) */}
        <aside className="md:col-span-1 space-y-6">
          <div className={`rounded-2xl border ${borderColorClass} p-6 bg-slate-50/50`}>
            <h4 className={`font-semibold text-lg mb-4 ${accentColorClass}`}>Contribution Dashboard</h4>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-sm font-medium">Manuscripts Archived:</span>
                <span className={`text-xl font-bold ${accentColorClass}`}>{member.contributions.manuscripts}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-sm font-medium">Mural Segments Tagged:</span>
                <span className={`text-xl font-bold ${accentColorClass}`}>{member.contributions.murals}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-sm font-medium">Archived Events:</span>
                <span className={`text-xl font-bold ${accentColorClass}`}>{member.contributions.archivedEvents}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm font-medium">Total Volunteer Hours:</span>
                <span className={`text-xl font-bold ${accentColorClass}`}>{member.contributions.totalHours}</span>
              </div>
            </div>
            
            <button className={`mt-6 w-full rounded-full ${accentBgClass} text-white px-4 py-2 text-sm font-semibold ${buttonHoverClass}`}>
              View All Contributions
            </button>
          </div>
        </aside>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-500">
          <div>Monastery360 — Preserving Sikkim’s spiritual heritage</div>
          <div>© {new Date().getFullYear()} Monastery360</div>
        </div>
      </footer>
    </main>
  )
}