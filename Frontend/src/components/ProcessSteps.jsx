import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  UserCircle2,
  Layers3,
  Activity,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSteps() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    /* HEADER REVEAL */
    gsap.fromTo(
      headerRef.current,
      { y: 32, opacity: 0 },
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

    /* CARDS + ICONS GRAND REVEAL */
    gsap.fromTo(
      cardRefs.current,
      { y: 46, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      }
    );
  }, []);

  const steps = [
    {
      step: "01 · Investor understanding",
      title: "Context before numbers",
      desc: "Capture hypothetical goals, time horizons, and risk comfort. Nxance frames every scenario in terms of your long-term intent.",
      icon: UserCircle2,
    },
    {
      step: "02 · Construction logic",
      title: "Transparent allocation logic",
      desc: "Algorithms assemble model portfolios that emphasise diversification, balance, and risk quality instead of chasing short-term returns.",
      icon: Layers3,
    },
    {
      step: "03 · Insights & monitoring",
      title: "Ongoing portfolio insight",
      desc: "Track how a simulated portfolio drifts, responds to stress, and when rebalancing could matter — always in a learning-safe environment.",
      icon: Activity,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-16 pt-32 pb-32 max-md:px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="max-w-3xl"
        >
          <span className="text-[0.65rem] uppercase tracking-widest text-gray-500">
            Process, not prediction
          </span>

          <h2 className="mt-4 font-serif text-[clamp(2.3rem,3vw,3rem)] leading-tight">
            How Nxance works with you, step by step.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            AI is used for analysis, not prediction. Each layer of the
            experience is designed to clarify how a portfolio behaves over
            time, not to guess what happens next.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            AI is used for analysis, not prediction.
          </p>
        </div>

        {/* STEPS */}
        <div
          className="
            mt-16
            grid grid-cols-3 gap-8
            max-md:grid-cols-1
          "
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                ref={(el) => (cardRefs.current[i] = el)}
                className="
                  rounded-2xl
                  bg-white/65
                  backdrop-blur-xl
                  border border-white/40
                  px-8 py-7
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

                <span className="text-[0.65rem] uppercase tracking-widest text-gray-500">
                  {step.step}
                </span>

                <h4 className="text-base font-medium text-gray-900">
                  {step.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
