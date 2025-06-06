// components/Layout.jsx
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <input type="checkbox" id="menuToggle" className={styles.menuToggle} />
          <label htmlFor="menuToggle" className={styles.hamburger}>☰</label>
          <div className={styles.menuOverlay}>
            <ul className={styles.menu}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/why">Why Us</Link></li>
              <li><Link href="/stories">Real Stories</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/hope">Talk to Hope</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3>The Offer Company</h3>
            <p>A licensed Arizona real estate brokerage specializing in pre-foreclosure and distressed property solutions.</p>
          </div>

          <div className={styles.footerColumn}>
            <h4>Contact Us</h4>
            <p><strong>Address:</strong><br />The Offer Company<br />4802 E. Ray Road<br />Phoenix, AZ 85044</p>
            <p><strong>Phone:</strong><br />602-448-7377</p>
            <p><strong>Email:</strong><br />support@theofferco.com</p>
          </div>

          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About The Offer Company</Link></li>
              <li><Link href="/why">Why Homeowners Trust Us</Link></li>
              <li><Link href="/stories">Real Stories</Link></li>
              <li><Link href="/faq">Frequently Asked Questions</Link></li>
              <li><Link href="/hope">Back to Hope (AI Assistant)</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><a href="https://x.com/theofferco" target="_blank" rel="noopener noreferrer">𝕏 @theofferco</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          &copy; The Offer Company – All rights reserved
        </div>
      </footer>
    </div>
  );
}
