'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/lib/content';

const CATEGORIES = ['Tutti', 'Vetrofanie', 'Allestimenti', 'Gadget', 'Stampa', 'Wrapping'];
export default function ProjectsGrid() {
  const [filter, setFilter] = useState('Tutti');
  const visible = useMemo(() => filter === 'Tutti' ? PROJECTS : PROJECTS.filter(item => item.category === filter), [filter]);
  return <section className="shell portfolio-section"><div className="portfolio-controls"><span>FILTRO / {String(visible.length).padStart(2,'0')} PROGETTI</span><div className="portfolio-filters" role="group" aria-label="Filtra i progetti">{CATEGORIES.map(category => <button key={category} type="button" aria-pressed={filter === category} className={filter === category ? 'is-active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div></div><div className="portfolio-grid" aria-live="polite">{visible.map((item,index) => <article key={item.id} className={`portfolio-card ${index === 0 && filter === 'Tutti' ? 'portfolio-card--large' : ''}`}><div className="portfolio-card__media"><Image unoptimized src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 45vw" className="cover-image"/><span>RAIA / {String(index+1).padStart(2,'0')}</span></div><div className="portfolio-card__details"><div><h2>{item.title}</h2><p>{item.client}</p></div><span>{item.category}</span></div></article>)}</div></section>;
}
