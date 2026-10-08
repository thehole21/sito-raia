import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { COMPANY, NAV } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__lead">
          <div>
            <span className="eyebrow eyebrow--light"><span className="little-dot" /> PROSSIMO PROGETTO</span>
            <h2>Le idee prendono<br /><em>forma qui.</em></h2>
          </div>
          <Link href="/preventivo" className="footer__round-cta" aria-label="Vai al form preventivo"><ArrowUpRight size={33} strokeWidth={1.25} /></Link>
        </div>
        <div className="footer__rule" />
        <div className="footer__columns">
          <div className="footer__intro">
            <span className="footer__mini-brand">RAIA<span>.</span></span>
            <p>Stampa, comunicazione e soluzioni creative. Dalla carta agli spazi.</p>
            <Link href="/preventivo">Raccontaci la tua idea <ArrowRight size={15} /></Link>
          </div>
          <div className="footer__column"><span>ESPLORA</span>{NAV.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/preventivo">Preventivo</Link></div>
          <div className="footer__column"><span>CONTATTI</span><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a><a href={`tel:${COMPANY.phoneLink}`}>{COMPANY.phone}</a><a href={COMPANY.map} target="_blank" rel="noopener noreferrer">Indicazioni <ArrowUpRight size={13} /></a></div>
          <div className="footer__column footer__address"><span>DOVE SIAMO</span><p>{COMPANY.address}</p><p>{COMPANY.hours}</p></div>
        </div>
        <div className="footer__giant" aria-hidden="true">RAIA<span>®</span></div>
        <div className="footer__legal"><span>© {new Date().getFullYear()} {COMPANY.name}</span><span>P.IVA {COMPANY.vat} · SDI {COMPANY.sdi}</span><span>PENSA · CREA · STAMPA</span></div>
      </div>
    </footer>
  );
}
