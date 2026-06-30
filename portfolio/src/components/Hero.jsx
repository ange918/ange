import { useEffect, useRef } from 'react';
import { hero } from '../data/content';

const BG_IMAGES = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600&q=80',
];

export default function Hero() {
  const driverRef   = useRef(null);
  const blobRef     = useRef(null);
  const overlayRef  = useRef(null);
  const textRef     = useRef(null);
  const hintRef     = useRef(null);
  const particlesRef = useRef(null);
  const imgRefs     = useRef([]);
  const currentImg  = useRef(0);

  useEffect(() => {
    // cycle background images
    const interval = setInterval(() => {
      if (imgRefs.current.length === 0) return;
      imgRefs.current[currentImg.current].classList.remove('active');
      currentImg.current = (currentImg.current + 1) % BG_IMAGES.length;
      imgRefs.current[currentImg.current].classList.add('active');
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const driver = driverRef.current;
      if (!driver) return;
      const total    = driver.offsetHeight - window.innerHeight;
      const scrolled = -driver.getBoundingClientRect().top;
      const p        = Math.max(0, Math.min(1, scrolled / total));

      if (blobRef.current) {
        const scale = 1 + p * 40;
        blobRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }
      if (overlayRef.current)  overlayRef.current.style.opacity  = Math.max(0, 1 - p * 2.5);
      if (textRef.current)     textRef.current.style.opacity     = Math.max(0, 1 - p * 4);
      if (hintRef.current)     hintRef.current.style.opacity     = Math.max(0, 0.5 - p * 5);
      if (particlesRef.current) {
        particlesRef.current.style.transform = `translate(-50%,-50%) scale(${1 + p * 7})`;
        particlesRef.current.style.opacity   = Math.max(0, 1 - p * 3);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-driver" ref={driverRef}>
      <div className="sticky-scene">

        {/* Background images */}
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

        {/* "16" text mask window */}
        <div className="blob-window">
          <div className="blob-inner" ref={blobRef}>
            <svg
              viewBox="0 0 900 520"
              xmlns="http://www.w3.org/2000/svg"
              width="900"
              height="520"
            >
              <defs>
                <clipPath id="textClip">
                  <text
                    x="50%"
                    y="88%"
                    textAnchor="middle"
                    fontFamily="Anton, Impact, sans-serif"
                    fontSize="520"
                    fontWeight="400"
                  >
                    16
                  </text>
                </clipPath>
              </defs>
              <image
                href={BG_IMAGES[0]}
                x="0" y="0"
                width="900" height="520"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#textClip)"
              />
            </svg>
          </div>
        </div>

        {/* White overlay */}
        <div className="white-overlay" ref={overlayRef} />

        {/* Hero text */}
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
