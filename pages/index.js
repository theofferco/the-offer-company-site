"use client";

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Vapi AI configuration
  const assistant = "52985622-77b0-4746-9028-871e7fd97c0a";
  const apiKey = "65d895f6-2369-402c-a5dd-60c641e22024";
  const buttonConfig = {
    offset: "20px",
    theme: "light",
    welcomeMessage: "Hello! I’m Hope, your real estate assistant. How can I help you today?",
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      try {
        const instance = window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: buttonConfig,
        });

        // Move the widget into the center container
        const checkButton = setInterval(() => {
          const vapiButton = document.querySelector('[data-vapi-call-button]');
          const targetContainer = document.querySelector('#vapi-target-container');
          if (vapiButton && targetContainer) {
            targetContainer.appendChild(vapiButton);
            clearInterval(checkButton);
          }
        }, 500);

        // Event listeners
        instance.on('callStart', () => setIsLoading(false));
        instance.on('callEnd', () => setIsLoading(false));
        instance.on('error', (err) => {
          console.error("Vapi AI error:", err);
          setError("Hope encountered an error: " + err.message);
          setIsLoading(false);
        });

      } catch (err) {
        console.error("Failed to initialize Vapi AI SDK:", err);
        setError("Failed to initialize Hope. Please try again later.");
      }
    };

    script.onerror = () => {
      console.error("Failed to load Vapi AI SDK");
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
        <div id="vapi-target-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          {/* Vapi AI widget button will be inserted here */}
        </div>
        {error && (
          <p style={{ color: '#ff6b6b', marginTop: '16px', fontSize: '14px' }}>{error}</p>
        )}
        <p style={{ fontSize: '15px', marginTop: '16px', color: '#aaa' }}>
          No typing needed—just speak naturally and Hope will guide you.
        </p>
      </section>
      <footer style={{ borderTop: '1px solid #444', paddingTop: '32px', fontSize: '15px', color: '#bbb' }}>
        <p style={{ marginBottom: '6px' }}>The Offer Company</p>
        <p style={{ marginBottom: '6px' }}>4802 E Ray Rd, Phoenix, AZ 85044</p>
        <p style={{ marginBottom: '6px' }}>(602) 448-7377 • support@theofferco.com</p>
        <p style={{ marginBottom: '12px' }}>BR License #652927000</p>
        <p style={{ marginTop: '10px' }}>Hope is our virtual voice assistant, here to support homeowners in distress 24/7.</p>
        <p style={{ fontSize: '12px', marginTop: '8px', color: '#888' }}>
          We are not attorneys or financial advisors. This site is for informational purposes only.
        </p>
      </footer>
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        [data-vapi-call-button] {
          background-color: ${isLoading ? '#666' : '#3b82f6'} !important;
          color: white !important;
          font-size: 18px !important;
          font-weight: 500 !important;
          padding: 14px 28px !important;
          border-radius: 30px !important;
          border: none !important;
          cursor: ${isLoading ? 'not-allowed' : 'pointer'} !important;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3) !important;
          max-width: 90% !important;
          width: 280px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 12px !important;
          animation: ${isLoading ? 'none' : 'pulse 2s infinite'} !important;
          position: static !important;
        }
        [data-vapi-call-button]::before {
          content: url('https://cdn-icons-png.flaticon.com/512/108/108496.png');
          width: 20px !important;
          height: 20px !important;
          margin-right: 12px !important;
        }
        [data-vapi-container] {
          display: none !important;
        }
      `}</style>
    </main>
  );
}
