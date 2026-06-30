import { useEffect, useRef } from 'react';
import { hero } from '../data/content';

const BG_IMAGES = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg',
  '/hero4.jpg',
  '/hero5.jpg',
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
    const interval = setInterval(() => {
      if (!imgRefs.current.length) return;
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

        {/* Blob window */}
        <div className="blob-window">
          <div className="blob-inner" ref={blobRef}>
            <svg viewBox="0 0 340 500" xmlns="http://www.w3.org/2000/svg" width="340" height="500">
              <defs>
                <clipPath id="blobClip">
                  <path d="M163,8 C211,3 265,21 299,61 C332,101 340,158 323,203 C312,237 287,260 272,288 C252,322 238,350 197,347 C153,344 119,320 88,290 C57,260 27,224 13,176 C0,128 7,74 34,44 C64,11 115,-3 163,8Z"/>
                </clipPath>
              </defs>
              <image
                href={BG_IMAGES[0]}
                width="340" height="500"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#blobClip)"
              />
            </svg>
          </div>
        </div>

        {/* Floating particles */}
        <div className="blob-particles" ref={particlesRef}>
          <div className="particle" style={{ width:60, height:40, top:'14%', left:'72%', borderRadius:'50%', background:'#0a0a0a', opacity:0.85 }}/>
          <div className="particle" style={{ width:22, height:22, top:'56%', left:'80%', borderRadius:'50%', background:'#0a0a0a', opacity:0.85 }}/>
          <div className="particle" style={{ width:16, height:16, top:'72%', left:'17%', borderRadius:'50%', background:'#0a0a0a', opacity:0.85 }}/>
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
