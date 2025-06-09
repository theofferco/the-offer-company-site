import { useEffect } from 'react';

export default function TestPage() {
  useEffect(() => {
    // Load the ElevenLabs script once when the component mounts
    const script = document.createElement('script');
    script.src = 'https://cdn.elevenlabs.io/convai/embed.js';
    script.async = true;
    script.onload = () => {
      window.elevenlabs?.convai?.mount({
        // Replace with your actual ElevenLabs Project/Agent ID if needed
        selector: '#convai-widget',
        props: {
          agentId: 'your-agent-id', // <-- replace this
          open: true,
          position: 'bottom-right',
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ textAlign: 'center', paddingTop: '2rem' }}>Test Page</h1>
      <div id="convai-widget"></div>
    </div>
  );
}
