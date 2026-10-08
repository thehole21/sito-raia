import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import HomeVideo from '@/components/home-video';
import ClientsMarquee from '@/components/clients-marquee';
import ValuesStrip from '@/components/values-strip';

export default function HomePage() {
  return (
    <>
      <section className="film-hero film-hero--v9" aria-labelledby="film-hero-title">
        <HomeVideo />
        <div className="film-hero__shade" aria-hidden="true" />
        <div className="shell film-hero__content">
          <p className="film-hero__overline">SERVIZI DI STAMPA E COMUNICAZIONE</p>
          <h1 id="film-hero-title" className="film-hero__headline">
            Stampa di Qualità{' '}<span>e Soluzioni Creative</span>
          </h1>
          <div className="film-hero__bottom">
            <Link href="/progetti" className="film-hero__cta">
              <span>Esplora i progetti</span>
              <span className="film-hero__cta-icon" aria-hidden="true">
                <ArrowUpRight size={21} strokeWidth={1.7} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <ClientsMarquee />
      <ValuesStrip />
    </>
  );
}
