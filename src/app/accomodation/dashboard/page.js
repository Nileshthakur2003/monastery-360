'use client'

import Link from "next/link"
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Bed,
  Calendar,
  Users,
  Wallet,
  Mail,
  Bell,
  Search,
  ChevronDown,
  Menu,
  X,
  LogOut,
  MessageSquare,
  Star,
} from 'lucide-react';

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
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
};


export default function HotelDashboard() {
  const [activeMenu, setActiveMenu] = useState('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Rooms', icon: Bed },
    { name: 'Bookings', icon: Calendar },
    { name: 'Guests', icon: Users },
    { name: 'Earnings', icon: Wallet },
    { name: 'Messages', icon: Mail },
  ];

  const renderContent = () => {
    switch (activeMenu) {
        case 'Overview':
            return (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard icon={Bed} title="Available Rooms" value="12" change="+2" />
                    <StatCard icon={Calendar} title="Today's Check-ins" value="8" />
                    <StatCard icon={Users} title="Guests In-house" value="45" />
                </div>
                <div className="mt-8">
                  <ContentBlock title="Recent Activity" icon={LayoutDashboard}>
                    <p className="text-sm text-slate-600">Quick view of recent bookings and guest messages.</p>
                     <div className="bg-slate-50 p-3 rounded-md border text-sm">
                      <strong>New Booking:</strong> Emily Wang (Suite) for 3 nights.
                     </div>
                     <div className="bg-slate-50 p-3 rounded-md border text-sm">
                      <strong>New Message:</strong> Rahul Sharma requested a late check-out.
                     </div>
                  </ContentBlock>
                </div>
              </div>
            );
        case 'Rooms':
            return (
                <ContentBlock title="Room Management" icon={Bed}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3">Room No.</th>
                                    <th scope="col" className="px-4 py-3">Type</th>
                                    <th scope="col" className="px-4 py-3">Status</th>
                                    <th scope="col" className="px-4 py-3">Price/Night</th>
                                    <th scope="col" className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-4 py-3 font-medium">204</td>
                                    <td className="px-4 py-3">Deluxe</td>
                                    <td className="px-4 py-3"><span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">Occupied</span></td>
                                    <td className="px-4 py-3">₹3,500</td>
                                    <td className="px-4 py-3"><button className="font-medium text-emerald-600 hover:underline">Manage</button></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-3 font-medium">301</td>
                                    <td className="px-4 py-3">Suite</td>
                                    <td className="px-4 py-3"><span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">Available</span></td>
                                    <td className="px-4 py-3">₹5,000</td>
                                    <td className="px-4 py-3"><button className="font-medium text-emerald-600 hover:underline">Manage</button></td>
                                </tr>
                                 <tr className="border-b">
                                    <td className="px-4 py-3 font-medium">102</td>
                                    <td className="px-4 py-3">Standard</td>
                                    <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full">Cleaning</span></td>
                                    <td className="px-4 py-3">₹2,500</td>
                                    <td className="px-4 py-3"><button className="font-medium text-emerald-600 hover:underline">Manage</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ContentBlock>
            );
        case 'Bookings':
             return (
                <ContentBlock title="Bookings" icon={Calendar}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3">Guest Name</th>
                                    <th scope="col" className="px-4 py-3">Check-in</th>
                                    <th scope="col" className="px-4 py-3">Check-out</th>
                                    <th scope="col" className="px-4 py-3">Room</th>
                                    <th scope="col" className="px-4 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-4 py-3 font-medium">Rahul Sharma</td>
                                    <td className="px-4 py-3">2025-10-06</td>
                                    <td className="px-4 py-3">2025-10-08</td>
                                    <td className="px-4 py-3">Deluxe</td>
                                    <td className="px-4 py-3"><span className="text-blue-600 font-semibold">Checked-in</span></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-3 font-medium">Emily Wang</td>
                                    <td className="px-4 py-3">2025-10-07</td>
                                    <td className="px-4 py-3">2025-10-10</td>
                                    <td className="px-4 py-3">Suite</td>
                                    <td className="px-4 py-3"><span className="text-green-600 font-semibold">Confirmed</span></td>
                                </tr>
                                 <tr className="border-b">
                                    <td className="px-4 py-3 font-medium">John Doe</td>
                                    <td className="px-4 py-3">2025-10-08</td>
                                    <td className="px-4 py-3">2025-10-09</td>
                                    <td className="px-4 py-3">Standard</td>
                                     <td className="px-4 py-3"><span className="text-green-600 font-semibold">Confirmed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ContentBlock>
            );
        case 'Guests':
             return (
                <ContentBlock title="Guest Directory" icon={Users}>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-md border flex items-center gap-4">
                             <img src="https://placehold.co/48x48/E2E8F0/475569?text=AJ" alt="Alex Johnson" className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="font-semibold">Alex Johnson</h4>
                                <p className="text-sm text-slate-600">Room 204 | Checked in: Oct 5</p>
                                <button className="text-xs text-emerald-600 font-semibold mt-1">View Details</button>
                            </div>
                        </div>
                         <div className="bg-slate-50 p-4 rounded-md border flex items-center gap-4">
                             <img src="https://placehold.co/48x48/E2E8F0/475569?text=PP" alt="Priya Patel" className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="font-semibold">Priya Patel</h4>
                                <p className="text-sm text-slate-600">Room 302 | Checked in: Oct 6</p>
                                <button className="text-xs text-emerald-600 font-semibold mt-1">View Details</button>
                            </div>
                        </div>
                    </div>
                </ContentBlock>
            );
        case 'Earnings':
             return (
                <ContentBlock title="Financial Overview" icon={Wallet}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-md border">
                        <h4 className="font-semibold">Weekly Revenue</h4>
                        <p className="text-2xl font-bold text-emerald-600 mt-1">₹55,000</p>
                        <p className="text-xs text-green-500 font-semibold">+12% from last week</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-md border">
                        <h4 className="font-semibold">Monthly Revenue</h4>
                        <p className="text-2xl font-bold text-emerald-600 mt-1">₹2,10,000</p>
                         <p className="text-xs text-green-500 font-semibold">+8% from last month</p>
                      </div>
                    </div>
                     <div className="mt-4 bg-slate-50 p-4 rounded-md border">
                        <h4 className="font-semibold mb-2">Revenue Breakdown</h4>
                        {/* Placeholder for a chart */}
                        <div className="h-40 bg-slate-200 rounded-md flex items-center justify-center text-slate-500 text-sm">
                          Chart showing breakdown by Rooms, F&B, etc.
                        </div>
                    </div>
                </ContentBlock>
            );
        case 'Messages':
             return (
                <ContentBlock title="Guest Messages" icon={Mail}>
                    <div className="bg-slate-50 p-3 rounded-md border flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <img src="https://placehold.co/40x40/E2E8F0/475569?text=RS" alt="Rahul Sharma" className="w-10 h-10 rounded-full" />
                        <div>
                            <div className="flex items-baseline gap-2">
                                <h4 className="font-semibold">Rahul Sharma</h4>
                                <p className="text-xs text-slate-400">15 mins ago</p>
                            </div>
                            <p className="text-sm text-slate-600">"Hi, is it possible to get a late check-out tomorrow? Around 1 PM?"</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-md border flex items-start gap-3 opacity-70">
                         <div className="w-1.5 h-1.5 rounded-full bg-transparent mt-2"></div>
                         <img src="https://placehold.co/40x40/E2E8F0/475569?text=EW" alt="Emily Wang" className="w-10 h-10 rounded-full" />
                        <div>
                            <div className="flex items-baseline gap-2">
                                <h4 className="font-semibold">Emily Wang</h4>
                                <p className="text-xs text-slate-400">3 hours ago</p>
                            </div>
                            <p className="text-sm text-slate-600">"The room is lovely! Could we have two extra towels, please?"</p>
                        </div>
                    </div>
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
            <h2 className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Hotel Dashboard</h2>
            <ul className="space-y-2 mt-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
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
                  <img src="https://placehold.co/40x40/E2E8F0/475569?text=M" alt="Manager" className="w-10 h-10 rounded-full" />
                  <div>
                      <p className="font-semibold text-sm">Hotel Manager</p>
                      <p className="text-xs text-slate-500">manager@monastery360.com</p>
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
                      placeholder="Search bookings..."
                      className="pl-10 pr-4 py-2 w-full max-w-[150px] sm:w-64 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <button className="p-2 rounded-full hover:bg-slate-100">
                      <Bell className="w-6 h-6 text-slate-600"/>
                  </button>
                   <button className="flex items-center gap-2 p-2 rounded-full hover:bg-slate-100">
                      <img src="https://placehold.co/32x32/E2E8F0/475569?text=M" alt="Manager" className="w-8 h-8 rounded-full" />
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

