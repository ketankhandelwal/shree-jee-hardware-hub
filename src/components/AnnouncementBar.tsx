const messages = [
  "FREE SHIPPING ON ORDERS ABOVE ₹999 · CLICK HERE",
  "WE'RE NOW OPEN ON SUNDAYS! CHAT WITH US · CLICK HERE",
  "NEW COLLECTION | NEW COLLECTION | NEW COLLECTION",
  "VISIT OUR STORE IN ALWAR, RAJASTHAN · CLICK HERE",
  "PREMIUM HARDWARE FOR EVERY HOME · EXPLORE NOW",
];

const ticker = [...messages, ...messages];

export const AnnouncementBar = () => (
  <div className="bg-[#1a3a3a] py-2.5 overflow-hidden">
    <div className="animate-marquee whitespace-nowrap">
      {ticker.map((msg, i) => (
        <span
          key={i}
          className="inline-block text-[11px] font-medium tracking-[0.18em] text-white/90 uppercase mx-8"
        >
          {msg}
          <span className="mx-8 text-[#C9A84C]">|</span>
        </span>
      ))}
    </div>
  </div>
);
