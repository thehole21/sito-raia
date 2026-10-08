import { Lightbulb, BadgeCheck, ShieldCheck } from 'lucide-react';

const VALUES = [
  { title: 'Creatività', text: 'Dall’apporto grafico alla progettazione, accompagniamo ogni idea nella comunicazione visiva.', Icon: Lightbulb },
  { title: 'Professionalità', text: 'Revisioni, controlli e consegne: ogni lavorazione punta alla massima qualità.', Icon: BadgeCheck },
  { title: 'Serietà', text: 'Responsabilità, dedizione e attenzione ai dettagli. La vostra fiducia è la priorità.', Icon: ShieldCheck }
];

export default function ValuesStrip() {
  return (
    <section className="values-strip" aria-label="I valori di RAIA">
      <div className="shell values-strip__intro">
        <span className="section-overline">IL NOSTRO APPROCCIO</span>
        <h2>Come lavoriamo<span>.</span></h2>
      </div>
      <div className="shell values-strip__grid">
        {VALUES.map(({ title, text, Icon }) => (
          <article className="values-strip__item" key={title}>
            <Icon size={35} strokeWidth={1.15} aria-hidden="true" />
            <div><h3>{title}</h3><p>{text}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
