import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone, Clock3 } from 'lucide-react';
import SocialLinks from '@/components/social-links';
import { COMPANY } from '@/lib/content';

export const metadata = { title: 'Contatti', description: 'Contatta RAIA srl a Guidonia Montecelio (RM). Telefono, email, orari e indirizzo.' };

export default function ContattiPage() {
  return (
    <>
      <section className="page-opening shell">
        <div className="page-opening__eyebrow"><span className="little-dot" /> 05 / CONTATTI</div>
        <div className="page-opening__grid">
          <h1>Parliamone<span className="accent-dot">.</span></h1>
          <p>Un progetto, una domanda, una nuova idea. Ecco come raggiungerci.</p>
        </div>
      </section>
      <section className="shell contact-grid">
        <div className="contact-grid__dark">
          <span className="eyebrow eyebrow--light">IL TUO PROSSIMO PROGETTO</span>
          <h2>Prendiamo<br />forma <em>insieme.</em></h2>
          <Link href="/preventivo">Richiedi un preventivo <ArrowUpRight size={20} aria-hidden="true" /></Link>
        </div>
        <div className="contact-grid__details">
          <div><Mail size={21} aria-hidden="true" /><div><span>EMAIL</span><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div></div>
          <div><Phone size={21} aria-hidden="true" /><div><span>TELEFONO</span><a href={`tel:${COMPANY.phoneLink}`}>{COMPANY.phone}</a></div></div>
          <div><MapPin size={21} aria-hidden="true" /><div><span>SEDE</span><p>{COMPANY.address}</p><a className="contact-map" href={COMPANY.map} target="_blank" rel="noopener noreferrer">Indicazioni <ArrowUpRight size={15} aria-hidden="true" /></a></div></div>
          <div><Clock3 size={21} aria-hidden="true" /><div><span>ORARI</span><p>{COMPANY.hours}</p></div></div>
          <div className="contact-grid__social-row"><span className="contact-grid__social-mark" aria-hidden="true">↗</span><div><span>SEGUICI</span><SocialLinks className="contact-socials" label="RAIA sui social" /></div></div>
        </div>
      </section>
    </>
  );
}
