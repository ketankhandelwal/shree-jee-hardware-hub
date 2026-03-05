import { useRef } from "react";
import { ChevronRight } from "lucide-react";


const collections = [
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    dark: true,
    overlayText: null,
    name: "Cabinet Handles"
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    dark: false,
    name: "Telescopic Channel",
    overlayText: {
      eyebrow: "NEW COLLECTION",
      title: "WOOD",
    },
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    dark: false,
    name: "Cupboard Hinges",
    overlayText: {
      brand: "MANTARA",
      sub: "DETAILS MATTER",
      title: "YOUR\nSTYLE.\nCOUNTLESS\nCHOICES.",
      footer: "LE | HOOKS | KNOBS",
    },
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Stainless Steel Handle",
    dark: true,
    overlayText: {
      title: "EVERY\nDETAIL",
      sub: "TELLS A STORY",
    },
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Stainless Steel Aldrops",
    dark: false,
    overlayText: null,
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Knob",
    dark: true,
    overlayText: null,
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Chest Handle",
    dark: false,
    overlayText: {
      eyebrow: "NEW COLLECTION",
      title: "WOOD",
    },
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Hinges",
    dark: false,
    overlayText: {
      brand: "MANTARA",
      sub: "DETAILS MATTER",
      title: "YOUR\nSTYLE.\nCOUNTLESS\nCHOICES.",
      footer: "LE | HOOKS | KNOBS",
    },
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Sofa Leg",
    dark: true,
    overlayText: {
      title: "EVERY\nDETAIL",
      sub: "TELLS A STORY",
    },
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Curtain Bracket",
    dark: false,
    overlayText: null,
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Tower Bolt",
    dark: false,
    overlayText: null,
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Door Magnet & Door Closer",
    dark: false,
    overlayText: null,
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Multipurpose & Cupboard Lock",
    dark: false,
    overlayText: null,
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Kitchen Accessories",
    dark: false,
    overlayText: null,
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Hook",
    dark: false,
    overlayText: null,
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    name: "Other Fittings & SS Pull, Mortise, Screw",
    dark: false,
    overlayText: null,
  },
];

// Reliable system font stacks — no external font loading needed
const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

export const ShowcaseSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 bg-white relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 md:px-8 lg:px-14 pb-2"
        style={{
          scrollSnapType: "x mandatory",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {collections.map((col, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col"
            style={{ width: "280px", scrollSnapAlign: "start" }}
          >
            {/* Card image */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3 / 4" }}
            >
              <img
                src={col.image}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {col.dark && (
                <div className="absolute inset-0 bg-black/50" />
              )}

              {/* Card 2: NEW COLLECTION · WOOD */}
              {col.overlayText && "eyebrow" in col.overlayText && (
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 pb-10">
                  <p
                    className="text-black text-[11px] tracking-[0.2em] mb-1 uppercase"
                    style={{ fontFamily: SANS }}
                  >
                    {col.overlayText.eyebrow}
                  </p>
                  <p
                    className="text-black font-light tracking-[0.14em]"
                    style={{ fontFamily: SERIF, fontSize: "36px" }}
                  >
                    {col.overlayText.title}
                  </p>
                </div>
              )}

              {/* Card 3: YOUR STYLE */}
              {col.overlayText && "brand" in col.overlayText && (
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                  <p
                    className="text-white text-[11px] tracking-[0.28em] mb-0.5 uppercase"
                    style={{ fontFamily: SANS }}
                  >
                    {col.overlayText.brand}
                  </p>
                  <p
                    className="text-white/65 text-[9px] tracking-[0.22em] mb-5 uppercase"
                    style={{ fontFamily: SANS }}
                  >
                    {col.overlayText.sub}
                  </p>
                  <p
                    className="text-white/80 text-center font-light leading-[1.2] tracking-[0.06em]"
                    style={{
                      fontFamily: SERIF,
                      fontSize: "26px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {col.overlayText.title}
                  </p>
                  <p
                    className="text-white/55 text-[8px] tracking-[0.22em] mt-5 uppercase"
                    style={{ fontFamily: SANS }}
                  >
                    {col.overlayText.footer}
                  </p>
                </div>
              )}

              {/* Card 4: EVERY DETAIL */}
              {col.overlayText &&
                "sub" in col.overlayText &&
                !("brand" in col.overlayText) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                    <p
                      className="text-white text-center font-bold leading-[1.05] tracking-[0.12em] uppercase"
                      style={{
                        fontFamily: SANS,
                        fontSize: "30px",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {col.overlayText.title}
                    </p>
                    <p
                      className="text-white/75 text-[11px] tracking-[0.28em] mt-3 uppercase"
                      style={{ fontFamily: SANS }}
                    >
                      {col.overlayText.sub}
                    </p>
                  </div>
                )}
            </div>

            {/* Explore Now label */}
            <p
              className="text-[12px] font-medium tracking-[0.16em] text-gray-900 mt-3 mb-4"
              style={{ fontFamily: SANS }}
            >
              Explore Now
            </p>

            {/* VIEW COLLECTION button */}
            <button
              className="w-full py-[14px] text-[10px] font-semibold tracking-[0.24em] text-white uppercase transition-colors"
              style={{
                backgroundColor: "#111111",
                fontFamily: SANS,
              }}
              onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#2a2a2a")
              }
              onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#111111")
              }
            >
              VIEW COLLECTION
            </button>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-3 top-[45%] -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};