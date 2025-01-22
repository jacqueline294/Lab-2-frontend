/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      router.push("/shopping-list");
    } else {
      setErrorMessage("Invalid username or password");
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-green-500 to-teal-500">
      <form onSubmit={handleLogin} className="flex flex-col max-w-sm gap-4 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <input
          className="border p-2 rounded-md"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          required
        />
        <input
          className="border p-2 rounded-md"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button className="bg-green-600 text-white p-3 rounded-md hover:bg-green-500" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
