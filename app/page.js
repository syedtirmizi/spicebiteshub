export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/36879454/pexels-photo-36879454.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* NAVBAR */}
        <nav className="relative z-20 flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Spice & Bites Hub" className="h-20 w-auto" />
            <div>
              <p className="text-sm text-gray-300 mt-1">
                American • Mediterranean • Desi<br />All Under One Roof
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-12 text-lg font-bold">
            <a href="#" className="text-red-600 border-b-2 border-red-600 pb-1">HOME</a>
            <a href="#starters" className="hover:text-red-500 transition">
  STARTERS
</a>

<a href="#salads" className="hover:text-red-500 transition">
  SALADS
</a>

<a href="#beverages" className="hover:text-red-500 transition">
  BEVERAGES
</a>
<a href="#desserts" className="hover:text-red-500 transition">
  DESSERTS
</a>
            <a href="#menu" className="hover:text-red-500 transition">MENU</a>
            <a href="#story" className="hover:text-red-500 transition">STORY</a>
            <a href="#gallery" className="hover:text-red-500 transition">GALLERY</a>
            <a href="#contact" className="hover:text-red-500 transition">CONTACT</a>
            <a href="tel:9514546896" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl transition">ORDER NOW</a>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 px-8 md:px-16 pt-12 pb-32 max-w-3xl">
          <h1 className="text-7xl md:text-9xl font-black leading-none text-red-600 uppercase">
            Spice &amp;<br />Bites Hub
          </h1>
          <p className="mt-6 text-4xl md:text-5xl text-white italic" style={{ fontFamily: "'Brush Script MT', cursive" }}>
            Where Every Bite Tells A Story
          </p>
          <p className="mt-8 text-xl text-gray-300 leading-relaxed">Pizza • Gyro • Wings • Biryani • Nihari</p>
          <div className="mt-10">
            <a href="tel:9514546896" className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-xl text-xl font-bold transition inline-block">
              ORDER NOW
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED FAVORITES */}
      <section id="favorites" className="bg-black py-20 px-6">
        <div className="text-center mb-14">
          <p className="text-red-600 uppercase tracking-[5px] font-bold">Our Best Picks</p>
          <h2 className="text-6xl font-black text-white mt-3 uppercase">Featured Favorites</h2>
          <p className="text-gray-400 mt-4 text-lg">Click any item to jump directly to its menu section</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          <a href="#american-menu" className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
            <img src="signature pizza.jpg" alt="Pizza" className="h-64 w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">Signature Pizza</h3>
              <p className="text-gray-300 mt-3">Loaded with spicy chicken, veggies and mozzarella cheese.</p>
              <p className="mt-5 text-red-500 font-bold text-lg">View American Menu →</p>
            </div>
          </a>
          <a href="#mediterranean-menu" className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
            <img src="gyro.jpg" alt="Chicken Gyro" className="h-64 w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">Chicken Gyro</h3>
              <p className="text-gray-300 mt-3">Grilled chicken, fresh veggies, garlic sauce wrapped in pita.</p>
              <p className="mt-5 text-red-500 font-bold text-lg">View Mediterranean Menu →</p>
            </div>
          </a>
          <a href="#american-menu" className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
            <img src="buffalo wings.jpg" alt="Buffalo Wings" className="h-64 w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">Buffalo Wings</h3>
              <p className="text-gray-300 mt-3">Juicy wings tossed in our signature spicy sauce.</p>
              <p className="mt-5 text-red-500 font-bold text-lg">View American Menu →</p>
            </div>
          </a>
          <a href="#desi-menu" className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
            <img src="biryani.jpg" alt="Biryani" className="h-64 w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">Signature Biryani</h3>
              <p className="text-gray-300 mt-3">Aromatic basmati rice layered with rich spices and tender meat.</p>
              <p className="mt-5 text-red-500 font-bold text-lg">View Desi Menu →</p>
            </div>
          </a>
          <a href="#desi-menu" className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
            <img src="nihari.jpg" alt="Lamb Nihari" className="h-64 w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">Lamb Nihari</h3>
              <p className="text-gray-300 mt-3">Slow-cooked traditional desi curry packed with bold flavor.</p>
              <p className="mt-5 text-red-500 font-bold text-lg">View Desi Menu →</p>
            </div>
          </a>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="bg-zinc-950 py-20 px-6">
        <h2 className="text-6xl font-black text-center text-white uppercase mb-14">Our Menu</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href="#american-menu" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-xl font-bold transition">American Menu</a>
          <a href="#mediterranean-menu" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl text-xl font-bold transition">Mediterranean Menu</a>
          <a href="#desi-menu" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-xl font-bold transition">Desi Menu</a>
        </div>

        {/* ══════════════════════════════════════
            AMERICAN MENU — START
        ══════════════════════════════════════ */}
        <div id="american-menu" className="mb-24">
          <h3 className="text-5xl font-black text-red-500 text-center mb-16 uppercase">American Menu</h3>

          {/* ── PIZZA ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-10">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <h4 className="text-4xl font-black text-white uppercase tracking-widest">🍕 Pizza</h4>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="cheese pizza.jpg" alt="Cheese Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Cheese Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$11.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce and a generous layer of melted mozzarella cheese. Simple, cheesy and always satisfying.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="pep pizza.jpg" alt="Pepperoni Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Pepperoni Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$13.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with pepperoni layer of melted mozzarella cheese.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="signature pizza.jpg" alt="Signature Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Signature Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$16.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with pepperoni, Italian sausage, onion, fresh mushrooms, green peppers &amp; black olive layer of melted mozzarella cheese.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1200&auto=format&fit=crop" alt="Pepperoni and Sausage Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Pepperoni &amp; Sausage</h3>
                    <span className="text-2xl font-bold text-red-500">$15.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with double sausage &amp; double pepperoni layer of melted mozzarella cheese.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="buffalo chicken pizza.jpg" alt="Buffalo Chicken Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Buffalo Chicken Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$15.99</span>
                  </div>
                  <p className="text-gray-300">Hot sauce, Bermuda onions &amp; chunks of fresh chicken layer of melted mozzarella cheese.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://www.thursdaynightpizza.com/wp-content/uploads/2020/11/cut-overhead_STAMP.png" alt="Italian Sausage Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Italian Sausage Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$14.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with seasoned Italian sausage, fresh mushroom &amp; green pepper layer of melted mozzarella cheese.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="meat lovers.jpg" alt="Meat Lovers Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Meat Lovers Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$17.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with sausage, pepperoni, Canadian bacon layer of melted mozzarella cheese.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="vegi pizza.jpg" alt="Vegetarian Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Vegetarian Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$13.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with onion, fresh mushrooms, green peppers &amp; spinach layer of melted mozzarella cheese.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://flavorry.com/wp-content/uploads/2025/09/teamgreen1001_httpss.mj_.run9zT8Sikxhn8_An_ultra-close-up_AND__ecff3b71-758f-4b56-a1ea-7797418d9935_1.png" alt="Chicken Tikka Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Chicken Tikka Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$15.99</span>
                  </div>
                  <p className="text-gray-300">Homemade garlic sauce with marinated chicken chunks layer of melted mozzarella cheese.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="lamb pizza.jpg" alt="Lamb Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Lamb Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$16.99</span>
                  </div>
                  <p className="text-gray-300">Homemade garlic sauce with lamb layer of melted mozzarella cheese.</p>
                </div>
              </div>

            </div>
          </div>
          {/* END PIZZA */}

          {/* ── CALZONE WRAP ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-4">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <h4 className="text-4xl font-black text-white uppercase tracking-widest">🫓 Calzone Wrap</h4>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            <p className="text-center text-gray-400 text-lg italic mb-10 max-w-3xl mx-auto">
              Delicious calzone wrapped in our butter crust with melted mozzarella cheese and signature pizza sauce
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="calzon1.jpg" alt="Signature Wrap" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Signature Wrap</h3>
                    <span className="text-2xl font-bold text-red-500">$13.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with pepperoni, Italian sausage, onion, fresh mushrooms, green peppers &amp; black olive layer of melted mozzarella cheese.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="calzone.jpg" alt="Cheese Wrap" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Cheese Wrap</h3>
                    <span className="text-2xl font-bold text-red-500">$11.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce &amp; layer of melted mozzarella cheese.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="calzone.jpg" alt="Italian Sausage Wrap" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Italian Sausage Wrap</h3>
                    <span className="text-2xl font-bold text-red-500">$13.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with sausage, fresh mushroom &amp; green pepper layer of melted mozzarella cheese.</p>
                </div>
              </div>

            </div>
          </div>
          {/* END CALZONE WRAP */}

          {/* ── BONE-IN WINGS ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-4">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <h4 className="text-4xl font-black text-white uppercase tracking-widest">🍗 Bone-in Wings</h4>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            <p className="text-center text-gray-400 text-lg italic mb-10 max-w-3xl mx-auto">
              Made fresh daily — never frozen
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                <img src="buffalo wings.jpg" alt="Bone-in Wings" className="h-72 w-full object-cover" />
                <div className="p-8">
                  <div className="grid grid-cols-1 gap-4">

                    <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                      <div>
                        <span className="text-2xl font-bold text-yellow-400">6 pcs</span>
                        <span className="text-gray-400 ml-3">1 Flavor &amp; 1 Dip</span>
                      </div>
                      <span className="text-2xl font-bold text-red-500">$7.99</span>
                    </div>

                    <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                      <div>
                        <span className="text-2xl font-bold text-yellow-400">10 pcs</span>
                        <span className="text-gray-400 ml-3">1 Flavor &amp; 1 Dip</span>
                      </div>
                      <span className="text-2xl font-bold text-red-500">$10.99</span>
                    </div>

                    <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                      <div>
                        <span className="text-2xl font-bold text-yellow-400">15 pcs</span>
                        <span className="text-gray-400 ml-3">2 Flavors &amp; 2 Dips</span>
                      </div>
                      <span className="text-2xl font-bold text-red-500">$15.99</span>
                    </div>

                    <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                      <div>
                        <span className="text-2xl font-bold text-yellow-400">20 pcs</span>
                        <span className="text-gray-400 ml-3">2 Flavors &amp; 2 Dips</span>
                      </div>
                      <span className="text-2xl font-bold text-red-500">$20.99</span>
                    </div>

                    <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                      <div>
                        <span className="text-2xl font-bold text-yellow-400">35 pcs</span>
                        <span className="text-gray-400 ml-3">3 Flavors &amp; 3 Dips</span>
                      </div>
                      <span className="text-2xl font-bold text-red-500">$35.99</span>
                    </div>

                    <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                      <div>
                        <span className="text-2xl font-bold text-yellow-400">50 pcs</span>
                        <span className="text-gray-400 ml-3">5 Flavors &amp; 5 Dips</span>
                      </div>
                      <span className="text-2xl font-bold text-red-500">$50.99</span>
                    </div>

                    <div className="flex justify-between items-center py-4">
                      <div>
                        <span className="text-2xl font-bold text-yellow-400">75 pcs</span>
                        <span className="text-gray-400 ml-3">7 Flavors &amp; 7 Dips</span>
                      </div>
                      <span className="text-2xl font-bold text-red-500">$75.99</span>
                    </div>

                  </div>

                  {/* FLAVORS & DIPS */}
                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-800 rounded-2xl p-6">
                      <h5 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">
                        🌶️ Choice of Flavors
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {["Spicy", "Mild", "Garlic", "Spicy Garlic", "Teriyaki", "Lemon Pepper", "Suicide"].map((flavor) => (
                          <span key={flavor} className="bg-zinc-700 text-yellow-400 font-bold px-4 py-2 rounded-full text-sm">
                            {flavor}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-zinc-800 rounded-2xl p-6">
                      <h5 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">
                        🥣 Dipping Sauce
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {["Ranch", "Blue Cheese"].map((sauce) => (
                          <span key={sauce} className="bg-zinc-700 text-yellow-400 font-bold px-4 py-2 rounded-full text-sm">
                            {sauce}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* END BONE-IN WINGS */}

          {/* ── PASTA ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-10">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <h4 className="text-4xl font-black text-white uppercase tracking-widest">🍝 Pasta</h4>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1200&auto=format&fit=crop" alt="Spaghetti Meat Sauce" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Spaghetti Meat Sauce</h3>
                    <span className="text-2xl font-bold text-red-500">$12.99</span>
                  </div>
                  <p className="text-gray-300">Al dente spaghetti tossed in a rich slow-simmered meat sauce with herbs and parmesan.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop" alt="Chicken Alfredo" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Chicken Alfredo</h3>
                    <span className="text-2xl font-bold text-red-500">$13.99</span>
                  </div>
                  <p className="text-gray-300">Grilled chicken over fettuccine in a creamy parmesan alfredo sauce, topped with fresh parsley.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1200&auto=format&fit=crop" alt="Penne Arrabbiata" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Penne Arrabbiata</h3>
                    <span className="text-2xl font-bold text-red-500">$11.99</span>
                  </div>
                  <p className="text-gray-300">Penne pasta in a bold spicy tomato sauce with garlic, olive oil and fresh basil.</p>
                </div>
              </div>

            </div>
          </div>
          {/* END PASTA */}

          {/* ── MAC & CHEESE ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-10">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <h4 className="text-4xl font-black text-white uppercase tracking-widest">🧀 Mac &amp; Cheese</h4>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1200&auto=format&fit=crop" alt="Classic Mac and Cheese" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Classic Mac &amp; Cheese</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Creamy elbow macaroni smothered in our signature four-cheese sauce, baked golden on top.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1548340748-6811e9f45f0a?q=80&w=1200&auto=format&fit=crop" alt="Buffalo Chicken Mac" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Buffalo Chicken Mac</h3>
                    <span className="text-2xl font-bold text-red-500">$12.99</span>
                  </div>
                  <p className="text-gray-300">Classic mac and cheese loaded with spicy buffalo chicken, drizzled with ranch and hot sauce.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1200&auto=format&fit=crop" alt="BBQ Brisket Mac" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">BBQ Brisket Mac</h3>
                    <span className="text-2xl font-bold text-red-500">$13.99</span>
                  </div>
                  <p className="text-gray-300">Creamy mac and cheese topped with smoky BBQ beef brisket and crispy fried onions.</p>
                </div>
              </div>

            </div>
          </div>
          {/* END MAC & CHEESE */}

        </div>
        {/* ══════════════════════════════════════
            AMERICAN MENU — END
        ══════════════════════════════════════ */}

        {/* ══════════════════════════════════════
            MEDITERRANEAN MENU
        ══════════════════════════════════════ */}
        <div id="mediterranean-menu" className="mb-24">
          <h3 className="text-5xl font-black text-yellow-400 text-center mb-10 uppercase">Mediterranean Menu</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="chicken over rice.jpg" alt="Chicken Over Rice" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Chicken Over Rice</h3>
                  <span className="text-2xl font-bold text-red-500">$12.99</span>
                </div>
                <p className="text-gray-300">Seasoned grilled chicken served over fragrant basmati rice with white sauce and hot sauce.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1200&auto=format&fit=crop" alt="Lamb Over Rice" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Lamb Over Rice</h3>
                  <span className="text-2xl font-bold text-red-500">$14.99</span>
                </div>
                <p className="text-gray-300">Tender spiced lamb over fluffy basmati rice with creamy white sauce and house hot sauce.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="gyro.jpg" alt="Chicken Gyro" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Chicken Gyro</h3>
                  <span className="text-2xl font-bold text-red-500">$11.99</span>
                </div>
                <p className="text-gray-300">Grilled chicken, fresh veggies and garlic sauce wrapped in warm pita bread.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="gyro.jpg" alt="Lamb Gyro" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Lamb Gyro</h3>
                  <span className="text-2xl font-bold text-red-500">$13.99</span>
                </div>
                <p className="text-gray-300">Slow-roasted seasoned lamb with fresh tomatoes, onions and tzatziki in warm pita.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="https://i.cdn.newsbytesapp.com/images/l82920240716142709.jpeg" alt="Falafel Gyro" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Falafel Gyro</h3>
                  <span className="text-2xl font-bold text-red-500">$10.99</span>
                </div>
                <p className="text-gray-300">Crispy golden falafel with fresh veggies, hummus and tahini wrapped in soft pita.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="c philly.jpg" alt="Chicken Philly" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Chicken Philly</h3>
                  <span className="text-2xl font-bold text-red-500">$12.99</span>
                </div>
                <p className="text-gray-300">Grilled chicken with sauteed peppers, onions and melted cheese on a toasted hoagie roll.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="philly.jpg" alt="Philly Cheesesteak" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Philly Cheesesteak</h3>
                  <span className="text-2xl font-bold text-red-500">$13.99</span>
                </div>
                <p className="text-gray-300">Thinly sliced ribeye steak with sauteed onions, peppers and gooey melted cheese on a hoagie roll.</p>
              </div>
            </div>

          </div>
        </div>
        {/* END MEDITERRANEAN MENU */}

        {/* ══════════════════════════════════════
            DESI MENU
        ══════════════════════════════════════ */}
        <div id="desi-menu" className="py-20 bg-black text-white px-6">
          <h2 className="text-5xl font-bold text-center text-red-600 mb-14">Desi Menu</h2>
          <p className="text-center text-gray-300 text-xl mb-16 italic">Where Every Bite Tells A Story</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="korma.jpg" alt="Korma" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-3xl font-bold text-yellow-400">Chicken Korma</h3>
                  <span className="text-2xl font-bold text-red-500">$13.99</span>
                </div>
                <p className="text-gray-300">Creamy traditional curry cooked with aromatic spices and rich flavor.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="karahi.jpg" alt="Chicken Karahi" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-3xl font-bold text-yellow-400">Chicken Karahi</h3>
                  <span className="text-2xl font-bold text-red-500">$14.99</span>
                </div>
                <p className="text-gray-300">Fresh tomato-based karahi cooked with ginger, garlic and desi spices.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="chana daal.jpg" alt="Daal Chana" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-3xl font-bold text-yellow-400">Daal Chana</h3>
                  <span className="text-2xl font-bold text-red-500">$10.99</span>
                </div>
                <p className="text-gray-300">Slow-cooked chana daal seasoned with traditional Pakistani spices.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="malai boti.jpg" alt="Chicken Malai Boti" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-3xl font-bold text-yellow-400">Chicken Malai Boti</h3>
                  <span className="text-2xl font-bold text-red-500">$15.99</span>
                </div>
                <p className="text-gray-300">Creamy grilled chicken cubes marinated with cheese and mild spices.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="butter chicken.jpg" alt="Butter Chicken" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-3xl font-bold text-yellow-400">Butter Chicken</h3>
                  <span className="text-2xl font-bold text-red-500">$14.99</span>
                </div>
                <p className="text-gray-300">Tender chicken simmered in rich buttery tomato cream sauce.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="tikka.jpg" alt="Chicken Tikka" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-3xl font-bold text-yellow-400">Chicken Tikka</h3>
                  <span className="text-2xl font-bold text-red-500">$13.99</span>
                </div>
                <p className="text-gray-300">Charcoal grilled tikka marinated in yogurt and traditional spices.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="nihari.jpg" alt="Lamb Nihari" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-3xl font-bold text-yellow-400">Lamb Nihari</h3>
                  <span className="text-2xl font-bold text-red-500">$16.99</span>
                </div>
                <p className="text-gray-300">Slow-cooked traditional desi curry packed with bold authentic flavor.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src="biryani.jpg" alt="Signature Biryani" className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-3xl font-bold text-yellow-400">Signature Biryani</h3>
                  <span className="text-2xl font-bold text-red-500">$15.99</span>
                </div>
                <p className="text-gray-300">Aromatic basmati rice layered with rich spices and tender meat.</p>
              </div>
            </div>

          </div>
        </div>
        {/* END DESI MENU */}

      </section>
{/* STARTERS */}
<section
  id="starters"
  className="py-20 bg-black text-white px-6"
>
  <h2 className="text-6xl font-black text-center text-red-600 mb-6 uppercase">
    Starters
  </h2>

  <p className="text-center text-gray-400 text-xl mb-16 italic">
    Freshly Prepared Favorites To Start Your Meal
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

    {/* Mozzarella Sticks */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="https://images.unsplash.com/photo-1548340748-6d2b7d7da280?q=80&w=1200&auto=format&fit=crop"
        alt="Mozzarella Sticks"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Mozzarella Sticks</h3>
          <span className="text-red-500 font-bold">$7.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Crispy breaded mozzarella sticks served with marinara sauce for dipping.
        </p>
      </div>
    </div>

    {/* Toasted Ravioli */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="toasted.jpg"
        alt="Toasted Ravioli"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Toasted Ravioli</h3>
          <span className="text-red-500 font-bold">$8.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Breaded ravioli fried crispy and served with marinara.
        </p>
      </div>
    </div>

    {/* Jalapeno Poppers */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="poppers.jpg"
        alt="Jalapeno Poppers"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Jalapeno Poppers</h3>
          <span className="text-red-500 font-bold">$7.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Fresh jalapeños stuffed with creamy cheese, breaded, and fried until perfectly crunchy. A spicy, cheesy favorite!
        </p>
      </div>
    </div>

    {/* Garlic Knots */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="g knots.jpg"
        alt="Garlic Knots"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Garlic Knots</h3>
          <span className="text-red-500 font-bold">$5.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Soft, oven-baked dough knots brushed with garlic butter and herbs. Warm, fluffy, and packed with flavor — served with a side of marinara.
        </p>
      </div>
    </div>

    {/* Bosco Sticks */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="bosco.jpg"
        alt="Bosco Sticks"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Bosco Sticks</h3>
          <span className="text-red-500 font-bold">$7.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Warm, soft breadsticks stuffed with melted mozzarella cheese and baked to a golden finish. Brushed with garlic butter and served with a side of marinara for the perfect cheesy bite.
        </p>
      </div>
    </div>

    {/* Fries */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="fries1.jpg"
        alt="Fries"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Fries</h3>
          <span className="text-red-500 font-bold">$3.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Crispy golden fries cooked fresh to order. Lightly salted and perfectly crunchy.
        </p>
      </div>
    </div>

    {/* Seasoned Fries */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="season f.jpg"
        alt="Seasoned Fries"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Seasoned Fries</h3>
          <span className="text-red-500 font-bold">$4.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Crispy fries tossed in our special house seasoning blend for bold flavor in every bite.
        </p>
      </div>
    </div>

    {/* Cheesy Fries */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
         src="cheese f.jpg"
        alt="Cheesy Fries"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Cheesy Fries</h3>
          <span className="text-red-500 font-bold">$5.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Our hot, crispy fries topped with rich melted cheese for a creamy, savory upgrade.
        </p>
      </div>
    </div>

    {/* Cheese Garlic Bread */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="c bread.jpg"
        alt="Cheese Garlic Bread"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Cheese Garlic Bread</h3>
          <span className="text-red-500 font-bold">$6.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Freshly made bread topped with our special garlic butter sauce topped with a generous amount of mozzarella cheese baked and served with marinara sauce
        </p>
      </div>
    </div>

  </div>
</section>
      
      {/* SALADS */}
<section
  id="salads"
  className="py-20 bg-zinc-950 text-white px-6"
>
  <h2 className="text-5xl font-bold text-center text-green-500 mb-6">
    Salads
  </h2>

  <p className="text-center text-yellow-400 text-2xl font-bold mb-4">
    Individual $9.99 • Family $19.99 • Party $32.99
  </p>

  <p className="text-center text-gray-300 text-lg max-w-4xl mx-auto mb-14">
    All Salads Are Served With Your Choice Of Dressing:
    Ranch, Italian, Caesar, Blue Cheese, Balsamic Vinaigrette,
    or Honey Mustard.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

    {/* Classic Chicken Caesar */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
      <img
        src="https://superbrecipe.com/wp-content/uploads/2025/07/Chicken-Caesar-Salad-1.png"
        alt="Classic Chicken Caesar Salad"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-yellow-400">
          Classic Chicken Caesar Salad
        </h3>
        <p className="text-gray-300 mt-3">
          Romaine lettuce, fresh parmesan, asiago cheese, croutons and fresh tomatoes topped with marinated chicken.
        </p>
      </div>
    </div>

    {/* Garden Salad */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
      <img
        src="g salad.jpg"
        alt="Garden Salad"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-yellow-400">
          Garden Salad
        </h3>
        <p className="text-gray-300 mt-3">
          Romaine lettuce, fresh tomatoes, bermuda onions, fresh mushrooms, green peppers.
        </p>
      </div>
    </div>

    {/* Classic Caesar */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1200&auto=format&fit=crop"
        alt="Classic Caesar Salad"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-yellow-400">
          Classic Caesar Salad
        </h3>
        <p className="text-gray-300 mt-3">
          Romaine lettuce, fresh parmesan, asiago cheese, croutons and fresh tomatoes.
        </p>
      </div>
    </div>

    {/* Chopped Chicken Salad */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop"
        alt="Chopped Chicken Salad"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-yellow-400">
          Chopped Chicken Salad
        </h3>
        <p className="text-gray-300 mt-3">
          Romaine lettuce, mozzarella cheese, bermuda onions, bacon, chicken.
        </p>
      </div>
    </div>

    {/* Signature House Salad */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
      <img
         src="sig salad.jpg"
        alt="Signature House Salad"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-yellow-400">
          Signature House Salad
        </h3>
        <p className="text-gray-300 mt-3">
          Romaine lettuce with artichoke hearts, green peppers, kalamata olives, fresh tomatoes, onions and feta Cheese.
        </p>
      </div>
    </div>

  </div>
</section>
      
     {/* BEVERAGES */}
<section
  id="beverages"
  className="py-20 bg-black text-white px-6"
>
  <h2 className="text-5xl font-bold text-center text-red-600 mb-6">
    Beverages
  </h2>

  <p className="text-center text-gray-300 text-xl mb-14">
    Soft Drinks Served In Cans • Juices Served In Bottles
  </p>

  <div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-10 shadow-2xl">

    <div className="grid md:grid-cols-2 gap-6 text-xl">

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Coke (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Diet Coke (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Coke Zero (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Sprite (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Sprite Zero (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Pepsi (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Pepsi Zero (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Dr Pepper (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Mountain Dew (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Fanta (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Root Beer (Can)</span>
        <span className="text-red-500 font-bold">$1.99</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Apple Juice (Bottle)</span>
        <span className="text-red-500 font-bold">$2.49</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Orange Juice (Bottle)</span>
        <span className="text-red-500 font-bold">$2.49</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-3">
        <span>Pineapple Juice (Bottle)</span>
        <span className="text-red-500 font-bold">$2.49</span>
      </div>

    </div>

  </div>
</section>
      
      {/* DESSERTS */}
<section
  id="desserts"
  className="py-20 bg-zinc-950 text-white px-6"
>
  <h2 className="text-5xl font-bold text-center text-red-600 mb-6">
    Desserts
  </h2>

  <p className="text-center text-gray-300 text-xl mb-14 italic">
    The Perfect Sweet Ending To Your Meal
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

    {/* Gulab Jamun */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="g j.jpg"
        alt="Gulab Jamun"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Gulab Jamun</h3>
          <span className="text-red-500 font-bold">$4.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Soft, golden milk-solid dumplings slow-fried to perfection and soaked in a warm rose-scented sugar syrup. A classic South Asian dessert that melts in your mouth with every bite.
        </p>
      </div>
    </div>

    {/* Kulfi */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="k.jpg"
        alt="Kulfi"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Kulfi</h3>
          <span className="text-red-500 font-bold">$5.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          A rich, dense South Asian frozen dessert made with slow-simmered whole milk, cream and aromatic spices. Infused with saffron, rose water and crushed pistachios, kulfi delivers an intensely creamy flavor that's far richer than regular ice cream. Served on a stick or in a cup — a timeless desi classic.
        </p>
      </div>
    </div>

    {/* Cannoli */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="cannoli.jpg"
        alt="Cannoli"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Cannoli</h3>
          <span className="text-red-500 font-bold">$4.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Traditional Italian Cannoli. Tube Shapped Fried Pastry Dough With A Sweet Cream Ricotta Cheese Filling.
        </p>
      </div>
    </div>

    {/* Baklava */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="bk.jpg"
        alt="Baklava"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Baklava</h3>
          <span className="text-red-500 font-bold">$4.99</span>
        </div>
        <p className="text-gray-300 mt-3">
           Layers of crispy golden phyllo pastry filled with finely chopped pistachios and walnuts, baked to perfection and drenched in fragrant honey syrup. A beloved Mediterranean dessert that's sweet, flaky and utterly indulgent.
        </p>
      </div>
    </div>

    {/* Cheesecake */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="c cake.jpg"
        alt="Cheesecake"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Cheesecake</h3>
          <span className="text-red-500 font-bold">$5.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          New York Style Cheesecake With Graham Cracker Crust.
        </p>
      </div>
    </div>

    {/* Chocolate Cake */}
    <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
      <img
        src="ch cake.jpg"
        alt="Chocolate Cake"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-yellow-400">Chocolate Cake</h3>
          <span className="text-red-500 font-bold">$5.99</span>
        </div>
        <p className="text-gray-300 mt-3">
          Layers Of Chocolate Cake Filled and Topped With Fudge.  
        </p>
      </div>
    </div>

  </div>
</section>
      {/* CONTACT */}
      <section id="contact" className="bg-black py-20 px-6 text-center">
        <h2 className="text-5xl font-black text-red-600 uppercase mb-10">Visit Us</h2>
        <div className="space-y-5 text-xl text-gray-300">
          <p>📍 7233 Fishers Landing Dr, Fishers, IN 46038</p>
          <p>📞 951-454-6896</p>
          <p>🕒 Monday - Sunday: 11:00 AM - 12:00 AM</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-800 py-10 text-center">
        <h3 className="text-3xl font-bold text-red-600">Spice &amp; Bites Hub</h3>
        <p className="text-gray-500 mt-3">Fresh Flavor • Family Friendly • Late Night Dining</p>
      </footer>

    </main>
  );
}