import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart3,
  Layers,
  Landmark,
  Coins,
  Wallet,
  TrendingUp,
  BookOpen,
  Briefcase,
  LineChart,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CoverageAndAudience() {
  const sectionRef = useRef(null);
  const leftRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    /* LEFT TEXT REVEAL */
    gsap.fromTo(
      leftRefs.current,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    /* CARD REVEAL */
    gsap.fromTo(
      cardRefs.current,
      { y: 26, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  const coverageItems = [
    { label: "Equities", icon: BarChart3 },
    { label: "Mutual Funds & ETFs", icon: Layers },
    { label: "Fixed Income", icon: Landmark },
    { label: "Gold & Alternatives", icon: Coins },
    { label: "Cash equivalents", icon: Wallet },
  ];

  const audienceItems = [
    {
      title: "Long-term investors",
      desc: "Clarify how portfolios behave across full market cycles.",
      icon: TrendingUp,
    },
    {
      title: "Learners",
      desc: "Build an intuition for risk, allocation, and diversification.",
      icon: BookOpen,
    },
    {
      title: "Professionals",
      desc: "Stress-test allocation frameworks in a neutral environment.",
      icon: Briefcase,
    },
    {
      title: "Analysts",
      desc: "Prototype and compare portfolio theories using consistent data.",
      icon: LineChart,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-16 pt-32 pb-32 max-md:px-6"
    >
      <div className="mx-auto max-w-7xl space-y-32 max-md:space-y-24">
        {/* ===== COVERAGE ===== */}
        <div className="grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:gap-14">
          {/* LEFT */}
          <div
            ref={(el) => (leftRefs.current[0] = el)}
            className="max-w-xl"
          >
            <span className="text-[0.65rem] uppercase tracking-widest text-gray-500">
              Coverage
            </span>

            <h2 className="mt-4 font-serif text-[clamp(2.1rem,3vw,2.7rem)] leading-tight">
              Asset classes covered in simulation.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Nxance works across major liquid asset categories so you can
              understand how each component contributes to long-term resilience.
            </p>

            <span
              className="
                inline-block mt-6
                rounded-full
                bg-blue-50
                px-4 py-2
                text-xs text-blue-700
                whitespace-nowrap
              "
            >
              No assets are bought or sold
            </span>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {coverageItems.map(({ label, icon: Icon }, i) => (
              <div
                key={label}
                ref={(el) => (cardRefs.current[i] = el)}
                className="
                  rounded-2xl
                  bg-white/65
                  backdrop-blur-xl
                  border border-white/40
                  px-6 py-5
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  flex flex-col gap-4
                "
              >
                {/* ICON */}
                <div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-blue-600" />
                </div>

                {/* LABEL */}
                <span className="text-sm font-medium text-gray-900">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== WHO IT’S FOR ===== */}
        <div className="grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:gap-14">
          {/* LEFT */}
          <div
            ref={(el) => (leftRefs.current[1] = el)}
            className="max-w-xl"
          >
            <span className="text-[0.65rem] uppercase tracking-widest text-gray-500">
              Who it’s designed for
            </span>

            <h2 className="mt-4 font-serif text-[clamp(2.1rem,3vw,2.7rem)] leading-tight">
              For people who treat investing as a discipline.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Nxance is built for long-term investors, learners, professionals,
              and analysts who want to reason clearly about portfolio
              construction.
            </p>

            <span
              className="
                inline-block mt-6
                rounded-full
                bg-red-50
                px-4 py-2
                text-xs text-red-700
                whitespace-nowrap
              "
            >
              Not for speculative or short-term trading
            </span>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {audienceItems.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={title}
                ref={(el) => (cardRefs.current[i + 5] = el)}
                className="
                  rounded-2xl
                  bg-white/65
                  backdrop-blur-xl
                  border border-white/40
                  px-6 py-6
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  flex flex-col gap-3
                "
              >
                {/* ICON */}
                <div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-blue-600" />
                </div>

                <h4 className="text-sm font-medium text-gray-900">
                  {title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
