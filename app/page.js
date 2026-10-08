import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import HomeVideo from '@/components/home-video';
import ClientsMarquee from '@/components/clients-marquee';
import ValuesStrip from '@/components/values-strip';

export default function HomePage() {
  return (
    <>
      <section className="film-hero" aria-labelledby="film-hero-title">
        <HomeVideo />
        <div className="film-hero__shade" aria-hidden="true" />
        <div className="shell film-hero__content">
          <h1 id="film-hero-title" className="film-hero__headline">Le idee.<span>In grande.</span></h1>
          <div className="film-hero__bottom">
            <Link href="/progetti" className="film-hero__cta">
              <span>Esplora i progetti</span><span className="film-hero__cta-icon" aria-hidden="true"><ArrowUpRight size={21} strokeWidth={1.7} /></span>
            </Link>
          </div>
        </div>
      </section>
      <ClientsMarquee />
      <ValuesStrip />
    </>
  );
}
