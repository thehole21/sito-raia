import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import SocialLinks from '@/components/social-links';
import { COMPANY } from '@/lib/content';

export const metadata = {
  title: 'Contatti',
  description: 'Contatta RAIA srl a Guidonia Montecelio (RM). Recapiti, social e posizione sulla mappa.'
};

const EMBED_URL = 'https://www.google.com/maps?q=Via%20Bruno%20Pontecorvo%2046%2C%2000012%20Guidonia%20Montecelio%20RM&output=embed';

export default function ContattiPage() {
  return (
    <>
      <section className="page-opening shell">
        <div className="page-opening__eyebrow"><span className="little-dot" /> CONTATTI</div>
        <div className="page-opening__grid">
          <h1>Parliamone<span className="accent-dot">.</span></h1>
          <p>Una nuova idea o un progetto da realizzare? Qui trovi tutti i nostri recapiti.</p>
        </div>
      </section>
      <section className="shell contact-grid contact-grid--v7" aria-label="Recapiti RAIA">
        <div className="contact-grid__dark">
          <span className="eyebrow eyebrow--light">RAIA SRL</span>
          <h2>Diamo forma<br /><em>alle idee.</em></h2>
          <span className="contact-grid__tagline">Pensa · Crea · Stampa</span>
        </div>
        <div className="contact-grid__details">
          <div><Mail size={21} aria-hidden="true" /><div><span>EMAIL</span><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div></div>
          <div><Phone size={21} aria-hidden="true" /><div><span>TELEFONO</span><a href={`tel:${COMPANY.phoneLink}`}>{COMPANY.phone}</a></div></div>
          <div><MapPin size={21} aria-hidden="true" /><div><span>SEDE</span><p>{COMPANY.address}</p></div></div>
          <div className="contact-grid__social-row"><span className="contact-grid__social-mark" aria-hidden="true">↗</span><div><span>SEGUICI</span><SocialLinks className="contact-socials" label="RAIA sui social" /></div></div>
        </div>
      </section>
      <section className="location-section shell" aria-labelledby="location-title">
        <div className="location-section__heading">
          <div><span className="section-overline">DOVE SIAMO</span><h2 id="location-title">Vieni a trovarci<span>.</span></h2></div>
          <a href={COMPANY.map} target="_blank" rel="noopener noreferrer">Apri Google Maps <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" /></a>
        </div>
        <div className="location-section__map">
          <iframe src={EMBED_URL} title="Mappa Google Maps della sede RAIA, Via Bruno Pontecorvo 46, Guidonia Montecelio" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
        <p className="location-section__address">Via Bruno Pontecorvo 46 · 00012 Guidonia Montecelio (RM)</p>
      </section>
    </>
  );
}
