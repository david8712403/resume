import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { CtaLink } from "@/components/ui/cta-link";

export function ContactSection() {
  return (
    <section id="contact" className="pb-20 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-slate-950 p-8 md:p-10">
            <div className="pointer-events-none absolute -right-12 -bottom-12 h-52 w-52 rounded-full bg-cyan-300/15 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
              正在尋找能將 LLM / RAG 落地為產品的 AI 工程師職位（其次為全端工程師）
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-200 md:text-base">
              若你正在尋找能獨立設計後端架構、落地 RAG 工作流、整合跨系統資料流並穩定上線交付的工程師，歡迎直接來信。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href={`mailto:${profile.email}`} external>
                {profile.email}
              </CtaLink>
              <span className="inline-flex items-center rounded-full border border-cyan-300/25 bg-slate-950/60 px-5 py-2.5 text-sm text-slate-200">
                {profile.location}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
