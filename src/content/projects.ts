import type { Project, ProjectSlug } from "@/types/resume";

export const projectOrder: ProjectSlug[] = ["buildcare", "ayako", "cycle-path"];
export const publicProjectOrder: ProjectSlug[] = ["buildcare", "ayako"];

export const projects: Record<ProjectSlug, Project> = {
  buildcare: {
    slug: "buildcare",
    title: "建商 CRM × LINE LIFF 整合系統",
    subtitle: "BuildCare（專案 SKU）",
    tagline: "以 LINE 作為屋主入口，打通工程進度、通知與售後報修流程，聚焦真實案場試營運。",
    period: "2025/07 - 2026/02",
    role: "獨立接案 / 全端工程師",
    theme: "CRM / LINE 生態整合",
    summary:
      "建商 CRM × LINE LIFF 整合系統是為建設公司打造的 B2B2C 服務，將預售屋長週期交付與售後報修流程數位化，提升透明度與客戶體驗。",
    statusNote: "單一建商實際導入，竹山大型案場（70+ 戶），目前為試營運階段。",
    scaleNote: "基於保密協議，不揭露客戶名稱與細部營運數據。",
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
        label: "導入狀態",
        value: "試營運中",
        description: "單一建商實際使用中（1 建商）",
      },
      {
        label: "案場規模",
        value: "70+ 戶",
        description: "竹山大型建案場域持續導入",
      },
      {
        label: "流程覆蓋",
        value: "三大流程",
        description: "工程進度、通知推播、報修管理全流程線上化",
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
      "已達成：將交屋與售後流程轉為可追蹤的線上系統，並完成單一建商試營運導入。",
      "已達成：屋主端與建商端流程整合於同一套資料模型，減少電話與手動對單成本。",
      "預期效果：隨案場持續使用，可進一步提升回報效率與資訊透明度，並擴展至更多案型場景。",
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
    videoEmbedUrl: "https://www.youtube.com/embed/dTkpQHFgVKI",
    videoTitle: "Ayako AI 虛擬人展示影片",
    period: "2023 - 在職專案",
    role: "生成式 AI 系統整合工程師",
    theme: "AI 虛擬人 / 多模態互動",
    summary:
      "Ayako 是面向高端客製互動場景的 AI 虛擬人系統，角色可依情境展現多種情緒並進行自然對話。",
    collaborationHighlight:
      "專案以 Digitopia 參賽並榮獲 London Design Awards 與 MUSE Award 等國際獎項。",
    ownershipLead: [
      "負責 Ayako 角色專屬 RAG 知識庫建置與檢索策略，讓回應維持角色一致性。",
      "設計對話 API 與 session state 流程，確保多輪互動在上下文中穩定運作。",
      "主導 Socket.io 即時互動與串流通道整合，降低前後端互動延遲與狀態錯亂。",
    ],
    ownershipCollab: [
      "與 Unreal 團隊協作事件/動作觸發接口，對齊語意與角色表演的同步時序。",
      "與語音模組團隊協作 TTS 佇列與回饋機制，優化語音播放與回應銜接。",
    ],
    ownershipBoundaryNote:
      "3D 建模與動畫內容由專責團隊負責；我負責系統整合、知識檢索與即時互動鏈路。",
    challenge:
      "要讓虛擬角色不只會回答問題，而是能貼合劇本人設、情境語氣與情緒變化，並維持低延遲的即時互動體驗。",
    solution: [
      "建置角色專屬知識庫，將編劇設定與對話素材透過 RAG 策略導入回應流程。",
      "設計對話 API 與 session state，管理多輪上下文、情境切換與角色語氣一致性。",
      "整合 socket.io 即時互動通道，並協作串接 Unreal 與語音模組以提升沉浸感。",
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
      "2024 London Design Awards - Service Design / Other 類別，金獎（Gold Winner）。",
      "2025 MUSE Award - Artificial Intelligence（AI）類別，銀獎（Silver Winner）。",
      "完成可上線的虛擬人整合流程，將 AI 能力轉為可體驗產品。",
    ],
    gallery: [
      {
        src: "/assets/ayako/ayako-cakeresume-01.png",
        alt: "Ayako 專案實際展示畫面一",
        caption: "Ayako 實際展示：角色與互動場景",
      },
      {
        src: "/assets/ayako/ayako-cakeresume-02.png",
        alt: "Ayako 專案實際展示畫面二",
        caption: "Ayako 實際展示：多模態互動流程",
      },
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
        label: "2024 London Design Awards 得獎頁",
        href: "https://thelondondesignawards.com/winner-info.php?id=4128",
      },
      {
        label: "2025 MUSE Award 得獎頁",
        href: "https://design.museaward.com/winner-info.php?id=27378",
      },
      {
        label: "YouTube 影片",
        href: "https://www.youtube.com/watch?v=dTkpQHFgVKI",
      },
    ],
    nextSlug: "buildcare",
    coverImage: "/assets/ayako/ayako-cakeresume-01.png",
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
        src: "/assets/cycle-path/cycle-cover.png",
        alt: "Cycle Path 專案封面",
        caption: "專案封面：綠輪騎跡主視覺",
        ratioClass: "sm:col-span-2 lg:col-span-3",
        aspectClass: "aspect-[16/7]",
        fit: "cover",
      },
      {
        src: "/assets/cycle-path/cycle-mobile-01.png",
        alt: "Cycle Path 手機截圖一",
        caption: "手機介面：挑戰與活動流程",
        aspectClass: "aspect-[9/19]",
        fit: "contain",
      },
      {
        src: "/assets/cycle-path/cycle-mobile-02.png",
        alt: "Cycle Path 手機截圖二",
        caption: "手機介面：地圖與路線紀錄",
        aspectClass: "aspect-[9/19]",
        fit: "contain",
      },
      {
        src: "/assets/cycle-path/cycle-mobile-03.png",
        alt: "Cycle Path 手機截圖三",
        caption: "手機介面：個人騎乘與里程資訊",
        aspectClass: "aspect-[9/19]",
        fit: "contain",
      },
      {
        src: "/assets/cycle-path/cycle-event-01.jpeg",
        alt: "Cycle Path 活動照片一",
        caption: "活動紀錄：在地單車推廣現場",
        aspectClass: "aspect-[4/3]",
        fit: "cover",
      },
      {
        src: "/assets/cycle-path/cycle-event-02.jpeg",
        alt: "Cycle Path 活動照片二",
        caption: "活動紀錄：參與者集結與互動",
        aspectClass: "aspect-[4/3]",
        fit: "cover",
      },
      {
        src: "/assets/cycle-path/cycle-event-03.png",
        alt: "Cycle Path 活動照片三",
        caption: "活動紀錄：綠輪騎跡追風趣",
        aspectClass: "aspect-[4/3]",
        fit: "cover",
      },
      {
        src: "/assets/cycle-path/cycle-logo.jpeg",
        alt: "Cycle Path 品牌 Logo",
        caption: "品牌識別：綠輪騎跡 Logo",
        ratioClass: "sm:col-span-2 lg:col-span-3",
        aspectClass: "aspect-[16/5]",
        fit: "contain",
      },
    ],
    links: [
      {
        label: "Cake 作品頁（Cycle Path）",
        href: "https://www.cake.me/portfolios/cycle-path",
      },
    ],
    nextSlug: "buildcare",
    coverImage: "/assets/cycle-path/cycle-cover.png",
  },
};

export const allProjects = publicProjectOrder.map((slug) => projects[slug]);

export const getProjectBySlug = (slug: string) => {
  if (slug in projects) {
    return projects[slug as ProjectSlug];
  }

  return undefined;
};
