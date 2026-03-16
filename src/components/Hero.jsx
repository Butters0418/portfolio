import { contactLinks } from "../data/contact";
import { headShot } from "../assets";

export default function Hero() {
  return (
    <section className="flex gap-8 sm:gap-10 min-h-115 items-center py-6 flex-col lg:flex-row">
      {/* Left */}
      <div className="flex-1 flex flex-col justify-center gap-1.5 sm:gap-4.5 order-1 lg:order-0">
        <h1 className="font-serif text-4xl sm:text-7xl lg:text-[84px] leading-none font-medium text-text-primary tracking-tight -ml-0.5 sm:-ml-1">劉 兆翔</h1>
        <p className="font-sans text-xl font-medium text-text-link mt-3 sm:mt-0">Frontend Developer</p>
        <p className="font-sans text-base sm:text-lg leading-relaxed text-text-tagline">
          Hi，我是 Butters，擁有多年前端開發經驗。職涯從日商嚴謹、重視細節的工作文化出發，歷經 PChome
          高流量、高變化的電商環境，培養出在時程壓力下確保品質與交付效率的開發能力。我長期參與行銷專案開發，熟悉跨部門協作流程，並在技術、設計與行銷之間扮演溝通橋樑，將業務需求拆解為可落地的實作方案。同時也注重產品體驗與流程優化，持續將
          AI 工具整合進開發流程，結合技術能力與商業目標，打造具有價值的產品。
        </p>
        <ul className="flex gap-4 text-2xl px-0.5 text-text-link">
          {contactLinks.map(({ label, href, icon, hoverClass }) => {
            const Icon = icon;
            const hrefLink = label === "Gmail" ? `mailto:${href}` : href;
            return (
              <li key={label}>
                <a href={hrefLink} target="_blank" rel="noopener noreferrer" className={`transition-colors ${hoverClass}`}>
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right — portrait */}
      <div className="w-auto  md:w-105 lg:shrink-0 flex items-center justify-center">
        <div className="overflow-hidden border border-[#A5B1B9] bg-[#D8D4CB]">
          <img src={headShot} alt="Butters" className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
