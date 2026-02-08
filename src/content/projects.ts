import type { Project, ProjectSlug } from "@/types/resume";

export const projectOrder: ProjectSlug[] = ["buildcare", "ayako", "cycle-path"];

export const projects: Record<ProjectSlug, Project> = {
  buildcare: {
    slug: "buildcare",
    title: "BuildCare",
    subtitle: "建商 CRM × LINE 數位整合方案",
    tagline: "以 LINE 作為屋主入口，打通工程進度、通知與售後報修流程。",
    period: "2025/07 - 2026/02",
    role: "獨立全端開發",
    theme: "CRM / LINE 生態整合",
    summary:
      "BuildCare 是為建設公司打造的 B2B2C 系統，將預售屋長週期交付與售後報修流程數位化，提升透明度與客戶體驗。",
    challenge:
      "預售屋交屋週期長、資訊斷點多，屋主通常需依賴電話與人工聯繫追蹤進度，建商端也缺乏可追溯的集中化管理流程。",
    solution: [
      "規劃多角色 RBAC 權限模型（建商管理層、銷售業務、屋主），確保資料與操作範圍可控。",
      "以 LINE LIFF + LINE Login 建立屋主免安裝入口，降低導入門檻並提升使用率。",
      "串接 LINE Messaging API 做重要節點通知，整合報修單、進度圖文紀錄與後台審核流程。",
      "以 Monorepo 管理多端模組，確保前後台開發效率與版本一致性。",
    ],
    metrics: [
      {
        label: "流程數位化",
        value: "100%",
        description: "報修與工程追蹤流程全面線上化",
      },
      {
        label: "通知機制",
        value: "Real-time",
        description: "重要施工節點自動推播至 LINE",
      },
      {
        label: "入口成本",
        value: "No App",
        description: "屋主免下載 App，直接使用 LIFF",
      },
    ],
    techStack: [
      "Nuxt 4",
      "Strapi v4",
      "Node.js",
      "TypeScript",
      "LINE LIFF",
      "LINE Messaging API",
      "LINE Login",
      "Monorepo",
    ],
    architecture: [
      {
        title: "屋主端（LIFF）",
        details: [
          "LINE Login 身份驗證與戶別綁定",
          "進度圖文查詢與報修單提交流程",
          "即時接收施工節點通知",
        ],
      },
      {
        title: "建商管理後台",
        details: [
          "工程日誌上傳、排程發佈與審核",
          "多建案切換與屋主名單管理",
          "報修工單追蹤與狀態管理",
        ],
      },
      {
        title: "整合中台",
        details: [
          "整合 LINE Messaging API 與 Webhook",
          "角色權限與資料模型集中治理",
          "模組化 API 設計利於擴充案場與流程",
        ],
      },
    ],
    features: [
      {
        title: "多角色 RBAC",
        description: "建立建商、銷售、屋主三方權限邏輯，降低資料誤用風險。",
      },
      {
        title: "工程進度圖文化",
        description: "以時間軸方式呈現施工里程碑、照片與說明文字，提升透明度。",
      },
      {
        title: "售後報修線上化",
        description: "屋主可直接於 LINE 提交報修，後台可追蹤處理狀態與回覆。",
      },
      {
        title: "通知自動化",
        description: "重要節點自動推送通知，減少人工逐一聯繫成本。",
      },
    ],
    achievements: [
      "成功將複雜交屋流程轉為可追蹤的線上系統，降低資訊落差與溝通成本。",
      "系統同時覆蓋屋主端與建商端流程，具備實際商業可用性。",
      "可持續擴展至更多案型與售後服務場景。",
    ],
    gallery: [
      {
        src: "/assets/buildcare/admin-overview.svg",
        alt: "BuildCare 建商管理後台儀表板示意",
        caption: "建商後台：多案場總覽與入口",
      },
      {
        src: "/assets/buildcare/admin-progress-list.svg",
        alt: "BuildCare 工程進度列表頁示意",
        caption: "工程進度管理：卡片化流程與照片紀錄",
      },
      {
        src: "/assets/buildcare/liff-progress-mobile.svg",
        alt: "BuildCare LIFF 手機版工程進度頁示意",
        caption: "LIFF 屋主端：進度列表與階段狀態",
        ratioClass: "sm:col-span-1",
      },
      {
        src: "/assets/buildcare/liff-progress-detail.svg",
        alt: "BuildCare LIFF 工程進度詳情頁示意",
        caption: "LIFF 屋主端：施工說明與圖片詳情",
        ratioClass: "sm:col-span-1",
      },
      {
        src: "/assets/buildcare/liff-progress-feed.svg",
        alt: "BuildCare LIFF 多筆工程紀錄頁示意",
        caption: "LIFF 屋主端：多筆工程動態與更新時間",
        ratioClass: "sm:col-span-1",
      },
      {
        src: "/assets/buildcare/admin-repair.svg",
        alt: "BuildCare 報修管理流程示意",
        caption: "後台報修流程：案件狀態追蹤與分派",
      },
      {
        src: "/assets/buildcare/architecture-flow.svg",
        alt: "BuildCare 系統架構流程圖示意",
        caption: "架構示意：LIFF / CRM / LINE API 整合",
      },
    ],
    links: [
      {
        label: "104 履歷參考",
        href: "https://pda.104.com.tw/profile/share/3EC4mYvPDVEUeB8LYYPSQvKi0foPj71O",
      },
    ],
    nextSlug: "ayako",
    coverImage: "/assets/buildcare/admin-progress-list.svg",
  },
  ayako: {
    slug: "ayako",
    title: "Ayako",
    subtitle: "品牌專屬的情感 AI 虛擬人",
    tagline: "融合 Unreal Engine、RAG、語音與即時串流，打造具情緒層次的互動角色。",
    period: "2023 - 在職專案",
    role: "生成式 AI 系統整合工程師",
    theme: "AI 虛擬人 / 多模態互動",
    summary:
      "Ayako 是面向高端客製互動場景的 AI 虛擬人系統，角色可依情境展現多種情緒並進行自然對話。",
    collaborationHighlight:
      "專案以 Digitopia 參賽並榮獲 London Design Awards 與 MUSE Award 等國際獎項。",
    challenge:
      "要讓虛擬角色不只會回答問題，而是能貼合劇本人設、情境語氣與情緒變化，並維持低延遲的即時互動體驗。",
    solution: [
      "建置角色專屬知識庫，將編劇設定與對話素材透過 RAG 策略導入回應流程。",
      "整合 Unreal Engine 3D 角色、LLM、語音生成與前端即時串流，建立多模組中樞協調層。",
      "開發對話 UI 與 socket.io 互動通道，提升互動穩定度與沉浸感。",
    ],
    metrics: [
      {
        label: "核心能力",
        value: "5 種情緒",
        description: "開心、難過、生氣、厭惡、害怕",
      },
      {
        label: "獎項",
        value: "2+ 國際獎",
        description: "London Design Awards / MUSE Award",
      },
      {
        label: "互動模式",
        value: "即時多模態",
        description: "語音 + 表情 + 動作 + 文本",
      },
    ],
    techStack: [
      "Unreal Engine",
      "LLM",
      "RAG",
      "Socket.io",
      "TypeScript",
      "Streaming",
      "TTS",
    ],
    architecture: [
      {
        title: "角色知識層",
        details: [
          "劇本設定與人設資料切片",
          "RAG 檢索流程提升角色一致性",
          "情境導向回應策略",
        ],
      },
      {
        title: "互動中樞",
        details: [
          "多模組事件協調（LLM / TTS / 角色動畫）",
          "低延遲對話通道與狀態同步",
          "即時錯誤監控與回退策略",
        ],
      },
      {
        title: "前端體驗層",
        details: [
          "即時視訊串流與聊天室互動",
          "角色狀態與情緒回饋視覺化",
          "品牌展示場景客製化",
        ],
      },
    ],
    features: [
      {
        title: "劇本導向回應",
        description: "回應內容不脫離角色設定，保留品牌語氣一致性。",
      },
      {
        title: "情緒化互動",
        description: "依語意與上下文觸發多種情緒與肢體表現。",
      },
      {
        title: "即時語音串流",
        description: "降低對話延遲，提升現場展示沉浸感。",
      },
      {
        title: "可商用擴展",
        description: "可套用到品牌活動、展演互動、沉浸式體驗場景。",
      },
    ],
    achievements: [
      "2024 London Design Awards（Service Design / Other）金獎。",
      "2025 MUSE Award（Artificial Intelligence）銀獎。",
      "完成可上線的虛擬人整合流程，將 AI 能力轉為可體驗產品。",
    ],
    gallery: [
      {
        src: "/assets/ayako/ayako-hero.svg",
        alt: "Ayako 虛擬人展示主畫面示意",
        caption: "角色主視覺與品牌展示情境",
      },
      {
        src: "/assets/ayako/ayako-dialogue.svg",
        alt: "Ayako 對話介面與文本流示意",
        caption: "即時對話介面與語意回饋流程",
      },
      {
        src: "/assets/ayako/ayako-emotion.svg",
        alt: "Ayako 五種情緒切換示意",
        caption: "情緒層次：開心、難過、生氣、厭惡、害怕",
      },
      {
        src: "/assets/ayako/ayako-streaming.svg",
        alt: "Ayako 多模態串流架構示意",
        caption: "多模態整合：LLM、語音、角色動畫",
      },
      {
        src: "/assets/ayako/ayako-awards.svg",
        alt: "Ayako 國際設計獎項示意",
        caption: "國際獎項：London Design Awards / MUSE Award",
      },
    ],
    links: [
      {
        label: "Cake 作品頁（Ayako）",
        href: "https://www.cake.me/portfolios/ayako-ai",
      },
      {
        label: "YouTube 影片",
        href: "https://www.youtube.com/watch?v=dTkpQHFgVKI",
      },
    ],
    nextSlug: "cycle-path",
    coverImage: "/assets/ayako/ayako-hero.svg",
  },
  "cycle-path": {
    slug: "cycle-path",
    title: "Cycle Path",
    subtitle: "綠輪騎跡 - 自行車挑戰 App",
    tagline: "結合 GPS 軌跡、路線挑戰與在地活動，讓運動與觀光形成正循環。",
    period: "2024",
    role: "獨立開發",
    theme: "Flutter / Firebase / 在地合作",
    summary:
      "Cycle Path 是一款結合自行車挑戰、GPS 軌跡紀錄與社群互動的跨平台 App，並與南投縣竹山鎮公所合作推動在地活動。",
    motivation:
      "身為南投竹山人，希望用軟體能力把家鄉單車路線與在地景點帶給更多人，讓運動、觀光與永續減碳可以同時發生。",
    collaborationHighlight:
      "支援竹山鎮公所「綠輪騎跡 追風趣」活動，參加者可透過 App 完成指定路線打卡、參與抽獎與兌換在地禮品。",
    challenge:
      "需要把 GPS 路線記錄、活動挑戰判定、用戶互動與推播通知整合成可穩定運行的行動服務，並支援活動檔期爆量使用。",
    solution: [
      "使用 Flutter 打造 iOS / Android 一致體驗，縮短雙平台開發與維護成本。",
      "採用 Firebase Firestore 儲存騎乘紀錄、活動參與資料，並以 Cloud Functions 管理挑戰判定與獎勵邏輯。",
      "整合 Firebase Authentication 與 Cloud Messaging，支援多登入方式與活動推播。",
    ],
    metrics: [
      {
        label: "平台覆蓋",
        value: "iOS + Android",
        description: "Flutter 跨平台一致體驗",
      },
      {
        label: "活動整合",
        value: "公部門合作",
        description: "竹山鎮公所單車挑戰活動導入",
      },
      {
        label: "核心功能",
        value: "GPS 挑戰",
        description: "路線紀錄、打卡、挑戰判定與推播",
      },
    ],
    techStack: [
      "Flutter",
      "Firebase Firestore",
      "Firebase Authentication",
      "Cloud Functions",
      "Cloud Messaging",
      "Provider / GetX",
      "GPS",
    ],
    architecture: [
      {
        title: "App 端",
        details: [
          "GPS 路線記錄與運動數據顯示",
          "挑戰任務追蹤與活動打卡",
          "Provider / GetX 狀態管理",
        ],
      },
      {
        title: "Firebase 雲端",
        details: [
          "Firestore 儲存用戶資料與騎乘紀錄",
          "Cloud Functions 執行活動判定邏輯",
          "Cloud Messaging 發送活動提醒與通知",
        ],
      },
      {
        title: "活動營運層",
        details: [
          "與地方單位協作路線活動規則",
          "打卡紀錄對應抽獎與兌換機制",
          "資料回饋可作為後續活動優化依據",
        ],
      },
    ],
    features: [
      {
        title: "GPS 軌跡紀錄",
        description: "完整記錄騎乘路線與時間，建立個人挑戰歷程。",
      },
      {
        title: "任務挑戰機制",
        description: "依指定路線打卡完成任務，提升參與黏著度。",
      },
      {
        title: "社群與活動互動",
        description: "結合地方活動導流，創造運動與觀光雙向價值。",
      },
      {
        title: "推播提醒",
        description: "活動通知與進度提醒，提高回訪與完賽率。",
      },
    ],
    achievements: [
      "成功支援竹山鎮公所單車活動，將 App 實際導入在地推廣場景。",
      "把個人開發作品轉化為具社會影響力的地方行銷工具。",
      "建立可重複使用的活動挑戰系統架構，便於後續擴展。",
    ],
    gallery: [
      {
        src: "/assets/cycle-path/cycle-hero.svg",
        alt: "Cycle Path App 首頁示意",
        caption: "首頁：活動入口與個人騎乘摘要",
      },
      {
        src: "/assets/cycle-path/cycle-route-map.svg",
        alt: "Cycle Path 路線地圖與 GPS 軌跡示意",
        caption: "地圖頁：GPS 軌跡與指定路線",
      },
      {
        src: "/assets/cycle-path/cycle-challenge.svg",
        alt: "Cycle Path 挑戰任務頁示意",
        caption: "挑戰頁：任務完成狀態與打卡記錄",
      },
      {
        src: "/assets/cycle-path/cycle-event.svg",
        alt: "Cycle Path 與竹山鎮公所合作活動示意",
        caption: "在地合作：綠輪騎跡 追風趣活動",
      },
      {
        src: "/assets/cycle-path/cycle-stats.svg",
        alt: "Cycle Path 騎乘數據統計頁示意",
        caption: "個人統計：距離、時間、里程目標",
      },
    ],
    links: [
      {
        label: "Cake 作品頁（Cycle Path）",
        href: "https://www.cake.me/portfolios/cycle-path",
      },
    ],
    nextSlug: "buildcare",
    coverImage: "/assets/cycle-path/cycle-hero.svg",
  },
};

export const allProjects = projectOrder.map((slug) => projects[slug]);

export const getProjectBySlug = (slug: string) => {
  if (slug in projects) {
    return projects[slug as ProjectSlug];
  }

  return undefined;
};
