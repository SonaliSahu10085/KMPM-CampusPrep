import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Video, VideoOff, Volume2, VolumeX, LogOut, Moon, Sun, Monitor } from 'lucide-react';
import { Navbar } from '../components';
const Interview = () => {
  // State for Interview Controls
  const [micActive, setMicActive] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Simulation States for UI Demo
  const [userSpeaking, setUserSpeaking] = useState(false);
  const [aiSpeaking, setAiSpeaking] = useState(true);

  // Mock toggle for speaking animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAiSpeaking(prev => !prev);
      setUserSpeaking(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen transition-colors duration-500 text-slate-900 selection:bg-teal-500/30">
        {/* 1️⃣ NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT AREA */}
        <main className="max-w-7xl mx-auto py-4">
          
          {/* 2️⃣ CANDIDATE INFO BAR */}
          <div className="relative overflow-hidden mb-4 py-3 px-2 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-600 shadow-xl shadow-blue-500/20 mx-4 sm:mx-20">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mx-3 ">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white font-bold ">
                  AK
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white leading-tight">Abhishek Kumar</h1>
                  <p className="text-teal-50 font-medium text-sm">BCA 3rd Year • Frontend Development</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Interview In Progress</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3️⃣ INTERVIEW LAYOUT (GRID) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-2 sm:mx-16 h-full">
            
            {/* LEFT SIDE: USER PANEL */}
            <div className={`relative transition-all duration-700 rounded-[2.5rem] p-1 ${userSpeaking ? 'bg-gradient-to-b from-teal-400 to-blue-500 shadow-2xl shadow-teal-500/20' : 'bg-transparent'}`}>
              <div className="relative aspect-video bg-slate-200 dark:bg-slate-900 rounded-[2.3rem] overflow-hidden border border-white/10 shadow-inner">
                {cameraOn ? (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center group">
                    {/* Mock Video Stream */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-slate-300 dark:bg-slate-800 flex items-center justify-center">
                      <VideoOff className="text-slate-500" size={40} />
                    </div>
                    <p className="text-slate-500 font-medium">Camera is Off</p>
                  </div>
                )}
                
                {/* User Label + Pulse Indicator */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl flex items-center gap-2">
                    {userSpeaking && <div className="flex gap-1">
                      <div className="w-1 h-3 bg-teal-400 animate-bounce" />
                      <div className="w-1 h-3 bg-teal-400 animate-bounce [animation-delay:-0.2s]" />
                    </div>}
                    <span className="text-white text-sm font-semibold">Abhishek (Candidate)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: AI INTERVIEWER PANEL */}
            <div className={`relative transition-all duration-700 rounded-[2.5rem] p-1 ${aiSpeaking ? 'bg-gradient-to-b from-blue-400 to-teal-500 shadow-2xl shadow-blue-500/20' : 'bg-transparent'}`}>
              <div className="relative aspect-video bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.3rem] border border-white/20 flex flex-col items-center justify-center overflow-hidden">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    {aiSpeaking && (
                      <div className="absolute inset-[-10px] rounded-full bg-blue-500/20 animate-ping" />
                    )}
                    <div className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-200">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                        alt="AI Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-bold dark:text-white text-slate-800">AI Interviewer</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium italic">"Tell me about your React experience..."</p>
                </div>

                {/* AI Audio Waveform */}
                {aiSpeaking && (
                  <div className="absolute bottom-10 flex items-end gap-1.5 h-8">
                    {[0.5, 0.8, 0.4, 1, 0.6, 0.9, 0.3].map((val, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 bg-gradient-to-t from-blue-600 to-teal-400 rounded-full animate-[wave_1s_ease-in-out_infinite]"
                        style={{ height: `${val * 100}%`, animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* 4️⃣ BOTTOM CONTROL BAR */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-6 px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/20 dark:border-slate-800 rounded-[2rem] shadow-2xl shadow-black/20">
            
            <button 
              onClick={() => setMicActive(!micActive)}
              className={`p-4 rounded-2xl transition-all transform hover:scale-110 active:scale-95 ${micActive ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/40' : 'bg-red-500 text-white shadow-lg shadow-red-500/40'}`}
            >
              {micActive ? <Mic size={24} /> : <MicOff size={24} />}
            </button>

            <button 
              onClick={() => setCameraOn(!cameraOn)}
              className={`p-4 rounded-2xl transition-all transform hover:scale-110 active:scale-95 ${cameraOn ? 'bg-slate-100 dark:bg-slate-800 dark:text-white' : 'bg-red-500 text-white shadow-lg shadow-red-500/40'}`}
            >
              {cameraOn ? <Video size={24} /> : <VideoOff size={24} />}
            </button>

            <div className="w-px h-8 bg-slate-300 dark:bg-slate-700 mx-2" />

            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 dark:text-white transition-all transform hover:scale-110"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>

            <button className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 active:scale-95">
              <LogOut size={20} />
              <span>End Interview</span>
            </button>

          </div>
        </div>

        {/* CSS for custom wave animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes wave {
            0%, 100% { transform: scaleY(0.5); }
            50% { transform: scaleY(1.5); }
          }
        `}} />
      </div>
    </div>
  );
};

export default Interview;