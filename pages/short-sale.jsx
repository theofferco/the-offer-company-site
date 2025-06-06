import Head from 'next/head';
import Layout from '../components/Layout';

export default function ShortSale() {
  return (
    <Layout>
      <Head>
        <title>Short Sale Help in Arizona | The Offer Company</title>
        <meta
          name="description"
          content="Owe more than your home is worth? Avoid foreclosure with a lender-approved short sale. Licensed Arizona real estate help with no upfront fees or pressure."
        />
        <link rel="canonical" href="https://theofferco.com/short-sale-help-arizona" />
        <meta property="og:title" content="Short Sale Help in Arizona | The Offer Company" />
        <meta property="og:description" content="Behind on payments and underwater on your home? We help Arizona homeowners complete lender-approved short sales to avoid foreclosure and protect credit." />
        <meta property="og:image" content="https://theofferco.com/hope-preview.jpg" />
        <meta property="og:url" content="https://theofferco.com/short-sale-help-arizona" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="ai-content-context" content="Short sale guidance for Arizona homeowners in pre-foreclosure. Licensed brokerage helping with lender negotiations, buyer offers, and credit protection." />

        {/* Future-proof tracking placeholder */}
        {/* <script src="your-pixel-code.js" /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Short Sale Help in Arizona",
              "description": "Avoid foreclosure with a lender-approved short sale. Licensed real estate help across Maricopa County. No fees, no pressure — just guidance from The Offer Company.",
              "url": "https://theofferco.com/short-sale-help-arizona"
            })
          }}
        />
      </Head>

      <section>
        <h1>Short Sale Help in Arizona</h1>
        <p>
          If your home is worth less than what you owe — and you're struggling to keep up with payments — a <strong>short sale</strong> may be the best way to avoid foreclosure. 
          At The Offer Company, we help homeowners across Maricopa County settle their debt and move forward with dignity.
        </p>
        <p>This page is updated regularly to reflect current lender requirements and homeowner support options.</p>
      </section>

      <section>
        <h2>What Is a Short Sale?</h2>
        <p>
          A short sale is when your mortgage lender agrees to let you sell your home for less than what you owe. 
          It’s a legal, negotiated process that typically requires:
        </p>
        <ul>
          <li>A hardship explanation</li>
          <li>A buyer offer (we can provide one)</li>
          <li>Lender review and approval</li>
        </ul>
        <p>We manage the entire process — and you pay nothing out of pocket.</p>
      </section>

      <section>
        <h2>How We Help</h2>
        <ul>
          <li><strong>Short Sale Approval:</strong> We manage all paperwork, lender communication, and negotiations.</li>
          <li><strong>Immediate Buyer Options:</strong> We can make a <a href="/stop-foreclosure-phoenix">fair cash offer</a> that supports lender approval — no need to list the home publicly.</li>
          <li><strong>You Stay in Control:</strong> There’s no pressure. We’ll explain everything clearly and only move forward when you’re ready.</li>
          <li><strong>Credit Protection:</strong> Short sales typically do less long-term damage to your credit than foreclosure.</li>
        </ul>
      </section>

      <section>
        <h2>Trusted Local Help</h2>
        <p>
          We're not a wholesaler or national investor. We're a licensed Arizona real estate brokerage based in Phoenix — and we’ve been helping families with foreclosure alternatives for more than 20 years.
        </p>
        <p>
          Our team is led by <strong>Anette Brown</strong>, a Designated Broker (License #BR564882000) with deep experience in <a href="/loan-modification-help">loan mods</a>, short sales, and distressed property solutions.
        </p>
      </section>

      <section>
        <h2>Talk to Hope — Our 24/7 AI Assistant</h2>
        <p>
          <a href="/hope">Click here</a> to talk to Hope now — she’ll answer your short sale questions and help you take the next step toward avoiding foreclosure.
        </p>
      </section>
    </Layout>
  );
}
