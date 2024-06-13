import React from "react";
import { FirebaseAuth } from "../firebase/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./styles.css";
const GoogleLogin = () => {
  const requestGoogleAuth = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(FirebaseAuth, googleProvider).then((data) => {
      console.log(data);
      localStorage.setItem("UserName", data?.user?.displayName);
      localStorage.setItem("Email", data?.user?.email);
      localStorage.setItem("photoURL", data?.user?.photoURL);
    });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button
        type="button"
        class="google-sign-in-button"
        onClick={requestGoogleAuth}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
