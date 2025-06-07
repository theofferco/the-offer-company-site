<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hope AI – Voice Only</title>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #voice-btn {
        background-color: white;
        border: none;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        cursor: pointer;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        transition: transform 0.2s ease;
      }
      #voice-btn:hover {
        transform: scale(1.05);
      }
    </style>
  </head>
  <body>
    <button id="voice-btn">🎤</button>

    <script type="module">
      import { createAgent } from 'https://cdn.jsdelivr.net/npm/@elevenlabs/convai-js@latest/+esm';

      const agent = await createAgent({
        agentId: 'agent_01jx5mbv45erw9bh6nb3zp6tcz',
        enableText: false, // disables chat
        enableVoice: true,
        autoStart: false,
      });

      document.getElementById('voice-btn').addEventListener('click', () => {
        agent.toggle(); // toggles the mic
      });
    </script>
  </body>
</html>
