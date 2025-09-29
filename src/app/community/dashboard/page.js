'use client'

import { useState } from "react"
import { Menu, X, LayoutDashboard, Users, Calendar, Heart, BarChart, Mail } from "lucide-react"

export default function CommunityDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const NavItem = ({ tab, icon: Icon, label }) => (
    <button
      onClick={() => { setActiveTab(tab); setSidebarOpen(false) }}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
        activeTab === tab ? "bg-green-100 text-green-700 font-semibold" : "hover:bg-gray-100"
      }`}
    >
      <Icon size={18} /> {label}
    </button>
  )

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      {/* Top Bar */}
      <header className="bg-green-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-bold">Monastery360</h1>
        <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`fixed md:static h-full w-64 bg-white shadow-lg p-4 border-r transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          <h2 className="text-lg font-semibold mb-6">Community Dashboard</h2>
          <ul className="space-y-3">
            <li><NavItem tab="overview" icon={LayoutDashboard} label="Overview" /></li>
            <li><NavItem tab="volunteer" icon={Heart} label="Volunteer Opportunities" /></li>
            <li><NavItem tab="events" icon={Calendar} label="Events" /></li>
            <li><NavItem tab="members" icon={Users} label="Community Members" /></li>
            <li><NavItem tab="progress" icon={BarChart} label="Impact & Progress" /></li>
            <li><NavItem tab="messages" icon={Mail} label="Messages" /></li>
          </ul>
        </aside>

        {/* Content Area */}
        <section className="flex-1 p-4 md:p-8">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-bold mb-4">🌱 Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow">Active Volunteers: <b>42</b></div>
                <div className="p-4 bg-white rounded-lg shadow">Upcoming Events: <b>3</b></div>
                <div className="p-4 bg-white rounded-lg shadow">Total Hours Contributed: <b>560</b></div>
              </div>
            </div>
          )}

          {activeTab === "volunteer" && (
            <div>
              <h2 className="text-xl font-bold mb-4">🤝 Volunteer Opportunities</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Community Archiving – Oct 5</li>
                <li className="bg-white p-3 rounded shadow">Monastery Clean-Up – Oct 8</li>
                <li className="bg-white p-3 rounded shadow">Digital Documentation Workshop – Oct 10</li>
              </ul>
            </div>
          )}

          {activeTab === "events" && (
            <div>
              <h2 className="text-xl font-bold mb-4">📅 Events</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Losar Festival – Feb 5</li>
                <li className="bg-white p-3 rounded shadow">Community Archiving Day – Oct 12</li>
              </ul>
            </div>
          )}

          {activeTab === "members" && (
            <div>
              <h2 className="text-xl font-bold mb-4">👥 Community Members</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Tenzin Dorjee – Volunteer</li>
                <li className="bg-white p-3 rounded shadow">Pema Wangmo – Research Volunteer</li>
                <li className="bg-white p-3 rounded shadow">Sonam Tshering – Event Coordinator</li>
              </ul>
            </div>
          )}

          {activeTab === "progress" && (
            <div>
              <h2 className="text-xl font-bold mb-4">📊 Impact & Progress</h2>
              <div className="bg-white p-4 rounded shadow">
                <p>Total Monasteries Digitally Archived: <b>8</b></p>
                <p>Total Documents Tagged: <b>320</b></p>
                <p>Volunteer Hours Contributed: <b>560</b></p>
              </div>
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
