'use client'

import Link from "next/link"
import { useState } from "react"
import {
  LayoutDashboard,
  Calendar,
  Users,
  Image,
  Mail,
  LogOut,
  Menu,
  X
} from "lucide-react"

export default function MonasteryDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const NavItem = ({ tab, icon: Icon, label }) => (
    <button
      onClick={() => {
        setActiveTab(tab)
        setSidebarOpen(false)
      }}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
        activeTab === tab
          ? "bg-emerald-100 text-emerald-700 font-semibold"
          : "hover:bg-gray-100"
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
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/explore" className="hover:underline">Explore</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <button className="inline-flex items-center gap-2 hover:underline">
                <Link href="/">
              <LogOut size={16} /> Logout
              </Link>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar (mobile drawer + desktop fixed) */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg p-4 border-r transform transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          <h2 className="text-lg font-semibold text-slate-800 mb-6">Dashboard</h2>
          <ul className="space-y-3">
            <li><NavItem tab="overview" icon={LayoutDashboard} label="Overview" /></li>
            <li><NavItem tab="events" icon={Calendar} label="Events & Festivals" /></li>
            <li><NavItem tab="monks" icon={Users} label="Monks Directory" /></li>
            <li><NavItem tab="gallery" icon={Image} label="Gallery" /></li>
            <li><NavItem tab="messages" icon={Mail} label="Messages" /></li>
          </ul>
        </aside>

        {/* Content */}
        <section className="flex-1 p-4 md:p-8">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">🏯 Overview</h2>
              <p className="text-slate-700">
                Welcome to your monastery dashboard. Manage events, monks, gallery, and visitor messages here.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 md:p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                  <h3 className="font-semibold text-slate-700">Total Monks</h3>
                  <p className="text-xl md:text-2xl font-bold text-emerald-600">25</p>
                </div>
                <div className="p-4 md:p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                  <h3 className="font-semibold text-slate-700">Upcoming Events</h3>
                  <p className="text-xl md:text-2xl font-bold text-emerald-600">3</p>
                </div>
                <div className="p-4 md:p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                  <h3 className="font-semibold text-slate-700">Messages</h3>
                  <p className="text-xl md:text-2xl font-bold text-emerald-600">12</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">📅 Upcoming Events</h2>
              <ul className="space-y-3">
                <li className="p-3 bg-white rounded-lg shadow-sm">Buddha Jayanti – May 2025</li>
                <li className="p-3 bg-white rounded-lg shadow-sm">Annual Monastic Debate – Aug 2025</li>
                <li className="p-3 bg-white rounded-lg shadow-sm">Prayer Festival – Dec 2025</li>
              </ul>
            </div>
          )}

          {activeTab === "monks" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">👥 Monks Directory</h2>
              <ul className="space-y-3">
                <li className="p-3 bg-white rounded-lg shadow-sm">Ven. Tashi Lama – Head Monk</li>
                <li className="p-3 bg-white rounded-lg shadow-sm">Ven. Karma Dorjee – Senior Monk</li>
                <li className="p-3 bg-white rounded-lg shadow-sm">Ven. Sonam – Junior Monk</li>
              </ul>
            </div>
          )}

          {activeTab === "gallery" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">🖼️ Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="w-full h-24 md:h-32 bg-gray-200 rounded-lg shadow"></div>
                <div className="w-full h-24 md:h-32 bg-gray-200 rounded-lg shadow"></div>
                <div className="w-full h-24 md:h-32 bg-gray-200 rounded-lg shadow"></div>
              </div>
            </div>
          )}

          {activeTab === "messages" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">✉️ Messages</h2>
              <p className="p-3 bg-white rounded-lg shadow">No new messages yet.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
