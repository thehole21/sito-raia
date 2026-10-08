'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X, ArrowRight } from 'lucide-react';
import { NAV, COMPANY } from '@/lib/content';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    const closeEsc = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeEsc);
    return () => {
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', closeEsc);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${open ? 'site-header--open' : ''}`}>
        <div className="shell site-header__inner">
          <Link href="/" className="brand" aria-label="RAIA, homepage" onClick={() => setOpen(false)}>
            <span className="brand__symbol" aria-hidden="true">R<span>/</span></span>
            <span className="brand__wordmark">RAIA<small>STAMPA & COMUNICAZIONE</small></span>
          </Link>
          <nav className="header-links" aria-label="Navigazione principale">
            {NAV.map(({ label, href }) => (
              <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} className={pathname === href ? 'is-active' : ''}>{label}</Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="header-quote" href="/preventivo">Richiedi preventivo <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" /></Link>
            <button className="header-menu" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Chiudi menu' : 'Apri menu'} aria-expanded={open} aria-controls="navigation-panel">
              <span className="header-menu__caption">{open ? 'Chiudi' : 'Menu'}</span>
              <span className="header-menu__circle">{open ? <X size={20} /> : <Menu size={20} />}</span>
            </button>
          </div>
        </div>
      </header>
      <div className={`navigation-backdrop ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <nav id="navigation-panel" className={`navigation-panel ${open ? 'is-open' : ''}`} aria-label="Menu completo" aria-hidden={!open} inert={!open}>
        <div className="shell navigation-panel__inner">
          <div className="navigation-panel__top"><span className="eyebrow eyebrow--light">INDICE / RAIA</span><span className="navigation-panel__line" /></div>
          <div className="navigation-panel__grid">
            <div className="navigation-panel__links">
              {NAV.map(({ href, label }, index) => (
                <Link key={href} href={href} className={pathname === href ? 'is-current' : ''} onClick={() => setOpen(false)}>
                  <span className="nav-index">0{index + 1}</span>
                  <span>{label}</span>
                  <ArrowUpRight size={24} strokeWidth={1.25} aria-hidden="true" />
                </Link>
              ))}
              <Link href="/preventivo" onClick={() => setOpen(false)} className={pathname === '/preventivo' ? 'is-current' : ''}><span className="nav-index">06</span><span>Preventivo</span><ArrowUpRight size={24} strokeWidth={1.25} aria-hidden="true" /></Link>
            </div>
            <div className="navigation-panel__aside">
              <p className="nav-aside-eyebrow">IL PROSSIMO PROGETTO</p>
              <h2>Il tuo, <em>naturalmente.</em></h2>
              <p>Stampiamo, realizziamo e diamo forma a idee e spazi.</p>
              <Link href="/preventivo" onClick={() => setOpen(false)}>Parliamone <ArrowRight size={18} aria-hidden="true" /></Link>
              <div className="navigation-panel__contacts">
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                <a href={`tel:${COMPANY.phoneLink}`}>{COMPANY.phone}</a>
              </div>
            </div>
          </div>
          <p className="navigation-panel__bottom">RAIA — PENSA / CREA / STAMPA</p>
        </div>
      </nav>
    </>
  );
}
