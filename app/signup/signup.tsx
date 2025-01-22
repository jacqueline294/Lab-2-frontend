/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("http://localhost:8080/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        console.log("Signup successful");
        router.push("/login");
      } else {
        const resultError = await response.text();
        setErrorMessage(resultError || "Signup failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col max-w-sm gap-4 p-6 bg-white shadow-lg rounded-lg"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Create Account</h1>
        <label htmlFor="username">Username</label>
        <input
          className="border p-2 rounded-md"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          className="border p-2 rounded-md"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button
          className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
        
<p className="text-center mt-4">
  Already have an account? <Link href="/signin" className="text-blue-500 underline">Sign In</Link>
</p>

      </form>
    </div>
  );
}
