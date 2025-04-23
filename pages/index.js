import { useEffect, useState } from 'react';

export default function HomePage() {
  const [retellClient, setRetellClient] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRetell() {
      try {
        const sdk = await import("retell-client-js-sdk");
        const client = new sdk.RetellWebClient({
          apiKey: "key_3b5e16878853b718051cc08a9525"
        });
        setRetellClient(client);
      } catch (err) {
        console.error("Failed to load Retell SDK:", err);
        setError("Something went wrong loading the voice assistant.");
      }
    }
    loadRetell();
  }, []);

  async function startHopeCall() {
    if (!retellClient) {
      setError("Voice assistant isn't ready yet. Please try again shortly.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      await retellClient.startCall({
        agentId: "agent_950e5e1078a753c71cfe3fd35e",
      });
    } catch (error) {
      console.error("Failed to start Hope call:", error);
      setError("Hope is currently unavailable. Please try again later.");
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

      {/* Hero Section */}
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
              src="https://img.icons8.com/ios-filled/50/ffffff/microphone.png" 
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
