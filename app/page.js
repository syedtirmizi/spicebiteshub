"use client";
import { useState, useEffect, useRef } from "react";

// ─── Sidebar nav items ────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: "section-deals",      label: "🔥 Deals",            group: "deals"    },
  { id: "section-location",   label: "📍 Location & Hours", group: "story"    },
  { id: "section-story",      label: "📖 Our Story",        group: "story"    },
];

const GROUP_LABELS = {
  deals:    { label: "🔥 Deals",            color: "text-red-500 border-red-700"      },
  story:    { label: "ℹ️ About Us",         color: "text-orange-400 border-orange-700"},
};

// ─── Location & hours ──────────────────────────────────────────────────────
const restaurantAddress = "7235 Fishers Landing Dr, Fishers, IN 46038";
const restaurantPhone = "(317) 537-2058";
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=7235+Fishers+Landing+Dr+Fishers+IN+46038";
const hoursData = [
  { day: "Monday",    hours: "11:00 AM – 12:00 AM" },
  { day: "Tuesday",   hours: "11:00 AM – 12:00 AM" },
  { day: "Wednesday", hours: "11:00 AM – 12:00 AM" },
  { day: "Thursday",  hours: "11:00 AM – 12:00 AM" },
  { day: "Friday",    hours: "11:00 AM – 12:00 AM" },
  { day: "Saturday",  hours: "11:00 AM – 12:00 AM" },
  { day: "Sunday",    hours: "11:00 AM – 12:00 AM" },
];

export default function Home() {
  const heroDeals = [
    { id: "family", emoji: "🍕", title: "Family Deal", price: "$34.99", desc: "16\" 1-topping pizza, cheesy garlic bread, 6pc wings & a 2 liter", img: "signature b.png" },
    { id: "twolarge", emoji: "🍕🍕", title: "2 Large 2-Topping Pizzas", price: "$31.99", desc: "Two 14\" pizzas, your choice of 2 toppings each", img: "signature p.png" },
    { id: "twomedium", emoji: "🍕🍕", title: "2 Medium 2-Topping Pizzas", price: "$22.99", desc: "Two 12\" pizzas, your choice of 2 toppings each", img: "calzone.jpg" },
  ];
  const [slide, setSlide] = useState(0);
  const [activeSection, setActiveSection] = useState("section-deals");
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
  };

  const toppingPrices = { '12"': "$1.75", '14"': "$2.25" };

  // ── Sidebar component ─────────────────────────────────────────────────────────
  const SidebarNav = () => {
    const groups = ["deals", "story"];
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
          <a href="https://spiceandbiteshub.hungerrush.com" target="_blank" rel="noopener noreferrer" className="block bg-red-600 hover:bg-red-700 text-white font-black text-xs text-center py-3 rounded-xl transition">🛒 Order Now</a>
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
        <a href="https://spiceandbiteshub.hungerrush.com" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-black text-xs px-4 py-2 rounded-xl transition">🛒 Order Now</a>
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
                  <div className="flex items-center gap-2 mt-3">
                    <a href="https://spiceandbiteshub.hungerrush.com" target="_blank" rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white font-black text-xs md:text-sm px-5 py-2.5 rounded-xl transition w-fit">
                      🛒 Order Now
                    </a>
                    <button
                      onClick={() => scrollToSection("section-deals")}
                      className="bg-zinc-800/80 hover:bg-zinc-700 text-white font-black text-xs md:text-sm px-5 py-2.5 rounded-xl transition w-fit">
                      See Deal →
                    </button>
                  </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DealCard title="🍕 FAMILY DEAL" price="$34.99"
                  desc={<>(XL) 16&quot; 1 topping pizza, 10&quot; cheesy garlic bread, 6pc wings &amp; 2 liter <span className="text-gray-500 italic">(Additional toppings extra)</span></>}
                  extra="Includes your choice of crust, one wing flavor, one dipping sauce & a 2 liter or 6-pack." />
                <DealCard title="🍕🍕 2 LARGE 2 TOPPING PIZZAS" price="$31.99"
                  desc={<>2- (LG) 14&quot; 2 topping pizzas <span className="text-gray-500 italic">(Additional toppings extra)</span></>}
                  extra={`Additional toppings ${toppingPrices['14"']} each per pizza.`} />
                <DealCard title="🍕🍕 2 MEDIUM 2 TOPPING PIZZAS" price="$22.99"
                  desc={<>2- (MD) 12&quot; 2 topping pizzas <span className="text-gray-500 italic">(Additional toppings extra)</span></>}
                  extra={`Additional toppings ${toppingPrices['12"']} each per pizza.`} />
              </div>
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
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">Located at 7235 Fishers Landing Dr in Fishers, Indiana, we are proud to serve families, professionals, students and food lovers of all backgrounds.</p>
                  <p className="text-gray-300 text-sm leading-relaxed">Our doors are open seven days a week from 11 AM to midnight. We are not just feeding appetites — we are building memories, one plate at a time.</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href="https://spiceandbiteshub.hungerrush.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3 rounded-xl transition text-sm">🛒 Order Now</a>
                  </div>
                </div>
              </div>
            </section>

            {/* ═══════════════ CONTACT ════════════════ */}
            <section className="bg-zinc-900 rounded-2xl p-6 text-center">
              <h2 className="text-2xl font-black text-red-500 uppercase mb-4">Visit Us</h2>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>📍 7235 Fishers Landing Dr, Fishers, IN 46038</p>
                <p>📞 317-537-2058</p>
                <p>🕒 Mon–Sun: 11:00 AM – 12:00 AM</p>
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a href="https://spiceandbiteshub.hungerrush.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3 rounded-xl transition">🛒 Order Now</a>
              </div>
            </section>

          </div>{/* end content */}
        </main>
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="lg:hidden flex-shrink-0 bg-black/95 border-t border-zinc-800 p-3">
        <a href="https://spiceandbiteshub.hungerrush.com" target="_blank" rel="noopener noreferrer" className="block bg-red-600 hover:bg-red-700 text-white font-black text-sm py-3 rounded-xl text-center transition">🛒 Order Now</a>
      </div>

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

function DealCard({ title, price, desc, extra }) {
  return (
    <div className="text-left rounded-2xl p-5 border-2 bg-zinc-900 border-zinc-800">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-black text-yellow-400">{title}</h3>
        <span className="text-red-400 font-black text-xl">{price}</span>
      </div>
      <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
      {extra && <p className="text-gray-500 text-xs mt-2">{extra}</p>}
    </div>
  );
}