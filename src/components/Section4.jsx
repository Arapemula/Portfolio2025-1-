import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/section4.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowingMenu from "../bitsAsset/FlowingMenu";

function Section4() {
  const demoItems = [
    {
      link: "#",
      judul: "Skills",
      images: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
      ]
    },
    {
      link: "#",
      judul: "Contact Me",
      images: [
        {
          src: "https://img.icons8.com/color/48/linkedin.png",
          link: "https://www.linkedin.com/in/naufal-arhab-92b75724b/"
        },
        {
          src: "https://img.icons8.com/color/48/instagram-new.png",
          link: "https://instagram.com/fdhlzz_"
        },
        {
          src: "https://img.icons8.com/color/48/gmail.png",
          link: "mailto:naufalarhab2@gmail.com"
        },
        {
          src: "https://img.icons8.com/color/48/whatsapp.png",
          link: "https://wa.me/085218399849"
        }
      ]
    }
  ];

  return (
    <div style={{ height: "300px", position: "relative" }}>
      <FlowingMenu items={demoItems} />
    </div>
  );
}

export default Section4;
