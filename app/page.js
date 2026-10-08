'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, MoveUpRight } from 'lucide-react';
import { COMPANY, PROJECTS } from '@/lib/content';

const featured = PROJECTS.slice(0, 3);

export default function HomePage() {
  const [selected, setSelected] = useState(0);
  const project = featured[selected];
  return (
    <>
      <section className="home-hero shell" aria-labelledby="home-title">
        <div className="home-hero__left">
          <div className="home-hero__eyebrow"><span className="little-dot" /> {COMPANY.description.toUpperCase()} <span className="eyebrow-divider">/</span> GUIDONIA MONTECELIO</div>
          <div className="home-hero__heading">
            <p className="home-hero__issue">STUDIO DI STAMPA <span>—</span> EDIZIONE CONTEMPORANEA</p>
            <h1 id="home-title">La stampa<br />diventa<br /><em>presenza.</em></h1>
            <p className="home-hero__description">Dall’editoria alle vetrine, dagli allestimenti agli oggetti. Progettiamo e realizziamo idee che si fanno notare.</p>
            <div className="hero-actions">
              <Link href="/servizi" className="button-solid">Scopri cosa facciamo <ArrowUpRight size={19} strokeWidth={1.6} /></Link>
              <Link href="/progetti" className="button-underlined">Esplora i lavori <ArrowRight size={18} strokeWidth={1.6} /></Link>
            </div>
          </div>
          <div className="home-hero__bottom"><span>01 — PENSA. CREA. STAMPA.</span><span>OLTRE LA PAGINA <MoveUpRight size={14} /></span></div>
        </div>
        <div className="home-hero__right">
          <div className="home-gallery">
            <div className="home-gallery__image" key={project.id}>
              <Image unoptimized src={project.image} alt={project.alt} fill sizes="(max-width: 900px) 100vw, 45vw" priority className="cover-image" />
              <div className="home-gallery__gradient" />
              <span className="home-gallery__top-label">SELEZIONE / LAVORI REALI</span>
              <div className="home-gallery__caption"><span>0{selected + 1} / 0{featured.length}</span><div><strong>{project.title}</strong><small>{project.client} — {project.category}</small></div><Link href="/progetti" aria-label="Guarda i progetti"><ArrowUpRight size={20} /></Link></div>
            </div>
            <div className="home-gallery__controls" role="group" aria-label="Seleziona il lavoro in evidenza">
              {featured.map((item, index) => (
                <button key={item.id} onClick={() => setSelected(index)} className={index === selected ? 'active' : ''} aria-label={`Mostra progetto ${item.client}`} aria-pressed={index === selected} type="button"><span>0{index + 1}</span> {item.client}<span className="control-line" /></button>
              ))}
            </div>
          </div>
          <div className="home-gallery__footnote"><span>UNA SELEZIONE DI PROGETTI</span><span>SCOPRI RAIA <ArrowUpRight size={14} /></span></div>
        </div>
      </section>
      <div className="home-index"><div className="shell home-index__inner"><span>UN UNICO INTERLOCUTORE, MOLTE LAVORAZIONI.</span><Link href="/servizi">TIPOGRAFIA <b>·</b> GRANDE FORMATO <b>·</b> ALLESTIMENTI <b>·</b> WRAPPING <b>·</b> GADGET <ArrowUpRight size={15} /></Link></div></div>
    </>
  );
}
