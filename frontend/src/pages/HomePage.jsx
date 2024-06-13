import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import axios from 'axios';

const HomePage = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const handleSignUp = async(e) => {
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:8088/signup",{
        name,
        email,
      })
      console.log(res.data);
    }catch(err){
      console.err("Error While Signing Up : ",err);
    }
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  };

  const inputStyle = {
    marginBottom: '16px',
  };

  const buttonStyle = {
    marginTop: '16px',
  };

  return (
    <Container style={containerStyle}>
      <div style={formStyle}>
        <TextField
          style={inputStyle}
          label="Name"
          variant="outlined"
          size="small"
          onChange={(e)=>setName(e.target.value)}
        />
        <TextField
          style={inputStyle}
          label="Email"
          variant="outlined"
          size="small"
          onChange={(e)=>setEmail(e.target.value)}
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
    </Container>
  );
};

export default HomePage;
