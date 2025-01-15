"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    test();
  });


  async function test() {
    const response = await fetch("http://localhost:8080/api/users");
    const data = await response.json();

    console.log(data);
  }

  return <div></div>;
}
