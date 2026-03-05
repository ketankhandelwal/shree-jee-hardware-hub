import type { Category } from "./categories";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const cabinetHandleImgs = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg",
];

const knobImgs = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg",
];

const aldropImgs = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg",
];

const hingeImgs = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
];

const makeProducts = (names: string[], prices: string[], imgs: string[]): Product[] =>
  names.map((name, i) => ({
    id: `${i}`,
    name,
    price: prices[i % prices.length],
    image: imgs[i % imgs.length],
  }));

export const productsByCategory: Record<string, Product[]> = {
  "cabinet-handle": makeProducts(
    ["Slim Bar Handle", "Gold Arch Handle", "Matte Black Pull", "Brass Wave Handle", "Satin Nickel Bar", "Classic Square Handle"],
    ["₹299", "₹549", "₹449", "₹649", "₹399", "₹349"],
    cabinetHandleImgs
  ),
  "telescopic-channel": makeProducts(
    ["45cm Telescopic Channel", "60cm Soft-Close Channel", "Full-Extension Runner", "Heavy Duty Channel"],
    ["₹499", "₹699", "₹649", "₹799"],
    hingeImgs
  ),
  "cupboard-hinges": makeProducts(
    ["Concealed Hinge 35mm", "Soft-Close Hinge", "Overlay Hinge", "Full Overlay Hinge"],
    ["₹199", "₹299", "₹249", "₹279"],
    hingeImgs
  ),
  "ss-handle": makeProducts(
    ["SS D-Handle 6\"", "SS Bar Handle 8\"", "SS Tube Handle 10\"", "SS Square Handle"],
    ["₹399", "₹499", "₹599", "₹449"],
    aldropImgs
  ),
  "ss-aldrops": makeProducts(
    ["SS Tower Bolt 6\"", "SS Aldrop 8\"", "SS Flush Bolt", "SS Door Chain"],
    ["₹249", "₹299", "₹349", "₹199"],
    aldropImgs
  ),
  "knob": makeProducts(
    ["Gold Button Knob", "Crystal Knob", "Brass Rose Knob", "Matte Black Knob"],
    ["₹699", "₹599", "₹749", "₹499"],
    knobImgs
  ),
  "chest-handle": makeProducts(
    ["Antique Brass Drop Handle", "Iron Ring Handle", "Oval Drop Handle", "Lion Head Handle"],
    ["₹399", "₹349", "₹449", "₹549"],
    cabinetHandleImgs
  ),
  "hinges": makeProducts(
    ["Butt Hinge 4\"", "Piano Hinge 12\"", "Spring Hinge", "Strap Hinge"],
    ["₹149", "₹349", "₹249", "₹299"],
    hingeImgs
  ),
  "sofa-leg": makeProducts(
    ["Hairpin Leg Set 4\"", "Round Tapered Leg", "Square Steel Leg", "Adjustable Sofa Leg"],
    ["₹899", "₹749", "₹699", "₹649"],
    knobImgs
  ),
  "curtain-bracket": makeProducts(
    ["Single Bracket 25mm", "Double Bracket 28mm", "Cafe Clip Bracket", "Ceiling Mount Bracket"],
    ["₹229", "₹299", "₹249", "₹349"],
    cabinetHandleImgs
  ),
  "tower-bolt": makeProducts(
    ["SS Tower Bolt 4\"", "Tower Bolt 6\"", "Barrel Bolt 3\"", "Flush Bolt 6\""],
    ["₹149", "₹179", "₹129", "₹299"],
    aldropImgs
  ),
  "door-magnet-closer": makeProducts(
    ["Magnetic Door Catch", "Floor Door Closer", "Hydraulic Door Closer", "Mini Door Magnet"],
    ["₹199", "₹499", "₹799", "₹149"],
    hingeImgs
  ),
  "lock": makeProducts(
    ["Cupboard Lock 1\"", "Deadbolt Lock", "Drawer Lock", "Cabinet Lock with Key"],
    ["₹249", "₹549", "₹299", "₹349"],
    cabinetHandleImgs
  ),
  "kitchen-accessories": makeProducts(
    ["Dish Rack Pull-Out", "Cutlery Tray Divider", "Magic Corner Unit", "Soft-Close Dustbin"],
    ["₹1,499", "₹699", "₹2,999", "₹1,199"],
    aldropImgs
  ),
  "hook": makeProducts(
    ["Robe Hook Single", "Double Coat Hook", "S-Hook Set (10)", "Wall Hook Brass"],
    ["₹299", "₹449", "₹199", "₹349"],
    knobImgs
  ),
  "other-fittings": makeProducts(
    ["SS Pull Handle 8\"", "Mortise Handle Set", "Wood Screw Assorted", "Euro Profile Cylinder"],
    ["₹599", "₹1,299", "₹149", "₹749"],
    cabinetHandleImgs
  ),
};

// Fallback for unknown categories
export const getProducts = (categoryId: string): Product[] =>
  productsByCategory[categoryId] ?? makeProducts(
    ["Premium Hardware Item", "Quality Fitting", "Classic Design", "Modern Style"],
    ["₹399", "₹499", "₹599", "₹459"],
    cabinetHandleImgs
  );
