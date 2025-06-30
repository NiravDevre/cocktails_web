import React from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    const nav = document.querySelector('nav');

    ScrollTrigger.create({
      trigger: nav,
      start: 'top+=5 top',
      end: 'bottom top',
      onEnter: () => {
        gsap.to(nav, {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          duration: 1,
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(nav, {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
          duration: 1,
          ease: 'power1.out'
        });
      }
    });
  }, []);
    return(
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar