
import Retell from "retell-sdk";

const client = new Retell({
  apiKey: process.env.RETELL_API_KEY,
});

export default async function handler(req, res) {
  try {
    const { access_token } = await client.call.createWebCall({
      agent_id: "agent_950e5e1078a753c71cfe3fd35e",
    });
    res.status(200).json({ accessToken: access_token });
  } catch (error) {
    console.error("Error creating web call:", error);
    res.status(500).json({ error: "Failed to create web call" });
  }
}
