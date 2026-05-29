export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[700px] overflow-hidden">

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

  <div>
      <p className="text-sm text-gray-300 mt-1">
      American • Mediterranean • Desi
      <br />
      All Under One Roof
    </p>
  </div>

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
        <div className="relative z-10 px-8 md:px-16 pt-12 pb-32 max-w-3xl">

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

    <p className="text-gray-400 mt-4 text-lg">
      Click any item to jump directly to its menu section
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">

    {/* Pizza */}
    <a
      href="#american-menu"
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block"
    >
      <img
        src="signature pizza.jpg"
        alt="Pizza"
        className="h-64 w-full object-cover"
      />

      <div className="p-5 text-center">
        <h3 className="text-3xl font-bold text-yellow-400">
          Spicy Supreme Pizza
        </h3>

        <p className="text-gray-300 mt-3">
          Loaded with spicy chicken, veggies and mozzarella cheese.
        </p>

        <p className="mt-5 text-red-500 font-bold text-lg">
          View American Menu →
        </p>
      </div>
    </a>

    {/* Gyro */}
    <a
      href="#mediterranean-menu"
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block"
    >
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

        <p className="mt-5 text-red-500 font-bold text-lg">
          View Mediterranean Menu →
        </p>
      </div>
    </a>

    {/* Wings */}
    <a
      href="#american-menu"
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block"
    >
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

        <p className="mt-5 text-red-500 font-bold text-lg">
          View American Menu →
        </p>
      </div>
    </a>

    {/* Biryani */}
    <a
      href="#desi-menu"
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block"
    >
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

        <p className="mt-5 text-red-500 font-bold text-lg">
          View Desi Menu →
        </p>
      </div>
    </a>

    {/* Nihari */}
    <a
      href="#desi-menu"
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block"
    >
      <img
        src="nihari.jpg"
        alt="Lamb Nihari"
        className="h-64 w-full object-cover"
      />

      <div className="p-5 text-center">
        <h3 className="text-3xl font-bold text-yellow-400">
          Lamb Nihari
        </h3>

        <p className="text-gray-300 mt-3">
          Slow-cooked traditional desi curry packed with bold flavor.
        </p>

        <p className="mt-5 text-red-500 font-bold text-lg">
          View Desi Menu →
        </p>
      </div>
    </a>

  </div>
</section>

      {/* MENU */}
      {/* MENU SECTION */}
<section
  id="menu"
  className="bg-zinc-950 py-20 px-6"
>

  <h2 className="text-6xl font-black text-center text-white uppercase mb-14">
    Our Menu
  </h2>

  {/* MENU BUTTONS */}
  <div className="flex flex-wrap justify-center gap-6 mb-16">

    <a
      href="#american-menu"
      className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-xl font-bold transition"
    >
      American Menu
    </a>

    <a
      href="#mediterranean-menu"
      className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl text-xl font-bold transition"
    >
      Mediterranean Menu
    </a>

    <a
      href="#desi-menu"
      className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-xl font-bold transition"
    >
      Desi Menu
    </a>

  </div>

  {/* AMERICAN MENU */}
  <div
    id="american-menu"
    className="mb-24"
  >

    <h3 className="text-5xl font-black text-red-500 text-center mb-10 uppercase">
      American Menu
    </h3>

    <div className="max-w-6xl mx-auto">
      <img
        src="/menu1.png"
        alt="American Menu"
        className="rounded-3xl shadow-2xl w-full"
      />
    </div>

  </div>

  {/* MEDITERRANEAN MENU */}
  <div
    id="mediterranean-menu"
    className="mb-24"
  >

    <h3 className="text-5xl font-black text-yellow-400 text-center mb-10 uppercase">
      Mediterranean Menu
    </h3>

    <div className="max-w-6xl mx-auto">
      <img
       src="gyro.jpg"
        alt="Mediterranean Menu"
        className="rounded-3xl shadow-2xl w-full"
      />
    </div>

  </div>

  {/* DESI MENU */}
  <div id="desi-menu">

    <h3 className="text-5xl font-black text-green-500 text-center mb-10 uppercase">
      Desi Menu
    </h3>

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

      {/* Biryani */}
      <div className="bg-black rounded-3xl overflow-hidden border border-zinc-800">
        <img
          src="biryani.jpg"
          alt="Biryani"
          className="h-72 w-full object-cover"
        />

        <div className="p-6">
          <h4 className="text-3xl font-bold text-yellow-400 mb-3">
            Signature Biryani
          </h4>

          <p className="text-gray-300 text-lg">
            Rich aromatic basmati rice with authentic desi spices.
          </p>

          <p className="text-red-500 text-2xl font-bold mt-4">
            $15.99
          </p>
        </div>
      </div>

      {/* Nihari */}
      <div className="bg-black rounded-3xl overflow-hidden border border-zinc-800">
        <img
          src="nihari.jpg"
          alt="Nihari"
          className="h-72 w-full object-cover"
        />

        <div className="p-6">
          <h4 className="text-3xl font-bold text-yellow-400 mb-3">
            Lamb Nihari
          </h4>

          <p className="text-gray-300 text-lg">
            Slow-cooked traditional desi curry packed with bold flavor.
          </p>

          <p className="text-red-500 text-2xl font-bold mt-4">
            $15.99
          </p>
        </div>
      </div>

    </div>

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
