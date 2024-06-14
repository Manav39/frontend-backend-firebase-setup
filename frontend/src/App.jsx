import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FileUpload from "./pages/FileUpload";
import FirebaseUpload from "./pages/FirebaseUpload";
import GoogleLogin from "./pages/GoogleLogin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Education from "./pages/Education";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/ipfs-upload" element={<FileUpload />} />
      <Route path="/firebase-upload" element={<FirebaseUpload />} />
      <Route path="/google-login" element={<GoogleLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/education" element={<Education/>}/>
    </Routes>
  );
}

export default App;
