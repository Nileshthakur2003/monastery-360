'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X, LayoutDashboard, Utensils, Calendar, Star, Mail, LogOut } from "lucide-react"

export default function RestaurantDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const NavItem = ({ tab, icon: Icon, label }) => (
    <button
      onClick={() => { setActiveTab(tab); setSidebarOpen(false) }}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
        activeTab === tab ? "bg-emerald-100 text-emerald-700 font-semibold" : "hover:bg-gray-100"
      }`}
    >
      <Icon size={18} /> {label}
    </button>
  )

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      {/* Top Bar */}
      <header className="bg-emerald-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-bold">Monastery360</h1>
        <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`fixed md:static h-full w-64 bg-white shadow-lg p-4 border-r transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          <h2 className="text-lg font-semibold mb-6">Restaurant Dashboard</h2>
          <ul className="space-y-3">
            <li><NavItem tab="overview" icon={LayoutDashboard} label="Overview" /></li>
            <li><NavItem tab="menu" icon={Utensils} label="Menu Management" /></li>
            <li><NavItem tab="bookings" icon={Calendar} label="Bookings" /></li>
            <li><NavItem tab="reviews" icon={Star} label="Reviews" /></li>
            <li><NavItem tab="messages" icon={Mail} label="Messages" /></li>
          </ul>
        </aside>

        {/* Content */}
        <section className="flex-1 p-4 md:p-8">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-bold mb-4">🍽️ Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow">Today’s Orders: <b>42</b></div>
                <div className="p-4 bg-white rounded-lg shadow">Bookings: <b>7</b></div>
                <div className="p-4 bg-white rounded-lg shadow">Avg. Rating: ⭐ 4.5</div>
              </div>
            </div>
          )}

          {activeTab === "menu" && (
            <div>
              <h2 className="text-xl font-bold mb-4">📋 Manage Menu</h2>
              <p className="bg-white p-4 rounded-lg shadow">Add, edit or remove food items here.</p>
            </div>
          )}

          {activeTab === "bookings" && (
            <div>
              <h2 className="text-xl font-bold mb-4">📅 Bookings</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Table for 4 – Oct 5, 7 PM</li>
                <li className="bg-white p-3 rounded shadow">Table for 2 – Oct 6, 1 PM</li>
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h2 className="text-xl font-bold mb-4">⭐ Reviews</h2>
              <p className="bg-white p-4 rounded">“Excellent food & service!” – Tourist</p>
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
