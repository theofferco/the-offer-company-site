"use client";

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [vapiInstance, setVapiInstance] = useState(null);

  // Vapi AI configuration
  const assistant = "52985622-77b0-4746-9028-871e7fd97c0a"; // Vapi AI agent ID
  const apiKey = "65d895f6-2369-402c-a5dd-60c641e22024"; // Vapi AI public API key

  // Load Vapi AI SDK when the page loads
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      try {
        // Initialize Vapi SDK without rendering the default widget UI
        const instance = window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: {
            theme: "light",
            welcomeMessage: "Hello! I’m Hope, your real estate assistant. How can I help you today?",
          },
        });
        setVapiInstance(instance);
        console.log("Vapi AI SDK loaded successfully");

        // Add event listeners for call start and end
        instance.on('callStart', () => {
          console.log("Call with Hope started");
          setIsLoading(false);
        });
        instance.on('callEnd', () => {
          console.log("Call with Hope ended");
          setIsLoading(false);
        });
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

  // Start the Vapi AI call when the button is clicked
  const startHopeCall = () => {
    if (!vapiInstance) {
      setError("Hope is not ready yet. Please wait a moment and try again.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log("Starting Vapi AI call...");
      // Check if startCall method exists, otherwise try connect or log available methods
      if (typeof vapiInstance.startCall === "function") {
        vapiInstance.startCall();
      } else if (typeof vapiInstance.connect === "function") {
        vapiInstance.connect();
      } else {
        console.log("Available methods on vapiInstance:", Object.keys(vapiInstance));
        throw new Error("No valid method to start the call. Check Vapi AI SDK documentation.");
      }
      console.log("Vapi AI call started");
    } catch (err) {
      console.error("Failed to start Hope call:", err);
      setError("Hope is currently unavailable: " + err.message);
      setIsLoading(false);
    }
  };

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
        <h2 style={{ fontSize: '20px', marginBottom: '32px', lineHeight: '1.6', color: '#ccc' }}>
          Talk directly with Hope to get answers, support, and personalized options—without pressure or judgment.
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            style={{
              backgroundColor: isLoading ? '#666' : '#3b82f6',
              color: 'white',
              fontSize: '18px',
              fontWeight: '500',
              padding: '14px 28px',
              borderRadius: '30px',
              border: 'none',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              maxWidth: '90%',
              width: '280px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              animation: isLoading ? 'none' : 'pulse 2s infinite'
            }}
            onClick={startHopeCall}
            disabled={isLoading}
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/108/108496.png"
              alt="Microphone Icon"
              style={{ width: '20px', height: '20px' }}
            />
            {isLoading ? 'Connecting to Hope...' : 'Talk to Hope Now'}
          </button>
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
      `}</style>
    </main>
  );
}
