"use client";

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
        const instance = window.vapiSDK.run({
          apiKey: "65d895f6-2369-402c-a5dd-60c641e22024",
          assistant: "b6c9fff2-2b35-4048-af69-abac232b03e5",
          config: {
            theme: "light",
            welcomeMessage: "Hello! I’m Hope, your real estate assistant. How can I help you today?",
            position: "bottom-right", // Still needed to load, we'll override it
          }
        });

        // Wait for the button to load and move it to the desired container
        const moveButton = setInterval(() => {
          const button = document.querySelector('[data-vapi-call-button]');
          const container = document.querySelector('#vapi-button-container');

          if (button && container) {
            container.appendChild(button);
            button.style.position = 'static'; // remove fixed placement
            button.style.margin = '0 auto';   // center horizontally
            clearInterval(moveButton);
          }
        }, 500);
      } catch (err) {
        console.error("Vapi widget init error:", err);
        setError("Failed to initialize Hope. Please try again later.");
      }
    };

    script.onerror = () => {
      setError("Failed to load Hope. Please try again later.");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      padding: '60px 20px',
      backgroundColor: '#1a1a1a',
      color: 'white',
      minHeight: '100vh',
      textAlign: 'center',
      backgroundImage: 'linear-gradient(to bottom, #1a1a1a 0%, #333333 100%)'
    }}>
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="/hope-avatar.jpg"
            alt="Hope Assistant"
            style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px', objectFit: 'cover' }}
          />
        </div>
        <h1 style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
          Facing Foreclosure? Meet Hope – Your Personal Real Estate Assistant.
        </h1>
        <h2 style={{ fontSize: '20px', marginBottom: '16px', lineHeight: '1.6', color: '#ccc' }}>
          Talk directly with Hope to get answers, support, and personalized options—without pressure or judgment.
        </h2>

        {/* This is where we inject the widget */}
        <div id="vapi-button-container" style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}></div>

        {error && (
          <p style={{ color: '#ff6b6b', marginTop: '16px', fontSize: '14px' }}>{error}</p>
        )}

        <p style={{ fontSize: '15px', marginTop: '16px', color: '#aaa' }}>
          No typing needed—just speak naturally and Hope will guide you.
        </p>
      </section>

      <footer style={{ borderTop: '1px solid #444', paddingTop: '32px', fontSize: '15px', color: '#bbb' }}>
        <p>The Offer Company</p>
        <p>4802 E Ray Rd, Phoenix, AZ 85044</p>
        <p>(602) 448-7377 • support@theofferco.com</p>
        <p>BR License #652927000</p>
        <p style={{ marginTop: '10px' }}>
          Hope is our virtual voice assistant, here to support homeowners in distress 24/7.
        </p>
        <p style={{ fontSize: '12px', marginTop: '8px', color: '#888' }}>
          We are not attorneys or financial advisors. This site is for informational purposes only.
        </p>
      </footer>
    </main>
  );
}
