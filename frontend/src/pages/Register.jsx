import React, { useState } from "react";
import googleLogo from "../assets/google.svg";
import backgroundImage from "../assets/image.jpg";
import { FirebaseAuth } from "../firebase/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8088/register", {
        name,
        email,
        pass,
      });
      console.log(res.data);
      if (res.data.status == "ok") {
        navigate("/login");
      }
    } catch (e) {
      console.error("Error in Signing Up : ", e);
    }
  };

  const requestGoogleAuth = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(FirebaseAuth, googleProvider).then((data) => {
      console.log(data);
      localStorage.setItem("UserName", data?.user?.displayName);
      localStorage.setItem("Email", data?.user?.email);
      localStorage.setItem("photoURL", data?.user?.photoURL);
    });
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* Left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div className="py-3">
            <span className="mb-2 text-md">Name</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="py-3">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="py-3">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
            onClick={requestGoogleAuth}
          >
            <img
              src={googleLogo}
              alt="Google logo"
              className="w-6 h-6 inline mr-2"
            />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Already have an account ?
            <Link to="/login">
              <span className="font-bold text-black">Login</span>
            </Link>
          </div>
        </div>
        {/* Right side */}
        <div className="relative">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* Text on image */}
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
            <span className="text-white text-xl">
              We've been using Untitle to kick
              <br />
              start every new project and can't
              <br />
              imagine working without it.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
