import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BuiltWithUsersSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

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

    /* BUTTON REVEAL */
    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
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
        px-20 py-10
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
          Built With Users
        </span>

        {/* HEADLINE */}
        <h2 className="mt-4 font-serif text-[clamp(2rem,3vw,2.6rem)] leading-tight">
          Nxance is evolving in public.
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 max-w-[480px] text-sm text-gray-600">
          Your feedback powers our next version.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            ref={buttonRef}
            href="https://forms.gle/scdEaCxtMJXhp9vi9"
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-gray-200
              bg-white
              px-8 py-3
              text-sm font-medium
              text-gray-800
              shadow-sm
              whitespace-nowrap
              transition
              hover:bg-gray-50
            "
          >
            <MessageSquare className="h-4 w-4 text-gray-500" />
            Share Feedback
          </a>
        </div>
      </div>
    </section>
  );
}
