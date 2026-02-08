import type { Profile } from "@/types/resume";

export const profile: Profile = {
  name: "陳彥霖",
  englishName: "David Chen",
  title: "後端導向全端工程師 / 系統整合",
  location: "新北市中和區",
  email: "david87124@gmail.com",
  summary: [
    "具備 3+ 年實務經驗，技術重心為後端 70% / 前端 30%。專注於高可用後端服務、API 架構與跨系統整合，能從需求訪談一路推進到產品落地。",
    "核心能力在於複雜業務流程數位化與第三方生態串接，特別是 LINE LIFF、Messaging API、LINE Login 與企業 CRM 場景。",
    "熟練將 GitHub Copilot、Claude、Codex 等 AI 工具導入開發流程，並有 RAG / LLM 上線實績，能以 AI 提升交付品質與迭代速度。",
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
        "NestJS（實務接觸）",
        "Fastify（實務接觸）",
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
      items: ["Nuxt.js", "Flutter", "React（實務接觸）", "Next.js（實務接觸）"],
    },
    {
      title: "DevOps / 雲端",
      items: ["AWS EC2/S3/Lambda", "Docker", "Jenkins CI/CD", "EFK 日誌監控"],
    },
  ],
  coreExperience: [
    {
      company: "建案型 CRM × LINE LIFF 整合系統（獨立開發）",
      role: "全端工程師",
      period: "2025/07 - 2026/02",
      location: "台灣",
      bullets: [
        "從 0 到 1 打造 B2B2C 核心營運系統，規劃建商管理層、銷售與屋主三方 RBAC 權限模型。",
        "以 LINE LIFF 作為屋主唯一入口，整合 LINE Login 與 Messaging API，讓屋主免安裝 App 即可查詢工程進度與提交報修。",
        "將交屋與售後流程數位化，建立建商後台管理介面，提升服務效率與資訊透明度。",
      ],
      tags: ["Node.js", "TypeScript", "Nuxt 4", "Strapi v4", "LINE API"],
    },
    {
      company: "如影優活股份有限公司",
      role: "全端工程師",
      period: "2023/08 - 在職中",
      location: "台北市內湖區",
      bullets: [
        "開發 AI 保健小幫手（LINE Bot），串接 Messaging API 與 LangChain RAG，並實作對話狀態管理，降低客服回覆成本。",
        "參與 Ayako AI 虛擬人系統，整合多模態 LLM 後端與即時串流互動流程，推動正式上線。",
        "主導 IoT 監控平台 API 設計，整合 Home Assistant，並導入 n8n 建置自動化資料統計流程。",
      ],
      tags: ["LLM", "RAG", "Line Bot", "IoT", "Docker"],
    },
    {
      company: "國立臺北科技大學 多媒體實驗室 MMS Lab",
      role: "軟體工程師",
      period: "2021/07 - 2023/08",
      location: "台北市大安區",
      bullets: [
        "重構 iTalkuTalk 語言學習平台資料查詢邏輯，優化 MongoDB Aggregation Pipeline。",
        "達成資料更新時間減少 84%、資料傳輸量減少 99%、API 回應時間縮短 90%。",
        "導入 Docker 與 Jenkins 自動化部署，建置 EFK Stack 日誌系統，AWS 成本降低約 50%。",
      ],
      tags: ["MongoDB", "AWS", "Jenkins", "EFK", "DevOps"],
    },
  ],
  earlyExperience: [
    {
      company: "如影優活股份有限公司",
      role: "軟體品質驗證工程師",
      period: "2019/01 - 2021/07",
      location: "台北市內湖區",
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
    },
    {
      school: "大同大學",
      degree: "電機工程學系 學士",
      period: "2017 - 2021",
    },
  ],
  desiredRoles: ["全端工程師", "後端工程師", "AI 工程師"],
  links: [
    {
      label: "GitHub（可配置）",
      href: "#",
      placeholder: true,
    },
    {
      label: "LinkedIn（可配置）",
      href: "#",
      placeholder: true,
    },
  ],
};
