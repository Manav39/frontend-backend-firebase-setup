import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import { storage } from "../firebase/firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";

const FirebaseUpload = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const retrieveFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storageRef = ref(storage, `CFG/${Date.now()}.jpg`);
      const bytes = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(storageRef);
      console.log(downloadUrl);
      setImageUrl(downloadUrl);
      alert("Success");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

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

  const buttonStyle = {
    marginTop: "16px",
  };

  return (
    <Container style={containerStyle}>
      <input
        type="file"
        onChange={retrieveFile}
        style={{ marginBottom: "16px" }}
      />
      <Button
        type="submit"
        style={buttonStyle}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Upload
      </Button>
      <br />
      {imageUrl ? (
        <a href={imageUrl} target="_blank" style={{ color: "blue" }}>
          {imageUrl}
        </a>
      ) : (
        ""
      )}
    </Container>
  );
};

export default FirebaseUpload;
