import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import "../css/section1.css";

function Section1() {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 0.8,
    });
  }, []);

  return (
    <>
      <section className="container">
        <h1 className="Perkenalan">
          HEY, I'M <span className="Perkenalan-fill">NAUFAL ARHAB</span>
          <br />
          BUT YOU CAN CALL ME <span className="Perkenalan-fill">ARHAB</span>
        </h1>

        <p className="typed-text">
          <span>I am a&nbsp;</span>
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "UI/UX Designer",
              2000,
              "Graphic Designer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>

        <div className="button-group mt-3">
          <a
            href="https://drive.google.com/file/d/1bCRj6u3yhVV-tO6gZNNWjoRjPVa1qVxa/view?usp=drive_link"
            className="custom-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <a href="https://wa.link/u951f2" className="custom-btn">
            Contact Me
          </a> 
        </div>
        <h5 className="Info">Scroll for more information</h5>

        <div className="arrow-container mt-1" ref={arrowRef}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#bfbfff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 16L6 10H18L12 16Z" />
          </svg>
        </div>
      </section>
    </>
  );
}

export default Section1;
