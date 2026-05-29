export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
            "URL('https://images.pexels.com/photos/36879454/pexels-photo-36879454.jpeg')"              
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* NAVBAR */}
        <nav className="relative z-20 flex items-center justify-between px-8 py-6">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Spice & Bites Hub"
              className="h-20 w-auto"
            />
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex items-center gap-12 text-lg font-bold">

            <a
              href="#"
              className="text-red-600 border-b-2 border-red-600 pb-1"
            >
              HOME
            </a>

            <a href="#menu" className="hover:text-red-500 transition">
              MENU
            </a>

            <a href="#story" className="hover:text-red-500 transition">
              STORY
            </a>

            <a href="#gallery" className="hover:text-red-500 transition">
              GALLERY
            </a>

            <a href="#contact" className="hover:text-red-500 transition">
              CONTACT
            </a>

            <a
              href="tel:9514546896"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl transition"
            >
              ORDER NOW
            </a>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 px-8 md:px-16 pt-24 pb-32 max-w-3xl">

          <h1 className="text-7xl md:text-9xl font-black leading-none text-red-600 uppercase">
            Spice &
            <br />
            Bites Hub
          </h1>

          <p
            className="mt-6 text-4xl md:text-5xl text-white italic"
            style={{
              fontFamily: "'Brush Script MT', cursive",
            }}
          >
            Where Every Bite Tells A Story
          </p>

          <p className="mt-8 text-xl text-gray-300 leading-relaxed">
            Pizza • Gyro • Wings • Biryani • Nihari
            <br />
            American • Mediterranean • Desi
            <br />
            All Under One Roof
          </p>

          <div className="mt-10">
            <a
              href="tel:9514546896"
              className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-xl text-xl font-bold transition inline-block"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED FAVORITES */}
      <section
        id="favorites"
        className="bg-black py-20 px-6"
      >

        <div className="text-center mb-14">
          <p className="text-red-600 uppercase tracking-[5px] font-bold">
            Our Best Picks
          </p>

          <h2 className="text-6xl font-black text-white mt-3 uppercase">
            Featured Favorites
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">

          {/* Pizza */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500">
            <img
              src="signature pizza.jpg"
              alt="Pizza"
              className="h-64 w-full object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">
                Signature Pizza
              </h3>

              <p className="text-gray-300 mt-3">
                Loaded with pepperoni, sausage, mushrooms, green peppers, black olive and mozzarella cheese.
              </p>
            </div>
          </div>

          {/* Gyro */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500">
            <img
              src="gyro.jpg"
              alt="Chicken Gyro"
              className="h-64 w-full object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">
                Chicken Gyro
              </h3>

              <p className="text-gray-300 mt-3">
                Grilled chicken, fresh veggies, garlic sauce wrapped in pita.
              </p>
            </div>
          </div>

          {/* Wings */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500">
            <img
              src="buffalo wings.jpg"
              alt="Buffalo Wings"
              className="h-64 w-full object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">
                Buffalo Wings
              </h3>

              <p className="text-gray-300 mt-3">
                Juicy wings tossed in our signature spicy sauce.
              </p>
            </div>
          </div>

          {/* Biryani */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500">
            <img
              src="biryani.jpg"
              alt="Biryani"
              className="h-64 w-full object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">
                Signature Biryani
              </h3>

              <p className="text-gray-300 mt-3">
                Aromatic basmati rice layered with rich spices and tender meat.
              </p>
            </div>
          </div>

          {/* Nihari */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500">
            <img
              src="nihari.jpg"
              alt="Beef Nihari"
              className="h-64 w-full object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">
                Lamb Nihari
              </h3>

              <p className="text-gray-300 mt-3">
                Slow-cooked traditional desi curry packed with bold flavor.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        className="bg-zinc-950 py-20 px-6"
      >

        <h2 className="text-6xl font-black text-center text-white uppercase mb-16">
          Our Menu
        </h2>

        <div className="space-y-12 max-w-6xl mx-auto">

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

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-black py-20 px-6 text-center"
      >

        <h2 className="text-5xl font-black text-red-600 uppercase mb-10">
          Visit Us
        </h2>

        <div className="space-y-5 text-xl text-gray-300">

          <p>
            📍 7233 Fishers Landing Dr, Fishers, IN 46038
          </p>

          <p>
            📞 951-454-6896
          </p>

          <p>
            🕒 Monday - Sunday: 11:00 AM - 12:00 AM
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-800 py-10 text-center">

        <h3 className="text-3xl font-bold text-red-600">
          Spice & Bites Hub
        </h3>

        <p className="text-gray-500 mt-3">
          Fresh Flavor • Family Friendly • Late Night Dining
        </p>

      </footer>

    </main>
  );
}
