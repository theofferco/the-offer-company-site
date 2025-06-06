// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en"> {/* ✅ Sets language attribute for accessibility */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
