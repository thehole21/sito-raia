import About from '@/components/about';
export const metadata = { title: 'Chi siamo', description: 'Tre generazioni di esperienza nella comunicazione e nella stampa.' };
export default function AboutPage() { return <><section className="page-opening shell"><div className="page-opening__eyebrow"><span className="little-dot" /> 03 / IDENTITÀ</div><div className="page-opening__grid"><h1>Esperienza<br />in <em>evoluzione.</em></h1><p>La nostra storia viene dalla stampa. Il nostro lavoro continua a trovare nuove forme.</p></div></section><About /></>; }
