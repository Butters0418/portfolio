import Section from "./ui/Section";

export default function Footer() {
  return (
    <Section>
      <p className="font-sans text-xs text-text-muted flex justify-end">updated {__BUILD_DATE__}</p>
    </Section>
  );
}
