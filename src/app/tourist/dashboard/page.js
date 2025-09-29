'use client'

import { useState } from "react"
import { Menu, X, LayoutDashboard, Map, Calendar, Heart, Ticket, Mail } from "lucide-react"

export default function TouristDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const NavItem = ({ tab, icon: Icon, label }) => (
    <button
      onClick={() => { setActiveTab(tab); setSidebarOpen(false) }}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
        activeTab === tab ? "bg-indigo-100 text-indigo-700 font-semibold" : "hover:bg-gray-100"
      }`}
    >
      <Icon size={18} /> {label}
    </button>
  )

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      {/* Top Bar */}
      <header className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-bold">Monastery360</h1>
        <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`fixed md:static h-full w-64 bg-white shadow-lg p-4 border-r transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          <h2 className="text-lg font-semibold mb-6">Tourist Dashboard</h2>
          <ul className="space-y-3">
            <li><NavItem tab="overview" icon={LayoutDashboard} label="Overview" /></li>
            <li><NavItem tab="tours" icon={Map} label="My Tours" /></li>
            <li><NavItem tab="bookings" icon={Calendar} label="Bookings" /></li>
            <li><NavItem tab="favorites" icon={Heart} label="Favorites" /></li>
            <li><NavItem tab="tickets" icon={Ticket} label="Tickets" /></li>
            <li><NavItem tab="messages" icon={Mail} label="Messages" /></li>
          </ul>
        </aside>

        {/* Content */}
        <section className="flex-1 p-4 md:p-8">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-bold mb-4">🌏 Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow">Upcoming Tours: <b>3</b></div>
                <div className="p-4 bg-white rounded-lg shadow">Bookings: <b>5</b></div>
                <div className="p-4 bg-white rounded-lg shadow">Saved Places: <b>12</b></div>
              </div>
            </div>
          )}

          {activeTab === "tours" && (
            <div>
              <h2 className="text-xl font-bold mb-4">🗺️ My Tours</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Rumtek Monastery Tour – Oct 6</li>
                <li className="bg-white p-3 rounded shadow">Pemayangtse Monastery Visit – Oct 8</li>
              </ul>
            </div>
          )}

          {activeTab === "bookings" && (
            <div>
              <h2 className="text-xl font-bold mb-4">📅 Bookings</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Hotel Silk Route – Oct 5 to Oct 7</li>
                <li className="bg-white p-3 rounded shadow">Taxi from Gangtok – Oct 6</li>
              </ul>
            </div>
          )}

          {activeTab === "favorites" && (
            <div>
              <h2 className="text-xl font-bold mb-4">❤️ Favorites</h2>
              <p className="bg-white p-4 rounded shadow">You’ve saved 12 monasteries and 4 restaurants.</p>
            </div>
          )}

          {activeTab === "tickets" && (
            <div>
              <h2 className="text-xl font-bold mb-4">🎟️ Tickets</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Festival Pass – Oct 10</li>
                <li className="bg-white p-3 rounded shadow">Entry Ticket – Pemayangtse Monastery</li>
              </ul>
            </div>
          )}

          {activeTab === "messages" && (
            <div>
              <h2 className="text-xl font-bold mb-4">✉️ Messages</h2>
              <p className="bg-white p-4 rounded">No new messages.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
