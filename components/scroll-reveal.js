
import Script from "next/script";

export default function ScrollReveal() {
  return (
    <Script id="raia-scroll-reveal" strategy="afterInteractive">
      {`
        (() => {
          if (window.__raiaRevealStarted) return;
          window.__raiaRevealStarted = true;

          const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;

          if (
            reducedMotion ||
            !("IntersectionObserver" in window)
          ) {
            return;
          }

          const selector = [
            "main h1",
            "main h2",
            "main h3",
            "main h4",
            "main p",
            "main .eyebrow",
            "main .section-overline",
            "main .page-opening__eyebrow",
            "main .service-showcase__image-caption",
            ".footer .footer__label"
          ].join(", ");

          const seen = new WeakSet();

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add(
                  "raia-text-enter"
                );

                observer.unobserve(entry.target);
              });
            },
            {
              threshold: 0.06,
              rootMargin: "0px 0px -3% 0px"
            }
          );

          function scan() {
            document
              .querySelectorAll(selector)
              .forEach((element) => {
                if (seen.has(element)) return;

                if (
                  element.closest(
                    "dialog, [role='dialog'], .clients-marquee"
                  )
                ) {
                  return;
                }

                seen.add(element);
                observer.observe(element);
              });
          }

          let scheduled = false;

          const mutationObserver = new MutationObserver(() => {
            if (scheduled) return;

            scheduled = true;

            requestAnimationFrame(() => {
              scheduled = false;
              scan();
            });
          });

          scan();

          mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
          });
        })();
      `}
    </Script>
  );
}
