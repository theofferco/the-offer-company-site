<main style="font-family: Arial, sans-serif; padding: 60px 20px; background-color: #1a1a1a; color: white; min-height: 100vh; text-align: center; background-image: linear-gradient(to bottom, #1a1a1a 0%, #333333 100%);">
  <section style="max-width: 900px; margin: 0 auto; padding: 60px 20px;">
    <div style="display: flex; justify-content: center;">
      <img
        src="/hope-avatar.jpg"
        alt="Hope – AI Assistant for Arizona Foreclosure Help"
        style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 20px; object-fit: cover;"
      />
    </div>
    <h1 style="font-size: 38px; font-weight: bold; margin-bottom: 20px; line-height: 1.2;">
      Facing Foreclosure in Arizona? Hope, Our AI Real Estate Assistant, Is Here to Help
    </h1>
    <h2 style="font-size: 20px; margin-bottom: 24px; line-height: 1.6; color: #ccc;">
      Chat privately with Hope — our AI assistant trained by licensed Arizona foreclosure experts. She’ll explain your options, like stopping a trustee sale, applying for a loan mod, or selling your home — with no pressure, no fees, and no judgement.
    </h2>

    <div style="display: flex; justify-content: center; margin-bottom: 24px;">
      <button
        id="talk-to-hope-btn"
        style="background-color: #3b82f6; color: white; font-size: 18px; font-weight: 600; padding: 14px 28px; border-radius: 30px; border: none; display: inline-flex; align-items: center; justify-content: center; gap: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); animation: pulse 2s infinite; cursor: pointer;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V20H8v2h8v-2h-3v-2.08A7 7 0 0 0 19 11Z" />
        </svg>
        <span id="talk-to-hope-btn-text">Talk to Hope Now</span>
      </button>
    </div>

    <p id="error" style="color: #ff6b6b; margin-top: 16px; font-size: 14px; display: none;"></p>
  </section>

  <style>
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.9; }
      100% { transform: scale(1); opacity: 1; }
    }
  </style>

  <script>
    var talkToHopeBtn = document.getElementById("talk-to-hope-btn");
    var talkToHopeBtnLabel = document.getElementById("talk-to-hope-btn-text");
    var errorP = document.getElementById("error");

    var ws = null;
    var mediaStream = null;
    var audioContext = null;
    var scriptProcessor = null;
    var audioQueue = [];
    var isPlaying = false;

    const agentId = "agent_01jx5mbv45erw9bh6nb3zp6tcz";
    const url = `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${agentId}`;

    function setError(message) {
      errorP.textContent = message;
      errorP.style.display = "block";
    }

    function initiateMeeting() {
      talkToHopeBtn.children[0].style.display = "none";
      if (ws && ws.readyState === WebSocket.OPEN) {
        talkToHopeBtn.style.backgroundColor = "#1a9513";
        talkToHopeBtnLabel.textContent = "Disconnecting...";
        ws.close();
      } else {
        talkToHopeBtn.style.backgroundColor = "#1a9513";
        talkToHopeBtnLabel.textContent = "Connecting...";
        connectWS();
      }
    }

    function connectWS() {
      ws = new WebSocket(url);

      ws.onopen = () => {
        ws.send(JSON.stringify({ type: "conversation_initiation_client_data" }));
        startMic();
        talkToHopeBtn.children[0].style.display = "inline-flex";
        talkToHopeBtn.style.backgroundColor = "#e13211";
        talkToHopeBtnLabel.textContent = "Disconnect";
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "audio") {
          const audioBytes = atob(data.audio_event.audio_base_64);
          const arrayBuffer = new ArrayBuffer(audioBytes.length);
          const view = new Uint8Array(arrayBuffer);
          for (let i = 0; i < audioBytes.length; i++) {
            view[i] = audioBytes.charCodeAt(i);
          }
          playAudio(arrayBuffer);
        } else if (data.type === "ping") {
          setTimeout(() => {
            ws.send(JSON.stringify({ type: "pong", event_id: data.ping_event.event_id }));
          }, data.ping_event.ping_ms || 0);
        }
        // Handle other event types as needed (e.g., transcripts for logging)
      };

      ws.onclose = () => {
        stopMic();
        talkToHopeBtn.children[0].style.display = "inline-flex";
        talkToHopeBtn.style.backgroundColor = "#3b82f6";
        talkToHopeBtnLabel.textContent = "Talk to Hope Now";
        ws = null;
        errorP.style.display = "none";
      };

      ws.onerror = (err) => {
        console.error("WebSocket error:", err);
        setError("Failed to initialize Hope. Please try again later.");
        ws.close();
      };
    }

    function startMic() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        mediaStream = stream;
        audioContext = new AudioContext();
        const input = audioContext.createMediaStreamSource(stream);
        scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);
        input.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);
        scriptProcessor.onaudioprocess = (e) => {
          const inputData = e.inputBuffer.getChannelData(0);
          const buffer = new ArrayBuffer(inputData.length * 2);
          const view = new DataView(buffer);
          for (let i = 0; i < inputData.length; i++) {
            const s = Math.max(-1, Math.min(1, inputData[i]));
            view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
          }
          const base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
          if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ user_audio_chunk: base64 }));
          }
        };
      }).catch((err) => {
        console.error("Microphone error:", err);
        setError("Failed to access microphone. Please check permissions.");
        if (ws) ws.close();
      });
    }

    function stopMic() {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
      if (scriptProcessor) {
        scriptProcessor.disconnect();
      }
      if (audioContext) {
        audioContext.close();
      }
    }

    function playAudio(arrayBuffer) {
      audioQueue.push(arrayBuffer);
      if (!isPlaying) {
        playNext();
      }
    }

    function playNext() {
      if (audioQueue.length === 0) {
        isPlaying = false;
        return;
      }
      isPlaying = true;
      audioContext.decodeAudioData(audioQueue.shift(), (buffer) => {
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start(0);
        source.onended = playNext;
      }, (err) => {
        console.error("Audio decode error:", err);
        playNext();
      });
    }

    talkToHopeBtn.addEventListener("click", initiateMeeting);
  </script>
</main>
