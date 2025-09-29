'use client'

import { useState } from "react"
import { Menu, X, LayoutDashboard, Car, Calendar, Wallet, Users, Mail } from "lucide-react"

export default function TransportDashboard() {
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
          <h2 className="text-lg font-semibold mb-6">Transport Dashboard</h2>
          <ul className="space-y-3">
            <li><NavItem tab="overview" icon={LayoutDashboard} label="Overview" /></li>
            <li><NavItem tab="rides" icon={Car} label="My Rides" /></li>
            <li><NavItem tab="bookings" icon={Calendar} label="Bookings" /></li>
            <li><NavItem tab="drivers" icon={Users} label="Drivers" /></li>
            <li><NavItem tab="earnings" icon={Wallet} label="Earnings" /></li>
            <li><NavItem tab="messages" icon={Mail} label="Messages" /></li>
          </ul>
        </aside>

        {/* Content */}
        <section className="flex-1 p-4 md:p-8">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-bold mb-4">🚖 Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow">Today's Rides: <b>15</b></div>
                <div className="p-4 bg-white rounded-lg shadow">Pending Bookings: <b>7</b></div>
                <div className="p-4 bg-white rounded-lg shadow">Total Earnings: <b>₹12,500</b></div>
              </div>
            </div>
          )}

          {activeTab === "rides" && (
            <div>
              <h2 className="text-xl font-bold mb-4">🚕 My Rides</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Gangtok ➝ Rumtek – 9:00 AM</li>
                <li className="bg-white p-3 rounded shadow">Pelling ➝ Pemayangtse – 1:30 PM</li>
              </ul>
            </div>
          )}

          {activeTab === "bookings" && (
            <div>
              <h2 className="text-xl font-bold mb-4">📅 Bookings</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Tourist: John Doe – Oct 6</li>
                <li className="bg-white p-3 rounded shadow">Tourist: Aditi Sharma – Oct 7</li>
              </ul>
            </div>
          )}

          {activeTab === "drivers" && (
            <div>
              <h2 className="text-xl font-bold mb-4">🧑‍✈️ Drivers</h2>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded shadow">Driver: Tashi – Taxi #SK1234</li>
                <li className="bg-white p-3 rounded shadow">Driver: Karma – Van #SK5678</li>
              </ul>
            </div>
          )}

          {activeTab === "earnings" && (
            <div>
              <h2 className="text-xl font-bold mb-4">💰 Earnings</h2>
              <p className="bg-white p-4 rounded shadow">This Week: ₹35,000</p>
              <p className="bg-white p-4 rounded shadow mt-2">This Month: ₹1,20,000</p>
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
