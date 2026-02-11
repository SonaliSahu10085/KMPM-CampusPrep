import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Auth,
  Home,
  Contributors,
  PolicyPage,
  ContactUs,
  JobBoard,
  Interview,
  FeedbackReport,
  StudentProfile,
} from "./pages/index.js";
import "./index.css";
import { images } from "./constants/images.js";
import { useStore } from "./constants/store.js";
import "leaflet/dist/leaflet.css";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import { RoadmapPage } from "./components/index.js";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import { AIMockInterview } from "./pages/index.js";

function App() {
  const { theme } = useStore();
  return (
    <BrowserRouter>
      {/* For alert */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "14px",
          },
        }}
        reverseOrder={false}
      />

      <div
        style={{ backgroundImage: `url(${images[theme].bgImage})` }}
        className="min-h-screen bg-cover bg-center"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth type="login" />} />
          <Route path="/signup" element={<Auth type="signup" />} />
          <Route path="/admin/login" element={<Auth type="admin" />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/privacy_policy" element={<PolicyPage />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/roadmaps" element={<RoadmapPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/ai-mock-interview/form" element={<AIMockInterview />} />
          <Route path="/ai-mock-interview/sonali" element={<Interview />} />
          <Route
            path="/ai-mock-interview/feedback"
            element={<FeedbackReport />}
          />
          <Route path="/jobboard" element={<JobBoard />} />
          <Route path="/profile/sonali" element={<StudentProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
