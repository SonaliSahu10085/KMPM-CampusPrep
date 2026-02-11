import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const RoadmapPage = () => {
  // State to track which card is currently expanded
  const [expandedYear, setExpandedYear] = useState(null);

  const roadmapData = [
    {
      id: 1,
      year: "BCA 1st Year",
      tagline: "Building the Foundation",
      description:
        "Focus on understanding logic, mathematics, and the fundamentals of computer science.",
      subjects: [
        "C++ Programming",
        "DSA",
        "Digital Electronics",
        "Discrete Mathematics",
      ],
      skills: ["Problem Solving", "Logic Building", "Basic Documentation"],
      tools: ["VS Code", "Turbo C++", "MS Office"],
      semesters: [
        {
          sem: "Semester 1",
          focus: "C++ Language, Calculus, Digital Logic",
          project: "Simple Calculator in C",
        },
        {
          sem: "Semester 2",
          focus: "Data Structures, Computer Architecture",
          project: "Student Record System",
        },
      ],
    },
    {
      id: 2,
      year: "BCA 2nd Year",
      tagline: "Core Specialization",
      description:
        "Dive deep into object-oriented concepts, databases, and web technologies.",
      subjects: [
        "Java / C++",
        "DBMS (SQL)",
        "Software Engineering",
        "Web Tech (HTML/CSS)",
      ],
      skills: ["OOPs Concepts", "Database Design", "Frontend Development"],
      tools: ["MySQL Workbench", "IntelliJ IDEA", "Postman"],
      semesters: [
        {
          sem: "Semester 3",
          focus: "Object Oriented Programming, OS-II",
          project: "Library Management System",
        },
        {
          sem: "Semester 4",
          focus: "Database Management, Java, Python",
          project: "Portfolio Website",
        },
      ],
    },
    {
      id: 3,
      year: "BCA 3rd Year",
      tagline: "Mastery & Placement",
      description:
        "Advance into modern frameworks, networking, and career preparation.",
      subjects: [
        "Computer Networks",
        "Information Security",
        "Java Frameworks",
        "AI / Cloud",
      ],
      skills: ["Full Stack Dev", "System Design", "Aptitude & Soft Skills"],
      tools: ["React", "Node.js", "GitHub / Git", "AWS / Docker"],
      semesters: [
        {
          sem: "Semester 5",
          focus: "Advanced Web Tech, Networking",
          project: "E-commerce App",
        },
        {
          sem: "Semester 6",
          focus: "Cyber Security, Project Work",
          project: "Major Industry Project",
        },
      ],
    },
  ];

  const toggleExpand = (id) => {
    setExpandedYear(expandedYear === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-transparent p-4 md:p-8">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-3 text-brand-gradient font-family-abril-fatface leading-12">
            BCA Year Wise Roadmap
          </h1>
          <p className="text-slate-800 leading-6 text-center mx-auto text-lg">
            Your step-by-step guide from basics to placements. Master your
            curriculum and beyond.
          </p>
        </header>

        {/* Main Roadmap Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapData.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-fit ${expandedYear === item.id ? "ring-2 ring-teal-500" : ""}`}
            >
              {/* Card Header with Gradient */}
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-6 text-white">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Year {item.id}
                </span>
                <h2 className="text-2xl font-bold mt-2">{item.year}</h2>
                <p className="text-teal-50 opacity-90 text-sm mt-1 italic">
                  {item.tagline}
                </p>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Subjects List */}
                <div>
                  <h4 className="font-bold text-sm text-slate-900 mb-2 flex items-center">
                    📚 Key Subjects
                  </h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {item.subjects.map((sub, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-slate-600 flex items-center"
                      >
                        <span className="mr-2 text-teal-500">•</span> {sub}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills & Tools */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-md border border-teal-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col gap-3">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                  >
                    {expandedYear === item.id
                      ? "Close Details"
                      : "View Roadmap"}
                    <span
                      className={`transform transition-transform ${expandedYear === item.id ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  <button className="w-full py-3 bg-white border border-teal-600 text-teal-600 rounded-xl font-medium hover:bg-teal-50 transition-colors">
                    Start Learning
                  </button>
                </div>
              </div>

              {/* Expandable Accordion Section */}
              <div
                className={`transition-all duration-500 ease-in-out bg-slate-50 border-t border-slate-100 overflow-hidden ${
                  expandedYear === item.id
                    ? "max-h-[1000px] opacity-100 p-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-teal-800 mb-3 border-b border-teal-100 pb-1">
                      📅 Semester Plan
                    </h4>
                    {item.semesters.map((sem, idx) => (
                      <div key={idx} className="mb-4 last:mb-0">
                        <p className="font-semibold text-sm text-slate-900">
                          {sem.sem}
                        </p>
                        <p className="text-xs text-slate-600 mb-2">
                          Focus: {sem.focus}
                        </p>
                        <div className="bg-white p-2 rounded-lg border border-dashed border-slate-300">
                          <p className="text-xs font-bold text-teal-600">
                            🛠 Project Idea:
                          </p>
                          <p className="text-xs text-slate-700">
                            {sem.project}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-bold text-teal-800 mb-3 border-b border-teal-100 pb-1">
                      🔗 Resources
                    </h4>
                    <div className="flex flex-col gap-2">
                      <a
                        href="#"
                        className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                      >
                        📄 Download Syllabus PDF
                      </a>
                      <a
                        href="#"
                        className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                      >
                        📺 Recommended YouTube Playlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoadmapPage;
