import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { SOCIALS } from '@/lib/content';

const icons = { facebook: Facebook, instagram: Instagram, linkedin: Linkedin };

/** Link esterni forniti da RAIA. Icone SVG outline, senza riempimenti. */
export default function SocialLinks({ className = '', label = 'Seguici sui social' }) {
  return (
    <nav className={`social-links ${className}`} aria-label={label}>
      {SOCIALS.map(({ name, href, key }) => {
        const Icon = icons[key];
        return (
          <a
            key={key}
            className={`social-links__link social-links__link--${key}`}
            href={href}
            aria-label={`RAIA su ${name} (si apre in una nuova scheda)`}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
          >
            <Icon size={19} strokeWidth={1.7} fill="none" aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}
