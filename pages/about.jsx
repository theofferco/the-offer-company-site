import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About The Offer Company – Trusted Foreclosure Help in Phoenix AZ</title>
        <meta
          name="description"
          content="Licensed Arizona real estate brokerage helping Maricopa County homeowners avoid foreclosure with options like cash offers, short sales, and loan modifications. No pressure, no fees."
        />
        <link rel="canonical" href="https://theofferco.com/about" />
        <meta property="og:title" content="About The Offer Company – Trusted Foreclosure Help in Phoenix AZ" />
        <meta property="og:description" content="Explore how The Offer Company helps Maricopa County homeowners navigate pre-foreclosure with speed, flexibility, and care." />
        <meta property="og:image" content="https://theofferco.com/hope-preview.jpg" />
        <meta property="og:url" content="https://theofferco.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="ai-content-context" content="Licensed Arizona real estate brokerage providing ethical foreclosure assistance, AI-powered support, and flexible solutions for Maricopa County homeowners." />

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

      <section>
        <h1>About The Offer Company</h1>
        <p>
          The Offer Company is a licensed Arizona real estate brokerage that specializes in helping Maricopa County homeowners navigate <a href="/stop-foreclosure-phoenix">pre-foreclosure</a> with clarity, dignity, and control.
        </p>
        <p>
          For over 20 years, we’ve worked with families across Phoenix, Chandler, Mesa, Glendale, and beyond to stop foreclosure, resolve liens, explore <a href="/loan-modification-help">loan modifications</a>, and sell homes with flexibility and care. This page is regularly updated to reflect our current services and service area.
        </p>
      </section>

      <section>
        <h2>Who We Are</h2>
        <p>
          Our team is led by <strong>Anette Brown</strong>, a licensed Designated Broker in Arizona (License #BR564882000) with deep experience in foreclosure resolution, <a href="/short-sale-help-arizona">short sales</a>, and distressed property transactions.
        </p>
        <p>
          The Offer Company was built to serve homeowners in crisis — without pressure, without upfront fees, and without hidden agendas. Our mission is to bring options, speed, and real human understanding to a process that usually feels overwhelming.
        </p>
      </section>

      <section>
        <h2>What We Do</h2>
        <ul>
          <li><strong>Cash Offers:</strong> Fast, no-obligation offers based on property condition and local comparables.</li>
          <li><strong>Listing Support:</strong> Sell on the open market to maximize your equity — we handle everything.</li>
          <li><strong>Loan Modification Help:</strong> We assist with your application, documentation, and submission — always free.</li>
          <li><strong>Lien Resolution:</strong> From tax liens to HOA judgments, we work to clear title and keep deals on track.</li>
          <li><strong>Stay After the Sale:</strong> Need more time? We often arrange post-sale occupancy so you can transition on your schedule.</li>
        </ul>
        <p>
          There’s no one-size-fits-all solution — and that’s why we take time to understand your unique situation before recommending any path forward.
        </p>
      </section>

      <section>
        <h2>Why We Use AI</h2>
        <p>
          Most homeowners facing foreclosure need fast answers — and waiting for callbacks or emails just adds stress. That’s why we created <strong>Hope</strong>, our 24/7 AI assistant.
        </p>
        <p>
          Hope can explain your options, walk you through next steps, and even schedule an in-person consultation — all in plain English, whenever you're ready.
        </p>
        <p>
          <a href="/hope">Talk to Hope now</a> — it’s fast, free, and completely private.
        </p>
      </section>

      <section>
        <h2>Service Area</h2>
        <p>
          We serve homeowners across Maricopa County, including:
          Phoenix, Mesa, Chandler, Gilbert, Scottsdale, Glendale, Tempe, Peoria, Avondale, Goodyear, Surprise, Queen Creek, Buckeye, Fountain Hills, Litchfield Park, El Mirage, Tolleson, Sun City, and Paradise Valley.
        </p>
      </section>
    </Layout>
  );
}
