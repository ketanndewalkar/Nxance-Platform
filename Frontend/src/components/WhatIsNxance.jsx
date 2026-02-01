import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Layers,
  Activity
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhatIsNxance() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const chipRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      [leftRef.current, rightRef.current],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      chipRefs.current,
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      }
    );

    gsap.fromTo(
      cardRefs.current,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section id="about"
      ref={sectionRef}
      className="relative w-full px-16 pt-32 pb-32 max-md:pb-20 max-md:px-6"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-2 gap-20 max-md:grid-cols-1">
        
        {/* LEFT CONTENT */}
        <div ref={leftRef}>
          <span className="text-[0.65rem] tracking-widest uppercase text-gray-500">
            What is Nxance?
          </span>

          <h2 className="mt-4 font-serif text-[clamp(2.3rem,3vw,3rem)] leading-snug">
            A research-grade environment to
            <br />
            learn how resilient portfolios are built.
          </h2>

          <p className="mt-6 max-w-[520px] text-gray-600 leading-relaxed">
            Nxance is a portfolio intelligence workspace that lets you explore
            diversified, long-horizon portfolio structures using only simulated
            data. No accounts to connect, no assets to buy or sell.
          </p>

          {/* CHIPS */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Portfolio structure",
              "Asset allocation logic",
              "Risk understanding",
              "Long-term discipline",
            ].map((item, i) => (
              <span
                key={item}
                ref={(el) => (chipRefs.current[i] = el)}
                className="
                  rounded-full
                  bg-white/70
                  backdrop-blur-md
                  px-4 py-2
                  text-xs text-gray-700
                  shadow-sm
                  whitespace-nowrap
                  opacity-0
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT GLASS PANEL */}
        <div
          ref={rightRef}
          className="
            relative
            rounded-[28px]
            bg-white/50
            backdrop-blur-2xl
            border border-white/30
            shadow-[0_40px_90px_rgba(0,0,0,0.10)]
            p-10
            max-md:p-6
          "
        >
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">

            {/* CARD 1 */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className="
                relative
                rounded-2xl
                bg-white/60
                backdrop-blur-xl
                border border-white/40
                p-6
                opacity-0
              "
            >
              <Layers className="h-4 w-4 text-blue-500 mb-4" />
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Core portfolio
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                See how core, satellite, and defensive components sit together
                inside a single view.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="
                relative
                rounded-2xl
                bg-white/60
                backdrop-blur-xl
                border border-white/40
                p-6
                opacity-0
              "
            >
              <Activity className="h-4 w-4 text-blue-500 mb-4" />
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Risk lenses
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Inspect volatility, drawdowns, and concentration without any
                market hype.
              </p>
            </div>
          </div>

          {/* ENVIRONMENT BAR */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className="
              mt-10
              rounded-2xl
              bg-white/60
              backdrop-blur-xl
              border border-white/40
              px-6 py-4
              flex items-center justify-between
              opacity-0
            "
          >
            <div>
              <span className="block text-[0.6rem] tracking-widest uppercase text-gray-500">
                Environment
              </span>
              <span className="mt-1 block text-sm text-gray-700">
                Simulated portfolios only · No trading
              </span>
            </div>

            <ShieldCheck className="h-4 w-4 text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
