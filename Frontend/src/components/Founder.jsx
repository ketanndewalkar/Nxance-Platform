import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FounderSection() {
  const sectionRef = useRef(null);
  const glassRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    /* GLASS CONTAINER REVEAL */
    gsap.fromTo(
      glassRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    /* INNER GRADIENT MOTION */
    gsap.to(gradientRef.current, {
      backgroundPosition: "140% 60%",
      duration: 28,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full
        px-20 py-15
        bg-[#f7f9fb]
        max-md:px-6
        overflow-hidden
      "
    >
      {/* GLASS CONTAINER (CONTENT SURFACE) */}
      <div
        ref={glassRef}
        className="
          relative mx-auto max-w-7xl
          rounded-[28px]
          bg-white/60
          backdrop-blur-xl
          border border-white/40
          shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          px-20 py-16
          max-md:px-8 max-md:py-12
          overflow-hidden
          opacity-0
        "
      >
        {/* INNER GRADIENT (CLIPPED) */}
        <div
          ref={gradientRef}
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_25%_30%,rgba(59,130,246,0.22),transparent_45%),radial-gradient(circle_at_75%_65%,rgba(37,99,235,0.18),transparent_50%)]
            bg-[length:200%_200%]
            pointer-events-none
          "
        />

        {/* CONTENT GRID */}
        <div
          className="
            relative z-10
            grid grid-cols-[auto_1fr]
            gap-20
            items-center
            max-md:grid-cols-1
            max-md:gap-14
          "
        >
          {/* FOUNDER IMAGE */}
          <div className="flex flex-col items-center shrink-0">
            <div
              className="
                h-55 w-55
                rounded-full
                overflow-hidden
                border-4 border-white
                shadow-[0_18px_45px_rgba(0,0,0,0.25)]
                max-md:h-28 max-md:w-28
              "
            >
              <img
                src="/profile.jpeg"
                alt="Abhishek Rajput"
                className="h-full w-full object-cover"
              />
            </div>

            <span
              className="
                mt-5
                rounded-full
                bg-white/85
                px-4 py-1
                text-[0.6rem]
                uppercase tracking-widest
                text-gray-600
              "
            >
              Founder
            </span>
          </div>

          {/* TEXT CONTENT */}
          <div className="max-w-xl">
            <span className="text-[0.65rem] uppercase tracking-widest text-gray-500">
              Founder section
            </span>

            <h3 className="mt-3 font-serif text-[clamp(1.8rem,2.4vw,2.2rem)]">
              Abhishek
            </h3>

            <p className="mt-5 text-gray-700 leading-relaxed">
              Abhishek is building Nxance with a long-term vision to make
              professional-grade portfolio thinking accessible to everyday
              investors.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Nxance started as a research idea and is evolving step-by-step
              with real user feedback, transparency, and learning at its core.
            </p>

            {/* QUOTE */}
            <div
              className="
                mt-8
                flex items-start gap-3
                border-l-2 border-blue-500
                pl-4
              "
            >
              <p className="text-sm italic text-gray-800">
                I believe investing should be understood, not blindly followed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
