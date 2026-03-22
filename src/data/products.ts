import type { Category } from "./categories";

export interface Product {
  id: string;
  tagline: string;
  image: string;
}

const cabinetHandleImgs = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.10.43.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.10.37.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.10.25.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.10.18.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.09.54.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.09.49.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.09.36.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.09.26.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.09.16.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.09.08.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.08.59.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.08.50.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.07.11.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.07.18.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.07.27.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.07.35.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.07.43.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.07.52.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.08.04.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.08.16.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.08.33.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.08.42.png"
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
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+10.14.43.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.53.19.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.53.37.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.53.49.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.53.55.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.54.04.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.54.11.png"
];

const telescopicChannelImgs = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/telecropic_channel/Screenshot+2026-03-22+at+09.58.49.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/telecropic_channel/Screenshot+2026-03-22+at+09.56.21.png"
];

const handlesImages = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+10.58.49.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+10.59.02.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+10.59.15.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+10.59.23.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+10.59.35.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+10.59.46.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+10.59.58.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.00.12.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.00.36.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.00.45.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.00.58.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.01.11.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.01.34.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.01.40.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.01.48.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.01.55.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.02.04.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.02.12.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/handles/Screenshot+2026-03-22+at+11.02.22.png"
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

const bolt = [
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

const multipurpose = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.25.50.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.25.56.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.26.01.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.26.06.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.26.11.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/multipurpose/Screenshot+2026-03-22+at+12.26.15.png"
];

const kitchen = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/kitchen/Screenshot+2026-03-22+at+12.32.06.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/kitchen/Screenshot+2026-03-22+at+12.32.12.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/kitchen/Screenshot+2026-03-22+at+12.32.22.png"
];

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
];

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
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.10.43.png",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/Screenshot+2026-03-22+at+09.10.37.png",
];


const makeProducts = (taglines: string[], imgs: string[]): Product[] =>
  taglines.map((tagline, i) => ({
    id: `${i}`,
    tagline,
    image: imgs[i % imgs.length],
  }));

export const productsByCategory: Record<string, Product[]> = {
  "cabinet-handle": makeProducts(
    [
      "Gold that never fades",
      "Black that commands rooms",
      "Minimal form, maximum grace",
      "Where style meets steel",
      "Satin dreams, solid steel",
      "Rainbow in your hands",
      "Grip the extraordinary",
      "Every pull tells a story",
      "Shine that lasts decades",
      "Handle life beautifully",
      "Crafted for first impressions",
      "Form follows function, always",
      "The detail that defines spaces",
      "Understated luxury, daily",
      "Classic lines, timeless appeal",
      "Black that commands rooms",
      "Curves that captivate",
      "Matte perfection, daily",
      "Curves that captivate",
      "Vintage soul, modern finish",
      "Satin whispers luxury",
      "Rainbow-kissed hardware",
    ],
    cabinetHandleImgs
  ),
  "telescopic-channel": makeProducts(
    [
      "Glide silently, every time",
      "Precision-loaded drawer magic",
    ],
    telescopicChannelImgs
  ),
  "cupboard-hinges": makeProducts(
    [
      "Grade 304 — built to outlast",
      "Angle your ambitions perfectly",
      "Swing smooth, swing silent",
      "The quiet pivot of perfection",
      "Corner-perfect every time",
      "Hidden strength, visible style",
      "Hinged on quality",
      "Pivot to precision",
      "Built for a million swings",
      "Open doors, open possibilities",
      "Silence is golden hardware",
      "Where strength meets subtlety",
      "Steel resolve, smooth motion",
      "The hinge that holds it all",
      "Crafted for lasting alignment",
      "Zero play, pure precision",
      "Corrosion-proof confidence",
      "Engineered for every door",
      "The backbone of every cabinet",
      "Invisible until you need it",
      "Grade steel, grade living",
      "Close with conviction",
      "Every angle, accounted for",
      "Built to bear, built to last",
      "The pivot of perfect spaces",
      "Strength hidden in plain sight",
      "Smooth action, every time",
      "The art of the perfect close",
    ],
    hingeImgs
  ),
  "ss-handle": makeProducts(
    [
      "Steel born, style driven",
      "The D that defines doors",
      "Bar none in beauty",
      "Tube-form, total elegance",
      "Square up your style",
      "Grip the extraordinary",
      "Stainless. Spotless. Stunning.",
      "Built for a thousand grips",
      "Where steel meets soul",
      "The handle worth reaching for",
      "Cold finish, warm welcome",
      "Mirror-bright, daily delight",
      "Crafted for confident hands",
      "Elegance you can feel",
      "Polished to perfection",
      "A grip above the rest",
      "Industrial chic, refined finish",
      "Rust-free, worry-free",
      "Form that fits every door",
    ],
    handlesImages
  ),
  "ss-aldrops": makeProducts(
    [
      "Bolt in confidence",
      "8 inches of pure assurance",
      "Flush with fortress-grade safety",
      "Chain the worry away",
      "Lock it with elegance",
      "Slide into security",
      "Stainless safety, every night",
      "The bolt that never fails",
      "Secure today, secure always",
      "Precision-slide, perfect lock",
      "Where safety meets steel",
      "Built for peace of mind",
      "A latch above the rest",
      "Smooth throw, solid lock",
      "Corrosion-free confidence",
      "Heavy-duty, light to touch",
      "The last line of security",
      "Grade steel, grade safety",
      "Engineered for every door",
      "Close tight, sleep right",
      "Mirror finish, fortress strength",
      "The aldrop worth trusting",
      "Zero rattle, total security",
    ],
    aldropImgs
  ),
  "knob": makeProducts(
    [
      "Turn to perfection",
      "Crystal clarity in your grip",
      "Brass-born, forever beautiful",
      "Matte allure, matte class",
      "The knob worth noticing",
      "Tiny detail, total elegance",
      "Grip that speaks volumes",
      "Small in size, big in style",
      "Round, refined, remarkable",
      "Every turn, a pleasure",
      "Polished to impress",
      "The finishing touch",
    ],
    knobImgs
  ),
  "chest-handle": makeProducts(
    [
      "Antique soul, timeless grip",
      "Ring in a new era of style",
    ],
    chestHandles
  ),
  "hinges": makeProducts(
    [
      "Swing into seamless living",
      "Piano-length precision",
      "Spring back to perfection",
      "Strap in for strength",
      "The hinge that holds it all",
    ],
    hingeImgs
  ),
  "sofa-leg": makeProducts(
    [
      "Legs that steal the show",
      "Tapered for timeless taste",
      "Steel resolve, soft silhouette",
      "Adjust to your perfect height",
      "The foundation of fine furniture",
    ],
    sofa_leg
  ),
  "curtain-bracket": makeProducts(
    [
      "Hold the drape, own the room",
      "Double the support, double the style",
      "Café clips — effortlessly chic",
      "Ceiling-mounted sophistication",
      "The bracket behind the beauty",
      "Strong hold, sleek profile",
      "Every drape deserves this",
      "Curtain-perfect, always",
      "Invisible support, visible style",
    ],
    curtain_brackets
  ),
  "tower-bolt": makeProducts(
    [
      "Slide into security",
      "Six inches of pure assurance",
      "Barrel-rolled perfection",
      "Flush with fine craftsmanship",
      "The bolt that never budges",
      "Lock smooth, sleep sound",
      "Heavy-duty, feather-light touch",
      "Corrosion-free, worry-free",
      "Built for a thousand slides",
      "The last bolt you'll ever need",
    ],
    bolt
  ),
  "door-magnet-closer": makeProducts(
    [
      "Attracted to excellence",
      "Close with conviction",
      "Hydraulic grace, every door",
      "Mini magnet, maxi peace",
      "Snap shut, stay silent",
      "Invisible strength, perfect close",
      "The closer that never fails",
      "Quiet close, calm home",
      "Magnetic precision, daily",
      "Pull together, hold tight",
      "Where doors find their rest",
    ],
    door_magnets
  ),
  "lock": makeProducts(
    [
      "Lock in luxury",
      "Dead-on security, deadbolt style",
      "Draw closed with confidence",
      "Cabinet-grade key security",
      "The lock worth trusting",
      "Security that never sleeps",
    ],
    multipurpose
  ),
  "kitchen-accessories": makeProducts(
    [
      "Pull out perfection",
      "Every cutlery finds its home",
      "Corner magic, organised chaos",
    ],
    kitchen
  ),
  "hook": makeProducts(
    [
      "Hang with intention",
      "Double the duty, double the charm",
      "S-curves for stylish storage",
      "Wall-mounted warmth",
      "The hook that holds everything",
      "Simple hardware, elegant home",
      "Every coat deserves this hook",
      "Strong hold, slim profile",
      "Hang it right, hang it once",
      "The detail that organises life",
    ],
    hooks
  ),
  "other-fittings": makeProducts(
    [
      "Pull through with style",
      "Mortise meets magnificence",
      "Screw in to perfection",
      "Euro-profile, extra secure",
      "The fitting that finishes it",
      "Hardware for the discerning",
      "Precision in every piece",
      "Built to fit, built to last",
      "Every joint, a masterpiece",
      "The detail others overlook",
      "Crafted for the careful builder",
      "Small part, big difference",
      "Where quality meets quantity",
      "The finishing hardware",
      "Engineered for excellence",
      "The pro's choice, always",
      "Fit for the finest spaces",
      "Strong fit, smart design",
      "The hardware behind the beauty",
      "Precision-matched, perfectly placed",
      "Built for builders who care",
      "The final touch that matters",
    ],
    others
  ),
};

// Fallback for unknown categories
export const getProducts = (categoryId: string): Product[] =>
  productsByCategory[categoryId] ?? makeProducts(
    [
      "Crafted for perfection",
      "Quality in every detail",
      "Classic design, modern soul",
      "Style that stands the test",
    ],
    cabinetHandleImgs
  );