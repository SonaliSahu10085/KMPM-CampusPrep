import React, { useState } from "react";
import { Navbar } from "../components";

const AIMockInterview = () => {
  // Mock User Data - In a real app, this would come from Auth/Context
  const userData = {
    name: "Sonali Sahu",
    year: "BCA 3rd Year",
  };

  // Form State
  const [formData, setFormData] = useState({
    type: "Internship Interview",
    domain: "Web Development",
    interviewer: "Female Interviewer",
    language: "English",
    difficulty: "Medium",
    mode: "Voice Based",
    questionCount: "10",
    resume: null,
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Starting ${formData.difficulty} level ${formData.type} for ${formData.domain} in ${formData.language} mode.`,
    );
    // Logic for navigation would go here
  };

  // Reusable Radio Group Component for consistency
  const RadioGroup = ({ label, name, options, selectedValue }) => (
    <div className="space-y-3">
      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
        {label}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex-1 min-w-[140px] cursor-pointer relative rounded-xl border-2 p-3 text-center transition-all duration-200 ${
              selectedValue === opt
                ? "border-teal-500 bg-teal-50 text-teal-700"
                : "border-slate-100 bg-white text-slate-500 hover:border-slate-200"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={selectedValue === opt}
              onChange={handleChange}
              className="sr-only"
            />
            <span className="text-sm font-semibold">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-transparent font-sans text-slate-800 pb-20">
        {/* Header Section */}
        <header className="py-10 px-4 text-center">
          <h1 className="text-3xl md:text-4xl mb-3 text-brand-gradient font-family-abril-fatface leading-12">
            AI Mock Interview
          </h1>
          <p className="text-slate-600 text-lg">
            Practice interviews in English or Hinglish with AI
          </p>
        </header>

        <main className="max-w-4xl mx-auto mt-4 px-4">
          {/* User Info (Read Only) */}
          <div className="bg-linear-to-r from-teal-500 to-blue-600 rounded-2xl p-6 mb-5 shadow-lg text-white flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-teal-100 text-xs font-bold uppercase mb-1">
                Candidate Name
              </p>
              <p className="text-xl font-semibold">{userData.name}</p>
            </div>
            <div className="h-10 w-px bg-white/20 hidden md:block"></div>
            <div>
              <p className="text-teal-100 text-xs font-bold uppercase mb-1">
                Current Status
              </p>
              <p className="text-xl font-semibold">{userData.year}</p>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/30 text-xs font-medium">
              Profile Verified
            </div>
          </div>

          {/* Configuration Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white p-6 md:p-10 rounded-3xl shadow-md border border-slate-100"
          >
            {/* A. Interview Type */}
            <RadioGroup
              label="Interview Type"
              name="type"
              options={["Internship Interview", "Job Interview"]}
              selectedValue={formData.type}
            />

            {/* B. Domain Selection */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Domain / Role
              </label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-teal-500 focus:bg-white outline-none transition-all font-medium"
              >
                <option>Web Development</option>
                <option>Backend Development</option>
                <option>Java</option>
                <option>MERN Stack</option>
                <option>Data / Analytics</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* C. Interviewer Preference */}
              <RadioGroup
                label="Interviewer Preference"
                name="interviewer"
                options={["Male Interviewer", "Female Interviewer"]}
                selectedValue={formData.interviewer}
              />

              {/* D. Language */}
              <RadioGroup
                label="Interview Language"
                name="language"
                options={["English", "Hinglish"]}
                selectedValue={formData.language}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* E. Difficulty */}
              <RadioGroup
                label="Difficulty Level"
                name="difficulty"
                options={["Easy", "Medium", "Hard"]}
                selectedValue={formData.difficulty}
              />

              {/* F. Interview Mode */}
              <RadioGroup
                label="Interview Mode"
                name="mode"
                options={["Text Based", "Voice Based"]}
                selectedValue={formData.mode}
              />
            </div>

            {/* G. Resume Upload */}
            <div className="space-y-3 p-6 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider block">
                Resume Upload (Optional)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              />
              <p className="text-xs text-slate-400 italic">
                Resume upload is optional. If uploaded, questions will be
                resume-based.
              </p>
            </div>

            {/* H. Question Count */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Number of Questions
              </label>
              <select
                name="questionCount"
                value={formData.questionCount}
                onChange={handleChange}
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-teal-500 focus:bg-white outline-none transition-all font-medium"
              >
                <option value="5">5 Questions (Short Session)</option>
                <option value="10">10 Questions (Standard)</option>
                <option value="15">15 Questions (Full Mock)</option>
              </select>
            </div>

            {/* Submit Action */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:opacity-90 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <span>Start Mock Interview</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>
              <p className="text-center text-slate-400 text-xs mt-4">
                Ensure your microphone is working if you selected Voice Based
                mode.
              </p>
            </div>
          </form>
        </main>

        {/* Simple Footer */}
        <footer className="mt-12 text-center text-slate-400 text-sm">
          <p>© 2026 KMPM CampusPrep • AI Interview Module</p>
        </footer>
      </div>
    </>
  );
};

export default AIMockInterview;
