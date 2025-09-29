'use client'

import { useState } from "react"
import { Menu, X, LayoutDashboard, BookOpen, Archive, Users, Calendar, Mail } from "lucide-react"

export default function AcademiaDashboard() {
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
          <h2 className="text-lg font-semibold mb-6">Academia Dashboard</h2>
          <ul className="space-y-3">
            <li><NavItem tab="overview" icon={LayoutDashboard} label="Overview" /></li>
            <li><NavItem tab="research" icon={BookOpen} label="My Research" /></li>
            <li><NavItem tab="archives" icon={Archive} label="Saved Archives" /></li>
            <li><NavItem tab="collaborations" icon={Users} label="Collaborations" /></li>
            <li><NavItem tab="events" icon={Calendar} label="Events" /></li>
            <li><NavItem tab="messages" icon={Mail} label="Messages" /></li>
          </ul>
        </aside>

        {/* Content Area */}
        <section className="flex-1 p-4 md:p-8">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-bold mb-4">📚 Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow">Active Research: <b>3</b></div>
                <div className="p-4 bg-white rounded-lg shadow">Saved Archives: <b>12</b></div>
                <div className="p-4 bg-white rounded-lg shadow">Upcoming Events: <b>2</b></div>
              </div>
            </div>
          )}

          {activeTab === "research" && (
            <div>
              <h2 className="text-xl font-bold mb-4">📝 My Research</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Digital Preservation of Rumtek Murals</li>
                <li className="bg-white p-3 rounded shadow">Sikkim Monastery Architectural Study</li>
              </ul>
            </div>
          )}

          {activeTab === "archives" && (
            <div>
              <h2 className="text-xl font-bold mb-4">📂 Saved Archives</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Pemayangtse Manuscript 17th Century</li>
                <li className="bg-white p-3 rounded shadow">Tashiding Monastery Murals</li>
              </ul>
            </div>
          )}

          {activeTab === "collaborations" && (
            <div>
              <h2 className="text-xl font-bold mb-4">🤝 Collaborations</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Dr. Tenzin – Community Archiving</li>
                <li className="bg-white p-3 rounded shadow">Prof. Wangmo – Cultural Research</li>
              </ul>
            </div>
          )}

          {activeTab === "events" && (
            <div>
              <h2 className="text-xl font-bold mb-4">📅 Events</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Losar Festival – Feb 5</li>
                <li className="bg-white p-3 rounded shadow">Cham Dance Documentation – Oct 10</li>
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
