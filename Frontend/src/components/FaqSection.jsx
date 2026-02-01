import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FaqSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    /* TITLE REVEAL */
    gsap.fromTo(
      titleRef.current,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    /* FAQ ITEMS REVEAL */
    gsap.fromTo(
      itemRefs.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  const faqs = [
    {
      q: "Is this real money trading?",
      a: "No. Nxance is a simulation and research tool only.",
    },
    {
      q: "Is the app free?",
      a: "Yes, during our public research phase, all features are free.",
    },
    {
      q: "Can I connect my brokerage account?",
      a: "No. We prioritize privacy and unbiased simulation. No external connections.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-20 py-32 bg-[#fbfbfa] max-md:px-6 max-md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        {/* TITLE */}
        <h2
          ref={titleRef}
          className="font-serif text-[clamp(1.9rem,2.6vw,2.4rem)] text-center opacity-0"
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="mt-16 space-y-6">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={item.q}
                ref={(el) => (itemRefs.current[i] = el)}
                className="opacity-0 rounded-2xl border border-blue-100 bg-white/70 backdrop-blur-xl"
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`h-4 w-4 text-blue-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
