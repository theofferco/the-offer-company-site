import Head from 'next/head';
import Layout from '../components/Layout';

export default function Stories() {
  return (
    <Layout>
      <Head>
        <title>Real Stories & Reviews | The Offer Company – Foreclosure Help Arizona</title>
        <meta
          name="description"
          content="See real reviews from Arizona homeowners who worked with The Offer Company to avoid foreclosure. No pressure, no fees — just real solutions and support from a licensed team."
        />
        <link rel="canonical" href="https://theofferco.com/stories" />
        <meta property="og:title" content="Real Stories & Reviews | The Offer Company – Foreclosure Help Arizona" />
        <meta property="og:description" content="Discover how Arizona homeowners avoided foreclosure with help from The Offer Company. Real stories, real support, real results." />
        <meta property="og:image" content="https://theofferco.com/hope-preview.jpg" />
        <meta property="og:url" content="https://theofferco.com/stories" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="ai-content-context" content="Testimonials and reviews from Arizona homeowners who used The Offer Company to avoid foreclosure, resolve liens, or stay in their homes. Licensed real estate support." />

        {/* Future-proof tracking placeholder */}
        {/* <script src="your-pixel-code.js" /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Offer Company",
              "url": "https://theofferco.com",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "12"
              }
            })
          }}
        />
      </Head>

      <section>
        <h1>Real Stories from Arizona Homeowners</h1>
        <p>
          You don’t have to take our word for it. These are real stories from homeowners across Maricopa County who turned to The Offer Company during one of the most stressful moments of their lives — and found clarity, support, and solutions. This page is regularly updated to reflect our most recent success stories.
        </p>
      </section>

      <section>
        <ul>
          <li>
            <blockquote>
              “I had a foreclosure date coming up fast. I thought my only option was to sell and leave, but they actually helped me apply for a <a href="/loan-modification-help">loan modification</a> and keep my home. And they didn’t charge a dime.”
            </blockquote>
            <p>— Angela S., Glendale</p>
          </li>

          <li>
            <blockquote>
              “I had three liens on the house and no savings. They gave me a <a href="/stop-foreclosure-phoenix">cash offer</a> that included settling the debts and letting me stay in the property for two more months while I found my next place.”
            </blockquote>
            <p>— Robert T., Avondale</p>
          </li>

          <li>
            <blockquote>
              “They offered to buy, list, or even help me stay. No pressure — just walked me through every option. I chose to sell, and they handled everything. It was fast, respectful, and fair.”
            </blockquote>
            <p>— Maria D., Mesa</p>
          </li>

          <li>
            <blockquote>
              “I got more than I expected from the sale and avoided foreclosure entirely. I didn’t feel like I was being sold — I felt like I was being helped.”
            </blockquote>
            <p>— Chris B., Phoenix</p>
          </li>

          <li>
            <blockquote>
              “I was scared and behind on payments. <a href="/hope">Hope</a>, the AI assistant, answered my questions right away. Then I met with the team and found out I had more options than I realized.”
            </blockquote>
            <p>— Brian L., Chandler</p>
          </li>

          <li>
            <blockquote>
              “I didn’t want to deal with showings or agent fees. They gave me a real offer, explained everything clearly, and let me close on my terms.”
            </blockquote>
            <p>— Latasha P., Tempe</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>We’ve Helped Homeowners Across Maricopa County</h2>
        <p>
          From Chandler and Mesa to Glendale and Surprise — we've helped people avoid foreclosure, settle liens, stay in their homes longer, and walk away with dignity and peace of mind.
        </p>
      </section>

      <section>
        <h2>Want to See More?</h2>
        <p>
          <a
            href="https://bit.ly/theofferco-reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Verified Reviews on Google
          </a>
        </p>
      </section>

      <section>
        <h2>Still Have Questions?</h2>
        <p>
          Hope, our AI assistant, is trained to answer your questions about foreclosure, liens, loan modifications, and more — instantly and privately.
        </p>
        <a href="/hope">Talk to Hope Now</a>
      </section>
    </Layout>
  );
}
