"use client";

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [error, setError] = useState(null);

  var talkToHopeBtn = null;
  var talkToHopeBtnLabel = null;
  var VapiInstance = null;
  
  const initiateVapiMeeting = () => {
    talkToHopeBtn.children[0].style.display = "none";
    talkToHopeBtn.style.backgroundColor = "#1a9513";
    talkToHopeBtnLabel.textContent = "Connecting...";
    document.getElementById("vapi-support-btn").click();
  }

  useEffect(() => {
    talkToHopeBtn = document.getElementById("talk-to-hope-btn");
    talkToHopeBtnLabel = document.getElementById("talk-to-hope-btn-text");

    const VapiButtonStyles = document.createElement("style");
    VapiButtonStyles.type = 'text/css';
    VapiButtonStyles.innerHTML = `
      #vapi-support-btn {
        display: none !important;
      }
    `;
    document.head.appendChild(VapiButtonStyles);

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      try {
        VapiInstance = window.vapiSDK.run({
          apiKey: "65d895f6-2369-402c-a5dd-60c641e22024",
          assistant: "b6c9fff2-2b35-4048-af69-abac232b03e5",
          config: {
            theme: "light",
            welcomeMessage: "Hello! I’m Hope, your real estate assistant. How can I help you today?",
            position: "bottom-right",
          }
        });

        document.getElementById("talk-to-hope-btn").addEventListener("click", initiateVapiMeeting);

        VapiInstance.on('call-start', () => {
          talkToHopeBtn.children[0].style.display = "inline-flex";
          talkToHopeBtn.style.backgroundColor = "#e13211";
          talkToHopeBtnLabel.textContent = "Disconnect";
        });

        VapiInstance.on('call-end', () => {
          talkToHopeBtn.children[0].style.display = "inline-flex";
          talkToHopeBtn.style.backgroundColor = "#3b82f6";          
          talkToHopeBtnLabel.textContent = "Talk to Hope Now";
        });

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
      document.removeEventListener("click", initiateVapiMeeting);
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
          Facing Foreclosure? Meet Hope – Your Personal AI Real Estate Assistant.
        </h1>
        <h2 style={{ fontSize: '20px', marginBottom: '24px', lineHeight: '1.6', color: '#ccc' }}>
          Talk directly with Hope to get answers, support, and personalized options—without pressure or judgment.
        </h2>

        {/* Static Blue Button with Inline SVG Mic Icon */}
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

        {error && (
          <p style={{ color: '#ff6b6b', marginTop: '16px', fontSize: '14px' }}>{error}</p>
        )}

      </section>

      <footer style={{ borderTop: '1px solid #444', paddingTop: '32px', fontSize: '15px', color: '#bbb' }}>
        <p>The Offer Company</p>
        <p>4802 E Ray Rd, Phoenix, AZ 85044</p>
        <p>(602) 448-7377 • support@theofferco.com</p>
        <p>BR License #652927000</p>
        <p style={{ marginTop: '10px' }}>
          Hope is our virtual voice assistant, here to support homeowners in distress 24/7.
        </p>
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
