import Head from 'next/head';
import Layout from '../components/Layout';

export default function StopForeclosure() {
  return (
    <Layout>
      <Head>
        <title>Stop Foreclosure in Phoenix AZ | The Offer Company</title>
        <meta
          name="description"
          content="Behind on mortgage payments? We help Maricopa County homeowners stop foreclosure fast with loan mods, cash offers, and short sale support. Licensed real estate help with no pressure or fees."
        />
        <link rel="canonical" href="https://theofferco.com/stop-foreclosure-phoenix" />
        <meta property="og:title" content="Stop Foreclosure in Phoenix AZ | The Offer Company" />
        <meta property="og:description" content="Avoid foreclosure in Arizona. We help homeowners apply for loan mods, sell fast, or do a short sale — all with local, licensed support." />
        <meta property="og:image" content="https://theofferco.com/hope-preview.jpg" />
        <meta property="og:url" content="https://theofferco.com/stop-foreclosure-phoenix" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="ai-content-context" content="Licensed foreclosure help in Phoenix Arizona. Options include cash offers, short sales, and loan modification. Backed by a real brokerage and AI assistant." />

        {/* Future-proof tracking placeholder */}
        {/* <script src="your-pixel-code.js" /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Stop Foreclosure in Phoenix",
              "description": "Help for homeowners behind on payments or facing foreclosure in Phoenix AZ. Get local real estate solutions: loan mods, short sales, or fast offers.",
              "url": "https://theofferco.com/stop-foreclosure-phoenix"
            })
          }}
        />
      </Head>

      <section>
        <h1>Stop Foreclosure in Phoenix, Arizona</h1>
        <p>
          If you're behind on mortgage payments or facing a Notice of Trustee Sale, you're not alone — and you're not out of options. At The Offer Company, we help Maricopa County homeowners stop foreclosure fast — with real, licensed solutions. This page is regularly updated to reflect Arizona timelines and available options.
        </p>
      </section>

      <section>
        <h2>Your Options (We’ll Help You Decide)</h2>
        <ul>
          <li><strong>Loan Modification:</strong> We help you <a href="/loan-modification-help">apply through your lender</a> to stay in your home — 100% free.</li>
          <li><strong>Sell Before Foreclosure:</strong> Get a fast <a href="/short-sale-help-arizona">cash offer</a> or list your home with us for maximum value. No pressure.</li>
          <li><strong>Stay After the Sale:</strong> Need time to move? We often allow post-sale occupancy under a flexible agreement.</li>
          <li><strong>Short Sale Support:</strong> If you owe more than your home is worth, we’ll work with your lender to approve a <a href="/short-sale-help-arizona">short sale</a> that protects your credit.</li>
        </ul>
      </section>

      <section>
        <h2>Real Help From Local Professionals</h2>
        <p>
          We’re a licensed Arizona real estate brokerage — not a wholesaler. For over 20 years, we’ve helped families throughout Phoenix and Maricopa County find clarity and control in foreclosure situations. Ethical, fast, and always local.
        </p>
        <p>
          Our Designated Broker, <strong>Anette Brown</strong> (License #BR564882000), leads our team with decades of experience in pre-foreclosure sales, short sales, loan modifications, and title resolution.
        </p>
      </section>

      <section>
        <h2>Talk to Hope — Our 24/7 AI Assistant</h2>
        <p>
          <a href="/hope">Click here</a> to talk to Hope now — she’ll guide you through your options, explain timelines, and help you schedule a pressure-free appointment with our team.
        </p>
      </section>
    </Layout>
  );
}
