// The Offer Company Website – Mobile-Optimized with Dark Theme and Hope Image

export default function HomePage() {
  async function startHopeCall() {
    try {
      const { RetellWebClient } = await import("retell-client-js-sdk");
      const retellWebClient = new RetellWebClient();

      await retellWebClient.startCall({
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

      {/* Hero Section */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
          Facing Foreclosure? Meet Hope – Your Personal Real Estate Assistant.
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '32px', lineHeight: '1.6', color: '#ccc' }}>
          Talk directly with Hope to get answers, support, and personalized options—without pressure or judgment.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
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
              src="/hope-avatar.jpg" 
              alt="Hope Avatar" 
              style={{ width: '32px', height: '32px', borderRadius: '50%' }} 
            />
            Talk to Hope Now
          </button>
        </div>
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
    </main>
  );
}
