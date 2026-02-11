import React, { useState, useMemo } from "react";
import { Footer, Navbar } from "../components";

const JobBoard = () => {
  // --- STATIC DUMMY DATA ---
  const initialOpportunities = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "TechNova Solutions",
      type: "Internship",
      year: "BCA 2nd Year",
      domain: "Web Development",
      workType: "Remote",
      skills: ["React", "Tailwind CSS", "JavaScript"],
      duration: "3 Months",
      stipend: "₹10,000 / month",
      isBeginnerFriendly: true,
    },
    {
      id: 2,
      role: "Junior Java Developer",
      company: "Global Systems",
      type: "Job",
      year: "Fresher",
      domain: "Java",
      workType: "Onsite",
      skills: ["Java", "Spring Boot", "MySQL"],
      duration: "Full-time",
      stipend: "₹4.5 - 6 LPA",
      isBeginnerFriendly: false,
    },
    {
      id: 3,
      role: "Backend Intern (Node.js)",
      company: "CloudScale AI",
      type: "Internship",
      year: "BCA 3rd Year",
      domain: "Backend",
      workType: "Hybrid",
      skills: ["Node.js", "MongoDB", "Express"],
      duration: "6 Months",
      stipend: "₹15,000 / month",
      isBeginnerFriendly: true,
    },
    {
      id: 4,
      role: "MERN Stack Developer",
      company: "Startup Hub",
      type: "Job",
      year: "Fresher",
      domain: "MERN",
      workType: "Remote",
      skills: ["MongoDB", "Express", "React", "Node"],
      duration: "Full-time",
      stipend: "₹5 LPA",
      isBeginnerFriendly: true,
    },
    {
      id: 5,
      role: "Python Data Intern",
      company: "DataViz Corp",
      type: "Internship",
      year: "BCA 1st Year",
      domain: "Data",
      workType: "Remote",
      skills: ["Python", "Excel", "SQL"],
      duration: "2 Months",
      stipend: "₹5,000 / month",
      isBeginnerFriendly: true,
    },
  ];

  // --- STATE MANAGEMENT ---
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    year: "",
    domain: "",
    workType: "",
  });

  // --- FILTER LOGIC ---
  const filteredOpportunities = useMemo(() => {
    return initialOpportunities.filter((item) => {
      const matchesSearch =
        item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.skills.some((s) =>
          s.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesType = !filters.type || item.type === filters.type;
      const matchesYear = !filters.year || item.year === filters.year;
      const matchesDomain = !filters.domain || item.domain === filters.domain;
      const matchesWorkType =
        !filters.workType || item.workType === filters.workType;

      return (
        matchesSearch &&
        matchesType &&
        matchesYear &&
        matchesDomain &&
        matchesWorkType
      );
    });
  }, [searchTerm, filters]);

  const clearFilters = () => {
    setSearchTerm("");
    setFilters({ type: "", year: "", domain: "", workType: "" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-transparent font-sans text-slate-800 p-5">
        {/* 1. Header Section */}
        <header className="py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl mb-3 text-brand-gradient font-family-abril-fatface leading-12">
              Internship & Job Opportunities
            </h1>
            <p className="text-slate-800 text-lg">
              Find the right opportunities based on your skills and study year
            </p>
          </div>
        </header>

        {/* 2. Sticky Filter Bar */}
        <div className="w-11/12 px-8 mx-auto sticky top-0 z-30 bg-white/50 shadow-sm shadow-gray-300 py-4 mb-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
            {/* Search Box */}
            <div className="lg:col-span-2 relative">
              <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
              <input
                type="text"
                placeholder="Search by role, skill, or company"
                className="w-full pl-10 pr-4 py-2 bg-white border-transparent rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all text-sm shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Type Filter */}
            <select
              className="bg-white shadow-sm border-none rounded-xl py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">All Types</option>
              <option value="Internship">Internship</option>
              <option value="Job">Job</option>
            </select>

            {/* Year Filter */}
            <select
              className="bg-white shadow-sm border-none rounded-xl py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            >
              <option value="">All Years</option>
              <option value="BCA 1st Year">BCA 1st Year</option>
              <option value="BCA 2nd Year">BCA 2nd Year</option>
              <option value="BCA 3rd Year">BCA 3rd Year</option>
              <option value="Fresher">Fresher</option>
            </select>

            {/* Domain Filter */}
            <select
              className="bg-white shadow-sm border-none rounded-xl py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
              value={filters.domain}
              onChange={(e) =>
                setFilters({ ...filters, domain: e.target.value })
              }
            >
              <option value="">All Domains</option>
              <option value="Web Development">Web Dev</option>
              <option value="Backend">Backend</option>
              <option value="Java">Java</option>
              <option value="MERN">MERN Stack</option>
              <option value="Data">Data Science</option>
            </select>

            {/* Clear Button */}
            <button
              onClick={clearFilters}
              className="text-teal-600 font-bold text-xs hover:bg-cyan-200 py-2 px-4 rounded-xl transition-colors uppercase tracking-tight coursor-pointer border border-cyan-300"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* 3. Main Content Area */}
        <main className="max-w-7xl mx-auto px-4">
          {/* Results Counter */}
          <p className="text-slate-500 text-md mb-6 text-center">
            Showing {filteredOpportunities.length} opportunities for you
          </p>

          {/* 4. Opportunity Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card Top: Header */}
                <div className="p-6 pb-0 flex justify-between items-start">
                  <div
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      job.type === "Internship"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {job.type}
                  </div>
                  {job.isBeginnerFriendly && (
                    <span className="bg-teal-100 text-teal-700 text-[10px] px-2 py-1 rounded font-bold uppercase">
                      Beginner Friendly
                    </span>
                  )}
                </div>

                <div className="p-6 pt-4 grow">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">
                    {job.role}
                  </h3>
                  <p className="text-teal-600 font-medium text-sm mb-4">
                    {job.company}
                  </p>

                  {/* Tags Section */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Details Section */}
                  <div className="grid grid-cols-2 gap-y-3 pt-4 border-t border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-bold">
                        Recommended
                      </span>
                      <span className="text-xs text-slate-700 font-semibold">
                        {job.year}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-bold">
                        Stipend / Salary
                      </span>
                      <span className="text-xs text-slate-700 font-semibold">
                        {job.stipend}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-bold">
                        Work Mode
                      </span>
                      <span className="text-xs text-slate-700 font-semibold">
                        {job.workType}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-bold">
                        Duration
                      </span>
                      <span className="text-xs text-slate-700 font-semibold">
                        {job.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 mt-auto grid grid-cols-2 gap-3">
                  <button className="py-2.5 bg-slate-50 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors border border-slate-200">
                    View Details
                  </button>
                  <button className="py-2.5 bg-linear-to-r from-teal-600 to-blue-600 text-white rounded-xl text-xs font-bold hover:opacity-90 transition-opacity shadow-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 5. Empty State */}
          {filteredOpportunities.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <div className="text-5xl mb-4 text-slate-300">🔎</div>
              <h3 className="text-xl font-bold text-slate-600">
                No opportunities found
              </h3>
              <p className="text-slate-400 mt-2">
                Try adjusting your filters or search keywords.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-teal-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Support Note */}
          <div className="mt-16 p-6 bg-blue-50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-blue-100">
            <div>
              <h4 className="font-bold text-blue-900">
                Need help with your application?
              </h4>
              <p className="text-sm text-blue-700">
                Check our resume building guides in the Complete Resources
                section.
              </p>
            </div>
            <button className="whitespace-nowrap bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors">
              Resume Guide →
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default JobBoard;
