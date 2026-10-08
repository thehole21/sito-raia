import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ProjectsGrid from '@/components/projects-grid';
export const metadata = { title: 'Progetti', description: 'Una selezione di lavori RAIA: Gucci, NTT DATA, Rimac e altre realizzazioni.' };
export default function ProgettiPage() { return <><section className="page-opening shell"><div className="page-opening__eyebrow"><span className="little-dot" /> 02 / LAVORI SELEZIONATI</div><div className="page-opening__grid"><h1>Le idee,<br /><em>realizzate.</em></h1><p>Non rendering e promesse: una selezione di lavorazioni e applicazioni presenti nella galleria RAIA.</p></div></section><ProjectsGrid/><section className="page-endline shell"><p>Il prossimo progetto potrebbe essere il tuo.</p><Link href="/preventivo">Raccontacelo <ArrowUpRight size={17}/></Link></section></>; }
