import { useEffect, useRef } from 'react';
import { hero } from '../data/content';

const BG_IMAGES = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600&q=80',
];

export default function Hero() {
  const driverRef  = useRef(null);
  const maskRef    = useRef(null); // the white SVG mask
  const textRef    = useRef(null);
  const hintRef    = useRef(null);
  const imgRefs    = useRef([]);
  const currentImg = useRef(0);

  // Cycle background images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!imgRefs.current.length) return;
      imgRefs.current[currentImg.current].classList.remove('active');
      currentImg.current = (currentImg.current + 1) % BG_IMAGES.length;
      imgRefs.current[currentImg.current].classList.add('active');
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Scroll animation: scale up the white mask (16 hole gets bigger → full bg revealed)
  useEffect(() => {
    const onScroll = () => {
      const driver = driverRef.current;
      if (!driver) return;
      const total    = driver.offsetHeight - window.innerHeight;
      const scrolled = -driver.getBoundingClientRect().top;
      const p        = Math.max(0, Math.min(1, scrolled / total));

      // White mask scales up from center → white edges leave screen → bg fully visible
      if (maskRef.current) {
        const scale = 1 + p * 20;
        maskRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }

      if (textRef.current) textRef.current.style.opacity = Math.max(0, 1 - p * 4);
      if (hintRef.current) hintRef.current.style.opacity = Math.max(0, 0.5 - p * 5);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-driver" ref={driverRef}>
      <div className="sticky-scene">

        {/* Dark background + images — visible only through the "16" hole */}
        <div className="scene-bg">
          {BG_IMAGES.map((src, i) => (
            <div
              key={src}
              className={`img-layer${i === 0 ? ' active' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
              ref={el => { imgRefs.current[i] = el; }}
            />
          ))}
        </div>

        {/*
          White SVG that covers the whole viewport.
          The "16" is a hole (black in mask = transparent = shows bg through).
          On scroll, this SVG scales up → white border moves off-screen → full bg revealed.
        */}
        <div className="sixteen-mask-wrap" ref={maskRef}>
          <svg
            viewBox="0 0 1440 900"
            className="sixteen-svg"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="sixteenHole">
                {/* White = show white overlay */}
                <rect width="1440" height="900" fill="white"/>
                {/* Black = hole → background shows through */}
                <text
                  x="72%"
                  y="96%"
                  textAnchor="middle"
                  fontFamily="Anton, Impact, sans-serif"
                  fontSize="860"
                  fill="black"
                >16</text>
              </mask>
            </defs>
            {/* The white layer with "16" punched out */}
            <rect width="1440" height="900" fill="white" mask="url(#sixteenHole)"/>
          </svg>
        </div>

        {/* Hero text — bottom left */}
        <div className="hero-text" ref={textRef}>
          <h1>
            {hero.headline.map((line, i) => (
              <span key={i}>{line}<br/></span>
            ))}
          </h1>
          <div className="hero-ctas">
            <a href="#services" className="btn-primary">{hero.cta1}</a>
            <a href="#contact" className="btn-ghost">{hero.cta2}</a>
          </div>
        </div>

        <div className="scroll-hint" ref={hintRef}>Scroll Down</div>
      </div>
    </div>
  );
}
