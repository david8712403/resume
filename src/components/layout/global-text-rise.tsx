"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

const TEXT_HOST_SELECTOR =
  "h1, h2, h3, h4, h5, h6, p, li, dt, dd, label, figcaption, a[data-text-rise='true'], button[data-text-rise='true']";

const TEXT_ROOT_SELECTOR = "header, main, footer";
const EXCLUDED_SELECTOR =
  "[aria-hidden='true'], [data-no-text-rise='true'], .interactive-ripple, .interactive-click-text, .interactive-click-text-inner";
const MAX_TEXT_RISE_HOSTS = 260;

function normalizeText(rawText: string) {
  return rawText.replace(/\s+/g, " ").trim();
}

function isEligibleHost(host: HTMLElement) {
  if (host.closest(EXCLUDED_SELECTOR)) {
    return false;
  }

  if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(host.tagName)) {
    return false;
  }

  const normalizedText = normalizeText(host.textContent ?? "");
  return Boolean(normalizedText);
}

export function GlobalTextRise() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const host = entry.target as HTMLElement;
          host.classList.add("text-rise-visible");
          observer.unobserve(host);
        }
      },
      {
        root: null,
        threshold: 0.08,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    let hostOrder = 0;

    const roots = document.querySelectorAll<HTMLElement>(TEXT_ROOT_SELECTOR);

    for (const root of roots) {
      const hosts = root.querySelectorAll<HTMLElement>(TEXT_HOST_SELECTOR);

      for (const host of hosts) {
        if (!isEligibleHost(host)) {
          continue;
        }

        host.classList.add("text-rise-target");
        host.style.setProperty("--text-rise-delay", `${Math.min(140, hostOrder * 8)}ms`);
        observer.observe(host);
        hostOrder += 1;

        if (hostOrder >= MAX_TEXT_RISE_HOSTS) {
          break;
        }
      }

      if (hostOrder >= MAX_TEXT_RISE_HOSTS) {
        break;
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [pathname, prefersReducedMotion]);

  return null;
}
