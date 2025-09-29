'use client'

import React, { useState } from 'react';
import {
  LayoutDashboard,
  Landmark,
  Calendar,
  Archive,
  Users,
  Settings,
  Bell,
  Search,
  ChevronDown,
  PlusCircle,
  MoreVertical,
  Menu,
  X,
  LogOut,
} from 'lucide-react';

// You can create this as a separate component if you wish
const StatCard = ({ icon, title, value, change }) => {
  const Icon = icon;
  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-emerald-100 rounded-md">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <span className={`text-sm font-semibold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
      </div>
      <p className="mt-4 text-3xl font-bold">{value}</p>
      <p className="text-sm text-slate-500">{title}</p>
    </div>
  );
};

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Monasteries', icon: Landmark },
    { name: 'Events', icon: Calendar },
    { name: 'Archives', icon: Archive },
    { name: 'Users', icon: Users },
    { name: 'Settings', icon: Settings },
  ];
  
  const featuredMonasteries = [
    { id: 'rumtek', name: 'Rumtek Monastery', location: 'Gangtok', status: 'Published' },
    { id: 'pemayangtse', name: 'Pemayangtse Monastery', location: 'Pelling', status: 'Published' },
    { id: 'tashiding', name: 'Tashiding Monastery', location: 'West Sikkim', status: 'Draft' },
     { id: 'enche', name: 'Enchey Monastery', location: 'Gangtok', status: 'Published' },
  ];


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* OVERLAY FOR MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div className="flex">
        {/* SIDEBAR */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex-col flex transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-bold tracking-tight">Monastery360</h1>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 rounded-md hover:bg-slate-100">
              <X className="w-6 h-6"/>
            </button>
          </div>
          <nav className="flex-1 px-4 py-2">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    onClick={() => {
                      setActiveMenu(item.name);
                      setSidebarOpen(false); // Close sidebar on menu item click
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
                  <img src="https://placehold.co/40x40/E2E8F0/475569?text=A" alt="Admin" className="w-10 h-10 rounded-full" />
                  <div>
                      <p className="font-semibold text-sm">Admin User</p>
                      <p className="text-xs text-slate-500">admin@monastery360.com</p>
                  </div>
              </div>
              <a href="/" className="flex items-center justify-center w-full gap-2 mt-4 text-sm bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors">
                <LogOut className="w-4 h-4"/>
                <span>Logout</span>
              </a>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {/* HEADER */}
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
                      <img src="https://placehold.co/32x32/E2E8F0/475569?text=A" alt="Admin" className="w-8 h-8 rounded-full" />
                      <ChevronDown className="w-4 h-4 text-slate-600 hidden sm:block"/>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* PAGE CONTENT */}
          <div className="p-4 sm:p-6 lg:p-8">
              {/* STATS CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard icon={Landmark} title="Total Monasteries" value="24" change="+2 this month" />
                  <StatCard icon={Users} title="New Users" value="1,204" change="+15%" />
                  <StatCard icon={Calendar} title="Upcoming Events" value="8" change="+3" />
                  <StatCard icon={Archive} title="Archive Items" value="5,678" change="+200" />
              </div>

              {/* MONASTERY MANAGEMENT */}
              <div className="mt-8 bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold">Manage Monasteries</h3>
                      <button className="flex items-center justify-center gap-2 text-sm bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 w-full sm:w-auto">
                          <PlusCircle className="w-5 h-5"/>
                          <span>Add New</span>
                      </button>
                  </div>
                  
                  {/* Table for MD screens and up */}
                  <div className="overflow-x-auto hidden md:block">
                      <table className="w-full text-sm text-left">
                          <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-xs">
                              <tr>
                                  <th className="p-3">Name</th>
                                  <th className="p-3">Location</th>
                                  <th className="p-3">Status</th>
                                  <th className="p-3 text-right">Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              {featuredMonasteries.map(m => (
                                  <tr key={m.id} className="border-b">
                                      <td className="p-3 font-medium">{m.name}</td>
                                      <td className="p-3 text-slate-600">{m.location}</td>
                                      <td className="p-3">
                                          <span className={`px-2 py-1 text-xs rounded-full ${m.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                              {m.status}
                                          </span>
                                      </td>
                                      <td className="p-3 text-right">
                                          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
                                              <MoreVertical className="w-4 h-4"/>
                                          </button>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>

                  {/* Cards for mobile */}
                  <div className="space-y-4 md:hidden">
                    {featuredMonasteries.map(m => (
                        <div key={m.id} className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-slate-800">{m.name}</p>
                                <p className="text-sm text-slate-600 mt-1">{m.location}</p>
                                <div className="mt-3">
                                    <span className={`px-2 py-1 text-xs rounded-full ${m.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {m.status}
                                    </span>
                                </div>
                            </div>
                            <button className="p-2 text-slate-500 hover:bg-slate-200 rounded-full -mr-2 -mt-2">
                                <MoreVertical className="w-5 h-5"/>
                            </button>
                        </div>
                    ))}
                  </div>

              </div>
          </div>
        </main>
      </div>
    </div>
  );
}

