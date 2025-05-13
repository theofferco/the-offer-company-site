export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
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

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to create web call');
    }

    return res.status(200).json({ access_token: data.access_token });
  } catch (error) {
    console.error("Error in create-web-call API:", error);
    return res.status(500).json({ error: error.message });
  }
}
