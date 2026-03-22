import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const collections = [
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.10.08.png",
    dark: true,
    overlayText: null,
    name: "Cabinet Handles",
    slug: "cabinet-handle",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/telecropic_channel/Screenshot+2026-03-22+at+09.58.49.png",
    dark: false,
    name: "Telescopic Channel",
    overlayText: null,
    slug: "telescopic-channel",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.53.55.png",
    dark: false,
    name: "Cupboard Hinges",
    overlayText: null,
    slug: "cupboard-hinges",
  },
  {
    image: "https://www.greeninterio.com/wp-content/uploads/2015/10/GIBPHH111.jpg",
    name: "Stainless Steel Handle",
    dark: true,
    overlayText: null,
    slug: "ss-handle",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp Image 2026-03-01 at 15.44.11.jpeg",
    name: "Stainless Steel Aldrops",
    dark: false,
    overlayText: null,
    slug: "ss-aldrops",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg",
    name: "Knob",
    dark: true,
    overlayText: null,
    slug: "knob",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.10.43.png",
    name: "Chest Handle",
    dark: false,
    overlayText: null,
    slug: "chest-handle",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+10.14.43.png",
    name: "Hinges",
    dark: false,
    overlayText: null,
    slug: "hinges",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/sofa_leg/Screenshot+2026-03-22+at+12.00.51.png",
    name: "Sofa Leg",
    dark: true,
    overlayText: null,
    slug: "sofa-leg",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/curtain_brackets/Gemini_Generated_Image_xpgnkgxpgnkgxpgn.png",
    name: "Curtain Bracket",
    dark: false,
    overlayText: null,
    slug: "curtain-bracket",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-19+at+09.51.32.png",
    name: "Tower Bolt",
    dark: false,
    overlayText: null,
    slug: "tower-bolt",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.18.57.png",
    name: "Door Magnet & Door Closer",
    dark: false,
    overlayText: null,
    slug: "door-magnet-closer",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.25.50.png",
    name: "Multipurpose & Cupboard Lock",
    dark: false,
    overlayText: null,
    slug: "lock",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/kitchen/Screenshot+2026-03-22+at+12.32.12.png",
    name: "Kitchen Accessories",
    dark: false,
    overlayText: null,
    slug: "kitchen-accessories",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.34.56.png",
    name: "Hook",
    dark: false,
    overlayText: null,
    slug: "hook",
  },
  {
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.38.55.png",
    name: "Other Fittings & SS Pull, Mortise, Screw",
    dark: false,
    overlayText: null,
    slug: "other-fittings",
  },
];

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
        } as React.CSSProperties}
      >
        {collections.map((col, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col"
            style={{ width: "280px", scrollSnapAlign: "start" }}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3 / 4" }}
            >
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {col.overlayText && "eyebrow" in col.overlayText && (
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 pb-10">
                  <p
                    className="text-black text-[11px] tracking-[0.2em] mb-1 uppercase"
                    style={{ fontFamily: SANS }}
                  >
                    {(col.overlayText as any).eyebrow}
                  </p>
                  <p
                    className="text-black font-light tracking-[0.14em]"
                    style={{ fontFamily: SERIF, fontSize: "36px" }}
                  >
                    {(col.overlayText as any).title}
                  </p>
                </div>
              )}

              {col.overlayText && "brand" in col.overlayText && (
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                  <p
                    className="text-white text-[11px] tracking-[0.28em] mb-0.5 uppercase"
                    style={{ fontFamily: SANS }}
                  >
                    {(col.overlayText as any).brand}
                  </p>
                  <p
                    className="text-white/65 text-[9px] tracking-[0.22em] mb-5 uppercase"
                    style={{ fontFamily: SANS }}
                  >
                    {(col.overlayText as any).sub}
                  </p>
                  <p
                    className="text-white/80 text-center font-light leading-[1.2] tracking-[0.06em]"
                    style={{ fontFamily: SERIF, fontSize: "26px", whiteSpace: "pre-line" }}
                  >
                    {(col.overlayText as any).title}
                  </p>
                  <p
                    className="text-white/55 text-[8px] tracking-[0.22em] mt-5 uppercase"
                    style={{ fontFamily: SANS }}
                  >
                    {(col.overlayText as any).footer}
                  </p>
                </div>
              )}

              {col.overlayText &&
                "sub" in col.overlayText &&
                !("brand" in col.overlayText) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
                    <p
                      className="text-white text-center font-bold leading-[1.05] tracking-[0.12em] uppercase"
                      style={{ fontFamily: SANS, fontSize: "30px", whiteSpace: "pre-line" }}
                    >
                      {(col.overlayText as any).title}
                    </p>
                    <p
                      className="text-white/75 text-[11px] tracking-[0.28em] mt-3 uppercase"
                      style={{ fontFamily: SANS }}
                    >
                      {(col.overlayText as any).sub}
                    </p>
                  </div>
                )}
            </div>

            <p
              className="text-[12px] font-medium tracking-[0.16em] text-gray-900 mt-3 mb-4"
              style={{ fontFamily: SANS }}
            >
              {col.name}
            </p>

            <a
              href={`/products/${col.slug}`}
              className="block w-full py-[14px] text-[10px] font-semibold tracking-[0.24em] text-white uppercase text-center transition-colors"
              style={{ backgroundColor: "#111111", fontFamily: SANS }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2a2a2a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#111111";
              }}
            >
              VIEW COLLECTION
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-3 top-[45%] -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button>
    </section>
  );
};