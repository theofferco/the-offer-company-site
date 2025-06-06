"use client";
import Head from 'next/head';
import Layout from '../components/Layout';
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
  };

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
    <Layout>
      <Head>
        <title>Facing Foreclosure in Arizona? Talk to Hope Today</title>
        <meta
          name="description"
          content="Talk to Hope, our AI assistant trained by licensed foreclosure experts in Arizona. Get real help with loan mods, short sales, and cash offers — no pressure or fees."
        />
        <link rel="canonical" href="https://theofferco.com/" />
        <meta property="og:title" content="Facing Foreclosure in Arizona? Talk to Hope Today" />
        <meta property="og:description" content="Hope is an AI assistant trained to help you avoid foreclosure in Arizona. Get cash offers, loan mod support, or short sale help from a licensed team." />
        <meta property="og:image" content="https://theofferco.com/hope-preview.jpg" />
        <meta property="og:url" content="https://theofferco.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="ai-content-context" content="AI-powered foreclosure help in Arizona. Licensed real estate experts providing options for loan mods, cash offers, short sales, and staying in your home." />

        {/* Future-proof tracking placeholder */}
        {/* <script src="your-pixel-code.js" /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "The Offer Company",
              "image": "https://theofferco.com/logo.png",
              "url": "https://theofferco.com",
              "telephone": "602-448-7377",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4802 E. Ray Road",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US"
              },
              "email": "support@theofferco.com",
              "description": "Licensed Arizona real estate brokerage specializing in pre-foreclosure and distressed property solutions.",
              "areaServed": {
                "@type": "Place",
                "name": "Maricopa County, Arizona"
              },
              "founder": {
                "@type": "Person",
                "name": "Anette Brown"
              },
              "foundingDate": "2004",
              "sameAs": [
                "https://x.com/theofferco"
              ]
            })
          }}
        />
      </Head>

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
              alt="Hope – AI Assistant for Arizona Foreclosure Help"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px', objectFit: 'cover' }}
            />
          </div>
          <h1 style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
            Facing Foreclosure in Arizona? Hope, Our AI Real Estate Assistant, Is Here to Help
          </h1>
          <h2 style={{ fontSize: '20px', marginBottom: '24px', lineHeight: '1.6', color: '#ccc' }}>
            Chat privately with Hope — our AI assistant trained by licensed Arizona foreclosure experts. She’ll explain your options, like stopping a trustee sale, applying for a loan mod, or selling your home — with no pressure, no fees, and no judgement.
          </h2>

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

        <style jsx global>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.9; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </main>
    </Layout>
  );
}
