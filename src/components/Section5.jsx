import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/section5.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InfiniteScroll from "../bitsAsset/InfiniteScroll.jsx";

function Section5() {
  const judulRef = useRef(null);
  const judul2ref = useRef(null);
  const scrollRef = useRef(null);

  const items = [
    {
      content: (
        <>
          <div
            className="card"
            onClick={() =>
              window.open("https://pfftz.itch.io/bladefarm-2045", "_blank")
            }
            style={{ cursor: "pointer" }}
          >
            <img src="/BladeFarm.png" alt="BladeFarm" />
            <h2>BladeFarm2D</h2>
            <p>
              I worked as a Game Asset Designer for the 2D game Bladefarm 2045, where I designed and created various pixel art visual assets used directly in the game.
            </p>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <div
            className="card"
            onClick={() => window.open("http://bit.ly/3ImgVMe", "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img src="/sipirang.png" alt="Sipirang" />
            <h2>Sipirang-UNTIRTA</h2>
            <p>
              UI/UX Design and Frontend Development Project for Competition Needs.
            </p>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <div
            className="card"
            onClick={() => window.open("https://www.instagram.com/hmif_untirta/", "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img src="/HMIF.png" alt="Sipirang" />
            <h2>IG-HMIF</h2>
            <p>
              Responsible for creating visual assets for event and organizational activity ations on social media, contributing to increased audience engagement.
            </p>
          </div>
        </>
      ),
    },

  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#box",
        start: "top 35%",
        end: "top 25%",
        scrub: true,
        markers: false,
      },
    });

    tl.to(judulRef.current, {
      y: 100,
      opacity: 0,
    });

    const animateMasuk = () => {
      gsap.fromTo(
        judul2ref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 0.4,
          y: 0,
          duration: 2,
          delay: 0.5,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        scrollRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          delay: 0.5,
          ease: "power2.out",
        }
      );
    };

    const triggerNormal = ScrollTrigger.create({
      trigger: "#box",
      start: "top 35%",
      onEnter: animateMasuk,
      onEnterBack: animateMasuk,
      markers: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <>
      <div className="dummy"></div>
      <section id="box">
        <h1 className="Judul" ref={judulRef}>
          Projects
        </h1>

        <div
          className="bergulir"
          ref={scrollRef}
          style={{ opacity: 0, position: "relative" }}
        >
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>

        <h1 className="JudulBawah" ref={judul2ref}>
          Projects
        </h1>
      </section>
    </>
  );
}

export default Section5;
