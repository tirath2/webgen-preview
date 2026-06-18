"use client";

import { useEffect } from "react";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function PreviewMotion() {
  useEffect(() => {
    const root = document.querySelector(".site-preview");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!root || reduceMotion) return undefined;

    const revealTargets = Array.from(
      root.querySelectorAll(
        [
          ".stats-strip",
          ".trust-bar",
          ".info-strip",
          ".preview-section",
          ".signature-section",
          ".cta-band",
          ".offer-section",
          ".membership-section",
          ".gallery-band",
          ".contact-band",
          ".preview-footer",
          ".service-card",
          ".compact-card",
          ".pricing-card",
          ".catalog-card",
          ".team-card",
          ".before-after-card",
          ".process-step",
          ".facility-card",
          ".pick-card",
          ".membership-card",
          ".package-row",
          ".schedule-row",
          ".event-row",
          "blockquote",
          ".faq-item"
        ].join(", ")
      )
    );

    revealTargets.forEach((element) => {
      element.classList.add("preview-reveal");

      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        element.classList.add("is-visible");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    revealTargets.forEach((element) => observer.observe(element));

    const hero = root.querySelector(".preview-hero");
    const flowTargets = Array.from(
      root.querySelectorAll(
        [
          ".preview-section",
          ".signature-section",
          ".cta-band",
          ".offer-section",
          ".membership-section",
          ".gallery-band",
          ".contact-band",
          ".service-card",
          ".compact-card",
          ".pricing-card",
          ".catalog-card",
          ".team-card",
          ".before-after-card",
          ".process-step",
          ".facility-card",
          ".pick-card",
          ".membership-card",
          ".package-row",
          ".schedule-row",
          ".event-row",
          "blockquote",
          ".faq-item"
        ].join(", ")
      )
    );
    const mediaTargets = Array.from(
      root.querySelectorAll(
        ".image-pair img, .signature-image img, .gallery-band img, .service-card img, .catalog-card img, .team-card img, .facility-card img, .pick-card img"
      )
    );

    let frame = 0;
    const updateMotion = () => {
      frame = 0;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? clamp((window.scrollY / scrollable) * 100, 0, 100) : 0;
      root.style.setProperty("--scroll-progress", `${progress}%`);
      root.classList.toggle("show-mobile-dock", progress > 58);

      const viewportCenter = window.innerHeight / 2;

      if (hero) {
        const rect = hero.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          hero.style.setProperty("--hero-parallax", `${clamp(-rect.top * 0.24, -120, 120)}px`);
          hero.style.setProperty("--hero-focus", `${clamp(-rect.top * 0.08, -30, 30)}px`);
        }
      }

      flowTargets.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const elementCenter = rect.top + rect.height / 2;
        const centerDelta = (viewportCenter - elementCenter) / window.innerHeight;
        const shift = clamp(centerDelta * 34, -26, 26);
        const depth = clamp(1 - Math.abs(centerDelta) * 0.035, 0.975, 1);
        element.style.setProperty("--section-flow", `${shift}px`);
        element.style.setProperty("--section-depth", `${depth}`);
      });

      mediaTargets.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const elementCenter = rect.top + rect.height / 2;
        const shift = clamp((viewportCenter - elementCenter) * 0.06, -34, 34);
        element.style.setProperty("--media-shift", `${shift}px`);
      });
    };

    const scheduleMotion = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateMotion);
    };

    root.classList.add("motion-ready");
    updateMotion();
    window.addEventListener("scroll", scheduleMotion, { passive: true });
    window.addEventListener("resize", scheduleMotion);

    return () => {
      root.classList.remove("motion-ready");
      root.classList.remove("show-mobile-dock");
      observer.disconnect();
      window.removeEventListener("scroll", scheduleMotion);
      window.removeEventListener("resize", scheduleMotion);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
