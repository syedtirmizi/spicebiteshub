export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-5">

          {/* Logo Left */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Spice Bites Hub"
              className="h-16 w-auto object-contain"
            />

            <div>
              <h1 className="text-3xl font-extrabold text-red-600">
                SPICE & BITES HUB
              </h1>

              <p className="text-sm text-gray-300">
                American • Mediterranean • Desi
              </p>
            </div>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex gap-8 text-lg font-semibold">
            <a href="#menu" className="hover:text-red-500">Menu</a>
            <a href="#favorites" className="hover:text-red-500">Favorites</a>
            <a href="#contact" className="hover:text-red-500">Contact</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 pt-24 pb-32 max-w-4xl">

          <h1 className="text-6xl md:text-8xl font-black leading-none text-red-600">
            SPICE &
            <br />
            BITES HUB
          </h1>

          <p className="mt-6 text-2xl md:text-3xl text-gray-200 italic leading-relaxed">
  Pizza • Gyro • Wings • Desi
  <br />
  All Under One Roof
  <br />
  <span className="text-yellow-400 text-xl md:text-2xl font-semibold">
    Where Every Bite Tells A Story
  </span>
</p>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            Fresh pizza, juicy wings, authentic biryani,
            sizzling gyros and bold desi flavors made fresh every day.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#menu"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-bold"
            >
              View Menu
            </a>

            <a
              href="tel:9514546896"
              className="border border-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-black"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED ITEMS */}
      <section
        id="favorites"
        className="py-20 bg-zinc-900 px-6"
      >
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-14">
          Featured Favorites
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">

          {/* Pizza */}
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1400&auto=format&fit=crop"
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

          {/* Gyro */}
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1645189394192-5f6f4b1ef0f4?q=80&w=1200&auto=format&fit=crop"
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

          {/* Biryani */}
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1200&auto=format&fit=crop"
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

          {/* Nihari */}
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
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

          {/* Wings */}
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
      <section
        id="contact"
        className="py-20 px-6 text-center"
      >
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