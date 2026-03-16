import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const cards = [
  {
    title: "Frontend Core",
    titleColor: "#2E3740",
    body: "React、Component-based Architecture、TypeScript、Zustand、React Query、React Router、Next.js (in progress)",
    bg: "bg-surface-blue",
    border: "border-surface-blue-border",
  },
  {
    title: "Styling & Animation",
    titleColor: "#3B3A35",
    body: "Tailwind CSS、Styled-Components、SCSS、Material-UI、CSS Animation、GSAP、Framer Motion、Phaser(2D)",
    bg: "bg-surface-warm",
    border: "border-surface-warm-border",
  },
  {
    title: "Backend & Tooling",
    titleColor: "#324038",
    body: "Node.js、Express、MongoDB、Vite、Git Workflow",
    bg: "bg-surface-green",
    border: "border-surface-green-border",
  },
  {
    title: "AI-Assisted Development",
    titleColor: "#323C48",
    body: "GitHub Copilot、Claude Code、Codex",
    bg: "bg-surface-cool",
    border: "border-surface-cool-border",
  },
];

export default function Skills() {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {cards.map((card) => (
          <div key={card.title} className={`flex flex-col gap-3 p-3 md:p-5 border ${card.bg} ${card.border}`}>
            <h3 className="font-serif text-xl md:text-[20px] font-medium leading-tight tracking-[0.2px]" style={{ color: card.titleColor }}>
              {card.title}
            </h3>
            <p className="font-sans text-[15px] leading-[1.6] text-text-secondary whitespace-pre-line">{card.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
