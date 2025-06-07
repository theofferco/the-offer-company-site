import Head from 'next/head';
import Script from 'next/script';

export default function HopeTest() {
  return (
    <>
      <Head>
        <title>Test Page – Hope AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={{
        margin: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
      }}>
        <div id="hope-wrapper" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}>
          <elevenlabs-convai agent-id="agent_01jx5mbv45erw9bh6nb3zp6tcz" />
        </div>
      </div>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        async
        type="text/javascript"
      />
    </>
  );
}
