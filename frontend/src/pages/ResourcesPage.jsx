import React, { useState } from "react";
import { Navbar, Footer } from "../components";

const ResourcesPage = () => {
  // State to manage the currently selected year filter
  const [activeYear, setActiveYear] = useState("1st Year");

  // Dummy data representing BCA curriculum resources
  const resourcesData = {
    "1st Year": [
      {
        id: 1,
        title: "Subject Notes",
        icon: "📘",
        desc: "Handwritten and digital notes for fundamental subjects.",
        subjects: ["C Programming", "Digital Electronics", "Discrete Math"],
        tags: ["Sem 1", "Sem 2"],
        color: "from-teal-500 to-emerald-500",
      },
      {
        id: 2,
        title: "Practice Questions",
        icon: "🧪",
        desc: "Chapter-wise MCQs and important long questions.",
        subjects: ["Logic Building", "Number Systems", "Basic OS"],
        tags: ["Daily Practice"],
        color: "from-blue-500 to-indigo-500",
      },
      {
        id: 3,
        title: "Previous Year Papers",
        icon: "🗂️",
        desc: "Last 5 years of university exam papers for revision.",
        subjects: ["Math I", "Computer Basics", "Communicative English"],
        tags: ["Exam Prep"],
        color: "from-cyan-500 to-blue-500",
      },
    ],
    "2nd Year": [
      {
        id: 4,
        title: "Coding Resources",
        icon: "💻",
        desc: "Lab manuals and code snippets for core programming.",
        subjects: ["Java Lab", "Data Structures in C++", "SQL Queries"],
        tags: ["Sem 3", "Sem 4"],
        color: "from-teal-500 to-blue-500",
      },
      {
        id: 5,
        title: "Video Playlists",
        icon: "🎥",
        desc: "Curated YouTube lectures for complex topics.",
        subjects: ["DBMS Concepts", "Software Engineering", "Python Basics"],
        tags: ["Video Tutorial"],
        color: "from-purple-500 to-indigo-500",
      },
      {
        id: 6,
        title: "Useful Links",
        icon: "🔗",
        desc: "Direct links to official documentation and tutorials.",
        subjects: ["MDN Web Docs", "Java Oracle", "GeeksforGeeks"],
        tags: ["External Refs"],
        color: "from-teal-400 to-cyan-500",
      },
    ],
    "3rd Year": [
      {
        id: 7,
        title: "Placement Kit",
        icon: "🚀",
        desc: "Resources to help you crack technical interviews.",
        subjects: ["Aptitude", "Resume Building", "HR Questions"],
        tags: ["Placement"],
        color: "from-orange-500 to-red-500",
      },
      {
        id: 8,
        title: "Project Guides",
        icon: "📂",
        desc: "Documentation and source code for final year projects.",
        subjects: ["React Apps", "Node.js Backend", "Mobile Apps"],
        tags: ["Sem 6", "Project"],
        color: "from-blue-600 to-teal-500",
      },
      {
        id: 9,
        title: "Advanced Notes",
        icon: "📓",
        desc: "Theoretical notes on advanced computing topics.",
        subjects: ["Cloud Computing", "AI & ML", "Cyber Security"],
        tags: ["Sem 5"],
        color: "from-indigo-600 to-blue-700",
      },
    ],
  };

  const years = ["1st Year", "2nd Year", "3rd Year"];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-transparent font-sans p-5">
        {/* Header Section */}
        <header className="bg-transparent py-8 px-4 mb-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl mb-3 text-brand-gradient font-family-abril-fatface leading-12">
              Complete Learning Resources
            </h1>
            <p className="leading-6 max-w-sm text-center mx-auto text-lg">
              All notes, links, and practice materials, year wise and subject
              wise
            </p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4">
          {/* Year Filter / Tabs */}
          <div className="flex justify-center mb-10 p-1 shadow-sm bg-slate-300/50 rounded-2xl w-fit mx-auto">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeYear === year
                    ? "bg-white text-cyan-600 shadow-sm"
                    : "text-slate-800 hover:text-slate-900"
                }`}
              >
                BCA {year}
              </button>
            ))}
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourcesData[activeYear].map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Card Icon & Header */}
                <div
                  className={`h-24 bg-gradient-to-br ${item.color} p-6 flex items-center justify-between`}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex gap-1">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-white/20 text-white text-[10px] px-2 py-1 rounded-md backdrop-blur-sm uppercase font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {item.desc}
                  </p>

                  {/* Subject List */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Included Topics
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.subjects.map((sub, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md border border-slate-200"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 mt-auto grid grid-cols-2 gap-3">
                  <button className="py-2.5 px-4 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-colors shadow-sm">
                    View Resources
                  </button>
                  <button className="py-2.5 px-4 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State / Motivation Section */}
          <div className="mt-16 p-8 bg-linear-to-r from-teal-50 to-blue-50 rounded-3xl border border-teal-100 text-center shadow-sm">
            <h4 className="text-teal-800 font-medium text-lg mb-2">
              Can't find what you are looking for?
            </h4>
            <p className="text-teal-600 text-sm mb-4">
              We are constantly updating our database with new materials.
            </p>
            <button className="text-teal-700 font-semibold text-sm underline hover:text-teal-800">
              Request a Resource
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ResourcesPage;
