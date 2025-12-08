import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, Home , Contributors, PolicyPage, ContactUs } from "./pages/index.js";
import "./index.css"
import { images } from "./constants/images.js";
import { useStore } from "./constants/store.js";
import 'leaflet/dist/leaflet.css';


function App() {

  const { theme } = useStore();
  return (
    <BrowserRouter>
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


        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
