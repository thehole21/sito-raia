'use client';

import { useEffect, useRef } from 'react';

// Il filmato locale resta l'unico elemento visivo della home.
// Posizione: public/videos/raia-home.webm
const VIDEO_SRC = '/videos/raia-home.webm';

export default function HomeVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    // Rispetta la preferenza di sistema per la riduzione delle animazioni.
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      if (preference.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    updateMotion();
    preference.addEventListener?.('change', updateMotion);
    return () => preference.removeEventListener?.('change', updateMotion);
  }, []);

  return (
    <video
      ref={videoRef}
      className="film-hero__video"
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={VIDEO_SRC} type="video/webm" />
    </video>
  );
}
