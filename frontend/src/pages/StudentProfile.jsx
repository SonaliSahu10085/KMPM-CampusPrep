import React, { useState, useEffect, useRef } from "react";
import {
  Camera,
  Mail,
  User,
  GraduationCap,
  Lock,
  LogOut,
  CheckCircle,
  AlertCircle,
  Save,
  Eye,
  EyeOff,
  X,
} from "lucide-react";
import { Navbar } from "../components";


// --- INTEGRATED MODAL COMPONENT ---
const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [showPass, setShowPass] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let e = {};
    if (!formData.current) e.current = "Required";
    if (formData.new.length < 6) e.new = "Min 6 characters";
    if (formData.new !== formData.confirm) e.confirm = "Passwords don't match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ current: "", new: "", confirm: "" });
        onClose();
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-white/20 p-8 animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Change Password
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {isSuccess ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={32} />
            </div>
            <p className="font-bold text-green-600">
              Password updated successfully!
            </p>
          </div>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-4">
            {["current", "new", "confirm"].map((field) => (
              <div key={field} className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-widest ml-1">
                  {field.replace(/^\w/, (c) => c.toUpperCase())} Password
                </label>
                <div className="relative">
                  <input
                    type={showPass[field] ? "text" : "password"}
                    className={`w-full bg-slate-50 border ${errors[field] ? "border-red-400" : "border-slate-200"} rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/50 transition-all`}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPass({ ...showPass, [field]: !showPass[field] })
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPass[field] ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors[field] && (
                  <p className="text-red-500 text-[10px] font-bold ml-1 italic">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-2xl font-bold mt-4 shadow-lg shadow-teal-500/20 active:scale-95 transition-transform"
            >
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const StudentProfile = () => {
  const [isGoogleUser] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop",
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // 1️⃣ State for Modal

  const [formData, setFormData] = useState({
    fullName: "Abhishek Kumar",
    year: "BCA 3rd Year",
    domain: "Frontend Development",
    email: "abhishek.k@example.com",
  });

  const [isVerified, setIsVerified] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const { fullName, year } = formData;
    setIsVerified(fullName.trim() !== "" && year !== "");
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
        {/* 2️⃣ MODAL COMPONENT PLACEMENT */}
        <ChangePasswordModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                Student Profile
              </h1>
              <p className="text-slate-500">Manage your account settings</p>
            </div>
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm transition-all duration-300 ${isVerified ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"}`}
            >
              {isVerified ? (
                <CheckCircle size={18} />
              ) : (
                <AlertCircle size={18} />
              )}
              <span className="text-sm font-bold tracking-wider">
                {isVerified ? "Verified" : "Unverified"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-[2.5rem] shadow-xl text-center flex flex-col items-center">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="absolute bottom-1 right-1 p-2 bg-gradient-to-tr from-teal-500 to-blue-600 text-white rounded-full border-2 border-white"
                  >
                    <Camera size={18} />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                    accept="image/*"
                  />
                </div>

                <div className="mt-6">
                  <h2 className="text-xl font-bold text-slate-800">
                    {formData.fullName || "Your Name"}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    {isGoogleUser ? "Google Account" : "Standard Account"}
                  </p>
                </div>

                {/* 3️⃣ CONNECTED BUTTON */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-8 w-full py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm shadow-sm active:scale-95"
                >
                  <Lock size={16} /> Change Password
                </button>

                <button className="mt-3 w-full py-4 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all flex items-center justify-center gap-2 text-sm active:scale-95">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-[2.5rem] shadow-xl space-y-8 h-full">
                <div className="border-b border-slate-100 pb-4 flex items-center gap-2 text-slate-800 font-bold">
                  <User size={20} className="text-teal-500" /> Basic Information
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-teal-500/50 outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                      Email ID
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      readOnly
                      className="w-full bg-slate-100 border border-slate-200 text-slate-400 rounded-2xl px-5 py-3.5 cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                      Academic Year
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-teal-500/50 outline-none"
                    >
                      <option value="">Select Year</option>
                      <option value="BCA 1st Year">BCA 1st Year</option>
                      <option value="BCA 2nd Year">BCA 2nd Year</option>
                      <option value="BCA 3rd Year">BCA 3rd Year</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                      Specialization
                    </label>
                    <input
                      type="text"
                      name="domain"
                      value={formData.domain}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-teal-500/50 outline-none"
                    />
                  </div>
                </div>
                <button className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 active:scale-95">
                  <Save size={20} /> Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
