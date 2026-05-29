export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="bg-black/70 p-8 rounded-2xl">
        <img
             src="/logo.png"
             alt="Spice & Bites Hub Logo"
             className="w-56 mx-auto mb-6"
            />
          <h1 className="text-6xl md:text-8xl font-extrabold text-red-400 mb-4">
            Spice & Bites Hub
          </h1>

          <p className="text-xl md:text-2xl mb-6">
              American • Mediterranean • Desi — All Under One Roof
            </p>
          

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#menu"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
            >
              View Menu
            </a>

            <a
              href="tel:9514546896"
              className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-yellow-400 mb-8">
          Welcome to Spice & Bites Hub
        </h2>

        <p className="text-xl text-gray-300 leading-9">
          Serving delicious pizzas, juicy gyros, crispy wings, signature biryani,
          wraps, desserts, and more in Fishers, Indiana. Fresh ingredients,
          bold flavors, and late-night dining all week long.
        </p>
      </section>

      {/* FEATURED ITEMS */}
      <section className="py-20 bg-zinc-900 px-6">
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-14">
          Featured Favorites
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">

          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
              alt="Pizza"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-3xl font-bold mb-3 text-yellow-400">
                Signature Pizza
              </h3>

              <p className="text-gray-300">
                Loaded with fresh toppings and melted mozzarella cheese.
              </p>
            </div>
          </div>

          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
            <img
             src="/gyro.jpg"
  alt="Chicken Gyro"
  className="h-72 w-full object-cover"
/>

            <div className="p-6">
              <h3 className="text-3xl font-bold mb-3 text-yellow-400">
                Chicken Gyro
              </h3>

              <p className="text-gray-300">
                Served with fresh lettuce, tomatoes, and white sauce.
              </p>
            </div>
          </div>
<div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=1200&auto=format&fit=crop"
    alt="Biryani"
    className="h-72 w-full object-cover"
  />

  <div className="p-6">
    <h3 className="text-3xl font-bold mb-3 text-yellow-400">
      Signature Biryani
    </h3>

    <p className="text-gray-300">
      Aromatic basmati rice layered with rich spices and tender meat.
    </p>
  </div>
</div>
<div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
  <img
  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop"
  alt="Lamb Nihari"
  className="h-72 w-full object-cover"
/>

  <div className="p-6">
    <h3 className="text-3xl font-bold mb-3 text-yellow-400">
      Lamb Nihari
    </h3>

    <p className="text-gray-300">
      Slow-cooked traditional desi curry packed with bold authentic flavor.
    </p>
  </div>
</div>
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1200&auto=format&fit=crop"
              alt="Wings"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-3xl font-bold mb-3 text-yellow-400">
                Bone-In Wings
              </h3>

              <p className="text-gray-300">
                Crispy wings tossed in your favorite flavors.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* HOURS + LOCATION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-5xl font-bold text-yellow-400 mb-10">
          Visit Us
        </h2>

        <div className="space-y-6 text-xl text-gray-300">
          <p>📍 7233 Fishers Landing Dr, Fishers, IN 46038</p>

          <p>📞 951-454-6896</p>

          <p>🕒 Monday - Sunday: 11:00 AM - 12:00 AM</p>
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        className="py-20 bg-zinc-900 text-center px-6"
      >
        <h2 className="text-5xl font-bold text-yellow-400 mb-12">
          Our Menu
        </h2>

        <div className="space-y-10 max-w-5xl mx-auto">
          <img
            src="/menu1.png"
            alt="Menu 1"
            className="rounded-3xl shadow-2xl"
          />

          <img
            src="/menu2.png"
            alt="Menu 2"
            className="rounded-3xl shadow-2xl"
          />

          <img
            src="/menu3.png"
            alt="Menu 3"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 text-center border-t border-zinc-800">
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">
          Spice & Bites Hub
        </h3>

        <p className="text-gray-400">
          Fresh Flavor • Family Friendly • Late Night Dining
        </p>
      </footer>

    </main>
  );
}