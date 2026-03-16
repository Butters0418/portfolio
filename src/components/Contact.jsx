import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { contactLinks } from "../data/contact";

export default function Contact() {
  return (
    <Section>
      <SectionTitle>Contact</SectionTitle>
      <ul className="flex flex-col gap-y-3 px-0.5">
        {contactLinks.map(({ label, href, icon, groupHoverClass }) => {
          const Icon = icon;
          const hrefLink = label === "Gmail" ? `mailto:${href}` : href;
          return (
            <li key={label} className="font-sans text-base md:text-lg text-text-link group">
              <a href={hrefLink} target="_blank" className="flex items-center gap-x-2 duration-150">
                <Icon className={`transition-colors shrink-0 ${groupHoverClass}`} />
                <span className="group-hover:underline">{href}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
