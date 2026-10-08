'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/content';

export default function Servizi() {
  const [current, setCurrent] = useState(0);
  const item = SERVICES[current];

  function onTabKeyDown(event, index) {
    const count = SERVICES.length;
    let next = null;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % count;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + count) % count;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = count - 1;
    if (next === null) return;
    event.preventDefault();
    setCurrent(next);
    document.getElementById(`service-tab-${SERVICES[next].id}`)?.focus();
  }

  return (
    <section className="services-explorer services-explorer--detailed" aria-label="Esplora i servizi RAIA">
      <nav className="services-explorer__tabs" role="tablist" aria-label="Categorie di servizio">
        {SERVICES.map((service, index) => (
          <button
            key={service.id}
            type="button"
            role="tab"
            id={`service-tab-${service.id}`}
            aria-controls="service-panel"
            aria-selected={current === index}
            tabIndex={current === index ? 0 : -1}
            className={`services-tab${current === index ? ' is-active' : ''}`}
            onClick={() => setCurrent(index)}
            onKeyDown={event => onTabKeyDown(event, index)}
          >
            <strong>{service.title}</strong>
            <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        ))}
      </nav>

      <div
        className="services-explorer__panel"
        role="tabpanel"
        id="service-panel"
        aria-labelledby={`service-tab-${item.id}`}
        tabIndex={0}
      >
        <article className="service-showcase service-showcase--detailed" key={item.id}>
          <div className="service-showcase__visual">
            <Image unoptimized src={item.image} alt={item.alt} fill sizes="(max-width: 959px) 100vw, 56vw" className="cover-image" />
            <div className="service-showcase__image-caption" aria-hidden="true">
              <span>RAIA / {item.title}</span>
              <span>STAMPA E COMUNICAZIONE</span>
            </div>
          </div>

          <div className="service-showcase__information">
            <div className="service-showcase__lead">
              <p className="service-showcase__overline">IL SERVIZIO</p>
              <h2>{item.detail}</h2>
              <p className="service-showcase__description">{item.description}</p>
            </div>

            <div className="service-showcase__details" aria-label={`Dettagli: ${item.title}`}>
              {item.facts.map(fact => (
                <div className="service-showcase__fact" key={fact.title}>
                  <h3>{fact.title}</h3>
                  <p>{fact.text}</p>
                </div>
              ))}
            </div>
            {item.note && <p className="service-showcase__note"><strong>Da sapere.</strong> {item.note}</p>}
          </div>
        </article>
      </div>
    </section>
  );
}
