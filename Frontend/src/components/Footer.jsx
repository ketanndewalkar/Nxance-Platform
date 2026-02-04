import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Footer() {
  const [active, setActive] = useState("privacy");
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      }
    );
  }, [active]);

  return (
    <footer
      className="
        w-full
        px-20 py-16
        bg-[#f4f4f4]
        max-md:px-6
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* TOP ROW */}
        <div className="flex items-start justify-between gap-12 max-md:flex-col">
          {/* LEFT */}
          <div>
            <img src="/logo.png" alt="Nxance" className="h-7" />
            <p className="mt-3 text-sm text-gray-600">
              Nxance © 2026.
            </p>
          </div>

          {/* RIGHT NAV (TABS) */}
          <nav className="flex items-center gap-6 text-sm max-md:mt-4">
            {[
              { id: "privacy", label: "Privacy" },
              { id: "terms", label: "Terms" },
              { id: "disclaimer", label: "Disclaimer" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`
                  relative
                  transition
                  ${
                    active === item.id
                      ? "text-gray-900 font-medium"
                      : "text-gray-600 hover:text-gray-800"
                  }
                `}
              >
                {item.label}

                {/* active underline */}
                {active === item.id && (
                  <span className="absolute -bottom-1 left-0 h-[1px] w-full bg-gray-900" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full bg-gray-200" />

        {/* CONTENT PANEL */}
        <div
          ref={contentRef}
          className="
            max-w-5xl
            text-sm
            text-gray-600
            leading-relaxed
          "
        >
          {/* PRIVACY */}
          {active === "privacy" && (
            <>
              <h5 className="mb-2 font-medium text-gray-800">
                Privacy Policy
              </h5>
              <p>
                At Nxance, your privacy is a priority. We collect only the data
                necessary to deliver portfolio analysis, risk insights, and
                system functionality.
              </p>
              <p className="mt-3">
                All user information is securely stored, encrypted, and
                protected using industry-standard practices. Nxance does not
                sell, rent, or misuse user data.
              </p>
              <p className="mt-3">
                You always retain full ownership and control of your data.
              </p>
            </>
          )}

          {/* TERMS */}
          {active === "terms" && (
            <>
              <h5 className="mb-2 font-medium text-gray-800">
                Terms & Conditions
              </h5>
              <p>
                Nxance is an AI-powered asset management and portfolio
                intelligence platform.
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>All insights are informational and analytical</li>
                <li>Investment outcomes depend on market conditions</li>
                <li>Final decisions remain solely with the user</li>
                <li>
                  Nxance is not a broker, exchange, or registered advisor unless
                  explicitly stated
                </li>
              </ul>
            </>
          )}

          {/* DISCLAIMER */}
          {active === "disclaimer" && (
            <>
              <h5 className="mb-2 font-medium text-gray-800">
                Disclaimer
              </h5>
              <p>
                Nxance provides portfolio simulations, analytics, and AI-driven
                insights to support better financial understanding.
              </p>
              <p className="mt-3">
                We do not guarantee profits or returns. All investments involve
                risk, including potential loss of capital.
              </p>
              <p className="mt-3">
                Users are encouraged to consult a certified financial advisor
                before making investment decisions.
              </p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
