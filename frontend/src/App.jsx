import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FileUpload from "./pages/FileUpload";
import FirebaseUpload from "./pages/FirebaseUpload";
import GoogleLogin from "./pages/GoogleLogin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FirebaseTest from "./pages/FirebaseTest";
import Retrieve from "./pages/Retrieve";
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
      <Route path="/test" element={<FirebaseTest />} />
      <Route path="/retrieve" element={<Retrieve />} />
    </Routes>
  );
}

export default App;
