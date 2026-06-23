"use client";
import { useState, useEffect } from "react";

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
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Any special instructions for the cook? (allergies, extra sauce, cooking preference, etc.)"}
        rows={2}
        className="w-full bg-zinc-800 border-2 border-zinc-700 focus:border-yellow-500 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 outline-none transition resize-none"
      />
    </div>
  );
}

export default function Home() {
  const heroSlides = ["biryani.jpg", "signature pizza.jpg", "calzone.jpg", "gyro.jpg"];
  const [slide, setSlide] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const [pizzaOpen, setPizzaOpen] = useState(false);
  const [buildOpen, setBuildOpen] = useState(false);
  const [specialtyOpen, setSpecialtyOpen] = useState(false);
  const [sliceOpen, setSliceOpen] = useState(false);
  const [calzoneOpen, setCalzoneOpen] = useState(false);
  const [boneInOpen, setBoneInOpen] = useState(false);
  const [bonelessOpen, setBonelessOpen] = useState(false);
  const [desiOpen, setDesiOpen] = useState(false);

  // Salad cart
  const [saladCart, setSaladCart] = useState({});
  const [saladNotes, setSaladNotes] = useState("");
  const [saladSize, setSaladSize] = useState({});
  const [saladDressing, setSaladDressing] = useState({});
  const [saladIngredients, setSaladIngredients] = useState({});
  const saladItems = [
    { img:"https://superbrecipe.com/wp-content/uploads/2025/07/Chicken-Caesar-Salad-1.png", name:"Classic Chicken Caesar Salad", desc:"Romaine lettuce, fresh parmesan, asiago cheese, croutons and fresh tomatoes topped with marinated chicken.", baseIngredients:["Romaine Lettuce","Fresh Parmesan","Asiago Cheese","Croutons","Fresh Tomatoes","Marinated Chicken"] },
    { img:"g salad.jpg", name:"Garden Salad", desc:"Romaine lettuce, fresh tomatoes, bermuda onions, fresh mushrooms, green peppers.", baseIngredients:["Romaine Lettuce","Fresh Tomatoes","Bermuda Onions","Fresh Mushrooms","Green Peppers"] },
    { img:"salad1.jpg", name:"Classic Caesar Salad", desc:"Romaine lettuce, fresh parmesan, asiago cheese, croutons and fresh tomatoes.", baseIngredients:["Romaine Lettuce","Fresh Parmesan","Asiago Cheese","Croutons","Fresh Tomatoes"] },
    { img:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop", name:"Chopped Chicken Salad", desc:"Romaine lettuce, mozzarella cheese, bermuda onions, bacon, chicken.", baseIngredients:["Romaine Lettuce","Mozzarella Cheese","Bermuda Onions","Bacon","Chicken"] },
    { img:"sig salad.jpg", name:"Signature House Salad", desc:"Romaine lettuce with artichoke hearts, green peppers, kalamata olives, fresh tomatoes, onions and feta cheese.", baseIngredients:["Romaine Lettuce","Artichoke Hearts","Green Peppers","Kalamata Olives","Fresh Tomatoes","Bermuda Onions","Feta Cheese"] },
  ];
  const saladSizes = [
    { label: "Individual", price: 9.99 },
    { label: "Family", price: 19.99 },
    { label: "Party", price: 32.99 },
  ];
  const saladDressings = ["Ranch", "Italian", "Caesar", "Blue Cheese", "Balsamic Vinaigrette", "Honey Mustard"];
  const freeDressings = { Individual: 2, Family: 4, Party: 6 };
  const dressingExtraCharge = 1.25;
  const allSaladIngredients = ["Romaine Lettuce","Fresh Parmesan","Asiago Cheese","Croutons","Fresh Tomatoes","Marinated Chicken","Bermuda Onions","Fresh Mushrooms","Green Peppers","Mozzarella Cheese","Bacon","Chicken","Artichoke Hearts","Kalamata Olives","Feta Cheese"];
  const saladExtraCharge = { Individual: 0.75, Family: 1.75, Party: 2.75 };

  const updateSaladQty = (name, delta) => {
    setSaladCart(prev => {
      const qty = Math.max(0, (prev[name] || 0) + delta);
      if (qty === 0) { const next = { ...prev }; delete next[name]; return next; }
      return { ...prev, [name]: qty };
    });
  };
  const updateSaladDressing = (name, dressing, delta) => {
    setSaladDressing(prev => {
      const current = prev[name] || {};
      const qty = Math.max(0, (current[dressing] || 0) + delta);
      if (qty === 0) {
        const next = { ...current };
        delete next[dressing];
        return { ...prev, [name]: next };
      }
      return { ...prev, [name]: { ...current, [dressing]: qty } };
    });
  };
  const toggleSaladRemoved = (name, ingredient) => {
    setSaladIngredients(prev => {
      const cur = prev[name] || { removed: [], added: [] };
      const removed = cur.removed.includes(ingredient) ? cur.removed.filter(i => i !== ingredient) : [...cur.removed, ingredient];
      return { ...prev, [name]: { ...cur, removed } };
    });
  };
  const toggleSaladAdded = (name, ingredient) => {
    setSaladIngredients(prev => {
      const cur = prev[name] || { removed: [], added: [] };
      const added = cur.added.includes(ingredient) ? cur.added.filter(i => i !== ingredient) : [...cur.added, ingredient];
      return { ...prev, [name]: { ...cur, added } };
    });
  };
  const saladTotal = Object.entries(saladCart).map(([name, qty]) => {
    const size = saladSize[name] || "Individual";
    const basePrice = saladSizes.find(s => s.label === size)?.price || 9.99;
    const ing = saladIngredients[name] || { removed: [], added: [] };
    const extraChargeEach = saladExtraCharge[size] || 0.75;
    const addedCharge = ing.added.length * extraChargeEach;
    const dressingMap = saladDressing[name] || {};
    const totalDressingQty = Object.values(dressingMap).reduce((s, q) => s + q, 0);
    const freeDressingAllowance = freeDressings[size] || 2;
    const dressingCharge = Math.max(0, totalDressingQty - freeDressingAllowance) * dressingExtraCharge;
    const price = basePrice + addedCharge + dressingCharge;
    return { name, qty, price, size, removed: ing.removed, added: ing.added, dressingMap, dressingCharge };
  });

  const [desiCart, setDesiCart] = useState({});
  const [naanCart, setNaanCart] = useState({});
  const [desiNotes, setDesiNotes] = useState("");
  const [starterCart, setStarterCart] = useState({});
  const [starterNotes, setStarterNotes] = useState("");

  const starterItems = [
    { img:"https://images.unsplash.com/photo-1548340748-6d2b7d7da280?q=80&w=1200&auto=format&fit=crop", name:"Mozzarella Sticks", price:7.99, desc:"Crispy breaded mozzarella sticks served with marinara sauce for dipping." },
    { img:"toasted.jpg", name:"Toasted Ravioli", price:8.99, desc:"Breaded ravioli fried crispy and served with marinara." },
    { img:"poppers.jpg", name:"Jalapeno Poppers", price:7.99, desc:"Fresh jalapenos stuffed with creamy cheese, breaded, and fried until perfectly crunchy." },
    { img:"g knots.jpg", name:"Garlic Knots", price:5.99, desc:"Soft, oven-baked dough knots brushed with garlic butter and herbs. Served with marinara." },
    { img:"bosco.jpg", name:"Bosco Sticks", price:7.99, desc:"Warm breadsticks stuffed with melted mozzarella, brushed with garlic butter. Served with marinara." },
    { img:"fries1.jpg", name:"Fries", price:3.99, desc:"Crispy golden fries cooked fresh to order. Lightly salted and perfectly crunchy." },
    { img:"season f.jpg", name:"Seasoned Fries", price:4.99, desc:"Crispy fries tossed in our special house seasoning blend for bold flavor in every bite." },
    { img:"cheese f.jpg", name:"Cheesy Fries", price:5.99, desc:"Our hot, crispy fries topped with rich melted cheese for a creamy, savory upgrade." },
    { img:"cgb.jpg", name:"Cheese Garlic Bread", price:6.99, desc:"Freshly made bread with garlic butter sauce topped with mozzarella cheese, baked and served with marinara." },
  ];

  const updateStarterQty = (name, delta) => {
    setStarterCart(prev => {
      const qty = Math.max(0, (prev[name] || 0) + delta);
      if (qty === 0) { const next = { ...prev }; delete next[name]; return next; }
      return { ...prev, [name]: qty };
    });
  };

  const dessertItems = [
    { img: "g j.jpg", name: "Gulab Jamun", price: 4.99, desc: "Soft, golden milk-solid dumplings soaked in a warm rose-scented sugar syrup." },
    { img: "k.jpg", name: "Kulfi", price: 5.99, desc: "Rich, dense South Asian frozen dessert infused with saffron, rose water and crushed pistachios." },
    { img: "cannoli.jpg", name: "Cannoli", price: 4.99, desc: "Traditional Italian tube-shaped fried pastry with sweet cream ricotta filling." },
    { img: "bk.jpg", name: "Baklava", price: 4.99, desc: "Crispy golden phyllo pastry with pistachios and walnuts, drenched in honey syrup." },
    { img: "c cake.jpg", name: "Cheesecake", price: 5.99, desc: "New York Style Cheesecake With Graham Cracker Crust." },
    { img: "ch cake.jpg", name: "Chocolate Cake", price: 5.99, desc: "Layers of chocolate cake filled and topped with fudge." },
  ];
  const [dessertCart, setDessertCart] = useState({});
  const [dessertNotes, setDessertNotes] = useState("");
  const updateDessertQty = (name, delta) => {
    setDessertCart(prev => {
      const qty = Math.max(0, (prev[name] || 0) + delta);
      if (qty === 0) { const next = { ...prev }; delete next[name]; return next; }
      return { ...prev, [name]: qty };
    });
  };
  const dessertTotal = Object.entries(dessertCart).map(([name, qty]) => {
    const item = dessertItems.find(i => i.name === name);
    return { name, qty, price: item?.price || 0 };
  });

  const beverageItems = [
    { name: "Coke (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Diet Coke (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Coke Zero (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Sprite (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Sprite Zero (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Pepsi (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Pepsi Zero (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Dr Pepper (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Mountain Dew (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Fanta (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Root Beer (Can)", price: 1.99, category: "🥤 Single Cans" },
    { name: "Apple Juice (Bottle)", price: 2.49, category: "🧃 Juices" },
    { name: "Orange Juice (Bottle)", price: 2.49, category: "🧃 Juices" },
    { name: "Pineapple Juice (Bottle)", price: 2.49, category: "🧃 Juices" },
    { name: "Coke 2 Liter", price: 4.99, category: "🍾 2 Liter Bottles" },
    { name: "Sprite 2 Liter", price: 4.99, category: "🍾 2 Liter Bottles" },
    { name: "Diet Coke 2 Liter", price: 4.99, category: "🍾 2 Liter Bottles" },
    { name: "Sprite Zero 2 Liter", price: 4.99, category: "🍾 2 Liter Bottles" },
    { name: "Pepsi 2 Liter", price: 4.99, category: "🍾 2 Liter Bottles" },
    { name: "Diet Pepsi 2 Liter", price: 4.99, category: "🍾 2 Liter Bottles" },
    { name: "Dr Pepper 2 Liter", price: 4.99, category: "🍾 2 Liter Bottles" },
    { name: "Mountain Dew 2 Liter", price: 4.99, category: "🍾 2 Liter Bottles" },
    { name: "Any 6-Pack Cans", price: 6.99, category: "📦 6-Pack" },
  ];
  const [beverageCart, setBeverageCart] = useState({});
  const [beverageNotes, setBeverageNotes] = useState("");
  const updateBeverageQty = (name, delta) => {
    setBeverageCart(prev => {
      const qty = Math.max(0, (prev[name] || 0) + delta);
      if (qty === 0) { const next = { ...prev }; delete next[name]; return next; }
      return { ...prev, [name]: qty };
    });
  };
  const beverageTotal = Object.entries(beverageCart).map(([name, qty]) => {
    const item = beverageItems.find(i => i.name === name);
    return { name, qty, price: item?.price || 0 };
  });
  const starterTotal = Object.entries(starterCart).map(([name, qty]) => {
    const item = starterItems.find(i => i.name === name);
    return { name, qty, price: item?.price || 0 };
  });

  const [medOpen, setMedOpen] = useState(false);
  const [medCart, setMedCart] = useState({});
  const [medNotes, setMedNotes] = useState("");

  const medItems = [
    { img: "chicken over rice.jpg", name: "Chicken Over Rice", price: 12.99, desc: "Seasoned grilled chicken served over fragrant basmati rice with white sauce and hot sauce." },
    { img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1200&auto=format&fit=crop", name: "Lamb Over Rice", price: 14.99, desc: "Tender spiced lamb over fluffy basmati rice with creamy white sauce and house hot sauce." },
    { img: "gyro.jpg", name: "Chicken Gyro", price: 11.99, desc: "Grilled chicken, fresh veggies and garlic sauce wrapped in warm pita bread." },
    { img: "gyro.jpg", name: "Lamb Gyro", price: 13.99, desc: "Slow-roasted seasoned lamb with fresh tomatoes, onions and tzatziki in warm pita." },
    { img: "https://i.cdn.newsbytesapp.com/images/l82920240716142709.jpeg", name: "Falafel Gyro", price: 10.99, desc: "Crispy golden falafel with fresh veggies, hummus and tahini wrapped in soft pita." },
    { img: "c philly.jpg", name: "Chicken Philly", price: 12.99, desc: "Grilled chicken with sauteed peppers, onions and melted cheese on a toasted hoagie roll." },
    { img: "philly.jpg", name: "Philly Cheesesteak", price: 13.99, desc: "Thinly sliced ribeye steak with sauteed onions, peppers and gooey melted cheese on a hoagie roll." },
  ];

  const updateMedQty = (name, delta) => {
    setMedCart(prev => {
      const current = prev[name] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) { const { [name]: _, ...rest } = prev; return rest; }
      return { ...prev, [name]: next };
    });
  };
  const medTotal = Object.entries(medCart).map(([name, qty]) => {
    const item = medItems.find(i => i.name === name);
    return { name, qty, price: item?.price || 0 };
  });

  const desiItems = [
    { img:"korma.jpg", name:"Chicken Korma", price:13.99, desc:"Creamy traditional curry cooked with aromatic spices and rich flavor." },
    { img:"karahi.jpg", name:"Chicken Karahi", price:14.99, desc:"Fresh tomato-based karahi cooked with ginger, garlic and desi spices." },
    { img:"chana daal.jpg", name:"Daal Chana", price:10.99, desc:"Slow-cooked chana daal seasoned with traditional Pakistani spices." },
    { img:"malai boti.jpg", name:"Chicken Malai Boti", price:15.99, desc:"Creamy grilled chicken cubes marinated with cheese and mild spices." },
    { img:"butter chicken.jpg", name:"Butter Chicken", price:14.99, desc:"Tender chicken simmered in rich buttery tomato cream sauce." },
    { img:"tikka.jpg", name:"Chicken Tikka", price:13.99, desc:"Charcoal grilled tikka marinated in yogurt and traditional spices." },
    { img:"nihari.jpg", name:"Lamb Nihari", price:16.99, desc:"Slow-cooked traditional desi curry packed with bold authentic flavor." },
    { img:"biryani.jpg", name:"Signature Biryani", price:15.99, desc:"Aromatic basmati rice layered with rich spices and tender meat." },
  ];
  const naanItems = [
    { img:"pn.png", name:"Plain Naan", price:1.99, desc:"Soft, fluffy tandoor-baked flatbread with a golden crust." },
    { img:"gn.png", name:"Garlic Naan", price:2.49, desc:"Tandoor-baked naan brushed with fresh garlic butter and herbs." },
    { img:"bn.png", name:"Butter Naan", price:2.49, desc:"Soft naan generously brushed with rich melted butter straight from the tandoor." },
  ];

  const updateDesiQty = (name, delta) => {
    setDesiCart(prev => {
      const cur = prev[name] || 0;
      const next = Math.max(0, cur + delta);
      if (next === 0) { const { [name]: _, ...rest } = prev; return rest; }
      return { ...prev, [name]: next };
    });
  };
  const updateNaanQty = (name, delta) => {
    setNaanCart(prev => {
      const cur = prev[name] || 0;
      const next = Math.max(0, cur + delta);
      if (next === 0) { const { [name]: _, ...rest } = prev; return rest; }
      return { ...prev, [name]: next };
    });
  };
  const desiTotal = [
    ...Object.entries(desiCart).map(([name, qty]) => ({ name, qty, price: desiItems.find(i => i.name === name)?.price || 0 })),
    ...Object.entries(naanCart).map(([name, qty]) => ({ name, qty, price: naanItems.find(i => i.name === name)?.price || 0 })),
  ];

  const [pastaOpen, setPastaOpen] = useState(false);
  const [macOpen, setMacOpen] = useState(false);

  const wingFlavors = ["Spicy", "Mild", "Garlic", "Spicy Garlic", "BBQ", "Honey BBQ", "Teriyaki", "Lemon Pepper", "Suicide"];
  const wingDips = ["Ranch", "Blue Cheese"];
  const boneInSizes = [
    { pcs: "6 pcs",  desc: "1 Flavor & 1 Dip",  price: 7.99,  maxFlavors: 1, maxDips: 1 },
    { pcs: "10 pcs", desc: "1 Flavor & 1 Dip",  price: 10.99, maxFlavors: 1, maxDips: 1 },
    { pcs: "15 pcs", desc: "2 Flavors & 2 Dips", price: 15.99, maxFlavors: 2, maxDips: 2 },
    { pcs: "20 pcs", desc: "2 Flavors & 2 Dips", price: 20.99, maxFlavors: 2, maxDips: 2 },
    { pcs: "35 pcs", desc: "3 Flavors & 3 Dips", price: 35.99, maxFlavors: 3, maxDips: 3 },
    { pcs: "50 pcs", desc: "5 Flavors & 5 Dips", price: 50.99, maxFlavors: 5, maxDips: 5 },
    { pcs: "75 pcs", desc: "7 Flavors & 7 Dips", price: 75.99, maxFlavors: 7, maxDips: 7 },
  ];
  const bonelessSizes = [
    { pcs: "7 pcs",  desc: "1 Flavor & 1 Dip",  price: 7.99,  maxFlavors: 1, maxDips: 1 },
    { pcs: "15 pcs", desc: "2 Flavors & 2 Dips", price: 15.99, maxFlavors: 2, maxDips: 2 },
    { pcs: "25 pcs", desc: "2 Flavors & 2 Dips", price: 25.99, maxFlavors: 2, maxDips: 2 },
    { pcs: "35 pcs", desc: "3 Flavors & 3 Dips", price: 35.99, maxFlavors: 3, maxDips: 3 },
    { pcs: "50 pcs", desc: "5 Flavors & 5 Dips", price: 50.99, maxFlavors: 5, maxDips: 5 },
    { pcs: "75 pcs", desc: "6 Flavors & 7 Dips", price: 75.99, maxFlavors: 6, maxDips: 7 },
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
  const wingDipExtraCharge = (order) => {
    const totalQty = wingDipTotalQty(order);
    const freeAllowance = order.size?.maxDips || 0;
    return Math.max(0, totalQty - freeAllowance) * extraDipCharge;
  };

  const emptyBuild = { size: "", crust: "", toppings: [], notes: "" };
  const [buildOrders, setBuildOrders] = useState([{ ...emptyBuild }]);
  const updateBuild = (index, field, value) => setBuildOrders(prev => prev.map((o, i) => i === index ? { ...o, [field]: value } : o));
  const toggleBuildTopping = (index, topping) => setBuildOrders(prev => prev.map((o, i) => i === index ? { ...o, toppings: o.toppings.includes(topping) ? o.toppings.filter(t => t !== topping) : [...o.toppings, topping] } : o));
  const addBuildPizza = () => setBuildOrders(prev => [...prev, { ...emptyBuild }]);
  const removeBuildPizza = (index) => setBuildOrders(prev => prev.filter((_, i) => i !== index));

  const emptySpec = { name: "", size: "", crust: "", toppings: [], notes: "" };
  const [specOrders, setSpecOrders] = useState([{ ...emptySpec }]);
  const updateSpec = (index, field, value) => setSpecOrders(prev => prev.map((o, i) => i === index ? { ...o, [field]: value } : o));
  const toggleSpecTopping = (index, topping) => setSpecOrders(prev => prev.map((o, i) => i === index ? { ...o, toppings: o.toppings.includes(topping) ? o.toppings.filter(t => t !== topping) : [...o.toppings, topping] } : o));
  const addSpecPizza = () => setSpecOrders(prev => [...prev, { ...emptySpec }]);
  const removeSpecPizza = (index) => setSpecOrders(prev => prev.filter((_, i) => i !== index));

  const sliceTypes = ["Cheese", "Pepperoni", "Sausage"];
  const emptySlice = { type: "", quantity: 1, toppings: [], addFries: false, notes: "" };
  const [sliceOrders, setSliceOrders] = useState([{ ...emptySlice }]);
  const updateSlice = (index, field, value) => setSliceOrders(prev => prev.map((o, i) => i === index ? { ...o, [field]: value } : o));
  const toggleSliceTopping = (index, topping) => setSliceOrders(prev => prev.map((o, i) => i === index ? { ...o, toppings: o.toppings.includes(topping) ? o.toppings.filter(t => t !== topping) : [...o.toppings, topping] } : o));
  const addSliceOrder = () => setSliceOrders(prev => [...prev, { ...emptySlice }]);
  const removeSliceOrder = (index) => setSliceOrders(prev => prev.filter((_, i) => i !== index));

  const [calzoneToppings, setCalzoneToppings] = useState({});
  const [calzoneNotes, setCalzoneNotes] = useState({});
  const toggleCalzoneTopping = (itemName, topping) => {
    setCalzoneToppings(prev => { const c = prev[itemName] || []; return { ...prev, [itemName]: c.includes(topping) ? c.filter(t => t !== topping) : [...c, topping] }; });
  };

  const [pastaToppings, setPastaToppings] = useState({});
  const [pastaNotes, setPastaNotes] = useState({});
  const togglePastaTopping = (itemName, topping) => {
    setPastaToppings(prev => { const c = prev[itemName] || []; return { ...prev, [itemName]: c.includes(topping) ? c.filter(t => t !== topping) : [...c, topping] }; });
  };

  const [macToppings, setMacToppings] = useState({});
  const [macNotes, setMacNotes] = useState({});
  const toggleMacTopping = (itemName, topping) => {
    setMacToppings(prev => { const c = prev[itemName] || []; return { ...prev, [itemName]: c.includes(topping) ? c.filter(t => t !== topping) : [...c, topping] }; });
  };

  const buildSizes = [
    { size: '10"', price: "$8.99" }, { size: '12"', price: "$10.99" },
    { size: '14"', price: "$12.99" }, { size: '16"', price: "$14.99" }, { size: '24"', price: "$24.99" },
  ];
  const specSizes = [
    { size: '10"', price: "$12.99" }, { size: '12"', price: "$14.99" },
    { size: '14"', price: "$16.99" }, { size: '16"', price: "$18.99" },
  ];
  const toppingPrices = { '10"': "$1.75", '12"': "$2.25", '14"': "$2.75", '16"': "$3.25", '24"': "$4.00" };
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

  const navLinks = [
    { href: "#starters", label: "STARTERS" },
    { href: "#salads", label: "SALADS" },
    { href: "#beverages", label: "BEVERAGES" },
    { href: "#desserts", label: "DESSERTS" },
    { href: "#menu", label: "MENU" },
    { href: "#story", label: "STORY" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="relative z-20 bg-black/95 shadow-lg">
        <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-5">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Spice & Bites Hub" className="h-14 md:h-20 w-auto" />
            <p className="text-xs md:text-sm text-gray-300 mt-1 leading-tight">American • Mediterranean • Desi<br />All Under One Roof</p>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm xl:text-base font-bold">
            <a href="#" className="text-red-600 border-b-2 border-red-600 pb-1">HOME</a>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="hover:text-red-500 transition whitespace-nowrap">{l.label}</a>
            ))}
            <a href="tel:9514546896" className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl transition whitespace-nowrap text-sm">ORDER NOW</a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileNavOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileNavOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileNavOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileNavOpen && (
          <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 space-y-1">
            <a href="#" onClick={() => setMobileNavOpen(false)} className="block py-2.5 px-4 rounded-xl text-red-500 font-bold">HOME</a>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileNavOpen(false)}
                className="block py-2.5 px-4 rounded-xl text-white font-bold hover:bg-zinc-800 transition">{l.label}</a>
            ))}
            <a href="tel:9514546896" onClick={() => setMobileNavOpen(false)}
              className="block mt-3 bg-red-600 hover:bg-red-700 text-white font-bold text-center py-3 px-4 rounded-xl transition">
              📞 ORDER NOW
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative h-[300px] md:h-[450px] overflow-hidden">
        {heroSlides.map((src, i) => (
          <div key={src} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url('${src}')` }} />
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${i === slide ? "bg-red-500 scale-125" : "bg-white/50 hover:bg-white"}`} />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-5 md:px-16 pt-6 pb-8 md:pb-10 max-w-3xl h-full flex flex-col justify-end">
          <h1 className="text-3xl md:text-6xl font-black leading-tight text-red-600 uppercase">Spice &amp; Bites Hub</h1>
          <p className="mt-1 md:mt-2 text-xl md:text-3xl text-white italic" style={{ fontFamily: "'Brush Script MT', cursive" }}>Where Every Bite Tells A Story</p>
          <p className="mt-2 md:mt-3 text-sm md:text-lg text-gray-300 leading-relaxed">Pizza • Gyro • Wings • Biryani • Nihari</p>
        </div>
      </section>

      {/* FEATURED FAVORITES */}
      <section id="favorites" className="bg-black py-12 md:py-20 px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-red-600 uppercase tracking-[4px] font-bold text-sm">Our Best Picks</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-2 md:mt-3 uppercase">Featured Favorites</h2>
          <p className="text-gray-400 mt-3 text-base md:text-lg">Click any item to jump directly to its menu section</p>
        </div>
        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 max-w-7xl mx-auto snap-x snap-mandatory">
          {[
            { href:"#american-menu", img:"signature pizza.jpg", title:"Signature Pizza", desc:"Pepperoni, sausage, onion, mushrooms, peppers & olives.", label:"American Menu →" },
            { href:"#mediterranean-menu", img:"gyro.jpg", title:"Chicken Gyro", desc:"Grilled chicken, fresh veggies, garlic sauce in pita.", label:"Mediterranean Menu →" },
            { href:"#american-menu", img:"buffalo wings.jpg", title:"Buffalo Wings", desc:"Juicy wings in our signature spicy sauce.", label:"American Menu →" },
            { href:"#desi-menu", img:"biryani.jpg", title:"Signature Biryani", desc:"Aromatic basmati rice with rich spices and tender meat.", label:"Desi Menu →" },
            { href:"#desi-menu", img:"nihari.jpg", title:"Lamb Nihari", desc:"Slow-cooked traditional desi curry.", label:"Desi Menu →" },
          ].map((item) => (
            <a key={item.title} href={item.href}
              className="flex-shrink-0 w-64 md:w-auto snap-start bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500 hover:scale-105 transition duration-300 block">
              <img src={item.img} alt={item.title} className="h-44 md:h-64 w-full object-cover" />
              <div className="p-4 md:p-5 text-center">
                <h3 className="text-xl md:text-3xl font-bold text-yellow-400">{item.title}</h3>
                <p className="text-gray-300 mt-2 md:mt-3 text-sm">{item.desc}</p>
                <p className="mt-3 md:mt-5 text-red-500 font-bold text-sm md:text-lg">{item.label}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="bg-zinc-950 py-12 md:py-20 px-4 md:px-6">
        <h2 className="text-4xl md:text-6xl font-black text-center text-white uppercase mb-8 md:mb-14">Our Menu</h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10 md:mb-16">
          <a href="#american-menu" className="bg-red-600 hover:bg-red-700 px-5 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-xl font-bold transition">American Menu</a>
          <a href="#mediterranean-menu" className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-xl font-bold transition">Mediterranean Menu</a>
          <a href="#desi-menu" className="bg-green-600 hover:bg-green-700 px-5 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-xl font-bold transition">Desi Menu</a>
        </div>

        {/* AMERICAN MENU */}
        <div id="american-menu" className="mb-16 md:mb-24">
          <h3 className="text-3xl md:text-5xl font-black text-red-500 text-center mb-10 md:mb-16 uppercase">American Menu</h3>

          {/* ── PIZZA ── */}
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 max-w-7xl mx-auto mb-4 md:mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button onClick={() => setPizzaOpen(!pizzaOpen)}
                className="flex items-center gap-2 md:gap-4 bg-red-600 hover:bg-red-700 px-5 md:px-10 py-4 md:py-5 rounded-2xl transition">
                <span className="text-2xl md:text-4xl">🍕</span>
                <span className="text-xl md:text-3xl font-black text-white uppercase tracking-widest">Pizza</span>
                <span className="text-xl md:text-3xl text-white">{pizzaOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>

            {pizzaOpen && (
              <div className="max-w-7xl mx-auto mt-4 md:mt-6 space-y-4 md:space-y-6">

                {/* BUILD YOUR OWN */}
                <div className="bg-zinc-900 rounded-3xl overflow-hidden">
                  <button onClick={() => setBuildOpen(!buildOpen)}
                    className="w-full flex items-center justify-between px-5 md:px-10 py-5 md:py-6 hover:bg-zinc-800 transition">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-2xl md:text-3xl">🛠️</span>
                      <span className="text-lg md:text-2xl font-black text-yellow-400 uppercase tracking-wide">Build Your Own Pizza</span>
                    </div>
                    <span className="text-xl md:text-2xl text-white">{buildOpen ? "▲" : "▼"}</span>
                  </button>
                  {buildOpen && (
                    <div className="px-4 md:px-10 pb-8 md:pb-10">
                      <div className="bg-zinc-800 rounded-2xl overflow-hidden mb-6 md:mb-8 max-w-sm">
                        <img src="cheese pizza.jpg" alt="Cheese Pizza" className="h-40 md:h-48 w-full object-cover" />
                        <div className="p-4 md:p-5">
                          <h3 className="text-xl md:text-2xl font-bold text-yellow-400">Cheese Pizza</h3>
                          <p className="text-gray-300 mt-2 text-xs md:text-sm">Signature pizza sauce and melted mozzarella. Build it your way!</p>
                        </div>
                      </div>
                      {buildOrders.map((order, index) => (
                        <div key={index} className="bg-zinc-800 rounded-2xl p-4 md:p-6 mb-5 md:mb-6 border border-zinc-700">
                          <div className="flex justify-between items-center mb-4 md:mb-5">
                            <h5 className="text-lg md:text-xl font-black text-yellow-400">Pizza #{index + 1}</h5>
                            {buildOrders.length > 1 && (
                              <button onClick={() => removeBuildPizza(index)}
                                className="bg-red-700 hover:bg-red-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition">✕ Remove</button>
                            )}
                          </div>
                          <div className="mb-4 md:mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-3">📏 Size</p>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                              {buildSizes.map(({ size, price }) => (
                                <button key={size} onClick={() => updateBuild(index, "size", size)}
                                  className={`px-3 md:px-5 py-2 md:py-3 rounded-xl font-black border-2 transition flex flex-col items-center text-sm ${order.size === size ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                                  <span>{size}</span>
                                  <span className={`text-xs font-bold ${order.size === size ? "text-white" : "text-yellow-400"}`}>{price}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="mb-4 md:mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-3">🫓 Crust</p>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                              {crustTypes.map((crust) => (
                                <button key={crust} onClick={() => updateBuild(index, "crust", crust)}
                                  className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-black border-2 transition text-sm ${order.crust === crust ? "bg-yellow-500 border-yellow-500 text-black" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-yellow-500"}`}>
                                  {crust}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🧄 Toppings</p>
                            {order.size
                              ? <p className="text-yellow-400 text-xs mb-3">Each topping: {toppingPrices[order.size]} for {order.size}</p>
                              : <p className="text-gray-400 text-xs mb-3">Select a size to see topping prices</p>}
                            <ToppingGrid selectedToppings={order.toppings} onToggle={(t) => toggleBuildTopping(index, t)} toppingList={toppings} />
                          </div>
                          <SpecialRequests value={order.notes} onChange={(v) => updateBuild(index, "notes", v)} />
                          {(order.size || order.crust || order.toppings.length > 0) && (
                            <div className="mt-4 md:mt-5 bg-zinc-900 rounded-xl p-3 md:p-4">
                              <p className="text-yellow-400 font-black text-xs uppercase mb-2 md:mb-3">Pizza #{index + 1} Summary</p>
                              {order.size && <div className="flex justify-between text-xs mb-1"><span className="text-white">📏 {order.size} Base</span><span className="text-red-400 font-bold">{buildSizes.find(s => s.size === order.size)?.price}</span></div>}
                              {order.crust && <p className="text-white text-xs mb-1">🫓 {order.crust}</p>}
                              {order.toppings.length > 0 && order.size && (
                                <div>
                                  <div className="flex justify-between text-xs mb-1">
                                    <span className="text-white">🧄 {order.toppings.length} topping{order.toppings.length > 1 ? "s" : ""} x {toppingPrices[order.size]}</span>
                                    <span className="text-green-400 font-bold">+${(order.toppings.length * parseFloat(toppingPrices[order.size].replace("$",""))).toFixed(2)}</span>
                                  </div>
                                  <p className="text-gray-400 text-xs mb-2">{order.toppings.join(", ")}</p>
                                </div>
                              )}
                              {order.size && (
                                <div className="border-t border-zinc-700 mt-2 pt-2 flex justify-between">
                                  <span className="text-white font-black text-xs">Estimated Total</span>
                                  <span className="text-yellow-400 font-black text-xs">${(parseFloat(buildSizes.find(s => s.size === order.size)?.price.replace("$","") || 0) + (order.toppings.length * parseFloat((toppingPrices[order.size] || "$0").replace("$","")))).toFixed(2)}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                      <button onClick={addBuildPizza}
                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-base md:text-lg py-3 md:py-4 rounded-2xl transition mt-2">
                        ➕ Add Another Pizza
                      </button>
                    </div>
                  )}
                </div>

                {/* SPECIALTY PIZZA */}
                <div className="bg-zinc-900 rounded-3xl overflow-hidden">
                  <button onClick={() => setSpecialtyOpen(!specialtyOpen)}
                    className="w-full flex items-center justify-between px-5 md:px-10 py-5 md:py-6 hover:bg-zinc-800 transition">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-2xl md:text-3xl">⭐</span>
                      <span className="text-lg md:text-2xl font-black text-yellow-400 uppercase tracking-wide">Specialty Pizza</span>
                    </div>
                    <span className="text-xl md:text-2xl text-white">{specialtyOpen ? "▲" : "▼"}</span>
                  </button>
                  {specialtyOpen && (
                    <div className="px-4 md:px-10 pb-8 md:pb-10">
                      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-10">
                        {specialtyPizzas.map((pizza) => (
                          <div key={pizza.name} className="bg-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition">
                            <img src={pizza.img} alt={pizza.name} className="h-32 md:h-44 w-full object-cover" />
                            <div className="p-3 md:p-4">
                              <h3 className="text-sm md:text-lg font-bold text-yellow-400">{pizza.name}</h3>
                              <p className="text-gray-300 mt-1 text-xs hidden md:block">{pizza.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {specOrders.map((order, index) => (
                        <div key={index} className="bg-zinc-800 rounded-2xl p-4 md:p-6 mb-5 md:mb-6 border border-zinc-700">
                          <div className="flex justify-between items-center mb-4 md:mb-5">
                            <h5 className="text-lg md:text-xl font-black text-yellow-400">Order #{index + 1}</h5>
                            {specOrders.length > 1 && (
                              <button onClick={() => removeSpecPizza(index)}
                                className="bg-red-700 hover:bg-red-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition">✕ Remove</button>
                            )}
                          </div>
                          <div className="mb-4 md:mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-3">🍕 Select Pizza</p>
                            <div className="grid grid-cols-2 gap-2">
                              {specialtyPizzas.map((pizza) => (
                                <button key={pizza.name} onClick={() => updateSpec(index, "name", pizza.name)}
                                  className={`px-2 py-2 rounded-xl text-xs font-bold border-2 transition text-left ${order.name === pizza.name ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                                  {order.name === pizza.name ? "✅ " : ""}{pizza.name}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="mb-4 md:mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-3">📏 Size</p>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                              {specSizes.map(({ size, price }) => (
                                <button key={size} onClick={() => updateSpec(index, "size", size)}
                                  className={`px-3 md:px-5 py-2 md:py-3 rounded-xl font-black border-2 transition flex flex-col items-center text-sm ${order.size === size ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                                  <span>{size}</span>
                                  <span className={`text-xs font-bold ${order.size === size ? "text-white" : "text-yellow-400"}`}>{price}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="mb-4 md:mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-3">🫓 Crust</p>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                              {crustTypes.map((crust) => (
                                <button key={crust} onClick={() => updateSpec(index, "crust", crust)}
                                  className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-black border-2 transition text-sm ${order.crust === crust ? "bg-yellow-500 border-yellow-500 text-black" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-yellow-500"}`}>
                                  {crust}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🧄 Extra Toppings</p>
                            {order.size
                              ? <p className="text-yellow-400 text-xs mb-3">Each topping: {toppingPrices[order.size]} for {order.size}</p>
                              : <p className="text-gray-400 text-xs mb-3">Select a size to see topping prices</p>}
                            <ToppingGrid selectedToppings={order.toppings} onToggle={(t) => toggleSpecTopping(index, t)} toppingList={toppings} />
                          </div>
                          <SpecialRequests value={order.notes} onChange={(v) => updateSpec(index, "notes", v)} />
                          {(order.name || order.size || order.crust || order.toppings.length > 0) && (
                            <div className="mt-4 md:mt-5 bg-zinc-900 rounded-xl p-3 md:p-4">
                              <p className="text-yellow-400 font-black text-xs uppercase mb-2 md:mb-3">Order #{index + 1} Summary</p>
                              {order.name && <p className="text-white text-xs mb-1">🍕 {order.name}</p>}
                              {order.size && <div className="flex justify-between text-xs mb-1"><span className="text-white">📏 {order.size} Base</span><span className="text-red-400 font-bold">{specSizes.find(s => s.size === order.size)?.price}</span></div>}
                              {order.crust && <p className="text-white text-xs mb-1">🫓 {order.crust}</p>}
                              {order.toppings.length > 0 && order.size && (
                                <div>
                                  <div className="flex justify-between text-xs mb-1">
                                    <span className="text-white">🧄 {order.toppings.length} extra topping{order.toppings.length > 1 ? "s" : ""} x {toppingPrices[order.size]}</span>
                                    <span className="text-green-400 font-bold">+${(order.toppings.length * parseFloat(toppingPrices[order.size].replace("$",""))).toFixed(2)}</span>
                                  </div>
                                  <p className="text-gray-400 text-xs mb-2">{order.toppings.join(", ")}</p>
                                </div>
                              )}
                              {order.size && (
                                <div className="border-t border-zinc-700 mt-2 pt-2 flex justify-between">
                                  <span className="text-white font-black text-xs">Estimated Total</span>
                                  <span className="text-yellow-400 font-black text-xs">${(parseFloat(specSizes.find(s => s.size === order.size)?.price.replace("$","") || 0) + (order.toppings.length * parseFloat((toppingPrices[order.size] || "$0").replace("$","")))).toFixed(2)}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                      <button onClick={addSpecPizza}
                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-base md:text-lg py-3 md:py-4 rounded-2xl transition mt-2">
                        ➕ Add Another Pizza
                      </button>
                    </div>
                  )}
                </div>

                {/* PIZZA BY SLICE */}
                <div className="bg-zinc-900 rounded-3xl overflow-hidden">
                  <button onClick={() => setSliceOpen(!sliceOpen)}
                    className="w-full flex items-center justify-between px-5 md:px-10 py-5 md:py-6 hover:bg-zinc-800 transition">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-2xl md:text-3xl">🍕</span>
                      <span className="text-lg md:text-2xl font-black text-yellow-400 uppercase tracking-wide">Pizza by Slice</span>
                    </div>
                    <span className="text-xl md:text-2xl text-white">{sliceOpen ? "▲" : "▼"}</span>
                  </button>
                  {sliceOpen && (
                    <div className="px-4 md:px-10 pb-8 md:pb-10">
                      <div className="bg-red-600 rounded-2xl p-4 md:p-6 mb-6 md:mb-8 text-center">
                        <h4 className="text-xl md:text-2xl font-black text-white uppercase mb-2">🎉 Slice Deal</h4>
                        <p className="text-white text-sm md:text-lg font-bold">Every slice includes a <span className="text-yellow-300">FREE soda can</span> of your choice!</p>
                        <div className="flex justify-center gap-4 md:gap-8 mt-3 md:mt-4 flex-wrap">
                          <div className="bg-black/30 rounded-xl px-4 md:px-6 py-2 md:py-3 text-center">
                            <p className="text-yellow-300 font-black text-base md:text-xl">Slice + Soda</p>
                            <p className="text-white text-xl md:text-2xl font-black">$6.00</p>
                          </div>
                          <div className="bg-black/30 rounded-xl px-4 md:px-6 py-2 md:py-3 text-center">
                            <p className="text-yellow-300 font-black text-base md:text-xl">🍟 Meal Deal</p>
                            <p className="text-white text-xs font-bold">Slice + Soda + Fries</p>
                            <p className="text-white text-xl md:text-2xl font-black">$7.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
                        {[{ img:"slice.jpg", label:"Cheese" },{ img:"slicep.jpg", label:"Pepperoni" },{ img:"sliceb.jpg", label:"Sausage" }].map(s => (
                          <div key={s.label} className="bg-zinc-800 rounded-2xl overflow-hidden text-center">
                            <img src={s.img} alt={s.label} className="h-28 md:h-40 w-full object-cover" />
                            <p className="text-yellow-400 font-black py-2 text-sm md:text-base">{s.label}</p>
                          </div>
                        ))}
                      </div>
                      {sliceOrders.map((order, index) => (
                        <div key={index} className="bg-zinc-800 rounded-2xl p-4 md:p-6 mb-5 md:mb-6 border border-zinc-700">
                          <div className="flex justify-between items-center mb-4 md:mb-5">
                            <h5 className="text-lg md:text-xl font-black text-yellow-400">Slice Order #{index + 1}</h5>
                            {sliceOrders.length > 1 && (
                              <button onClick={() => removeSliceOrder(index)}
                                className="bg-red-700 hover:bg-red-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition">✕ Remove</button>
                            )}
                          </div>
                          <div className="mb-4 md:mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-3">🍕 Choose Your Slice</p>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                              {sliceTypes.map((type) => (
                                <button key={type} onClick={() => updateSlice(index, "type", type)}
                                  className={`flex-1 px-3 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-lg font-black border-2 transition ${order.type === type ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                                  {order.type === type ? "✅ " : ""}{type}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="mb-4 md:mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-3">🔢 Quantity</p>
                            <div className="flex items-center gap-4">
                              <button onClick={() => updateSlice(index, "quantity", Math.max(1, order.quantity - 1))}
                                className="bg-zinc-700 hover:bg-zinc-600 text-white w-11 h-11 md:w-12 md:h-12 rounded-xl text-xl font-black transition">−</button>
                              <span className="text-2xl md:text-3xl font-black text-yellow-400 w-10 text-center">{order.quantity}</span>
                              <button onClick={() => updateSlice(index, "quantity", order.quantity + 1)}
                                className="bg-zinc-700 hover:bg-zinc-600 text-white w-11 h-11 md:w-12 md:h-12 rounded-xl text-xl font-black transition">+</button>
                            </div>
                          </div>
                          <div className="mb-4 md:mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-3">🍟 Add Fries? (Meal Deal)</p>
                            <div className="flex gap-2 md:gap-4 flex-wrap">
                              <button onClick={() => updateSlice(index, "addFries", false)}
                                className={`flex-1 px-3 md:px-6 py-2 md:py-3 rounded-xl font-black border-2 transition text-xs md:text-sm ${!order.addFries ? "bg-red-600 border-red-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-red-500"}`}>
                                No Fries — $6.00/slice
                              </button>
                              <button onClick={() => updateSlice(index, "addFries", true)}
                                className={`flex-1 px-3 md:px-6 py-2 md:py-3 rounded-xl font-black border-2 transition text-xs md:text-sm ${order.addFries ? "bg-green-600 border-green-600 text-white" : "bg-zinc-700 border-zinc-600 text-gray-300 hover:border-green-500"}`}>
                                🍟 Meal Deal — $7.00/slice
                              </button>
                            </div>
                          </div>
                          <div className="mb-4 md:mb-5">
                            <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🧄 Extra Toppings</p>
                            <p className="text-yellow-400 text-xs mb-3">$0.50 per topping per slice</p>
                            <ToppingGrid selectedToppings={order.toppings} onToggle={(t) => toggleSliceTopping(index, t)} toppingList={toppings} />
                          </div>
                          <SpecialRequests value={order.notes} onChange={(v) => updateSlice(index, "notes", v)} />
                          {order.type && (
                            <div className="mt-4 bg-zinc-900 rounded-xl p-3">
                              <p className="text-yellow-400 font-black text-xs uppercase mb-2">Slice Order #{index + 1} Summary</p>
                              <div className="flex justify-between text-xs mb-1"><span className="text-white">🍕 {order.type} Slice x {order.quantity}</span><span className="text-red-400 font-bold">${(6 * order.quantity).toFixed(2)}</span></div>
                              <div className="flex justify-between text-xs mb-1"><span className="text-white">🥤 Soda x {order.quantity} <span className="text-green-400">(included)</span></span><span className="text-green-400 font-bold">FREE</span></div>
                              {order.addFries && <div className="flex justify-between text-xs mb-1"><span className="text-white">🍟 Fries x {order.quantity}</span><span className="text-yellow-400 font-bold">+${order.quantity.toFixed(2)}</span></div>}
                              {order.toppings.length > 0 && (
                                <div>
                                  <div className="flex justify-between text-xs mb-1">
                                    <span className="text-white">🧄 {order.toppings.length} topping{order.toppings.length > 1 ? "s" : ""} x $0.50 x {order.quantity}</span>
                                    <span className="text-green-400 font-bold">+${(order.toppings.length * 0.50 * order.quantity).toFixed(2)}</span>
                                  </div>
                                </div>
                              )}
                              <div className="border-t border-zinc-700 mt-2 pt-2 flex justify-between">
                                <span className="text-white font-black text-xs">Estimated Total</span>
                                <span className="text-yellow-400 font-black text-sm">${((order.addFries ? 7 : 6) * order.quantity + (order.toppings.length * 0.50 * order.quantity)).toFixed(2)}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      <button onClick={addSliceOrder}
                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-base md:text-lg py-3 md:py-4 rounded-2xl transition mt-2">
                        ➕ Add Another Slice Order
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ── CALZONE WRAP ── */}
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 max-w-7xl mx-auto mb-4 md:mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button onClick={() => setCalzoneOpen(!calzoneOpen)}
                className="flex items-center gap-2 md:gap-4 bg-red-600 hover:bg-red-700 px-5 md:px-10 py-4 md:py-5 rounded-2xl transition">
                <span className="text-2xl md:text-4xl">🫓</span>
                <span className="text-xl md:text-3xl font-black text-white uppercase tracking-widest">Calzone Wrap</span>
                <span className="text-xl md:text-3xl text-white">{calzoneOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {calzoneOpen && (
              <div>
                <p className="text-center text-gray-400 text-base md:text-lg italic mb-3 md:mb-4 max-w-3xl mx-auto px-4">Delicious calzone wrapped in our butter crust with melted mozzarella cheese and signature pizza sauce</p>
                <p className="text-center text-yellow-400 font-bold mb-8 md:mb-10 text-sm md:text-base">Additional toppings: <span className="text-green-400">$0.75 each</span></p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto px-4 md:px-0">
                  {[
                    { img:"calzone.jpg", name:"Chicken Club", desc:"Signature pizza sauce, chicken breast, bacon, fresh tomatoes & Bermuda onions." },
                    { img:"calzon1.jpg", name:"Vegetarian", desc:"Signature pizza sauce, onions, fresh mushrooms, green peppers & spinach." },
                    { img:"calzon1.jpg", name:"Signature\u2019s Choice", desc:"Choose any four ingredients your way, wrapped in our golden buttery calzone crust." },
                    { img:"calzon1.jpg", name:"Signature Wrap", desc:"Signature pizza sauce with pepperoni, Italian sausage, onion, fresh mushrooms, green peppers & black olive." },
                    { img:"calzone.jpg", name:"Cheese Wrap", desc:"Signature pizza sauce & layer of melted mozzarella cheese." },
                    { img:"calzone.jpg", name:"Italian Sausage Wrap", desc:"Signature pizza sauce with sausage, fresh mushroom & green pepper layer of melted mozzarella cheese." },
                  ].map((item) => {
                    const itemToppings = calzoneToppings[item.name] || [];
                    const extraCharge = itemToppings.length * 0.75;
                    const total = 11.99 + extraCharge;
                    return (
                      <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                        <img src={item.img} alt={item.name} className="h-44 md:h-48 w-full object-cover" />
                        <div className="p-4 md:p-6">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg md:text-xl font-bold text-yellow-400">{item.name}</h3>
                            <span className="text-lg md:text-xl font-bold text-red-500">$11.99</span>
                          </div>
                          <p className="text-gray-300 text-xs md:text-sm mb-4">{item.desc}</p>
                          <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🧄 Add Toppings</p>
                          <p className="text-yellow-400 text-xs mb-3">$0.75 each</p>
                          <ToppingGrid selectedToppings={itemToppings} onToggle={(t) => toggleCalzoneTopping(item.name, t)} toppingList={toppings} />
                          <SpecialRequests value={calzoneNotes[item.name] || ""} onChange={(v) => setCalzoneNotes(prev => ({ ...prev, [item.name]: v }))} />
                          {itemToppings.length > 0 && (
                            <div className="bg-zinc-800 rounded-xl p-3 mt-4">
                              <div className="flex justify-between text-xs mb-1"><span className="text-white">Base Price</span><span className="text-red-400 font-bold">$11.99</span></div>
                              <div className="flex justify-between text-xs mb-1"><span className="text-white">🧄 {itemToppings.length} topping{itemToppings.length > 1 ? "s" : ""} x $0.75</span><span className="text-green-400 font-bold">+${extraCharge.toFixed(2)}</span></div>
                              <p className="text-gray-400 text-xs mb-2">{itemToppings.join(", ")}</p>
                              <div className="border-t border-zinc-700 pt-2 flex justify-between"><span className="text-white font-black text-xs">Total</span><span className="text-yellow-400 font-black text-sm">${total.toFixed(2)}</span></div>
                              <button onClick={() => setCalzoneToppings(prev => ({ ...prev, [item.name]: [] }))} className="mt-2 text-xs text-red-400 hover:text-red-300 font-bold">🔄 Reset</button>
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

          {/* ── BONE-IN WINGS ── */}
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 max-w-7xl mx-auto mb-4 md:mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button onClick={() => setBoneInOpen(!boneInOpen)}
                className="flex items-center gap-2 md:gap-4 bg-red-600 hover:bg-red-700 px-5 md:px-10 py-4 md:py-5 rounded-2xl transition">
                <span className="text-2xl md:text-4xl">🍗</span>
                <span className="text-xl md:text-3xl font-black text-white uppercase tracking-widest">Bone-in Wings</span>
                <span className="text-xl md:text-3xl text-white">{boneInOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {boneInOpen && (
              <div className="max-w-3xl mx-auto px-4 md:px-0">
                <p className="text-center text-gray-400 text-base md:text-lg italic mb-6 md:mb-8">Made fresh daily — never frozen</p>
                <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                  <img src="buffalo wings.jpg" alt="Bone-in Wings" className="h-48 md:h-72 w-full object-cover" />
                  <div className="p-5 md:p-8">
                    <div className="mb-6 md:mb-8">
                      <p className="text-white font-black uppercase tracking-widest text-xs mb-3 md:mb-4">🔢 Choose Your Size</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                        {boneInSizes.map((s) => (
                          <button key={s.pcs} onClick={() => setBoneInOrder(prev => ({ size: s, flavors: [], dips: [], notes: prev.notes }))}
                            className={`p-2.5 md:p-3 rounded-2xl border-2 transition text-left ${boneInOrder.size?.pcs === s.pcs ? "bg-red-600 border-red-600 text-white" : "bg-zinc-800 border-zinc-700 text-gray-300 hover:border-red-500"}`}>
                            <p className="font-black text-base md:text-lg">{s.pcs}</p>
                            <p className="text-xs opacity-80">{s.desc}</p>
                            <p className={`font-black text-sm md:text-base mt-1 ${boneInOrder.size?.pcs === s.pcs ? "text-white" : "text-yellow-400"}`}>${s.price.toFixed(2)}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-5 md:mb-6">
                      <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🌶️ Choose Your Flavor{boneInOrder.size?.maxFlavors > 1 ? "s" : ""}</p>
                      {boneInOrder.size
                        ? <p className="text-yellow-400 text-xs mb-3">Select up to {boneInOrder.size.maxFlavors} flavor{boneInOrder.size.maxFlavors > 1 ? "s" : ""} ({boneInOrder.flavors.length}/{boneInOrder.size.maxFlavors} selected)</p>
                        : <p className="text-gray-400 text-xs mb-3">Select a size first</p>}
                      <div className="flex flex-wrap gap-2">
                        {wingFlavors.map((flavor) => {
                          const maxReached = boneInOrder.size && boneInOrder.flavors.length >= boneInOrder.size.maxFlavors && !boneInOrder.flavors.includes(flavor);
                          return (
                            <button key={flavor} onClick={() => boneInOrder.size && toggleWingFlavor(boneInOrder, setBoneInOrder, boneInOrder.size.maxFlavors, flavor)}
                              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold border-2 transition ${boneInOrder.flavors.includes(flavor) ? "bg-red-600 border-red-600 text-white" : maxReached ? "bg-zinc-800 border-zinc-700 text-gray-500 cursor-not-allowed" : "bg-zinc-800 border-zinc-700 text-gray-300 hover:border-red-500"}`}>
                              {boneInOrder.flavors.includes(flavor) ? "✅ " : ""}{flavor}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mb-5 md:mb-6">
                      <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🥣 Choose Your Dipping Sauce{boneInOrder.size?.maxDips > 1 ? "s" : ""}</p>
                      {boneInOrder.size
                        ? <p className="text-yellow-400 text-xs mb-3">{boneInOrder.size.maxDips} free, extra ${extraDipCharge.toFixed(2)} each{wingDipTotalQty(boneInOrder) > 0 && ` — ${wingDipTotalQty(boneInOrder)} selected${wingDipExtraCharge(boneInOrder) > 0 ? `, +$${wingDipExtraCharge(boneInOrder).toFixed(2)} charge` : " (free)"}`}</p>
                        : <p className="text-gray-400 text-xs mb-3">Select a size first</p>}
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {wingDips.map((dip) => {
                          const dQty = boneInOrder.dips?.[dip] || 0;
                          return (
                            <div key={dip} className={`rounded-xl border-2 transition px-3 md:px-4 py-2 flex items-center gap-2 md:gap-3 ${dQty > 0 ? "border-yellow-500 bg-zinc-700" : "border-zinc-700 bg-zinc-800"}`}>
                              <span className={`font-black text-sm md:text-base ${dQty > 0 ? "text-white" : "text-gray-300"}`}>{dip}</span>
                              <div className="flex items-center gap-1.5 md:gap-2">
                                <button disabled={!boneInOrder.size} onClick={() => updateWingDipQty(setBoneInOrder, dip, -1)}
                                  className="bg-zinc-600 hover:bg-zinc-500 disabled:opacity-40 text-white w-7 h-7 rounded-lg text-base font-black leading-none transition">−</button>
                                <span className="text-yellow-400 font-black w-4 text-center text-sm">{dQty}</span>
                                <button disabled={!boneInOrder.size} onClick={() => updateWingDipQty(setBoneInOrder, dip, 1)}
                                  className="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-40 text-black w-7 h-7 rounded-lg text-base font-black leading-none transition">+</button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <SpecialRequests value={boneInOrder.notes} onChange={(v) => setBoneInOrder(prev => ({ ...prev, notes: v }))} />
                    {boneInOrder.size && (
                      <div className="bg-zinc-800 rounded-2xl p-4 md:p-5 mt-4">
                        <p className="text-yellow-400 font-black text-xs uppercase mb-3">Your Order Summary</p>
                        <div className="flex justify-between text-xs md:text-sm mb-1"><span className="text-white">🍗 {boneInOrder.size.pcs}</span><span className="text-red-400 font-bold">${boneInOrder.size.price.toFixed(2)}</span></div>
                        {boneInOrder.flavors.length > 0 && <p className="text-white text-xs md:text-sm mb-1">🌶️ {boneInOrder.flavors.join(", ")}</p>}
                        {wingDipTotalQty(boneInOrder) > 0 && (
                          <div className="flex justify-between text-xs md:text-sm mb-1">
                            <span className="text-white">🥣 {Object.entries(boneInOrder.dips).map(([d, q]) => q > 1 ? `${d} x${q}` : d).join(", ")}</span>
                            {wingDipExtraCharge(boneInOrder) > 0 && <span className="text-green-400 font-bold">+${wingDipExtraCharge(boneInOrder).toFixed(2)}</span>}
                          </div>
                        )}
                        {boneInOrder.flavors.length < boneInOrder.size.maxFlavors && <p className="text-orange-400 text-xs">⚠️ Please select {boneInOrder.size.maxFlavors - boneInOrder.flavors.length} more flavor{boneInOrder.size.maxFlavors - boneInOrder.flavors.length > 1 ? "s" : ""}</p>}
                        {wingDipTotalQty(boneInOrder) < boneInOrder.size.maxDips && <p className="text-orange-400 text-xs">⚠️ You get {boneInOrder.size.maxDips} free dip{boneInOrder.size.maxDips > 1 ? "s" : ""} — select {boneInOrder.size.maxDips - wingDipTotalQty(boneInOrder)} more</p>}
                        <div className="border-t border-zinc-700 mt-3 pt-3 flex justify-between">
                          <span className="text-white font-black text-sm">Total</span>
                          <span className="text-yellow-400 font-black text-base md:text-lg">${(boneInOrder.size.price + wingDipExtraCharge(boneInOrder)).toFixed(2)}</span>
                        </div>
                        <button onClick={() => setBoneInOrder({ ...emptyWingOrder })} className="mt-3 text-xs text-red-400 hover:text-red-300 font-bold">🔄 Reset Order</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── BONELESS WINGS ── */}
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 max-w-7xl mx-auto mb-4 md:mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button onClick={() => setBonelessOpen(!bonelessOpen)}
                className="flex items-center gap-2 md:gap-4 bg-red-600 hover:bg-red-700 px-5 md:px-10 py-4 md:py-5 rounded-2xl transition">
                <span className="text-2xl md:text-4xl">🍗</span>
                <span className="text-xl md:text-3xl font-black text-white uppercase tracking-widest">Boneless Wings</span>
                <span className="text-xl md:text-3xl text-white">{bonelessOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {bonelessOpen && (
              <div className="max-w-3xl mx-auto px-4 md:px-0">
                <p className="text-center text-gray-400 text-base md:text-lg italic mb-6 md:mb-8">Made fresh daily — never frozen</p>
                <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                  <img src="bw.jpg" alt="Boneless Wings" className="h-48 md:h-72 w-full object-cover" />
                  <div className="p-5 md:p-8">
                    <div className="mb-6 md:mb-8">
                      <p className="text-white font-black uppercase tracking-widest text-xs mb-3 md:mb-4">🔢 Choose Your Size</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                        {bonelessSizes.map((s) => (
                          <button key={s.pcs} onClick={() => setBonelessOrder(prev => ({ size: s, flavors: [], dips: [], notes: prev.notes }))}
                            className={`p-2.5 md:p-3 rounded-2xl border-2 transition text-left ${bonelessOrder.size?.pcs === s.pcs ? "bg-red-600 border-red-600 text-white" : "bg-zinc-800 border-zinc-700 text-gray-300 hover:border-red-500"}`}>
                            <p className="font-black text-base md:text-lg">{s.pcs}</p>
                            <p className="text-xs opacity-80">{s.desc}</p>
                            <p className={`font-black text-sm md:text-base mt-1 ${bonelessOrder.size?.pcs === s.pcs ? "text-white" : "text-yellow-400"}`}>${s.price.toFixed(2)}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-5 md:mb-6">
                      <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🌶️ Choose Your Flavor{bonelessOrder.size?.maxFlavors > 1 ? "s" : ""}</p>
                      {bonelessOrder.size
                        ? <p className="text-yellow-400 text-xs mb-3">Select up to {bonelessOrder.size.maxFlavors} flavor{bonelessOrder.size.maxFlavors > 1 ? "s" : ""} ({bonelessOrder.flavors.length}/{bonelessOrder.size.maxFlavors} selected)</p>
                        : <p className="text-gray-400 text-xs mb-3">Select a size first</p>}
                      <div className="flex flex-wrap gap-2">
                        {wingFlavors.map((flavor) => {
                          const maxReached = bonelessOrder.size && bonelessOrder.flavors.length >= bonelessOrder.size.maxFlavors && !bonelessOrder.flavors.includes(flavor);
                          return (
                            <button key={flavor} onClick={() => bonelessOrder.size && toggleWingFlavor(bonelessOrder, setBonelessOrder, bonelessOrder.size.maxFlavors, flavor)}
                              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold border-2 transition ${bonelessOrder.flavors.includes(flavor) ? "bg-red-600 border-red-600 text-white" : maxReached ? "bg-zinc-800 border-zinc-700 text-gray-500 cursor-not-allowed" : "bg-zinc-800 border-zinc-700 text-gray-300 hover:border-red-500"}`}>
                              {bonelessOrder.flavors.includes(flavor) ? "✅ " : ""}{flavor}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mb-5 md:mb-6">
                      <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🥣 Dipping Sauce{bonelessOrder.size?.maxDips > 1 ? "s" : ""}</p>
                      {bonelessOrder.size
                        ? <p className="text-yellow-400 text-xs mb-3">{bonelessOrder.size.maxDips} free, extra ${extraDipCharge.toFixed(2)} each{wingDipTotalQty(bonelessOrder) > 0 && ` — ${wingDipTotalQty(bonelessOrder)} selected${wingDipExtraCharge(bonelessOrder) > 0 ? `, +$${wingDipExtraCharge(bonelessOrder).toFixed(2)} charge` : " (free)"}`}</p>
                        : <p className="text-gray-400 text-xs mb-3">Select a size first</p>}
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {wingDips.map((dip) => {
                          const dQty = bonelessOrder.dips?.[dip] || 0;
                          return (
                            <div key={dip} className={`rounded-xl border-2 transition px-3 md:px-4 py-2 flex items-center gap-2 md:gap-3 ${dQty > 0 ? "border-yellow-500 bg-zinc-700" : "border-zinc-700 bg-zinc-800"}`}>
                              <span className={`font-black text-sm md:text-base ${dQty > 0 ? "text-white" : "text-gray-300"}`}>{dip}</span>
                              <div className="flex items-center gap-1.5">
                                <button disabled={!bonelessOrder.size} onClick={() => updateWingDipQty(setBonelessOrder, dip, -1)}
                                  className="bg-zinc-600 hover:bg-zinc-500 disabled:opacity-40 text-white w-7 h-7 rounded-lg text-base font-black leading-none transition">−</button>
                                <span className="text-yellow-400 font-black w-4 text-center text-sm">{dQty}</span>
                                <button disabled={!bonelessOrder.size} onClick={() => updateWingDipQty(setBonelessOrder, dip, 1)}
                                  className="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-40 text-black w-7 h-7 rounded-lg text-base font-black leading-none transition">+</button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <SpecialRequests value={bonelessOrder.notes} onChange={(v) => setBonelessOrder(prev => ({ ...prev, notes: v }))} />
                    {bonelessOrder.size && (
                      <div className="bg-zinc-800 rounded-2xl p-4 md:p-5 mt-4">
                        <p className="text-yellow-400 font-black text-xs uppercase mb-3">Your Order Summary</p>
                        <div className="flex justify-between text-xs md:text-sm mb-1"><span className="text-white">🍗 {bonelessOrder.size.pcs}</span><span className="text-red-400 font-bold">${bonelessOrder.size.price.toFixed(2)}</span></div>
                        {bonelessOrder.flavors.length > 0 && <p className="text-white text-xs md:text-sm mb-1">🌶️ {bonelessOrder.flavors.join(", ")}</p>}
                        {wingDipTotalQty(bonelessOrder) > 0 && (
                          <div className="flex justify-between text-xs md:text-sm mb-1">
                            <span className="text-white">🥣 {Object.entries(bonelessOrder.dips).map(([d, q]) => q > 1 ? `${d} x${q}` : d).join(", ")}</span>
                            {wingDipExtraCharge(bonelessOrder) > 0 && <span className="text-green-400 font-bold">+${wingDipExtraCharge(bonelessOrder).toFixed(2)}</span>}
                          </div>
                        )}
                        {bonelessOrder.flavors.length < bonelessOrder.size.maxFlavors && <p className="text-orange-400 text-xs">⚠️ Please select {bonelessOrder.size.maxFlavors - bonelessOrder.flavors.length} more flavor{bonelessOrder.size.maxFlavors - bonelessOrder.flavors.length > 1 ? "s" : ""}</p>}
                        {wingDipTotalQty(bonelessOrder) < bonelessOrder.size.maxDips && <p className="text-orange-400 text-xs">⚠️ You get {bonelessOrder.size.maxDips} free dip{bonelessOrder.size.maxDips > 1 ? "s" : ""} — select {bonelessOrder.size.maxDips - wingDipTotalQty(bonelessOrder)} more</p>}
                        <div className="border-t border-zinc-700 mt-3 pt-3 flex justify-between">
                          <span className="text-white font-black text-sm">Total</span>
                          <span className="text-yellow-400 font-black text-base md:text-lg">${(bonelessOrder.size.price + wingDipExtraCharge(bonelessOrder)).toFixed(2)}</span>
                        </div>
                        <button onClick={() => setBonelessOrder({ ...emptyWingOrder })} className="mt-3 text-xs text-red-400 hover:text-red-300 font-bold">🔄 Reset Order</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── PASTA ── */}
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 max-w-7xl mx-auto mb-4 md:mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button onClick={() => setPastaOpen(!pastaOpen)}
                className="flex items-center gap-2 md:gap-4 bg-red-600 hover:bg-red-700 px-5 md:px-10 py-4 md:py-5 rounded-2xl transition">
                <span className="text-2xl md:text-4xl">🍝</span>
                <span className="text-xl md:text-3xl font-black text-white uppercase tracking-widest">Pasta</span>
                <span className="text-xl md:text-3xl text-white">{pastaOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {pastaOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto mt-4 px-4 md:px-0">
                {[
                  { img:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1200&auto=format&fit=crop", name:"Chicken Cavatappi", desc:"Olive oil, chicken breast, sauteed spinach, mushrooms, red onions topped with parmesan and parsley." },
                  { img:"m.jpg", name:"Mostaccioli w/ Marinara", desc:"Traditional mostaccioli with marinara topped with parmesan and parsley." },
                  { img:"bm.jpg", name:"Baked Mostaccioli w/ Mozzarella", desc:"Mostaccioli, marinara, mozzarella baked to perfection, topped with parmesan and parsley." },
                  { img:"https://images.unsplash.com/photo-1645112411341-6c4fd023882f?q=80&w=1200&auto=format&fit=crop", name:"Alfredo Cavatappi w/ Chicken", desc:"Cavatappi noodles, chicken breast, mushrooms and spinach, topped with parmesan cheese and parsley." },
                  { img:"https://images.unsplash.com/photo-1612369997610-a07a4b9e8a0c?q=80&w=1200&auto=format&fit=crop", name:"Alfredo Cavatappi", desc:"Cavatappi noodles, alfredo sauce baked to perfection, topped with parmesan and parsley." },
                  { img:"https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=1200&auto=format&fit=crop", name:"Tomato Cream Penne", desc:"Penne pasta baked in creamy alfredo, marinara topped with parmesan and parsley." },
                ].map((item) => {
                  const itemToppings = pastaToppings[item.name] || [];
                  const extra = itemToppings.length * 1.00;
                  const total = 9.99 + extra;
                  return (
                    <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                      <img src={item.img} alt={item.name} className="h-44 md:h-48 w-full object-cover" />
                      <div className="p-4 md:p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-yellow-400">{item.name}</h3>
                          <span className="text-lg md:text-xl font-bold text-red-500">$9.99</span>
                        </div>
                        <p className="text-gray-300 text-xs md:text-sm mb-4">{item.desc}</p>
                        <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🧄 Add Toppings</p>
                        <p className="text-yellow-400 text-xs mb-3">$1.00 each</p>
                        <ToppingGrid selectedToppings={itemToppings} onToggle={(t) => togglePastaTopping(item.name, t)} toppingList={toppings} />
                        <SpecialRequests value={pastaNotes[item.name] || ""} onChange={(v) => setPastaNotes(prev => ({ ...prev, [item.name]: v }))} />
                        {itemToppings.length > 0 && (
                          <div className="bg-zinc-800 rounded-xl p-3 mt-4">
                            <div className="flex justify-between text-xs mb-1"><span className="text-white">Base Price</span><span className="text-red-400 font-bold">$9.99</span></div>
                            <div className="flex justify-between text-xs mb-1"><span className="text-white">🧄 {itemToppings.length} topping{itemToppings.length > 1 ? "s" : ""} x $1.00</span><span className="text-green-400 font-bold">+${extra.toFixed(2)}</span></div>
                            <p className="text-gray-400 text-xs mb-2">{itemToppings.join(", ")}</p>
                            <div className="border-t border-zinc-700 pt-2 flex justify-between"><span className="text-white font-black text-xs">Total</span><span className="text-yellow-400 font-black text-sm">${total.toFixed(2)}</span></div>
                            <button onClick={() => setPastaToppings(prev => ({ ...prev, [item.name]: [] }))} className="mt-2 text-xs text-red-400 hover:text-red-300 font-bold">🔄 Reset</button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── MAC & CHEESE ── */}
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 max-w-7xl mx-auto mb-4 md:mb-6">
              <div className="h-1 flex-1 bg-red-600 rounded" />
              <button onClick={() => setMacOpen(!macOpen)}
                className="flex items-center gap-2 md:gap-4 bg-red-600 hover:bg-red-700 px-5 md:px-10 py-4 md:py-5 rounded-2xl transition">
                <span className="text-2xl md:text-4xl">🧀</span>
                <span className="text-xl md:text-3xl font-black text-white uppercase tracking-widest">Mac &amp; Cheese</span>
                <span className="text-xl md:text-3xl text-white">{macOpen ? "▲" : "▼"}</span>
              </button>
              <div className="h-1 flex-1 bg-red-600 rounded" />
            </div>
            {macOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto mt-4 px-4 md:px-0">
                {[
                  { img:"https://images.unsplash.com/photo-1548340748-6811e9f45f0a?q=80&w=1200&auto=format&fit=crop", name:"Buffalo Chicken Mac", desc:"Chopped chicken breast, Bermuda onions, and our signature spicy sauce, smothered in mozzarella and cheddar." },
                  { img:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop", name:"Double BFT", desc:"Mound of bacon piled on top of feta, tomato, smothered in mozzarella and cheddar." },
                  { img:"https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1200&auto=format&fit=crop", name:"Signature\u2019s Choice", desc:"Four delicious toppings (your choice) smothered in mozzarella and cheddar." },
                  { img:"https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1200&auto=format&fit=crop", name:"BBQ Mac", desc:"BBQ covered bacon, Bermuda onions, cilantro smothered in mozzarella and cheddar." },
                  { img:"https://images.unsplash.com/photo-1612407219897-7f6ae2748668?q=80&w=1200&auto=format&fit=crop", name:"Mac n Cheese", desc:"Classic mac smothered in mozzarella and cheddar." },
                  { img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop", name:"Alfredo Mac", desc:"Creamy alfredo sauce tossed with fresh mushrooms and spinach." },
                  { img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop", name:"Burger Mac", desc:"Ground beef, onions, fresh tomato, mushrooms smothered in mozzarella and cheddar." },
                ].map((item) => {
                  const itemToppings = macToppings[item.name] || [];
                  const extra = itemToppings.length * 1.00;
                  const total = 9.99 + extra;
                  return (
                    <div key={item.name} className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                      <img src={item.img} alt={item.name} className="h-44 md:h-48 w-full object-cover" />
                      <div className="p-4 md:p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-yellow-400">{item.name}</h3>
                          <span className="text-lg md:text-xl font-bold text-red-500">$9.99</span>
                        </div>
                        <p className="text-gray-300 text-xs md:text-sm mb-4">{item.desc}</p>
                        <p className="text-white font-black uppercase tracking-widest text-xs mb-1">🧄 Add Toppings</p>
                        <p className="text-yellow-400 text-xs mb-3">$1.00 each</p>
                        <ToppingGrid selectedToppings={itemToppings} onToggle={(t) => toggleMacTopping(item.name, t)} toppingList={toppings} />
                        <SpecialRequests value={macNotes[item.name] || ""} onChange={(v) => setMacNotes(prev => ({ ...prev, [item.name]: v }))} />
                        {itemToppings.length > 0 && (
                          <div className="bg-zinc-800 rounded-xl p-3 mt-4">
                            <div className="flex justify-between text-xs mb-1"><span className="text-white">Base Price</span><span className="text-red-400 font-bold">$9.99</span></div>
                            <div className="flex justify-between text-xs mb-1"><span className="text-white">🧄 {itemToppings.length} topping{itemToppings.length > 1 ? "s" : ""} x $1.00</span><span className="text-green-400 font-bold">+${extra.toFixed(2)}</span></div>
                            <p className="text-gray-400 text-xs mb-2">{itemToppings.join(", ")}</p>
                            <div className="border-t border-zinc-700 pt-2 flex justify-between"><span className="text-white font-black text-xs">Total</span><span className="text-yellow-400 font-black text-sm">${total.toFixed(2)}</span></div>
                            <button onClick={() => setMacToppings(prev => ({ ...prev, [item.name]: [] }))} className="mt-2 text-xs text-red-400 hover:text-red-300 font-bold">🔄 Reset</button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {/* END AMERICAN MENU */}

        {/* MEDITERRANEAN MENU */}
        <div id="mediterranean-menu" className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 max-w-7xl mx-auto mb-4 md:mb-6">
            <div className="h-1 flex-1 bg-yellow-500 rounded" />
            <button onClick={() => setMedOpen(!medOpen)}
              className="flex items-center gap-2 md:gap-4 bg-yellow-500 hover:bg-yellow-400 text-black px-5 md:px-10 py-4 md:py-5 rounded-2xl transition">
              <span className="text-2xl md:text-4xl">🌯</span>
              <span className="text-xl md:text-3xl font-black uppercase tracking-widest">Mediterranean Menu</span>
              <span className="text-xl md:text-3xl">{medOpen ? "▲" : "▼"}</span>
            </button>
            <div className="h-1 flex-1 bg-yellow-500 rounded" />
          </div>
          {medOpen && (
            <div className="max-w-7xl mx-auto px-4 md:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
                {medItems.map((item) => {
                  const qty = medCart[item.name] || 0;
                  return (
                    <div key={item.name} className={`bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border-2 transition ${qty > 0 ? "border-yellow-400" : "border-zinc-800"}`}>
                      <img src={item.img} alt={item.name} className="h-48 md:h-56 w-full object-cover" />
                      <div className="p-4 md:p-5">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-yellow-400">{item.name}</h3>
                          <span className="text-base md:text-lg font-bold text-red-500">${item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-gray-300 text-xs md:text-sm mb-4">{item.desc}</p>
                        {qty === 0 ? (
                          <button onClick={() => updateMedQty(item.name, 1)}
                            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-2.5 rounded-xl transition text-sm">
                            ➕ Add to Order
                          </button>
                        ) : (
                          <div className="flex items-center gap-3 w-full justify-between">
                            <button onClick={() => updateMedQty(item.name, -1)} className="bg-zinc-700 hover:bg-zinc-600 text-white w-10 h-10 rounded-xl text-xl font-black transition">−</button>
                            <div className="text-center">
                              <span className="text-2xl font-black text-yellow-400">{qty}</span>
                              <p className="text-green-400 text-xs font-bold">${(item.price * qty).toFixed(2)}</p>
                            </div>
                            <button onClick={() => updateMedQty(item.name, 1)} className="bg-yellow-500 hover:bg-yellow-400 text-black w-10 h-10 rounded-xl text-xl font-black transition">+</button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {medTotal.length > 0 && (
                <div className="bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-yellow-400">
                  <h4 className="text-xl md:text-2xl font-black text-yellow-400 uppercase mb-4 md:mb-5">🧾 Your Mediterranean Order</h4>
                  {medTotal.map(({ name, qty, price }) => (
                    <div key={name} className="flex justify-between items-center py-3 border-b border-zinc-700">
                      <div><p className="text-white font-bold text-sm md:text-base">{name}</p><p className="text-gray-400 text-xs">x {qty} @ ${price.toFixed(2)} each</p></div>
                      <span className="text-yellow-400 font-black text-sm md:text-base">${(price * qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <SpecialRequests value={medNotes} onChange={setMedNotes} />
                  <div className="flex justify-between items-center mt-4 md:mt-5 pt-3">
                    <span className="text-white font-black text-lg md:text-xl">Total</span>
                    <span className="text-yellow-400 font-black text-xl md:text-2xl">${medTotal.reduce((sum, { price, qty }) => sum + price * qty, 0).toFixed(2)}</span>
                  </div>
                  <button onClick={() => { setMedCart({}); setMedNotes(""); }} className="mt-4 bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-bold transition">🔄 Reset Order</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* DESI MENU */}
        <div id="desi-menu" className="py-12 md:py-20 bg-black text-white px-4 md:px-6">
          <div className="flex items-center gap-3 max-w-7xl mx-auto mb-4 md:mb-6">
            <div className="h-1 flex-1 bg-green-600 rounded" />
            <button onClick={() => setDesiOpen(!desiOpen)}
              className="flex items-center gap-2 md:gap-4 bg-green-600 hover:bg-green-700 px-5 md:px-10 py-4 md:py-5 rounded-2xl transition">
              <span className="text-2xl md:text-4xl">🍛</span>
              <span className="text-xl md:text-3xl font-black text-white uppercase tracking-widest">Desi Menu</span>
              <span className="text-xl md:text-3xl text-white">{desiOpen ? "▲" : "▼"}</span>
            </button>
            <div className="h-1 flex-1 bg-green-600 rounded" />
          </div>
          <p className="text-center text-gray-300 text-base md:text-xl mb-5 md:mb-6 italic">Where Every Bite Tells A Story</p>
          {desiOpen && (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
                {desiItems.map((item) => {
                  const qty = desiCart[item.name] || 0;
                  return (
                    <div key={item.name} className={`bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border-2 transition ${qty > 0 ? "border-yellow-400" : "border-zinc-800"}`}>
                      <img src={item.img} alt={item.name} className="h-48 md:h-56 w-full object-cover" />
                      <div className="p-4 md:p-5">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-yellow-400">{item.name}</h3>
                          <span className="text-base md:text-lg font-bold text-red-500">${item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-gray-300 text-xs md:text-sm mb-4">{item.desc}</p>
                        {qty === 0 ? (
                          <button onClick={() => updateDesiQty(item.name, 1)} className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-2.5 rounded-xl transition text-sm">➕ Add to Order</button>
                        ) : (
                          <div className="flex items-center gap-3 w-full justify-between">
                            <button onClick={() => updateDesiQty(item.name, -1)} className="bg-zinc-700 hover:bg-zinc-600 text-white w-10 h-10 rounded-xl text-xl font-black transition">−</button>
                            <div className="text-center"><span className="text-2xl font-black text-yellow-400">{qty}</span><p className="text-green-400 text-xs font-bold">${(item.price * qty).toFixed(2)}</p></div>
                            <button onClick={() => updateDesiQty(item.name, 1)} className="bg-green-600 hover:bg-green-500 text-white w-10 h-10 rounded-xl text-xl font-black transition">+</button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="bg-zinc-900 rounded-3xl p-5 md:p-8 shadow-2xl mb-8 md:mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1 flex-1 bg-green-600 rounded" />
                  <h4 className="text-xl md:text-2xl font-black text-yellow-400 uppercase tracking-widest">🫓 Naan Bread</h4>
                  <div className="h-1 flex-1 bg-green-600 rounded" />
                </div>
                <p className="text-center text-gray-400 italic mb-5 text-xs md:text-sm">Freshly baked tandoor bread — the perfect accompaniment to any desi dish</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {naanItems.map((naan) => {
                    const qty = naanCart[naan.name] || 0;
                    return (
                      <div key={naan.name} className={`rounded-2xl overflow-hidden border-2 transition ${qty > 0 ? "border-yellow-400" : "border-zinc-700"}`}>
                        <img src={naan.img} alt={naan.name} className="h-36 md:h-40 w-full object-cover" />
                        <div className={`p-3 md:p-4 ${qty > 0 ? "bg-zinc-700" : "bg-zinc-800"}`}>
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="text-base md:text-lg font-bold text-yellow-400">{naan.name}</h3>
                            <span className="text-sm md:text-base font-bold text-red-400">${naan.price.toFixed(2)}</span>
                          </div>
                          <p className="text-gray-300 text-xs mb-3">{naan.desc}</p>
                          {qty === 0 ? (
                            <button onClick={() => updateNaanQty(naan.name, 1)} className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-2 rounded-xl transition text-xs">➕ Add</button>
                          ) : (
                            <div className="flex items-center justify-between">
                              <button onClick={() => updateNaanQty(naan.name, -1)} className="bg-zinc-600 hover:bg-zinc-500 text-white w-9 h-9 rounded-xl text-lg font-black transition">−</button>
                              <div className="text-center"><span className="text-xl font-black text-yellow-400">{qty}</span><p className="text-green-400 text-xs font-bold">${(naan.price * qty).toFixed(2)}</p></div>
                              <button onClick={() => updateNaanQty(naan.name, 1)} className="bg-green-600 hover:bg-green-500 text-white w-9 h-9 rounded-xl text-lg font-black transition">+</button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {desiTotal.length > 0 && (
                <div className="bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-yellow-400">
                  <h4 className="text-xl md:text-2xl font-black text-yellow-400 uppercase mb-4 md:mb-5">🧾 Your Desi Order Summary</h4>
                  <div className="space-y-3 mb-5">
                    {desiTotal.map(({ name, qty, price }) => (
                      <div key={name} className="flex justify-between items-center border-b border-zinc-700 pb-2">
                        <span className="text-white font-bold text-sm md:text-base">{name} <span className="text-gray-400 text-xs">x {qty}</span></span>
                        <span className="text-red-400 font-black text-sm md:text-base">${(price * qty).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <SpecialRequests value={desiNotes} onChange={setDesiNotes} />
                  <div className="flex justify-between items-center">
                    <span className="text-white font-black text-lg md:text-xl">Estimated Total</span>
                    <span className="text-yellow-400 font-black text-xl md:text-2xl">${desiTotal.reduce((sum, { price, qty }) => sum + price * qty, 0).toFixed(2)}</span>
                  </div>
                  <button onClick={() => { setDesiCart({}); setNaanCart({}); setDesiNotes(""); }} className="mt-4 bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-xl text-sm font-bold transition">🔄 Reset Order</button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* STARTERS */}
      <section id="starters" className="py-12 md:py-20 bg-black text-white px-4 md:px-6">
        <h2 className="text-3xl md:text-6xl font-black text-center text-red-600 mb-4 md:mb-6 uppercase">Starters</h2>
        <p className="text-center text-gray-400 text-base md:text-xl mb-10 md:mb-16 italic">Freshly Prepared Favorites To Start Your Meal</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {starterItems.map((item) => {
            const qty = starterCart[item.name] || 0;
            return (
              <div key={item.name} className={`bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border-2 transition ${qty > 0 ? "border-red-500" : "border-zinc-800"}`}>
                <img src={item.img} alt={item.name} className="h-48 md:h-56 w-full object-cover" />
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-yellow-400">{item.name}</h3>
                    <span className="text-base md:text-lg font-bold text-red-500">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm mb-4">{item.desc}</p>
                  {qty === 0 ? (
                    <button onClick={() => updateStarterQty(item.name, 1)} className="w-full bg-red-600 hover:bg-red-500 text-white font-black py-2.5 rounded-xl transition text-sm">➕ Add to Order</button>
                  ) : (
                    <div className="flex items-center gap-3 w-full justify-between">
                      <button onClick={() => updateStarterQty(item.name, -1)} className="bg-zinc-700 hover:bg-zinc-600 text-white w-10 h-10 rounded-xl text-xl font-black transition">−</button>
                      <div className="text-center"><span className="text-2xl font-black text-yellow-400">{qty}</span><p className="text-green-400 text-xs font-bold">${(item.price * qty).toFixed(2)}</p></div>
                      <button onClick={() => updateStarterQty(item.name, 1)} className="bg-red-600 hover:bg-red-500 text-white w-10 h-10 rounded-xl text-xl font-black transition">+</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {starterTotal.length > 0 && (
          <div className="max-w-7xl mx-auto mt-10 md:mt-12 bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-red-500">
            <h4 className="text-xl md:text-2xl font-black text-red-500 uppercase mb-4 md:mb-5">🧾 Your Starters Order</h4>
            {starterTotal.map(({ name, qty, price }) => (
              <div key={name} className="flex justify-between items-center py-3 border-b border-zinc-700">
                <div><p className="text-white font-bold text-sm md:text-base">{name}</p><p className="text-gray-400 text-xs">x {qty} @ ${price.toFixed(2)} each</p></div>
                <span className="text-yellow-400 font-black text-sm md:text-base">${(price * qty).toFixed(2)}</span>
              </div>
            ))}
            <SpecialRequests value={starterNotes} onChange={setStarterNotes} />
            <div className="flex justify-between items-center mt-4 md:mt-5 pt-3">
              <span className="text-white font-black text-lg md:text-xl">Total</span>
              <span className="text-red-400 font-black text-xl md:text-2xl">${starterTotal.reduce((sum, { price, qty }) => sum + price * qty, 0).toFixed(2)}</span>
            </div>
            <button onClick={() => { setStarterCart({}); setStarterNotes(""); }} className="mt-4 bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-xl text-sm font-bold transition">🔄 Reset Order</button>
          </div>
        )}
      </section>

      {/* SALADS */}
      <section id="salads" className="py-12 md:py-20 bg-zinc-950 text-white px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-green-500 mb-4 md:mb-6">Salads</h2>
        <p className="text-center text-yellow-400 text-lg md:text-2xl font-bold mb-3 md:mb-4">Individual $9.99 • Family $19.99 • Party $32.99</p>
        <p className="text-center text-gray-300 text-sm md:text-lg max-w-4xl mx-auto mb-10 md:mb-14">Choose your size and any dressings you'd like — mix and match as many as you want.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {saladItems.map((item) => {
            const qty = saladCart[item.name] || 0;
            const size = saladSize[item.name] || "Individual";
            const basePrice = saladSizes.find(s => s.label === size)?.price || 9.99;
            const ing = saladIngredients[item.name] || { removed: [], added: [] };
            const extraChargeEach = saladExtraCharge[size];
            const addedCharge = ing.added.length * extraChargeEach;
            const dressingMap = saladDressing[item.name] || {};
            const totalDressingQty = Object.values(dressingMap).reduce((s, q) => s + q, 0);
            const freeDressingAllowance = freeDressings[size] || 2;
            const dressingCharge = Math.max(0, totalDressingQty - freeDressingAllowance) * dressingExtraCharge;
            const price = basePrice + addedCharge + dressingCharge;
            const extraIngredientOptions = allSaladIngredients.filter(i => !item.baseIngredients.includes(i));
            return (
              <div key={item.name} className={`bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border-2 transition ${qty > 0 ? "border-green-500" : "border-zinc-800"}`}>
                <img src={item.img} alt={item.name} className="h-44 md:h-48 w-full object-cover" />
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-yellow-400">{item.name}</h3>
                    <span className="text-base md:text-lg font-bold text-red-500">${price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm mb-4">{item.desc}</p>
                  <div className="mb-4">
                    <p className="text-white font-black text-xs uppercase tracking-widest mb-2">📏 Size</p>
                    <div className="flex gap-2">
                      {saladSizes.map((s) => (
                        <button key={s.label} onClick={() => setSaladSize(prev => ({ ...prev, [item.name]: s.label }))}
                          className={`flex-1 px-1 py-2 rounded-lg text-xs font-bold border-2 transition ${size === s.label ? "bg-green-600 border-green-600 text-white" : "bg-zinc-800 border-zinc-700 text-gray-300 hover:border-green-500"}`}>
                          <span className="block">{s.label}</span>
                          <span className={`block text-[10px] ${size === s.label ? "text-white" : "text-yellow-400"}`}>${s.price.toFixed(2)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-white font-black text-xs uppercase tracking-widest mb-1">🥗 Dressing</p>
                    <p className="text-gray-400 text-xs mb-2">
                      {freeDressings[size]} free • extra $1.25 each
                      {(() => { const over = Math.max(0, totalDressingQty - freeDressings[size]); return totalDressingQty > 0 ? ` — ${totalDressingQty} selected${over > 0 ? `, +$${(over * 1.25).toFixed(2)} charge` : " (free)"}` : ""; })()}
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {saladDressings.map((d) => {
                        const dQty = dressingMap[d] || 0;
                        const atFree = totalDressingQty < freeDressings[size];
                        return (
                          <div key={d} className={`rounded-lg border-2 transition ${dQty > 0 ? "border-green-500 bg-zinc-700" : "border-zinc-700 bg-zinc-800"}`}>
                            <div className="flex items-center justify-between px-2 py-1 gap-1">
                              <span className={`text-xs font-bold truncate ${dQty > 0 ? "text-white" : "text-gray-300"}`}>{d}</span>
                              <div className="flex items-center gap-1 shrink-0">
                                {dQty > 0 && <button onClick={() => updateSaladDressing(item.name, d, -1)} className="bg-zinc-600 hover:bg-zinc-500 text-white w-5 h-5 rounded text-xs font-black leading-none transition">−</button>}
                                {dQty > 0 && <span className="text-yellow-400 font-black text-xs w-4 text-center">{dQty}</span>}
                                <button onClick={() => updateSaladDressing(item.name, d, 1)}
                                  className={`w-5 h-5 rounded text-xs font-black leading-none transition text-white ${atFree || dQty > 0 ? "bg-green-600 hover:bg-green-500" : "bg-yellow-600 hover:bg-yellow-500"}`}>+</button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-white font-black text-xs uppercase tracking-widest mb-2">🥬 Included <span className="text-gray-400 normal-case font-normal">(tap to remove)</span></p>
                    <div className="grid grid-cols-2 gap-1">
                      {item.baseIngredients.map((bi) => {
                        const isRemoved = ing.removed.includes(bi);
                        return (
                          <button key={bi} onClick={() => toggleSaladRemoved(item.name, bi)}
                            className={`px-2 py-1 rounded-lg text-xs font-bold border transition text-left ${isRemoved ? "bg-zinc-800 border-zinc-700 text-gray-500 line-through" : "bg-green-600 border-green-600 text-white"}`}>
                            {isRemoved ? "🚫 " : "✅ "}{bi}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-white font-black text-xs uppercase tracking-widest mb-1">➕ Add Extras</p>
                    <p className="text-yellow-400 text-xs mb-2">${extraChargeEach.toFixed(2)} each for {size} size</p>
                    <div className="grid grid-cols-2 gap-1">
                      {extraIngredientOptions.map((ei) => {
                        const isAdded = ing.added.includes(ei);
                        return (
                          <button key={ei} onClick={() => toggleSaladAdded(item.name, ei)}
                            className={`px-2 py-1 rounded-lg text-xs font-bold border transition text-left ${isAdded ? "bg-green-600 border-green-600 text-white" : "bg-zinc-800 border-zinc-700 text-gray-300 hover:border-green-500"}`}>
                            {isAdded ? "✅ " : "➕ "}{ei}
                          </button>
                        );
                      })}
                    </div>
                    {ing.added.length > 0 && <p className="text-green-400 text-xs font-bold mt-2">+${addedCharge.toFixed(2)} for {ing.added.length} extra ingredient{ing.added.length > 1 ? "s" : ""}</p>}
                  </div>
                  {qty === 0 ? (
                    <button onClick={() => updateSaladQty(item.name, 1)} className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-2.5 rounded-xl transition text-sm">➕ Add to Order</button>
                  ) : (
                    <div className="flex items-center gap-3 w-full justify-between">
                      <button onClick={() => updateSaladQty(item.name, -1)} className="bg-zinc-700 hover:bg-zinc-600 text-white w-10 h-10 rounded-xl text-xl font-black transition">−</button>
                      <div className="text-center"><span className="text-2xl font-black text-yellow-400">{qty}</span><p className="text-green-400 text-xs font-bold">${(price * qty).toFixed(2)}</p></div>
                      <button onClick={() => updateSaladQty(item.name, 1)} className="bg-green-600 hover:bg-green-500 text-white w-10 h-10 rounded-xl text-xl font-black transition">+</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {saladTotal.length > 0 && (
          <div className="max-w-7xl mx-auto mt-10 md:mt-12 bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-green-500">
            <h4 className="text-xl md:text-2xl font-black text-green-500 uppercase mb-4 md:mb-5">🧾 Your Salad Order</h4>
            {saladTotal.map(({ name, qty, price, size, removed, added, dressingCharge }) => (
              <div key={name} className="flex justify-between items-center py-3 border-b border-zinc-700">
                <div>
                  <p className="text-white font-bold text-sm md:text-base">{name} <span className="text-gray-400 text-xs font-normal">({size})</span></p>
                  {Object.keys(saladDressing[name] || {}).length > 0 && (
                    <p className="text-green-400 text-xs font-bold">🥗 {Object.entries(saladDressing[name]).map(([d, q]) => q > 1 ? `${d} x${q}` : d).join(", ")}{dressingCharge > 0 && <span className="text-yellow-400"> (+${dressingCharge.toFixed(2)})</span>}</p>
                  )}
                  {removed.length > 0 && <p className="text-red-400 text-xs">🚫 No: {removed.join(", ")}</p>}
                  {added.length > 0 && <p className="text-green-400 text-xs">➕ Extra: {added.join(", ")}</p>}
                  <p className="text-gray-400 text-xs">x {qty} @ ${price.toFixed(2)} each</p>
                </div>
                <span className="text-yellow-400 font-black text-sm md:text-base">${(price * qty).toFixed(2)}</span>
              </div>
            ))}
            <SpecialRequests value={saladNotes} onChange={setSaladNotes} />
            <div className="flex justify-between items-center mt-4 md:mt-5 pt-3">
              <span className="text-white font-black text-lg md:text-xl">Total</span>
              <span className="text-green-400 font-black text-xl md:text-2xl">${saladTotal.reduce((sum, { price, qty }) => sum + price * qty, 0).toFixed(2)}</span>
            </div>
            <button onClick={() => { setSaladCart({}); setSaladDressing({}); setSaladSize({}); setSaladIngredients({}); setSaladNotes(""); }} className="mt-4 bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-xl text-sm font-bold transition">🔄 Reset Order</button>
          </div>
        )}
      </section>

      {/* BEVERAGES */}
      <section id="beverages" className="py-12 md:py-20 bg-black text-white px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-red-600 mb-4 md:mb-6">Beverages</h2>
        <p className="text-center text-gray-300 text-sm md:text-xl mb-10 md:mb-14">Soft Drinks Served In Cans • Juices Served In Bottles • 2 Liters Available</p>
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 mb-6 md:mb-8">
          {["🥤 Single Cans", "🧃 Juices", "🍾 2 Liter Bottles", "📦 6-Pack"].map((category) => {
            const categoryItems = beverageItems.filter(i => i.category === category);
            return (
              <div key={category} className="bg-zinc-900 rounded-3xl p-4 md:p-6 shadow-2xl">
                <h3 className="text-base md:text-xl font-black text-yellow-400 uppercase tracking-widest mb-4 md:mb-5">
                  {category}
                  {category === "🍾 2 Liter Bottles" && <span className="text-green-400 text-xs md:text-sm ml-2 normal-case font-bold">$4.99 each</span>}
                  {category === "📦 6-Pack" && <span className="text-green-400 text-xs md:text-sm ml-2 normal-case font-bold">$6.99</span>}
                  {category === "🥤 Single Cans" && <span className="text-green-400 text-xs md:text-sm ml-2 normal-case font-bold">$1.99 each</span>}
                  {category === "🧃 Juices" && <span className="text-green-400 text-xs md:text-sm ml-2 normal-case font-bold">$2.49 each</span>}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {categoryItems.map((item) => {
                    const qty = beverageCart[item.name] || 0;
                    return (
                      <div key={item.name} className={`flex items-center justify-between p-3 md:p-4 rounded-2xl border-2 transition ${qty > 0 ? "border-yellow-500 bg-zinc-800" : "border-zinc-700 bg-zinc-800"}`}>
                        <div>
                          <p className="text-white font-bold text-sm md:text-base">{item.name}</p>
                          <p className="text-red-400 font-bold text-xs md:text-sm">${item.price.toFixed(2)}</p>
                        </div>
                        {qty === 0 ? (
                          <button onClick={() => updateBeverageQty(item.name, 1)} className="bg-red-600 hover:bg-red-500 text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-black transition">➕ Add</button>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button onClick={() => updateBeverageQty(item.name, -1)} className="bg-zinc-700 hover:bg-zinc-600 text-white w-8 h-8 md:w-9 md:h-9 rounded-xl text-base md:text-lg font-black transition">−</button>
                            <div className="text-center min-w-[36px]">
                              <span className="text-lg md:text-xl font-black text-yellow-400">{qty}</span>
                              <p className="text-green-400 text-xs font-bold">${(item.price * qty).toFixed(2)}</p>
                            </div>
                            <button onClick={() => updateBeverageQty(item.name, 1)} className="bg-red-600 hover:bg-red-500 text-white w-8 h-8 md:w-9 md:h-9 rounded-xl text-base md:text-lg font-black transition">+</button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {beverageTotal.length > 0 && (
          <div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-yellow-500">
            <h4 className="text-xl md:text-2xl font-black text-yellow-400 uppercase mb-4 md:mb-5">🥤 Your Beverage Order</h4>
            {beverageTotal.map(({ name, qty, price }) => (
              <div key={name} className="flex justify-between items-center py-3 border-b border-zinc-700">
                <div><p className="text-white font-bold text-sm md:text-base">{name}</p><p className="text-gray-400 text-xs">x {qty} @ ${price.toFixed(2)} each</p></div>
                <span className="text-yellow-400 font-black text-sm md:text-base">${(price * qty).toFixed(2)}</span>
              </div>
            ))}
            <SpecialRequests value={beverageNotes} onChange={setBeverageNotes} />
            <div className="flex justify-between items-center mt-4 md:mt-5 pt-3">
              <span className="text-white font-black text-lg md:text-xl">Total</span>
              <span className="text-red-400 font-black text-xl md:text-2xl">${beverageTotal.reduce((sum, { price, qty }) => sum + price * qty, 0).toFixed(2)}</span>
            </div>
            <button onClick={() => { setBeverageCart({}); setBeverageNotes(""); }} className="mt-4 bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-xl text-sm font-bold transition">🔄 Reset Order</button>
          </div>
        )}
      </section>

      {/* DESSERTS */}
      <section id="desserts" className="py-12 md:py-20 bg-zinc-950 text-white px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-red-600 mb-4 md:mb-6">Desserts</h2>
        <p className="text-center text-gray-300 text-sm md:text-xl mb-10 md:mb-14 italic">The Perfect Sweet Ending To Your Meal</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {dessertItems.map((item) => {
            const qty = dessertCart[item.name] || 0;
            return (
              <div key={item.name} className={`bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border-2 transition ${qty > 0 ? "border-yellow-500" : "border-zinc-800"}`}>
                <img src={item.img} alt={item.name} className="h-48 md:h-56 w-full object-cover" />
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-yellow-400">{item.name}</h3>
                    <span className="text-base md:text-lg font-bold text-red-500">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm mb-4">{item.desc}</p>
                  {qty === 0 ? (
                    <button onClick={() => updateDessertQty(item.name, 1)} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-2.5 rounded-xl transition text-sm">➕ Add to Order</button>
                  ) : (
                    <div className="flex items-center gap-3 w-full justify-between">
                      <button onClick={() => updateDessertQty(item.name, -1)} className="bg-zinc-700 hover:bg-zinc-600 text-white w-10 h-10 rounded-xl text-xl font-black transition">−</button>
                      <div className="text-center"><span className="text-2xl font-black text-yellow-400">{qty}</span><p className="text-green-400 text-xs font-bold">${(item.price * qty).toFixed(2)}</p></div>
                      <button onClick={() => updateDessertQty(item.name, 1)} className="bg-yellow-500 hover:bg-yellow-400 text-black w-10 h-10 rounded-xl text-xl font-black transition">+</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {dessertTotal.length > 0 && (
          <div className="max-w-7xl mx-auto mt-10 md:mt-12 bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-yellow-500">
            <h4 className="text-xl md:text-2xl font-black text-yellow-400 uppercase mb-4 md:mb-5">🍮 Your Desserts Order</h4>
            {dessertTotal.map(({ name, qty, price }) => (
              <div key={name} className="flex justify-between items-center py-3 border-b border-zinc-700">
                <div><p className="text-white font-bold text-sm md:text-base">{name}</p><p className="text-gray-400 text-xs">x {qty} @ ${price.toFixed(2)} each</p></div>
                <span className="text-yellow-400 font-black text-sm md:text-base">${(price * qty).toFixed(2)}</span>
              </div>
            ))}
            <SpecialRequests value={dessertNotes} onChange={setDessertNotes} />
            <div className="flex justify-between items-center mt-4 md:mt-5 pt-3">
              <span className="text-white font-black text-lg md:text-xl">Total</span>
              <span className="text-red-400 font-black text-xl md:text-2xl">${dessertTotal.reduce((sum, { price, qty }) => sum + price * qty, 0).toFixed(2)}</span>
            </div>
            <button onClick={() => { setDessertCart({}); setDessertNotes(""); }} className="mt-4 bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-xl text-sm font-bold transition">🔄 Reset Order</button>
          </div>
        )}
      </section>

      {/* OUR STORY */}
      <section id="story" className="bg-zinc-950 py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-red-600 uppercase tracking-[4px] font-bold mb-3 text-sm">Who We Are</p>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase">Our Story</h2>
            <div className="h-1 w-24 md:w-32 bg-red-600 mx-auto mt-5 md:mt-6 rounded" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
            <div>
              <h3 className="text-2xl md:text-4xl font-black text-yellow-400 mb-4 md:mb-6 leading-tight">Where Every Bite Tells A Story</h3>
              <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-4 md:mb-6">Spice &amp; Bites Hub was born from a simple but powerful idea — that great food has no borders. Nestled in the heart of Fishers, Indiana, we are more than just a restaurant.</p>
              <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-4 md:mb-6">Our founders brought together decades of culinary passion spanning three rich food traditions — American comfort food, Mediterranean freshness, and bold Desi flavors — all under one roof.</p>
              <p className="text-gray-300 text-base md:text-xl leading-relaxed">From the first slice of our hand-tossed Signature Pizza to the last spoonful of slow-cooked Lamb Nihari, every dish carries the heart of our kitchen.</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/logo.png" alt="Our Kitchen" className="w-full h-64 md:h-96 object-cover" />
            </div>
          </div>
          <div className="text-center mb-8 md:mb-14">
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase">Our Kitchen</h3>
            <p className="text-gray-400 text-base md:text-xl mt-3 md:mt-4 max-w-3xl mx-auto">Every dish starts with fresh ingredients, prepared with care and cooked with love. No shortcuts. Just real food made the right way.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {[
              { img:"https://images.stockcake.com/public/1/c/4/1c49fbfa-af29-4652-b98e-f2a791d4cd35_large/pizza-dough-toss-stockcake.jpg", title:"Hand-Crafted Pizzas", desc:"Every pizza is hand-tossed, sauced and topped fresh to order. Our dough is made in-house daily." },
              { img:"https://images.stockcake.com/public/5/6/f/56f7479e-5d83-4d7f-9744-adb0a161f78b_large/spices-meet-heat-stockcake.jpg", title:"Slow-Cooked Desi Flavors", desc:"Our Nihari simmers for hours. Our Biryani is layered and dum-cooked to perfection. Authentic recipes made fresh every day." },
              { img:"https://www.aspicyperspective.com/wp-content/uploads/2023/11/Buffalo-Wing-Sauce-11.jpg", title:"Fresh Wings Daily", desc:"Our bone-in and boneless wings are made fresh daily — never frozen. Tossed in your choice of signature flavors." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={item.img} alt={item.title} className="w-full h-52 md:h-72 object-cover" />
                <div className="bg-zinc-900 p-5 md:p-6">
                  <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 mb-16 md:mb-24">
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase text-center mb-8 md:mb-12">What We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
              {[
                { icon:"🍕", title:"American Menu", desc:"Hand-tossed pizzas, calzone wraps, crispy wings, pasta, mac & cheese and starters." },
                { icon:"🌯", title:"Mediterranean Menu", desc:"Chicken and lamb gyros, over-rice platters, falafel, Philly cheesesteaks and chicken phillies." },
                { icon:"🍛", title:"Desi Menu", desc:"Slow-cooked Nihari, aromatic Biryani, Chicken Karahi, Butter Chicken, Malai Boti and more." },
              ].map((item) => (
                <div key={item.title} className="py-4 md:py-0">
                  <div className="text-5xl md:text-6xl mb-3 md:mb-4">{item.icon}</div>
                  <h4 className="text-xl md:text-2xl font-black text-yellow-400 mb-2 md:mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-base md:text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20250310/pngtree-sharing-a-meal-hands-reaching-for-food-on-rustic-wooden-table-image_17087487.jpg" alt="Community Dining" className="w-full h-64 md:h-96 object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-4xl font-black text-yellow-400 mb-4 md:mb-6 leading-tight">Serving the Indiana Community</h3>
              <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-4 md:mb-6">Located at 7233 Fishers Landing Dr in Fishers, Indiana, we are proud to serve families, professionals, students and food lovers of all backgrounds.</p>
              <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-4 md:mb-6">Our doors are open seven days a week from 11 AM to midnight. We are not just feeding appetites — we are building memories, one plate at a time.</p>
              <div className="mt-6 md:mt-10">
                <a href="tel:3175372068" className="bg-red-600 hover:bg-red-700 px-6 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-xl font-bold transition inline-block">📞 Call to Order — 317-537-2068</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black py-14 md:py-20 px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-red-600 uppercase mb-8 md:mb-10">Visit Us</h2>
        <div className="space-y-4 md:space-y-5 text-base md:text-xl text-gray-300">
          <p>📍 7233 Fishers Landing Dr, Fishers, IN 46038</p>
          <p>📞 317-537-2068</p>
          <p>🕒 Monday - Sunday: 11:00 AM - 12:00 AM</p>
        </div>
        {/* Mobile sticky call button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/95 border-t border-zinc-800 lg:hidden z-50">
          <a href="tel:3175372068" className="block bg-red-600 hover:bg-red-700 text-white font-black text-lg py-4 rounded-2xl text-center transition">
            📞 Call to Order Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-800 py-10 text-center pb-24 lg:pb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-red-600">Spice &amp; Bites Hub</h3>
        <p className="text-gray-500 mt-3 text-sm md:text-base">Fresh Flavor • Family Friendly • Late Night Dining</p>
      </footer>

    </main>
  );
}