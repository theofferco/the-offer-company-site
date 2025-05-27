"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            welcomeMessage: "Hello! I’m Hope from The Offer Company, here to help with foreclosure or distressed properties in Arizona.",
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
    <>
      <Head>
        <title>Foreclosure Help in Arizona | The Offer Company</title>
        <meta
          name="description"
          content="Facing foreclosure in Arizona? The Offer Company, led by Annette Brown, offers fast cash offers and no-fee solutions. Talk to Hope, our AI assistant, today."
        />
        <meta name="keywords" content="foreclosure help Arizona, sell house fast Arizona, distressed property Arizona, The Offer Company, Annette Brown" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "The Offer Company",
              "url": "https://theofferco.com",
              "logo": "https://theofferco.com/logo.png",
              "description": "The Offer Company, founded by Annette Brown, helps Arizona homeowners facing foreclosure with fast cash offers, no fees, and personalized solutions via our AI assistant, Hope.",
              "areaServed": [
                {"@type": "City", "name": "Phoenix"},
                {"@type": "City", "name": "Tucson"},
                {"@type": "City", "name": "Mesa"},
                {"@type": "State", "name": "Arizona"}
              ],
              "founder": {
                "@type": "Person",
                "name": "Annette Brown"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-602-448-7377",
                "contactType": "Customer Service",
                "email": "support@theofferco.com",
                "availableLanguage": ["English", "Spanish"]
              },
              "sameAs": [
                "https://www.facebook.com/TheOfferCompany",
                "https://www.yelp.com/biz/the-offer-company-phoenix"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Offer Company",
              "url": "https://theofferco.com",
              "logo": "https://theofferco.com/logo.png",
              "description": "The Offer Company specializes in helping Arizona homeowners avoid foreclosure and sell distressed properties quickly with the help of our AI assistant, Hope."
            }
          `}
        </script>
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
        {/* Hamburger Menu */}
        <nav style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000
        }}>
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              color: 'white'
            }}
          >
            ☰
          </button>
          {isMenuOpen && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '0',
              backgroundColor: '#333',
              borderRadius: '5px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
              padding: '10px'
            }}>
              <Link href="/foreclosure-help" style={{ display: 'block', color: '#3b82f6', padding: '10px', textDecoration: 'none' }}>
                Foreclosure Help
              </Link>
              <Link href="/how-it-works" style={{ display: 'block', color: '#3b82f6', padding: '10px', textDecoration: 'none' }}>
                How It Works
              </Link>
              <Link href="/reviews" style={{ display: 'block', color: '#3b82f6', padding: '10px', textDecoration: 'none' }}>
                Reviews
              </Link>
              <Link href="/about" style={{ display: 'block', color: '#3b82f6', padding: '10px', textDecoration: 'none' }}>
                About
              </Link>
            </div>
          )}
        </nav>

        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/hope-avatar.jpg"
              alt="Hope, AI Assistant for Foreclosure Help in Arizona"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px', objectFit: 'cover' }}
            />
          </div>
          <h1 style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
            Foreclosure Help in Arizona
          </h1>
          <h2 style={{ fontSize: '20px', marginBottom: '24px', lineHeight: '1.6', color: '#ccc' }}>
            Talk to Hope, Our AI Assistant, for Fast, No-Pressure Solutions
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <button
              id="talk-to-hope-btn"
              aria-label="Talk to Hope, AI assistant for foreclosure help in Arizona"
              onClick={() => window.gtag && window.gtag('event', 'click', { event_category: 'Button', event_label: 'Talk to Hope' })}
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
                aria-hidden="true"
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

        <footer style={{
          borderTop: '1px solid #444',
          paddingTop: '32px',
          fontSize: '15px',
          color: '#bbb',
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <p>© 2025 The Offer Company</p>
          <p>4802 E Ray Rd, Phoenix, AZ 85044 • <a href="tel:+16024487377" style={{ color: '#3b82f6' }}>(602) 448-7377</a></p>
          <p style={{ marginTop: '10px' }}>
            Helped by Hope? <a href="https://g.page/r/the-offer-company/review" target="_blank" rel="noopener" style={{ color: '#3b82f6' }}>Leave a review</a>
          </p>
        </footer>

        <style jsx global>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.9; }
            100% { transform: scale(1); opacity: 1; }
          }
          @media (max-width: 600px) {
            h1 { font-size: 28px; }
            h2 { font-size: 18px; }
            button#talk-to-hope-btn { font-size: 16px; padding: 12px 24px; }
            nav button { font-size: 20px; }
          }
        `}</style>
      </main>
    </>
  );
}
