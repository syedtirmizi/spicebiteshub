export default function SpiceBitesHubWebsite() {
  const menuItems = [
    {
      name: "Butter Chicken Bowl",
      price: "$12.99",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Loaded Smash Burger",
      price: "$10.99",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Chicken Tikka Wrap",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Masala Fries",
      price: "$5.99",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="bg-red-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold">Spice & Bites Hub</h1>
            <p className="text-sm text-red-100">
              Desi & American Fusion Food
            </p>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">
          <h2 className="text-5xl font-extrabold mb-4">
            Fresh Flavor. <span className="text-red-500">Fast Order.</span>
          </h2>
          <p className="text-lg mb-6">
            Order your favorite meals online from Spice & Bites Hub
          </p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 px-6">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-10">
          Menu
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-2xl overflow-hidden"
            >
              <img
                src={item.image}
                className="h-48 w-full object-cover"
                alt={item.name}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-red-400 font-semibold">{item.price}</p>

                <button className="mt-3 w-full bg-red-600 py-2 rounded-xl">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 px-6 bg-zinc-950">
        <h2 className="text-4xl text-center text-red-500 font-bold mb-8">
          Place Order
        </h2>

        <form className="max-w-xl mx-auto grid gap-4">
          <input
            placeholder="Name"
            className="p-3 rounded bg-black border border-gray-700"
          />
          <input
            placeholder="Phone"
            className="p-3 rounded bg-black border border-gray-700"
          />
          <input
            placeholder="Address"
            className="p-3 rounded bg-black border border-gray-700"
          />
          <textarea
            placeholder="Your Order"
            className="p-3 rounded bg-black border border-gray-700"
            rows="4"
          ></textarea>

          <button className="bg-red-600 py-3 rounded-xl font-bold">
            Submit Order
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-red-700">
        © 2026 Spice & Bites Hub
      </footer>
    </div>
  );
}