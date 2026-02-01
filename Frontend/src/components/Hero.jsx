import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const featureWrapRef = useRef(null);
  const leftFeatureRefs = useRef([]);
  const rightFeatureRefs = useRef([]);

  useEffect(() => {
    /* HERO CONTENT */
    gsap.fromTo(
      [headingRef.current, descRef.current, ctaRef.current],
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.14,
        duration: 0.9,
        ease: "power3.out",
      }
    );

    /* IMAGE ROTATION */
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.6,
        translateY: -200,
        rotateZ: -4,
        rotateX: 12,
        rotateY: -10,
        transformPerspective: 1200,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        translateY: 0,
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

    /* LEFT FEATURES */
    leftFeatureRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -60, filter: "blur(6px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.12,
          scrollTrigger: {
            trigger: featureWrapRef.current,
            start: "top 60%",
          },
        }
      );
    });

    /* RIGHT FEATURES */
    rightFeatureRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 60, filter: "blur(6px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.12,
          scrollTrigger: {
            trigger: featureWrapRef.current,
            start: "top 60%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-32 overflow-x-visible">
      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center text-center px-6 pt-20">
        <h1
          ref={headingRef}
          className="font-serif text-[clamp(2.4rem,4vw,3.6rem)] leading-tight opacity-0"
        >
          AI-Powered
          <br />
          <span className="italic text-blue-500">
            for Asset Management System
          </span>
        </h1>

        <p
          ref={descRef}
          className="mt-6 max-w-[620px] text-gray-600 opacity-0"
        >
          Nxance is an AI-driven portfolio research platform that helps users
          understand how diversified investment portfolios are built and
          monitored.
        </p>

        {/* CTA */}
        {/* CTA */}
<div
  ref={ctaRef}
  className="
    mt-10
    flex items-center justify-center
    gap-6
    whitespace-nowrap
    opacity-0
    max-md:flex-col
    max-md:whitespace-normal
  "
>
  {/* DOWNLOAD APP */}
  <button
    className="
      inline-flex items-center gap-2
      rounded-full
      bg-blue-500
      px-8 py-3
      text-white
      shadow-md
      hover:bg-blue-600
      transition
      whitespace-nowrap
    "
  >
    <Download size={16} strokeWidth={2.2} />
    <span>Download App</span>
  </button>

  <a href="#work"
    className="
      text-gray-700
      hover:text-black
      transition
      whitespace-nowrap
    "
  >
    Learn How It Works
  </a>
</div>

      </div>

      {/* DEVICE + FEATURES */}
      <div
        ref={featureWrapRef}
        className="
          relative mt-32
          mx-auto max-w-7xl
          grid grid-cols-[1fr_auto_1fr]
          items-center
          gap-16
          px-6
          max-md:grid-cols-1
          max-md:gap-14
        "
      >
        {/* LEFT FEATURES */}
        <div className="flex flex-col items-end gap-8 max-md:items-center">
          {["AI Analysis", "Portfolio Insights"].map((text, i) => (
            <div
              key={text}
              ref={(el) => (leftFeatureRefs.current[i] = el)}
              className="
                group w-[280px] rounded-2xl px-6 py-5
                bg-white/50 backdrop-blur-xl
                border border-white/25
                shadow-[0_24px_60px_rgba(0,0,0,0.18)]
                relative overflow-hidden whitespace-nowrap
                transition-all duration-300
                hover:scale-[1.03]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg mb-4">
                <Sparkles size={18} />
              </div>

              <div className="relative z-10">
                <p className="text-sm font-semibold text-gray-900">{text}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Smart automated capability
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE */}
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
          {["Risk Metrics", "Long-Term Signals"].map((text, i) => (
            <div
              key={text}
              ref={(el) => (rightFeatureRefs.current[i] = el)}
              className="
                group w-[280px] rounded-2xl px-6 py-5
                bg-white/50 backdrop-blur-xl
                border border-white/25
                shadow-[0_24px_60px_rgba(0,0,0,0.18)]
                relative overflow-hidden whitespace-nowrap
                transition-all duration-300
                hover:scale-[1.03]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg mb-4">
                <Sparkles size={18} />
              </div>

              <div className="relative z-10">
                <p className="text-sm font-semibold text-gray-900">{text}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Smart automated capability
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
