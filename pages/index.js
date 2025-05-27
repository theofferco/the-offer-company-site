// FILE: Layout.jsx
// Site-wide layout shell with hamburger menu and navigation

import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>The Offer Company | Foreclosure Help in Arizona</title>
        <meta name="description" content="Facing foreclosure in Arizona? Talk to Hope — The Offer Company's AI assistant — for a fast, no-pressure cash offer. No fees. No judgment. Just help." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1a1a1a', color: 'white' }}>
        <Link href="/">
          <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>The Offer Company</h1>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          style={{ fontSize: '24px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          ☰
        </button>
      </header>

      {open && (
        <nav style={{ backgroundColor: '#2a2a2a', padding: '20px', textAlign: 'left' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'white' }}>
            <li><Link href="/foreclosure-help">Foreclosure Help</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </nav>
      )}

      <main>{children}</main>
    </div>
  );
}

// FILE: pages/index.jsx

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      try {
        const talkBtn = document.getElementById("talk-to-hope-btn");
        const talkLabel = document.getElementById("talk-to-hope-btn-text");

        const instance = window.vapiSDK.run({
          apiKey: "65d895f6-2369-402c-a5dd-60c641e22024",
          assistant: "b6c9fff2-2b35-4048-af69-abac232b03e5",
          config: { theme: "light", position: "bottom-right" }
        });

        const hideDefaultBtn = document.createElement("style");
        hideDefaultBtn.textContent = `#vapi-support-btn { display: none !important; }`;
        document.head.appendChild(hideDefaultBtn);

        talkBtn.addEventListener("click", () => {
          talkBtn.children[0].style.display = "none";
          talkBtn.style.backgroundColor = "#1a9513";
          talkLabel.textContent = "Connecting...";
          document.getElementById("vapi-support-btn")?.click();
        });

        instance.on("call-start", () => {
          talkBtn.children[0].style.display = "inline-flex";
          talkBtn.style.backgroundColor = "#e13211";
          talkLabel.textContent = "Disconnect";
        });

        instance.on("call-end", () => {
          talkBtn.children[0].style.display = "inline-flex";
          talkBtn.style.backgroundColor = "#3b82f6";
          talkLabel.textContent = "Talk to Hope Now";
        });
      } catch (err) {
        console.error("Widget error:", err);
        setError("Hope failed to load. Please try again later.");
      }
    };

    script.onerror = () => setError("Failed to load Hope.");

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '120px 20px 40px', backgroundColor: '#1a1a1a', color: 'white', textAlign: 'center', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '16px' }}>Facing Foreclosure?</h1>
      <h2 style={{ fontSize: '20px', color: '#ccc', marginBottom: '32px' }}>Talk to Hope — Our AI Assistant — for Real Help Today.</h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <button
          id="talk-to-hope-btn"
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            fontSize: '18px',
            fontWeight: 600,
            padding: '14px 28px',
            borderRadius: '30px',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            animation: 'pulse 2s infinite',
            cursor: 'pointer'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V20H8v2h8v-2h-3v-2.08A7 7 0 0 0 19 11Z" />
          </svg>
          <span id="talk-to-hope-btn-text">Talk to Hope Now</span>
        </button>
      </div>

      {error && <p style={{ color: '#ff6b6b' }}>{error}</p>}

      <footer style={{ fontSize: '14px', color: '#888', marginTop: '60px' }}>
        © 2025 The Offer Company · <a href="https://g.page/r/CZsdKqMCUw3hEB0/review" target="_blank" style={{ color: '#3b82f6' }}>Leave a Google Review</a>
      </footer>

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </main>
  );
}
