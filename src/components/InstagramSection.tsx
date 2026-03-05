// Scrolling client logo bar using text-based logos (styled like real logos)
const clients = [
  { name: "AP", style: "text-purple-700 font-bold text-3xl" },
  { name: "STANLEY", style: "text-gray-700 font-semibold tracking-widest text-sm italic" },
  { name: "B", style: "text-red-500 font-bold text-4xl" },
  { name: "aanai", style: "text-amber-700 font-light text-2xl tracking-wide" },
  { name: "CREATIVE", style: "text-teal-700 font-bold text-sm tracking-widest" },
  { name: "ZZL", style: "text-gray-800 font-black text-2xl italic" },
  { name: "RELIANCE", style: "text-blue-700 font-bold text-sm tracking-widest" },
  { name: "GODREJ", style: "text-green-700 font-bold text-sm tracking-widest" },
  { name: "L&T", style: "text-red-700 font-bold text-xl" },
  { name: "TAJ", style: "text-amber-900 font-light text-xl tracking-widest" },
];

const doubled = [...clients, ...clients];

export const InstagramSection = () => (
  <section className="py-14 bg-gray-50 overflow-hidden">
    <div className="text-center mb-10">
      <h2
        className="text-3xl md:text-4xl font-light text-foreground"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Our Notable Clients
      </h2>
    </div>

    {/* Scrolling logos */}
    <div className="relative">
      <div className="animate-marquee">
        {doubled.map((client, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center mx-10 min-w-[100px]"
          >
            <span className={`${client.style} opacity-70 hover:opacity-100 transition-opacity`}>
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
