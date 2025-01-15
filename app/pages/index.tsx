/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import { registerUser, loginUser } from "@/app/service/api"

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      await registerUser({ username, password });
      setMessage("User registered successfully!");
    } catch (error) {
      setMessage("Registration failed.");
    }
  };

  const handleLogin = async () => {
    try {
      const user = await loginUser({ username, password });
      setMessage(`Welcome, ${user.username}!`);
    } catch (error) {
      setMessage("Login failed.");
    }
  };

  return (
    <div>
      <h1>Welcome to the Shopping List App</h1>
      <div>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <p>{message}</p>
    </div>
  );
}

