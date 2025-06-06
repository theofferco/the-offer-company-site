import Head from 'next/head';
import Layout from '../components/Layout';

export default function SellBeforeForeclosure() {
  return (
    <Layout>
      <Head>
        <title>Sell Before Foreclosure in Arizona – Explore Your Options</title>
        <meta
          name="description"
          content="Behind on payments or facing foreclosure in Arizona? Sell your home before the trustee sale. Explore cash offers, traditional listings, or a short sale — all with no pressure and expert guidance."
        />
        <link rel="canonical" href="https://theofferco.com/sell-before-foreclosure" />
        <meta property="og:title" content="Sell Before Foreclosure in Arizona – Explore Your Options" />
        <meta property="og:description" content="Explore all your options to sell your home before foreclosure — including fast cash offers, listing on the market, or negotiating a short sale." />
        <meta name="ai-content-context" content="Options and guidance for Arizona homeowners to sell their home before foreclosure. Includes fast cash offers, real estate listings, and lender-approved short sales. Helps users understand timelines, benefits, and what to expect." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Sell Before Foreclosure",
              "description": "Explore your options to sell your Arizona home before foreclosure. Learn how to get a cash offer, list traditionally, or work with your lender for a short sale.",
              "url": "https://theofferco.com/sell-before-foreclosure"
            })
          }}
        />
      </Head>

      <section>
        <h1>Sell Before Foreclosure in Arizona</h1>
        <p>
          If you’re behind on mortgage payments or facing a trustee sale, selling your home before foreclosure might be the best way to protect your equity and move on with peace of mind.
        </p>
        <p>
          At The Offer Company, we guide Arizona homeowners through all available paths — without pressure. Whether you want speed, top dollar, or credit protection, we’ll help you decide what works best for your situation.
        </p>
      </section>

      <section>
        <h2>Your Selling Options</h2>
        <ul>
          <li>
            <strong>Fast Cash Offer:</strong> Need to sell quickly and skip showings, fees, and repairs? We’ll present a real cash offer and can often close in days.
          </li>
          <li>
            <strong>Traditional Listing:</strong> Prefer to list your home publicly? We’ll market the home for top dollar — and negotiate with the bank if you're already in default.
          </li>
          <li>
            <strong>Lender-Approved Short Sale:</strong> If your home is worth less than what you owe, we’ll work with your lender to get a short sale approved that protects your credit.
          </li>
        </ul>
        <p>
          Not sure which is best? <a href="/hope">Talk to Hope</a> — our AI assistant — for instant answers, or <a href="/faq">visit our FAQ</a> for common scenarios.
        </p>
      </section>

      <section>
        <h2>Why Act Now?</h2>
        <p>
          Once the trustee sale date arrives, it’s too late to sell. Acting early gives you time, control, and more options. Even if you're just exploring possibilities, we can guide you through your next move.
        </p>
      </section>

      <section>
        <h2>We’re Local. We’re Licensed. We’re Here to Help.</h2>
        <p>
          The Offer Company is a licensed Arizona real estate brokerage — not a wholesaler. For 20+ years, we’ve helped Phoenix-area homeowners sell before foreclosure with clarity and care.
        </p>
        <p>
          No fees. No pressure. Just real options that protect your future.
        </p>
      </section>

      <section>
        <h2>Ready to See Your Options?</h2>
        <p>
          <a href="/hope">Click here to talk to Hope</a>, our AI real estate assistant. She’s trained by licensed foreclosure experts and can walk you through your selling options in minutes.
        </p>
      </section>
    </Layout>
  );
}
