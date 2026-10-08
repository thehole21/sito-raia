import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Servizi from '@/components/servizi';

export const metadata = { title: 'Servizi', description: 'Tipografia, grande formato, allestimenti, wrapping e gadget personalizzati.' };

export default function ServiziPage() {
  return (
    <>
      <section className="page-opening shell"><div className="page-opening__eyebrow"><span className="little-dot" /> 01 / COSA FACCIAMO</div><div className="page-opening__grid"><h1>Ogni idea ha<br /><em>la sua forma.</em></h1><p>Dalla stampa tradizionale alle superfici più inaspettate. Cinque aree di lavoro, un approccio capace di combinarle.</p></div></section>
      <div className="shell"><Servizi /></div>
      <section className="page-endline shell"><p>Hai un progetto che attraversa più discipline?</p><Link href="/preventivo">Parliamone insieme <ArrowUpRight size={17}/></Link></section>
    </>
  );
}
