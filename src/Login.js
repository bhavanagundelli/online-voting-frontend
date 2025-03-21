import React, { useState } from "react";
import axios from "axios";
import API_URL from "./config"; // Import the API URL from config.js

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/login`, { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
