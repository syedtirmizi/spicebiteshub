"use client";
import { useState, useEffect, useRef } from "react";

function ToppingGrid({ selectedToppings, onToggle, toppingList }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {toppingList.map((topping) => (
        <button key={topping} onClick={() => onToggle(topping)}
          className={`px-2 py-2 rounded-lg text-xs font-bold border-2 transition text-left ${selectedToppings.includes(topping) ? "bg-green-600 border-green-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-green-500"}`}>
          {selectedToppings.includes(topping) ? "✅ " : "➕ "}{topping}
        </button>
      ))}
    </div>
  );
}

function SpecialRequests({ value, onChange, placeholder }) {
  return (
    <div className="mt-4">
      <p className="text-white font-black uppercase tracking-widest text-xs mb-2">📝 Special Requests</p>
      <textarea value={value} onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Any special instructions? (allergies, extra sauce, cooking preference…)"}
        rows={2}
        className="w-full bg-zinc-800 border-2 border-zinc-700 focus:border-yellow-500 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 outline-none transition resize-none" />
    </div>
  );
}

// ─── Sidebar nav items ────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: "section-deals",      label: "🔥 Deals",            group: "deals"    },
  { id: "section-starters",   label: "🥗 Starters",         group: "starters" },
  { id: "section-pizza",      label: "🍕 Pizza",            group: "american" },
  { id: "section-calzone",    label: "🫓 Calzone",          group: "american" },
  { id: "section-bonein",     label: "🍗 Bone-in Wings",    group: "american" },
  { id: "section-boneless",   label: "🍗 Boneless Wings",   group: "american" },
  { id: "section-pasta",      label: "🍝 Pasta",            group: "american" },
  { id: "section-mac",        label: "🧀 Mac & Cheese",     group: "american" },
  { id: "section-desi",       label: "🍛 Pakistani & Indian Cuisine", group: "desi"     },
  { id: "section-med",        label: "🌯 Mediterranean",    group: "med"      },
  { id: "section-salads",     label: "🥙 Salads",           group: "extra"    },
  { id: "section-beverages",  label: "🥤 Beverages",        group: "extra"    },
  { id: "section-desserts",   label: "🍮 Desserts",         group: "extra"    },
  { id: "section-location",   label: "📍 Location & Hours", group: "story"    },
  { id: "section-story",      label: "📖 Our Story",        group: "story"    },
];

const GROUP_LABELS = {
  deals:    { label: "🔥 Deals",            color: "text-red-500 border-red-700"      },
  starters: { label: "🥗 Starters",         color: "text-pink-400 border-pink-700"    },
  american: { label: "🇺🇸 American",      color: "text-red-400 border-red-700"      },
  med:      { label: "🫒 Mediterranean",   color: "text-yellow-400 border-yellow-700"},
  desi:     { label: "🌿 Pakistani & Indian Cuisine", color: "text-green-400 border-green-700"  },
  extra:    { label: "🍽️ More",            color: "text-purple-400 border-purple-700"},
  story:    { label: "ℹ️ About Us",         color: "text-orange-400 border-orange-700"},
};

// ─── Location & hours ──────────────────────────────────────────────────────
const restaurantAddress = "7233 Fishers Landing Dr, Fishers, IN 46038";
const restaurantPhone = "(317) 537-2058";
const restaurantPhoneTel = "3175372058";
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=7233+Fishers+Landing+Dr+Fishers+IN+46038";
const hoursData = [
  { day: "Monday",    hours: "11:00 AM – 12:00 AM" },
  { day: "Tuesday",   hours: "11:00 AM – 12:00 AM" },
  { day: "Wednesday", hours: "11:00 AM – 12:00 AM" },
  { day: "Thursday",  hours: "11:00 AM – 12:00 AM" },
  { day: "Friday",    hours: "11:00 AM – 12:00 AM" },
  { day: "Saturday",  hours: "11:00 AM – 12:00 AM" },
  { day: "Sunday",    hours: "11:00 AM – 12:00 AM" },
];

// ─── Pizza cooking instruction options ────────────────────────────────────────
const sauceTypeOptions = ["Pizza Sauce", "White Sauce"];
const sauceAmountOptions = ["Extra Sauce", "Lite Sauce", "No Sauce"];
const bakeOptions = ["Lite Bake", "Well Done"];
const cutOptions = ["Pie Cut", "Square Cut", "Do Not Cut", "Double Cut"];

export default function Home() {
 const heroDeals = [
  { id: "family", emoji: "🍕", title: "Family Deal", price: "$34.99", desc: "16\" 1-topping pizza, cheesy garlic bread, 6pc wings & a 2 liter", img: "signature b.png" },
  { id: "twolarge", emoji: "🍕🍕", title: "2 Large 2-Topping Pizzas", price: "$31.99", desc: "Two 14\" pizzas, your choice of 2 toppings each", img: "signature p.png" },
  { id: "twomedium", emoji: "🍕🍕", title: "2 Medium 2-Topping Pizzas", price: "$22.99", desc: "Two 12\" pizzas, your choice of 2 toppings each", img: "calzone.jpg" },
];
const [slide, setSlide] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("section-pizza");
  const contentRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setSlide(s => (s + 1) % heroDeals.length), 4000);
    return () => clearInterval(interval);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: contentRef.current, rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: el.offsetTop - 16, behavior: "smooth" });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setMobileNavOpen(false);
  };

  // ── Wing state ──────────────────────────────────────────────────────────────
  const wingFlavors = ["Spicy", "Mild", "Garlic", "Spicy Garlic", "BBQ", "Honey BBQ", "Teriyaki", "Lemon Pepper", "Suicide"];
  const wingDips = ["Ranch", "Blue Cheese"];
  const boneInSizes = [
    { pcs: "6 pcs",  desc: "1 Flavor & 1 Dip",   price: 7.99,  maxFlavors: 1, maxDips: 1 },
    { pcs: "10 pcs", desc: "1 Flavor & 1 Dip",   price: 10.99, maxFlavors: 1, maxDips: 1 },
    { pcs: "15 pcs", desc: "2 Flavors & 2 Dips", price: 15.99, maxFlavors: 2, maxDips: 2 },
    { pcs: "20 pcs", desc: "2 Flavors & 2 Dips", price: 20.99, maxFlavors: 2, maxDips: 2 },
    { pcs: "35 pcs", desc: "3 Flavors & 3 Dips", price: 35.99, maxFlavors: 3, maxDips: 3 },
    { pcs: "50 pcs", desc: "5 Flavors & 5 Dips", price: 50.99, maxFlavors: 5, maxDips: 5 },
    { pcs: "75 pcs", desc: "7 Flavors & 7 Dips", price: 75.99, maxFlavors: 7, maxDips: 7 },
  ];
  const bonelessSizes = [
    { pcs: "7 pcs",  desc: "1 Flavor & 1 Dip",   price: 7.99,  maxFlavors: 1, maxDips: 1 },
    { pcs: "15 pcs", desc: "2 Flavors & 2 Dips", price: 15.99, maxFlavors: 2, maxDips: 2 },
    { pcs: "25 pcs", desc: "2 Flavors & 2 Dips", price: 25.99, maxFlavors: 2, maxDips: 2 },
    { pcs: "35 pcs", desc: "3 Flavors & 3 Dips", price: 35.99, maxFlavors: 3, maxDips: 3 },
    { pcs: "50 pcs", desc: "5 Flavors & 5 Dips", price: 50.99, maxFlavors: 5, maxDips: 5 },
    { pcs: "75 pcs", desc: "7 Flavors & 7 Dips", price: 75.99, maxFlavors: 7, maxDips: 7 },
  ];
  const emptyWingOrder = { size: null, flavors: [], dips: {}, notes: "" };
  const [boneInOrder, setBoneInOrder] = useState({ ...emptyWingOrder });
  const [bonelessOrder, setBonelessOrder] = useState({ ...emptyWingOrder });
  const extraDipCharge = 0.75;
  const toggleWingFlavor = (order, setOrder, maxFlavors, flavor) => {
    setOrder(prev => {
      if (prev.flavors.includes(flavor)) return { ...prev, flavors: prev.flavors.filter(f => f !== flavor) };
      if (prev.flavors.length >= maxFlavors) return prev;
      return { ...prev, flavors: [...prev.flavors, flavor] };
    });
  };
  const updateWingDipQty = (setOrder, dip, delta) => {
    setOrder(prev => {
      const current = prev.dips || {};
      const qty = Math.max(0, (current[dip] || 0) + delta);
      const next = { ...current };
      if (qty === 0) { delete next[dip]; } else { next[dip] = qty; }
      return { ...prev, dips: next };
    });
  };
  const wingDipTotalQty = (order) => Object.values(order.dips || {}).reduce((s, q) => s + q, 0);
  const wingDipExtraCharge = (order) => Math.max(0, wingDipTotalQty(order) - (order.size?.maxDips || 0)) * extraDipCharge;

  // ── Pizza state ─────────────────────────────────────────────────────────────
  const buildSizes = [
    { size: '10"', price: "$9.99" }, { size: '12"', price: "$11.99" },
    { size: '14"', price: "$13.99" }, { size: '16"', price: "$15.99" }, { size: '24"', price: "$25.99" },
  ];
  const specSizes = [
    { size: '10"', price: "$11.99" }, { size: '12"', price: "$12.99" },
    { size: '14"', price: "$15.99" }, { size: '16"', price: "$17.99" },
  ];
  const toppingPrices = { '10"': "$1.25", '12"': "$1.75", '14"': "$2.25", '16"': "$2.75", '24"': "$3.75" };
  const crustTypes = ["Thin Crust", "Traditional"];
  const toppings = [
    "Artichoke Hearts","Asiago Cheese","Banana Peppers","BBQ Sauce","Bermuda Onions","Black Olives",
    "Canadian Ham","Cheese Feta","Fresh Garlic","Fresh Mushrooms","Fresh Tomatoes","Giardiniera Peppers",
    "Green Olives","Green Peppers","Chicken","Italian Sausage","Jalapeno Peppers","Kalamata Olives",
    "Lean Ground Beef","Pepperoni","Smoked Bacon","Spinach Leaves","Sweet Pineapple","White Onions"
  ];
  const specialtyPizzas = [
    { name: "Pepperoni Pizza", img: "pep pizza.jpg", desc: "Signature pizza sauce with pepperoni, melted mozzarella." },
    { name: "Signature Pizza", img: "signature p.png", desc: "Pepperoni, sausage, onion, mushrooms, green peppers & black olive." },
    { name: "Double Sausage & Double Pepperoni", img: "psp.jpg", desc: "Double sausage & double pepperoni, melted mozzarella." },
    { name: "Buffalo Chicken Pizza", img: "buffalo chicken pizza.jpg", desc: "Hot sauce, Bermuda onions & fresh chicken, melted mozzarella." },
    { name: "Special Sausage Pizza", img: "spec s p.png", desc: "Sausage, fresh mushroom & green pepper, melted mozzarella." },
    { name: "Meat Lovers Pizza", img: "meat lovers.jpg", desc: "Sausage, pepperoni, Canadian bacon, melted mozzarella." },
    { name: "Vegetarian Pizza", img: "veg p.jpg", desc: "Onion, mushrooms, green peppers & spinach, melted mozzarella." },
    { name: "Chicken Tikka Pizza", img: "https://flavorry.com/wp-content/uploads/2025/09/teamgreen1001_httpss.mj_.run9zT8Sikxhn8_An_ultra-close-up_AND__ecff3b71-758f-4b56-a1ea-7797418d9935_1.png", desc: "Garlic sauce, marinated chicken, melted mozzarella." },
    { name: "Lamb Pizza", img: "lamb pizza.jpg", desc: "Garlic sauce, lamb, melted mozzarella." },
    { name: "Tropical Hawaiian Pizza", img: "tropical h.png", desc: "Signature pizza sauce, Canadian ham, sweet pineapple, melted mozzarella." },
    { name: "Customer's Choice Pizza", img: "cheese pizza.jpg", desc: "Choose any four toppings your way, melted mozzarella." },
    { name: "Tuscan Delight Pizza", img: "tuscan d.png", desc: "Spinach, sun-dried tomatoes, fresh garlic & feta cheese, melted mozzarella." },
    { name: "Chicken Club Pizza", img: "chicken c.png", desc: "Chicken, smoked bacon, fresh tomatoes & Bermuda onions, melted mozzarella." },
    { name: "BBQ Chicken Pizza", img: "bbq c.png", desc: "BBQ sauce, chicken, Bermuda onions, melted mozzarella." },
  ];
  const emptyBuild = { size: "", crust: "", isHalf: false, toppings: [], half1Toppings: [], half2Toppings: [], sauceType: "", sauceAmount: "", bake: "", cut: "", notes: "" };
  const [buildOrders, setBuildOrders] = useState([{ ...emptyBuild }]);
  const updateBuild = (i, f, v) => setBuildOrders(p => p.map((o, idx) => idx === i ? { ...o, [f]: v } : o));
  const toggleBuildTopping = (i, t) => setBuildOrders(p => p.map((o, idx) => idx === i ? { ...o, toppings: o.toppings.includes(t) ? o.toppings.filter(x => x !== t) : [...o.toppings, t] } : o));
  const toggleBuildHalfTopping = (i, half, t) => setBuildOrders(p => p.map((o, idx) => idx === i ? { ...o, [half]: o[half].includes(t) ? o[half].filter(x => x !== t) : [...o[half], t] } : o));

  const emptySpec = { name: "", name2: "", size: "", crust: "", isHalf: false, toppings: [], sauceType: "", sauceAmount: "", bake: "", cut: "", notes: "" };
  const [specOrders, setSpecOrders] = useState([{ ...emptySpec }]);
  const updateSpec = (i, f, v) => setSpecOrders(p => p.map((o, idx) => idx === i ? { ...o, [f]: v } : o));
  const toggleSpecTopping = (i, t) => setSpecOrders(p => p.map((o, idx) => idx === i ? { ...o, toppings: o.toppings.includes(t) ? o.toppings.filter(x => x !== t) : [...o.toppings, t] } : o));

  const sliceTypes = ["Cheese", "Pepperoni", "Sausage"];
  const emptySlice = { type: "", quantity: 1, toppings: [], addFries: false, notes: "" };
  const [sliceOrders, setSliceOrders] = useState([{ ...emptySlice }]);
  const updateSlice = (i, f, v) => setSliceOrders(p => p.map((o, idx) => idx === i ? { ...o, [f]: v } : o));
  const toggleSliceTopping = (i, t) => setSliceOrders(p => p.map((o, idx) => idx === i ? { ...o, toppings: o.toppings.includes(t) ? o.toppings.filter(x => x !== t) : [...o.toppings, t] } : o));

  // ── Deals: Family Deal ──────────────────────────────────────────────────────
  const familyDealPrice = 34.99;
  const familyDealToppingRate = parseFloat((toppingPrices['16"'] || "$0").replace("$", ""));
  const dealBeverageOptions = ["2 Liter", "6-Pack Cans"];
  const emptyFamilyDeal = { crust: "", toppings: [], sauceType: "", sauceAmount: "", bake: "", cut: "", wingFlavor: "", dipSauce: "", beverage: "", notes: "" };
  const [familyDealOrders, setFamilyDealOrders] = useState([{ ...emptyFamilyDeal }]);
  const updateFamilyDeal = (i, f, v) => setFamilyDealOrders(p => p.map((o, idx) => idx === i ? { ...o, [f]: v } : o));
  const toggleFamilyDealTopping = (i, t) => setFamilyDealOrders(p => p.map((o, idx) => idx === i ? { ...o, toppings: o.toppings.includes(t) ? o.toppings.filter(x => x !== t) : [...o.toppings, t] } : o));
  const familyDealExtraToppingCount = (o) => Math.max(0, o.toppings.length - 1);
  const familyDealExtraToppingCost = (o) => familyDealExtraToppingCount(o) * familyDealToppingRate;
  const familyDealTotal = (o) => familyDealPrice + familyDealExtraToppingCost(o);

  // ── Deals: 2 Large 2-Topping Pizzas ─────────────────────────────────────────
  const twoLargeDealPrice = 31.99;
  const twoLargeDealToppingRate = parseFloat((toppingPrices['14"'] || "$0").replace("$", ""));
  const emptyTwoLargePizza = { crust: "", toppings: [], sauceType: "", sauceAmount: "", bake: "", cut: "" };
  const emptyTwoLargeDeal = { pizza1: { ...emptyTwoLargePizza }, pizza2: { ...emptyTwoLargePizza }, notes: "" };
  const [twoLargeDealOrders, setTwoLargeDealOrders] = useState([{ ...emptyTwoLargeDeal }]);
  const updateTwoLargePizza = (orderIndex, pizzaKey, field, value) => setTwoLargeDealOrders(p => p.map((o, idx) => idx === orderIndex ? { ...o, [pizzaKey]: { ...o[pizzaKey], [field]: value } } : o));
  const toggleTwoLargeTopping = (orderIndex, pizzaKey, topping) => setTwoLargeDealOrders(p => p.map((o, idx) => idx === orderIndex ? { ...o, [pizzaKey]: { ...o[pizzaKey], toppings: o[pizzaKey].toppings.includes(topping) ? o[pizzaKey].toppings.filter(t => t !== topping) : [...o[pizzaKey].toppings, topping] } } : o));
  const updateTwoLargeNotes = (orderIndex, value) => setTwoLargeDealOrders(p => p.map((o, idx) => idx === orderIndex ? { ...o, notes: value } : o));
  const twoLargePizzaExtraCount = (pizza) => Math.max(0, pizza.toppings.length - 2);
  const twoLargePizzaExtraCost = (pizza) => twoLargePizzaExtraCount(pizza) * twoLargeDealToppingRate;
  const twoLargeDealExtraCost = (o) => twoLargePizzaExtraCost(o.pizza1) + twoLargePizzaExtraCost(o.pizza2);
  const twoLargeDealTotal = (o) => twoLargeDealPrice + twoLargeDealExtraCost(o);

  // ── Deals: 2 Medium 2-Topping Pizzas ────────────────────────────────────────
  const twoMediumDealPrice = 22.99;
  const twoMediumDealToppingRate = parseFloat((toppingPrices['12"'] || "$0").replace("$", ""));
  const emptyTwoMediumPizza = { crust: "", toppings: [], sauceType: "", sauceAmount: "", bake: "", cut: "" };
  const emptyTwoMediumDeal = { pizza1: { ...emptyTwoMediumPizza }, pizza2: { ...emptyTwoMediumPizza }, notes: "" };
  const [twoMediumDealOrders, setTwoMediumDealOrders] = useState([{ ...emptyTwoMediumDeal }]);
  const updateTwoMediumPizza = (orderIndex, pizzaKey, field, value) => setTwoMediumDealOrders(p => p.map((o, idx) => idx === orderIndex ? { ...o, [pizzaKey]: { ...o[pizzaKey], [field]: value } } : o));
  const toggleTwoMediumTopping = (orderIndex, pizzaKey, topping) => setTwoMediumDealOrders(p => p.map((o, idx) => idx === orderIndex ? { ...o, [pizzaKey]: { ...o[pizzaKey], toppings: o[pizzaKey].toppings.includes(topping) ? o[pizzaKey].toppings.filter(t => t !== topping) : [...o[pizzaKey].toppings, topping] } } : o));
  const updateTwoMediumNotes = (orderIndex, value) => setTwoMediumDealOrders(p => p.map((o, idx) => idx === orderIndex ? { ...o, notes: value } : o));
  const twoMediumPizzaExtraCount = (pizza) => Math.max(0, pizza.toppings.length - 2);
  const twoMediumPizzaExtraCost = (pizza) => twoMediumPizzaExtraCount(pizza) * twoMediumDealToppingRate;
  const twoMediumDealExtraCost = (o) => twoMediumPizzaExtraCost(o.pizza1) + twoMediumPizzaExtraCost(o.pizza2);
  const twoMediumDealTotal = (o) => twoMediumDealPrice + twoMediumDealExtraCost(o);

  const [selectedDeal, setSelectedDeal] = useState("family");

  // ── Calzone / Pasta / Mac ───────────────────────────────────────────────────
  const [calzoneToppings, setCalzoneToppings] = useState({});
  const [calzoneNotes, setCalzoneNotes] = useState({});
  const [pastaToppings, setPastaToppings] = useState({});
  const [pastaNotes, setPastaNotes] = useState({});
  const [macToppings, setMacToppings] = useState({});
  const [macNotes, setMacNotes] = useState({});

  // ── Mediterranean ───────────────────────────────────────────────────────────
  const medItems = [
    { img: "chicken over rice.jpg", name: "Chicken Over Rice", price: 12.99, desc: "Grilled chicken over basmati rice with white & hot sauce." },
    { img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800", name: "Lamb Over Rice", price: 14.99, desc: "Spiced lamb over fluffy basmati rice." },
    { img: "gyro.jpg", name: "Chicken Gyro", price: 11.99, desc: "Grilled chicken, fresh veggies & garlic sauce in pita." },
    { img: "gyro.jpg", name: "Lamb Gyro", price: 13.99, desc: "Slow-roasted lamb with tomatoes, onions & tzatziki in pita." },
    { img: "https://i.cdn.newsbytesapp.com/images/l82920240716142709.jpeg", name: "Falafel Gyro", price: 10.99, desc: "Crispy falafel with hummus & tahini in soft pita." },
    { img: "c philly.jpg", name: "Chicken Philly", price: 12.99, desc: "Grilled chicken with peppers, onions & cheese on hoagie." },
    { img: "philly.jpg", name: "Philly Cheesesteak", price: 13.99, desc: "Ribeye steak with onions, peppers & melted cheese on hoagie." },
  ];
  const [medCart, setMedCart] = useState({});
  const [medNotes, setMedNotes] = useState("");
  const updateMedQty = (name, delta) => setMedCart(prev => { const n = Math.max(0, (prev[name] || 0) + delta); if (!n) { const r = { ...prev }; delete r[name]; return r; } return { ...prev, [name]: n }; });
  const medTotal = Object.entries(medCart).map(([name, qty]) => ({ name, qty, price: medItems.find(i => i.name === name)?.price || 0 }));

  // ── Desi ─────────────────────────────────────────────────────────────────────
  const desiItems = [
    { img:"korma.jpg",       name:"Chicken Korma",    price:15.00, desc:"Creamy curry with aromatic spices." },
    { img:"karahi.jpg",      name:"Chicken Karahi",   price:15.00, desc:"Fresh tomato-based karahi with ginger & garlic.", hasChickenOption:true },
    { img:"daal chana.png",  name:"Daal Chana",       price:11.00, desc:"Slow-cooked chana daal with Pakistani spices." },
    { img:"butter c.png", name:"Butter Chicken", price:15.00, desc:"Chicken in rich buttery tomato cream sauce." },
    { img:"nihari.png",      name:"Lamb Nihari",      price:18.00, desc:"Slow-cooked traditional desi curry." },
    { img:"signature b.png",     name:"Signature Biryani", price:16.00, desc:"Aromatic basmati layered with spices & tender meat." },
    { img:"karahi.jpg",      name:"Special Signature Karahi", price:15.00, desc:"Our chef's signature karahi — rich tomato-ginger blend of spices with tender meat.", hasChickenOption:true },
  ];
  const naanItems = [
    { img:"pn.png", name:"Plain Naan",  price:1.99, desc:"Soft, fluffy tandoor-baked flatbread." },
    { img:"gn.png", name:"Garlic Naan", price:2.49, desc:"Tandoor naan brushed with garlic butter & herbs." },
    { img:"bn.png", name:"Butter Naan", price:2.49, desc:"Naan generously brushed with melted butter." },
  ];
  const [desiCart, setDesiCart] = useState({});
  const [naanCart, setNaanCart] = useState({});
  const [desiNotes, setDesiNotes] = useState("");
  const spiceLevels = ["Mild", "Medium", "Spicy"];
  const defaultSpiceLevel = "Medium";
  const spiceLevelColors = {
    Mild:   "bg-yellow-500 border-yellow-500 text-black",
    Medium: "bg-orange-500 border-orange-500 text-white",
    Spicy:  "bg-red-600 border-red-600 text-white",
  };
  const [desiSpiceLevel, setDesiSpiceLevel] = useState({});
  const setSpiceLevel = (name, level) => setDesiSpiceLevel(prev => ({ ...prev, [name]: level }));
  const chickenTypes = ["Bone-in", "Boneless"];
  const defaultChickenType = "Bone-in";
  const bonelessUpcharge = 2.00;
  const [desiChickenType, setDesiChickenType] = useState({});
  const setChickenType = (name, type) => setDesiChickenType(prev => ({ ...prev, [name]: type }));
  const desiChickenCharge = (name) => (desiChickenType[name] || defaultChickenType) === "Boneless" ? bonelessUpcharge : 0;
  const [desiItemNotes, setDesiItemNotes] = useState({});
  const updateDesiQty = (name, delta) => setDesiCart(prev => { const n = Math.max(0, (prev[name] || 0) + delta); if (!n) { const r = { ...prev }; delete r[name]; return r; } return { ...prev, [name]: n }; });
  const updateNaanQty = (name, delta) => setNaanCart(prev => { const n = Math.max(0, (prev[name] || 0) + delta); if (!n) { const r = { ...prev }; delete r[name]; return r; } return { ...prev, [name]: n }; });
  const desiTotal = [...Object.entries(desiCart).map(([name, qty]) => {
    const item = desiItems.find(i => i.name === name);
    const chickenStr = item?.hasChickenOption ? ` (${desiChickenType[name] || defaultChickenType} Chicken)` : "";
    return { name: `${name}${chickenStr} (${desiSpiceLevel[name] || defaultSpiceLevel} Spice)`, qty, price: (item?.price || 0) + desiChickenCharge(name) };
  }), ...Object.entries(naanCart).map(([name, qty]) => ({ name, qty, price: naanItems.find(i => i.name === name)?.price || 0 }))];

  // ── Starters ─────────────────────────────────────────────────────────────────
  
    const starterItems = [
  { img:"g knots.jpg", name:"Garlic Knots", price:7.49, desc:"Made-to-order dough knots smothered in garlic butter, topped with parmesan, served with marinara.", sizes:[{ label:"6 pcs", price:7.49 }, { label:"12 pcs", price:10.99 }] },
  { img:"m sticks.jpg", name:"Mozzarella Stix", price:7.49, desc:"Battered sticks filled with mozzarella cheese, served with marinara.", sizes:[{ label:"6 pcs", price:7.49 }, { label:"12 pcs", price:10.99 }] },
  { img:"poppers.jpg", name:"Jalapeno Poppers", price:7.49, desc:"Cream cheese filled peppers, served with ranch.", sizes:[{ label:"6 pcs", price:7.49 }, { label:"12 pcs", price:10.99 }] },
  { img:"toasted.jpg", name:"Toasted Ravioli", price:7.49, desc:"Toasted Italian ravioli served with marinara sauce.", sizes:[{ label:"6 pcs", price:7.49 }, { label:"12 pcs", price:10.99 }] },
  { img:"bosco.jpg", name:"Bosco Breadsticks", price:7.99, desc:"Breadsticks stuffed with mozzarella cheese, topped with garlic butter & parmesan, served with a side of marinara.", sizes:[{ label:"6 pcs", price:7.99 }, { label:"8 pcs", price:10.99 }] },
  { img:"cgb.jpg", name:"Cheesy Garlic Bread", price:7.99, desc:"Freshly made bread topped with our special garlic butter sauce and a generous amount of mozzarella, baked and served with marinara.", sizes:[{ label:"Small", price:7.99 }, { label:"Large", price:8.99 }] },
  { img:"chicken f.png", name:"Chicken Fingers", price:8.49, desc:"Tender chicken fingers served with your choice of dipping sauce.", sizes:[{ label:"5 pcs", price:8.49 }, { label:"10 pcs", price:10.99 }] },
  { img:"fries1.jpg", name:"Fries", price:3.99, desc:"Crispy golden fries, lightly salted.", sizes:[{ label:"Small", price:3.99 }, { label:"Large", price:5.49 }] },
  { img:"cheese f.jpg", name:"Cheesy Fries", price:4.79, desc:"Hot crispy fries topped with rich melted cheese.", sizes:[{ label:"Small", price:4.79 }, { label:"Large", price:6.49 }] },
  { img:"bcf.png", name:"Bacon Cheese Fries", price:5.79, desc:"Crispy fries loaded with bacon and melted cheese.", sizes:[{ label:"Small", price:5.79 }, { label:"Large", price:7.49 }] },
  { img:"season f.jpg", name:"Seasoned Fries", price:4.49, desc:"Fries tossed in our special house seasoning blend.", sizes:[{ label:"Small", price:4.49 }, { label:"Large", price:5.49 }] },
];
  const [starterCart, setStarterCart] = useState({});
  const [starterNotes, setStarterNotes] = useState("");
  const [starterSize, setStarterSize] = useState({});
  const getStarterBasePrice = (item) => {
    if (!item.sizes) return item.price;
    const label = starterSize[item.name] || item.sizes[0].label;
    return item.sizes.find(s => s.label === label)?.price ?? item.sizes[0].price;
  };
  const updateStarterQty = (name, delta) => setStarterCart(prev => { const n = Math.max(0, (prev[name] || 0) + delta); if (!n) { const r = { ...prev }; delete r[name]; return r; } return { ...prev, [name]: n }; });
  const starterDipOptions = ["Marinara","Ketchup","Ranch"];
  const freeStarterDips = 1;
  const starterFreeDipsBySize = { "6 pcs": 1, "8 pcs": 2, "12 pcs": 2, "5 pcs": 1, "10 pcs": 2, "Small": 1, "Large": 2 };
  const getFreeStarterDips = (item) => item?.sizes ? (starterFreeDipsBySize[starterSize[item.name] || item.sizes[0].label] ?? freeStarterDips) : freeStarterDips;
  const starterDipExtraCharge = 0.50;
  const [starterDips, setStarterDips] = useState({});
  const updateStarterDip = (name, dip, delta) => setStarterDips(prev => { const cur = prev[name] || {}; const qty = Math.max(0, (cur[dip] || 0) + delta); if (!qty) { const n = { ...cur }; delete n[dip]; return { ...prev, [name]: n }; } return { ...prev, [name]: { ...cur, [dip]: qty } }; });
  const starterDipTotalQty = (name) => Object.values(starterDips[name] || {}).reduce((s, q) => s + q, 0);
  const starterDipCharge = (name) => {
    const item = starterItems.find(i => i.name === name);
    return Math.max(0, starterDipTotalQty(name) - getFreeStarterDips(item)) * starterDipExtraCharge;
  };
  const [starterItemNotes, setStarterItemNotes] = useState({});
  const starterTotal = Object.entries(starterCart).map(([name, qty]) => {
    const item = starterItems.find(i => i.name === name);
    const base = getStarterBasePrice(item || {});
    const sizeLabel = item?.sizes ? (starterSize[name] || item.sizes[0].label) : null;
    const dipMap = starterDips[name] || {};
    const dipStr = Object.entries(dipMap).map(([d, q]) => q > 1 ? `${d} x${q}` : d).join(", ");
    const labelParts = [sizeLabel, dipStr].filter(Boolean).join(", ");
    return { name: labelParts ? `${name} (${labelParts})` : name, qty, price: base + starterDipCharge(name) };
  });

  // ── Salads ────────────────────────────────────────────────────────────────────
  const saladItems = [
    { img:"chicken ceaser.jpg", name:"Chicken Caesar Salad", desc:"Romaine, parmesan, asiago, croutons, tomatoes & marinated chicken.", baseIngredients:["Romaine Lettuce","Fresh Parmesan","Asiago Cheese","Croutons","Fresh Tomatoes","Marinated Chicken"] },
    { img:"g salad.jpg", name:"Garden Salad", desc:"Romaine, fresh tomatoes, bermuda onions, mushrooms, green peppers.", baseIngredients:["Romaine Lettuce","Fresh Tomatoes","Bermuda Onions","Fresh Mushrooms","Green Peppers"] },
    { img:"salad1.jpg", name:"Classic Caesar Salad", desc:"Romaine, fresh parmesan, asiago, croutons and fresh tomatoes.", baseIngredients:["Romaine Lettuce","Fresh Parmesan","Asiago Cheese","Croutons","Fresh Tomatoes"] },
    { img:"four s.png", name:"Four Seasons", desc:"Romaine lettuce, Bermuda onions, Canadian bacon, macaroni noodles & fresh tomatoes, topped with asiago cheese.", baseIngredients:["Romaine Lettuce","Bermuda Onions","Canadian Bacon","Macaroni Noodles","Fresh Tomatoes","Asiago Cheese"] },
    { img:"sig salad.jpg", name:"Signature House Salad", desc:"Romaine with artichoke hearts, green peppers, kalamata olives, tomatoes, onions & feta.", baseIngredients:["Romaine Lettuce","Artichoke Hearts","Green Peppers","Kalamata Olives","Fresh Tomatoes","Bermuda Onions","Feta Cheese"] },
  ];
  const saladSizes = [{ label:"Individual", price:9.99 }, { label:"Family", price:19.99 }, { label:"Party", price:32.99 }];
  const saladDressings = ["Ranch","Italian","Caesar","Blue Cheese","Balsamic Vinaigrette","Honey Mustard"];
  const freeDressings = { Individual:2, Family:4, Party:6 };
  const dressingExtraCharge = 1.25;
  const allSaladIngredients = ["Romaine Lettuce","Fresh Parmesan","Asiago Cheese","Croutons","Fresh Tomatoes","Marinated Chicken","Bermuda Onions","Fresh Mushrooms","Green Peppers","Mozzarella Cheese","Bacon","Chicken","Artichoke Hearts","Kalamata Olives","Feta Cheese","Canadian Bacon","Macaroni Noodles"];
  const saladExtraCharge = { Individual:0.75, Family:1.75, Party:2.75 };
  const [saladCart, setSaladCart] = useState({});
  const [saladNotes, setSaladNotes] = useState("");
  const [saladSize, setSaladSize] = useState({});
  const [saladDressing, setSaladDressing] = useState({});
  const [saladIngredients, setSaladIngredients] = useState({});
  const updateSaladQty = (name, delta) => setSaladCart(prev => { const n = Math.max(0, (prev[name] || 0) + delta); if (!n) { const r = { ...prev }; delete r[name]; return r; } return { ...prev, [name]: n }; });
  const updateSaladDressing = (name, dressing, delta) => setSaladDressing(prev => { const cur = prev[name] || {}; const qty = Math.max(0, (cur[dressing] || 0) + delta); if (!qty) { const n = { ...cur }; delete n[dressing]; return { ...prev, [name]: n }; } return { ...prev, [name]: { ...cur, [dressing]: qty } }; });
  const toggleSaladRemoved = (name, ing) => setSaladIngredients(prev => { const cur = prev[name] || { removed:[], added:[] }; return { ...prev, [name]: { ...cur, removed: cur.removed.includes(ing) ? cur.removed.filter(i => i !== ing) : [...cur.removed, ing] } }; });
  const toggleSaladAdded = (name, ing) => setSaladIngredients(prev => { const cur = prev[name] || { removed:[], added:[] }; return { ...prev, [name]: { ...cur, added: cur.added.includes(ing) ? cur.added.filter(i => i !== ing) : [...cur.added, ing] } }; });

  // ── Beverages ─────────────────────────────────────────────────────────────────
  const beverageItems = [
    { name:"Coke (Can)", price:1.79, category:"🥤 Single Cans" }, { name:"Diet Coke (Can)", price:1.79, category:"🥤 Single Cans" },
    { name:"Coke Zero (Can)", price:1.79, category:"🥤 Single Cans" }, { name:"Sprite (Can)", price:1.79, category:"🥤 Single Cans" },
    { name:"Sprite Zero (Can)", price:1.79, category:"🥤 Single Cans" }, { name:"Pepsi (Can)", price:1.79, category:"🥤 Single Cans" },
    { name:"Pepsi Zero (Can)", price:1.79, category:"🥤 Single Cans" }, { name:"Dr Pepper (Can)", price:1.79, category:"🥤 Single Cans" },
    { name:"Mountain Dew (Can)", price:1.79, category:"🥤 Single Cans" }, { name:"Fanta (Can)", price:1.79, category:"🥤 Single Cans" },
    { name:"Root Beer (Can)", price:1.79, category:"🥤 Single Cans" },
    { name:"Apple Juice (Bottle)", price:2.49, category:"🧃 Juices" }, { name:"Orange Juice (Bottle)", price:2.49, category:"🧃 Juices" },
    { name:"Pineapple Juice (Bottle)", price:2.49, category:"🧃 Juices" },
    { name:"Coke 2 Liter", price:5.49, category:"🍾 2 Liter Bottles" }, { name:"Sprite 2 Liter", price:5.49, category:"🍾 2 Liter Bottles" },
    { name:"Diet Coke 2 Liter", price:5.49, category:"🍾 2 Liter Bottles" }, { name:"Sprite Zero 2 Liter", price:5.49, category:"🍾 2 Liter Bottles" },
    { name:"Pepsi 2 Liter", price:5.49, category:"🍾 2 Liter Bottles" }, { name:"Diet Pepsi 2 Liter", price:5.49, category:"🍾 2 Liter Bottles" },
    { name:"Dr Pepper 2 Liter", price:5.49, category:"🍾 2 Liter Bottles" }, { name:"Mountain Dew 2 Liter", price:5.49, category:"🍾 2 Liter Bottles" },
    { name:"Any 6-Pack Cans", price:8.99, category:"📦 6-Pack" },
  ];
  const [beverageCart, setBeverageCart] = useState({});
  const [beverageNotes, setBeverageNotes] = useState("");
  const updateBeverageQty = (name, delta) => setBeverageCart(prev => { const n = Math.max(0, (prev[name] || 0) + delta); if (!n) { const r = { ...prev }; delete r[name]; return r; } return { ...prev, [name]: n }; });
  const beverageTotal = Object.entries(beverageCart).map(([name, qty]) => ({ name, qty, price: beverageItems.find(i => i.name === name)?.price || 0 }));

  // ── Desserts ──────────────────────────────────────────────────────────────────
  const dessertItems = [
    { img:"g j.jpg",     name:"Gulab Jamun",    price:5.99, desc:"3 pcs — soft milk-solid dumplings in rose-scented sugar syrup." },
    { img:"k.jpg",       name:"Kulfi",          price:5.99, desc:"Rich South Asian frozen dessert with saffron & pistachios." },
    { img:"cannoli.jpg", name:"Cannoli",        desc:"Fried pastry tube with sweet cream ricotta filling.", sizes:[{ label:"1 pc", price:4.99 }, { label:"2 pcs", price:5.99 }] },
    { img:"bk.jpg",      name:"Baklava",        price:5.99, desc:"3 pcs — crispy phyllo with pistachios & walnuts, honey syrup." },
    { img:"c cake.jpg",  name:"Cheesecake",     price:4.99, desc:"New York Style with Graham Cracker Crust." },
    { img:"ch cake.jpg", name:"Chocolate Cake", price:5.99, desc:"Layers of chocolate cake filled & topped with fudge." },
  ];
  const [dessertCart, setDessertCart] = useState({});
  const [dessertNotes, setDessertNotes] = useState("");
  const [dessertSize, setDessertSize] = useState({});
  const getDessertBasePrice = (item) => {
    if (!item.sizes) return item.price;
    const label = dessertSize[item.name] || item.sizes[0].label;
    return item.sizes.find(s => s.label === label)?.price ?? item.sizes[0].price;
  };
  const updateDessertQty = (name, delta) => setDessertCart(prev => { const n = Math.max(0, (prev[name] || 0) + delta); if (!n) { const r = { ...prev }; delete r[name]; return r; } return { ...prev, [name]: n }; });
  const dessertTotal = Object.entries(dessertCart).map(([name, qty]) => {
    const item = dessertItems.find(i => i.name === name);
    const sizeLabel = item?.sizes ? (dessertSize[name] || item.sizes[0].label) : null;
    return { name: sizeLabel ? `${name} (${sizeLabel})` : name, qty, price: getDessertBasePrice(item || {}) };
  });

  // ── Cart / Checkout state ─────────────────────────────────────────────────────
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(0); // 0=closed, 1=cart, 2=order-type, 3=details, 4=confirm
  const [orderType, setOrderType] = useState("pickup"); // "pickup" | "delivery"
  const [customerInfo, setCustomerInfo] = useState({ name:"", phone:"", address:"", city:"", zip:"", notes:"" });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // ── Build flat cart line items from all section states ────────────────────────
  const buildCartLines = () => {
    const lines = [];

    // Build-your-own pizzas
    buildOrders.forEach((o, i) => {
      if (!o.size) return;
      const base = parseFloat(buildSizes.find(s=>s.size===o.size)?.price.replace("$","") || 0);
      const toppingRate = parseFloat((toppingPrices[o.size]||"$0").replace("$",""));
      const toppingCount = o.isHalf ? (o.half1Toppings.length + o.half2Toppings.length) : o.toppings.length;
      const topCost = toppingCount * toppingRate;
      const total = base + topCost;
      const cookingStr = [o.sauceType, o.sauceAmount, o.bake, o.cut].filter(Boolean).join(", ");
      let details;
      if (o.isHalf) {
        details = `Half & Half — 1st Half: ${o.half1Toppings.length > 0 ? o.half1Toppings.join(", ") : "Plain cheese"} | 2nd Half: ${o.half2Toppings.length > 0 ? o.half2Toppings.join(", ") : "Plain cheese"}`;
      } else {
        details = o.toppings.length > 0 ? `Toppings: ${o.toppings.join(", ")}` : "Plain cheese";
      }
      if (cookingStr) details += ` | 🍅 ${cookingStr}`;
      if (total > 0) lines.push({
        id: `build-${i}`, category:"🍕 Pizza",
        name: `Build-Your-Own Pizza #${i+1} (${o.size}${o.crust ? `, ${o.crust}` : ""}${o.isHalf ? ", Half & Half" : ""})`,
        details, notes: o.notes, qty: 1, price: total,
        onRemove: () => setBuildOrders(p => p.length > 1 ? p.filter((_,idx)=>idx!==i) : [{ ...emptyBuild }])
      });
    });

    // Specialty pizzas
    specOrders.forEach((o, i) => {
      if (!o.name || !o.size) return;
      if (o.isHalf && !o.name2) return;
      const base = parseFloat(specSizes.find(s=>s.size===o.size)?.price.replace("$","") || 0);
      const topCost = o.toppings.length * parseFloat((toppingPrices[o.size]||"$0").replace("$",""));
      const pizzaName = o.isHalf ? `${o.name} / ${o.name2} (Half & Half)` : o.name;
      const cookingStr = [o.sauceType, o.sauceAmount, o.bake, o.cut].filter(Boolean).join(", ");
      let details = o.toppings.length > 0 ? `Extra: ${o.toppings.join(", ")}` : "";
      if (cookingStr) details = details ? `${details} | 🍅 ${cookingStr}` : `🍅 ${cookingStr}`;
      lines.push({
        id: `spec-${i}`, category:"🍕 Pizza",
        name: `${pizzaName} (${o.size}${o.crust ? `, ${o.crust}` : ""})`,
        details,
        notes: o.notes, qty: 1, price: base + topCost,
        onRemove: () => setSpecOrders(p => p.length > 1 ? p.filter((_,idx)=>idx!==i) : [{ ...emptySpec }])
      });
    });

    // Pizza by slice
    sliceOrders.forEach((o, i) => {
      if (!o.type) return;
      const base = (o.addFries ? 7 : 6) * o.quantity;
      const topCost = o.toppings.length * 0.5 * o.quantity;
      lines.push({
        id: `slice-${i}`, category:"🍕 Pizza",
        name: `${o.type} Slice${o.quantity > 1 ? ` x${o.quantity}` : ""} + Soda${o.addFries ? " + Fries" : ""}`,
        details: o.toppings.length > 0 ? `Extra toppings: ${o.toppings.join(", ")}` : "",
        notes: o.notes, qty: 1, price: base + topCost,
        onRemove: () => setSliceOrders(p => p.length > 1 ? p.filter((_,idx)=>idx!==i) : [{ ...emptySlice }])
      });
    });

    // Deals: Family Deal
    familyDealOrders.forEach((o, i) => {
      if (!o.crust) return;
      const total = familyDealTotal(o);
      const cookingStr = [o.sauceType, o.sauceAmount, o.bake, o.cut].filter(Boolean).join(", ");
      const detailParts = [
        `🫓 ${o.crust}`,
        `🧄 ${o.toppings.length > 0 ? o.toppings.join(", ") : "Plain cheese"}`,
        cookingStr ? `🍅 ${cookingStr}` : null,
        o.wingFlavor ? `🍗 Wing Flavor: ${o.wingFlavor}` : null,
        o.dipSauce ? `🥣 Dip: ${o.dipSauce}` : null,
        o.beverage ? `🥤 ${o.beverage}` : null,
      ].filter(Boolean);
      lines.push({
        id: `familydeal-${i}`, category:"🎉 Deals",
        name: `Family Deal #${i+1}`,
        details: detailParts.join(" | "),
        notes: o.notes, qty: 1, price: total,
        onRemove: () => setFamilyDealOrders(p => p.length > 1 ? p.filter((_,idx)=>idx!==i) : [{ ...emptyFamilyDeal }])
      });
    });

    // Deals: 2 Large 2-Topping Pizzas
    twoLargeDealOrders.forEach((o, i) => {
      if (!o.pizza1.crust) return;
      const total = twoLargeDealTotal(o);
      const describePizza = (pizza, label) => {
        const cookingStr = [pizza.sauceType, pizza.sauceAmount, pizza.bake, pizza.cut].filter(Boolean).join(", ");
        let str = `${label} (${pizza.crust || "No crust selected"}): ${pizza.toppings.length > 0 ? pizza.toppings.join(", ") : "Plain cheese"}`;
        if (cookingStr) str += ` — 🍅 ${cookingStr}`;
        return str;
      };
      const details = [describePizza(o.pizza1, "🍕 Pizza 1"), describePizza(o.pizza2, "🍕 Pizza 2")].join(" | ");
      lines.push({
        id: `twolarge-${i}`, category:"🎉 Deals",
        name: `2 Large 2-Topping Pizzas Deal #${i+1}`,
        details, notes: o.notes, qty: 1, price: total,
        onRemove: () => setTwoLargeDealOrders(p => p.length > 1 ? p.filter((_,idx)=>idx!==i) : [{ ...emptyTwoLargeDeal }])
      });
    });

    // Deals: 2 Medium 2-Topping Pizzas
    twoMediumDealOrders.forEach((o, i) => {
      if (!o.pizza1.crust) return;
      const total = twoMediumDealTotal(o);
      const describePizza = (pizza, label) => {
        const cookingStr = [pizza.sauceType, pizza.sauceAmount, pizza.bake, pizza.cut].filter(Boolean).join(", ");
        let str = `${label} (${pizza.crust || "No crust selected"}): ${pizza.toppings.length > 0 ? pizza.toppings.join(", ") : "Plain cheese"}`;
        if (cookingStr) str += ` — 🍅 ${cookingStr}`;
        return str;
      };
      const details = [describePizza(o.pizza1, "🍕 Pizza 1"), describePizza(o.pizza2, "🍕 Pizza 2")].join(" | ");
      lines.push({
        id: `twomedium-${i}`, category:"🎉 Deals",
        name: `2 Medium 2-Topping Pizzas Deal #${i+1}`,
        details, notes: o.notes, qty: 1, price: total,
        onRemove: () => setTwoMediumDealOrders(p => p.length > 1 ? p.filter((_,idx)=>idx!==i) : [{ ...emptyTwoMediumDeal }])
      });
    });

    // Calzones
    Object.entries(calzoneToppings).forEach(([name, tops]) => {
      if (!tops || tops.length === 0) return;
      const price = 10.99 + tops.length * 0.99;
      lines.push({
        id: `cal-${name}`, category:"🫓 Calzone",
        name, details: tops.length > 0 ? `Extra: ${tops.join(", ")}` : "",
        notes: calzoneNotes[name] || "", qty: 1, price,
        onRemove: () => setCalzoneToppings(p => ({ ...p, [name]: [] }))
      });
    });
    // Calzones with no extra toppings but notes
    Object.entries(calzoneNotes).forEach(([name, note]) => {
      if (!note) return;
      if (lines.find(l => l.id === `cal-${name}`)) return;
      lines.push({
        id: `cal-${name}`, category:"🫓 Calzone",
        name, details: "", notes: note, qty: 1, price: 10.99,
        onRemove: () => setCalzoneNotes(p => ({ ...p, [name]: "" }))
      });
    });

    // Mediterranean
    Object.entries(medCart).forEach(([name, qty]) => {
      const item = medItems.find(i=>i.name===name);
      if (!item) return;
      lines.push({
        id: `med-${name}`, category:"🌯 Mediterranean",
        name, details: "", notes: "", qty, price: item.price,
        onRemove: () => setMedCart(p => { const r={...p}; delete r[name]; return r; })
      });
    });
    if (medNotes) lines.filter(l=>l.category==="🌯 Mediterranean").forEach(l => l.notes = medNotes);

    // Desi dishes
    Object.entries(desiCart).forEach(([name, qty]) => {
      const item = desiItems.find(i=>i.name===name);
      if (!item) return;
      const chickenStr = item.hasChickenOption ? `🍗 ${desiChickenType[name] || defaultChickenType} Chicken | ` : "";
      lines.push({
        id: `desi-${name}`, category:"🍛 Pakistani & Indian",
        name, details: `${chickenStr}🌶️ Spice Level: ${desiSpiceLevel[name] || defaultSpiceLevel}`, notes: desiItemNotes[name] || "", qty, price: item.price + desiChickenCharge(name),
        onRemove: () => { setDesiCart(p => { const r={...p}; delete r[name]; return r; }); setDesiSpiceLevel(p => { const r={...p}; delete r[name]; return r; }); setDesiChickenType(p => { const r={...p}; delete r[name]; return r; }); setDesiItemNotes(p => { const r={...p}; delete r[name]; return r; }); }
      });
    });

    // Naan
    Object.entries(naanCart).forEach(([name, qty]) => {
      const item = naanItems.find(i=>i.name===name);
      if (!item) return;
      lines.push({
        id: `naan-${name}`, category:"🫓 Naan",
        name, details: "", notes: "", qty, price: item.price,
        onRemove: () => setNaanCart(p => { const r={...p}; delete r[name]; return r; })
      });
    });
    if (desiNotes) lines.filter(l=>l.category==="🫓 Naan").forEach(l => l.notes = desiNotes);

    // Pasta
    Object.entries(pastaToppings).forEach(([name, tops]) => {
      const price = 12.99 + tops.length;
      lines.push({
        id: `pasta-${name}`, category:"🍝 Pasta",
        name, details: tops.length > 0 ? `Extra: ${tops.join(", ")}` : "",
        notes: pastaNotes[name] || "", qty: 1, price,
        onRemove: () => setPastaToppings(p => ({ ...p, [name]: [] }))
      });
    });
    Object.entries(pastaNotes).forEach(([name, note]) => {
      if (!note) return;
      if (lines.find(l => l.id === `pasta-${name}`)) return;
      lines.push({ id:`pasta-${name}`, category:"🍝 Pasta", name, details:"", notes:note, qty:1, price:12.99, onRemove: () => setPastaNotes(p=>({...p,[name]:""})) });
    });

    // Mac & Cheese
    Object.entries(macToppings).forEach(([name, tops]) => {
      const price = 10.99 + tops.length;
      lines.push({
        id: `mac-${name}`, category:"🧀 Mac & Cheese",
        name, details: tops.length > 0 ? `Extra: ${tops.join(", ")}` : "",
        notes: macNotes[name] || "", qty: 1, price,
        onRemove: () => setMacToppings(p => ({ ...p, [name]: [] }))
      });
    });
    Object.entries(macNotes).forEach(([name, note]) => {
      if (!note) return;
      if (lines.find(l => l.id === `mac-${name}`)) return;
      lines.push({ id:`mac-${name}`, category:"🧀 Mac & Cheese", name, details:"", notes:note, qty:1, price:10.99, onRemove: () => setMacNotes(p=>({...p,[name]:""})) });
    });

    // Wings
    if (boneInOrder.size) {
      const price = boneInOrder.size.price + wingDipExtraCharge(boneInOrder);
      lines.push({
        id:"bonein", category:"🍗 Wings",
        name: `Bone-in Wings (${boneInOrder.size.pcs})`,
        details: [boneInOrder.flavors.length>0?`Flavors: ${boneInOrder.flavors.join(", ")}`:null, Object.keys(boneInOrder.dips||{}).length>0?`Dips: ${Object.entries(boneInOrder.dips).map(([d,q])=>q>1?`${d}x${q}`:d).join(", ")}`:null].filter(Boolean).join(" | "),
        notes: boneInOrder.notes, qty:1, price,
        onRemove: () => setBoneInOrder({ ...emptyWingOrder })
      });
    }
    if (bonelessOrder.size) {
      const price = bonelessOrder.size.price + wingDipExtraCharge(bonelessOrder);
      lines.push({
        id:"boneless", category:"🍗 Wings",
        name: `Boneless Wings (${bonelessOrder.size.pcs})`,
        details: [bonelessOrder.flavors.length>0?`Flavors: ${bonelessOrder.flavors.join(", ")}`:null, Object.keys(bonelessOrder.dips||{}).length>0?`Dips: ${Object.entries(bonelessOrder.dips).map(([d,q])=>q>1?`${d}x${q}`:d).join(", ")}`:null].filter(Boolean).join(" | "),
        notes: bonelessOrder.notes, qty:1, price,
        onRemove: () => setBonelessOrder({ ...emptyWingOrder })
      });
    }

    // Starters
    Object.entries(starterCart).forEach(([name, qty]) => {
      const item = starterItems.find(i=>i.name===name);
      if (!item) return;
      const sizeLabel = item.sizes ? (starterSize[name] || item.sizes[0].label) : null;
      const dipMap = starterDips[name] || {};
      const dipStr = Object.entries(dipMap).map(([d,q]) => q>1?`${d} x${q}`:d).join(", ");
      lines.push({
        id:`starter-${name}`, category:"🥗 Starters", name: sizeLabel ? `${name} (${sizeLabel})` : name,
        details: dipStr ? `🥫 Dip: ${dipStr}` : "",
        notes: starterItemNotes[name] || "", qty, price: getStarterBasePrice(item) + starterDipCharge(name),
        onRemove: () => { setStarterCart(p => { const r={...p}; delete r[name]; return r; }); setStarterDips(p => { const r={...p}; delete r[name]; return r; }); setStarterItemNotes(p => { const r={...p}; delete r[name]; return r; }); setStarterSize(p => { const r={...p}; delete r[name]; return r; }); }
      });
    });

    // Salads
    Object.entries(saladCart).forEach(([name, qty]) => {
      const size = saladSize[name] || "Individual";
      const basePrice = saladSizes.find(s=>s.label===size)?.price || 9.99;
      const ing = saladIngredients[name] || { removed:[], added:[] };
      const addedCharge = ing.added.length * saladExtraCharge[size];
      const dressingMap = saladDressing[name] || {};
      const dressingCharge = Math.max(0, Object.values(dressingMap).reduce((s,q)=>s+q,0)-(freeDressings[size]||2)) * dressingExtraCharge;
      const price = basePrice + addedCharge + dressingCharge;
      const dressStr = Object.entries(dressingMap).map(([d,q])=>q>1?`${d}x${q}`:d).join(", ");
      lines.push({
        id:`salad-${name}`, category:"🥙 Salads",
        name: `${name} (${size})`,
        details: [dressStr?`Dressing: ${dressStr}`:null, ing.removed.length>0?`No: ${ing.removed.join(", ")}`:null, ing.added.length>0?`Extra: ${ing.added.join(", ")}`:null].filter(Boolean).join(" | "),
        notes: saladNotes, qty, price,
        onRemove: () => setSaladCart(p => { const r={...p}; delete r[name]; return r; })
      });
    });

    // Beverages
    Object.entries(beverageCart).forEach(([name, qty]) => {
      const item = beverageItems.find(i=>i.name===name);
      if (!item) return;
      lines.push({ id:`bev-${name}`, category:"🥤 Beverages", name, details:"", notes:"", qty, price:item.price, onRemove: () => setBeverageCart(p => { const r={...p}; delete r[name]; return r; }) });
    });

    // Desserts
    Object.entries(dessertCart).forEach(([name, qty]) => {
      const item = dessertItems.find(i=>i.name===name);
      if (!item) return;
      const sizeLabel = item.sizes ? (dessertSize[name] || item.sizes[0].label) : null;
      lines.push({ id:`des-${name}`, category:"🍮 Desserts", name: sizeLabel ? `${name} (${sizeLabel})` : name, details:"", notes:"", qty, price:getDessertBasePrice(item), onRemove: () => { setDessertCart(p => { const r={...p}; delete r[name]; return r; }); setDessertSize(p => { const r={...p}; delete r[name]; return r; }); } });
    });
    if (dessertNotes) lines.filter(l=>l.category==="🍮 Desserts").forEach(l=>l.notes=dessertNotes);

    return lines;
  };

  const cartLines = buildCartLines();
  const cartItemCount = cartLines.reduce((s, l) => s + l.qty, 0);
  const cartSubtotal = cartLines.reduce((s, l) => s + l.price * l.qty, 0);
  const deliveryFee = orderType === "delivery" ? 5.99 : 0;
  const cartTotal = cartSubtotal + deliveryFee;

  const handlePlaceOrder = () => {
    const num = "SBH-" + Date.now().toString().slice(-6);
    setOrderNumber(num);
    setOrderPlaced(true);
    setCheckoutStep(4);
  };

  const handleNewOrder = () => {
    setBuildOrders([{ ...emptyBuild }]);
    setSpecOrders([{ ...emptySpec }]);
    setSliceOrders([{ ...emptySlice }]);
    setFamilyDealOrders([{ ...emptyFamilyDeal }]);
    setTwoLargeDealOrders([{ ...emptyTwoLargeDeal }]);
    setTwoMediumDealOrders([{ ...emptyTwoMediumDeal }]);
    setCalzoneToppings({}); setCalzoneNotes({});
    setPastaToppings({}); setPastaNotes({});
    setMacToppings({}); setMacNotes({});
    setMedCart({}); setMedNotes("");
    setDesiCart({}); setNaanCart({}); setDesiSpiceLevel({}); setDesiChickenType({}); setDesiItemNotes({}); setDesiNotes("");
    setStarterCart({}); setStarterDips({}); setStarterItemNotes({}); setStarterNotes(""); setStarterSize({});
    setSaladCart({}); setSaladDressing({}); setSaladSize({}); setSaladIngredients({}); setSaladNotes("");
    setBeverageCart({}); setBeverageNotes("");
    setDessertCart({}); setDessertNotes(""); setDessertSize({});
    setBoneInOrder({ ...emptyWingOrder });
    setBonelessOrder({ ...emptyWingOrder });
    setCustomerInfo({ name:"", phone:"", address:"", city:"", zip:"", notes:"" });
    setOrderType("pickup");
    setOrderPlaced(false);
    setCheckoutStep(0);
  };

  // ── Qty control component ─────────────────────────────────────────────────────
  const QtyControl = ({ qty, onDec, onInc, price, accentClass = "bg-red-600 hover:bg-red-500" }) => (
    qty === 0
      ? <button onClick={onInc} className={`w-full ${accentClass} text-white font-black py-2.5 rounded-xl transition text-sm`}>➕ Add to Order</button>
      : <div className="flex items-center gap-3 w-full justify-between">
          <button onClick={onDec} className="bg-zinc-700 hover:bg-zinc-600 text-white w-10 h-10 rounded-xl text-xl font-black transition">−</button>
          <div className="text-center"><span className="text-2xl font-black text-yellow-400">{qty}</span><p className="text-green-400 text-xs font-bold">${(price * qty).toFixed(2)}</p></div>
          <button onClick={onInc} className={`${accentClass} text-white w-10 h-10 rounded-xl text-xl font-black transition`}>+</button>
        </div>
  );

  // ── Sidebar component ─────────────────────────────────────────────────────────
  const SidebarNav = () => {
    const groups = ["deals", "starters", "american", "desi", "med", "extra", "story"];
    return (
      <nav className="h-full flex flex-col gap-1 py-4 px-2 overflow-y-auto">
        <div className="px-2 mb-3">
          <img src="/logo.png" alt="Spice & Bites Hub" className="h-14 w-auto mx-auto" />
        </div>
        {groups.map(group => {
          const items = NAV_SECTIONS.filter(s => s.group === group);
          const meta = GROUP_LABELS[group];
          return (
            <div key={group} className="mb-2">
              <p className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-1 border-b ${meta.color}`}>{meta.label}</p>
              {items.map(item => (
                <button key={item.id} onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition mb-0.5 ${activeSection === item.id ? "bg-red-600 text-white" : "text-gray-300 hover:bg-zinc-700 hover:text-white"}`}>
                  {item.label}
                </button>
              ))}
            </div>
          );
        })}
        <div className="mt-auto px-2 pt-4 border-t border-zinc-700">
          <button onClick={() => setCheckoutStep(1)}
            className="relative w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xs text-center py-3 rounded-xl transition mb-2 flex items-center justify-center gap-2">
            🛒 View Cart
            {cartItemCount > 0 && <span className="bg-black text-yellow-400 text-[10px] font-black px-2 py-0.5 rounded-full">{cartItemCount} items</span>}
          </button>
          <a href="tel:3175372058" className="block bg-red-600 hover:bg-red-700 text-white font-black text-xs text-center py-3 rounded-xl transition">📞 Call to Order</a>
          <p className="text-gray-500 text-[10px] text-center mt-2">317-537-2058</p>
        </div>
      </nav>
    );
  };

  // ── Mobile top tab bar ────────────────────────────────────────────────────────
  const MobileTabBar = () => (
    <div className="flex overflow-x-auto gap-1 px-3 py-2 bg-zinc-900 border-b border-zinc-700 scrollbar-none snap-x">
      {NAV_SECTIONS.map(item => (
        <button key={item.id} onClick={() => scrollToSection(item.id)}
          className={`flex-shrink-0 snap-start px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${activeSection === item.id ? "bg-red-600 text-white" : "bg-zinc-800 text-gray-300"}`}>
          {item.label}
        </button>
      ))}
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div className="bg-black text-white h-screen flex flex-col overflow-hidden">

      {/* ── TOP NAV BAR ── */}
      <header className="flex-shrink-0 z-30 bg-black/95 border-b border-zinc-800 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Spice & Bites Hub" className="h-10 w-auto" />
          <div>
            <p className="text-white font-black text-sm leading-tight">Spice &amp; Bites Hub</p>
            <p className="text-gray-400 text-[10px]">American • Pakistani &amp; Indian</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="tel:3175372058" className="bg-zinc-800 hover:bg-zinc-700 text-white font-black text-xs px-3 py-2 rounded-xl transition hidden sm:block">📞 Call</a>
          <button onClick={() => setCheckoutStep(1)}
            className="relative bg-red-600 hover:bg-red-700 text-white font-black text-xs px-4 py-2 rounded-xl transition flex items-center gap-2">
            🛒 Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">{cartItemCount}</span>
            )}
          </button>
        </div>
      </header>

      {/* ── MOBILE TAB BAR ── */}
      <div className="flex-shrink-0 lg:hidden">
        <MobileTabBar />
      </div>

      {/* ── MAIN BODY: sidebar + scrollable content ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT SIDEBAR — hidden on mobile, sticky on desktop */}
        <aside className="hidden lg:flex flex-col w-52 xl:w-60 flex-shrink-0 bg-zinc-900 border-r border-zinc-800 overflow-y-auto">
          <SidebarNav />
        </aside>

        {/* SCROLLABLE CONTENT AREA */}
        <main ref={contentRef} className="flex-1 overflow-y-auto bg-zinc-950">

          {/* HERO DEALS SLIDESHOW */}
<div className="relative h-52 md:h-72 overflow-hidden flex-shrink-0">
  {heroDeals.map((deal, i) => (
    <div key={deal.id} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
      style={{ backgroundImage: `url('${deal.img}')` }} />
  ))}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

  <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-6">
    <p className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-1">🔥 Today's Deal</p>
    {heroDeals.map((deal, i) => (
      <div key={deal.id} className={`transition-opacity duration-700 ${i === slide ? "opacity-100" : "opacity-0 absolute"}`}>
        <h1 className="text-xl md:text-3xl font-black text-white uppercase leading-tight">{deal.emoji} {deal.title}</h1>
        <p className="text-red-400 font-black text-lg md:text-2xl mt-1">{deal.price}</p>
        <p className="text-gray-300 text-xs md:text-sm mt-1 max-w-md">{deal.desc}</p>
        <button
          onClick={() => { setSelectedDeal(deal.id); scrollToSection("section-deals"); }}
          className="mt-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs md:text-sm px-5 py-2.5 rounded-xl transition w-fit">
          Order Now →
        </button>
      </div>
    ))}
  </div>

  <div className="absolute bottom-3 right-4 flex gap-2 z-10">
    {heroDeals.map((_, i) => (
      <button key={i} onClick={() => setSlide(i)}
        className={`w-2 h-2 rounded-full transition-all ${i === slide ? "bg-red-500 scale-125" : "bg-white/40 hover:bg-white"}`} />
    ))}
  </div>
</div>

          {/* ── CONTENT SECTIONS ── */}
          <div className="px-4 md:px-6 py-6 space-y-12 max-w-5xl mx-auto pb-24">

            {/* ═══════════════ DEALS ════════════════ */}
            <section id="section-deals">
              <SectionHeader emoji="🎉" title="Deals" color="text-red-500" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <button onClick={() => setSelectedDeal("family")}
                  className={`text-left rounded-2xl p-5 border-2 transition ${selectedDeal === "family" ? "bg-red-600/20 border-red-500" : "bg-zinc-900 border-zinc-800 hover:border-red-500"}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-yellow-400">🍕 FAMILY DEAL</h3>
                    <span className="text-red-400 font-black text-xl">$34.99</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">(XL) 16&quot; 1 topping pizza, 10&quot; cheesy garlic bread, 6pc wings &amp; 2 liter <span className="text-gray-500 italic">(Additional toppings extra)</span></p>
                  {selectedDeal === "family" && <span className="inline-block mt-3 text-green-400 font-black text-xs">✓ Selected</span>}
                </button>

                <button onClick={() => setSelectedDeal("twolarge")}
                  className={`text-left rounded-2xl p-5 border-2 transition ${selectedDeal === "twolarge" ? "bg-red-600/20 border-red-500" : "bg-zinc-900 border-zinc-800 hover:border-red-500"}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-yellow-400">🍕🍕 2 LARGE 2 TOPPING PIZZAS</h3>
                    <span className="text-red-400 font-black text-xl">$31.99</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">2- (LG) 14&quot; 2 topping pizzas <span className="text-gray-500 italic">(Additional toppings extra)</span></p>
                  {selectedDeal === "twolarge" && <span className="inline-block mt-3 text-green-400 font-black text-xs">✓ Selected</span>}
                </button>

                <button onClick={() => setSelectedDeal("twomedium")}
                  className={`text-left rounded-2xl p-5 border-2 transition ${selectedDeal === "twomedium" ? "bg-red-600/20 border-red-500" : "bg-zinc-900 border-zinc-800 hover:border-red-500"}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-yellow-400">🍕🍕 2 MEDIUM 2 TOPPING PIZZAS</h3>
                    <span className="text-red-400 font-black text-xl">$22.99</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">2- (MD) 12&quot; 2 topping pizzas <span className="text-gray-500 italic">(Additional toppings extra)</span></p>
                  {selectedDeal === "twomedium" && <span className="inline-block mt-3 text-green-400 font-black text-xs">✓ Selected</span>}
                </button>
              </div>

              {selectedDeal === "family" && (
                <div className="bg-zinc-900 rounded-2xl p-5">
                  <h4 className="text-base font-black text-yellow-400 mb-1">🍕 Build Your Family Deal</h4>
                  <p className="text-gray-400 text-sm italic mb-4">Start this pizza off with signature pizza sauce, mozzarella cheese and your choice of crust &amp; toppings.</p>

                  {familyDealOrders.map((order, index) => {
                    const extraCount = familyDealExtraToppingCount(order);
                    const extraCost = familyDealExtraToppingCost(order);
                    const total = familyDealTotal(order);
                    return (
                      <div key={index} className="bg-zinc-800 rounded-2xl p-4 mb-4 border border-zinc-700">
                        <div className="flex justify-between items-center mb-4">
                          <h5 className="text-base font-black text-yellow-400">Family Deal #{index + 1}</h5>
                          {familyDealOrders.length > 1 && <button onClick={() => setFamilyDealOrders(p => p.filter((_,i) => i !== index))} className="bg-red-700 text-white px-3 py-1 rounded-xl text-xs font-bold">✕ Remove</button>}
                        </div>

                        <Label>🫓 Crust</Label>
                        <div className="flex gap-2 mb-4">
                          {crustTypes.map(c => <Chip key={c} active={order.crust === c} onClick={() => updateFamilyDeal(index,"crust",c)} color="yellow">{c}</Chip>)}
                        </div>

                        <Label>🧄 Toppings <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">(1st topping included, additional ${familyDealToppingRate.toFixed(2)} each)</span></Label>
                        <ToppingGrid selectedToppings={order.toppings} onToggle={t => toggleFamilyDealTopping(index,t)} toppingList={toppings} />

                        <CookingInstructions order={order} onUpdate={(f,v) => updateFamilyDeal(index,f,v)} />

                        <Label>🍗 Wing Flavor <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">(choose 1)</span></Label>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {wingFlavors.map(flavor => (
                            <button key={flavor} onClick={() => updateFamilyDeal(index,"wingFlavor", order.wingFlavor === flavor ? "" : flavor)}
                              className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 transition ${order.wingFlavor===flavor?"bg-red-600 border-red-600 text-white":"bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                              {order.wingFlavor===flavor?"✅ ":""}{flavor}
                            </button>
                          ))}
                        </div>

                        <Label>🥣 Dipping Sauce <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">(choose 1)</span></Label>
                        <div className="flex gap-2 mb-4">
                          {wingDips.map(dip => (
                            <button key={dip} onClick={() => updateFamilyDeal(index,"dipSauce", order.dipSauce === dip ? "" : dip)}
                              className={`flex-1 py-2 rounded-xl text-xs font-black border-2 transition ${order.dipSauce===dip?"bg-yellow-500 border-yellow-500 text-black":"bg-zinc-700 border-zinc-600 text-gray-300 hover:border-yellow-500"}`}>
                              {order.dipSauce===dip?"✅ ":""}{dip}
                            </button>
                          ))}
                        </div>

                        <Label>🥤 Beverage <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">(choose 1)</span></Label>
                        <div className="flex gap-2 mb-4">
                          {dealBeverageOptions.map(bev => (
                            <button key={bev} onClick={() => updateFamilyDeal(index,"beverage", order.beverage === bev ? "" : bev)}
                              className={`flex-1 py-2 rounded-xl text-xs font-black border-2 transition ${order.beverage===bev?"bg-green-600 border-green-600 text-white":"bg-zinc-700 border-zinc-600 text-gray-300 hover:border-green-500"}`}>
                              {order.beverage===bev?"✅ ":""}{bev}
                            </button>
                          ))}
                        </div>

                        <SpecialRequests value={order.notes} onChange={v => updateFamilyDeal(index,"notes",v)} />

                        {order.crust && (
                          <SummaryBox>
                            <SummaryRow label="🎉 Family Deal Base" value={`$${familyDealPrice.toFixed(2)}`} />
                            <SummaryRow label={`🫓 ${order.crust}`} />
                            <SummaryRow label={`🧄 ${order.toppings.length > 0 ? order.toppings.join(", ") : "Plain cheese"}`} />
                            {extraCount > 0 && <SummaryRow label={`🧄 ${extraCount} extra topping${extraCount>1?"s":""} x $${familyDealToppingRate.toFixed(2)}`} value={`+$${extraCost.toFixed(2)}`} valueClass="text-green-400" />}
                            {[order.sauceType, order.sauceAmount, order.bake, order.cut].filter(Boolean).length > 0 && <SummaryRow label={`🍅 ${[order.sauceType, order.sauceAmount, order.bake, order.cut].filter(Boolean).join(", ")}`} />}
                            {order.wingFlavor && <SummaryRow label={`🍗 ${order.wingFlavor}`} />}
                            {order.dipSauce && <SummaryRow label={`🥣 ${order.dipSauce}`} />}
                            {order.beverage && <SummaryRow label={`🥤 ${order.beverage}`} />}
                            <SummaryTotal value={`$${total.toFixed(2)}`} />
                          </SummaryBox>
                        )}
                      </div>
                    );
                  })}
                  <button onClick={() => setFamilyDealOrders(p => [...p, { ...emptyFamilyDeal }])} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm py-3 rounded-2xl transition">➕ Add Another Family Deal</button>
                </div>
              )}

              {selectedDeal === "twolarge" && (
                <div className="bg-zinc-900 rounded-2xl p-5">
                  <h4 className="text-base font-black text-yellow-400 mb-1">🍕🍕 Build Your 2 Large 2 Topping Pizzas</h4>
                  <p className="text-gray-400 text-sm italic mb-4">Start these pizzas off with signature pizza sauce, mozzarella cheese and your choice of crust &amp; toppings.</p>

                  {twoLargeDealOrders.map((order, index) => {
                    const total = twoLargeDealTotal(order);
                    const extra1 = twoLargePizzaExtraCount(order.pizza1);
                    const extra2 = twoLargePizzaExtraCount(order.pizza2);
                    const extraCost1 = twoLargePizzaExtraCost(order.pizza1);
                    const extraCost2 = twoLargePizzaExtraCost(order.pizza2);
                    const renderPizzaBuilder = (pizzaKey, label) => {
                      const pizza = order[pizzaKey];
                      return (
                        <div className="bg-zinc-900 rounded-2xl p-4 mb-4 border border-zinc-700">
                          <h6 className="text-sm font-black text-white uppercase tracking-widest mb-3">{label}</h6>
                          <Label>🫓 Crust</Label>
                          <div className="flex gap-2 mb-4">
                            {crustTypes.map(c => <Chip key={c} active={pizza.crust === c} onClick={() => updateTwoLargePizza(index,pizzaKey,"crust",c)} color="yellow">{c}</Chip>)}
                          </div>
                          <Label>🧄 Toppings <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">(first 2 included, additional ${twoLargeDealToppingRate.toFixed(2)} each)</span></Label>
                          <ToppingGrid selectedToppings={pizza.toppings} onToggle={t => toggleTwoLargeTopping(index,pizzaKey,t)} toppingList={toppings} />
                          <CookingInstructions order={pizza} onUpdate={(f,v) => updateTwoLargePizza(index,pizzaKey,f,v)} />
                        </div>
                      );
                    };
                    return (
                      <div key={index} className="bg-zinc-800 rounded-2xl p-4 mb-4 border border-zinc-700">
                        <div className="flex justify-between items-center mb-4">
                          <h5 className="text-base font-black text-yellow-400">2 Large Deal #{index + 1}</h5>
                          {twoLargeDealOrders.length > 1 && <button onClick={() => setTwoLargeDealOrders(p => p.filter((_,i) => i !== index))} className="bg-red-700 text-white px-3 py-1 rounded-xl text-xs font-bold">✕ Remove</button>}
                        </div>

                        {renderPizzaBuilder("pizza1", "🍕 Pizza 1")}
                        {renderPizzaBuilder("pizza2", "🍕 Pizza 2")}

                        <SpecialRequests value={order.notes} onChange={v => updateTwoLargeNotes(index, v)} />

                        {order.pizza1.crust && (
                          <SummaryBox>
                            <SummaryRow label="🎉 2 Large 2 Topping Pizzas Base" value={`$${twoLargeDealPrice.toFixed(2)}`} />
                            <SummaryRow label={`🍕 Pizza 1 (${order.pizza1.crust || "No crust"}): ${order.pizza1.toppings.length > 0 ? order.pizza1.toppings.join(", ") : "Plain cheese"}`} />
                            {extra1 > 0 && <SummaryRow label={`🧄 ${extra1} extra topping${extra1>1?"s":""} x $${twoLargeDealToppingRate.toFixed(2)}`} value={`+$${extraCost1.toFixed(2)}`} valueClass="text-green-400" />}
                            <SummaryRow label={`🍕 Pizza 2 (${order.pizza2.crust || "No crust"}): ${order.pizza2.toppings.length > 0 ? order.pizza2.toppings.join(", ") : "Plain cheese"}`} />
                            {extra2 > 0 && <SummaryRow label={`🧄 ${extra2} extra topping${extra2>1?"s":""} x $${twoLargeDealToppingRate.toFixed(2)}`} value={`+$${extraCost2.toFixed(2)}`} valueClass="text-green-400" />}
                            <SummaryTotal value={`$${total.toFixed(2)}`} />
                          </SummaryBox>
                        )}
                      </div>
                    );
                  })}
                  <button onClick={() => setTwoLargeDealOrders(p => [...p, { ...emptyTwoLargeDeal }])} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm py-3 rounded-2xl transition">➕ Add Another 2 Large Deal</button>
                </div>
              )}

              {selectedDeal === "twomedium" && (
                <div className="bg-zinc-900 rounded-2xl p-5">
                  <h4 className="text-base font-black text-yellow-400 mb-1">🍕🍕 Build Your 2 Medium 2 Topping Pizzas</h4>
                  <p className="text-gray-400 text-sm italic mb-4">Start these pizzas off with signature pizza sauce, mozzarella cheese and your choice of crust &amp; toppings.</p>

                  {twoMediumDealOrders.map((order, index) => {
                    const total = twoMediumDealTotal(order);
                    const extra1 = twoMediumPizzaExtraCount(order.pizza1);
                    const extra2 = twoMediumPizzaExtraCount(order.pizza2);
                    const extraCost1 = twoMediumPizzaExtraCost(order.pizza1);
                    const extraCost2 = twoMediumPizzaExtraCost(order.pizza2);
                    const renderPizzaBuilder = (pizzaKey, label) => {
                      const pizza = order[pizzaKey];
                      return (
                        <div className="bg-zinc-900 rounded-2xl p-4 mb-4 border border-zinc-700">
                          <h6 className="text-sm font-black text-white uppercase tracking-widest mb-3">{label}</h6>
                          <Label>🫓 Crust</Label>
                          <div className="flex gap-2 mb-4">
                            {crustTypes.map(c => <Chip key={c} active={pizza.crust === c} onClick={() => updateTwoMediumPizza(index,pizzaKey,"crust",c)} color="yellow">{c}</Chip>)}
                          </div>
                          <Label>🧄 Toppings <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">(first 2 included, additional ${twoMediumDealToppingRate.toFixed(2)} each)</span></Label>
                          <ToppingGrid selectedToppings={pizza.toppings} onToggle={t => toggleTwoMediumTopping(index,pizzaKey,t)} toppingList={toppings} />
                          <CookingInstructions order={pizza} onUpdate={(f,v) => updateTwoMediumPizza(index,pizzaKey,f,v)} />
                        </div>
                      );
                    };
                    return (
                      <div key={index} className="bg-zinc-800 rounded-2xl p-4 mb-4 border border-zinc-700">
                        <div className="flex justify-between items-center mb-4">
                          <h5 className="text-base font-black text-yellow-400">2 Medium Deal #{index + 1}</h5>
                          {twoMediumDealOrders.length > 1 && <button onClick={() => setTwoMediumDealOrders(p => p.filter((_,i) => i !== index))} className="bg-red-700 text-white px-3 py-1 rounded-xl text-xs font-bold">✕ Remove</button>}
                        </div>

                        {renderPizzaBuilder("pizza1", "🍕 Pizza 1")}
                        {renderPizzaBuilder("pizza2", "🍕 Pizza 2")}

                        <SpecialRequests value={order.notes} onChange={v => updateTwoMediumNotes(index, v)} />

                        {order.pizza1.crust && (
                          <SummaryBox>
                            <SummaryRow label="🎉 2 Medium 2 Topping Pizzas Base" value={`$${twoMediumDealPrice.toFixed(2)}`} />
                            <SummaryRow label={`🍕 Pizza 1 (${order.pizza1.crust || "No crust"}): ${order.pizza1.toppings.length > 0 ? order.pizza1.toppings.join(", ") : "Plain cheese"}`} />
                            {extra1 > 0 && <SummaryRow label={`🧄 ${extra1} extra topping${extra1>1?"s":""} x $${twoMediumDealToppingRate.toFixed(2)}`} value={`+$${extraCost1.toFixed(2)}`} valueClass="text-green-400" />}
                            <SummaryRow label={`🍕 Pizza 2 (${order.pizza2.crust || "No crust"}): ${order.pizza2.toppings.length > 0 ? order.pizza2.toppings.join(", ") : "Plain cheese"}`} />
                            {extra2 > 0 && <SummaryRow label={`🧄 ${extra2} extra topping${extra2>1?"s":""} x $${twoMediumDealToppingRate.toFixed(2)}`} value={`+$${extraCost2.toFixed(2)}`} valueClass="text-green-400" />}
                            <SummaryTotal value={`$${total.toFixed(2)}`} />
                          </SummaryBox>
                        )}
                      </div>
                    );
                  })}
                  <button onClick={() => setTwoMediumDealOrders(p => [...p, { ...emptyTwoMediumDeal }])} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm py-3 rounded-2xl transition">➕ Add Another 2 Medium Deal</button>
                </div>
              )}
            </section>

            {/* ═══════════════ STARTERS ════════════════ */}
            <section id="section-starters">
              <SectionHeader emoji="🥗" title="Starters" color="text-red-500" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {starterItems.map(item => {
                  const qty = starterCart[item.name] || 0;
                  const dipMap = starterDips[item.name] || {};
                  const totalDipQty = Object.values(dipMap).reduce((s, q) => s + q, 0);
                  const freeDipsForItem = getFreeStarterDips(item);
                  const dipCharge = Math.max(0, totalDipQty - freeDipsForItem) * starterDipExtraCharge;
                  const selectedSize = item.sizes ? (starterSize[item.name] || item.sizes[0].label) : null;
                  const price = getStarterBasePrice(item) + dipCharge;
                  return (
                    <div key={item.name} className={`bg-zinc-900 rounded-2xl overflow-hidden border-2 transition ${qty>0?"border-red-500":"border-zinc-800"}`}>
                      <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-1"><h3 className="text-lg font-bold text-yellow-400">{item.name}</h3><span className="text-red-400 font-black">${price.toFixed(2)}</span></div>
                        <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
                        {item.sizes && (
                          <>
                            <Label>🔢 Quantity</Label>
                            <div className="flex gap-2 mb-3">
                              {item.sizes.map(s => (
                                <button key={s.label} onClick={() => setStarterSize(p => ({...p,[item.name]:s.label}))}
                                  className={`flex-1 py-2 rounded-lg text-xs font-bold border-2 transition ${selectedSize===s.label?"bg-red-600 border-red-600 text-white":"bg-zinc-800 border-zinc-700 text-gray-300 hover:border-red-500"}`}>
                                  {s.label}<span className={`block text-[10px] ${selectedSize===s.label?"text-white":"text-yellow-400"}`}>${s.price.toFixed(2)}</span>
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                        <Label>🥫 Dipping Sauce <span className="text-gray-400 normal-case font-normal text-[10px] ml-1">({freeDipsForItem} free, +$0.50 extra)</span></Label>
                        <div className="grid grid-cols-3 gap-1 mb-3">
                          {starterDipOptions.map(d => {
                            const dQty = dipMap[d] || 0;
                            const atFree = totalDipQty < freeDipsForItem;
                            return (
                              <div key={d} className={`rounded-lg border-2 transition ${dQty>0?"border-red-500 bg-zinc-700":"border-zinc-700 bg-zinc-800"}`}>
                                <div className="flex items-center justify-between px-2 py-1 gap-1">
                                  <span className={`text-xs font-bold truncate ${dQty>0?"text-white":"text-gray-300"}`}>{d}</span>
                                  <div className="flex items-center gap-1 shrink-0">
                                    {dQty > 0 && <button onClick={() => updateStarterDip(item.name,d,-1)} className="bg-zinc-600 text-white w-5 h-5 rounded text-xs font-black">−</button>}
                                    {dQty > 0 && <span className="text-yellow-400 font-black text-xs w-4 text-center">{dQty}</span>}
                                    <button onClick={() => updateStarterDip(item.name,d,1)} className={`w-5 h-5 rounded text-xs font-black text-white ${atFree||dQty>0?"bg-red-600":"bg-yellow-600"}`}>+</button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <SpecialRequests value={starterItemNotes[item.name] || ""} onChange={v => setStarterItemNotes(p => ({...p,[item.name]:v}))} />
                        <QtyControl qty={qty} onDec={() => updateStarterQty(item.name,-1)} onInc={() => updateStarterQty(item.name,1)} price={price} />
                      </div>
                    </div>
                  );
                })}
              </div>
              {starterTotal.length > 0 && (
                <OrderSummary title="🧾 Starters Order" items={starterTotal} notes={starterNotes} onNotesChange={setStarterNotes} onReset={() => { setStarterCart({}); setStarterDips({}); setStarterItemNotes({}); setStarterNotes(""); setStarterSize({}); }} borderColor="border-red-500" totalColor="text-red-400" />
              )}
            </section>

            {/* ═══════════════ PIZZA ════════════════ */}
            <section id="section-pizza">
              <SectionHeader emoji="🍕" title="Pizza" color="text-red-500" />

              {/* Build Your Own */}
              <SubSection title="🛠️ Build Your Own Pizza">
                {buildOrders.map((order, index) => (
                  <div key={index} className="bg-zinc-800 rounded-2xl p-4 mb-4 border border-zinc-700">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-base font-black text-yellow-400">Pizza #{index + 1}</h5>
                      {buildOrders.length > 1 && <button onClick={() => setBuildOrders(p => p.filter((_,i) => i !== index))} className="bg-red-700 text-white px-3 py-1 rounded-xl text-xs font-bold">✕ Remove</button>}
                    </div>
                    <Label>📏 Size</Label>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {buildSizes.map(({ size, price }) => (
                        <Chip key={size} active={order.size === size} onClick={() => updateBuild(index,"size",size)}>
                          {size}<span className={`block text-[10px] ${order.size === size ? "text-white" : "text-yellow-400"}`}>{price}</span>
                        </Chip>
                      ))}
                    </div>
                    <Label>🫓 Crust</Label>
                    <div className="flex gap-2 mb-4">
                      {crustTypes.map(c => <Chip key={c} active={order.crust === c} onClick={() => updateBuild(index,"crust",c)} color="yellow">{c}</Chip>)}
                    </div>
                    <CookingInstructions order={order} onUpdate={(f,v) => updateBuild(index,f,v)} />
                    <Label>🍕 Style</Label>
                    <div className="flex gap-2 mb-4">
                      <button onClick={() => updateBuild(index,"isHalf",false)}
                        className={`flex-1 py-2 rounded-xl text-xs font-black border-2 transition ${!order.isHalf?"bg-red-600 border-red-600 text-white":"bg-zinc-700 border-zinc-600 text-gray-300"}`}>Whole Pizza</button>
                      <button onClick={() => updateBuild(index,"isHalf",true)}
                        className={`flex-1 py-2 rounded-xl text-xs font-black border-2 transition ${order.isHalf?"bg-red-600 border-red-600 text-white":"bg-zinc-700 border-zinc-600 text-gray-300"}`}>🍕🍕 Half & Half</button>
                    </div>
                    {order.isHalf ? (
                      <>
                        <Label>🧄 First Half Toppings {order.size && <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">({toppingPrices[order.size]} each)</span>}</Label>
                        <ToppingGrid selectedToppings={order.half1Toppings} onToggle={t => toggleBuildHalfTopping(index,"half1Toppings",t)} toppingList={toppings} />
                        <Label>🧄 Second Half Toppings {order.size && <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">({toppingPrices[order.size]} each)</span>}</Label>
                        <ToppingGrid selectedToppings={order.half2Toppings} onToggle={t => toggleBuildHalfTopping(index,"half2Toppings",t)} toppingList={toppings} />
                      </>
                    ) : (
                      <>
                        <Label>🧄 Toppings {order.size && <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">({toppingPrices[order.size]} each)</span>}</Label>
                        <ToppingGrid selectedToppings={order.toppings} onToggle={t => toggleBuildTopping(index,t)} toppingList={toppings} />
                      </>
                    )}
                    <SpecialRequests value={order.notes} onChange={v => updateBuild(index,"notes",v)} />
                    {order.size && (
                      <SummaryBox>
                        <SummaryRow label={`📏 ${order.size} Base`} value={buildSizes.find(s => s.size === order.size)?.price} />
                        {order.crust && <SummaryRow label={`🫓 ${order.crust}`} />}
                        {[order.sauceType, order.sauceAmount, order.bake, order.cut].filter(Boolean).length > 0 && <SummaryRow label={`🍅 ${[order.sauceType, order.sauceAmount, order.bake, order.cut].filter(Boolean).join(", ")}`} />}
                        {order.isHalf ? (
                          <>
                            <SummaryRow label={`🍕 1st Half: ${order.half1Toppings.length > 0 ? order.half1Toppings.join(", ") : "Plain cheese"}`} />
                            <SummaryRow label={`🍕 2nd Half: ${order.half2Toppings.length > 0 ? order.half2Toppings.join(", ") : "Plain cheese"}`} />
                            {(order.half1Toppings.length + order.half2Toppings.length) > 0 && <SummaryRow label={`🧄 ${order.half1Toppings.length + order.half2Toppings.length} topping${(order.half1Toppings.length + order.half2Toppings.length)>1?"s":""} x ${toppingPrices[order.size]}`} value={`+$${((order.half1Toppings.length + order.half2Toppings.length) * parseFloat(toppingPrices[order.size].replace("$",""))).toFixed(2)}`} valueClass="text-green-400" />}
                            <SummaryTotal value={`$${(parseFloat(buildSizes.find(s=>s.size===order.size)?.price.replace("$","")||0)+((order.half1Toppings.length + order.half2Toppings.length)*parseFloat((toppingPrices[order.size]||"$0").replace("$","")))).toFixed(2)}`} />
                          </>
                        ) : (
                          <>
                            {order.toppings.length > 0 && <SummaryRow label={`🧄 ${order.toppings.length} topping${order.toppings.length>1?"s":""} x ${toppingPrices[order.size]}`} value={`+$${(order.toppings.length * parseFloat(toppingPrices[order.size].replace("$",""))).toFixed(2)}`} valueClass="text-green-400" />}
                            <SummaryTotal value={`$${(parseFloat(buildSizes.find(s=>s.size===order.size)?.price.replace("$","")||0)+(order.toppings.length*parseFloat((toppingPrices[order.size]||"$0").replace("$","")))).toFixed(2)}`} />
                          </>
                        )}
                      </SummaryBox>
                    )}
                  </div>
                ))}
                <button onClick={() => setBuildOrders(p => [...p, { ...emptyBuild }])} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm py-3 rounded-2xl transition">➕ Add Another Pizza</button>
              </SubSection>

              {/* Specialty Pizza */}
              <SubSection title="⭐ Specialty Pizzas">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {specialtyPizzas.map(p => (
                    <div key={p.name} className="bg-zinc-800 rounded-xl overflow-hidden">
                      <img src={p.img} alt={p.name} className="h-28 w-full object-cover" />
                      <p className="text-yellow-400 font-bold text-xs p-2">{p.name}</p>
                    </div>
                  ))}
                </div>
                {specOrders.map((order, index) => (
                  <div key={index} className="bg-zinc-800 rounded-2xl p-4 mb-4 border border-zinc-700">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-base font-black text-yellow-400">Order #{index + 1}</h5>
                      {specOrders.length > 1 && <button onClick={() => setSpecOrders(p => p.filter((_,i) => i !== index))} className="bg-red-700 text-white px-3 py-1 rounded-xl text-xs font-bold">✕ Remove</button>}
                    </div>
                    <Label>🍕 Style</Label>
                    <div className="flex gap-2 mb-4">
                      <button onClick={() => updateSpec(index,"isHalf",false)}
                        className={`flex-1 py-2 rounded-xl text-xs font-black border-2 transition ${!order.isHalf?"bg-red-600 border-red-600 text-white":"bg-zinc-700 border-zinc-600 text-gray-300"}`}>Whole Pizza</button>
                      <button onClick={() => updateSpec(index,"isHalf",true)}
                        className={`flex-1 py-2 rounded-xl text-xs font-black border-2 transition ${order.isHalf?"bg-red-600 border-red-600 text-white":"bg-zinc-700 border-zinc-600 text-gray-300"}`}>🍕🍕 Half & Half</button>
                    </div>
                    {order.isHalf ? (
                      <>
                        <Label>🍕 First Half</Label>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {specialtyPizzas.map(p => (
                            <button key={p.name} onClick={() => updateSpec(index,"name",p.name)}
                              className={`px-2 py-2 rounded-xl text-xs font-bold border-2 transition text-left ${order.name === p.name ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                              {order.name === p.name ? "✅ " : ""}{p.name}
                            </button>
                          ))}
                        </div>
                        <Label>🍕 Second Half</Label>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {specialtyPizzas.map(p => (
                            <button key={p.name} onClick={() => updateSpec(index,"name2",p.name)}
                              className={`px-2 py-2 rounded-xl text-xs font-bold border-2 transition text-left ${order.name2 === p.name ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                              {order.name2 === p.name ? "✅ " : ""}{p.name}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <Label>🍕 Select Pizza</Label>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {specialtyPizzas.map(p => (
                            <button key={p.name} onClick={() => updateSpec(index,"name",p.name)}
                              className={`px-2 py-2 rounded-xl text-xs font-bold border-2 transition text-left ${order.name === p.name ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                              {order.name === p.name ? "✅ " : ""}{p.name}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                    <Label>📏 Size</Label>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {specSizes.map(({ size, price }) => (
                        <Chip key={size} active={order.size === size} onClick={() => updateSpec(index,"size",size)}>
                          {size}<span className={`block text-[10px] ${order.size === size ? "text-white" : "text-yellow-400"}`}>{price}</span>
                        </Chip>
                      ))}
                    </div>
                    <Label>🫓 Crust</Label>
                    <div className="flex gap-2 mb-4">
                      {crustTypes.map(c => <Chip key={c} active={order.crust === c} onClick={() => updateSpec(index,"crust",c)} color="yellow">{c}</Chip>)}
                    </div>
                    <CookingInstructions order={order} onUpdate={(f,v) => updateSpec(index,f,v)} />
                    <Label>🧄 Extra Toppings {order.size && <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">({toppingPrices[order.size]} each)</span>}</Label>
                    <ToppingGrid selectedToppings={order.toppings} onToggle={t => toggleSpecTopping(index,t)} toppingList={toppings} />
                    <SpecialRequests value={order.notes} onChange={v => updateSpec(index,"notes",v)} />
                    {order.size && (
                      <SummaryBox>
                        {order.isHalf ? (
                          <>
                            {order.name && <SummaryRow label={`🍕 1st Half: ${order.name}`} />}
                            {order.name2 && <SummaryRow label={`🍕 2nd Half: ${order.name2}`} />}
                            {!order.name2 && <p className="text-orange-400 text-xs mt-1 mb-1">⚠️ Select a second half pizza</p>}
                          </>
                        ) : (
                          order.name && <SummaryRow label={`🍕 ${order.name}`} />
                        )}
                        <SummaryRow label={`📏 ${order.size} Base`} value={specSizes.find(s=>s.size===order.size)?.price} />
                        {order.crust && <SummaryRow label={`🫓 ${order.crust}`} />}
                        {[order.sauceType, order.sauceAmount, order.bake, order.cut].filter(Boolean).length > 0 && <SummaryRow label={`🍅 ${[order.sauceType, order.sauceAmount, order.bake, order.cut].filter(Boolean).join(", ")}`} />}
                        {order.toppings.length > 0 && <SummaryRow label={`🧄 ${order.toppings.length} extra topping${order.toppings.length>1?"s":""} x ${toppingPrices[order.size]}`} value={`+$${(order.toppings.length*parseFloat(toppingPrices[order.size].replace("$",""))).toFixed(2)}`} valueClass="text-green-400" />}
                        <SummaryTotal value={`$${(parseFloat(specSizes.find(s=>s.size===order.size)?.price.replace("$","")||0)+(order.toppings.length*parseFloat((toppingPrices[order.size]||"$0").replace("$","")))).toFixed(2)}`} />
                      </SummaryBox>
                    )}
                  </div>
                ))}
                <button onClick={() => setSpecOrders(p => [...p, { ...emptySpec }])} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm py-3 rounded-2xl transition">➕ Add Another Pizza</button>
              </SubSection>

              {/* Pizza by Slice */}
              <SubSection title="🍕 Pizza by Slice">
                <div className="bg-red-600 rounded-2xl p-4 mb-4 text-center">
                  <p className="text-white font-black text-base mb-2">🎉 Every slice includes a <span className="text-yellow-300">FREE soda</span>!</p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <div className="bg-black/30 rounded-xl px-4 py-2 text-center"><p className="text-yellow-300 font-black text-sm">Slice + Soda</p><p className="text-white text-xl font-black">$6.00</p></div>
                    <div className="bg-black/30 rounded-xl px-4 py-2 text-center"><p className="text-yellow-300 font-black text-sm">🍟 Meal Deal</p><p className="text-white text-xs">+ Fries</p><p className="text-white text-xl font-black">$7.00</p></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[{img:"slice.jpg",label:"Cheese"},{img:"slicep.jpg",label:"Pepperoni"},{img:"sliceb.jpg",label:"Sausage"}].map(s => (
                    <div key={s.label} className="bg-zinc-800 rounded-xl overflow-hidden text-center">
                      <img src={s.img} alt={s.label} className="h-24 w-full object-cover" />
                      <p className="text-yellow-400 font-black py-2 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
                {sliceOrders.map((order, index) => (
                  <div key={index} className="bg-zinc-800 rounded-2xl p-4 mb-4 border border-zinc-700">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-base font-black text-yellow-400">Slice #{index + 1}</h5>
                      {sliceOrders.length > 1 && <button onClick={() => setSliceOrders(p => p.filter((_,i) => i !== index))} className="bg-red-700 text-white px-3 py-1 rounded-xl text-xs font-bold">✕ Remove</button>}
                    </div>
                    <Label>🍕 Choose Slice</Label>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {sliceTypes.map(t => <Chip key={t} active={order.type===t} onClick={() => updateSlice(index,"type",t)}>{t}</Chip>)}
                    </div>
                    <Label>🔢 Quantity</Label>
                    <div className="flex items-center gap-4 mb-4">
                      <button onClick={() => updateSlice(index,"quantity",Math.max(1,order.quantity-1))} className="bg-zinc-700 hover:bg-zinc-600 text-white w-10 h-10 rounded-xl text-xl font-black transition">−</button>
                      <span className="text-2xl font-black text-yellow-400 w-8 text-center">{order.quantity}</span>
                      <button onClick={() => updateSlice(index,"quantity",order.quantity+1)} className="bg-zinc-700 hover:bg-zinc-600 text-white w-10 h-10 rounded-xl text-xl font-black transition">+</button>
                    </div>
                    <Label>🍟 Add Fries?</Label>
                    <div className="flex gap-2 mb-4">
                      <button onClick={() => updateSlice(index,"addFries",false)} className={`flex-1 py-2 rounded-xl text-xs font-black border-2 transition ${!order.addFries?"bg-red-600 border-red-600 text-white":"bg-zinc-700 border-zinc-600 text-gray-300"}`}>No — $6/slice</button>
                      <button onClick={() => updateSlice(index,"addFries",true)} className={`flex-1 py-2 rounded-xl text-xs font-black border-2 transition ${order.addFries?"bg-green-600 border-green-600 text-white":"bg-zinc-700 border-zinc-600 text-gray-300"}`}>🍟 Yes — $7/slice</button>
                    </div>
                    <Label>🧄 Extra Toppings <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">($0.50 each)</span></Label>
                    <ToppingGrid selectedToppings={order.toppings} onToggle={t => toggleSliceTopping(index,t)} toppingList={toppings} />
                    <SpecialRequests value={order.notes} onChange={v => updateSlice(index,"notes",v)} />
                    {order.type && (
                      <SummaryBox>
                        <SummaryRow label={`🍕 ${order.type} x ${order.quantity}`} value={`$${(6*order.quantity).toFixed(2)}`} />
                        <SummaryRow label={`🥤 Soda x ${order.quantity}`} value="FREE" valueClass="text-green-400" />
                        {order.addFries && <SummaryRow label={`🍟 Fries x ${order.quantity}`} value={`+$${order.quantity.toFixed(2)}`} valueClass="text-yellow-400" />}
                        {order.toppings.length > 0 && <SummaryRow label={`🧄 ${order.toppings.length} topping${order.toppings.length>1?"s":""} x $0.50 x ${order.quantity}`} value={`+$${(order.toppings.length*0.5*order.quantity).toFixed(2)}`} valueClass="text-green-400" />}
                        <SummaryTotal value={`$${((order.addFries?7:6)*order.quantity+(order.toppings.length*0.5*order.quantity)).toFixed(2)}`} />
                      </SummaryBox>
                    )}
                  </div>
                ))}
                <button onClick={() => setSliceOrders(p => [...p, { ...emptySlice }])} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm py-3 rounded-2xl transition">➕ Add Another Slice Order</button>
              </SubSection>
            </section>

            {/* ═══════════════ CALZONE ════════════════ */}
            <section id="section-calzone">
              <SectionHeader emoji="🫓" title="Calzone Wrap" color="text-red-500" />
              <p className="text-gray-400 text-sm italic mb-2">Butter crust with melted mozzarella & signature pizza sauce</p>
              <p className="text-yellow-400 font-bold text-sm mb-4">Additional toppings: <span className="text-green-400">$0.99 each</span></p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { img:"calzone.jpg",  name:"Chicken Club",      desc:"Pizza sauce, chicken, bacon, tomatoes & Bermuda onions." },
                  { img:"calzon1.jpg",  name:"Vegetarian",        desc:"Pizza sauce, onions, mushrooms, green peppers & spinach." },
                  { img:"calzon1.jpg",  name:"Customer's Choice", desc:"Choose any four ingredients your way." },
                  { img:"calzon1.jpg",  name:"Signature",    desc:"Pepperoni, sausage, onion, mushrooms, peppers & black olive." },
                  { img:"calzone.jpg",  name:"Cheese",       desc:"Signature pizza sauce & melted mozzarella." },
                  { img:"calzone.jpg",  name:"Italian Sausage", desc:"Sausage, fresh mushroom & green pepper, mozzarella." },
                ].map(item => {
                  const itemToppings = calzoneToppings[item.name] || [];
                  const extra = itemToppings.length * 0.99;
                  return (
                    <div key={item.name} className="bg-zinc-900 rounded-2xl overflow-hidden">
                      <img src={item.img} alt={item.name} className="h-36 w-full object-cover" />
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-1"><h3 className="text-base font-bold text-yellow-400">{item.name}</h3><span className="text-red-400 font-black">$10.99</span></div>
                        <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
                        <ToppingGrid selectedToppings={itemToppings} onToggle={t => setCalzoneToppings(prev => { const c = prev[item.name]||[]; return {...prev,[item.name]:c.includes(t)?c.filter(x=>x!==t):[...c,t]}; })} toppingList={toppings} />
                        <SpecialRequests value={calzoneNotes[item.name]||""} onChange={v => setCalzoneNotes(p => ({...p,[item.name]:v}))} />
                        {itemToppings.length > 0 && (
                          <SummaryBox>
                            <SummaryRow label="Base" value="$10.99" />
                            <SummaryRow label={`🧄 ${itemToppings.length} topping${itemToppings.length>1?"s":""} x $0.99`} value={`+$${extra.toFixed(2)}`} valueClass="text-green-400" />
                            <SummaryTotal value={`$${(10.99+extra).toFixed(2)}`} />
                            <button onClick={() => setCalzoneToppings(p => ({...p,[item.name]:[]}))} className="text-xs text-red-400 hover:text-red-300 font-bold mt-1">🔄 Reset</button>
                          </SummaryBox>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ═══════════════ BONE-IN WINGS ════════════════ */}
            <section id="section-bonein">
              <SectionHeader emoji="🍗" title="Bone-in Wings" color="text-red-500" />
              <p className="text-gray-400 text-sm italic mb-4">Made fresh daily — never frozen</p>
              <img src="buffalo wings.jpg" alt="Bone-in Wings" className="h-48 w-full object-cover rounded-2xl mb-5" />
              <WingOrderUI order={boneInOrder} setOrder={setBoneInOrder} sizes={boneInSizes} flavors={wingFlavors} dips={wingDips} extraDipCharge={extraDipCharge}
                toggleFlavor={toggleWingFlavor} updateDipQty={updateWingDipQty} dipTotalQty={wingDipTotalQty} dipExtraCharge={wingDipExtraCharge} emptyOrder={emptyWingOrder} />
            </section>

            {/* ═══════════════ BONELESS WINGS ════════════════ */}
            <section id="section-boneless">
              <SectionHeader emoji="🍗" title="Boneless Wings" color="text-red-500" />
              <p className="text-gray-400 text-sm italic mb-4">Made fresh daily — never frozen</p>
              <img src="bw.jpg" alt="Boneless Wings" className="h-48 w-full object-cover rounded-2xl mb-5" />
              <WingOrderUI order={bonelessOrder} setOrder={setBonelessOrder} sizes={bonelessSizes} flavors={wingFlavors} dips={wingDips} extraDipCharge={extraDipCharge}
                toggleFlavor={toggleWingFlavor} updateDipQty={updateWingDipQty} dipTotalQty={wingDipTotalQty} dipExtraCharge={wingDipExtraCharge} emptyOrder={emptyWingOrder} />
            </section>

            {/* ═══════════════ PASTA ════════════════ */}
            <section id="section-pasta">
              <SectionHeader emoji="🍝" title="Pasta" color="text-red-500" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { img:"chicken c p.png", name:"Chicken Cavatappi", desc:"Olive oil, chicken, spinach, mushrooms, red onions, parmesan & parsley." },
                  { img:"m.jpg", name:"Mostaccioli w/ Marinara", desc:"Traditional mostaccioli with marinara, parmesan & parsley." },
                  { img:"bm.jpg", name:"Baked Mostaccioli w/ Mozzarella", desc:"Mostaccioli, marinara, mozzarella baked to perfection." },
                  { img:"cava p.jpg", name:"Alfredo Cavatappi w/ Chicken", desc:"Cavatappi, chicken, mushrooms & spinach, parmesan." },
                  { img:"cava p.jpg", name:"Alfredo Cavatappi", desc:"Cavatappi noodles, alfredo sauce, parmesan & parsley." },
                  { img:"tomato p.png", name:"Tomato Cream Penne", desc:"Penne in creamy alfredo marinara, parmesan & parsley." },
                ].map(item => {
                  const its = pastaToppings[item.name] || [];
                  const extra = its.length;
                  return (
                    <div key={item.name} className="bg-zinc-900 rounded-2xl overflow-hidden">
                      {item.img === "COMING_SOON" ? (
                        <div className="h-36 w-full bg-zinc-800 flex items-center justify-center">
                          <p className="text-gray-500 font-black text-sm uppercase tracking-widest">📷 Coming Soon</p>
                        </div>
                      ) : (
                        <img src={item.img} alt={item.name} className="h-36 w-full object-cover" />
                      )}
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-1"><h3 className="text-base font-bold text-yellow-400">{item.name}</h3><span className="text-red-400 font-black">$12.99</span></div>
                        <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
                        <p className="text-white font-black text-xs uppercase tracking-widest mb-1">🧄 Add Toppings <span className="text-yellow-400 normal-case font-normal">$1.75 each</span></p>
                        <ToppingGrid selectedToppings={its} onToggle={t => setPastaToppings(prev => { const c=prev[item.name]||[]; return {...prev,[item.name]:c.includes(t)?c.filter(x=>x!==t):[...c,t]}; })} toppingList={toppings} />
                        <SpecialRequests value={pastaNotes[item.name]||""} onChange={v => setPastaNotes(p => ({...p,[item.name]:v}))} />
                        {its.length > 0 && (
                          <SummaryBox>
                            <SummaryRow label="Base" value="$12.99" />
                            <SummaryRow label={`🧄 ${its.length} topping${its.length>1?"s":""} x $1.75`} value={`+$${extra.toFixed(2)}`} valueClass="text-green-400" />
                            <SummaryTotal value={`$${(12.99+extra).toFixed(2)}`} />
                            <button onClick={() => setPastaToppings(p => ({...p,[item.name]:[]}))} className="text-xs text-red-400 hover:text-red-300 font-bold mt-1">🔄 Reset</button>
                          </SummaryBox>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ═══════════════ MAC & CHEESE ════════════════ */}
            <section id="section-mac">
              <SectionHeader emoji="🧀" title="Mac & Cheese" color="text-red-500" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { img:"buffalo c m.png", name:"Buffalo Chicken Mac", desc:"Chopped chicken, Bermuda onions, spicy sauce, mozzarella & cheddar." },
                  { img:"bft m.png", name:"Double BFT", desc:"Bacon, feta, tomato smothered in mozzarella & cheddar." },
                  { img:"mnc.jpg", name:"Customer's Choice", desc:"Four toppings of your choice, mozzarella & cheddar." },
                  { img:"bbq m.png", name:"BBQ Mac", desc:"BBQ bacon, Bermuda onions, cilantro, mozzarella & cheddar." },
                  { img:"mcnc.jpg", name:"Mac n Cheese", desc:"Classic mac smothered in mozzarella & cheddar." },
                  { img:"alfrado m.png", name:"Alfredo Mac", desc:"Creamy alfredo with fresh mushrooms & spinach." },
                  { img:"burger m.png", name:"Burger Mac", desc:"Ground beef, onions, tomato, mushrooms, mozzarella & cheddar." },
                ].map(item => {
                  const its = macToppings[item.name] || [];
                  const extra = its.length;
                  return (
                    <div key={item.name} className="bg-zinc-900 rounded-2xl overflow-hidden">
                      {item.img === "COMING_SOON" ? (
                        <div className="h-36 w-full bg-zinc-800 flex items-center justify-center">
                          <p className="text-gray-500 font-black text-sm uppercase tracking-widest">📷 Coming Soon</p>
                        </div>
                      ) : (
                        <img src={item.img} alt={item.name} className="h-36 w-full object-cover" />
                      )}
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-1"><h3 className="text-base font-bold text-yellow-400">{item.name}</h3><span className="text-red-400 font-black">$10.99</span></div>
                        <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
                        <p className="text-white font-black text-xs uppercase tracking-widest mb-1">🧄 Add Toppings <span className="text-yellow-400 normal-case font-normal">$1.75 each</span></p>
                        <ToppingGrid selectedToppings={its} onToggle={t => setMacToppings(prev => { const c=prev[item.name]||[]; return {...prev,[item.name]:c.includes(t)?c.filter(x=>x!==t):[...c,t]}; })} toppingList={toppings} />
                        <SpecialRequests value={macNotes[item.name]||""} onChange={v => setMacNotes(p => ({...p,[item.name]:v}))} />
                        {its.length > 0 && (
                          <SummaryBox>
                            <SummaryRow label="Base" value="$10.99" />
                            <SummaryRow label={`🧄 ${its.length} topping${its.length>1?"s":""} x $1.75`} value={`+$${extra.toFixed(2)}`} valueClass="text-green-400" />
                            <SummaryTotal value={`$${(10.99+extra).toFixed(2)}`} />
                            <button onClick={() => setMacToppings(p => ({...p,[item.name]:[]}))} className="text-xs text-red-400 hover:text-red-300 font-bold mt-1">🔄 Reset</button>
                          </SummaryBox>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ═══════════════ DESI ════════════════ */}
            <section id="section-desi">
              <SectionHeader emoji="🍛" title="Pakistani & Indian Cuisine" color="text-green-400" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {desiItems.map(item => {
                  const qty = desiCart[item.name] || 0;
                  const level = desiSpiceLevel[item.name] || defaultSpiceLevel;
                  const chickenType = desiChickenType[item.name] || defaultChickenType;
                  const price = item.price + desiChickenCharge(item.name);
                  return (
                    <div key={item.name} className={`bg-zinc-900 rounded-2xl overflow-hidden border-2 transition ${qty>0?"border-yellow-400":"border-zinc-800"}`}>
                      <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-1"><h3 className="text-base font-bold text-yellow-400">{item.name}</h3><span className="text-red-400 font-black">${price.toFixed(2)}</span></div>
                        <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
                        {item.hasChickenOption && (
                          <>
                            <Label>🍗 Chicken Type</Label>
                            <div className="flex gap-2 mb-3">
                              {chickenTypes.map(t => (
                                <button key={t} onClick={() => setChickenType(item.name, t)}
                                  className={`flex-1 py-2 rounded-lg text-xs font-bold border-2 transition ${chickenType===t?"bg-green-600 border-green-600 text-white":"bg-zinc-800 border-zinc-700 text-gray-300 hover:border-green-500"}`}>
                                  {t}{t==="Boneless" ? <span className={`block text-[10px] ${chickenType===t?"text-white":"text-yellow-400"}`}>+$2.00</span> : null}
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                        <Label>🌶️ Spice Level</Label>
                        <div className="flex gap-2 mb-3">
                          {spiceLevels.map(lvl => (
                            <button key={lvl} onClick={() => setSpiceLevel(item.name, lvl)}
                              className={`flex-1 py-2 rounded-lg text-xs font-bold border-2 transition ${level===lvl?spiceLevelColors[lvl]:"bg-zinc-800 border-zinc-700 text-gray-300 hover:border-yellow-500"}`}>
                              {lvl}
                            </button>
                          ))}
                        </div>
                        <SpecialRequests value={desiItemNotes[item.name] || ""} onChange={v => setDesiItemNotes(p => ({...p,[item.name]:v}))} />
                        <QtyControl qty={qty} onDec={() => updateDesiQty(item.name,-1)} onInc={() => updateDesiQty(item.name,1)} price={price} accentClass="bg-green-600 hover:bg-green-500" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="bg-zinc-900 rounded-2xl p-5 mb-6">
                <h4 className="text-base font-black text-yellow-400 mb-3">🫓 Naan Bread</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {naanItems.map(naan => {
                    const qty = naanCart[naan.name] || 0;
                    return (
                      <div key={naan.name} className={`rounded-xl overflow-hidden border-2 transition ${qty>0?"border-yellow-400":"border-zinc-700"}`}>
                        <img src={naan.img} alt={naan.name} className="h-28 w-full object-cover" />
                        <div className={`p-3 ${qty>0?"bg-zinc-700":"bg-zinc-800"}`}>
                          <div className="flex justify-between items-center mb-1"><p className="text-yellow-400 font-bold text-sm">{naan.name}</p><span className="text-red-400 font-black text-sm">${naan.price.toFixed(2)}</span></div>
                          <QtyControl qty={qty} onDec={() => updateNaanQty(naan.name,-1)} onInc={() => updateNaanQty(naan.name,1)} price={naan.price} accentClass="bg-green-600 hover:bg-green-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {desiTotal.length > 0 && (
                <OrderSummary title="🧾 Pakistani & Indian Order" items={desiTotal} notes={desiNotes} onNotesChange={setDesiNotes} onReset={() => { setDesiCart({}); setNaanCart({}); setDesiSpiceLevel({}); setDesiChickenType({}); setDesiItemNotes({}); setDesiNotes(""); }} borderColor="border-green-500" totalColor="text-green-400" />
              )}
            </section>

            {/* ═══════════════ MEDITERRANEAN ════════════════ */}
            <section id="section-med">
              <SectionHeader emoji="🌯" title="Mediterranean Menu" color="text-yellow-400" />
              <div className="bg-zinc-800 border-2 border-yellow-500/40 rounded-2xl p-4 mb-5 text-center">
                <p className="text-yellow-400 font-black text-sm uppercase tracking-widest">🚧 Coming Soon</p>
                <p className="text-gray-400 text-xs mt-1">This menu is temporarily on hold — check back soon!</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 opacity-50 pointer-events-none grayscale select-none">
                {medItems.map(item => {
                  const qty = medCart[item.name] || 0;
                  return (
                    <div key={item.name} className="relative bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-800">
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
                        <span className="text-white font-black text-sm uppercase tracking-widest bg-black/70 px-3 py-1 rounded-lg">Coming Soon</span>
                      </div>
                      <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-1"><h3 className="text-base font-bold text-yellow-400">{item.name}</h3><span className="text-red-400 font-black">${item.price.toFixed(2)}</span></div>
                        <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
                        <button disabled className="w-full bg-zinc-700 text-gray-400 font-black py-2.5 rounded-xl text-sm cursor-not-allowed">➕ Add to Order</button>
                      </div>
                    </div>
                  );
                })}
              </div>
              {medTotal.length > 0 && (
                <OrderSummary title="🧾 Mediterranean Order" items={medTotal} notes={medNotes} onNotesChange={setMedNotes} onReset={() => { setMedCart({}); setMedNotes(""); }} borderColor="border-yellow-400" totalColor="text-yellow-400" />
              )}
            </section>

            {/* ═══════════════ SALADS ════════════════ */}
            <section id="section-salads">
              <SectionHeader emoji="🥙" title="Salads" color="text-green-400" />
              <p className="text-yellow-400 font-bold text-sm mb-1">Individual $9.99 • Family $19.99 • Party $32.99</p>
              <p className="text-gray-400 text-xs mb-5">Choose size, remove ingredients you don't want, add extras, pick dressings.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {saladItems.map(item => {
                  const qty = saladCart[item.name] || 0;
                  const size = saladSize[item.name] || "Individual";
                  const basePrice = saladSizes.find(s => s.label === size)?.price || 9.99;
                  const ing = saladIngredients[item.name] || { removed:[], added:[] };
                  const extraChargeEach = saladExtraCharge[size];
                  const addedCharge = ing.added.length * extraChargeEach;
                  const dressingMap = saladDressing[item.name] || {};
                  const totalDressingQty = Object.values(dressingMap).reduce((s, q) => s + q, 0);
                  const dressingCharge = Math.max(0, totalDressingQty - (freeDressings[size]||2)) * dressingExtraCharge;
                  const price = basePrice + addedCharge + dressingCharge;
                  const extraOptions = allSaladIngredients.filter(i => !item.baseIngredients.includes(i));
                  return (
                    <div key={item.name} className={`bg-zinc-900 rounded-2xl overflow-hidden border-2 transition ${qty>0?"border-green-500":"border-zinc-800"}`}>
                      <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-1"><h3 className="text-base font-bold text-yellow-400">{item.name}</h3><span className="text-red-400 font-black">${price.toFixed(2)}</span></div>
                        <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
                        <Label>📏 Size</Label>
                        <div className="flex gap-2 mb-3">
                          {saladSizes.map(s => (
                            <button key={s.label} onClick={() => setSaladSize(p => ({...p,[item.name]:s.label}))}
                              className={`flex-1 py-2 rounded-lg text-xs font-bold border-2 transition ${size===s.label?"bg-green-600 border-green-600 text-white":"bg-zinc-800 border-zinc-700 text-gray-300 hover:border-green-500"}`}>
                              {s.label}<span className={`block text-[10px] ${size===s.label?"text-white":"text-yellow-400"}`}>${s.price.toFixed(2)}</span>
                            </button>
                          ))}
                        </div>
                        <Label>🥗 Dressing <span className="text-gray-400 normal-case font-normal text-[10px] ml-1">({freeDressings[size]} free, +$1.25 extra)</span></Label>
                        <div className="grid grid-cols-2 gap-1 mb-3">
                          {saladDressings.map(d => {
                            const dQty = dressingMap[d] || 0;
                            const atFree = totalDressingQty < (freeDressings[size]||2);
                            return (
                              <div key={d} className={`rounded-lg border-2 transition ${dQty>0?"border-green-500 bg-zinc-700":"border-zinc-700 bg-zinc-800"}`}>
                                <div className="flex items-center justify-between px-2 py-1 gap-1">
                                  <span className={`text-xs font-bold truncate ${dQty>0?"text-white":"text-gray-300"}`}>{d}</span>
                                  <div className="flex items-center gap-1 shrink-0">
                                    {dQty > 0 && <button onClick={() => updateSaladDressing(item.name,d,-1)} className="bg-zinc-600 text-white w-5 h-5 rounded text-xs font-black">−</button>}
                                    {dQty > 0 && <span className="text-yellow-400 font-black text-xs w-4 text-center">{dQty}</span>}
                                    <button onClick={() => updateSaladDressing(item.name,d,1)} className={`w-5 h-5 rounded text-xs font-black text-white ${atFree||dQty>0?"bg-green-600":"bg-yellow-600"}`}>+</button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <Label>🥬 Remove Ingredients</Label>
                        <div className="grid grid-cols-2 gap-1 mb-3">
                          {item.baseIngredients.map(bi => {
                            const isRemoved = ing.removed.includes(bi);
                            return (
                              <button key={bi} onClick={() => toggleSaladRemoved(item.name,bi)}
                                className={`px-2 py-1 rounded-lg text-xs font-bold border transition text-left ${isRemoved?"bg-zinc-800 border-zinc-700 text-gray-500 line-through":"bg-green-600 border-green-600 text-white"}`}>
                                {isRemoved?"🚫 ":"✅ "}{bi}
                              </button>
                            );
                          })}
                        </div>
                        <Label>➕ Add Extras <span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">(${extraChargeEach.toFixed(2)} each)</span></Label>
                        <div className="grid grid-cols-2 gap-1 mb-3">
                          {extraOptions.map(ei => {
                            const isAdded = ing.added.includes(ei);
                            return (
                              <button key={ei} onClick={() => toggleSaladAdded(item.name,ei)}
                                className={`px-2 py-1 rounded-lg text-xs font-bold border transition text-left ${isAdded?"bg-green-600 border-green-600 text-white":"bg-zinc-800 border-zinc-700 text-gray-300 hover:border-green-500"}`}>
                                {isAdded?"✅ ":"➕ "}{ei}
                              </button>
                            );
                          })}
                        </div>
                        <QtyControl qty={qty} onDec={() => updateSaladQty(item.name,-1)} onInc={() => updateSaladQty(item.name,1)} price={price} accentClass="bg-green-600 hover:bg-green-500" />
                      </div>
                    </div>
                  );
                })}
              </div>
              {Object.keys(saladCart).length > 0 && (
                <div className="bg-zinc-900 rounded-2xl p-5 border border-green-500">
                  <h4 className="text-base font-black text-green-500 uppercase mb-3">🧾 Salad Order</h4>
                  {saladItems.filter(i => saladCart[i.name]).map(item => {
                    const qty = saladCart[item.name];
                    const size = saladSize[item.name] || "Individual";
                    const basePrice = saladSizes.find(s => s.label === size)?.price || 9.99;
                    const ing = saladIngredients[item.name] || { removed:[], added:[] };
                    const addedCharge = ing.added.length * saladExtraCharge[size];
                    const dressingMap = saladDressing[item.name] || {};
                    const totalDressingQty = Object.values(dressingMap).reduce((s, q) => s + q, 0);
                    const dressingCharge = Math.max(0, totalDressingQty - (freeDressings[size]||2)) * dressingExtraCharge;
                    const price = basePrice + addedCharge + dressingCharge;
                    return (
                      <div key={item.name} className="flex justify-between items-start py-2 border-b border-zinc-700">
                        <div>
                          <p className="text-white font-bold text-sm">{item.name} <span className="text-gray-400 text-xs">({size})</span></p>
                          {Object.keys(dressingMap).length > 0 && <p className="text-green-400 text-xs">🥗 {Object.entries(dressingMap).map(([d,q]) => q>1?`${d} x${q}`:d).join(", ")}{dressingCharge>0&&<span className="text-yellow-400"> (+${dressingCharge.toFixed(2)})</span>}</p>}
                          {ing.removed.length > 0 && <p className="text-red-400 text-xs">🚫 No: {ing.removed.join(", ")}</p>}
                          {ing.added.length > 0 && <p className="text-green-400 text-xs">➕ {ing.added.join(", ")}</p>}
                          <p className="text-gray-400 text-xs">x {qty} @ ${price.toFixed(2)}</p>
                        </div>
                        <span className="text-yellow-400 font-black text-sm">${(price*qty).toFixed(2)}</span>
                      </div>
                    );
                  })}
                  <SpecialRequests value={saladNotes} onChange={setSaladNotes} />
                  <div className="flex justify-between mt-3 pt-3 border-t border-zinc-700">
                    <span className="text-white font-black">Total</span>
                    <span className="text-green-400 font-black text-lg">${saladItems.filter(i => saladCart[i.name]).reduce((sum, item) => {
                      const qty = saladCart[item.name]; const size = saladSize[item.name]||"Individual";
                      const basePrice = saladSizes.find(s=>s.label===size)?.price||9.99;
                      const ing = saladIngredients[item.name]||{removed:[],added:[]};
                      const addedCharge = ing.added.length*saladExtraCharge[size];
                      const dressingMap = saladDressing[item.name]||{};
                      const dressingCharge = Math.max(0,Object.values(dressingMap).reduce((s,q)=>s+q,0)-(freeDressings[size]||2))*dressingExtraCharge;
                      return sum+(basePrice+addedCharge+dressingCharge)*qty;
                    },0).toFixed(2)}</span>
                  </div>
                  <button onClick={() => { setSaladCart({}); setSaladDressing({}); setSaladSize({}); setSaladIngredients({}); setSaladNotes(""); }} className="mt-3 bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition">🔄 Reset</button>
                </div>
              )}
            </section>

            {/* ═══════════════ BEVERAGES ════════════════ */}
            <section id="section-beverages">
              <SectionHeader emoji="🥤" title="Beverages" color="text-red-500" />
              <div className="space-y-4">
                {["🥤 Single Cans","🧃 Juices","🍾 2 Liter Bottles","📦 6-Pack"].map(cat => (
                  <div key={cat} className="bg-zinc-900 rounded-2xl p-4">
                    <h3 className="text-sm font-black text-yellow-400 uppercase tracking-widest mb-3">{cat}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {beverageItems.filter(i => i.category === cat).map(item => {
                        const qty = beverageCart[item.name] || 0;
                        return (
                          <div key={item.name} className={`flex items-center justify-between p-3 rounded-xl border-2 transition ${qty>0?"border-yellow-500 bg-zinc-800":"border-zinc-700 bg-zinc-800"}`}>
                            <div><p className="text-white font-bold text-sm">{item.name}</p><p className="text-red-400 font-bold text-xs">${item.price.toFixed(2)}</p></div>
                            {qty === 0
                              ? <button onClick={() => updateBeverageQty(item.name,1)} className="bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 rounded-xl text-xs font-black transition">➕ Add</button>
                              : <div className="flex items-center gap-2">
                                  <button onClick={() => updateBeverageQty(item.name,-1)} className="bg-zinc-700 text-white w-8 h-8 rounded-xl text-base font-black">−</button>
                                  <div className="text-center w-10"><span className="text-lg font-black text-yellow-400">{qty}</span><p className="text-green-400 text-xs">${(item.price*qty).toFixed(2)}</p></div>
                                  <button onClick={() => updateBeverageQty(item.name,1)} className="bg-red-600 text-white w-8 h-8 rounded-xl text-base font-black">+</button>
                                </div>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {beverageTotal.length > 0 && (
                <div className="mt-5">
                  <OrderSummary title="🥤 Beverage Order" items={beverageTotal} notes={beverageNotes} onNotesChange={setBeverageNotes} onReset={() => { setBeverageCart({}); setBeverageNotes(""); }} borderColor="border-yellow-500" totalColor="text-yellow-400" />
                </div>
              )}
            </section>

            {/* ═══════════════ DESSERTS ════════════════ */}
            <section id="section-desserts">
              <SectionHeader emoji="🍮" title="Desserts" color="text-yellow-400" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {dessertItems.map(item => {
                  const qty = dessertCart[item.name] || 0;
                  const selectedSize = item.sizes ? (dessertSize[item.name] || item.sizes[0].label) : null;
                  const price = getDessertBasePrice(item);
                  return (
                    <div key={item.name} className={`bg-zinc-900 rounded-2xl overflow-hidden border-2 transition ${qty>0?"border-yellow-500":"border-zinc-800"}`}>
                      <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-1"><h3 className="text-lg font-bold text-yellow-400">{item.name}</h3><span className="text-red-400 font-black">${price.toFixed(2)}</span></div>
                        <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
                        {item.sizes && (
                          <>
                            <Label>🔢 Quantity</Label>
                            <div className="flex gap-2 mb-3">
                              {item.sizes.map(s => (
                                <button key={s.label} onClick={() => setDessertSize(p => ({...p,[item.name]:s.label}))}
                                  className={`flex-1 py-2 rounded-lg text-xs font-bold border-2 transition ${selectedSize===s.label?"bg-yellow-500 border-yellow-500 text-black":"bg-zinc-800 border-zinc-700 text-gray-300 hover:border-yellow-500"}`}>
                                  {s.label}<span className={`block text-[10px] ${selectedSize===s.label?"text-black":"text-yellow-400"}`}>${s.price.toFixed(2)}</span>
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                        <QtyControl qty={qty} onDec={() => updateDessertQty(item.name,-1)} onInc={() => updateDessertQty(item.name,1)} price={price} accentClass="bg-yellow-500 hover:bg-yellow-400 text-black" />
                      </div>
                    </div>
                  );
                })}
              </div>
              {dessertTotal.length > 0 && (
                <OrderSummary title="🍮 Dessert Order" items={dessertTotal} notes={dessertNotes} onNotesChange={setDessertNotes} onReset={() => { setDessertCart({}); setDessertNotes(""); setDessertSize({}); }} borderColor="border-yellow-500" totalColor="text-yellow-400" />
              )}
            </section>

            {/* ═══════════════ LOCATION & HOURS ════════════════ */}
            <section id="section-location">
              <SectionHeader emoji="📍" title="Location & Hours" color="text-red-500" />
              <div className="bg-zinc-900 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5 pb-5 border-b border-zinc-700">
                  <div>
                    <h3 className="text-xl font-black text-yellow-400">Spice &amp; Bites Hub</h3>
                    <p className="text-gray-300 text-sm mt-1">{restaurantAddress}</p>
                    <p className="text-gray-300 text-sm">{restaurantPhone}</p>
                  </div>
                  <a href={directionsUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-black text-sm px-5 py-3 rounded-xl transition text-center whitespace-nowrap">
                    🧭 Get Directions
                  </a>
                </div>
                <div className="space-y-1">
                  {hoursData.map(({ day, hours }) => {
                    const isToday = new Date().toLocaleDateString("en-US", { weekday: "long" }) === day;
                    return (
                      <div key={day} className={`flex justify-between items-center px-3 py-2 rounded-lg ${isToday ? "bg-red-600/20 border border-red-500" : ""}`}>
                        <span className={`text-sm font-bold ${isToday ? "text-yellow-400" : "text-white"}`}>
                          {day}{isToday && <span className="ml-2 text-[10px] text-green-400 font-black uppercase align-middle">Today</span>}
                        </span>
                        <span className={`text-sm font-bold ${hours === "Closed" ? "text-red-400" : "text-gray-300"}`}>{hours}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ═══════════════ OUR STORY ════════════════ */}
            <section id="section-story">
              <SectionHeader emoji="📖" title="Our Story" color="text-yellow-400" />

              {/* Hero quote */}
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img src="/logo.png" alt="Spice & Bites Hub" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white text-xl italic font-bold" style={{ fontFamily: "'Brush Script MT', cursive" }}>Where Every Bite Tells A Story</p>
                  <p className="text-gray-300 text-xs mt-1">Fishers, Indiana</p>
                </div>
              </div>

              {/* Story text */}
              <div className="bg-zinc-900 rounded-2xl p-5 mb-4">
                <h3 className="text-lg font-black text-yellow-400 mb-3">Who We Are</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">Spice &amp; Bites Hub was born from a simple but powerful idea — that great food has no borders. Nestled in the heart of Fishers, Indiana, we are more than just a restaurant.</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">Our founders brought together decades of culinary passion spanning three rich food traditions — American comfort food, Mediterranean freshness, and bold Pakistani &amp; Indian flavors — all under one roof.</p>
                <p className="text-gray-300 text-sm leading-relaxed">From the first slice of our hand-tossed Signature Pizza to the last spoonful of slow-cooked Lamb Nihari, every dish carries the heart of our kitchen.</p>
              </div>

              {/* What makes us different */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {[
                  { img: "https://images.stockcake.com/public/1/c/4/1c49fbfa-af29-4652-b98e-f2a791d4cd35_large/pizza-dough-toss-stockcake.jpg", title: "Hand-Crafted Pizzas", desc: "Every pizza is hand-tossed, sauced and topped fresh to order. Our dough is made in-house daily." },
                  { img: "https://images.stockcake.com/public/5/6/f/56f7479e-5d83-4d7f-9744-adb0a161f78b_large/spices-meet-heat-stockcake.jpg", title: "Slow-Cooked Pakistani & Indian Flavors", desc: "Our Nihari simmers for hours. Our Biryani is layered and dum-cooked to perfection. Authentic recipes, made fresh every day." },
                  { img: "https://www.aspicyperspective.com/wp-content/uploads/2023/11/Buffalo-Wing-Sauce-11.jpg", title: "Fresh Wings Daily", desc: "Our bone-in and boneless wings are made fresh daily — never frozen. Tossed in your choice of signature flavors." },
                ].map(item => (
                  <div key={item.title} className="bg-zinc-900 rounded-2xl overflow-hidden">
                    <img src={item.img} alt={item.title} className="h-36 w-full object-cover" />
                    <div className="p-4">
                      <h4 className="text-base font-black text-yellow-400 mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Three menus */}
              <div className="bg-zinc-900 rounded-2xl p-5 mb-4">
                <h3 className="text-lg font-black text-white uppercase mb-4 text-center">What We Serve</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  {[
                    { icon: "🍕", title: "American Menu", desc: "Hand-tossed pizzas, calzone wraps, crispy wings, pasta, mac & cheese and starters.", color: "text-red-400" },
                    { icon: "🌯", title: "Mediterranean Menu", desc: "Chicken and lamb gyros, over-rice platters, falafel, Philly cheesesteaks and more.", color: "text-yellow-400" },
                    { icon: "🍛", title: "Pakistani & Indian Cuisine", desc: "Slow-cooked Nihari, aromatic Biryani, Chicken Karahi, Butter Chicken, Malai Boti and more.", color: "text-green-400" },
                  ].map(item => (
                    <div key={item.title} className="py-3">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <h4 className={`text-base font-black mb-1 ${item.color}`}>{item.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community */}
              <div className="bg-zinc-900 rounded-2xl overflow-hidden">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20250310/pngtree-sharing-a-meal-hands-reaching-for-food-on-rustic-wooden-table-image_17087487.jpg" alt="Community Dining" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-black text-yellow-400 mb-2">Serving the Indiana Community</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">Located at 7233 Fishers Landing Dr in Fishers, Indiana, we are proud to serve families, professionals, students and food lovers of all backgrounds.</p>
                  <p className="text-gray-300 text-sm leading-relaxed">Our doors are open seven days a week from 11 AM to midnight. We are not just feeding appetites — we are building memories, one plate at a time.</p>
                  <a href="tel:3175372058" className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3 rounded-xl transition text-sm">📞 Call to Order — 317-537-2058</a>
                </div>
              </div>
            </section>

            {/* ═══════════════ CONTACT ════════════════ */}
            <section className="bg-zinc-900 rounded-2xl p-6 text-center">
              <h2 className="text-2xl font-black text-red-500 uppercase mb-4">Visit Us</h2>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>📍 7233 Fishers Landing Dr, Fishers, IN 46038</p>
                <p>📞 317-537-2058</p>
                <p>🕒 Mon–Sun: 11:00 AM – 12:00 AM</p>
              </div>
              <a href="tel:3175372058" className="mt-5 inline-block bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3 rounded-xl transition">📞 Call to Order</a>
            </section>

          </div>{/* end content */}
        </main>
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="lg:hidden flex-shrink-0 bg-black/95 border-t border-zinc-800 p-3 flex gap-2">
        <a href="tel:3175372058" className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-black text-sm py-3 rounded-xl text-center transition">📞 Call</a>
        <button onClick={() => setCheckoutStep(1)}
          className="flex-1 relative bg-red-600 hover:bg-red-700 text-white font-black text-sm py-3 rounded-xl text-center transition flex items-center justify-center gap-2">
          🛒 Cart
          {cartItemCount > 0 && <span className="bg-yellow-400 text-black text-xs font-black px-2 py-0.5 rounded-full">{cartItemCount}</span>}
        </button>
      </div>

      {/* ── CART DRAWER / CHECKOUT MODAL OVERLAY ── */}
      {checkoutStep > 0 && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => !orderPlaced && setCheckoutStep(0)} />

          {/* Panel — slides in from right */}
          <div className="relative ml-auto w-full max-w-md bg-zinc-900 h-full flex flex-col shadow-2xl border-l border-zinc-700 overflow-hidden">

            {/* ── STEP 1: CART REVIEW ── */}
            {checkoutStep === 1 && (
              <>
                <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-700 bg-zinc-900">
                  <div>
                    <h2 className="text-xl font-black text-white">🛒 Your Cart</h2>
                    {cartItemCount > 0 && <p className="text-gray-400 text-xs">{cartItemCount} item{cartItemCount!==1?"s":""} · ${cartSubtotal.toFixed(2)}</p>}
                  </div>
                  <button onClick={() => setCheckoutStep(0)} className="text-gray-400 hover:text-white text-2xl font-black transition">✕</button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-4">
                  {cartLines.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center py-20">
                      <p className="text-6xl mb-4">🛒</p>
                      <p className="text-white font-black text-xl mb-2">Your cart is empty</p>
                      <p className="text-gray-400 text-sm mb-6">Add items from the menu to get started!</p>
                      <button onClick={() => setCheckoutStep(0)} className="bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3 rounded-xl transition">Browse Menu</button>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {Array.from(new Set(cartLines.map(l => l.category))).map(cat => (
                        <div key={cat} className="mb-4">
                          {/* Category header */}
                          <div className="flex items-center gap-2 mb-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{cat}</p>
                            <div className="h-px flex-1 bg-zinc-800" />
                          </div>

                          {cartLines.filter(l => l.category === cat).map(line => {
                            // Detect if this line supports simple qty changes (non-pizza/wings/calzone)
                            const isQtyable = ["🌯 Mediterranean","🍛 Pakistani & Indian","🫓 Naan","🥗 Starters","🥙 Salads","🥤 Beverages","🍮 Desserts"].includes(line.category);
                            const qtyDec = () => line.onRemove(); // will remove at qty=0 via onRemove
                            // Simple qty adjusters for cart-managed items
                            const getQtyChanger = () => {
                              if (line.category === "🌯 Mediterranean") return {
                                dec: () => updateMedQty(line.id.replace("med-",""), -1),
                                inc: () => updateMedQty(line.id.replace("med-",""), 1),
                                qty: medCart[line.id.replace("med-","")] || 0
                              };
                              if (line.category === "🍛 Pakistani & Indian") return {
                                dec: () => updateDesiQty(line.id.replace("desi-",""), -1),
                                inc: () => updateDesiQty(line.id.replace("desi-",""), 1),
                                qty: desiCart[line.id.replace("desi-","")] || 0
                              };
                              if (line.category === "🫓 Naan") return {
                                dec: () => updateNaanQty(line.id.replace("naan-",""), -1),
                                inc: () => updateNaanQty(line.id.replace("naan-",""), 1),
                                qty: naanCart[line.id.replace("naan-","")] || 0
                              };
                              if (line.category === "🥗 Starters") return {
                                dec: () => updateStarterQty(line.id.replace("starter-",""), -1),
                                inc: () => updateStarterQty(line.id.replace("starter-",""), 1),
                                qty: starterCart[line.id.replace("starter-","")] || 0
                              };
                              if (line.category === "🥤 Beverages") return {
                                dec: () => updateBeverageQty(line.id.replace("bev-",""), -1),
                                inc: () => updateBeverageQty(line.id.replace("bev-",""), 1),
                                qty: beverageCart[line.id.replace("bev-","")] || 0
                              };
                              if (line.category === "🍮 Desserts") return {
                                dec: () => updateDessertQty(line.id.replace("des-",""), -1),
                                inc: () => updateDessertQty(line.id.replace("des-",""), 1),
                                qty: dessertCart[line.id.replace("des-","")] || 0
                              };
                              if (line.category === "🥙 Salads") {
                                const name = line.id.replace("salad-","");
                                return {
                                  dec: () => updateSaladQty(name, -1),
                                  inc: () => updateSaladQty(name, 1),
                                  qty: saladCart[name] || 0
                                };
                              }
                              return null;
                            };
                            const qtyCtrl = isQtyable ? getQtyChanger() : null;

                            // Edit section mapping
                            const editSectionMap = {
                              "🎉 Deals": "section-deals",
                              "🍕 Pizza": "section-pizza",
                              "🫓 Calzone": "section-calzone",
                              "🍗 Wings": line.id === "bonein" ? "section-bonein" : "section-boneless",
                              "🍝 Pasta": "section-pasta",
                              "🧀 Mac & Cheese": "section-mac",
                              "🌯 Mediterranean": "section-med",
                              "🍛 Pakistani & Indian": "section-desi",
                              "🫓 Naan": "section-desi",
                              "🥗 Starters": "section-starters",
                              "🥙 Salads": "section-salads",
                              "🥤 Beverages": "section-beverages",
                              "🍮 Desserts": "section-desserts",
                            };
                            const editSection = editSectionMap[line.category];

                            return (
                              <div key={line.id} className="bg-zinc-800 rounded-2xl p-3 mb-2 border border-zinc-700">
                                {/* Item name + price */}
                                <div className="flex justify-between items-start gap-2 mb-2">
                                  <p className="text-white font-bold text-sm leading-snug flex-1">{line.name}</p>
                                  <span className="text-yellow-400 font-black text-sm shrink-0">${(line.price * line.qty).toFixed(2)}</span>
                                </div>

                                {/* Details + notes */}
                                {line.details && <p className="text-gray-400 text-xs mb-1 leading-relaxed">{line.details}</p>}
                                {line.notes && <p className="text-yellow-400 text-xs mb-2 italic">📝 {line.notes}</p>}

                                {/* Controls row */}
                                <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-700 gap-2">

                                  {/* Left: qty stepper OR unit price */}
                                  {qtyCtrl ? (
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => { if (qtyCtrl.qty <= 1) line.onRemove(); else qtyCtrl.dec(); }}
                                        className="bg-zinc-700 hover:bg-zinc-600 text-white w-8 h-8 rounded-lg text-base font-black transition flex items-center justify-center">
                                        {qtyCtrl.qty <= 1 ? "🗑" : "−"}
                                      </button>
                                      <span className="text-white font-black text-base w-6 text-center">{qtyCtrl.qty}</span>
                                      <button
                                        onClick={qtyCtrl.inc}
                                        className="bg-zinc-700 hover:bg-zinc-600 text-white w-8 h-8 rounded-lg text-base font-black transition">+</button>
                                      <span className="text-gray-500 text-xs ml-1">× ${line.price.toFixed(2)}</span>
                                    </div>
                                  ) : (
                                    <span className="text-gray-500 text-xs">${line.price.toFixed(2)}{line.qty > 1 ? ` × ${line.qty}` : ""}</span>
                                  )}

                                  {/* Right: Edit + Remove */}
                                  <div className="flex items-center gap-2">
                                    {editSection && (
                                      <button
                                        onClick={() => { setCheckoutStep(0); setTimeout(() => scrollToSection(editSection), 100); }}
                                        className="text-xs font-black text-blue-400 hover:text-blue-300 transition bg-zinc-700 hover:bg-zinc-600 px-2.5 py-1.5 rounded-lg">
                                        ✏️ Edit
                                      </button>
                                    )}
                                    <button
                                      onClick={line.onRemove}
                                      className="text-xs font-black text-red-400 hover:text-red-300 transition bg-zinc-700 hover:bg-zinc-600 px-2.5 py-1.5 rounded-lg">
                                      🗑 Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}

                      {/* Clear all */}
                      <button
                        onClick={() => {
                          if (window.confirm("Remove all items from your cart?")) handleNewOrder();
                        }}
                        className="w-full text-xs text-red-400 hover:text-red-300 font-bold py-2 transition text-center">
                        🗑 Clear entire cart
                      </button>
                    </div>
                  )}
                </div>

                {cartLines.length > 0 && (
                  <div className="px-4 py-4 border-t border-zinc-700 bg-zinc-900">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-sm">Subtotal ({cartItemCount} item{cartItemCount!==1?"s":""})</span>
                      <span className="text-white font-black">${cartSubtotal.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-4">Taxes & fees calculated at checkout</p>
                    <button onClick={() => setCheckoutStep(2)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl text-base transition">
                      Proceed to Checkout →
                    </button>
                  </div>
                )}
              </>
            )}

            {/* ── STEP 2: ORDER TYPE ── */}
            {checkoutStep === 2 && (
              <>
                <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-700">
                  <div>
                    <button onClick={() => setCheckoutStep(1)} className="text-gray-400 hover:text-white text-xs font-bold mb-1">← Back</button>
                    <h2 className="text-xl font-black text-white">How would you like your order?</h2>
                  </div>
                  <button onClick={() => setCheckoutStep(0)} className="text-gray-400 hover:text-white text-2xl font-black transition">✕</button>
                </div>

                <div className="flex-1 px-5 py-6">
                  {/* Progress */}
                  <CheckoutProgress step={2} />

                  <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
                    <button onClick={() => setOrderType("pickup")}
                      className={`rounded-2xl p-5 border-2 transition flex flex-col items-center gap-3 ${orderType==="pickup"?"bg-red-600/20 border-red-500":"bg-zinc-800 border-zinc-700 hover:border-zinc-500"}`}>
                      <span className="text-4xl">🏃</span>
                      <p className="text-white font-black text-base">Pickup</p>
                      <p className="text-gray-400 text-xs text-center">Ready in ~20 min</p>
                      <p className="text-green-400 font-black text-sm">FREE</p>
                      {orderType==="pickup" && <span className="text-green-400 font-black text-xs">✓ Selected</span>}
                    </button>
                    <button onClick={() => setOrderType("delivery")}
                      className={`rounded-2xl p-5 border-2 transition flex flex-col items-center gap-3 ${orderType==="delivery"?"bg-red-600/20 border-red-500":"bg-zinc-800 border-zinc-700 hover:border-zinc-500"}`}>
                      <span className="text-4xl">🚗</span>
                      <p className="text-white font-black text-base">Delivery</p>
                      <p className="text-gray-400 text-xs text-center">Estimate 35–50 min</p>
                      <p className="text-yellow-400 font-black text-sm">+$5.99</p>
                      {orderType==="delivery" && <span className="text-green-400 font-black text-xs">✓ Selected</span>}
                    </button>
                  </div>

                  <div className="bg-zinc-800 rounded-2xl p-4 text-sm text-gray-300 space-y-1">
                    <p>📍 <span className="text-white font-bold">7233 Fishers Landing Dr, Fishers, IN 46038</span></p>
                    <p>🕒 <span className="text-white font-bold">Open daily 11 AM – 12 AM</span></p>
                    <p>📞 <span className="text-white font-bold">317-537-2058</span></p>
                  </div>
                </div>

                <div className="px-5 py-4 border-t border-zinc-700">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-400 text-sm">Subtotal</span><span className="text-white font-black">${cartSubtotal.toFixed(2)}</span>
                  </div>
                  {orderType === "delivery" && (
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-400 text-sm">Delivery fee</span><span className="text-yellow-400 font-black">$5.99</span>
                    </div>
                  )}
                  <button onClick={() => setCheckoutStep(3)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl text-base transition">
                    Continue →
                  </button>
                </div>
              </>
            )}

            {/* ── STEP 3: CUSTOMER DETAILS ── */}
            {checkoutStep === 3 && (
              <>
                <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-700">
                  <div>
                    <button onClick={() => setCheckoutStep(2)} className="text-gray-400 hover:text-white text-xs font-bold mb-1">← Back</button>
                    <h2 className="text-xl font-black text-white">Your Details</h2>
                  </div>
                  <button onClick={() => setCheckoutStep(0)} className="text-gray-400 hover:text-white text-2xl font-black transition">✕</button>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <CheckoutProgress step={3} />

                  <div className="mt-5 space-y-3">
                    <div>
                      <label className="text-white font-black text-xs uppercase tracking-widest block mb-1">Full Name *</label>
                      <input value={customerInfo.name} onChange={e => setCustomerInfo(p=>({...p,name:e.target.value}))}
                        placeholder="John Smith"
                        className="w-full bg-zinc-800 border-2 border-zinc-700 focus:border-yellow-500 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none transition" />
                    </div>
                    <div>
                      <label className="text-white font-black text-xs uppercase tracking-widest block mb-1">Phone Number *</label>
                      <input value={customerInfo.phone} onChange={e => setCustomerInfo(p=>({...p,phone:e.target.value}))}
                        placeholder="(317) 555-0123" type="tel"
                        className="w-full bg-zinc-800 border-2 border-zinc-700 focus:border-yellow-500 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none transition" />
                    </div>

                    {orderType === "delivery" && (
                      <>
                        <div>
                          <label className="text-white font-black text-xs uppercase tracking-widest block mb-1">Street Address *</label>
                          <input value={customerInfo.address} onChange={e => setCustomerInfo(p=>({...p,address:e.target.value}))}
                            placeholder="123 Main Street"
                            className="w-full bg-zinc-800 border-2 border-zinc-700 focus:border-yellow-500 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none transition" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-white font-black text-xs uppercase tracking-widest block mb-1">City *</label>
                            <input value={customerInfo.city} onChange={e => setCustomerInfo(p=>({...p,city:e.target.value}))}
                              placeholder="Fishers"
                              className="w-full bg-zinc-800 border-2 border-zinc-700 focus:border-yellow-500 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none transition" />
                          </div>
                          <div>
                            <label className="text-white font-black text-xs uppercase tracking-widest block mb-1">ZIP *</label>
                            <input value={customerInfo.zip} onChange={e => setCustomerInfo(p=>({...p,zip:e.target.value}))}
                              placeholder="46038"
                              className="w-full bg-zinc-800 border-2 border-zinc-700 focus:border-yellow-500 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none transition" />
                          </div>
                        </div>
                      </>
                    )}

                    <div>
                      <label className="text-white font-black text-xs uppercase tracking-widest block mb-1">Order Notes (optional)</label>
                      <textarea value={customerInfo.notes} onChange={e => setCustomerInfo(p=>({...p,notes:e.target.value}))}
                        placeholder="Ring the doorbell, leave at door, etc."
                        rows={2}
                        className="w-full bg-zinc-800 border-2 border-zinc-700 focus:border-yellow-500 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none transition resize-none" />
                    </div>

                    {/* Order summary preview */}
                    <div className="bg-zinc-800 rounded-2xl p-4 mt-4">
                      <p className="text-white font-black text-sm mb-3 uppercase tracking-widest">Order Summary</p>
                      <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
                        {cartLines.map(line => (
                          <div key={line.id} className="flex justify-between text-xs">
                            <span className="text-gray-300 truncate mr-2">{line.qty > 1 ? `${line.name} x${line.qty}` : line.name}</span>
                            <span className="text-yellow-400 font-bold shrink-0">${(line.price * line.qty).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-zinc-700 mt-3 pt-3 space-y-1">
                        <div className="flex justify-between text-sm"><span className="text-gray-400">Subtotal</span><span className="text-white font-bold">${cartSubtotal.toFixed(2)}</span></div>
                        {orderType==="delivery" && <div className="flex justify-between text-sm"><span className="text-gray-400">Delivery fee</span><span className="text-yellow-400 font-bold">$5.99</span></div>}
                        <div className="flex justify-between text-base font-black"><span className="text-white">Total</span><span className="text-green-400">${cartTotal.toFixed(2)}</span></div>
                      </div>
                      <p className="text-gray-500 text-[10px] mt-2">💳 Payment collected at {orderType === "delivery" ? "door" : "pickup"}</p>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-4 border-t border-zinc-700">
                  <button
                    onClick={handlePlaceOrder}
                    disabled={!customerInfo.name || !customerInfo.phone || (orderType==="delivery" && (!customerInfo.address || !customerInfo.city || !customerInfo.zip))}
                    className="w-full bg-green-600 hover:bg-green-500 disabled:bg-zinc-700 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl text-base transition">
                    ✅ Place Order — ${cartTotal.toFixed(2)}
                  </button>
                  {(!customerInfo.name || !customerInfo.phone) && <p className="text-red-400 text-xs text-center mt-2">Please fill in your name and phone number</p>}
                </div>
              </>
            )}

            {/* ── STEP 4: CONFIRMATION ── */}
            {checkoutStep === 4 && (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-10 overflow-y-auto">
                <div className="text-7xl mb-4 animate-bounce">🎉</div>
                <h2 className="text-3xl font-black text-green-400 mb-2">Order Placed!</h2>
                <p className="text-gray-400 text-sm mb-4">Thank you, <span className="text-white font-bold">{customerInfo.name}</span>!</p>

                <div className="bg-zinc-800 rounded-2xl p-5 w-full mb-6 text-left">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-white font-black text-sm uppercase tracking-widest">Order #{orderNumber}</p>
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${orderType==="delivery"?"bg-blue-600 text-white":"bg-green-600 text-white"}`}>
                      {orderType === "delivery" ? "🚗 Delivery" : "🏃 Pickup"}
                    </span>
                  </div>

                  <div className="space-y-1 max-h-40 overflow-y-auto mb-3">
                    {cartLines.map(line => (
                      <div key={line.id} className="flex justify-between text-xs">
                        <span className="text-gray-300 truncate mr-2">{line.qty>1?`${line.name} x${line.qty}`:line.name}</span>
                        <span className="text-yellow-400 font-bold shrink-0">${(line.price*line.qty).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-zinc-700 pt-3 space-y-1">
                    <div className="flex justify-between text-sm"><span className="text-gray-400">Subtotal</span><span className="text-white">${cartSubtotal.toFixed(2)}</span></div>
                    {orderType==="delivery" && <div className="flex justify-between text-sm"><span className="text-gray-400">Delivery</span><span className="text-yellow-400">$5.99</span></div>}
                    <div className="flex justify-between text-base font-black"><span className="text-white">Total Due</span><span className="text-green-400">${cartTotal.toFixed(2)}</span></div>
                  </div>
                </div>

                {orderType === "delivery" ? (
                  <div className="bg-zinc-800 rounded-2xl p-4 w-full mb-4 text-left">
                    <p className="text-white font-black text-xs uppercase tracking-widest mb-2">📍 Delivering To</p>
                    <p className="text-gray-300 text-sm">{customerInfo.address}</p>
                    <p className="text-gray-300 text-sm">{customerInfo.city}, IN {customerInfo.zip}</p>
                    <p className="text-yellow-400 text-xs mt-2 font-bold">Estimated arrival: 35–50 min</p>
                  </div>
                ) : (
                  <div className="bg-zinc-800 rounded-2xl p-4 w-full mb-4 text-left">
                    <p className="text-white font-black text-xs uppercase tracking-widest mb-2">📍 Pickup At</p>
                    <p className="text-gray-300 text-sm">7233 Fishers Landing Dr, Fishers, IN 46038</p>
                    <p className="text-yellow-400 text-xs mt-2 font-bold">⏱ Ready in approximately 20 minutes</p>
                  </div>
                )}

                <div className="bg-zinc-800 rounded-2xl p-4 w-full mb-6 text-left">
                  <p className="text-white font-black text-xs uppercase tracking-widest mb-1">💳 Payment</p>
                  <p className="text-gray-300 text-sm">Pay <span className="text-green-400 font-black">${cartTotal.toFixed(2)}</span> {orderType==="delivery" ? "at the door" : "when you pick up"}</p>
                  <p className="text-gray-500 text-xs mt-1">We accept cash & all major cards</p>
                </div>

                <a href="tel:3175372058" className="w-full block bg-zinc-800 hover:bg-zinc-700 text-white font-black py-3 rounded-xl text-sm text-center transition mb-3">
                  📞 Call us — 317-537-2058
                </a>
                <button onClick={handleNewOrder} className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3 rounded-xl text-sm transition">
                  🍕 Start New Order
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

// ─── Small helper components ──────────────────────────────────────────────────

function SectionHeader({ emoji, title, color = "text-red-500" }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-3xl">{emoji}</span>
      <h2 className={`text-2xl font-black uppercase ${color}`}>{title}</h2>
      <div className="h-0.5 flex-1 bg-zinc-700 rounded" />
    </div>
  );
}

function SubSection({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-4 hover:bg-zinc-800 transition">
        <span className="text-base font-black text-yellow-400">{title}</span>
        <span className="text-white text-lg">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="px-4 pb-5">{children}</div>}
    </div>
  );
}

function Label({ children }) {
  return <p className="text-white font-black uppercase tracking-widest text-xs mb-2 mt-3">{children}</p>;
}

function Chip({ active, onClick, children, color = "red" }) {
  const activeClass = color === "yellow" ? "bg-yellow-500 border-yellow-500 text-black" : "bg-red-600 border-red-600 text-white";
  return (
    <button onClick={onClick}
      className={`px-3 py-2 rounded-xl font-black border-2 transition text-xs flex flex-col items-center ${active ? activeClass : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
      {children}
    </button>
  );
}

function CookingInstructions({ order, onUpdate }) {
  const toggle = (field, value) => onUpdate(field, order[field] === value ? "" : value);
  const OptionRow = ({ options, field }) => (
    <div className="flex flex-wrap gap-2 mb-3">
      {options.map(opt => (
        <button key={opt} onClick={() => toggle(field, opt)}
          className={`px-3 py-2 rounded-lg text-xs font-bold border-2 transition ${order[field]===opt?"bg-red-600 border-red-600 text-white":"bg-zinc-800 border-zinc-700 text-gray-300 hover:border-red-500"}`}>
          {order[field]===opt ? "✅ " : ""}{opt}
        </button>
      ))}
    </div>
  );
  return (
    <div className="mb-4">
      <Label>🍅 Sauce Type</Label>
      <OptionRow options={sauceTypeOptions} field="sauceType" />
      <Label>🥄 Sauce Amount</Label>
      <OptionRow options={sauceAmountOptions} field="sauceAmount" />
      <Label>🔥 Bake</Label>
      <OptionRow options={bakeOptions} field="bake" />
      <Label>🔪 Cut</Label>
      <OptionRow options={cutOptions} field="cut" />
    </div>
  );
}

function SummaryBox({ children }) {
  return <div className="mt-3 bg-zinc-900 rounded-xl p-3">{children}</div>;
}
function SummaryRow({ label, value, valueClass = "text-red-400" }) {
  return (
    <div className="flex justify-between text-xs mb-1">
      <span className="text-white">{label}</span>
      {value && <span className={`font-bold ${valueClass}`}>{value}</span>}
    </div>
  );
}
function SummaryTotal({ value }) {
  return (
    <div className="border-t border-zinc-700 mt-2 pt-2 flex justify-between">
      <span className="text-white font-black text-xs">Estimated Total</span>
      <span className="text-yellow-400 font-black text-sm">{value}</span>
    </div>
  );
}

function OrderSummary({ title, items, notes, onNotesChange, onReset, borderColor, totalColor }) {
  return (
    <div className={`bg-zinc-900 rounded-2xl p-5 border ${borderColor}`}>
      <h4 className="text-base font-black text-white uppercase mb-3">{title}</h4>
      {items.map(({ name, qty, price }) => (
        <div key={name} className="flex justify-between items-center py-2 border-b border-zinc-700">
          <div><p className="text-white font-bold text-sm">{name}</p><p className="text-gray-400 text-xs">x {qty} @ ${price.toFixed(2)}</p></div>
          <span className="text-yellow-400 font-black text-sm">${(price*qty).toFixed(2)}</span>
        </div>
      ))}
      <SpecialRequests value={notes} onChange={onNotesChange} />
      <div className="flex justify-between mt-3 pt-3 border-t border-zinc-700">
        <span className="text-white font-black">Total</span>
        <span className={`font-black text-lg ${totalColor}`}>${items.reduce((s,{price,qty}) => s+price*qty,0).toFixed(2)}</span>
      </div>
      <button onClick={onReset} className="mt-3 bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition">🔄 Reset Order</button>
    </div>
  );
}

function CheckoutProgress({ step }) {
  const steps = ["Cart", "Order Type", "Details", "Confirmed"];
  return (
    <div className="flex items-center gap-1 mt-2">
      {steps.map((label, i) => {
        const s = i + 1;
        const done = step > s;
        const active = step === s;
        return (
          <div key={label} className="flex items-center gap-1 flex-1">
            <div className="flex flex-col items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black transition ${done ? "bg-green-500 text-white" : active ? "bg-red-600 text-white" : "bg-zinc-700 text-gray-500"}`}>
                {done ? "✓" : s}
              </div>
              <p className={`text-[9px] font-bold mt-0.5 whitespace-nowrap ${active ? "text-white" : done ? "text-green-400" : "text-gray-600"}`}>{label}</p>
            </div>
            {i < steps.length - 1 && <div className={`h-0.5 flex-1 rounded mb-4 ${done ? "bg-green-500" : "bg-zinc-700"}`} />}
          </div>
        );
      })}
    </div>
  );
}

function WingOrderUI({ order, setOrder, sizes, flavors, dips, extraDipCharge, toggleFlavor, updateDipQty, dipTotalQty, dipExtraCharge, emptyOrder }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-4">
      <Label>🔢 Choose Size</Label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
        {sizes.map(s => (
          <button key={s.pcs} onClick={() => setOrder(prev => ({ size:s, flavors:[], dips:{}, notes:prev.notes }))}
            className={`p-2.5 rounded-xl border-2 transition text-left ${order.size?.pcs===s.pcs?"bg-red-600 border-red-600 text-white":"bg-zinc-800 border-zinc-700 text-gray-300 hover:border-red-500"}`}>
            <p className="font-black text-sm">{s.pcs}</p>
            <p className="text-[10px] opacity-80">{s.desc}</p>
            <p className={`font-black text-sm mt-0.5 ${order.size?.pcs===s.pcs?"text-white":"text-yellow-400"}`}>${s.price.toFixed(2)}</p>
          </button>
        ))}
      </div>
      <Label>🌶️ Flavor{order.size?.maxFlavors>1?"s":""} {order.size&&<span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">({order.flavors.length}/{order.size.maxFlavors} selected)</span>}</Label>
      {!order.size && <p className="text-gray-500 text-xs mb-3">Select a size first</p>}
      <div className="flex flex-wrap gap-2 mb-4">
        {flavors.map(flavor => {
          const maxReached = order.size && order.flavors.length >= order.size.maxFlavors && !order.flavors.includes(flavor);
          return (
            <button key={flavor} onClick={() => order.size && toggleFlavor(order,setOrder,order.size.maxFlavors,flavor)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 transition ${order.flavors.includes(flavor)?"bg-red-600 border-red-600 text-white":maxReached?"bg-zinc-800 border-zinc-700 text-gray-500 cursor-not-allowed":"bg-zinc-800 border-zinc-700 text-gray-300 hover:border-red-500"}`}>
              {order.flavors.includes(flavor)?"✅ ":""}{flavor}
            </button>
          );
        })}
      </div>
      <Label>🥣 Dipping Sauce{order.size?.maxDips>1?"s":""} {order.size&&<span className="text-yellow-400 normal-case font-normal text-[10px] ml-1">({order.size.maxDips} free{dipExtraCharge(order)>0?`, +$${dipExtraCharge(order).toFixed(2)} extra`:""})</span>}</Label>
      {!order.size && <p className="text-gray-500 text-xs mb-3">Select a size first</p>}
      <div className="flex flex-wrap gap-3 mb-4">
        {dips.map(dip => {
          const dQty = order.dips?.[dip] || 0;
          return (
            <div key={dip} className={`rounded-xl border-2 transition px-3 py-2 flex items-center gap-2 ${dQty>0?"border-yellow-500 bg-zinc-700":"border-zinc-700 bg-zinc-800"}`}>
              <span className={`font-black text-sm ${dQty>0?"text-white":"text-gray-300"}`}>{dip}</span>
              <div className="flex items-center gap-1">
                <button disabled={!order.size} onClick={() => updateDipQty(setOrder,dip,-1)} className="bg-zinc-600 text-white w-7 h-7 rounded-lg text-base font-black disabled:opacity-40">−</button>
                <span className="text-yellow-400 font-black w-4 text-center text-sm">{dQty}</span>
                <button disabled={!order.size} onClick={() => updateDipQty(setOrder,dip,1)} className="bg-yellow-500 text-black w-7 h-7 rounded-lg text-base font-black disabled:opacity-40">+</button>
              </div>
            </div>
          );
        })}
      </div>
      <SpecialRequests value={order.notes} onChange={v => setOrder(p => ({...p,notes:v}))} />
      {order.size && (
        <SummaryBox>
          <SummaryRow label={`🍗 ${order.size.pcs}`} value={`$${order.size.price.toFixed(2)}`} />
          {order.flavors.length>0 && <SummaryRow label={`🌶️ ${order.flavors.join(", ")}`} />}
          {dipTotalQty(order)>0 && <SummaryRow label={`🥣 ${Object.entries(order.dips).map(([d,q])=>q>1?`${d} x${q}`:d).join(", ")}`} value={dipExtraCharge(order)>0?`+$${dipExtraCharge(order).toFixed(2)}`:undefined} valueClass="text-green-400" />}
          {order.flavors.length < order.size.maxFlavors && <p className="text-orange-400 text-xs mt-1">⚠️ Select {order.size.maxFlavors-order.flavors.length} more flavor{order.size.maxFlavors-order.flavors.length>1?"s":""}</p>}
          <div className="border-t border-zinc-700 mt-2 pt-2 flex justify-between">
            <span className="text-white font-black text-xs">Total</span>
            <span className="text-yellow-400 font-black text-sm">${(order.size.price+dipExtraCharge(order)).toFixed(2)}</span>
          </div>
          <button onClick={() => setOrder({...emptyOrder})} className="text-xs text-red-400 hover:text-red-300 font-bold mt-1">🔄 Reset Order</button>
        </SummaryBox>
      )}
    </div>
  );
}