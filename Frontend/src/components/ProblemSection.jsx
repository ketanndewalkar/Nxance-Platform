import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const ringRef = useRef(null);

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

    gsap.to(ringRef.current, {
      rotate: 360,
      duration: 100,
      ease: "none",
      repeat: -1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-16 pt-15 pb-32 max-md:px-6 max-md:pt-12 max-md:pb-24"
    >
      <div
        className="
          mx-auto max-w-7xl
          rounded-[28px]
          bg-[#141414]
          px-14 py-16
          max-md:px-6 max-md:py-10
        "
      >
        <div
          className="
            grid grid-cols-2 gap-20 items-center
            max-md:grid-cols-1 max-md:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div ref={leftRef}>
            <span
              className="
                inline-flex items-center gap-2
                rounded-full border border-white/20
                px-3 py-1
                text-[0.65rem] uppercase tracking-widest
                text-white/70
              "
            >
              • The problem we’re solving
            </span>

            <h2
              className="
                mt-6 font-serif
                text-[clamp(2.2rem,2.9vw,2.8rem)]
                leading-tight text-white
                max-md:text-[1.9rem]
                max-md:leading-snug
              "
            >
              Most investors don’t see the
              <br />
              whole portfolio picture.
            </h2>

            <p className="mt-6 max-w-[520px] text-white/70 leading-relaxed">
              Fragmented statements, overlapping funds, and reactive decisions
              make it hard to know what risk you’re truly taking on. Even
              professionals struggle to maintain clear diversification over
              decades.
            </p>

            {/* BULLETS */}
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-white/50 text-xs leading-none">
                  ✕
                </span>
                <span>Confusion about what is actually owned</span>
              </li>

              <li className="flex items-start gap-3 text-white/70">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-white/50 text-xs leading-none">
                  ✕
                </span>
                <span>Emotional decisions driven by short-term noise</span>
              </li>

              <li className="flex items-start gap-3 text-white font-medium">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-black text-xs leading-none">
                  ✓
                </span>
                <span>
                  Nxance brings institutional portfolio thinking to individuals.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT VISUAL */}
          <div
            ref={rightRef}
            className="
              relative flex items-center justify-center
              max-md:mt-8 max-md:hidden
            "
          >
            {/* CENTER IMAGE */}
            <img src="./picture.png"
              className="
                relative z-10
                h-24 w-24
                rounded-2xl
                max-md:h-20 max-md:w-20
              "
            />

            {/* ROTATING RING */}
            <div
              ref={ringRef}
              className="
                absolute
                h-[260px] w-[260px]
                rounded-full
                border border-dashed border-white/15
                flex items-center justify-center
                max-md:h-[200px] max-md:w-[200px]
              "
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="
                    absolute h-3 w-3 rounded-full bg-neutral-500 border-white
                    max-md:h-2.5 max-md:w-2.5
                  "
                  style={{
                    transform: `rotate(${i * 90}deg) translateY(-130px)`,
                  }}
                />
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
