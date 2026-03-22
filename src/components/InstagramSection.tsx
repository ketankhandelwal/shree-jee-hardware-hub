// Scrolling client logo bar — luxury editorial aesthetic
// Fonts: Playfair Display + various brand-matched styles

const clients = [
  { name: "RELIANCE", sub: "Industries", weight: "800", spacing: "0.18em", size: "13px", color: "#1a4fa0" },
  { name: "GODREJ", sub: "Group", weight: "700", spacing: "0.22em", size: "13px", color: "#2d7a3a" },
  { name: "L&T", sub: "Engineering", weight: "900", spacing: "0.1em", size: "20px", color: "#c0392b" },
  { name: "TAJ", sub: "Hotels", weight: "300", spacing: "0.4em", size: "18px", color: "#7a5c2e" },
  { name: "STANLEY", sub: "Tools", weight: "600", spacing: "0.28em", size: "12px", color: "#2c2c2c", italic: true },
  { name: "AANAI", sub: "Design", weight: "300", spacing: "0.32em", size: "16px", color: "#8b4513" },
  { name: "CREATIVE", sub: "Studio", weight: "800", spacing: "0.24em", size: "11px", color: "#0d7a7a" },
  { name: "AP", sub: "Enterprises", weight: "900", spacing: "0.05em", size: "28px", color: "#6b21a8" },
  { name: "ZZL", sub: "Group", weight: "900", spacing: "0.08em", size: "22px", color: "#1a1a1a", italic: true },
  { name: "PIONEER", sub: "Corp", weight: "700", spacing: "0.2em", size: "12px", color: "#b45309" },
];

const tripled = [...clients, ...clients, ...clients];

export const InstagramSection = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;600;700;900&family=Tenor+Sans&display=swap');

      .clients-section {
        background: linear-gradient(180deg, #0f0f0f 0%, #161412 60%, #0f0f0f 100%);
        padding: 88px 0 80px;
        position: relative;
        overflow: hidden;
      }

      /* Subtle grain texture overlay */
      .clients-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
        pointer-events: none;
        opacity: 0.4;
      }

      /* Top + bottom fade edges */
      .clients-section::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg,
          #0f0f0f 0%,
          transparent 10%,
          transparent 90%,
          #0f0f0f 100%
        );
        pointer-events: none;
        z-index: 2;
      }

      .clients-header {
        text-align: center;
        margin-bottom: 52px;
        position: relative;
        z-index: 3;
        padding: 0 24px;
      }

      .clients-eyebrow {
        font-family: 'Cinzel', serif;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.45em;
        text-transform: uppercase;
        color: #C9A84C;
        margin-bottom: 14px;
      }

      .clients-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(30px, 4.5vw, 48px);
        font-weight: 400;
        color: #f5f0e8;
        line-height: 1.15;
        letter-spacing: -0.01em;
      }

      .clients-title em {
        font-style: italic;
        color: #C9A84C;
      }

      .ornament {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 16px auto 0;
      }

      .ornament-bar {
        height: 1px;
        width: 48px;
        background: linear-gradient(90deg, transparent, #C9A84C55, transparent);
      }

      .ornament-dot {
        width: 5px;
        height: 5px;
        background: #C9A84C;
        transform: rotate(45deg);
        opacity: 0.7;
      }

      /* Marquee track */
      .marquee-outer {
        position: relative;
        z-index: 1;
        overflow: hidden;
      }

      .marquee-track {
        display: flex;
        align-items: center;
        width: max-content;
        animation: scroll-left 40s linear infinite;
      }

      .marquee-track:hover {
        animation-play-state: paused;
      }

      @keyframes scroll-left {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }

      .client-chip {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 36px;
        padding: 18px 32px;
        border: 1px solid rgba(201, 168, 76, 0.1);
        border-radius: 2px;
        background: rgba(255,255,255,0.025);
        backdrop-filter: blur(4px);
        cursor: default;
        transition: border-color 0.35s ease, background 0.35s ease, transform 0.35s ease;
        min-width: 120px;
        position: relative;
        overflow: hidden;
      }

      .client-chip::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(201,168,76,0.06), transparent);
        opacity: 0;
        transition: opacity 0.35s ease;
      }

      .client-chip:hover {
        border-color: rgba(201,168,76,0.45);
        background: rgba(255,255,255,0.05);
        transform: translateY(-3px);
      }

      .client-chip:hover::before {
        opacity: 1;
      }

      .client-name {
        font-family: 'Cinzel', serif;
        color: rgba(245, 240, 232, 0.75);
        line-height: 1;
        transition: color 0.3s ease;
        white-space: nowrap;
      }

      .client-chip:hover .client-name {
        color: #f5f0e8;
      }

      .client-sub {
        font-family: 'Tenor Sans', sans-serif;
        font-size: 9px;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: rgba(201, 168, 76, 0.45);
        margin-top: 5px;
        transition: color 0.3s ease;
        white-space: nowrap;
      }

      .client-chip:hover .client-sub {
        color: rgba(201, 168, 76, 0.8);
      }

      /* count badge */
      .clients-count {
        text-align: center;
        margin-top: 44px;
        position: relative;
        z-index: 3;
      }

      .clients-count p {
        font-family: 'Tenor Sans', sans-serif;
        font-size: 12px;
        letter-spacing: 0.2em;
        color: rgba(245,240,232,0.3);
        text-transform: uppercase;
      }

      .clients-count strong {
        color: #C9A84C;
        font-weight: 400;
      }
    `}</style>

    <section className="clients-section">
      {/* Header */}
      <div className="clients-header">
        <p className="clients-eyebrow">Our Portfolio</p>
        <h2 className="clients-title">
          Trusted by <em>Notable</em> Clients
        </h2>
        <div className="ornament">
          <div className="ornament-bar" />
          <div className="ornament-dot" />
          <div className="ornament-bar" />
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-outer">
        <div className="marquee-track">
          {tripled.map((client, i) => (
            <div key={i} className="client-chip">
              <span
                className="client-name"
                style={{
                  fontWeight: client.weight,
                  letterSpacing: client.spacing,
                  fontSize: client.size,
                  fontStyle: client.italic ? "italic" : "normal",
                  color: `color-mix(in srgb, ${client.color} 60%, rgba(245,240,232,0.7) 40%)`,
                }}
              >
                {client.name}
              </span>
              <span className="client-sub">{client.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer count */}
      <div className="clients-count">
        <p>
          <strong>50+</strong> &nbsp;premium clients across India
        </p>
      </div>
    </section>
  </>
);