import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';

export default function TestVoice() {
  useEffect(() => {
    (async () => {
      const { createAgent } = await import('@elevenlabs/convai-js');
      const agent = await createAgent({
        agentId: 'agent_01jx5mbv45erw9bh6nb3zp6tcz',
        enableText: false,
        enableVoice: true,
        autoStart: false,
      });

      document.getElementById('voice-btn')?.addEventListener('click', () => {
        agent.toggle();
      });
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Hope AI – Voice Only</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div
        style={{
          height: '100vh',
          backgroundColor: '#000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          id="voice-btn"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            fontSize: '2rem',
            border: 'none',
            background: '#fff',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(255,255,255,0.15)',
          }}
        >
          🎤
        </button>
      </div>
    </>
  );
}
