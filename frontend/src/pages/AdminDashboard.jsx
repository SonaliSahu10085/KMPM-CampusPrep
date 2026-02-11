import React, { useState } from "react";
import { MdLogout } from "react-icons/md";

const AdminDashboard = () => {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState("Dashboard Overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // --- DUMMY DATA ---
  const stats = [
    { id: 1, label: "Total Users", value: "1,240", icon: "👥", trend: "+12%" },
    { id: 2, label: "Active Users", value: "850", icon: "🟢", trend: "+5%" },
    {
      id: 3,
      label: "Total Roadmaps",
      value: "12",
      icon: "🗺️",
      trend: "Stable",
    },
    {
      id: 4,
      label: "Total Resources",
      value: "450+",
      icon: "📚",
      trend: "+24",
    },
    { id: 5, label: "Job Posts", value: "86", icon: "💼", trend: "+10" },
    {
      id: 6,
      label: "AI Interviews",
      value: "3,120",
      icon: "🤖",
      trend: "+115",
    },
  ];

  const users = [
    {
      id: 1,
      name: "Aditya Kumar",
      email: "aditya@kmpm.edu",
      year: "3rd Year",
      date: "Jan 12, 2026",
      status: "Active",
    },
    {
      id: 2,
      name: "Sneha Roy",
      email: "sneha.r@kmpm.edu",
      year: "2nd Year",
      date: "Jan 15, 2026",
      status: "Active",
    },
    {
      id: 3,
      name: "Rahul Singh",
      email: "rahul.s@kmpm.edu",
      year: "1st Year",
      date: "Feb 01, 2026",
      status: "Inactive",
    },
  ];

  const jobs = [
    {
      id: 1,
      role: "Frontend Intern",
      company: "TechNova",
      type: "Internship",
      status: "Active",
    },
    {
      id: 2,
      role: "Java Developer",
      company: "Global Systems",
      type: "Job",
      status: "Closed",
    },
  ];

  // --- UI COMPONENTS ---

  const SidebarItem = ({ title, icon }) => (
    <button
      onClick={() => setActiveTab(title)}
      className={`w-full flex items-center ${!isSidebarOpen && "justify-center"} gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        activeTab === title
          ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className={`font-medium ${!isSidebarOpen && "hidden"} block`}>
        {title}
      </span>
    </button>
  );

  const SectionHeader = ({ title, btnText }) => (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        <p className="text-slate-500 text-sm">
          Manage and update your platform content
        </p>
      </div>
      {btnText && (
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all">
          + {btnText}
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      {/* 1. SIDEBAR */}
      <aside
        className={`${isSidebarOpen ? "w-64" : "w-20"} bg-white border-r border-slate-200 transition-all duration-300 fixed h-full z-50`}
      >
        <div className="p-6 flex items-center justify-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src="../../Logo.png" alt="logo" />
          </div>
          <div
            className={`items-center justify-center  ${!isSidebarOpen && "hidden"}`}
          >
            <img src="../../textlogo.png" alt="logo" className="h-14" />
          </div>
        </div>

        <nav className="px-4 py-2 space-y-2">
          <SidebarItem title="Dashboard Overview" icon="📊" />
          <SidebarItem title="Year Wise Roadmaps" icon="🗺️" />
          <SidebarItem title="AI Mock Interview" icon="🤖" />
          <SidebarItem title="Complete Resources" icon="📚" />
          <SidebarItem title="Users Management" icon="👥" />
          <div className="pt-4 border-t border-slate-100">
            <SidebarItem title="Settings" icon="⚙️" />
          </div>
          <button
            onClick={() => setActiveTab("logout")}
            className={`w-full flex items-center ${!isSidebarOpen && "justify-center"} gap-3 px-5 py-3 rounded-xl transition-all duration-200 text-red-400 border-2 border-red-200 bg-red-100 hover:bg-red-200`}
          >
            <span className="text-xl">
              <MdLogout />
            </span>
            <span className={`font-medium ${!isSidebarOpen && "hidden"} block`}>
              Logout
            </span>
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}
      >
        {/* 2. TOP NAVBAR */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"
            >
              <span className="text-2xl">☰ </span>
            </button>
            <h1 className="font-medium text-xl text-teal-800 hidden md:block">
              {activeTab}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="absolute left-3 top-2.5 text-slate-400 text-sm">
                🔍
              </span>
              <input
                type="text"
                placeholder="Global search..."
                className="pl-10 pr-4 py-2 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-500 w-64"
              />
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold">Admin User</p>
                <p className="text-[10px] text-teal-600 uppercase font-bold">
                  Super Admin
                </p>
              </div>
              <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=Admin+User&background=0D9488&color=fff"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </header>

        {/* 3. DYNAMIC PAGES */}
        <main className="p-8">
          {/* PAGE: DASHBOARD OVERVIEW */}
          {activeTab === "Dashboard Overview" && (
            <div className="animate-in fade-in duration-500">
              <SectionHeader title="Platform Insights" />

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-10">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <div className="flex items-end justify-between mt-1">
                      <h3 className="text-2xl font-bold text-slate-800">
                        {stat.value}
                      </h3>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${stat.trend.includes("+") ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}
                      >
                        {stat.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity / Growth Chart Placeholder */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <h4 className="font-bold mb-6 flex items-center gap-2">
                    📈 User Growth{" "}
                    <span className="text-xs font-normal text-slate-400">
                      (Last 30 Days)
                    </span>
                  </h4>
                  <div className="h-64 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 italic">
                    Visual Analytics Chart Placeholder
                  </div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <h4 className="font-bold mb-6">🔔 Recent System Logs</h4>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors border-l-4 border-teal-500"
                      >
                        <div className="text-xs">
                          <p className="font-bold text-slate-800">
                            New Job Posted: Frontend Developer
                          </p>
                          <p className="text-slate-400">
                            2 hours ago • by Admin
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGE: USERS MANAGEMENT */}
          {activeTab === "Users Management" && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <SectionHeader title="Users Directory" btnText="Add User" />

              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between bg-slate-50/50">
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="px-4 py-2 border border-slate-200 rounded-xl text-sm w-full md:w-80 outline-none focus:ring-2 focus:ring-teal-500"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <select className="px-4 py-2 border border-slate-200 rounded-xl text-sm outline-none">
                      <option>Filter by Year</option>
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      <tr>
                        <th className="px-6 py-4">User Name</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Year</th>
                        <th className="px-6 py-4">Signup Date</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {users.map((user) => (
                        <tr
                          key={user.id}
                          className="hover:bg-slate-50/80 transition-colors"
                        >
                          <td className="px-6 py-4 font-bold text-sm text-slate-700">
                            {user.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">
                            {user.year}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-400">
                            {user.date}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${user.status === "Active" ? "bg-teal-100 text-teal-700" : "bg-slate-100 text-slate-500"}`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button className="p-1.5 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors">
                                ✏️
                              </button>
                              <button className="p-1.5 hover:bg-red-50 text-red-600 rounded-lg transition-colors">
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* FALLBACK FOR OTHER TABS */}
          {!["Dashboard Overview", "Users Management"].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <span className="text-6xl mb-4 opacity-20">📂</span>
              <h3 className="text-xl font-bold text-slate-400">
                {activeTab} Interface
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Section is ready for CRUD development.
              </p>
              <button className="mt-6 bg-teal-600 text-white px-8 py-2 rounded-xl text-sm font-bold">
                Configure Section
              </button>
            </div>
          )}
        </main>
      </div>

      {/* MOBILE OVERLAY */}
      {!isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsSidebarOpen(true)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;
