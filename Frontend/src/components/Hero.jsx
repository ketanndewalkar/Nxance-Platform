import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- FEATURE DATA ---------------- */
const FEATURE_SETS = {
  explore: {
    left: [
      { title: "AI Analysis", desc: "Smart automated capability" },
      { title: "Portfolio Insights", desc: "Deep asset breakdowns" },
    ],
    right: [
      { title: "Risk Metrics", desc: "Quantified downside exposure" },
      { title: "Long-Term Signals", desc: "Conviction-based investing" },
    ],
  },
  learn: {
    left: [
      { title: "Define Capital Intent", desc: "What money should do" },
      { title: "Lock Risk Limits", desc: "Downside before upside" },
      { title: "Explain Every Decision", desc: "No black boxes" },
    ],
    right: [
      { title: "Nxance Intelligence Core", desc: "AI + Quant + Human" },
      { title: "Portfolio Architecture", desc: "Built, not guessed" },
      { title: "Live Monitoring Loop", desc: "Adaptive market logic" },
    ],
  },
};

export default function Hero() {
  const [mode, setMode] = useState("explore");

  /* HERO REFS */
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const featureWrapRef = useRef(null);

  /* CTA SLIDER */
  const sliderRef = useRef(null);
  const exploreRef = useRef(null);
  const learnRef = useRef(null);

  /* FEATURE REFS */
  const leftFeatureRefs = useRef([]);
  const rightFeatureRefs = useRef([]);

  /* -------------------------------- HERO INTRO -------------------------------- */
  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, descRef.current],
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  /* ---------------- PHONE 3D SCROLL ---------------- */
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.7,
        y: -180,
        rotateZ: -4,
        rotateX: 14,
        rotateY: -12,
        transformPerspective: 1200,
      },
      {
        scale: 1,
        y: 0,
        rotateZ: 0,
        rotateX: 0,
        rotateY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: featureWrapRef.current,
          start: "top 70%",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  /* ---------------- CTA SLIDER MOTION ---------------- */
  useEffect(() => {
    const target = mode === "explore" ? exploreRef.current : learnRef.current;
    if (!target) return;

    gsap.to(sliderRef.current, {
      x: target.offsetLeft,
      width: target.offsetWidth,
      duration: 0.45,
      ease: "power3.inOut",
    });
  }, [mode]);

  /* ---------------- FEATURE RE-ANIMATION ---------------- */
  useEffect(() => {
    const items = [
      ...leftFeatureRefs.current,
      ...rightFeatureRefs.current,
    ];

    gsap.set(items, { opacity: 0, y: 20, filter: "blur(6px)" });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [mode]);

  /* RESET REFS ON RENDER */
  leftFeatureRefs.current = [];
  rightFeatureRefs.current = [];

  return (
    <section className="relative w-full min-h-screen pt-32 overflow-x-visible">
      {/* ---------------- HERO CONTENT ---------------- */}
      <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center text-center px-6">
        <h1
          ref={headingRef}
          className="font-serif text-[clamp(2.4rem,4vw,3.6rem)] leading-tight"
        >
          AI-Powered
          <br />
          <span className="italic text-blue-500">
            Asset Management System
          </span>
        </h1>

        <p
          ref={descRef}
          className="mt-6 max-w-[620px] text-gray-600"
        >
          Nxance helps users understand how diversified portfolios are
          architected, governed, and evolved using intelligence-driven logic.
        </p>

        {/* ---------------- CTA TOGGLE ---------------- */}
        <div className="mt-10 flex justify-center" id="tab">
          <div className="relative flex items-center rounded-full bg-gray-100 p-1 shadow-inner">
            <div
              ref={sliderRef}
              className="absolute left-0 top-1 h-[42px] rounded-full bg-blue-500 shadow-md"
            />

            <a href="#tab"
              ref={exploreRef}
              onClick={() => setMode("explore")}
              className={`relative z-10 px-6 py-2 text-sm font-medium rounded-full transition ${
                mode === "explore" ? "text-white" : "text-gray-700"
              }`}
            >
              Explore the Platform
            </a>

            <a href="#tab"
              ref={learnRef}
              onClick={() => setMode("learn")}
              className={`relative z-10 px-6 py-2 text-sm font-medium rounded-full transition ${
                mode === "learn" ? "text-white" : "text-gray-700"
              }`}
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- DEVICE + FEATURES ---------------- */}
      <div
        ref={featureWrapRef}
        className="relative mt-32 mx-auto max-w-7xl grid grid-cols-[1fr_auto_1fr] items-center gap-16 px-6 max-md:grid-cols-1 max-md:gap-14"
      >
        {/* LEFT FEATURES */}
        <div className="flex flex-col items-end gap-8 max-md:items-center">
          {FEATURE_SETS[mode].left.map((item, i) => (
            <FeatureCard
              key={item.title}
              refCb={(el) => (leftFeatureRefs.current[i] = el)}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

        {/* CENTER PHONE */}
        <div className="flex justify-center">
          <div className="w-[clamp(280px,24vw,360px)] aspect-[9/19] rounded-[36px] p-3">
            <img
              ref={imageRef}
              src="/screenshot.png"
              alt="Nxance App UI"
              className="w-full h-full object-cover rounded-[26px]"
            />
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="flex flex-col items-start gap-8 max-md:items-center">
          {FEATURE_SETS[mode].right.map((item, i) => (
            <FeatureCard
              key={item.title}
              refCb={(el) => (rightFeatureRefs.current[i] = el)}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE CARD ---------------- */
function FeatureCard({ title, desc, refCb }) {
  return (
    <div
      ref={refCb}
      className="group w-[300px] rounded-2xl px-6 py-6 bg-white/55 backdrop-blur-xl border border-white/25 shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-[1.03]"
    >
      <div className="w-10 h-10 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg">
        <Sparkles size={18} />
      </div>

      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-1 text-xs text-gray-500">{desc}</p>

      <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </div>
  );
}
