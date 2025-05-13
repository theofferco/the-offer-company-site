"user client";

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  async function createWebCall() {
    try {
      console.log("Creating web call via API...");
      const response = await fetch('https://api.retellai.com/create-web-call', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_RETELL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: "agent_950e5e1078a753c71cfe3fd35e",
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to create web call');
      }
      console.log("Web call created:", data);
      return data.access_token;
    } catch (err) {
      console.error("Failed to create web call:", err);
      throw err;
    }
  }

  async function startHopeCall() {
    console.log("Starting Hope call...");
    try {
      setIsLoading(true);
      setError(null);

      // Check API key
      if (!process.env.NEXT_PUBLIC_RETELL_API_KEY) {
        throw new Error("Retell API key is not set in environment variables.");
      }

      // Request microphone access
      console.log("Requesting microphone access...");
      await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("Microphone access granted");

      // Create web call via API
      console.log("Initiating web call with agentId:", "agent_950e5e1078a753c71cfe3fd35e");
      const token = await createWebCall();
      setAccessToken(token);
      console.log("Access token received:", token);

      // Basic WebRTC setup
      console.log("Setting up WebRTC connection...");
      const peerConnection = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      });

      // Add audio stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

      // Handle ICE candidates
      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          console.log("ICE candidate:", event.candidate);
          // In a real app, send the candidate to Retell’s signaling server
        }
      };

      // Handle incoming audio stream
      peerConnection.ontrack = (event) => {
        console.log("Received remote stream:", event.streams[0]);
        const audio = new Audio();
        audio.srcObject = event.streams[0];
        audio.play();
      };

      // Create offer
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      console.log("WebRTC offer created:", offer);

      // In a real app, you'd send the offer to Retell’s signaling server and receive an answer
      // For now, log the offer and stop here, as we don’t have the signaling server details
      console.log("Call setup initiated. Further signaling required.");
    } catch (error) {
      console.error("Failed to start Hope call:", error);
      if (error.name === "NotAllowedError") {
        setError("Please allow microphone access to talk to Hope.");
      } else if (error.message.includes("network")) {
        setError("Network issue. Please check your internet connection.");
      } else if (error.message.includes("auth") || error.message.includes("Unauthorized")) {
        setError("Authentication failed. Please check your API key.");
      } else {
        setError("Hope is currently unavailable: " + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

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
