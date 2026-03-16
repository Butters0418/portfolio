import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

// icon
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const categories = [
  {
    label: "Side Project",
    labelColor: "#8B7355",
    cardBg: "bg-surface-warm",
    cardBorder: "border-surface-warm-border",
    items: [
      { title: "點餐系統前端", demo: "https://eatery.butters.idv.tw/?tableNumber=1", github: "https://github.com/Butters0418/eatery-frontend", repoName: "eatery-frontend" },
      { title: "點餐系統後端", demo: null, github: "https://github.com/Butters0418/eatery-backend", repoName: "eatery-backend" },
      { title: "影片物件分析", demo: null, github: "https://github.com/Butters0418/video-analysis", repoName: "video-analysis" },
    ],
  },
  {
    label: "Tool",
    labelColor: "#4A6B7C",
    cardBg: "bg-surface-blue",
    cardBorder: "border-surface-blue-border",
    items: [
      {
        title: "商品套框工具",
        demo: "https://create-ads.butters.idv.tw/",
        github: "https://github.com/Butters0418/create-ads",
        repoName: "create-ads",
      },
    ],
  },
  {
    label: "Festival & Brand",
    labelColor: "#5C6B58",
    cardBg: "bg-surface-green",
    cardBorder: "border-surface-green-border",
    items: [
      { title: "雙十一", demo: "https://double11.butters.idv.tw/", github: "https://github.com/Butters0418/double11", repoName: "double11" },
      { title: "品牌 石頭", demo: "https://roborock.butters.idv.tw/", github: "https://github.com/Butters0418/roborock", repoName: "roborock" },
      { title: "節日 飲冰節", demo: "https://ice-festival.butters.idv.tw/", github: "https://github.com/Butters0418/ice-festival", repoName: "ice-festival" },
      { title: "節日 黑五", demo: "https://black-friday.butters.idv.tw/", github: "https://github.com/Butters0418/black-friday", repoName: "black-friday" },
    ],
  },
  {
    label: "Game & Interactive",
    labelColor: "#798d9a",
    cardBg: "bg-surface-cool",
    cardBorder: "border-surface-cool-border",
    items: [
      { title: "天天簽到", demo: "https://24h.pchome.com.tw/activity/check-in", github: null, repoName: null },
      { title: "聖誕節小遊戲", demo: "https://game-sanda.butters.idv.tw/", github: "https://github.com/Butters0418/game-sanda", repoName: "game-sanda" },
      { title: "週末小遊戲", demo: "https://game-duck.butters.idv.tw/", github: "https://github.com/Butters0418/game-duck", repoName: "game-duck" },
    ],
  },
];

export default function Projects() {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col gap-2.5">
            <p className="text-[11px] font-bold tracking-widest uppercase" style={{ color: cat.labelColor }}>
              {cat.label}
            </p>
            <div className="flex flex-col gap-2">
              {cat.items.map((item) => (
                <div key={item.title} className={`flex flex-col gap-2 p-3 border ${cat.cardBg} ${cat.cardBorder} `}>
                  <p className="text-sm font-medium text-text-primary leading-snug">{item.title}</p>
                  <div className="flex items-center gap-x-3 flex-wrap">
                    {item.demo && (
                      <a href={item.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-sm text-text-secondary hover:text-text-primary transition-colors">
                        <IoIosLink />
                        {item.github ? "Demo" : "Live"}
                      </a>
                    )}
                    {item.github === null && <span className="text-sm text-text-muted">(上線中)</span>}
                    {item.github && (
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm  transition-colors hover:text-text-tagline">
                        <FaGithub />
                        {item.repoName}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
