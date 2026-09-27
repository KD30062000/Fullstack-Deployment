"use client";

import { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export default function Home() {
  const [message, setMessage] = useState("Checking backend...");

  useEffect(() => {
    fetch(`${apiUrl}/api/message`)
      .then((response) => response.json())
      .then((data: { message: string }) => setMessage(data.message))
      .catch(() => setMessage("Backend is unavailable"));
  }, []);

  return (
    <main className="shell">
      <div className="eyebrow"><span /> DROPLET READY</div>
      <h1>Fullstack,<br /><em>without the fuss.</em></h1>
      <p className="intro">A tiny Next.js frontend talking to a FastAPI backend. Separate services, one simple deployment.</p>
      <section className="status-panel">
        <div>
          <p className="label">API RESPONSE</p>
          <p className="message">{message}</p>
        </div>
        <div className="status-dot" aria-label="API status" />
      </section>
      <footer><span>FRONTEND · NEXT.JS</span><span>BACKEND · FASTAPI</span><span>DEPLOY · DOCKER</span></footer>
    </main>
  );
}
