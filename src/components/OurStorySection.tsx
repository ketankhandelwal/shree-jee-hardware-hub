import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 1. Import the hook

const moodBoards = [
  {
    label: "Art-Deco",
    color: "#e8e0d5",
    accent: "#8B7355",
    description: "Geometric grandeur, ornate patterns, and bold symmetry.",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg",
    rotation: -6,
    zIndex: 1,
    popTo: { x: -180, y: -120 },
  },
  {
    label: "Mid-Century Modern",
    color: "#f5f0e8",
    accent: "#6B5B45",
    description: "Clean lines, organic shapes, and functional design with wood & brass.",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
    rotation: 4,
    zIndex: 3,
    popTo: { x: 80, y: -60 },
  },
  {
    label: "Maximalism",
    color: "#f0e8f5",
    accent: "#7B5A8B",
    description: "Boldness, eclectic collections, and more-is-more patterns.",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg",
    rotation: 6,
    zIndex: 2,
    popTo: { x: -60, y: 100 },
  },
  {
    label: "Whimsical Kids' Haven",
    color: "#fff8e6",
    accent: "#C9A84C",
    description: "Playful colours, fun shapes, and joyful textures.",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg",
    rotation: -4,
    zIndex: 4,
    popTo: { x: 160, y: 80 },
  },
];

const popSpring = {
  type: "spring",
  stiffness: 320,
  damping: 22,
  mass: 0.8,
};

export const OurStorySection = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Animated Mood Boards Container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative h-[480px] md:h-[540px] flex items-center justify-center"
          >
            {moodBoards.map((board, i) => (
              <motion.div
                key={board.label}
                initial={{ x: 0, y: 0, scale: 0.25, opacity: 0, rotate: 0 }}
                whileInView={{
                  x: board.popTo.x,
                  y: board.popTo.y,
                  scale: 1,
                  opacity: 1,
                  rotate: board.rotation,
                }}
                viewport={{ once: true }}
                transition={{
                  ...popSpring,
                  delay: 0.15 + i * 0.10,
                  opacity: { duration: 0.2, delay: 0.15 + i * 0.10 },
                }}
                whileHover={{
                  scale: 1.06,
                  zIndex: 10,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                className="absolute w-44 md:w-52 shadow-xl cursor-pointer"
                style={{
                  backgroundColor: board.color,
                  zIndex: board.zIndex,
                  transformOrigin: "center center",
                }}
              >
                <div className="p-3">
                  <div className="w-full h-28 mb-3 overflow-hidden">
                    <img
                      src={board.image}
                      alt={board.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(3)].map((_, d) => (
                      <div
                        key={d}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: board.accent, opacity: 0.45 }}
                      />
                    ))}
                  </div>
                  <p
                    className="font-semibold text-gray-800 mb-1"
                    style={{ fontFamily: "'Roboto', sans-serif", fontSize: "15px" }}
                  >
                    {board.label}
                  </p>
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    {board.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2
              className="text-4xl md:text-5xl font-light text-foreground mb-5 leading-tight"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Inspiration Starts Here
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-base">
              Discover our specially curated mood boards and let us inspire your
              journey of creativity. From classic art-deco to modern minimalism —
              find the style that speaks to your space.
            </p>

            {/* 3. Added the onClick navigation */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/products")}
              className="self-start bg-[#1a3a3a] text-white px-10 py-3.5 text-[11px] tracking-[0.2em] font-semibold hover:bg-[#122828] transition-colors shadow-lg"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              EXPLORE NOW
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};