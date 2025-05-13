export default async function handler(req, res) {
  // Check if the request is the right type
  if (req.method !== 'POST') {
    console.log("Wrong request type. Expected POST, got:", req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if the API key is set
  if (!process.env.RETELL_API_KEY) {
    console.log("RETELL_API_KEY is not set in environment variables");
    return res.status(500).json({ error: 'Server configuration error: API key missing' });
  }

  try {
    console.log("Trying to create web call with Retell...");
    console.log("Using API key:", process.env.RETELL_API_KEY);
    console.log("Agent ID:", "agent_950e5e1078a753c71cfe3fd35e");

    const response = await fetch('https://api.retellai.com/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: "agent_950e5e1078a753c71cfe3fd35e",
      }),
    });

    console.log("Response status from Retell:", response.status);
    const data = await response.json();
    console.log("Response data from Retell:", data);

    if (!response.ok) {
      throw new Error(data.message || `Retell API error: ${response.status}`);
    }

    return res.status(200).json({ access_token: data.access_token });
  } catch (error) {
    console.error("Error in create-web-call API:", error.message);
    return res.status(500).json({ error: error.message });
  }
}
