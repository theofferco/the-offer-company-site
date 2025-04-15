
import Head from 'next/head';
import Script from 'next/script';
import styles from '../styles/Home.module.css';

export default function Home() {
  async function startHopeCall() {
    try {
      const response = await fetch("/api/start-hope-call");
      const { accessToken } = await response.json();
      const { RetellWebClient } = await import("retell-client-js-sdk");
      const retellWebClient = new RetellWebClient();
      await retellWebClient.startCall({ accessToken });
    } catch (error) {
      console.error("Failed to start Hope call:", error);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>The Offer Company</title>
        <meta name="description" content="Facing Foreclosure? Meet Hope." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Facing Foreclosure? Meet Hope – Your Personal Real Estate Assistant.
        </h1>
        <p className={styles.description}>
          Talk directly with Hope to get answers, support, and personalized options—without pressure or judgment.
        </p>
        <button className={styles.button} onClick={startHopeCall}>
          🎙️ Talk to Hope Now
        </button>
        <p className={styles.smallText}>
          No typing needed—just speak naturally and Hope will guide you.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>The Offer Company</p>
        <p>4802 E Ray Rd, Phoenix, AZ 85044 • (602) 448-7377 • support@theofferco.com</p>
        <p>BR License #652927000</p>
        <p>Hope is our virtual voice assistant, here to support homeowners in distress 24/7.</p>
        <p className={styles.disclaimer}>We are not attorneys or financial advisors. This site is for informational purposes only.</p>
      </footer>
    </div>
  );
}
