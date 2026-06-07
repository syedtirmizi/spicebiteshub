"use client";
import { useState } from "react";

export default function Home() {
  const [pizzaOpen, setPizzaOpen] = useState(false);
  const [buildOpen, setBuildOpen] = useState(false);
  const [specialtyOpen, setSpecialtyOpen] = useState(false);
  const [sliceOpen, setSliceOpen] = useState(false);
  const [calzoneOpen, setCalzoneOpen] = useState(false);
  const [boneInOpen, setBoneInOpen] = useState(false);
  const [bonelessOpen, setBonelessOpen] = useState(false);
  const [pastaOpen, setPastaOpen] = useState(false);
  const [macOpen, setMacOpen] = useState(false);

  // Build Your Own — supports multiple pizzas
  const emptyBuild = { size: "", crust: "", toppings: [] };
  const [buildOrders, setBuildOrders] = useState([{ ...emptyBuild }]);

  const updateBuild = (index, field, value) => {
    setBuildOrders(prev => prev.map((o, i) => i === index ? { ...o, [field]: value } : o));
  };
  const toggleBuildTopping = (index, topping) => {
    setBuildOrders(prev => prev.map((o, i) => i === index
      ? { ...o, toppings: o.toppings.includes(topping) ? o.toppings.filter(t => t !== topping) : [...o.toppings, topping] }
      : o));
  };
  const addBuildPizza = () => setBuildOrders(prev => [...prev, { ...emptyBuild }]);
  const removeBuildPizza = (index) => setBuildOrders(prev => prev.filter((_, i) => i !== index));

  // Specialty — supports multiple pizzas
  const emptySpec = { name: "", size: "", crust: "", toppings: [] };
  const [specOrders, setSpecOrders] = useState([{ ...emptySpec }]);

  const updateSpec = (index, field, value) => {
    setSpecOrders(prev => prev.map((o, i) => i === index ? { ...o, [field]: value } : o));
  };
  const toggleSpecTopping = (index, topping) => {
    setSpecOrders(prev => prev.map((o, i) => i === index
      ? { ...o, toppings: o.toppings.includes(topping) ? o.toppings.filter(t => t !== topping) : [...o.toppings, topping] }
      : o));
  };
  const addSpecPizza = () => setSpecOrders(prev => [...prev, { ...emptySpec }]);
  const removeSpecPizza = (index) => setSpecOrders(prev => prev.filter((_, i) => i !== index));

  // Pizza by Slice
  const sliceTypes = ["Cheese", "Pepperoni", "Sausage"];
  const emptySlice = { type: "", quantity: 1, toppings: [] };
  const [sliceOrders, setSliceOrders] = useState([{ ...emptySlice }]);

  const updateSlice = (index, field, value) => {
    setSliceOrders(prev => prev.map((o, i) => i === index ? { ...o, [field]: value } : o));
  };
  const toggleSliceTopping = (index, topping) => {
    setSliceOrders(prev => prev.map((o, i) => i === index
      ? { ...o, toppings: o.toppings.includes(topping) ? o.toppings.filter(t => t !== topping) : [...o.toppings, topping] }
      : o));
  };
  const addSliceOrder = () => setSliceOrders(prev => [...prev, { ...emptySlice }]);
  const removeSliceOrder = (index) => setSliceOrders(prev => prev.filter((_, i) => i !== index));

  const buildSizes = [
    { size: '10"', price: "$8.99" },
    { size: '12"', price: "$10.99" },
    { size: '14"', price: "$12.99" },
    { size: '16"', price: "$14.99" },
    { size: '24"', price: "$24.99" },
  ];

  const specSizes = [
    { size: '10"', price: "$12.99" },
    { size: '12"', price: "$14.99" },
    { size: '14"', price: "$16.99" },
    { size: '16"', price: "$18.99" },
  ];

  const toppingPrices = {
    '10"': "$1.75", '12"': "$2.25", '14"': "$2.75", '16"': "$3.25", '24"': "$4.00",
  };

  const crustTypes = ["Thin Crust", "Traditional"];
  const toppings = [
    "Artichoke Hearts", "Asiago Cheese", "Banana Peppers", "BBQ Sauce",
    "Bermuda Onions", "Black Olives", "Canadian Ham", "Cheese Feta",
    "Fresh Garlic", "Fresh Mushrooms", "Fresh Tomatoes", "Giardiniera Peppers",
    "Green Olives", "Green Peppers", "Chicken", "Italian Sausage",
    "Jalapeno Peppers", "Kalamata Olives", "Lean Ground Beef", "Pepperoni",
    "Smoked Bacon", "Spinach Leaves", "Sweet Pineapple", "White Onions"
  ];

  const specialtyPizzas = [
    { name: "Pepperoni Pizza", img: "pep pizza.jpg", desc: "Signature pizza sauce with pepperoni layer of melted mozzarella cheese." },
    { name: "Signature Pizza", img: "signature pizza.jpg", desc: "Signature pizza sauce with pepperoni, Italian sausage, onion, fresh mushrooms, green peppers & black olive layer of melted mozzarella cheese." },
    { name: "Pepperoni & Sausage", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1200&auto=format&fit=crop", desc: "Signature pizza sauce with double sausage & double pepperoni layer of melted mozzarella cheese." },
    { name: "Buffalo Chicken Pizza", img: "buffalo chicken pizza.jpg", desc: "Hot sauce, Bermuda onions & chunks of fresh chicken layer of melted mozzarella cheese." },
    { name: "Italian Sausage Pizza", img: "https://www.thursdaynightpizza.com/wp-content/uploads/2020/11/cut-overhead_STAMP.png", desc: "Signature pizza sauce with seasoned Italian sausage, fresh mushroom & green pepper layer of melted mozzarella cheese." },
    { name: "Meat Lovers Pizza", img: "meat lovers.jpg", desc: "Signature pizza sauce with sausage, pepperoni, Canadian bacon layer of melted mozzarella cheese." },
    { name: "Vegetarian Pizza", img: "vegi pizza.jpg", desc: "Signature pizza sauce with onion, fresh mushrooms, green peppers & spinach layer of melted mozzarella cheese." },
    { name: "Chicken Tikka Pizza", img: "https://flavorry.com/wp-content/uploads/2025/09/teamgreen1001_httpss.mj_.run9zT8Sikxhn8_An_ultra-close-up_AND__ecff3b71-758f-4b56-a1ea-7797418d9935_1.png", desc: "Homemade garlic sauce with marinated chicken chunks layer of melted mozzarella cheese." },
    { name: "Lamb Pizza", img: "lamb pizza.jpg", desc: "Homemade garlic sauce with lamb layer of melted mozzarella cheese." },
  ];

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
            <a href="#starters" className="hover:text-red-500 transition">STARTERS</a>
            <a href="#salads" className="hover:text-red-500 transition">SALADS</a>
            <a href="#beverages" className="hover:text-red-500 transition">BEVERAGES</a>
            <a href="#desserts" className="hover:text-red-500 transition">DESSERTS</a>
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
              <p className="text-gray-300 mt-3">Signature pizza sauce with pepperoni, Italian sausage, onion, fresh mushrooms, green peppers &amp; black olive layer of melted mozzarella cheese.</p>
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

        {/* AMERICAN MENU */}
        <div id="american-menu" className="mb-24">
          <h3 className="text-5xl font-black text-red-500 text-center mb-16 uppercase">American Menu</h3>

          {/* ── PIZZA ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button
                onClick={() => setPizzaOpen(!pizzaOpen)}
                className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition"
              >
                <span className="text-4xl">🍕</span>
                <span className="text-3xl font-black text-white uppercase tracking-widest">Pizza</span>
                <span className="text-3xl text-white">{pizzaOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>

            {pizzaOpen && (
              <div className="max-w-7xl mx-auto mt-6 space-y-6">

                {/* ── BUILD YOUR OWN PIZZA ── */}
                <div className="bg-zinc-900 rounded-3xl overflow-hidden">
                  <button
                    onClick={() => setBuildOpen(!buildOpen)}
                    className="w-full flex items-center justify-between px-10 py-6 hover:bg-zinc-800 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">🛠️</span>
                      <span className="text-2xl font-black text-yellow-400 uppercase tracking-wide">Build Your Own Pizza</span>
                    </div>
                    <span className="text-2xl text-white">{buildOpen ? "▲" : "▼"}</span>
                  </button>

                  {buildOpen && (
                    <div className="px-10 pb-10">
                      <div className="bg-zinc-800 rounded-2xl overflow-hidden mb-8 max-w-sm">
                        <img src="cheese pizza.jpg" alt="Cheese Pizza" className="h-48 w-full object-cover" />
                        <div className="p-5">
                          <h3 className="text-2xl font-bold text-yellow-400">Cheese Pizza</h3>
                          <p className="text-gray-300 mt-2 text-sm">Signature pizza sauce and melted mozzarella. Build it your way!</p>
                        </div>
                      </div>

                      {buildOrders.map((order, index) => (
                        <div key={index} className="bg-zinc-800 rounded-2xl p-6 mb-6 border border-zinc-700">
                          <div className="flex justify-between items-center mb-5">
                            <h5 className="text-xl font-black text-yellow-400">Pizza #{index + 1}</h5>
                            {buildOrders.length > 1 && (
                              <button onClick={() => removeBuildPizza(index)} className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition">
                                ✕ Remove
                              </button>
                            )}
                          </div>

                          <div className="mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-3">📏 Size</p>
                            <div className="flex flex-wrap gap-3">
                              {buildSizes.map(({ size, price }) => (
                                <button key={size} onClick={() => updateBuild(index, "size", size)}
                                  className={`px-5 py-3 rounded-xl font-black border-2 transition flex flex-col items-center ${order.size === size ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                                  <span className="text-base">{size}</span>
                                  <span className={`text-xs font-bold ${order.size === size ? "text-white" : "text-yellow-400"}`}>{price}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-3">🫓 Crust</p>
                            <div className="flex flex-wrap gap-3">
                              {crustTypes.map((crust) => (
                                <button key={crust} onClick={() => updateBuild(index, "crust", crust)}
                                  className={`px-6 py-3 rounded-xl text-base font-black border-2 transition ${order.crust === crust ? "bg-yellow-500 border-yellow-500 text-black" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-yellow-500"}`}>
                                  {crust}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-1">🧄 Toppings</p>
                            {order.size && <p className="text-yellow-400 text-xs mb-3">Each topping: {toppingPrices[order.size]} for {order.size}</p>}
                            {!order.size && <p className="text-gray-400 text-xs mb-3">Select a size to see topping prices</p>}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                              {toppings.map((topping) => (
                                <button key={topping} onClick={() => toggleBuildTopping(index, topping)}
                                  className={`px-3 py-2 rounded-lg text-xs font-bold border-2 transition text-left ${order.toppings.includes(topping) ? "bg-green-600 border-green-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-green-500"}`}>
                                  {order.toppings.includes(topping) ? "✅ " : "➕ "}{topping}
                                </button>
                              ))}
                            </div>
                          </div>

                          {(order.size || order.crust || order.toppings.length > 0) && (
                            <div className="mt-5 bg-zinc-900 rounded-xl p-4">
                              <p className="text-yellow-400 font-black text-sm uppercase mb-3">Your Pizza #{index + 1} Summary</p>
                              {order.size && (
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="text-white">📏 {order.size} Base Price</span>
                                  <span className="text-red-400 font-bold">{buildSizes.find(s => s.size === order.size)?.price}</span>
                                </div>
                              )}
                              {order.crust && <p className="text-white text-sm mb-1">🫓 {order.crust}</p>}
                              {order.toppings.length > 0 && order.size && (
                                <div>
                                  <div className="flex justify-between text-sm mb-1 mt-1">
                                    <span className="text-white">🧄 {order.toppings.length} Topping{order.toppings.length > 1 ? "s" : ""} x {toppingPrices[order.size]}</span>
                                    <span className="text-green-400 font-bold">
                                      +${(order.toppings.length * parseFloat(toppingPrices[order.size].replace("$",""))).toFixed(2)}
                                    </span>
                                  </div>
                                  <p className="text-gray-400 text-xs mb-2">{order.toppings.join(", ")}</p>
                                </div>
                              )}
                              {order.toppings.length > 0 && !order.size && (
                                <p className="text-gray-400 text-xs mb-2">🧄 {order.toppings.join(", ")}</p>
                              )}
                              {order.size && (
                                <div className="border-t border-zinc-700 mt-3 pt-3 flex justify-between">
                                  <span className="text-white font-black text-sm">Estimated Total</span>
                                  <span className="text-yellow-400 font-black text-sm">
                                    ${(
                                      parseFloat(buildSizes.find(s => s.size === order.size)?.price.replace("$","") || 0) +
                                      (order.toppings.length * parseFloat((toppingPrices[order.size] || "$0").replace("$","")))
                                    ).toFixed(2)}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}

                      <button onClick={addBuildPizza}
                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg py-4 rounded-2xl transition mt-2">
                        ➕ Add Another Pizza
                      </button>
                    </div>
                  )}
                </div>

                {/* ── SPECIALTY PIZZA ── */}
                <div className="bg-zinc-900 rounded-3xl overflow-hidden">
                  <button
                    onClick={() => setSpecialtyOpen(!specialtyOpen)}
                    className="w-full flex items-center justify-between px-10 py-6 hover:bg-zinc-800 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">⭐</span>
                      <span className="text-2xl font-black text-yellow-400 uppercase tracking-wide">Specialty Pizza</span>
                    </div>
                    <span className="text-2xl text-white">{specialtyOpen ? "▲" : "▼"}</span>
                  </button>

                  {specialtyOpen && (
                    <div className="px-10 pb-10">

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {specialtyPizzas.map((pizza) => (
                          <div key={pizza.name} className="bg-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition">
                            <img src={pizza.img} alt={pizza.name} className="h-44 w-full object-cover" />
                            <div className="p-4">
                              <h3 className="text-lg font-bold text-yellow-400">{pizza.name}</h3>
                              <p className="text-gray-300 mt-1 text-xs">{pizza.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {specOrders.map((order, index) => (
                        <div key={index} className="bg-zinc-800 rounded-2xl p-6 mb-6 border border-zinc-700">
                          <div className="flex justify-between items-center mb-5">
                            <h5 className="text-xl font-black text-yellow-400">Order #{index + 1}</h5>
                            {specOrders.length > 1 && (
                              <button onClick={() => removeSpecPizza(index)} className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition">
                                ✕ Remove
                              </button>
                            )}
                          </div>

                          <div className="mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-3">🍕 Select Pizza</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {specialtyPizzas.map((pizza) => (
                                <button key={pizza.name} onClick={() => updateSpec(index, "name", pizza.name)}
                                  className={`px-3 py-2 rounded-xl text-xs font-bold border-2 transition text-left ${order.name === pizza.name ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                                  {order.name === pizza.name ? "✅ " : ""}{pizza.name}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-3">📏 Size</p>
                            <div className="flex flex-wrap gap-3">
                              {specSizes.map(({ size, price }) => (
                                <button key={size} onClick={() => updateSpec(index, "size", size)}
                                  className={`px-5 py-3 rounded-xl font-black border-2 transition flex flex-col items-center ${order.size === size ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                                  <span className="text-base">{size}</span>
                                  <span className={`text-xs font-bold ${order.size === size ? "text-white" : "text-yellow-400"}`}>{price}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-3">🫓 Crust</p>
                            <div className="flex flex-wrap gap-3">
                              {crustTypes.map((crust) => (
                                <button key={crust} onClick={() => updateSpec(index, "crust", crust)}
                                  className={`px-6 py-3 rounded-xl text-base font-black border-2 transition ${order.crust === crust ? "bg-yellow-500 border-yellow-500 text-black" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-yellow-500"}`}>
                                  {crust}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-1">🧄 Extra Toppings</p>
                            {order.size && <p className="text-yellow-400 text-xs mb-3">Each topping: {toppingPrices[order.size]} for {order.size}</p>}
                            {!order.size && <p className="text-gray-400 text-xs mb-3">Select a size to see topping prices</p>}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                              {toppings.map((topping) => (
                                <button key={topping} onClick={() => toggleSpecTopping(index, topping)}
                                  className={`px-3 py-2 rounded-lg text-xs font-bold border-2 transition text-left ${order.toppings.includes(topping) ? "bg-green-600 border-green-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-green-500"}`}>
                                  {order.toppings.includes(topping) ? "✅ " : "➕ "}{topping}
                                </button>
                              ))}
                            </div>
                          </div>

                          {(order.name || order.size || order.crust || order.toppings.length > 0) && (
                            <div className="mt-5 bg-zinc-900 rounded-xl p-4">
                              <p className="text-yellow-400 font-black text-sm uppercase mb-3">Your Order #{index + 1} Summary</p>
                              {order.name && <p className="text-white text-sm mb-1">🍕 {order.name}</p>}
                              {order.size && (
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="text-white">📏 {order.size} Base Price</span>
                                  <span className="text-red-400 font-bold">{specSizes.find(s => s.size === order.size)?.price}</span>
                                </div>
                              )}
                              {order.crust && <p className="text-white text-sm mb-1">🫓 {order.crust}</p>}
                              {order.toppings.length > 0 && order.size && (
                                <div>
                                  <div className="flex justify-between text-sm mb-1 mt-1">
                                    <span className="text-white">🧄 {order.toppings.length} Extra Topping{order.toppings.length > 1 ? "s" : ""} x {toppingPrices[order.size]}</span>
                                    <span className="text-green-400 font-bold">
                                      +${(order.toppings.length * parseFloat(toppingPrices[order.size].replace("$",""))).toFixed(2)}
                                    </span>
                                  </div>
                                  <p className="text-gray-400 text-xs mb-2">{order.toppings.join(", ")}</p>
                                </div>
                              )}
                              {order.toppings.length > 0 && !order.size && (
                                <p className="text-gray-400 text-xs mb-2">🧄 Extra: {order.toppings.join(", ")}</p>
                              )}
                              {order.size && (
                                <div className="border-t border-zinc-700 mt-3 pt-3 flex justify-between">
                                  <span className="text-white font-black text-sm">Estimated Total</span>
                                  <span className="text-yellow-400 font-black text-sm">
                                    ${(
                                      parseFloat(specSizes.find(s => s.size === order.size)?.price.replace("$","") || 0) +
                                      (order.toppings.length * parseFloat((toppingPrices[order.size] || "$0").replace("$","")))
                                    ).toFixed(2)}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}

                      <button onClick={addSpecPizza}
                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg py-4 rounded-2xl transition mt-2">
                        ➕ Add Another Pizza
                      </button>
                    </div>
                  )}
                </div>

                {/* ── PIZZA BY SLICE ── */}
                <div className="bg-zinc-900 rounded-3xl overflow-hidden">
                  <button
                    onClick={() => setSliceOpen(!sliceOpen)}
                    className="w-full flex items-center justify-between px-10 py-6 hover:bg-zinc-800 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">🍕</span>
                      <span className="text-2xl font-black text-yellow-400 uppercase tracking-wide">Pizza by Slice</span>
                    </div>
                    <span className="text-2xl text-white">{sliceOpen ? "▲" : "▼"}</span>
                  </button>

                  {sliceOpen && (
                    <div className="px-10 pb-10">

                      <div className="bg-zinc-800 rounded-2xl p-5 mb-8">
                        <p className="text-white text-lg font-bold">Base Price: <span className="text-yellow-400">$6.00 per slice</span></p>
                        <p className="text-gray-400 text-sm mt-1">Additional toppings: <span className="text-green-400 font-bold">$0.50 each</span></p>
                      </div>

                      {sliceOrders.map((order, index) => (
                        <div key={index} className="bg-zinc-800 rounded-2xl p-6 mb-6 border border-zinc-700">
                          <div className="flex justify-between items-center mb-5">
                            <h5 className="text-xl font-black text-yellow-400">Slice Order #{index + 1}</h5>
                            {sliceOrders.length > 1 && (
                              <button onClick={() => removeSliceOrder(index)} className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition">
                                ✕ Remove
                              </button>
                            )}
                          </div>

                          {/* SLICE TYPE */}
                          <div className="mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-3">🍕 Choose Your Slice</p>
                            <div className="flex flex-wrap gap-3">
                              {sliceTypes.map((type) => (
                                <button key={type} onClick={() => updateSlice(index, "type", type)}
                                  className={`px-8 py-4 rounded-xl text-lg font-black border-2 transition ${order.type === type ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                                  {order.type === type ? "✅ " : ""}{type}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* QUANTITY */}
                          <div className="mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-3">🔢 Quantity</p>
                            <div className="flex items-center gap-4">
                              <button onClick={() => updateSlice(index, "quantity", Math.max(1, order.quantity - 1))}
                                className="bg-zinc-700 hover:bg-zinc-600 text-white w-12 h-12 rounded-xl text-2xl font-black transition">−</button>
                              <span className="text-3xl font-black text-yellow-400 w-10 text-center">{order.quantity}</span>
                              <button onClick={() => updateSlice(index, "quantity", order.quantity + 1)}
                                className="bg-zinc-700 hover:bg-zinc-600 text-white w-12 h-12 rounded-xl text-2xl font-black transition">+</button>
                            </div>
                          </div>

                          {/* EXTRA TOPPINGS */}
                          <div className="mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-1">🧄 Extra Toppings</p>
                            <p className="text-yellow-400 text-xs mb-3">$0.50 per topping per slice</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                              {toppings.map((topping) => (
                                <button key={topping} onClick={() => toggleSliceTopping(index, topping)}
                                  className={`px-3 py-2 rounded-lg text-xs font-bold border-2 transition text-left ${order.toppings.includes(topping) ? "bg-green-600 border-green-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-green-500"}`}>
                                  {order.toppings.includes(topping) ? "✅ " : "➕ "}{topping}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* SUMMARY */}
                          {(order.type || order.toppings.length > 0) && (
                            <div className="mt-5 bg-zinc-900 rounded-xl p-4">
                              <p className="text-yellow-400 font-black text-sm uppercase mb-3">Slice Order #{index + 1} Summary</p>
                              {order.type && (
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="text-white">🍕 {order.type} x {order.quantity} slice{order.quantity > 1 ? "s" : ""}</span>
                                  <span className="text-red-400 font-bold">${(6 * order.quantity).toFixed(2)}</span>
                                </div>
                              )}
                              {order.toppings.length > 0 && (
                                <div>
                                  <div className="flex justify-between text-sm mb-1 mt-1">
                                    <span className="text-white">🧄 {order.toppings.length} topping{order.toppings.length > 1 ? "s" : ""} x $0.50 x {order.quantity} slice{order.quantity > 1 ? "s" : ""}</span>
                                    <span className="text-green-400 font-bold">+${(order.toppings.length * 0.50 * order.quantity).toFixed(2)}</span>
                                  </div>
                                  <p className="text-gray-400 text-xs mb-2">{order.toppings.join(", ")}</p>
                                </div>
                              )}
                              {order.type && (
                                <div className="border-t border-zinc-700 mt-3 pt-3 flex justify-between">
                                  <span className="text-white font-black text-sm">Estimated Total</span>
                                  <span className="text-yellow-400 font-black text-sm">
                                    ${((6 * order.quantity) + (order.toppings.length * 0.50 * order.quantity)).toFixed(2)}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}

                        </div>
                      ))}

                      <button onClick={addSliceOrder}
                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg py-4 rounded-2xl transition mt-2">
                        ➕ Add Another Slice Order
                      </button>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
          {/* END PIZZA */}

          {/* ── CALZONE WRAP ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button
                onClick={() => setCalzoneOpen(!calzoneOpen)}
                className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition"
              >
                <span className="text-4xl">🫓</span>
                <span className="text-3xl font-black text-white uppercase tracking-widest">Calzone Wrap</span>
                <span className="text-3xl text-white">{calzoneOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {calzoneOpen && (
              <div>
                <p className="text-center text-gray-400 text-lg italic mb-10 max-w-3xl mx-auto">
                  Delicious calzone wrapped in our butter crust with melted mozzarella cheese and signature pizza sauce
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="calzone.jpg" alt="Chicken Club" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Chicken Club</h3>
                    <span className="text-2xl font-bold text-red-500">$11.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce, chicken breast, bacon, fresh tomatoes &amp; Bermuda onions.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="calzon1.jpg" alt="Vegetarian Calzone" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Vegetarian</h3>
                    <span className="text-2xl font-bold text-red-500">$11.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce, onions, fresh mushrooms, green peppers &amp; spinach.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="calzon1.jpg" alt="Signature's Choice" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Signature&apos;s Choice</h3>
                    <span className="text-2xl font-bold text-red-500">$11.99</span>
                  </div>
                  <p className="text-gray-300">Choose any four ingredients your way, wrapped in our golden buttery calzone crust.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="calzon1.jpg" alt="Signature Wrap" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Signature Wrap</h3>
                    <span className="text-2xl font-bold text-red-500">$11.99</span>
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
                    <span className="text-2xl font-bold text-red-500">$11.99</span>
                  </div>
                  <p className="text-gray-300">Signature pizza sauce with sausage, fresh mushroom &amp; green pepper layer of melted mozzarella cheese.</p>
                </div>
              </div>

            </div>
              </div>
            )}
          </div>
          {/* END CALZONE WRAP */}

          {/* ── BONE-IN WINGS ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button
                onClick={() => setBoneInOpen(!boneInOpen)}
                className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition"
              >
                <span className="text-4xl">🍗</span>
                <span className="text-3xl font-black text-white uppercase tracking-widest">Bone-in Wings</span>
                <span className="text-3xl text-white">{boneInOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {boneInOpen && (
              <div>
                <p className="text-center text-gray-400 text-lg italic mb-10 max-w-3xl mx-auto">Made fresh daily — never frozen</p>
                <div className="max-w-3xl mx-auto">
                  <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                    <img src="buffalo wings.jpg" alt="Bone-in Wings" className="h-72 w-full object-cover" />
                    <div className="p-8">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">6 pcs</span><span className="text-gray-400 ml-3">1 Flavor &amp; 1 Dip</span></div>
                          <span className="text-2xl font-bold text-red-500">$7.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">10 pcs</span><span className="text-gray-400 ml-3">1 Flavor &amp; 1 Dip</span></div>
                          <span className="text-2xl font-bold text-red-500">$10.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">15 pcs</span><span className="text-gray-400 ml-3">2 Flavors &amp; 2 Dips</span></div>
                          <span className="text-2xl font-bold text-red-500">$15.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">20 pcs</span><span className="text-gray-400 ml-3">2 Flavors &amp; 2 Dips</span></div>
                          <span className="text-2xl font-bold text-red-500">$20.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">35 pcs</span><span className="text-gray-400 ml-3">3 Flavors &amp; 3 Dips</span></div>
                          <span className="text-2xl font-bold text-red-500">$35.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">50 pcs</span><span className="text-gray-400 ml-3">5 Flavors &amp; 5 Dips</span></div>
                          <span className="text-2xl font-bold text-red-500">$50.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4">
                          <div><span className="text-2xl font-bold text-yellow-400">75 pcs</span><span className="text-gray-400 ml-3">7 Flavors &amp; 7 Dips</span></div>
                          <span className="text-2xl font-bold text-red-500">$75.99</span>
                        </div>
                      </div>
                      <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="bg-zinc-800 rounded-2xl p-6">
                          <h5 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">🌶️ Choice of Flavors</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Spicy", "Mild", "Garlic", "Spicy Garlic", "BBQ", "Honey BBQ", "Teriyaki", "Lemon Pepper", "Suicide"].map((flavor) => (
                              <span key={flavor} className="bg-zinc-700 text-yellow-400 font-bold px-4 py-2 rounded-full text-sm">{flavor}</span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-zinc-800 rounded-2xl p-6">
                          <h5 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">🥣 Dipping Sauce</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Ranch", "Blue Cheese"].map((sauce) => (
                              <span key={sauce} className="bg-zinc-700 text-yellow-400 font-bold px-4 py-2 rounded-full text-sm">{sauce}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* END BONE-IN WINGS */}

          {/* ── BONELESS WINGS ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button
                onClick={() => setBonelessOpen(!bonelessOpen)}
                className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition"
              >
                <span className="text-4xl">🍗</span>
                <span className="text-3xl font-black text-white uppercase tracking-widest">Boneless Wings</span>
                <span className="text-3xl text-white">{bonelessOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {bonelessOpen && (
              <div>
                <p className="text-center text-gray-400 text-lg italic mb-10 max-w-3xl mx-auto">Made fresh daily — never frozen</p>
                <div className="max-w-3xl mx-auto">
                  <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                    <img src="bw.jpg" alt="Boneless Wings" className="h-72 w-full object-cover" />
                    <div className="p-8">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">7 pcs</span><span className="text-gray-400 ml-3">1 Flavor &amp; 1 Dip</span></div>
                          <span className="text-2xl font-bold text-red-500">$7.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">15 pcs</span><span className="text-gray-400 ml-3">2 Flavors &amp; 2 Dips</span></div>
                          <span className="text-2xl font-bold text-red-500">$15.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">25 pcs</span><span className="text-gray-400 ml-3">2 Flavors &amp; 2 Dips</span></div>
                          <span className="text-2xl font-bold text-red-500">$25.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">35 pcs</span><span className="text-gray-400 ml-3">3 Flavors &amp; 3 Dips</span></div>
                          <span className="text-2xl font-bold text-red-500">$35.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4 border-b border-zinc-700">
                          <div><span className="text-2xl font-bold text-yellow-400">50 pcs</span><span className="text-gray-400 ml-3">5 Flavors &amp; 5 Dips</span></div>
                          <span className="text-2xl font-bold text-red-500">$50.99</span>
                        </div>
                        <div className="flex justify-between items-center py-4">
                          <div><span className="text-2xl font-bold text-yellow-400">75 pcs</span><span className="text-gray-400 ml-3">6 Flavors &amp; 7 Dips</span></div>
                          <span className="text-2xl font-bold text-red-500">$75.99</span>
                        </div>
                      </div>
                      <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="bg-zinc-800 rounded-2xl p-6">
                          <h5 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">🌶️ Choice of Flavors</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Spicy", "Mild", "Garlic", "Spicy Garlic", "BBQ", "Honey BBQ", "Teriyaki", "Lemon Pepper", "Suicide"].map((flavor) => (
                              <span key={flavor} className="bg-zinc-700 text-yellow-400 font-bold px-4 py-2 rounded-full text-sm">{flavor}</span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-zinc-800 rounded-2xl p-6">
                          <h5 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">🥣 Dipping Sauce</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Ranch", "Blue Cheese"].map((sauce) => (
                              <span key={sauce} className="bg-zinc-700 text-yellow-400 font-bold px-4 py-2 rounded-full text-sm">{sauce}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* END BONELESS WINGS */}

          {/* ── PASTA ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button
                onClick={() => setPastaOpen(!pastaOpen)}
                className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition"
              >
                <span className="text-4xl">🍝</span>
                <span className="text-3xl font-black text-white uppercase tracking-widest">Pasta</span>
                <span className="text-3xl text-white">{pastaOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {pastaOpen && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-4">

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1200&auto=format&fit=crop" alt="Chicken Cavatappi" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Chicken Cavatappi</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Olive oil, chicken breast, sauteed spinach, mushrooms, red onions topped with parmesan and parsley.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="m.jpg" alt="Mostaccioli with Marinara" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Mostaccioli w/ Marinara</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Traditional mostaccioli with marinara topped with parmesan and parsley.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="bm.jpg" alt="Baked Mostaccioli with Mozzarella" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Baked Mostaccioli w/ Mozzarella</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Mostaccioli, marinara, mozzarella baked to perfection, topped with parmesan and parsley.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1645112411341-6c4fd023882f?q=80&w=1200&auto=format&fit=crop" alt="Alfredo Cavatappi with Chicken" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Alfredo Cavatappi w/ Chicken</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Cavatappi noodles, chicken breast, mushrooms and spinach, topped with parmesan cheese and parsley.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1612369997610-a07a4b9e8a0c?q=80&w=1200&auto=format&fit=crop" alt="Alfredo Cavatappi" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Alfredo Cavatappi</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Cavatappi noodles, alfredo sauce baked to perfection, topped with parmesan and parsley.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=1200&auto=format&fit=crop" alt="Tomato Cream Penne" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Tomato Cream Penne</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Penne pasta baked in creamy alfredo, marinara topped with parmesan and parsley.</p>
                </div>
              </div>

            </div>
            )}
          </div>
          {/* END PASTA */}

          {/* ── MAC & CHEESE ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button
                onClick={() => setMacOpen(!macOpen)}
                className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition"
              >
                <span className="text-4xl">🧀</span>
                <span className="text-3xl font-black text-white uppercase tracking-widest">Mac &amp; Cheese</span>
                <span className="text-3xl text-white">{macOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {macOpen && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-4">

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1548340748-6811e9f45f0a?q=80&w=1200&auto=format&fit=crop" alt="Buffalo Chicken Mac" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Buffalo Chicken Mac</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Chopped chicken breast, Bermuda onions, and our signature spicy sauce, smothered in mozzarella and cheddar.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop" alt="Double BFT" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Double BFT</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Mound of bacon piled on top of feta, tomato, smothered in mozzarella and cheddar.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1200&auto=format&fit=crop" alt="Signature's Choice" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Signature&apos;s Choice</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Four delicious toppings (your choice) smothered in mozzarella and cheddar.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1200&auto=format&fit=crop" alt="BBQ Mac" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">BBQ Mac</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">BBQ covered bacon, Bermuda onions, cilantro smothered in mozzarella and cheddar.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1612407219897-7f6ae2748668?q=80&w=1200&auto=format&fit=crop" alt="Mac n Cheese" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Mac n Cheese</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Classic mac smothered in mozzarella and cheddar.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop" alt="Alfredo Mac" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Alfredo Mac</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Creamy alfredo sauce tossed with fresh mushrooms and spinach.</p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop" alt="Burger Mac" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">Burger Mac</h3>
                    <span className="text-2xl font-bold text-red-500">$9.99</span>
                  </div>
                  <p className="text-gray-300">Ground beef, onions, fresh tomato, mushrooms smothered in mozzarella and cheddar.</p>
                </div>
              </div>

            </div>
            )}
          </div>
          {/* END MAC & CHEESE */}

        </div>
        {/* AMERICAN MENU END */}

        {/* MEDITERRANEAN MENU */}
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

        {/* DESI MENU */}
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
      <section id="starters" className="py-20 bg-black text-white px-6">
        <h2 className="text-6xl font-black text-center text-red-600 mb-6 uppercase">Starters</h2>
        <p className="text-center text-gray-400 text-xl mb-16 italic">Freshly Prepared Favorites To Start Your Meal</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1548340748-6d2b7d7da280?q=80&w=1200&auto=format&fit=crop" alt="Mozzarella Sticks" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Mozzarella Sticks</h3><span className="text-red-500 font-bold">$7.99</span></div>
              <p className="text-gray-300 mt-3">Crispy breaded mozzarella sticks served with marinara sauce for dipping.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="toasted.jpg" alt="Toasted Ravioli" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Toasted Ravioli</h3><span className="text-red-500 font-bold">$8.99</span></div>
              <p className="text-gray-300 mt-3">Breaded ravioli fried crispy and served with marinara.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="poppers.jpg" alt="Jalapeno Poppers" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Jalapeno Poppers</h3><span className="text-red-500 font-bold">$7.99</span></div>
              <p className="text-gray-300 mt-3">Fresh jalapenos stuffed with creamy cheese, breaded, and fried until perfectly crunchy.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="g knots.jpg" alt="Garlic Knots" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Garlic Knots</h3><span className="text-red-500 font-bold">$5.99</span></div>
              <p className="text-gray-300 mt-3">Soft, oven-baked dough knots brushed with garlic butter and herbs. Served with marinara.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="bosco.jpg" alt="Bosco Sticks" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Bosco Sticks</h3><span className="text-red-500 font-bold">$7.99</span></div>
              <p className="text-gray-300 mt-3">Warm breadsticks stuffed with melted mozzarella, brushed with garlic butter. Served with marinara.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="fries1.jpg" alt="Fries" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Fries</h3><span className="text-red-500 font-bold">$3.99</span></div>
              <p className="text-gray-300 mt-3">Crispy golden fries cooked fresh to order. Lightly salted and perfectly crunchy.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="season f.jpg" alt="Seasoned Fries" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Seasoned Fries</h3><span className="text-red-500 font-bold">$4.99</span></div>
              <p className="text-gray-300 mt-3">Crispy fries tossed in our special house seasoning blend for bold flavor in every bite.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="cheese f.jpg" alt="Cheesy Fries" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Cheesy Fries</h3><span className="text-red-500 font-bold">$5.99</span></div>
              <p className="text-gray-300 mt-3">Our hot, crispy fries topped with rich melted cheese for a creamy, savory upgrade.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="c bread.jpg" alt="Cheese Garlic Bread" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Cheese Garlic Bread</h3><span className="text-red-500 font-bold">$6.99</span></div>
              <p className="text-gray-300 mt-3">Freshly made bread with garlic butter sauce topped with mozzarella cheese, baked and served with marinara.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SALADS */}
      <section id="salads" className="py-20 bg-zinc-950 text-white px-6">
        <h2 className="text-5xl font-bold text-center text-green-500 mb-6">Salads</h2>
        <p className="text-center text-yellow-400 text-2xl font-bold mb-4">Individual $9.99 • Family $19.99 • Party $32.99</p>
        <p className="text-center text-gray-300 text-lg max-w-4xl mx-auto mb-14">
          All Salads Are Served With Your Choice Of Dressing: Ranch, Italian, Caesar, Blue Cheese, Balsamic Vinaigrette, or Honey Mustard.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://superbrecipe.com/wp-content/uploads/2025/07/Chicken-Caesar-Salad-1.png" alt="Classic Chicken Caesar Salad" className="h-64 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400">Classic Chicken Caesar Salad</h3>
              <p className="text-gray-300 mt-3">Romaine lettuce, fresh parmesan, asiago cheese, croutons and fresh tomatoes topped with marinated chicken.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
            <img src="g salad.jpg" alt="Garden Salad" className="h-64 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400">Garden Salad</h3>
              <p className="text-gray-300 mt-3">Romaine lettuce, fresh tomatoes, bermuda onions, fresh mushrooms, green peppers.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1200&auto=format&fit=crop" alt="Classic Caesar Salad" className="h-64 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400">Classic Caesar Salad</h3>
              <p className="text-gray-300 mt-3">Romaine lettuce, fresh parmesan, asiago cheese, croutons and fresh tomatoes.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop" alt="Chopped Chicken Salad" className="h-64 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400">Chopped Chicken Salad</h3>
              <p className="text-gray-300 mt-3">Romaine lettuce, mozzarella cheese, bermuda onions, bacon, chicken.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
            <img src="sig salad.jpg" alt="Signature House Salad" className="h-64 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400">Signature House Salad</h3>
              <p className="text-gray-300 mt-3">Romaine lettuce with artichoke hearts, green peppers, kalamata olives, fresh tomatoes, onions and feta cheese.</p>
            </div>
          </div>

        </div>
      </section>

      {/* BEVERAGES */}
      <section id="beverages" className="py-20 bg-black text-white px-6">
        <h2 className="text-5xl font-bold text-center text-red-600 mb-6">Beverages</h2>
        <p className="text-center text-gray-300 text-xl mb-14">Soft Drinks Served In Cans • Juices Served In Bottles</p>
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 text-xl">
            {[["Coke (Can)","$1.99"],["Diet Coke (Can)","$1.99"],["Coke Zero (Can)","$1.99"],["Sprite (Can)","$1.99"],["Sprite Zero (Can)","$1.99"],["Pepsi (Can)","$1.99"],["Pepsi Zero (Can)","$1.99"],["Dr Pepper (Can)","$1.99"],["Mountain Dew (Can)","$1.99"],["Fanta (Can)","$1.99"],["Root Beer (Can)","$1.99"],["Apple Juice (Bottle)","$2.49"],["Orange Juice (Bottle)","$2.49"],["Pineapple Juice (Bottle)","$2.49"]].map(([name, price]) => (
              <div key={name} className="flex justify-between border-b border-zinc-700 pb-3">
                <span>{name}</span>
                <span className="text-red-500 font-bold">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESSERTS */}
      <section id="desserts" className="py-20 bg-zinc-950 text-white px-6">
        <h2 className="text-5xl font-bold text-center text-red-600 mb-6">Desserts</h2>
        <p className="text-center text-gray-300 text-xl mb-14 italic">The Perfect Sweet Ending To Your Meal</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="g j.jpg" alt="Gulab Jamun" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Gulab Jamun</h3><span className="text-red-500 font-bold">$4.99</span></div>
              <p className="text-gray-300 mt-3">Soft, golden milk-solid dumplings slow-fried to perfection and soaked in a warm rose-scented sugar syrup. A classic South Asian dessert that melts in your mouth.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="k.jpg" alt="Kulfi" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Kulfi</h3><span className="text-red-500 font-bold">$5.99</span></div>
              <p className="text-gray-300 mt-3">A rich, dense South Asian frozen dessert infused with saffron, rose water and crushed pistachios. Far richer than regular ice cream — a timeless desi classic.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="cannoli.jpg" alt="Cannoli" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Cannoli</h3><span className="text-red-500 font-bold">$4.99</span></div>
              <p className="text-gray-300 mt-3">Traditional Italian cannoli. Tube-shaped fried pastry dough with a sweet cream ricotta cheese filling.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="bk.jpg" alt="Baklava" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Baklava</h3><span className="text-red-500 font-bold">$4.99</span></div>
              <p className="text-gray-300 mt-3">Layers of crispy golden phyllo pastry filled with pistachios and walnuts, drenched in fragrant honey syrup. Sweet, flaky and utterly indulgent.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="c cake.jpg" alt="Cheesecake" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Cheesecake</h3><span className="text-red-500 font-bold">$5.99</span></div>
              <p className="text-gray-300 mt-3">New York Style Cheesecake With Graham Cracker Crust.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <img src="ch cake.jpg" alt="Chocolate Cake" className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">Chocolate Cake</h3><span className="text-red-500 font-bold">$5.99</span></div>
              <p className="text-gray-300 mt-3">Layers of chocolate cake filled and topped with fudge.</p>
            </div>
          </div>

        </div>
      </section>

      {/* OUR STORY */}
      <section id="story" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-red-600 uppercase tracking-[5px] font-bold mb-3">Who We Are</p>
            <h2 className="text-6xl font-black text-white uppercase">Our Story</h2>
            <div className="h-1 w-32 bg-red-600 mx-auto mt-6 rounded" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="text-4xl font-black text-yellow-400 mb-6 leading-tight">Where Every Bite Tells A Story</h3>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">Spice &amp; Bites Hub was born from a simple but powerful idea — that great food has no borders. Nestled in the heart of Fishers, Indiana, we are more than just a restaurant. We are a celebration of culture, community, and the universal love of food.</p>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">Our founders brought together decades of culinary passion spanning three rich food traditions — American comfort food, Mediterranean freshness, and bold Desi flavors — all under one roof. We believe the Indiana community deserves a dining experience that is both familiar and adventurous, satisfying and exciting.</p>
              <p className="text-gray-300 text-xl leading-relaxed">From the first slice of our hand-tossed Signature Pizza to the last spoonful of slow-cooked Lamb Nihari, every dish we serve carries the heart of our kitchen and the warmth of our team.</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/logo.png" alt="Our Kitchen" className="w-full h-96 object-cover" />
            </div>
          </div>
          <div className="text-center mb-14">
            <h3 className="text-5xl font-black text-white uppercase">Our Kitchen</h3>
            <p className="text-gray-400 text-xl mt-4 max-w-3xl mx-auto">Every dish starts with fresh ingredients, prepared with care and cooked with love. No shortcuts. Just real food made the right way.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.stockcake.com/public/1/c/4/1c49fbfa-af29-4652-b98e-f2a791d4cd35_large/pizza-dough-toss-stockcake.jpg" alt="Pizza Preparation" className="w-full h-72 object-cover" />
              <div className="bg-zinc-900 p-6">
                <h4 className="text-2xl font-bold text-yellow-400 mb-2">Hand-Crafted Pizzas</h4>
                <p className="text-gray-300">Every pizza is hand-tossed, sauced and topped fresh to order. Our dough is made in-house daily for that perfect crispy-yet-chewy crust.</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.stockcake.com/public/5/6/f/56f7479e-5d83-4d7f-9744-adb0a161f78b_large/spices-meet-heat-stockcake.jpg" alt="Desi Cooking" className="w-full h-72 object-cover" />
              <div className="bg-zinc-900 p-6">
                <h4 className="text-2xl font-bold text-yellow-400 mb-2">Slow-Cooked Desi Flavors</h4>
                <p className="text-gray-300">Our Nihari simmers for hours. Our Biryani is layered and dum-cooked to perfection. Authentic recipes passed down through generations, made fresh every day.</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://www.aspicyperspective.com/wp-content/uploads/2023/11/Buffalo-Wing-Sauce-11.jpg" alt="Wings Preparation" className="w-full h-72 object-cover" />
              <div className="bg-zinc-900 p-6">
                <h4 className="text-2xl font-bold text-yellow-400 mb-2">Fresh Wings Daily</h4>
                <p className="text-gray-300">Our bone-in and boneless wings are made fresh daily — never frozen. Tossed in your choice of signature flavors and served with house-made dipping sauces.</p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-12 mb-24">
            <h3 className="text-5xl font-black text-white uppercase text-center mb-12">What We Serve</h3>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <div className="text-6xl mb-4">🍕</div>
                <h4 className="text-2xl font-black text-yellow-400 mb-3">American Menu</h4>
                <p className="text-gray-300 text-lg">Hand-tossed pizzas, calzone wraps, crispy wings, pasta, mac &amp; cheese and starters. Classic American comfort food made fresh with bold flavors.</p>
              </div>
              <div>
                <div className="text-6xl mb-4">🌯</div>
                <h4 className="text-2xl font-black text-yellow-400 mb-3">Mediterranean Menu</h4>
                <p className="text-gray-300 text-lg">Chicken and lamb gyros, over-rice platters, falafel, Philly cheesesteaks and chicken phillies. Fresh Mediterranean flavors prepared with care.</p>
              </div>
              <div>
                <div className="text-6xl mb-4">🍛</div>
                <h4 className="text-2xl font-black text-yellow-400 mb-3">Desi Menu</h4>
                <p className="text-gray-300 text-lg">Slow-cooked Nihari, aromatic Biryani, Chicken Karahi, Butter Chicken, Malai Boti and more. Authentic South Asian cuisine crafted with traditional spices.</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20250310/pngtree-sharing-a-meal-hands-reaching-for-food-on-rustic-wooden-table-image_17087487.jpg" alt="Community Dining" className="w-full h-96 object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl font-black text-yellow-400 mb-6 leading-tight">Serving the Indiana Community</h3>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">Located at 7233 Fishers Landing Dr in Fishers, Indiana, Spice &amp; Bites Hub is proud to be part of this incredible community. We serve families, professionals, students and food lovers of all backgrounds — because great food brings people together.</p>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">Whether you are stopping in for a late-night slice, ordering wings for the big game, or sitting down for a hearty Desi meal with the family — our doors are open seven days a week from 11 AM to midnight.</p>
              <p className="text-gray-300 text-xl leading-relaxed">We are not just feeding appetites. We are building memories, one plate at a time. Thank you, Indiana, for welcoming us into your community.</p>
              <div className="mt-10">
                <a href="tel:9514546896" className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-xl text-xl font-bold transition inline-block">
                  📞 Call to Order — 951-454-6896
                </a>
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