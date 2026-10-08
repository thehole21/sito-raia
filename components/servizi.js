'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/content';

export default function Servizi() {
  const [current, setCurrent] = useState(0);
  const item = SERVICES[current];
  return (
    <section className="services-explorer" aria-label="Esplora i servizi">
      <div className="services-explorer__tabs" role="tablist" aria-label="Categorie di servizio" aria-orientation="vertical">
        {SERVICES.map((service, index) => <button key={service.id} type="button" role="tab" id={`service-tab-${service.id}`} aria-controls="service-panel" aria-selected={current === index} className={`services-tab ${index === current ? 'is-active' : ''}`} onClick={() => setCurrent(index)}><span>{service.number}</span><strong>{service.title}</strong><ArrowUpRight size={20} strokeWidth={1.4} aria-hidden="true" /></button>)}
      </div>
      <div className="services-explorer__panel" role="tabpanel" id="service-panel" aria-labelledby={`service-tab-${item.id}`} tabIndex={0}>
        <div key={item.id} className="service-showcase">
          <div className="service-showcase__visual"><Image unoptimized src={item.image} alt={item.alt} fill sizes="(max-width: 1000px) 100vw, 43vw" className="cover-image" /><span className="visual-index">RAIA / {item.number}</span></div>
          <div className="service-showcase__information"><div className="service-showcase__intro"><span>0{current + 1} / 05</span><h2>{item.detail}</h2><p>{item.description}</p></div><div className="service-showcase__tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link href={`/preventivo?servizio=${item.id}`}>Richiedi un preventivo <ArrowRight size={19} /></Link></div>
        </div>
      </div>
    </section>
  );
}