import type { Profile } from "@/types/resume";

export const profile: Profile = {
  name: "陳彥霖",
  englishName: "David Chen",
  title: "後端導向全端工程師 / AI 系統整合",
  location: "新北市中和區",
  email: "david87124@gmail.com",
  summary: [
    "具備 3+ 年實務經驗，技術重心為後端 70% / 前端 30%。專注於高可用後端服務、API 架構與跨系統整合，能從需求訪談一路推進到產品落地。",
    "核心能力在於複雜業務流程數位化與第三方生態串接，特別是 LINE LIFF、Messaging API、LINE Login 與企業 CRM 場景。",
    "熟練將 GitHub Copilot、Claude、Codex 等 AI 工具導入開發流程，具備 RAG / LLM 實際上線經驗，並能在跨職能情境中推進需求釐清、API 規格與交付節奏。",
  ],
  highlights: [
    {
      label: "工作年資",
      value: "3+ 年",
      description: "後端導向全端實務開發",
    },
    {
      label: "效能優化",
      value: "API -90%",
      description: "MMS Lab 專案回應時間縮短",
    },
    {
      label: "雲端成本",
      value: "-50%",
      description: "Docker + Jenkins + EFK 導入後達成",
    },
  ],
  skillCategories: [
    {
      title: "後端 / 系統架構",
      items: [
        "Node.js",
        "TypeScript",
        "Express",
        "Socket.io",
        "NestJS",
        "Fastify",
      ],
    },
    {
      title: "資料庫 / 效能",
      items: [
        "MongoDB Aggregation Pipeline",
        "MongoDB Index 優化",
        "PostgreSQL",
      ],
    },
    {
      title: "AI 與開發流程",
      items: [
        "LangChain",
        "LangGraph",
        "RAG 知識庫實作",
        "n8n 自動化流程",
        "GitHub Copilot",
        "Claude Code",
        "OpenAI Codex",
      ],
    },
    {
      title: "前端 / 跨平台",
      items: ["Nuxt.js", "Flutter", "React", "Next.js"],
    },
    {
      title: "DevOps / 雲端",
      items: [
        "AWS EC2/S3/Lambda",
        "Docker",
        "Jenkins CI/CD",
        "EFK 日誌監控",
        "Langfuse",
      ],
    },
  ],
  coreExperience: [
    {
      company: "建商 CRM × LINE LIFF 整合系統（獨立接案）",
      role: "全端工程師",
      period: "2025/07 - 2026/02（在職期間兼職接案）",
      location: "台灣",
      workMode: "兼職接案",
      bullets: [
        "從 0 到 1 打造 B2B2C 核心營運系統，規劃建商管理層、銷售與屋主三方 RBAC 權限模型。",
        "以 LINE LIFF 作為屋主唯一入口，整合 LINE Login 與 Messaging API，讓屋主免安裝 App 即可查詢工程進度與提交報修。",
        "在單一建商實際場域導入試營運，對應竹山大型案場（70+ 戶）並持續優化交屋與售後流程。",
      ],
      tags: ["Node.js", "TypeScript", "Nuxt 4", "Strapi v4", "LINE API", "RBAC"],
    },
    {
      company: "如影優活股份有限公司",
      role: "全端工程師",
      period: "2023/08 - 仍在職",
      location: "台北市內湖區",
      workMode: "全職",
      bullets: [
        "開發 AI 保健小幫手（LINE Bot），串接 Messaging API 與 LangChain RAG，並實作對話狀態管理，降低客服回覆成本。",
        "於 Ayako AI 虛擬人專案負責 RAG 知識庫、對話 API 與 Socket.io 即時互動通道，並與 Unreal / 語音團隊協作整合流程。",
        "主導 IoT 監控平台 API 設計，整合 Home Assistant，並導入 n8n 建置自動化資料統計流程。",
      ],
      tags: ["LLM", "RAG", "Line Bot", "IoT", "Docker"],
    },
    {
      company: "國立臺北科技大學 多媒體實驗室 MMS Lab",
      role: "軟體工程師",
      period: "2021/07 - 2023/08",
      location: "台北市大安區",
      workMode: "全職（研究助理）",
      bullets: [
        "重構 iTalkuTalk 語言學習平台資料查詢邏輯，優化 MongoDB Aggregation Pipeline。",
        "達成資料更新時間減少 84%、資料傳輸量減少 99%、API 回應時間縮短 90%。",
        "完整盤點與合併實驗室專案容器服務，重整部署管線與監控流程，導入 Docker + Jenkins + EFK 後 AWS 成本降低約 50%。",
        "碩二期間帶領 2-3 位學弟妹實作前後端功能，並擔任 4 學期應用軟體實習 TA（每堂約 30-40 人）。",
      ],
      tags: ["MongoDB", "AWS", "Jenkins", "EFK", "DevOps"],
      impactNote: "iTalkuTalk DAU 約 3,000；依使用行為模型推估，峰值同時在線約 80-150、應用層峰值約 20-45 QPS（非正式壓測數據）。",
    },
  ],
  earlyExperience: [
    {
      company: "如影優活股份有限公司",
      role: "軟體品質驗證工程師",
      period: "2019/01 - 2021/07",
      location: "台北市內湖區",
      workMode: "全職",
      bullets: [
        "負責 Rossmax Healthstyle App 首版功能驗證，涵蓋藍牙連線、資料同步與穩定性測試。",
        "參與 VUIoHT SDK 驗證流程，支援第三方整合測試與問題追蹤。",
      ],
      tags: ["QA", "Test Automation", "Asana", "Slack"],
    },
  ],
  education: [
    {
      school: "國立臺北科技大學",
      degree: "電子工程學系 碩士",
      period: "2021 - 2023",
      thesisTitle: "雲端統計資料的最佳化運算（Optimization of Cloud-based Statistical Data Computation）",
      thesisAdvisor: "黃士嘉 博士",
      thesisKeywords: ["MongoDB", "Database", "Cloud Services"],
      thesisSummary:
        "以 MongoDB 聚合管線與資料模型重構優化統計系統，結合 AWS 自動化排程、報表 API 與前端非同步渲染，顯著改善回應時間與資料傳輸效率。",
    },
    {
      school: "大同大學",
      degree: "電機工程學系 學士",
      period: "2017 - 2021",
    },
  ],
  desiredRoles: ["AI 工程師", "全端工程師", "後端工程師"],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/david8712403",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yanlin-david/",
      icon: "linkedin",
    },
  ],
};
