import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import axios from 'axios'

const FileUpload = () => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [url,setUrl] = useState("")

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    console.log(e.target.files[0].name);
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: "e8b143c571986d7b7074",
            pinata_secret_api_key:
              "c60fe4549b60ae8f8dae9402ca841df7307d7947fbb90363cd7250b16d4cff8d",
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log("Image hash: ", ImgHash);
        setUrl(ImgHash);
        alert("Success")
        setFileName("No image Uploaded");
        setFile(null);
      } catch (e) {
        alert(e);
      }
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
    </Container>
  );
};

export default FileUpload;
