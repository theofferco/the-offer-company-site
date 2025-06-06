import Head from 'next/head';
import Layout from '../components/Layout';

export default function TermsOfUse() {
  return (
    <Layout>
      <Head>
        <title>Terms of Use – The Offer Company</title>
        <meta name="description" content="Review the terms and conditions for using The Offer Company website and AI assistant. Understand your rights, responsibilities, and our service disclaimers." />
        <link rel="canonical" href="https://theofferco.com/terms-of-use" />
        <meta property="og:title" content="Terms of Use – The Offer Company" />
        <meta property="og:description" content="These Terms of Use govern your access to The Offer Company's website, services, and AI assistant. Read our terms carefully before using our platform." />
        <meta name="ai-content-context" content="Terms of use for a real estate and foreclosure service website that uses AI assistants, automation, and online tools. Includes disclaimers, copyright terms, and user responsibilities." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Terms of Use",
              "description": "Terms and conditions for accessing and using The Offer Company's website and services, including AI interactions, SMS, and appointment tools.",
              "url": "https://theofferco.com/terms-of-use"
            })
          }}
        />
      </Head>

      <section>
        <h1>Terms of Use</h1>
        <p>Effective Date: June 6, 2025</p>
        <p>
          These Terms of Use (“Terms”) govern your access to and use of The Offer Company’s website, services, AI assistant, and other online platforms (“Services”). By using our Services, you agree to be bound by these Terms. If you do not agree, do not access the site or use our services.
        </p>
      </section>

      <section>
        <h2>1. Informational Use Only</h2>
        <p>
          The content on this website — including AI assistant responses, blog posts, and property-related materials — is provided for general informational purposes only. It is not legal, financial, or tax advice. Always consult a licensed professional before making decisions regarding foreclosure, real estate sales, or loan modifications.
        </p>
      </section>

      <section>
        <h2>2. No Guarantees</h2>
        <p>
          While we aim to offer accurate information and real solutions, The Offer Company makes no guarantee regarding outcomes — including approval of a loan modification, acceptance of a short sale, or success in stopping foreclosure. Real estate results vary based on lender decisions, market conditions, and other external factors.
        </p>
      </section>

      <section>
        <h2>3. Use of Our AI Assistant (“Hope”)</h2>
        <p>
          Our AI assistant “Hope” is designed to help homeowners explore their options, collect basic information, and assist with appointment scheduling.
        </p>
        <p>
          By using Hope, you acknowledge that you are interacting with an automated system and not a licensed professional. While we train Hope to provide helpful, accurate responses, AI-generated content may occasionally be incorrect, outdated, or incomplete.
        </p>
        <ul>
          <li>Hope is not a substitute for personalized legal, financial, or real estate advice.</li>
          <li>Do not submit sensitive personal, legal, or financial details through the AI assistant.</li>
          <li>All conversations may be stored for quality assurance, support, and training purposes.</li>
        </ul>
        <p>
          A licensed human team member may follow up with you based on your interaction. Always verify critical information with a licensed representative before making decisions.
        </p>
      </section>

      <section>
        <h2>4. Communications Consent</h2>
        <p>
          By submitting your contact details on our site or interacting with Hope, you consent to receive phone calls, emails, SMS messages, or voicemails related to your inquiry. You can opt out at any time by emailing <a href="mailto:support@theofferco.com">support@theofferco.com</a>.
        </p>
      </section>

      <section>
        <h2>5. Acceptable Use</h2>
        <p>Users may not:</p>
        <ul>
          <li>Submit false or misleading information</li>
          <li>Use our Services for fraudulent, illegal, or abusive purposes</li>
          <li>Attempt to access internal systems or interfere with site functionality</li>
          <li>Scrape, copy, or reproduce our content without written permission</li>
        </ul>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>
        <p>
          All content on this site — including branding, copy, design, images, AI scripts, and software — is the exclusive property of The Offer Company. You may not reproduce, modify, distribute, or use any material without prior written consent.
        </p>
      </section>

      <section>
        <h2>7. Third-Party Services</h2>
        <p>
          Our site may link to or integrate with third-party platforms such as Cal.com, Twilio, Make.com, and Retell AI. We are not responsible for their content, practices, or data handling. Use these tools at your own risk and in accordance with their respective policies.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, The Offer Company shall not be liable for any damages arising from your use of the site, services, or AI assistant — including direct, indirect, incidental, or consequential losses.
        </p>
      </section>

      <section>
        <h2>9. Changes to These Terms</h2>
        <p>
          We may update these Terms periodically. The “Effective Date” above reflects the latest version. Your continued use of our Services after changes constitutes your acceptance of the updated Terms.
        </p>
      </section>

      <section>
        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Arizona. Any disputes shall be resolved in the courts of Maricopa County.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          If you have questions about these Terms, please contact:
        </p>
        <p>
          <strong>The Offer Company</strong><br />
          Phoenix, AZ<br />
          Email: <a href="mailto:support@theofferco.com">support@theofferco.com</a><br />
          Phone: <a href="tel:6024487377">(602) 448-7377</a>
        </p>
      </section>
    </Layout>
  );
}
