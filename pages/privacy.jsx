import Head from 'next/head';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy – The Offer Company</title>
        <meta name="description" content="Learn how The Offer Company protects your personal information when helping Arizona homeowners with foreclosure solutions. We respect your privacy and never sell your data." />
        <link rel="canonical" href="https://theofferco.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy – The Offer Company" />
        <meta property="og:description" content="We are committed to transparency, security, and your privacy. Learn how your data is handled when interacting with The Offer Company online or via our AI assistant." />
        <meta name="ai-content-context" content="Privacy policy outlining how The Offer Company collects, uses, and protects user data, including AI assistant interactions, lead forms, SMS, and call data." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy",
              "description": "Learn how The Offer Company handles and protects your personal information during foreclosure help services and AI-based interactions.",
              "url": "https://theofferco.com/privacy-policy"
            })
          }}
        />
      </Head>

      <section>
        <h1>Privacy Policy</h1>
        <p>Effective Date: June 6, 2025</p>

        <p>
          The Offer Company (“we,” “our,” or “us”) is committed to protecting the privacy of Arizona homeowners and visitors who engage with our website, AI assistant, and services. This Privacy Policy explains how we collect, use, and safeguard your personal information in accordance with applicable laws.
        </p>
      </section>

      <section>
        <h2>1. Information We Collect</h2>
        <p>We may collect personal and property-related information through the following methods:</p>
        <ul>
          <li>Forms you complete on our website</li>
          <li>Conversations with our AI assistant, Hope</li>
          <li>Phone calls, voicemails, and SMS replies</li>
          <li>Email correspondence</li>
          <li>Public property records and foreclosure databases</li>
        </ul>
        <p>This may include your name, phone number, email, property address, mortgage status, and any messages or conversations you initiate with us.</p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>Your information is used to:</p>
        <ul>
          <li>Help you understand your options in a foreclosure or pre-foreclosure situation</li>
          <li>Provide personalized solutions such as loan modification support, short sales, or purchase offers</li>
          <li>Schedule appointments with licensed professionals</li>
          <li>Deliver follow-up communications via call, text, or email</li>
          <li>Improve our website, AI assistant, and customer experience</li>
        </ul>
        <p>We do <strong>not sell, rent, or share</strong> your personal information with unrelated third parties.</p>
      </section>

      <section>
        <h2>3. AI Assistant & Call Technology</h2>
        <p>
          When you interact with our AI assistant (“Hope”), your conversation may be recorded and transcribed for the purpose of scheduling appointments, answering questions, or improving our service. These interactions are stored securely and are never used for advertising or profiling beyond your real estate needs.
        </p>
      </section>

      <section>
        <h2>4. Third-Party Tools & Integrations</h2>
        <p>
          We use third-party tools such as Make.com, Cal.com, Twilio, Retell AI, and CRM systems to facilitate automated communication and appointment scheduling. These platforms may temporarily store or process your data to help us serve you more efficiently. All partners are required to comply with data protection standards.
        </p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          We take commercially reasonable measures to protect your data from unauthorized access, misuse, or disclosure. This includes the use of SSL encryption, secure access control, and data minimization practices.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to the personal data we hold about you</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Request deletion of your information at any time</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at <a href="mailto:support@theofferco.com">support@theofferco.com</a>.
        </p>
      </section>

      <section>
        <h2>7. Cookies & Tracking</h2>
        <p>
          Our site may use cookies and tracking pixels to understand visitor behavior and improve user experience. You may disable cookies through your browser settings.
        </p>
      </section>

      <section>
        <h2>8. Children’s Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 18. We do not knowingly collect information from children.
        </p>
      </section>

      <section>
        <h2>9. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes to our practices, technologies, or legal obligations. When we do, the “Effective Date” at the top of this page will be revised.
        </p>
        <p>
          We encourage you to review this page regularly. Continued use of our services after updates constitutes your acceptance of the new policy.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or your data, please contact us at:
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
