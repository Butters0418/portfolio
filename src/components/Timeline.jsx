import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const rows = [
  {
    year: "Present",
    company: "個人專案",
    title: null,
    experience: [
      {
        description: "餐飲點餐系統   <span>Full-stack Side Project</span>",
        list: [
          "前端：React + Vite + Tailwind 開發操作介面",
          "後端：Node.js + Express + MongoDB 設計 API / Schema",
          "使用 TypeScript 提升專案結構性與可維護性",
          "訂單架構支援：內用 / 外帶、多階加料、同桌加點",
          "WebSocket 實作前台人員即時同步",
        ],
      },
      {
        description: "影片 AI 物件偵測擷取系統   <span>AI-Driven Development</span>",
        list: [
          "規劃系統架構：前端 React + Vite、後端 FastAPI、AI 模型 YOLO、影片處理 FFmpeg",
          "定義功能需求：多影片上傳、特定物件偵測、片段自動擷取、影片單一 / 合併下載",
          "以 AI 工具（Claude Code、Codex）驅動全程實作，驗證每個功能模組的正確性",
          "測試完整流程並實際運用於日常需求",
        ],
      },
    ],
  },
  {
    year: "<span>Jan</span> 2023 – <span>Sep</span> 2024",
    company: "PChome",
    title: "Frontend Developer",
    experience: [
      {
        description: "React 架構導入與元件標準化 <span>(行銷本部)</span>",
        list: [
          "導入 React + Vite + Tailwind，建構活動頁共用組件與模板，減少 1/4 開發時間並降低維護負擔",
          "建立 Git Workflow 與作業規範，方便同仁協作與版控，以應對高頻變化的業務需求",
          "整合商品、折價券、會員、限時瘋搶、AI 推薦（猜你喜歡）等 API，彙整並制定行銷上稿規則，保留版型與組件設計的多樣性並減少維護成本",
          "規劃高度可重用的小遊戲開發模式與元件，縮短互動專案從設計到上線的週期",
          "負責跨部門溝通與新專案開發規劃，與 PM、後端協作確保需求落地",
          "運用 Looker Studio 監控活動流量與使用者行為，持續以 Lighthouse 進行性能審核並針對數據反饋優化頁面體驗",
        ],
      },
    ],
  },
  {
    year: "<span>Jan</span> 2022 – <span>Dec</span> 2022",
    company: "PChome",
    title: "Frontend Developer",
    experience: [
      {
        description: "集團產品方向調研與規劃 <span>(綜效事業部)</span>",
        list: [
          "以前端角色進入策略單位，與外部顧問公司共同討論 Super App 發展可能性與電商生態圈佈局",
          "進行國內外大型電商平台的技術調研，蒐集趨勢與功能模組設計",
          "與外部廠商及內部 UI/UX 團隊協作，進行品牌 CIS 重構，並針對前、後台改版之視覺呈現與功能需求給予建議",
        ],
      },
    ],
  },
  {
    year: "<span>Sep</span> 2018 – <span>Dec</span> 2021",
    company: "PChome",
    title: "Frontend Developer",
    experience: [
      {
        description: "高流量活動頁開發 <span>(行銷本部)</span>",
        list: [
          "負責雙 11、618 等大型高流量活動頁開發，於高壓時程下穩定交付 ; 處理跨裝置與 WebView 相容性問題，確保活動頁在各端正常運行",
          "製作互動式 H5 遊戲，提升 APP 用戶參與度",
          "與行銷 / 業務 / 設計 / 後端協作，開發多項品牌館與跨部門行銷專案",
          "依行銷需求進行 GTM 事件埋設，監控事件成效",
          "為部門設計師進行前端基礎教學，減少設計稿溝通成本與返工次數",
        ],
      },
    ],
  },
  {
    year: "<span>Dec</span> 2016 - <span>Jun</span> 2018",
    company: "日商台灣北輪",
    title: "Web Designer",
    experience: [
      {
        description: "日本企業網站開發與維運",
        list: ["與客戶訪談需求、轉為網站開發規格", "負責日本企業官網 UI 設計與前端開發", "與後端工程師協作完成網站上線與維運", "維護多個日本企業（如 JAL、BRAND 楓月）官網內容"],
      },
    ],
  },
];

export default function Timeline() {
  return (
    <Section className="gap-9 sm:gap-12">
      <SectionTitle>Experience</SectionTitle>

      <div className="pl-1">
        {rows.map((row) => (
          <div
            key={row.year}
            className="p-4 sm:p-6 border-l border-divider relative after:absolute after:w-3 after:h-3 after:bg-[#A5B1B9] after:border-[#A5B1B9] after:border-2 after:rounded-full after:-left-1.5 after:-top-1.5 first:after:bg-bg"
          >
            <h3 className="flex items-center absolute w-full top-0 -translate-y-1/2 left-5 sm:left-6 gap-x-1.5 sm:gap-x-3 font-serif text-lg sm:text-xl font-medium text-[#3A4248] tracking-[0.2px]  shrink-0">
              <p className="timeline-year sm:text-[1em]" dangerouslySetInnerHTML={{ __html: row.year }} />
              {row.company && (
                <>
                  <span className=" text-divider">|</span>
                  <p>{row.company} </p>
                </>
              )}
              {row.title && (
                <>
                  <span className="text-divider hidden sm:block">|</span>
                  <p className="text-text-muted hidden sm:block">{row.title}</p>
                </>
              )}
            </h3>

            <div className="relative py-3 sm:py-4">
              <div className="font-sans text-sm sm:text-base leading-[1.6] text-[#56636B]">
                {row.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-medium mb-1.5 sm:mb-2.5 timeline-subtitle bg-surface-warm py-0.5 px-1.5 inline-block" dangerouslySetInnerHTML={{ __html: exp.description }} />
                    <ul className="list-disc ml-4">
                      {exp.list.map((item, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
