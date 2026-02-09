import type { Metadata } from "next";
import { Noto_Sans_TC, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { InteractiveEffects } from "@/components/layout/interactive-effects";
import { GlobalTextRise } from "@/components/layout/global-text-rise";

const notoSansTc = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "陳彥霖 David Chen | 後端導向全端工程師",
    template: "%s",
  },
  description:
    "後端導向全端工程師 David Chen。聚焦 CRM × LINE 整合、AI 落地、MongoDB 效能優化與可擴充系統架構。",
  openGraph: {
    title: "陳彥霖 David Chen | 後端導向全端工程師",
    description:
      "BuildCare、Ayako、Cycle Path 三大案例。聚焦商業流程數位化、AI 系統整合與高可用服務設計。",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "David Chen Resume",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body
        className={`${notoSansTc.variable} ${spaceGrotesk.variable} relative min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_42%),radial-gradient(circle_at_80%_8%,rgba(14,165,233,0.18),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(30,41,59,0.55),transparent_58%)]" />
        <GlobalTextRise />
        <InteractiveEffects />
        <div className="relative z-10">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
