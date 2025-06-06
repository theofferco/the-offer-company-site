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
          <ul className={styles.menu}>
            <li>
              <Link href="/"><a>Home</a></Link>
            </li>
            <li>
              <Link href="/about"><a>About</a></Link>
            </li>
            <li>
              <Link href="/why"><a>Why Us</a></Link>
            </li>
            <li>
              <Link href="/stories"><a>Real Stories</a></Link>
            </li>
            <li>
              <Link href="/faq"><a>FAQ</a></Link>
            </li>
            <li>
              <Link href="/hope"><a>Talk to Hope</a></Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <p><strong>The Offer Company</strong> — Licensed Real Estate Brokerage</p>
        <ul>
          <li>
            <Link href="/about"><a>About</a></Link>
          </li>
          <li>
            <Link href="/why"><a>Why Us</a></Link>
          </li>
          <li>
            <Link href="/stories"><a>Real Stories</a></Link>
          </li>
          <li>
            <Link href="/faq"><a>FAQ</a></Link>
          </li>
          <li>
            <Link href="/stop-foreclosure"><a>Stop Foreclosure</a></Link>
          </li>
          <li>
            <Link href="/short-sale"><a>Short Sale Help</a></Link>
          </li>
          <li>
            <Link href="/privacy"><a>Privacy Policy</a></Link>
          </li>
          <li>
            <Link href="/terms"><a>Terms of Use</a></Link>
          </li>
        </ul>
        <p>© The Offer Company – All rights reserved</p>
      </footer>
    </div>
  );
}
