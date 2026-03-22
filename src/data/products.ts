import type { Category } from "./categories";

export interface Product {
  id: string;
  name: string;
  image: string;
}

const cabinetHandleImgs = [
  "/public/Screenshot 2026-03-22 at 09.10.43.png",
  "/public/Screenshot 2026-03-22 at 09.10.37.png",
  "/public/Screenshot 2026-03-22 at 09.10.25.png",
  "/public/Screenshot 2026-03-22 at 09.10.18.png",
  "/public/Screenshot 2026-03-22 at 09.09.54.png",
  "/public/Screenshot 2026-03-22 at 09.09.49.png",
  "/public/Screenshot 2026-03-22 at 09.09.36.png",
  "/public/Screenshot 2026-03-22 at 09.09.26.png",
  "/public/Screenshot 2026-03-22 at 09.09.16.png",
  "/public/Screenshot 2026-03-22 at 09.09.08.png",
  "/public/Screenshot 2026-03-22 at 09.08.59.png",
  "/public/Screenshot 2026-03-22 at 09.08.50.png",
  "/public/Screenshot 2026-03-22 at 09.07.11.png",
  "/public/Screenshot 2026-03-22 at 09.07.18.png",
  "/public/Screenshot 2026-03-22 at 09.07.27.png",
  "/public/Screenshot 2026-03-22 at 09.07.35.png",
  "/public/Screenshot 2026-03-22 at 09.07.43.png",
  "/public/Screenshot 2026-03-22 at 09.07.52.png",
  "/public/Screenshot 2026-03-22 at 09.08.04.png",
  "/public/Screenshot 2026-03-22 at 09.08.16.png",
  "/public/Screenshot 2026-03-22 at 09.08.33.png",
  "/public/Screenshot 2026-03-22 at 09.08.42.png"
];

const knobImgs = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.49.jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48.jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(1).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.47.jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.47+(2).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.47+(1).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.46.jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.46+(2).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.46+(1).jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.45.jpeg",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.45+(1).jpeg"
];

const aldropImgs = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.29.14.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.29.22.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.29.28.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.29.35.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.29.55.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.30.02.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.30.09.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.30.16.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.30.22.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.30.26.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.30.45.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.30.53.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.31.00.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.31.07.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.31.13.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.31.26.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.31.32.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.31.43.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.31.50.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.31.55.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.32.00.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg",

  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp Image 2026-03-01 at 15.44.11.jpeg"

];

const hingeImgs = [
  "/public/hinges/Screenshot 2026-03-22 at 10.14.43.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.53.19.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.53.37.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.53.49.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.53.55.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.54.04.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.54.11.png"

];

const telescopicChannelImgs = [
"/public/telescopic/Screenshot 2026-03-22 at 09.58.49.png",
"/public/telescopic/Screenshot 2026-03-22 at 09.56.21.png"
];

const handlesImages = [
  "/public/handles/Screenshot 2026-03-22 at 10.58.49.png",
  "/public/handles/Screenshot 2026-03-22 at 10.59.02.png",
  "/public/handles/Screenshot 2026-03-22 at 10.59.15.png",
  "/public/handles/Screenshot 2026-03-22 at 10.59.23.png",
  "/public/handles/Screenshot 2026-03-22 at 10.59.35.png",
  "/public/handles/Screenshot 2026-03-22 at 10.59.46.png",
  "/public/handles/Screenshot 2026-03-22 at 10.59.58.png",
  "/public/handles/Screenshot 2026-03-22 at 11.00.12.png",
  "/public/handles/Screenshot 2026-03-22 at 11.00.36.png",
  "/public/handles/Screenshot 2026-03-22 at 11.00.58.png",
  "/public/handles/Screenshot 2026-03-22 at 11.00.45.png",
  "/public/handles/Screenshot 2026-03-22 at 11.01.11.png",
  "/public/handles/Screenshot 2026-03-22 at 11.01.34.png",
  "/public/handles/Screenshot 2026-03-22 at 11.01.40.png",
  "/public/handles/Screenshot 2026-03-22 at 11.01.48.png",
  "/public/handles/Screenshot 2026-03-22 at 11.01.55.png",
  "/public/handles/Screenshot 2026-03-22 at 11.02.04.png",
  "/public/handles/Screenshot 2026-03-22 at 11.02.12.png",
  "/public/handles/Screenshot 2026-03-22 at 11.02.22.png"


];

const sofa_leg = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/sofa_leg/Screenshot+2026-03-22+at+12.00.51.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/sofa_leg/Screenshot+2026-03-22+at+12.01.09.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/sofa_leg/Screenshot+2026-03-22+at+12.01.19.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/sofa_leg/Screenshot+2026-03-22+at+12.01.31.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/sofa_leg/Screenshot+2026-03-22+at+12.01.39.png"
];

const curtain_brackets = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/curtain_brackets/Screenshot+2026-03-22+at+12.04.21.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/curtain_brackets/Screenshot+2026-03-22+at+12.04.31.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/curtain_brackets/Screenshot+2026-03-22+at+12.04.37.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/curtain_brackets/Screenshot+2026-03-22+at+12.04.49.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/curtain_brackets/Screenshot+2026-03-22+at+12.04.55.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/curtain_brackets/Screenshot+2026-03-22+at+12.05.01.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/curtain_brackets/Screenshot+2026-03-22+at+12.05.05.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/curtain_brackets/Screenshot+2026-03-22+at+12.05.11.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/curtain_brackets/Screenshot+2026-03-22+at+12.05.17.png"

];

const bolt =[
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-22+at+12.12.33.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-22+at+12.12.44.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-22+at+12.12.54.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-22+at+12.13.00.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-22+at+12.13.09.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-22+at+12.13.20.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-22+at+12.13.37.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-22+at+12.13.42.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-22+at+12.13.50.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/bolt/Screenshot+2026-03-22+at+12.13.54.png"
];

const door_magnets = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.18.57.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.19.03.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.19.07.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.19.13.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.19.17.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.19.25.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.19.34.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.19.39.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.19.45.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.19.54.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/door_magnets/Screenshot+2026-03-22+at+12.20.23.png"
];

const multipurpose =[

  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.25.50.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.25.56.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.26.01.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.26.06.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.26.11.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.26.15.png"
]
const kitchen = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/kitchen/Screenshot+2026-03-22+at+12.32.06.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/kitchen/Screenshot+2026-03-22+at+12.32.12.png"
  ,
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/kitchen/Screenshot+2026-03-22+at+12.32.22.png"
];

//REFINE THIS
const hooks = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.34.56.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.35.04.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.35.09.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.35.14.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.35.19.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.35.24.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.35.29.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.35.38.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.35.42.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hooks/Screenshot+2026-03-22+at+12.35.46.png"

]

const others = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.38.41.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.38.50.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.38.55.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.02.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.07.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.12.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.18.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.22.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.27.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.34.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.40.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.46.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.53.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.39.58.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.40.07.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.40.11.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.40.19.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.40.25.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.40.30.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.40.37.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.40.42.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/others/Screenshot+2026-03-22+at+12.40.46.png"
];

const chestHandles = [
    "/public/Screenshot 2026-03-22 at 09.10.43.png",
  "/public/Screenshot 2026-03-22 at 09.10.37.png",
]


const makeProducts = (names: string[],imgs: string[]): Product[] =>
  names.map((name, i) => ({
    id: `${i}`,
    name,
    image: imgs[i % imgs.length],
  }));

export const productsByCategory: Record<string, Product[]> = {
  "cabinet-handle": makeProducts(
    ["4091-R/GOLD BLACK", "642-BLACK", "SL 17-BLACK", "PROFILE HANDLE-BLACK", "KIA CP SATIN", "KIA RAINBOW", "SL 594-R/GOLD BLACK","4023-R/GOLD BLACK","J-176 R/GOLD BLACK","COLOURS","CELERIO-RAINBOW","CELERIO-CP SATIN","CH-520 ROSE GOLD","CH-540 PVD","CH-534 BLACK","CH-520 BLACK","1010-CP",
      "RADO-SS MATT","1010-CP","TELEPHONE-CP","562-CP SATIN","562-RAINBOW"
    ],

    cabinetHandleImgs
  ),
  "telescopic-channel": makeProducts(
    ["Telescopic Channel Drawers", "45 Kg Telescopic Channel"],
    telescopicChannelImgs
  ),
  "cupboard-hinges": makeProducts(
    ["304 GRADE HINGE", "CORNER HINGES","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    hingeImgs
  ),
  "ss-handle": makeProducts(
    ["SS D-Handle 6\"", "SS Bar Handle 8\"", "SS Tube Handle 10\"", "SS Square Handle", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    handlesImages
  ),
  "ss-aldrops": makeProducts(
    ["SS Tower Bolt 6\"", "SS Aldrop 8\"", "SS Flush Bolt", "SS Door Chain","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S"],
    aldropImgs
  ),
  "knob": makeProducts(
    ["Gold Button Knob", "Crystal Knob", "Brass Rose Knob", "Matte Black Knob","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    knobImgs
  ),
  "chest-handle": makeProducts(
    ["Antique Brass Drop Handle", "Iron Ring Handle"
    ],
    chestHandles
  ),
  "hinges": makeProducts(
    ["Butt Hinge 4\"", "Piano Hinge 12\"", "Spring Hinge", "Strap Hinge","A","B","C","D","E"],
    hingeImgs
  ),
  "sofa-leg": makeProducts(
    ["Hairpin Leg Set 4\"", "Round Tapered Leg", "Square Steel Leg", "Adjustable Sofa Leg","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    sofa_leg
  ),
  "curtain-bracket": makeProducts(
    ["Single Bracket 25mm", "Double Bracket 28mm", "Cafe Clip Bracket", "Ceiling Mount Bracket","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    curtain_brackets
  ),
  "tower-bolt": makeProducts(
    ["SS Tower Bolt 4\"", "Tower Bolt 6\"", "Barrel Bolt 3\"", "Flush Bolt 6\"","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    bolt
  ),
  "door-magnet-closer": makeProducts(
    ["Magnetic Door Catch", "Floor Door Closer", "Hydraulic Door Closer", "Mini Door Magnet","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    door_magnets
  ),
  "lock": makeProducts(
    ["Cupboard Lock 1\"", "Deadbolt Lock", "Drawer Lock", "Cabinet Lock with Key","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    multipurpose
  ),
  "kitchen-accessories": makeProducts(
    ["Dish Rack Pull-Out", "Cutlery Tray Divider", "Magic Corner Unit", "Soft-Close Dustbin"],
    kitchen
  ),
  "hook": makeProducts(
    ["Robe Hook Single", "Double Coat Hook", "S-Hook Set (10)", "Wall Hook Brass","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    hooks
  ),
  "other-fittings": makeProducts(
    ["SS Pull Handle 8\"", "Mortise Handle Set", "Wood Screw Assorted", "Euro Profile Cylinder","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    others
  ),
};

// Fallback for unknown categories
export const getProducts = (categoryId: string): Product[] =>
  productsByCategory[categoryId] ?? makeProducts(
    ["Premium Hardware Item", "Quality Fitting", "Classic Design", "Modern Style"],
    cabinetHandleImgs
  );
