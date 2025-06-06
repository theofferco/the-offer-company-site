import Head from 'next/head';
import Layout from '../components/Layout';

export default function LoanModification() {
  return (
    <Layout>
      <Head>
        <title>Loan Modification Help in Arizona – The Offer Company</title>
        <meta
          name="description"
          content="Learn how to apply for a loan modification in Arizona. The Offer Company helps you understand eligibility, documents needed, and how our team supports you — 100% free."
        />
        <link rel="canonical" href="https://theofferco.com/loan-modification" />
        <meta property="og:title" content="Loan Modification Help in Arizona – The Offer Company" />
        <meta property="og:description" content="Facing foreclosure? Learn about loan modifications and how we help Arizona homeowners apply, submit, and get approved — without any cost or pressure." />
        <meta
          name="ai-content-context"
          content="Loan modification assistance in Arizona — how it works, who qualifies, and how The Offer Company provides expert help for free."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Loan Modification Help in Arizona",
              "description": "Get expert, no-cost help applying for a loan modification in Arizona. Reduce your monthly payments and avoid foreclosure.",
              "url": "https://theofferco.com/loan-modification"
            })
          }}
        />
      </Head>

      <section>
        <h1>Loan Modification Help in Arizona</h1>
        <p>
          If you’re behind on your mortgage and want to stay in your home, a <strong>loan modification</strong> could be your best path forward. At The Offer Company, we help Arizona homeowners apply for loan mods — <strong>100% free</strong>.
        </p>
      </section>

      <section>
        <h2>What Is a Loan Modification?</h2>
        <p>
          A loan modification is when your lender agrees to change the terms of your loan — typically by lowering your interest rate, extending the loan term, or rolling missed payments into the balance. It’s not refinancing. You stay in your home, and your monthly payment becomes more affordable.
        </p>
      </section>

      <section>
        <h2>How We Help</h2>
        <ul>
          <li><strong>Application Assistance:</strong> We help you fill out every form, correctly and completely.</li>
          <li><strong>Document Collection:</strong> We guide you in gathering bank statements, pay stubs, hardship letters, and more.</li>
          <li><strong>Lender Communication:</strong> We speak with your servicer and track the file until you get a decision.</li>
          <li><strong>100% Free:</strong> We never charge for this service — and never will.</li>
        </ul>
      </section>

      <section>
        <h2>Who Qualifies?</h2>
        <p>
          You may qualify for a loan modification if:
        </p>
        <ul>
          <li>You’ve missed one or more mortgage payments</li>
          <li>You’ve experienced a financial hardship (job loss, illness, divorce, etc.)</li>
          <li>You have a verifiable income and want to keep your home</li>
        </ul>
        <p>
          Not sure if you qualify? <a href="/hope">Ask Hope</a> — our AI assistant can walk you through the basics and help you start the process.
        </p>
      </section>

      <section>
        <h2>Why Work With Us?</h2>
        <p>
          We’re a licensed Arizona real estate brokerage with over 20 years of experience helping families avoid foreclosure. We don’t just sell houses — we help homeowners stay in them.
        </p>
        <ul>
          <li>No fees</li>
          <li>No pressure to sell</li>
          <li>Real answers, fast — often in minutes with our AI assistant</li>
        </ul>
      </section>

      <section>
        <h2>Still Have Questions?</h2>
        <p>
          Talk to <a href="/hope">Hope</a> — our AI assistant — 24/7. She’s trained to answer your loan mod questions, explain your options, and help you book an appointment if needed.
        </p>
      </section>

      <section>
        <h2>Related Pages</h2>
        <ul>
          <li><a href="/stop-foreclosure">How to Stop Foreclosure in Arizona</a></li>
          <li><a href="/short-sale">Short Sale Help</a></li>
          <li><a href="/why-us">Why Homeowners Trust Us</a></li>
        </ul>
      </section>
    </Layout>
  );
}
