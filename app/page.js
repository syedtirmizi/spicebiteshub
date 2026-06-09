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

  const sliceTypes = ["Cheese", "Pepperoni", "Sausage"];
  const emptySlice = { type: "", quantity: 1, toppings: [], addFries: false };
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

  // Calzone toppings per item
  const emptyCalzone = { toppings: [] };
  const [calzoneToppings, setCalzoneToppings] = useState({});
  const toggleCalzoneTopping = (itemName, topping) => {
    setCalzoneToppings(prev => {
      const current = prev[itemName] || [];
      return {
        ...prev,
        [itemName]: current.includes(topping) ? current.filter(t => t !== topping) : [...current, topping]
      };
    });
  };

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
    { name: "Pepperoni & Sausage", img: "psp.jpg", desc: "Signature pizza sauce with double sausage & double pepperoni layer of melted mozzarella cheese." },
    { name: "Buffalo Chicken Pizza", img: "buffalo chicken pizza.jpg", desc: "Hot sauce, Bermuda onions & chunks of fresh chicken layer of melted mozzarella cheese." },
    { name: "Italian Sausage Pizza", img: "https://www.thursdaynightpizza.com/wp-content/uploads/2020/11/cut-overhead_STAMP.png", desc: "Signature pizza sauce with seasoned Italian sausage, fresh mushroom & green pepper layer of melted mozzarella cheese." },
    { name: "Meat Lovers Pizza", img: "meat lovers.jpg", desc: "Signature pizza sauce with sausage, pepperoni, Canadian bacon layer of melted mozzarella cheese." },
    { name: "Vegetarian Pizza", img: "veg p.jpg", desc: "Signature pizza sauce with onion, fresh mushrooms, green peppers & spinach layer of melted mozzarella cheese." },
    { name: "Chicken Tikka Pizza", img: "https://flavorry.com/wp-content/uploads/2025/09/teamgreen1001_httpss.mj_.run9zT8Sikxhn8_An_ultra-close-up_AND__ecff3b71-758f-4b56-a1ea-7797418d9935_1.png", desc: "Homemade garlic sauce with marinated chicken chunks layer of melted mozzarella cheese." },
    { name: "Lamb Pizza", img: "lamb pizza.jpg", desc: "Homemade garlic sauce with lamb layer of melted mozzarella cheese." },
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/36879454/pexels-photo-36879454.jpeg')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <nav className="relative z-20 flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Spice & Bites Hub" className="h-20 w-auto" />
            <div><p className="text-sm text-gray-300 mt-1">American • Mediterranean • Desi<br />All Under One Roof</p></div>
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
        <div className="relative z-10 px-8 md:px-16 pt-12 pb-32 max-w-3xl">
          <h1 className="text-7xl md:text-9xl font-black leading-none text-red-600 uppercase">Spice &amp;<br />Bites Hub</h1>
          <p className="mt-6 text-4xl md:text-5xl text-white italic" style={{ fontFamily: "'Brush Script MT', cursive" }}>Where Every Bite Tells A Story</p>
          <p className="mt-8 text-xl text-gray-300 leading-relaxed">Pizza • Gyro • Wings • Biryani • Nihari</p>
          <div className="mt-10">
            <a href="tel:9514546896" className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-xl text-xl font-bold transition inline-block">ORDER NOW</a>
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
          {[
            { href: "#american-menu", img: "signature pizza.jpg", title: "Signature Pizza", desc: "Signature pizza sauce with pepperoni, Italian sausage, onion, fresh mushrooms, green peppers & black olive layer of melted mozzarella cheese.", label: "View American Menu →" },
            { href: "#mediterranean-menu", img: "gyro.jpg", title: "Chicken Gyro", desc: "Grilled chicken, fresh veggies, garlic sauce wrapped in pita.", label: "View Mediterranean Menu →" },
            { href: "#american-menu", img: "buffalo wings.jpg", title: "Buffalo Wings", desc: "Juicy wings tossed in our signature spicy sauce.", label: "View American Menu →" },
            { href: "#desi-menu", img: "biryani.jpg", title: "Signature Biryani", desc: "Aromatic basmati rice layered with rich spices and tender meat.", label: "View Desi Menu →" },
            { href: "#desi-menu", img: "nihari.jpg", title: "Lamb Nihari", desc: "Slow-cooked traditional desi curry packed with bold flavor.", label: "View Desi Menu →" },
          ].map((item) => (
            <a key={item.title} href={item.href} className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
              <img src={item.img} alt={item.title} className="h-64 w-full object-cover" />
              <div className="p-5 text-center">
                <h3 className="text-3xl font-bold text-yellow-400">{item.title}</h3>
                <p className="text-gray-300 mt-3">{item.desc}</p>
                <p className="mt-5 text-red-500 font-bold text-lg">{item.label}</p>
              </div>
            </a>
          ))}
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

        {/* ══ AMERICAN MENU ══ */}
        <div id="american-menu" className="mb-24">
          <h3 className="text-5xl font-black text-red-500 text-center mb-16 uppercase">American Menu</h3>

          {/* ── PIZZA ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button onClick={() => setPizzaOpen(!pizzaOpen)} className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition">
                <span className="text-4xl">🍕</span>
                <span className="text-3xl font-black text-white uppercase tracking-widest">Pizza</span>
                <span className="text-3xl text-white">{pizzaOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>

            {pizzaOpen && (
              <div className="max-w-7xl mx-auto mt-6 space-y-6">

                {/* BUILD YOUR OWN */}
                <div className="bg-zinc-900 rounded-3xl overflow-hidden">
                  <button onClick={() => setBuildOpen(!buildOpen)} className="w-full flex items-center justify-between px-10 py-6 hover:bg-zinc-800 transition">
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
                              <button onClick={() => removeBuildPizza(index)} className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition">✕ Remove</button>
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
                              <p className="text-yellow-400 font-black text-sm uppercase mb-3">Pizza #{index + 1} Summary</p>
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
                                    <span className="text-green-400 font-bold">+${(order.toppings.length * parseFloat(toppingPrices[order.size].replace("$",""))).toFixed(2)}</span>
                                  </div>
                                  <p className="text-gray-400 text-xs mb-2">{order.toppings.join(", ")}</p>
                                </div>
                              )}
                              {order.toppings.length > 0 && !order.size && <p className="text-gray-400 text-xs mb-2">🧄 {order.toppings.join(", ")}</p>}
                              {order.size && (
                                <div className="border-t border-zinc-700 mt-3 pt-3 flex justify-between">
                                  <span className="text-white font-black text-sm">Estimated Total</span>
                                  <span className="text-yellow-400 font-black text-sm">
                                    ${(parseFloat(buildSizes.find(s => s.size === order.size)?.price.replace("$","") || 0) + (order.toppings.length * parseFloat((toppingPrices[order.size] || "$0").replace("$","")))).toFixed(2)}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                      <button onClick={addBuildPizza} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg py-4 rounded-2xl transition mt-2">➕ Add Another Pizza</button>
                    </div>
                  )}
                </div>

                {/* SPECIALTY PIZZA */}
                <div className="bg-zinc-900 rounded-3xl overflow-hidden">
                  <button onClick={() => setSpecialtyOpen(!specialtyOpen)} className="w-full flex items-center justify-between px-10 py-6 hover:bg-zinc-800 transition">
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
                              <button onClick={() => removeSpecPizza(index)} className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition">✕ Remove</button>
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
                              <p className="text-yellow-400 font-black text-sm uppercase mb-3">Order #{index + 1} Summary</p>
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
                                    <span className="text-green-400 font-bold">+${(order.toppings.length * parseFloat(toppingPrices[order.size].replace("$",""))).toFixed(2)}</span>
                                  </div>
                                  <p className="text-gray-400 text-xs mb-2">{order.toppings.join(", ")}</p>
                                </div>
                              )}
                              {order.toppings.length > 0 && !order.size && <p className="text-gray-400 text-xs mb-2">🧄 Extra: {order.toppings.join(", ")}</p>}
                              {order.size && (
                                <div className="border-t border-zinc-700 mt-3 pt-3 flex justify-between">
                                  <span className="text-white font-black text-sm">Estimated Total</span>
                                  <span className="text-yellow-400 font-black text-sm">
                                    ${(parseFloat(specSizes.find(s => s.size === order.size)?.price.replace("$","") || 0) + (order.toppings.length * parseFloat((toppingPrices[order.size] || "$0").replace("$","")))).toFixed(2)}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                      <button onClick={addSpecPizza} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg py-4 rounded-2xl transition mt-2">➕ Add Another Pizza</button>
                    </div>
                  )}
                </div>

                {/* PIZZA BY SLICE */}
                <div className="bg-zinc-900 rounded-3xl overflow-hidden">
                  <button onClick={() => setSliceOpen(!sliceOpen)} className="w-full flex items-center justify-between px-10 py-6 hover:bg-zinc-800 transition">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">🍕</span>
                      <span className="text-2xl font-black text-yellow-400 uppercase tracking-wide">Pizza by Slice</span>
                    </div>
                    <span className="text-2xl text-white">{sliceOpen ? "▲" : "▼"}</span>
                  </button>
                  {sliceOpen && (
                    <div className="px-10 pb-10">
                      <div className="bg-red-600 rounded-2xl p-6 mb-8 text-center">
                        <h4 className="text-2xl font-black text-white uppercase mb-2">🎉 Slice Deal</h4>
                        <p className="text-white text-lg font-bold">Every slice includes a <span className="text-yellow-300">FREE soda can</span> of your choice!</p>
                        <div className="flex justify-center gap-8 mt-4">
                          <div className="bg-black/30 rounded-xl px-6 py-3 text-center">
                            <p className="text-yellow-300 font-black text-xl">Slice + Soda</p>
                            <p className="text-white text-2xl font-black">$6.00</p>
                          </div>
                          <div className="bg-black/30 rounded-xl px-6 py-3 text-center">
                            <p className="text-yellow-300 font-black text-xl">🍟 Meal Deal</p>
                            <p className="text-white text-sm font-bold">Slice + Soda + Fries</p>
                            <p className="text-white text-2xl font-black">$7.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="bg-zinc-800 rounded-2xl overflow-hidden text-center">
                          <img src="slice.jpg" alt="Cheese Slice" className="h-40 w-full object-cover" />
                          <p className="text-yellow-400 font-black py-3">Cheese</p>
                        </div>
                        <div className="bg-zinc-800 rounded-2xl overflow-hidden text-center">
                          <img src="slicep.jpg" alt="Pepperoni Slice" className="h-40 w-full object-cover" />
                          <p className="text-yellow-400 font-black py-3">Pepperoni</p>
                        </div>
                        <div className="bg-zinc-800 rounded-2xl overflow-hidden text-center">
                          <img src="sliceb.jpg" alt="Sausage Slice" className="h-40 w-full object-cover" />
                          <p className="text-yellow-400 font-black py-3">Sausage</p>
                        </div>
                      </div>
                      {sliceOrders.map((order, index) => (
                        <div key={index} className="bg-zinc-800 rounded-2xl p-6 mb-6 border border-zinc-700">
                          <div className="flex justify-between items-center mb-5">
                            <h5 className="text-xl font-black text-yellow-400">Slice Order #{index + 1}</h5>
                            {sliceOrders.length > 1 && (
                              <button onClick={() => removeSliceOrder(index)} className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition">✕ Remove</button>
                            )}
                          </div>
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
                          <div className="mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-3">🔢 Quantity</p>
                            <div className="flex items-center gap-4">
                              <button onClick={() => updateSlice(index, "quantity", Math.max(1, order.quantity - 1))} className="bg-zinc-700 hover:bg-zinc-600 text-white w-12 h-12 rounded-xl text-2xl font-black transition">−</button>
                              <span className="text-3xl font-black text-yellow-400 w-10 text-center">{order.quantity}</span>
                              <button onClick={() => updateSlice(index, "quantity", order.quantity + 1)} className="bg-zinc-700 hover:bg-zinc-600 text-white w-12 h-12 rounded-xl text-2xl font-black transition">+</button>
                            </div>
                          </div>
                          <div className="mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-sm mb-3">🍟 Add Fries? (Meal Deal)</p>
                            <div className="flex gap-4 flex-wrap">
                              <button onClick={() => updateSlice(index, "addFries", false)}
                                className={`px-6 py-3 rounded-xl font-black border-2 transition ${!order.addFries ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                                No Fries — $6.00/slice
                              </button>
                              <button onClick={() => updateSlice(index, "addFries", true)}
                                className={`px-6 py-3 rounded-xl font-black border-2 transition ${order.addFries ? "bg-green-600 border-green-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-green-500"}`}>
                                🍟 Yes! Meal Deal — $7.00/slice
                              </button>
                            </div>
                            {order.addFries && <p className="text-yellow-400 text-xs mt-2 font-bold">✅ Fries added! Slice + Soda + Fries = $7.00</p>}
                            {!order.addFries && <p className="text-gray-400 text-xs mt-2">Slice + Soda can of your choice included = $6.00</p>}
                          </div>
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
                          {order.type && (
                            <div className="mt-5 bg-zinc-900 rounded-xl p-4">
                              <p className="text-yellow-400 font-black text-sm uppercase mb-3">Slice Order #{index + 1} Summary</p>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-white">🍕 {order.type} Slice x {order.quantity}</span>
                                <span className="text-red-400 font-bold">${(6 * order.quantity).toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-white">🥤 Soda Can x {order.quantity} <span className="text-green-400">(included)</span></span>
                                <span className="text-green-400 font-bold">FREE</span>
                              </div>
                              {order.addFries && (
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="text-white">🍟 Fries x {order.quantity}</span>
                                  <span className="text-yellow-400 font-bold">+${(1 * order.quantity).toFixed(2)}</span>
                                </div>
                              )}
                              {order.toppings.length > 0 && (
                                <div>
                                  <div className="flex justify-between text-sm mb-1 mt-1">
                                    <span className="text-white">🧄 {order.toppings.length} topping{order.toppings.length > 1 ? "s" : ""} x $0.50 x {order.quantity}</span>
                                    <span className="text-green-400 font-bold">+${(order.toppings.length * 0.50 * order.quantity).toFixed(2)}</span>
                                  </div>
                                  <p className="text-gray-400 text-xs mb-1">{order.toppings.join(", ")}</p>
                                </div>
                              )}
                              <div className="border-t border-zinc-700 mt-3 pt-3 flex justify-between">
                                <span className="text-white font-black text-sm">Estimated Total</span>
                                <span className="text-yellow-400 font-black text-lg">
                                  ${((order.addFries ? 7 : 6) * order.quantity + (order.toppings.length * 0.50 * order.quantity)).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      <button onClick={addSliceOrder} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg py-4 rounded-2xl transition mt-2">➕ Add Another Slice Order</button>
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
              <button onClick={() => setCalzoneOpen(!calzoneOpen)} className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition">
                <span className="text-4xl">🫓</span>
                <span className="text-3xl font-black text-white uppercase tracking-widest">Calzone Wrap</span>
                <span className="text-3xl text-white">{calzoneOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {calzoneOpen && (
              <div>
                <p className="text-center text-gray-400 text-lg italic mb-4 max-w-3xl mx-auto">Delicious calzone wrapped in our butter crust with melted mozzarella cheese and signature pizza sauce</p>
                <p className="text-center text-yellow-400 font-bold mb-10">Additional toppings: <span className="text-green-400">$0.75 each</span></p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {[
                    { img: "calzone.jpg", name: "Chicken Club", desc: "Signature pizza sauce, chicken breast, bacon, fresh tomatoes & Bermuda onions." },
                    { img: "calzon1.jpg", name: "Vegetarian", desc: "Signature pizza sauce, onions, fresh mushrooms, green peppers & spinach." },
                    { img: "calzon1.jpg", name: "Signature\u2019s Choice", desc: "Choose any four ingredients your way, wrapped in our golden buttery calzone crust." },
                    { img: "calzon1.jpg", name: "Signature Wrap", desc: "Signature pizza sauce with pepperoni, Italian sausage, onion, fresh mushrooms, green peppers & black olive layer of melted mozzarella cheese." },
                    { img: "calzone.jpg", name: "Cheese Wrap", desc: "Signature pizza sauce & layer of melted mozzarella cheese." },
                    { img: "calzone.jpg", name: "Italian Sausage Wrap", desc: "Signature pizza sauce with sausage, fresh mushroom & green pepper layer of melted mozzarella cheese." },
                  ].map((item) => {
                    const itemToppings = calzoneToppings[item.name] || [];
                    const extraCharge = itemToppings.length * 0.75;
                    const total = 11.99 + extraCharge;
                    return (
                      <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                        <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-bold text-yellow-400">{item.name}</h3>
                            <span className="text-xl font-bold text-red-500">$11.99</span>
                          </div>
                          <p className="text-gray-300 text-sm mb-4">{item.desc}</p>

                          {/* TOPPINGS */}
                          <div className="mb-4">
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🧄 Add Toppings</p>
                            <p className="text-yellow-400 text-xs mb-3">$0.75 each</p>
                            <div className="grid grid-cols-2 gap-1">
                              {toppings.map((topping) => (
                                <button key={topping} onClick={() => toggleCalzoneTopping(item.name, topping)}
                                  className={`px-2 py-1 rounded-lg text-xs font-bold border transition text-left ${itemToppings.includes(topping) ? "bg-green-600 border-green-600 text-white" : "bg-zinc-800 border-zinc-700 text-gray-300 hover:border-green-500"}`}>
                                  {itemToppings.includes(topping) ? "✅ " : "➕ "}{topping}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* SUMMARY */}
                          {itemToppings.length > 0 && (
                            <div className="bg-zinc-800 rounded-xl p-3">
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-white">Base Price</span>
                                <span className="text-red-400 font-bold">$11.99</span>
                              </div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-white">🧄 {itemToppings.length} topping{itemToppings.length > 1 ? "s" : ""} x $0.75</span>
                                <span className="text-green-400 font-bold">+${extraCharge.toFixed(2)}</span>
                              </div>
                              <p className="text-gray-400 text-xs mb-2">{itemToppings.join(", ")}</p>
                              <div className="border-t border-zinc-700 pt-2 flex justify-between">
                                <span className="text-white font-black text-xs">Total</span>
                                <span className="text-yellow-400 font-black text-sm">${total.toFixed(2)}</span>
                              </div>
                              <button onClick={() => setCalzoneToppings(prev => ({ ...prev, [item.name]: [] }))}
                                className="mt-2 text-xs text-red-400 hover:text-red-300 font-bold">🔄 Reset</button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          {/* END CALZONE WRAP */}

          {/* ── BONE-IN WINGS ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button onClick={() => setBoneInOpen(!boneInOpen)} className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition">
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
                        {[["6 pcs","1 Flavor & 1 Dip","$7.99"],["10 pcs","1 Flavor & 1 Dip","$10.99"],["15 pcs","2 Flavors & 2 Dips","$15.99"],["20 pcs","2 Flavors & 2 Dips","$20.99"],["35 pcs","3 Flavors & 3 Dips","$35.99"],["50 pcs","5 Flavors & 5 Dips","$50.99"],["75 pcs","7 Flavors & 7 Dips","$75.99"]].map(([pcs, desc, price], i, arr) => (
                          <div key={pcs} className={`flex justify-between items-center py-4 ${i < arr.length - 1 ? "border-b border-zinc-700" : ""}`}>
                            <div><span className="text-2xl font-bold text-yellow-400">{pcs}</span><span className="text-gray-400 ml-3">{desc}</span></div>
                            <span className="text-2xl font-bold text-red-500">{price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="bg-zinc-800 rounded-2xl p-6">
                          <h5 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">🌶️ Choice of Flavors</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Spicy","Mild","Garlic","Spicy Garlic","BBQ","Honey BBQ","Teriyaki","Lemon Pepper","Suicide"].map(f => (
                              <span key={f} className="bg-zinc-700 text-yellow-400 font-bold px-4 py-2 rounded-full text-sm">{f}</span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-zinc-800 rounded-2xl p-6">
                          <h5 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">🥣 Dipping Sauce</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Ranch","Blue Cheese"].map(s => (
                              <span key={s} className="bg-zinc-700 text-yellow-400 font-bold px-4 py-2 rounded-full text-sm">{s}</span>
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
              <button onClick={() => setBonelessOpen(!bonelessOpen)} className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition">
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
                        {[["7 pcs","1 Flavor & 1 Dip","$7.99"],["15 pcs","2 Flavors & 2 Dips","$15.99"],["25 pcs","2 Flavors & 2 Dips","$25.99"],["35 pcs","3 Flavors & 3 Dips","$35.99"],["50 pcs","5 Flavors & 5 Dips","$50.99"],["75 pcs","6 Flavors & 7 Dips","$75.99"]].map(([pcs, desc, price], i, arr) => (
                          <div key={pcs} className={`flex justify-between items-center py-4 ${i < arr.length - 1 ? "border-b border-zinc-700" : ""}`}>
                            <div><span className="text-2xl font-bold text-yellow-400">{pcs}</span><span className="text-gray-400 ml-3">{desc}</span></div>
                            <span className="text-2xl font-bold text-red-500">{price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="bg-zinc-800 rounded-2xl p-6">
                          <h5 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">🌶️ Choice of Flavors</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Spicy","Mild","Garlic","Spicy Garlic","BBQ","Honey BBQ","Teriyaki","Lemon Pepper","Suicide"].map(f => (
                              <span key={f} className="bg-zinc-700 text-yellow-400 font-bold px-4 py-2 rounded-full text-sm">{f}</span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-zinc-800 rounded-2xl p-6">
                          <h5 className="text-xl font-black text-red-500 uppercase tracking-widest mb-4">🥣 Dipping Sauce</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Ranch","Blue Cheese"].map(s => (
                              <span key={s} className="bg-zinc-700 text-yellow-400 font-bold px-4 py-2 rounded-full text-sm">{s}</span>
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
              <button onClick={() => setPastaOpen(!pastaOpen)} className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition">
                <span className="text-4xl">🍝</span>
                <span className="text-3xl font-black text-white uppercase tracking-widest">Pasta</span>
                <span className="text-3xl text-white">{pastaOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {pastaOpen && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-4">
                {[
                  { img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1200&auto=format&fit=crop", name: "Chicken Cavatappi", desc: "Olive oil, chicken breast, sauteed spinach, mushrooms, red onions topped with parmesan and parsley." },
                  { img: "m.jpg", name: "Mostaccioli w/ Marinara", desc: "Traditional mostaccioli with marinara topped with parmesan and parsley." },
                  { img: "bm.jpg", name: "Baked Mostaccioli w/ Mozzarella", desc: "Mostaccioli, marinara, mozzarella baked to perfection, topped with parmesan and parsley." },
                  { img: "https://images.unsplash.com/photo-1645112411341-6c4fd023882f?q=80&w=1200&auto=format&fit=crop", name: "Alfredo Cavatappi w/ Chicken", desc: "Cavatappi noodles, chicken breast, mushrooms and spinach, topped with parmesan cheese and parsley." },
                  { img: "https://images.unsplash.com/photo-1612369997610-a07a4b9e8a0c?q=80&w=1200&auto=format&fit=crop", name: "Alfredo Cavatappi", desc: "Cavatappi noodles, alfredo sauce baked to perfection, topped with parmesan and parsley." },
                  { img: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=1200&auto=format&fit=crop", name: "Tomato Cream Penne", desc: "Penne pasta baked in creamy alfredo, marinara topped with parmesan and parsley." },
                ].map((item) => (
                  <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                    <img src={item.img} alt={item.name} className="h-64 w-full object-cover" />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-2xl font-bold text-yellow-400">{item.name}</h3>
                        <span className="text-2xl font-bold text-red-500">$9.99</span>
                      </div>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* END PASTA */}

          {/* ── MAC & CHEESE ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 max-w-7xl mx-auto mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button onClick={() => setMacOpen(!macOpen)} className="flex items-center gap-4 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl transition">
                <span className="text-4xl">🧀</span>
                <span className="text-3xl font-black text-white uppercase tracking-widest">Mac &amp; Cheese</span>
                <span className="text-3xl text-white">{macOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {macOpen && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-4">
                {[
                  { img: "https://images.unsplash.com/photo-1548340748-6811e9f45f0a?q=80&w=1200&auto=format&fit=crop", name: "Buffalo Chicken Mac", desc: "Chopped chicken breast, Bermuda onions, and our signature spicy sauce, smothered in mozzarella and cheddar." },
                  { img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop", name: "Double BFT", desc: "Mound of bacon piled on top of feta, tomato, smothered in mozzarella and cheddar." },
                  { img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1200&auto=format&fit=crop", name: "Signature\u2019s Choice", desc: "Four delicious toppings (your choice) smothered in mozzarella and cheddar." },
                  { img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1200&auto=format&fit=crop", name: "BBQ Mac", desc: "BBQ covered bacon, Bermuda onions, cilantro smothered in mozzarella and cheddar." },
                  { img: "https://images.unsplash.com/photo-1612407219897-7f6ae2748668?q=80&w=1200&auto=format&fit=crop", name: "Mac n Cheese", desc: "Classic mac smothered in mozzarella and cheddar." },
                  { img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop", name: "Alfredo Mac", desc: "Creamy alfredo sauce tossed with fresh mushrooms and spinach." },
                  { img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop", name: "Burger Mac", desc: "Ground beef, onions, fresh tomato, mushrooms smothered in mozzarella and cheddar." },
                ].map((item) => (
                  <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                    <img src={item.img} alt={item.name} className="h-64 w-full object-cover" />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-2xl font-bold text-yellow-400">{item.name}</h3>
                        <span className="text-2xl font-bold text-red-500">$9.99</span>
                      </div>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* END MAC & CHEESE */}

        </div>
        {/* END AMERICAN MENU */}

        {/* ══ MEDITERRANEAN MENU ══ */}
        <div id="mediterranean-menu" className="mb-24">
          <h3 className="text-5xl font-black text-yellow-400 text-center mb-10 uppercase">Mediterranean Menu</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              { img: "chicken over rice.jpg", name: "Chicken Over Rice", price: "$12.99", desc: "Seasoned grilled chicken served over fragrant basmati rice with white sauce and hot sauce." },
              { img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1200&auto=format&fit=crop", name: "Lamb Over Rice", price: "$14.99", desc: "Tender spiced lamb over fluffy basmati rice with creamy white sauce and house hot sauce." },
              { img: "gyro.jpg", name: "Chicken Gyro", price: "$11.99", desc: "Grilled chicken, fresh veggies and garlic sauce wrapped in warm pita bread." },
              { img: "gyro.jpg", name: "Lamb Gyro", price: "$13.99", desc: "Slow-roasted seasoned lamb with fresh tomatoes, onions and tzatziki in warm pita." },
              { img: "https://i.cdn.newsbytesapp.com/images/l82920240716142709.jpeg", name: "Falafel Gyro", price: "$10.99", desc: "Crispy golden falafel with fresh veggies, hummus and tahini wrapped in soft pita." },
              { img: "c philly.jpg", name: "Chicken Philly", price: "$12.99", desc: "Grilled chicken with sauteed peppers, onions and melted cheese on a toasted hoagie roll." },
              { img: "philly.jpg", name: "Philly Cheesesteak", price: "$13.99", desc: "Thinly sliced ribeye steak with sauteed onions, peppers and gooey melted cheese on a hoagie roll." },
            ].map((item) => (
              <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src={item.img} alt={item.name} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-yellow-400">{item.name}</h3>
                    <span className="text-2xl font-bold text-red-500">{item.price}</span>
                  </div>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* END MEDITERRANEAN MENU */}

        {/* ══ DESI MENU ══ */}
        <div id="desi-menu" className="py-20 bg-black text-white px-6">
          <h2 className="text-5xl font-bold text-center text-red-600 mb-14">Desi Menu</h2>
          <p className="text-center text-gray-300 text-xl mb-16 italic">Where Every Bite Tells A Story</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              { img: "korma.jpg", name: "Chicken Korma", price: "$13.99", desc: "Creamy traditional curry cooked with aromatic spices and rich flavor." },
              { img: "karahi.jpg", name: "Chicken Karahi", price: "$14.99", desc: "Fresh tomato-based karahi cooked with ginger, garlic and desi spices." },
              { img: "chana daal.jpg", name: "Daal Chana", price: "$10.99", desc: "Slow-cooked chana daal seasoned with traditional Pakistani spices." },
              { img: "malai boti.jpg", name: "Chicken Malai Boti", price: "$15.99", desc: "Creamy grilled chicken cubes marinated with cheese and mild spices." },
              { img: "butter chicken.jpg", name: "Butter Chicken", price: "$14.99", desc: "Tender chicken simmered in rich buttery tomato cream sauce." },
              { img: "tikka.jpg", name: "Chicken Tikka", price: "$13.99", desc: "Charcoal grilled tikka marinated in yogurt and traditional spices." },
              { img: "nihari.jpg", name: "Lamb Nihari", price: "$16.99", desc: "Slow-cooked traditional desi curry packed with bold authentic flavor." },
              { img: "biryani.jpg", name: "Signature Biryani", price: "$15.99", desc: "Aromatic basmati rice layered with rich spices and tender meat." },
            ].map((item) => (
              <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
                <img src={item.img} alt={item.name} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-3xl font-bold text-yellow-400">{item.name}</h3>
                    <span className="text-2xl font-bold text-red-500">{item.price}</span>
                  </div>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* END DESI MENU */}

      </section>

      {/* STARTERS */}
      <section id="starters" className="py-20 bg-black text-white px-6">
        <h2 className="text-6xl font-black text-center text-red-600 mb-6 uppercase">Starters</h2>
        <p className="text-center text-gray-400 text-xl mb-16 italic">Freshly Prepared Favorites To Start Your Meal</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { img: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?q=80&w=1200&auto=format&fit=crop", name: "Mozzarella Sticks", price: "$7.99", desc: "Crispy breaded mozzarella sticks served with marinara sauce for dipping." },
            { img: "toasted.jpg", name: "Toasted Ravioli", price: "$8.99", desc: "Breaded ravioli fried crispy and served with marinara." },
            { img: "poppers.jpg", name: "Jalapeno Poppers", price: "$7.99", desc: "Fresh jalapenos stuffed with creamy cheese, breaded, and fried until perfectly crunchy." },
            { img: "g knots.jpg", name: "Garlic Knots", price: "$5.99", desc: "Soft, oven-baked dough knots brushed with garlic butter and herbs. Served with marinara." },
            { img: "bosco.jpg", name: "Bosco Sticks", price: "$7.99", desc: "Warm breadsticks stuffed with melted mozzarella, brushed with garlic butter. Served with marinara." },
            { img: "fries1.jpg", name: "Fries", price: "$3.99", desc: "Crispy golden fries cooked fresh to order. Lightly salted and perfectly crunchy." },
            { img: "season f.jpg", name: "Seasoned Fries", price: "$4.99", desc: "Crispy fries tossed in our special house seasoning blend for bold flavor in every bite." },
            { img: "cheese f.jpg", name: "Cheesy Fries", price: "$5.99", desc: "Our hot, crispy fries topped with rich melted cheese for a creamy, savory upgrade." },
            { img: "cgb.jpg", name: "Cheese Garlic Bread", price: "$6.99", desc: "Freshly made bread with garlic butter sauce topped with mozzarella cheese, baked and served with marinara." },
          ].map((item) => (
            <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src={item.img} alt={item.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">{item.name}</h3><span className="text-red-500 font-bold">{item.price}</span></div>
                <p className="text-gray-300 mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SALADS */}
      <section id="salads" className="py-20 bg-zinc-950 text-white px-6">
        <h2 className="text-5xl font-bold text-center text-green-500 mb-6">Salads</h2>
        <p className="text-center text-yellow-400 text-2xl font-bold mb-4">Individual $9.99 • Family $19.99 • Party $32.99</p>
        <p className="text-center text-gray-300 text-lg max-w-4xl mx-auto mb-14">All Salads Are Served With Your Choice Of Dressing: Ranch, Italian, Caesar, Blue Cheese, Balsamic Vinaigrette, or Honey Mustard.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { img: "https://superbrecipe.com/wp-content/uploads/2025/07/Chicken-Caesar-Salad-1.png", name: "Classic Chicken Caesar Salad", desc: "Romaine lettuce, fresh parmesan, asiago cheese, croutons and fresh tomatoes topped with marinated chicken." },
            { img: "g salad.jpg", name: "Garden Salad", desc: "Romaine lettuce, fresh tomatoes, bermuda onions, fresh mushrooms, green peppers." },
            { img: "salad1.jpg", name: "Classic Caesar Salad", desc: "Romaine lettuce, fresh parmesan, asiago cheese, croutons and fresh tomatoes." },
            { img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop", name: "Chopped Chicken Salad", desc: "Romaine lettuce, mozzarella cheese, bermuda onions, bacon, chicken." },
            { img: "sig salad.jpg", name: "Signature House Salad", desc: "Romaine lettuce with artichoke hearts, green peppers, kalamata olives, fresh tomatoes, onions and feta cheese." },
          ].map((item) => (
            <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
              <img src={item.img} alt={item.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-400">{item.name}</h3>
                <p className="text-gray-300 mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
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
                <span>{name}</span><span className="text-red-500 font-bold">{price}</span>
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
          {[
            { img: "g j.jpg", name: "Gulab Jamun", price: "$4.99", desc: "Soft, golden milk-solid dumplings slow-fried to perfection and soaked in a warm rose-scented sugar syrup. A classic South Asian dessert that melts in your mouth." },
            { img: "k.jpg", name: "Kulfi", price: "$5.99", desc: "A rich, dense South Asian frozen dessert infused with saffron, rose water and crushed pistachios. Far richer than regular ice cream — a timeless desi classic." },
            { img: "cannoli.jpg", name: "Cannoli", price: "$4.99", desc: "Traditional Italian cannoli. Tube-shaped fried pastry dough with a sweet cream ricotta cheese filling." },
            { img: "bk.jpg", name: "Baklava", price: "$4.99", desc: "Layers of crispy golden phyllo pastry filled with pistachios and walnuts, drenched in fragrant honey syrup. Sweet, flaky and utterly indulgent." },
            { img: "c cake.jpg", name: "Cheesecake", price: "$5.99", desc: "New York Style Cheesecake With Graham Cracker Crust." },
            { img: "ch cake.jpg", name: "Chocolate Cake", price: "$5.99", desc: "Layers of chocolate cake filled and topped with fudge." },
          ].map((item) => (
            <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition">
              <img src={item.img} alt={item.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between"><h3 className="text-2xl font-bold text-yellow-400">{item.name}</h3><span className="text-red-500 font-bold">{item.price}</span></div>
                <p className="text-gray-300 mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
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
              <p className="text-gray-300 text-xl leading-relaxed mb-6">Our founders brought together decades of culinary passion spanning three rich food traditions — American comfort food, Mediterranean freshness, and bold Desi flavors — all under one roof.</p>
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
            {[
              { img: "https://images.stockcake.com/public/1/c/4/1c49fbfa-af29-4652-b98e-f2a791d4cd35_large/pizza-dough-toss-stockcake.jpg", title: "Hand-Crafted Pizzas", desc: "Every pizza is hand-tossed, sauced and topped fresh to order. Our dough is made in-house daily for that perfect crispy-yet-chewy crust." },
              { img: "https://images.stockcake.com/public/5/6/f/56f7479e-5d83-4d7f-9744-adb0a161f78b_large/spices-meet-heat-stockcake.jpg", title: "Slow-Cooked Desi Flavors", desc: "Our Nihari simmers for hours. Our Biryani is layered and dum-cooked to perfection. Authentic recipes passed down through generations, made fresh every day." },
              { img: "https://www.aspicyperspective.com/wp-content/uploads/2023/11/Buffalo-Wing-Sauce-11.jpg", title: "Fresh Wings Daily", desc: "Our bone-in and boneless wings are made fresh daily — never frozen. Tossed in your choice of signature flavors and served with house-made dipping sauces." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={item.img} alt={item.title} className="w-full h-72 object-cover" />
                <div className="bg-zinc-900 p-6">
                  <h4 className="text-2xl font-bold text-yellow-400 mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-zinc-900 rounded-3xl p-12 mb-24">
            <h3 className="text-5xl font-black text-white uppercase text-center mb-12">What We Serve</h3>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                { icon: "🍕", title: "American Menu", desc: "Hand-tossed pizzas, calzone wraps, crispy wings, pasta, mac & cheese and starters. Classic American comfort food made fresh with bold flavors." },
                { icon: "🌯", title: "Mediterranean Menu", desc: "Chicken and lamb gyros, over-rice platters, falafel, Philly cheesesteaks and chicken phillies. Fresh Mediterranean flavors prepared with care." },
                { icon: "🍛", title: "Desi Menu", desc: "Slow-cooked Nihari, aromatic Biryani, Chicken Karahi, Butter Chicken, Malai Boti and more. Authentic South Asian cuisine crafted with traditional spices." },
              ].map((item) => (
                <div key={item.title}>
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h4 className="text-2xl font-black text-yellow-400 mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20250310/pngtree-sharing-a-meal-hands-reaching-for-food-on-rustic-wooden-table-image_17087487.jpg" alt="Community Dining" className="w-full h-96 object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl font-black text-yellow-400 mb-6 leading-tight">Serving the Indiana Community</h3>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">Located at 7233 Fishers Landing Dr in Fishers, Indiana, Spice &amp; Bites Hub is proud to be part of this incredible community. We serve families, professionals, students and food lovers of all backgrounds.</p>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">Whether you are stopping in for a late-night slice, ordering wings for the big game, or sitting down for a hearty Desi meal with the family — our doors are open seven days a week from 11 AM to midnight.</p>
              <p className="text-gray-300 text-xl leading-relaxed">We are not just feeding appetites. We are building memories, one plate at a time. Thank you, Indiana, for welcoming us into your community.</p>
              <div className="mt-10">
                <a href="tel:9514546896" className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-xl text-xl font-bold transition inline-block">📞 Call to Order — 951-454-6896</a>
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