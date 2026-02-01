import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const logoRef = useRef(null);
  const navItemRefs = useRef([]);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [logoRef.current, ...navItemRefs.current, hamburgerRef.current],
      { y: -14, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          absolute top-0 left-0 w-full
          z-50
          px-30 max-md:px-8
          py-12 max-md:py-5
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <div ref={logoRef} className="flex items-center opacity-0">
          <img
            src="./logo.png"
            alt="Nxance logo"
            className="
              h-[clamp(1.6rem,3vw,2rem)]
              max-md:h-[1.55rem]
              w-auto
              mix-blend-multiply
              select-none
            "
          />
        </div>

        {/* Desktop Nav */}
        <ul
          className="
            flex items-center gap-10
            font-sans text-[0.95rem]
            font-normal text-gray-700
            max-md:hidden
          "
        >
          {[
            { label: "Home", href: "#" },
            { label: "About", href: "#about" },
            {
              label: "Contact Us",
              href: "https://forms.gle/scdEaCxtMJXhp9vi9",
              external: true,
            },
          ].map((item, i) => (
            <li
              key={item.label}
              ref={(el) => (navItemRefs.current[i] = el)}
              className="
                relative opacity-0
                cursor-pointer
                transition-colors duration-200
                hover:text-black
                hover:font-semibold
              "
            >
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <button
          ref={hamburgerRef}
          onClick={() => setOpen(!open)}
          className="
            hidden max-md:flex
            flex-col justify-center items-center
            gap-[5px]
            w-8 h-8
            relative z-[60]
            opacity-0
          "
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-6 bg-gray-800 transition-transform duration-300
              ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-gray-800 transition-opacity duration-300
              ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-gray-800 transition-transform duration-300
              ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`
          fixed inset-0 z-40 max-md:block hidden
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        />

        {/* SLIDE PANEL */}
        <div
          className={`
            absolute right-4 top-20 bottom-4
            w-[85%] max-w-[320px]
            rounded-[28px]
            bg-gradient-to-b from-blue-600 to-blue-700
            text-white
            p-6 flex flex-col justify-between
            transition-transform duration-300 ease-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <nav className="flex flex-col gap-5 font-medium text-[0.95rem]">
            <a href="#" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a
              href="https://forms.gle/scdEaCxtMJXhp9vi9"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </nav>

          <div className="w-full mt-auto pt-6 border-t border-white/20 text-xs text-white/70">
            © 2024 Nxance. All rights reserved
          </div>
        </div>
      </div>
    </>
  );
}
