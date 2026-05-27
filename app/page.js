export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-red-700 to-black">
        <h1 className="text-6xl font-bold mb-6">
          Spice & Bites Hub
        </h1>

        <p className="text-2xl mb-8">
          Fresh Desi & American Fusion Food
        </p>

        <a
          href="#menu"
          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-xl font-bold"
        >
          View Menu
        </a>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6">
        <h2 className="text-5xl font-bold text-center text-red-500 mb-12">
          Our Menu
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">
              Chicken Biryani
            </h3>
            <p className="text-gray-300 mb-4">
              Traditional flavorful biryani rice with chicken.
            </p>
            <p className="text-red-400 text-xl font-bold">
              $14.99
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">
              Zinger Burger
            </h3>
            <p className="text-gray-300 mb-4">
              Crispy spicy chicken burger with fries.
            </p>
            <p className="text-red-400 text-xl font-bold">
              $10.99
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">
              Loaded Fries
            </h3>
            <p className="text-gray-300 mb-4">
              Fries topped with cheese and sauces.
            </p>
            <p className="text-red-400 text-xl font-bold">
              $8.99
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-950 py-20 px-6 text-center">
        <h2 className="text-5xl font-bold text-red-500 mb-10">
          Contact Us
        </h2>

        <p className="text-2xl mb-4">
          📍 7233 Fishers Landing Dr, Fishers, IN 46038
        </p>

        <p className="text-2xl mb-4">
          📞 951-454-6896
        </p>

        <p className="text-2xl mb-4">
          💬 WhatsApp: 951-454-6896 / 317-845-6574
        </p>

        <h3 className="text-3xl font-bold text-red-400 mt-10 mb-4">
          Hours of Operation
        </h3>

        <p className="text-2xl">
          Monday – Sunday: 11:00 AM – 12:00 AM
        </p>

        <div className="mt-10">
          <a
            href="https://maps.google.com/?q=7233+Fishers+Landing+Dr+Fishers+IN+46038"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-xl font-bold"
          >
            View Location
          </a>
        </div>
      </section>

    </main>
  );
}