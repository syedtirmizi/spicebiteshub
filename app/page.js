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
              "url('https://images.pexels.com/photos/36879454/pexels-photo-36879454.jpeg')"
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
            <a href="#" className="text-red-600 border-b-2 border-red-600 pb-1">HOME</a>
            <a href="#menu" className="hover:text-red-500 transition">MENU</a>
            <a href="#story" className="hover:text-red-500 transition">STORY</a>
            <a href="#gallery" className="hover:text-red-500 transition">GALLERY</a>
            <a href="#contact" className="hover:text-red-500 transition">CONTACT</a>
            <a href="tel:9514546896" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl transition">
              ORDER NOW
            </a>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 px-8 md:px-16 pt-12 pb-32 max-w-3xl">
          <h1 className="text-7xl md:text-9xl font-black leading-none text-red-600 uppercase">
            Spice &amp;
            <br />
            Bites Hub
          </h1>
          <p
            className="mt-6 text-4xl md:text-5xl text-white italic"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
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
      <section id="favorites" className="bg-black py-20 px-6">
        <div className="text-center mb-14">
          <p className="text-red-600 uppercase tracking-[5px] font-bold">Our Best Picks</p>
          <h2 className="text-6xl font-black text-white mt-3 uppercase">Featured Favorites</h2>
          <p className="text-gray-400 mt-4 text-lg">Click any item to jump directly to its menu section</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">

          {/* Pizza */}
          <a href="#american-menu" className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
            <img src="signature pizza.jpg" alt="Pizza" className="h-64 w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">Signature Pizza</h3>
              <p className="text-gray-300 mt-3">Loaded with spicy chicken, veggies and mozzarella cheese.</p>
              <p className="mt-5 text-red-500 font-bold text-lg">View American Menu →</p>
            </div>
          </a>

          {/* Gyro */}
          <a href="#mediterranean-menu" className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
            <img src="gyro.jpg" alt="Chicken Gyro" className="h-64 w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">Chicken Gyro</h3>
              <p className="text-gray-300 mt-3">Grilled chicken, fresh veggies, garlic sauce wrapped in pita.</p>
              <p className="mt-5 text-red-500 font-bold text-lg">View Mediterranean Menu →</p>
            </div>
          </a>

          {/* Wings */}
          <a href="#american-menu" className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
            <img src="buffalo wings.jpg" alt="Buffalo Wings" className="h-64 w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">Buffalo Wings</h3>
              <p className="text-gray-300 mt-3">Juicy wings tossed in our signature spicy sauce.</p>
              <p className="mt-5 text-red-500 font-bold text-lg">View American Menu →</p>
            </div>
          </a>

          {/* Biryani */}
          <a href="#desi-menu" className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
            <img src="biryani.jpg" alt="Biryani" className="h-64 w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">Signature Biryani</h3>
              <p className="text-gray-300 mt-3">Aromatic basmati rice layered with rich spices and tender meat.</p>
              <p className="mt-5 text-red-500 font-bold text-lg">View Desi Menu →</p>
            </div>
          </a>

          {/* Nihari */}
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

        {/* MENU BUTTONS */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href="#american-menu" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-xl font-bold transition">
            American Menu
          </a>
          <a href="#mediterranean-menu" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl text-xl font-bold transition">
            Mediterranean Menu
          </a>
          <a href="#desi-menu" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-xl font-bold transition">
            Desi Menu
          </a>
        </div>

        {/* AMERICAN MENU */}
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
 
              {/* CHEESE PIZZA */}
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
 
              {/* PEPPERONI PIZZA */}
              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1200&auto=format&fit=crop" alt="Pepperoni Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Pepperoni Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$13.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with pepperoni layer of melted mozzarella cheese.</p>
                </div>
              </div>
 
              {/* SIGNATURE PIZZA */}
              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="signature pizza.jpg" alt="Signature Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Signature Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$16.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with pepperoni, Italian sausage, onion, fresh mushrooms, green peppers & black olive layer of melted mozzarella cheese.</p>
                </div>
              </div>
 
              {/* PEPPERONI & SAUSAGE PIZZA */}
              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1200&auto=format&fit=crop" alt="Pepperoni and Sausage Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Pepperoni &amp; Sausage</h3>
                    <span className="text-2xl font-bold text-red-500">$15.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with double sausage & double pepperoni layer of melted mozzarella cheese.</p>
                </div>
              </div>
 
              {/* BUFFALO CHICKEN PIZZA */}
              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="buffalo chicken pizza.jpg" alt="Buffalo Chicken Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Buffalo Chicken Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$15.99</span>
                  </div>
                  <p className="text-gray-300">Hot sauce, Bermuda onions & chunks of fresh chicken layer of melted mozzarella cheese.</p>
                </div>
              </div>
 
              {/* ITALIAN SAUSAGE PIZZA */}
              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://www.thursdaynightpizza.com/wp-content/uploads/2020/11/cut-overhead_STAMP.png" alt="Italian Sausage Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Italian Sausage Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$14.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with seasoned italian sausage, fresh mushroom & green pepper layer of melted mozzarella cheese.</p>
                </div>
              </div>
 
              {/* MEAT LOVERS PIZZA */}
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
 
              {/* VEGETARIAN PIZZA */}
              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="vegi pizza.jpg" alt="Vegetarian Pizza" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Vegetarian Pizza</h3>
                    <span className="text-2xl font-bold text-red-500">$13.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with onion, fresh mushrooms, green peppers & spinach layer of melted mozzarella cheese.</p>
                </div>
              </div>
 
              {/* CHICKEN TIKKA PIZZA */}
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
 
              {/* LAMB PIZZA */}
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
 
        </div>

        {/* MEDITERRANEAN MENU */}
        <div id="mediterranean-menu" className="mb-24">
          <h3 className="text-5xl font-black text-yellow-400 text-center mb-10 uppercase">Mediterranean Menu</h3>
 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
 
            {/* CHICKEN OVER RICE */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img
                src="chicken over rice.jpg"
                alt="Chicken Over Rice"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Chicken Over Rice</h3>
                  <span className="text-2xl font-bold text-red-500">$12.99</span>
                </div>
                <p className="text-gray-300">Seasoned grilled chicken served over fragrant basmati rice with white sauce and hot sauce.</p>
              </div>
            </div>
 
            {/* LAMB OVER RICE */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img
                src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1200&auto=format&fit=crop"
                alt="Lamb Over Rice"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Lamb Over Rice</h3>
                  <span className="text-2xl font-bold text-red-500">$14.99</span>
                </div>
                <p className="text-gray-300">Tender spiced lamb over fluffy basmati rice with creamy white sauce and house hot sauce.</p>
              </div>
            </div>
 
            {/* CHICKEN GYRO */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img
                src="gyro.jpg"
                alt="Chicken Gyro"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Chicken Gyro</h3>
                  <span className="text-2xl font-bold text-red-500">$11.99</span>
                </div>
                <p className="text-gray-300">Grilled chicken, fresh veggies and garlic sauce wrapped in warm pita bread.</p>
              </div>
            </div>
 
            {/* LAMB GYRO */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img
                src="gyro.jpg"
                alt="Lamb Gyro"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Lamb Gyro</h3>
                  <span className="text-2xl font-bold text-red-500">$13.99</span>
                </div>
                <p className="text-gray-300">Slow-roasted seasoned lamb with fresh tomatoes, onions and tzatziki in warm pita.</p>
              </div>
            </div>
 
            {/* FALAFEL GYRO */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img
                src="https://i.cdn.newsbytesapp.com/images/l82920240716142709.jpeg"
                alt="Falafel Gyro"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Falafel Gyro</h3>
                  <span className="text-2xl font-bold text-red-500">$10.99</span>
                </div>
                <p className="text-gray-300">Crispy golden falafel with fresh veggies, hummus and tahini wrapped in soft pita.</p>
              </div>
            </div>
 
            {/* CHICKEN PHILLY */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img
                src="c philly.jpg"
                alt="Chicken Philly"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Chicken Philly</h3>
                  <span className="text-2xl font-bold text-red-500">$12.99</span>
                </div>
                <p className="text-gray-300">Grilled chicken with sautéed peppers, onions and melted cheese on a toasted hoagie roll.</p>
              </div>
            </div>
 
            {/* PHILLY CHEESESTEAK */}
            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img
                src="philly.jpg"
                alt="Philly Cheesesteak"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Philly Cheesesteak</h3>
                  <span className="text-2xl font-bold text-red-500">$13.99</span>
                </div>
                <p className="text-gray-300">Thinly sliced ribeye steak with sautéed onions, peppers and gooey melted cheese on a hoagie roll.</p>
              </div>
            </div>
 
          </div>
        </div>

        {/* DESI MENU */}
        <div id="desi-menu" className="py-20 bg-black text-white px-6">
          <h2 className="text-5xl font-bold text-center text-red-600 mb-14">Desi Menu</h2>
          <p className="text-center text-gray-300 text-xl mb-16 italic">Where Every Bite Tells A Story</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

            {/* KORMA */}
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

            {/* CHICKEN KARAHI */}
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

            {/* DAAL CHANA */}
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

            {/* MALAI BOTI */}
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

            {/* BUTTER CHICKEN */}
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

            {/* CHICKEN TIKKA */}
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

            {/* NIHARI */}
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

            {/* BIRYANI */}
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