export default function Home() {
  const foods = [
    {
      title: "Spicy Supreme Pizza",
      desc: "Loaded with spicy chicken, veggies and mozzarella cheese.",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Chicken Gyro",
      desc: "Grilled chicken, fresh veggies, garlic sauce wrapped in pita.",
      image:
        "https://images.unsplash.com/photo-1645189394192-5f6f4b1ef0f4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Buffalo Wings",
      desc: "Juicy wings tossed in our signature spicy sauce.",
      image:
        "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Signature Biryani",
      desc: "Aromatic basmati rice layered with rich spices and tender meat.",
      image:
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Beef Nihari",
      desc: "Slow-cooked traditional desi curry packed with bold authentic flavor.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Navbar */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-14 py-6">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 object-contain"
            />

            <div>
              <h1 className="text-2xl md:text-4xl font-black text-red-600 leading-none">
                SPICE & BITES HUB
              </h1>

              <p className="text-gray-300 text-sm mt-1">
                American • Mediterranean • Desi
              </p>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden md:flex gap-10 font-bold text-lg">
            <a href="#" className="hover:text-red-500">HOME</a>
            <a href="#menu" className="hover:text-red-500">MENU</a>
            <a href="#favorites" className="hover:text-red-500">FEATURES</a>
            <a href="#contact" className="hover:text-red-500">CONTACT</a>
          </div>

          {/* Button */}
          <a
            href="tel:9514546896"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold"
          >
            ORDER NOW
          </a>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-6 md:px-16 pt-20 md:pt-32 max-w-3xl">

          <h1 className="text-6xl md:text-8xl font-black text-red-600 leading-none">
            SPICE &
            <br />
            BITES HUB
          </h1>

          <p className="mt-6 text-3xl md:text-5xl italic text-white">
            Where Every Bite Tells A Story
          </p>

          <div className="mt-10">
            <a
              href="#menu"
              className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl text-xl font-bold inline-block"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section
        id="favorites"
        className="bg-black py-20 px-4 md:px-10"
      >

        <div className="text-center mb-14">
          <p className="text-red-500 font-bold tracking-[4px]">
            OUR BEST PICKS
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mt-3">
            FEATURED FAVORITES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {foods.map((food, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-500/40 hover:scale-105 transition duration-300"
            >
              <img
                src={food.image}
                alt={food.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-3xl font-black text-yellow-400 mb-4">
                  {food.title}
                </h3>

                <p className="text-gray-300">
                  {food.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-zinc-950 py-20 text-center px-6"
      >
        <h2 className="text-5xl font-black text-yellow-400 mb-10">
          Visit Us
        </h2>

        <div className="space-y-5 text-xl text-gray-300">
          <p>📍 7233 Fishers Landing Dr, Fishers, IN 46038</p>

          <p>📞 951-454-6896</p>

          <p>🕒 Monday - Sunday: 11:00 AM - 12:00 AM</p>
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        className="bg-black py-20 px-6"
      >
        <h2 className="text-center text-5xl font-black text-yellow-400 mb-14">
          FULL MENU
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
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

    </main>
  );
}