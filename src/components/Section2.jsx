import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/section2.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const sectionRef = useRef(null);
  const wordsWrapperRef = useRef(null);

  const text = "Wanna know more about me? Do you like me already? xixixi";
  const words = text.split(' ');

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wordsWrapperRef.current;

    // 1. Scroll horizontal
    gsap.to(wrapper, {
      x: () => -(wrapper.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 2,
        start: "top top",
        end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
        markers: false,
        invalidateOnRefresh: true,
      },
    });

    // 2. Variasi animasi tiap kata
    const effects = [
      { from: { opacity: 0, y: 160 }, to: { opacity: 1, y: 0 } },
      { from: { opacity: 0, y: -160 }, to: { opacity: 1, y: 0 } },
      { from: { opacity: 0, x: 160 }, to: { opacity: 1, x: 0 } },
      { from: { opacity: 0, x: -160 }, to: { opacity: 1, x: 0 } },
      { from: { opacity: 0, scale: 1.5 }, to: { opacity: 1, scale: 1 } },
      { from: { opacity: 0, rotation: -130 }, to: { opacity: 1, rotation: 0 } },
      { from: { opacity: 0, rotation: 130 }, to: { opacity: 1, rotation: 0 } },
    ];

    const wordEls = wrapper.querySelectorAll('.word');

    // 3. Buat timeline sinkron dengan scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    // 4. Tambahkan animasi per kata ke timeline
    wordEls.forEach((el, i) => {
      const effect = effects[Math.floor(Math.random() * effects.length)];
      const delay = i * 0.3; // delay per kata dalam timeline scroll
      tl.fromTo(
        el,
        effect.from,
        {
          ...effect.to,
          duration: 1,
          ease: "back.out(1.7)",
        },
        delay // posisi dalam timeline
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf(wordEls);
    };
  }, []);

  return (
    <section ref={sectionRef} className="container2">
      <div className="words-wrapper" ref={wordsWrapperRef}>
        {words.map((word, i) => (
          <span
            className="word"
            key={i}
            style={{
              display: "inline-block",
              margin: "0 0.25em",
              opacity: 0,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Section2;
