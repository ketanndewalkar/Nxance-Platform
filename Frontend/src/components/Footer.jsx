import { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);


  return (
    <footer
      ref={footerRef}
      className="
        w-full
        px-20 py-16
        bg-[#f4f4f4]
        max-md:px-6
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* TOP ROW */}
        <div
          className="
            flex items-start justify-between
            gap-12
            max-md:flex-col
          "
        >
          {/* LEFT */}
          <div>
            <h4 className="font-serif text-lg">
              <img src="/logo.png" className="h-7"/>
            </h4>
            <p className="mt-3 text-sm text-gray-600">
              Nxance © 2026.
            </p>
          </div>

          {/* RIGHT LINKS */}
          <nav
            className="
              flex items-center gap-6
              text-sm text-gray-600
              max-md:mt-4
            "
          >
            <a
              href="/privacy"
              className="hover:text-gray-900 transition"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-gray-900 transition"
            >
              Terms
            </a>
            <a
              href="/disclaimer"
              className="hover:text-gray-900 transition"
            >
              Disclaimer
            </a>
          </nav>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full bg-gray-200" />

        {/* DISCLAIMER */}
        <p className="max-w-5xl text-xs text-gray-500 leading-relaxed">
          <span className="font-medium text-gray-600">
            DISCLAIMER:
          </span>{" "}
          Nxance is an educational tool. All data, performance, and portfolio
          values shown are simulated and for illustrative purposes only.
          Nothing on this platform constitutes financial advice, an offer to
          sell, or a solicitation of an offer to buy any securities. Past
          performance of any simulated strategy does not guarantee future
          results. Investments in securities involve risks, including the
          potential loss of principal.
        </p>
      </div>
    </footer>
  );
}
