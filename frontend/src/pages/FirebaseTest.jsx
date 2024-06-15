import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import axios from "axios";
import { db } from "../firebase/firebase-config";
import { collection, addDoc, doc } from "firebase/firestore";

const FirebaseTest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");

  const handleSignUp = async (e) => {
    const ref = collection(db, "cfg");
    const studentDocRef = await addDoc(ref, {
      name: name,
      email: email,
    });
    console.log(studentDocRef);
  };

  const handleUpdate = async () => {};

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const inputStyle = {
    marginBottom: "16px",
  };

  const buttonStyle = {
    marginTop: "16px",
  };

  return (
    <Container style={containerStyle}>
      <div style={formStyle}>
        <TextField
          style={inputStyle}
          label="Name"
          variant="outlined"
          size="small"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          style={inputStyle}
          label="Email"
          variant="outlined"
          size="small"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          style={buttonStyle}
          onClick={handleSignUp}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
      <div style={formStyle}>
        <TextField
          style={inputStyle}
          label="Name"
          variant="outlined"
          size="small"
          onChange={(e) => setName1(e.target.value)}
        />
        <TextField
          style={inputStyle}
          label="Email"
          variant="outlined"
          size="small"
          onChange={(e) => setEmail1(e.target.value)}
        />
        <Button
          style={buttonStyle}
          onClick={handleUpdate}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </div>
    </Container>
  );
};

export default FirebaseTest;
