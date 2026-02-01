import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CorePrinciples() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      itemRefs.current,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const principles = [
    "Diversification before returns",
    "Risk awareness over speculation",
    "Process over prediction",
    "Clarity over complexity",
    "Long-term thinking",
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full
        px-20 py-32
        bg-[#0c0c0c]
        max-md:px-6 max-md:py-24
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <span className="text-[0.65rem] uppercase tracking-widest text-white/40">
          Core principles
        </span>

        {/* LIST */}
        <div className="mt-16">
          {principles.map((text, i) => (
            <div
              key={text}
              ref={(el) => (itemRefs.current[i] = el)}
              className="
                flex items-center justify-between
                py-10
                border-b border-white/10
                opacity-0
              "
            >
              {/* TEXT */}
              <h3
                className="
                  font-serif
                  text-[clamp(1.6rem,2.4vw,2.2rem)]
                  text-white
                  leading-tight
                "
              >
                {text}
              </h3>

              {/* INDEX */}
              <span
                className="
                  text-sm
                  font-mono
                  tracking-wider
                  text-white/30
                "
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
