import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, CheckCircle, RotateCcw, Download } from 'lucide-react';
import { Navbar } from '../components';


const FeedbackReport = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const metrics = [
    { name: "Technical Accuracy", score: 85 },
    { name: "Communication", score: 70 },
    { name: "Problem Solving", score: 90 },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* 1. HEADER SUMMARY */}
        <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-sm font-bold uppercase tracking-widest opacity-80">Interview Result</h1>
            <div className="flex justify-between items-end mt-4">
              <div>
                <h2 className="text-3xl font-bold">Abhishek Kumar</h2>
                <p className="text-teal-100">Frontend Developer Role</p>
              </div>
              <div className="text-right">
                <span className="text-5xl font-black italic">8.2</span>
                <span className="text-xl opacity-70">/10</span>
              </div>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        </div>

        {/* 2. PERFORMANCE BARS */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2 dark:text-white">
            <Award className="text-teal-500" size={20} /> Performance Breakdown
          </h3>
          <div className="space-y-6">
            {metrics.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-2 dark:text-slate-300">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-bold text-blue-600 dark:text-teal-400">{item.score}%</span>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-1000 ease-out"
                    style={{ width: animate ? `${item.score}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. AI INSIGHTS */}
        <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold mb-4 dark:text-white">AI Feedback</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Great job! Your technical explanations were clear. Focus more on explaining "why" you chose a specific React hook rather than just "how" it works. Your confidence improved as the session progressed.
          </p>
          
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-start gap-3 p-3 bg-teal-50 dark:bg-teal-500/10 rounded-xl">
              <CheckCircle className="text-teal-500 shrink-0" size={18} />
              <p className="text-sm text-slate-700 dark:text-slate-300">Strong grasp of <strong>State Management</strong> and Hooks.</p>
            </div>
          </div>
        </div>

        {/* 4. ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-slate-900 dark:bg-white dark:text-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95">
            <RotateCcw size={18} /> Try Another Session
          </button>
          <button className="flex-1 border-2 border-slate-200 dark:border-slate-800 py-4 rounded-2xl font-bold dark:text-white flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            <Download size={18} /> Get PDF Report
          </button>
        </div>

      </div>
    </div>
  );
};

export default FeedbackReport;