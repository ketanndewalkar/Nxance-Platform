import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AccessSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    /* CONTENT REVEAL */
    gsap.fromTo(
      contentRef.current,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    /* BUTTONS STAGGER */
    gsap.fromTo(
      buttonsRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full
        px-20 py-32
        bg-[#fbfcfd]
        max-md:px-6 max-md:py-24
      "
    >
      <div
        ref={contentRef}
        className="
          mx-auto max-w-3xl
          flex flex-col items-center text-center
          opacity-0
        "
      >
        {/* LABEL */}
        <span className="text-[0.65rem] uppercase tracking-widest text-gray-500">
          Access
        </span>

        {/* HEADLINE */}
        <h2 className="mt-4 font-serif text-[clamp(2rem,3vw,2.6rem)] leading-tight">
          Start with the Nxance Android app.
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-sm text-gray-600">
          Android only · Free · Research phase
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex items-center gap-4 max-md:flex-col max-md:w-full">
          {/* PRIMARY */}
          <button
            ref={(el) => (buttonsRef.current[0] = el)}
            className="
              flex items-center gap-2
              rounded-full
              bg-black
              px-7 py-3
              text-sm font-medium
              text-white
              shadow-[0_10px_30px_rgba(0,0,0,0.25)]
              whitespace-nowrap
            "
          >
            <Smartphone className="h-4 w-4 text-white/80" />
            Get it on Android
          </button>

          {/* SECONDARY */}
          {/* <button
            ref={(el) => (buttonsRef.current[1] = el)}
            className="
              rounded-full
              border border-gray-200
              bg-white
              px-7 py-3
              text-sm font-medium
              text-gray-700
              shadow-sm
              whitespace-nowrap
            "
          >
            Share Feedback
          </button> */}
        </div>
      </div>
    </section>
  );
}
