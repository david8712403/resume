"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

const TEXT_HOST_SELECTOR =
  "h1, h2, h3, h4, h5, h6, p, li, a, button, figcaption, dt, dd, span, label";

const TEXT_ROOT_SELECTOR = "header, main, footer";

function normalizeText(rawText: string) {
  return rawText.replace(/\s+/g, " ").trim();
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
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const hosts = new Set<HTMLElement>();
    let hostOrder = 0;

    const roots = document.querySelectorAll<HTMLElement>(TEXT_ROOT_SELECTOR);

    for (const root of roots) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parentElement = node.parentElement;

          if (!parentElement) {
            return NodeFilter.FILTER_REJECT;
          }

          if (parentElement.closest("[aria-hidden='true']")) {
            return NodeFilter.FILTER_REJECT;
          }

          if (parentElement.closest("[data-no-text-rise='true']")) {
            return NodeFilter.FILTER_REJECT;
          }

          if (
            parentElement.closest(
              ".interactive-ripple, .interactive-click-text, .interactive-click-text-inner",
            )
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parentElement.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }

          const normalizedText = normalizeText(node.nodeValue ?? "");

          if (!normalizedText) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        },
      });

      let currentNode = walker.nextNode();

      while (currentNode) {
        const textNode = currentNode as Text;
        const parentElement = textNode.parentElement;

        if (parentElement) {
          const host = parentElement.closest<HTMLElement>(TEXT_HOST_SELECTOR) ?? parentElement;

          if (!hosts.has(host)) {
            hosts.add(host);
            host.classList.add("text-rise-target");
            host.style.setProperty("--text-rise-delay", `${Math.min(520, hostOrder * 22)}ms`);
            observer.observe(host);
            hostOrder += 1;
          }
        }

        currentNode = walker.nextNode();
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [pathname, prefersReducedMotion]);

  return null;
}
