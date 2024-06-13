import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FirebaseUpload from "./FirebaseUpload";

const Dashboard = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");
  const [tquote, setTQuote] = useState("");
  async function populateQuote() {
    try {
      const res = await fetch("http://localhost:8088/quote", {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      // Handle res
      const data = await res.json();
      console.log("Manav ", data);
      if (data.status == "ok") {
        setTQuote(data.quote);
        setQuote(data.quote);
      }
    } catch (error) {
      // Handle error
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        populateQuote();
      }
    }
  }, []);

  async function updateQuote() {
    const config = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:8088/quote",
        { quote: tquote },
        config
      );
      // Handle res
      console.log(res.data);
      if (res.data.status == "ok") {
        setQuote(res.data.quote);
      }
    } catch (error) {
      // Handle error
    }
    window.location.reload();
  }

  return (
    <div
      style={{
        alignItems: "center",
      }}
    >
      <h1 className="text-5xl text-bold">
        Your Quote : {quote || "No quote found"}
      </h1>
      <input
        style={{ border: "1px solid black", width: "100px" }}
        type="text"
        value={tquote}
        onChange={(e) => setTQuote(e.target.value)}
      />
      <button onClick={updateQuote}>Submit</button>
      <br />
      <Link className="text-green-600 text-3xl" to="/firebase-upload">
        <u>Firebase Test Upload</u>
      </Link>
    </div>
  );
};

export default Dashboard;
