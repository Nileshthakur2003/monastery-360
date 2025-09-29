'use client'

import Link from "next/link"
import React, { useState } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Archive,
  Users,
  Calendar,
  Mail,
  Bell,
  Search,
  ChevronDown,
  Menu,
  X,
  LogOut,
  FileText,
  ImageIcon,
  MessageSquare,
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


export default function AcademiaDashboard() {
  const [activeMenu, setActiveMenu] = useState('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'My Research', icon: BookOpen },
    { name: 'Manuscripts', icon: FileText },
    { name: 'Murals', icon: ImageIcon },
    { name: 'Saved Archives', icon: Archive },
    { name: 'Collaborations', icon: Users },
    { name: 'Events', icon: Calendar },
    { name: 'Messages', icon: Mail },
  ];

  const renderContent = () => {
    switch (activeMenu) {
        case 'Overview':
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard icon={BookOpen} title="Active Research" value="3" change="+1" />
                    <StatCard icon={Archive} title="Saved Archives" value="12" change="+5" />
                    <StatCard icon={Calendar} title="Upcoming Events" value="2" />
                </div>
            );
        case 'My Research':
            return (
                <ContentBlock title="My Research" icon={BookOpen}>
                    <div className="bg-slate-50 p-4 rounded-md border">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-semibold">Digital Preservation of Rumtek Murals</h4>
                                <p className="text-sm text-slate-600 mt-1">Focusing on high-resolution imaging and color analysis.</p>
                            </div>
                            <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">In Progress</span>
                        </div>
                        <div className="mt-4">
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 text-right">60% Complete</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-md border">
                       <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-semibold">Sikkim Monastery Architectural Study</h4>
                                <p className="text-sm text-slate-600 mt-1">A comparative study of 17th and 18th-century structures.</p>
                            </div>
                            <span className="text-xs font-medium bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Planning</span>
                        </div>
                         <div className="mt-4">
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '20%'}}></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 text-right">20% Complete</p>
                        </div>
                    </div>
                     <div className="bg-slate-50 p-4 rounded-md border">
                       <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-semibold">Translation of Ancient Manuscripts</h4>
                                <p className="text-sm text-slate-600 mt-1">Translating key texts from Tashiding Monastery.</p>
                            </div>
                            <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">Completed</span>
                        </div>
                         <div className="mt-4">
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 text-right">100% Complete</p>
                        </div>
                    </div>
                </ContentBlock>
            );
        case 'Manuscripts':
            return (
                <ContentBlock title="Search Manuscripts" icon={FileText}>
                    <div className="flex gap-3 flex-col sm:flex-row">
                      <input
                        aria-label="search manuscripts"
                        className="flex-1 rounded-full border px-4 py-2 text-sm border-slate-300 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Search by title, script, or monastery..."
                      />
                      <button className="rounded-full bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-600 text-sm font-semibold flex items-center justify-center gap-2">
                        <Search size={16}/>
                        Global Search
                      </button>
                    </div>
                    <div className="border-t mt-4 pt-4 space-y-3">
                        <div className="bg-slate-50 p-3 rounded-md border flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Prajnaparamita Sutra</p>
                                <p className="text-sm text-slate-500">From: Rumtek Monastery</p>
                            </div>
                            <button className="text-sm font-semibold bg-white border border-slate-300 px-3 py-1 rounded-full hover:border-emerald-500">View Details</button>
                        </div>
                         <div className="bg-slate-50 p-3 rounded-md border flex justify-between items-center">
                            <div>
                                <p className="font-semibold">The Life of Padmasambhava</p>
                                <p className="text-sm text-slate-500">From: Pemayangtse Monastery</p>
                            </div>
                            <button className="text-sm font-semibold bg-white border border-slate-300 px-3 py-1 rounded-full hover:border-emerald-500">View Details</button>
                        </div>
                    </div>
                </ContentBlock>
            );
        case 'Murals':
            return (
                 <ContentBlock title="Search Murals" icon={ImageIcon}>
                    <div className="flex gap-3 flex-col sm:flex-row">
                      <input
                        aria-label="search murals"
                        className="flex-1 rounded-full border px-4 py-2 text-sm border-slate-300 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Search by subject, style, or monastery..."
                      />
                      <button className="rounded-full bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-600 text-sm font-semibold flex items-center justify-center gap-2">
                        <Search size={16}/>
                        Global Search
                      </button>
                    </div>
                    <div className="border-t mt-4 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="rounded-md border bg-slate-50 p-3">
                            <div className="w-full h-32 bg-slate-200 rounded-md flex items-center justify-center">
                               <ImageIcon className="w-10 h-10 text-slate-400"/>
                            </div>
                            <h5 className="font-semibold mt-2">Wheel of Life</h5>
                            <p className="text-sm text-slate-500">Tashiding Monastery</p>
                        </div>
                        <div className="rounded-md border bg-slate-50 p-3">
                            <div className="w-full h-32 bg-slate-200 rounded-md flex items-center justify-center">
                               <ImageIcon className="w-10 h-10 text-slate-400"/>
                            </div>
                            <h5 className="font-semibold mt-2">Guru Rinpoche</h5>
                            <p className="text-sm text-slate-500">Pemayangtse Monastery</p>
                        </div>
                         <div className="rounded-md border bg-slate-50 p-3">
                            <div className="w-full h-32 bg-slate-200 rounded-md flex items-center justify-center">
                               <ImageIcon className="w-10 h-10 text-slate-400"/>
                            </div>
                            <h5 className="font-semibold mt-2">Mandala of Kalachakra</h5>
                            <p className="text-sm text-slate-500">Rumtek Monastery</p>
                        </div>
                    </div>
                </ContentBlock>
            );
        case 'Saved Archives':
             return (
                <ContentBlock title="Saved Archives" icon={Archive}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3">Title</th>
                                    <th scope="col" className="px-4 py-3">Monastery</th>
                                    <th scope="col" className="px-4 py-3">Date Saved</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-4 py-3 font-medium flex items-center gap-2"><FileText size={16} className="text-slate-400"/> Pemayangtse Manuscript 17th Century</td>
                                    <td className="px-4 py-3">Pemayangtse</td>
                                    <td className="px-4 py-3">2025-09-15</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-3 font-medium flex items-center gap-2"><ImageIcon size={16} className="text-slate-400"/> Tashiding Monastery Murals Collection</td>
                                    <td className="px-4 py-3">Tashiding</td>
                                    <td className="px-4 py-3">2025-09-12</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-3 font-medium flex items-center gap-2"><FileText size={16} className="text-slate-400"/> Rumtek Historical Letters</td>
                                    <td className="px-4 py-3">Rumtek</td>
                                    <td className="px-4 py-3">2025-08-28</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ContentBlock>
            );
        case 'Collaborations':
             return (
                <ContentBlock title="Collaborations" icon={Users}>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-md border flex items-center gap-4">
                            <img src="https://placehold.co/48x48/E2E8F0/475569?text=TD" alt="Dr. Tenzin" className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="font-semibold">Dr. Tenzin</h4>
                                <p className="text-sm text-slate-600">Community Archiving Project</p>
                                <button className="text-xs text-emerald-600 font-semibold mt-1">Send Message</button>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-md border flex items-center gap-4">
                             <img src="https://placehold.co/48x48/E2E8F0/475569?text=PW" alt="Prof. Wangmo" className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="font-semibold">Prof. Wangmo</h4>
                                <p className="text-sm text-slate-600">Cultural Research Initiative</p>
                                <button className="text-xs text-emerald-600 font-semibold mt-1">Send Message</button>
                            </div>
                        </div>
                    </div>
                </ContentBlock>
            );
        case 'Events':
             return (
                <ContentBlock title="Events" icon={Calendar}>
                    <div className="bg-slate-50 p-3 rounded-md border flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Cham Dance Documentation</p>
                            <p className="text-sm text-slate-500">October 10, 2025 at Pemayangtse</p>
                        </div>
                        <button className="text-sm font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">RSVP</button>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-md border flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Losar Festival Archiving</p>
                            <p className="text-sm text-slate-500">February 5, 2026 at Rumtek</p>
                        </div>
                        <button className="text-sm font-semibold bg-slate-200 text-slate-700 px-3 py-1 rounded-full">View</button>
                    </div>
                </ContentBlock>
            );
        case 'Messages':
             return (
                <ContentBlock title="Messages" icon={Mail}>
                    <div className="bg-slate-50 p-3 rounded-md border flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <img src="https://placehold.co/40x40/E2E8F0/475569?text=TD" alt="Dr. Tenzin" className="w-10 h-10 rounded-full" />
                        <div>
                            <div className="flex items-baseline gap-2">
                                <h4 className="font-semibold">Dr. Tenzin</h4>
                                <p className="text-xs text-slate-400">2 hours ago</p>
                            </div>
                            <p className="text-sm text-slate-600">The latest manuscript scans are ready for your review. Let me know your thoughts.</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-md border flex items-start gap-3 opacity-70">
                        <div className="w-1.5 h-1.5 rounded-full bg-transparent mt-2"></div>
                        <img src="https://placehold.co/40x40/E2E8F0/475569?text=PW" alt="Prof. Wangmo" className="w-10 h-10 rounded-full" />
                        <div>
                            <div className="flex items-baseline gap-2">
                                <h4 className="font-semibold">Prof. Wangmo</h4>
                                <p className="text-xs text-slate-400">Yesterday</p>
                            </div>
                            <p className="text-sm text-slate-600">Great progress on the architectural study! I've attached my notes.</p>
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
            <h2 className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Academia Dashboard</h2>
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
                  <img src="https://placehold.co/40x40/E2E8F0/475569?text=R" alt="Researcher" className="w-10 h-10 rounded-full" />
                  <div>
                      <p className="font-semibold text-sm">A. Researcher</p>
                      <p className="text-xs text-slate-500">researcher@monastery360.com</p>
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
                      <img src="https://placehold.co/32x32/E2E8F0/475569?text=R" alt="Researcher" className="w-8 h-8 rounded-full" />
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

