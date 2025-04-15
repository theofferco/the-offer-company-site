// The Offer Company Website – Built for Framer

export default function HomePage() {
  async function startHopeCall() {
    try {
      const { RetellWebClient } = await import("retell-client-js-sdk");
      const retellWebClient = new RetellWebClient();

      await retellWebClient.startCall({
        agentId: "agent_950e5e1078a753c71cfe3fd35e",
      });
    } catch (error) {
      console.error("Failed to start Hope call:", error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4">

      {/* Hero Section */}
      <section className="text-center max-w-2xl py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Facing Foreclosure? Meet Hope – Your Personal Real Estate Assistant.
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Talk directly with Hope to get answers, support, and personalized options—without pressure or judgment.
        </p>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-full shadow-lg transition"
          onClick={startHopeCall}
        >
          🎙️ Talk to Hope Now
        </button>
        <p className="text-sm mt-4 text-gray-500">
          No typing needed—just speak naturally and Hope will guide you.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t w-full text-sm text-gray-600">
        <p>The Offer Company</p>
        <p>4802 E Ray Rd, Phoenix, AZ 85044 • (602) 448-7377 • support@theofferco.com</p>
        <p>BR License #652927000</p>
        <p className="mt-2">Hope is our virtual voice assistant, here to support homeowners in distress 24/7.</p>
        <p className="text-xs mt-1">We are not attorneys or financial advisors. This site is for informational purposes only.</p>
      </footer>
    </main>
  );
}
