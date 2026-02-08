"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/content/profile";
import { CtaLink } from "@/components/ui/cta-link";
import { Chip } from "@/components/ui/chip";

const headlineParts = ["後端導向", "全端工程師", "David Chen"];

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.6, 0.35],
              }
        }
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-7">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Backend-first Fullstack Engineer
          </motion.p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-100 md:text-6xl">
            {headlineParts.map((part, index) => (
              <motion.span
                key={part}
                className="mr-4 inline-block"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.14, ease: [0.2, 0.65, 0.3, 0.9] }}
              >
                {part}
              </motion.span>
            ))}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            {profile.title}。擅長將複雜業務流程轉為可維運的系統架構，聚焦 CRM、LINE
            生態整合與 AI 落地。
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {profile.desiredRoles.map((role) => (
              <Chip key={role}>{role}</Chip>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/projects">查看專案案例</CtaLink>
            <CtaLink href="mailto:david87124@gmail.com" variant="ghost" external>
              聯繫我
            </CtaLink>
          </div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-900/70 p-6 shadow-[0_30px_80px_-45px_rgba(34,211,238,0.65)] backdrop-blur"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/90">Profile Signal</p>
            <dl className="mt-5 space-y-4">
              {profile.highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-cyan-300/15 bg-slate-950/60 p-4">
                  <dt className="text-xs text-slate-400">{item.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-slate-100">{item.value}</dd>
                  <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-400/10 p-4 text-sm text-cyan-100">
              <p>{profile.location}</p>
              <a href={`mailto:${profile.email}`} className="mt-1 inline-block text-cyan-200 hover:text-cyan-100">
                {profile.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
