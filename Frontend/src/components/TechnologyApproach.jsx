import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PieChart,
  Activity,
  Clock,
  Cpu
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyApproach() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    /* HEADER REVEAL */
    gsap.fromTo(
      headerRef.current,
      { y: 28, opacity: 0 },
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

    /* CARDS SYSTEM REVEAL */
    gsap.fromTo(
      cardRefs.current,
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.16,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      }
    );
  }, []);

  const stack = [
    {
      title: "Portfolio analytics",
      desc: "Factor, sector, and region views that expose concentration and overlap.",
      icon: PieChart,
    },
    {
      title: "Risk indicators",
      desc: "Volatility, drawdown, and stress-testing for long-horizon scenarios.",
      icon: Activity,
    },
    {
      title: "Historical context",
      desc: "Simulated behaviour across different market regimes and cycles.",
      icon: Clock,
    },
    {
      title: "AI-assisted evaluation",
      desc: "AI surfaces patterns and trade-offs but never makes predictions or recommendations.",
      icon: Cpu,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-16 pt-32 pb-20 bg-[#f7faf7] max-md:px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="max-w-3xl"
        >
          <span className="text-[0.65rem] uppercase tracking-widest text-gray-500">
            Technology & approach
          </span>

          <h2 className="mt-4 font-serif text-[clamp(2.3rem,3vw,3rem)] leading-tight">
            A deliberate stack for portfolio education, not prediction.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Nxance blends portfolio analytics, historical data, and AI-assisted
            evaluation to help you see structure and risk with clarity.
          </p>
        </div>

        {/* STACK CARDS */}
        <div
          className="
            mt-16
            grid grid-cols-4 gap-6
            max-md:grid-cols-1
          "
        >
          {stack.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                ref={(el) => (cardRefs.current[i] = el)}
                className="
                  rounded-2xl
                  bg-white/70
                  backdrop-blur-xl
                  border border-white/40
                  px-7 py-7
                  shadow-[0_24px_60px_rgba(0,0,0,0.08)]
                  flex flex-col gap-4
                "
              >
                {/* ICON */}
                <div
                  className="
                    h-10 w-10
                    rounded-xl
                    bg-blue-50
                    flex items-center justify-center
                  "
                >
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>

                <h4 className="text-sm font-medium text-gray-900">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
