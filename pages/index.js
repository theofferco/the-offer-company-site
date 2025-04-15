// The Offer Company Website – Mobile-Optimized with Dark Theme and Microphone Icon + Animations

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [retellClient, setRetellClient] = useState(null);

  useEffect(() => {
    async function loadRetell() {
      try {
        const sdk = await import("retell-client-js-sdk");
        const client = new sdk.RetellWebClient();
        setRetellClient(client);
      } catch (err) {
        console.error("Failed to load Retell SDK:", err);
      }
    }
    loadRetell();
  }, []);

  async function startHopeCall() {
    if (!retellClient) {
      console.error("Retell client not ready");
      return;
    }
    try {
      await retellClient.startCall({
        agentId: "agent_950e5e1078a753c71cfe3fd35e",
      });
    } catch (error) {
      console.error("Failed to start Hope call:", error);
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

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeInUp 1s ease-out forwards;
        }

        .pulse-button {
          animation: pulse 2s infinite;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 28px !important;
          }

          p {
            font-size: 16px !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <div className="fade-in" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="/hope-avatar.jpg"
            alt="Hope Assistant"
            style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px', objectFit: 'cover' }}
          />
        </div>
        <h1 className="fade-in" style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
          Facing Foreclosure? Meet Hope – Your Personal Real Estate Assistant.
        </h1>
        <p className="fade-in" style={{ fontSize: '20px', marginBottom: '32px', lineHeight: '1.6', color: '#ccc' }}>
          Talk directly with Hope to get answers, support, and personalized options—without pressure or judgment.
        </p>
        <div className="fade-in" style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            className="pulse-button"
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              fontSize: '18px',
              fontWeight: '500',
              padding: '14px 28px',
              borderRadius: '30px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              maxWidth: '90%',
              width: '280px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
            onClick={startHopeCall}
          >
            <img 
              src="https://img.icons8.com/ios-filled/50/ffffff/microphone.png" 
              alt="Microphone Icon" 
              style={{ width: '20px', height: '20px' }} 
            />
            Talk to Hope Now
          </button>
        </div>
        <p className="fade-in" style={{ fontSize: '15px', marginTop: '16px', color: '#aaa' }}>
          No typing needed—just speak naturally and Hope will guide you.
        </p>
      </section>

      {/* Footer */}
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
    </main>
  );
}
