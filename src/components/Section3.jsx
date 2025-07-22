import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/section3.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  const containerRef = useRef(null);
  const marqueeContentRef = useRef(null);

  useEffect(() => {
    const marqueeAnim = gsap.to(marqueeContentRef.current, {
      xPercent: -50,
      duration: 10,
      ease: "none",
      repeat: -1,
    });

    const handleWheel = (e) => {
      gsap.to(marqueeAnim, {
        timeScale: e.deltaY > 0 ? 1 : -1,
        duration: 0.5,
        ease: "power1.inOut",
      });
    };

    window.addEventListener("wheel", handleWheel);

    const textLines = gsap.utils.toArray("#text .text-line h2");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "+=100%", 
        scrub: 1,
        markers: false,
      },
    });

    textLines.forEach((line) => {
      tl.from(
        line,
        {
          y: 70,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
        },
        "<25%"
      );
    });

    tl.to(
      textLines,
      {
        y: -70,
        opacity: 0,
        ease: "power2.in",
        duration: 1,
      },
      ">"
    );

    return () => {
      window.removeEventListener("wheel", handleWheel);
      marqueeAnim.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const marqText = "About Me • ".repeat(5);

  return (
    <section id="container" ref={containerRef}>
      <div id="marquee">
        <div className="marquee-inner">
          <div className="marquee-content" ref={marqueeContentRef}>
            <span>{marqText}</span>
            <span>{marqText}</span>
          </div>
        </div>
      </div>
      <div id="text">
        <div className="text-line">
          <h2>I am an evolutionary programmer who consistently</h2>
        </div>
        <div className="text-line">
          <h2>
            integrates artificial intelligence technology into every
          </h2>
        </div>
        <div className="text-line">
          <h2>development process. With a hybrid approach that</h2>
        </div>
        <div className="text-line">
          <h2>combines human analytical sharpness and AI capabilities,</h2>
        </div>
        <div className="text-line">
          <h2>
            I am committed to delivering innovative, adaptive,
          </h2>
        </div>
        <div className="text-line">
          <h2>and relevant digital solutions for today's technology landscape.</h2>
        </div>
      </div>
    </section>
  );
}

export default Section3;
