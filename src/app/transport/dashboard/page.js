'use client'

import Link from "next/link"
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Car,
  Calendar,
  Wallet,
  Users,
  Mail,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react"

// Reusable StatCard component from the original theme
const StatCard = ({ icon, title, value, change }) => {
  const Icon = icon;
  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-emerald-100 rounded-md">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        {change && (
            <span className={`text-sm font-semibold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {change}
            </span>
        )}
      </div>
      <p className="mt-4 text-3xl font-bold">{value}</p>
      <p className="text-sm text-slate-500">{title}</p>
    </div>
  );
};

// Reusable content block for list-based pages
const ContentBlock = ({ title, children, icon }) => {
    const Icon = icon;
    return (
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icon className="w-5 h-5 text-emerald-600" />
                {title}
            </h3>
            <div className="space-y-3">
                {children}
            </div>
        </div>
    );
};


export default function TransportDashboard() {
  const [activeMenu, setActiveMenu] = useState('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'My Rides', icon: Car },
    { name: 'Bookings', icon: Calendar },
    { name: 'Drivers', icon: Users },
    { name: 'Earnings', icon: Wallet },
    { name: 'Messages', icon: Mail },
  ];

  const renderContent = () => {
    switch (activeMenu) {
        case 'Overview':
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard icon={Car} title="Today's Rides" value="15" change="+3" />
                    <StatCard icon={Calendar} title="Pending Bookings" value="7" />
                    <StatCard icon={Wallet} title="Today's Earnings" value="₹12,500" />
                </div>
            );
        case 'My Rides':
             return (
                <ContentBlock title="My Rides" icon={Car}>
                    <div className="bg-slate-50 p-3 rounded-md border">Gangtok ➝ Rumtek – 9:00 AM</div>
                    <div className="bg-slate-50 p-3 rounded-md border">Pelling ➝ Pemayangtse – 1:30 PM</div>
                </ContentBlock>
            );
        case 'Bookings':
             return (
                <ContentBlock title="Bookings" icon={Calendar}>
                    <div className="bg-slate-50 p-3 rounded-md border">Tourist: John Doe – Oct 6</div>
                    <div className="bg-slate-50 p-3 rounded-md border">Tourist: Aditi Sharma – Oct 7</div>
                </ContentBlock>
            );
        case 'Drivers':
             return (
                <ContentBlock title="Drivers" icon={Users}>
                    <div className="bg-slate-50 p-3 rounded-md border">Driver: Tashi – Taxi #SK1234</div>
                    <div className="bg-slate-50 p-3 rounded-md border">Driver: Karma – Van #SK5678</div>
                </ContentBlock>
            );
        case 'Earnings':
             return (
                <ContentBlock title="Earnings" icon={Wallet}>
                    <div className="bg-slate-50 p-3 rounded-md border">This Week: ₹35,000</div>
                    <div className="bg-slate-50 p-3 rounded-md border mt-2">This Month: ₹1,20,000</div>
                </ContentBlock>
            );
        case 'Messages':
             return (
                <ContentBlock title="Messages" icon={Mail}>
                    <p className="text-slate-600">No new messages.</p>
                </ContentBlock>
            );
        default:
            return <div>Select a tab</div>;
    }
  }


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div className="flex">
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex-col flex transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-bold tracking-tight">Monastery360</h1>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 rounded-md hover:bg-slate-100">
              <X className="w-6 h-6"/>
            </button>
          </div>
          <nav className="flex-1 px-4 py-2">
            <h2 className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Transport Dashboard</h2>
            <ul className="space-y-2 mt-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    onClick={() => {
                      setActiveMenu(item.name);
                      setSidebarOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium ${
                      activeMenu === item.name
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                  <img src="https://placehold.co/40x40/E2E8F0/475569?text=T" alt="Manager" className="w-10 h-10 rounded-full" />
                  <div>
                      <p className="font-semibold text-sm">Transport Manager</p>
                      <p className="text-xs text-slate-500">transport@email.com</p>
                  </div>
              </div>
              <a href="/" className="flex items-center justify-center w-full gap-2 mt-4 text-sm bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors">
                <LogOut className="w-4 h-4"/>
                <span>Logout</span>
              </a>
          </div>
        </aside>

        <main className="flex-1">
          <header className="bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                  <div className="flex items-center">
                    <button onClick={() => setSidebarOpen(true)} className="md:hidden mr-4 p-2 rounded-full hover:bg-slate-100">
                        <Menu className="w-6 h-6"/>
                    </button>
                    <h1 className="text-xl font-semibold">{activeMenu}</h1>
                  </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 w-full max-w-[150px] sm:w-64 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <button className="p-2 rounded-full hover:bg-slate-100">
                      <Bell className="w-6 h-6 text-slate-600"/>
                  </button>
                   <button className="flex items-center gap-2 p-2 rounded-full hover:bg-slate-100">
                      <img src="https://placehold.co/32x32/E2E8F0/475569?text=T" alt="Manager" className="w-8 h-8 rounded-full" />
                      <ChevronDown className="w-4 h-4 text-slate-600 hidden sm:block"/>
                  </button>
                </div>
              </div>
            </div>
          </header>
          
          <div className="p-4 sm:p-6 lg:p-8">
              {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

