// Contenuti editoriali basati esclusivamente sul sito ufficiale raiaweb.it.
// Le fotografie sono URL originali pubblicati sul sito RAIA: nessuna immagine stock.
export const COMPANY = {
  name: 'RAIA srl',
  tagline: 'Pensa · Crea · Stampa',
  description: 'Servizi di stampa e comunicazione',
  email: 'info@raiaweb.it',
  phone: '06 66182286',
  phoneLink: '+390666182286',
  address: 'Via Bruno Pontecorvo 46, 00012 Guidonia Montecelio (RM)',
  hours: 'Lunedì — Venerdì, 09:00 — 18:00',
  vat: '09368991007',
  sdi: 'M5UXCR1',
  map: 'https://www.google.com/maps/search/?api=1&query=Via+Bruno+Pontecorvo+46%2C+Guidonia+Montecelio'
};

export const SOCIALS = [
  { name: 'Facebook', key: 'facebook', href: 'https://www.facebook.com/profile.php?id=100063576791465' },
  { name: 'Instagram', key: 'instagram', href: 'https://www.instagram.com/raia_srl/' },
  { name: 'LinkedIn', key: 'linkedin', href: 'https://www.linkedin.com/company/raia-srl/about/' }
];

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Progetti', href: '/progetti' },
  { label: 'Chi siamo', href: '/chi-siamo' },
  { label: 'Contatti', href: '/contatti' }
];

export const IMAGES = {
  gucci: 'https://www.raiaweb.it/wp-content/uploads/2026/04/8f21d933-4943-4638-a3e7-1cc66e61ca50.jpg',
  ntt: 'https://www.raiaweb.it/wp-content/uploads/2023/12/ntt-data-insegna-768x576.jpg',
  caps: 'https://www.raiaweb.it/wp-content/uploads/2023/12/cappellini-rimac-768x576.jpg',
  kit: 'https://www.raiaweb.it/wp-content/uploads/2023/12/kit-uilpa-768x576.jpg',
  wrap: 'https://www.raiaweb.it/wp-content/uploads/2023/12/wrapping-maserati-768x576.jpg',
  interior: 'https://www.raiaweb.it/wp-content/uploads/2026/04/Jungle-_B-768x576.jpg',
  installation: 'https://www.raiaweb.it/wp-content/uploads/2026/04/IMG_20210514_123806-768x576.jpg'
};

export const SERVICES = [
  {
    id: 'tipografia', number: '01', title: 'Servizi tipografici', detail: 'Il valore della carta.',
    short: 'Libri, cataloghi, riviste e stampa commerciale.',
    description: 'Produzioni editoriali: stampa, rifilo, preparazione delle copertine, legatura, fresatura e nobilitazioni. RAIA realizza anche libri on-demand, fustelle e scatole; non accetta singole tirature.',
    image: IMAGES.kit, alt: 'Kit stampato UILPA fotografato sul sito RAIA',
    tags: ['Libri', 'Cataloghi', 'Pieghevoli', 'Packaging']
  },
  {
    id: 'grande-formato', number: '02', title: 'Grande formato', detail: 'Impossibile non notarlo.',
    short: 'Banner, pannelli e comunicazione di grande impatto.',
    description: 'Stampa su materiali rigidi e flessibili: PVC adesivo, banner, manifesti, bandiere, striscioni, pannelli, canvas e carte da parati.',
    image: IMAGES.gucci, alt: 'Vetrina con pellicole floreali Gucci allestita da RAIA',
    tags: ['Banner', 'Pannelli', 'Tessuti', 'Carta da parati']
  },
  {
    id: 'allestimenti', number: '03', title: 'Insegne e allestimenti', detail: 'Dare spazio a un’identità.',
    short: 'Insegne, totem, stand, loghi tridimensionali.',
    description: 'Allestimenti fieristici, insegne semplici e luminose, totem, pannelli, targhe e loghi 3D. Lavorazioni con taglio laser, sagomatura, verniciatura e fissaggio.',
    image: IMAGES.ntt, alt: 'Insegna NTT DATA su parete in muschio stabilizzato',
    tags: ['Insegne', 'Stand', 'Taglio laser', 'Loghi 3D']
  },
  {
    id: 'wrapping', number: '04', title: 'Wrapping e interior', detail: 'Le superfici parlano.',
    short: 'Veicoli, vetrine e ambienti da reinterpretare.',
    description: 'Progettazione, fornitura e applicazione di pellicole per mezzi commerciali e vetrofanie pubblicitarie, decorative o per la privacy. Soluzioni per riqualificare gli ambienti.',
    image: IMAGES.interior, alt: 'Vetrofania decorativa con foglie applicata su pareti in vetro',
    tags: ['Car wrapping', 'Vetrofanie', 'Privacy', 'Interior design']
  },
  {
    id: 'gadget', number: '05', title: 'Gadget personalizzati', detail: 'Il brand, ogni giorno.',
    short: 'Abbigliamento e oggetti promozionali su misura.',
    description: 'Personalizzazione di t-shirt, cappellini, abbigliamento da lavoro, uniformi, penne, ombrelli e oggettistica promozionale.',
    image: IMAGES.caps, alt: 'Cappellini Rimac neri e rossi personalizzati',
    tags: ['Abbigliamento', 'Cappellini', 'Penne', 'Gadget']
  }
];

export const PROJECTS = [
  { id: 'gucci', title: 'Vetrine floreali', client: 'Gucci', category: 'Vetrofanie', image: IMAGES.gucci, alt: 'Vetrina Gucci con pellicole floreali in fase di allestimento' },
  { id: 'ntt', title: 'Insegna su parete verde', client: 'NTT DATA', category: 'Allestimenti', image: IMAGES.ntt, alt: 'Insegna NTT DATA su parete in muschio stabilizzato' },
  { id: 'caps', title: 'Cappellini personalizzati', client: 'Rimac', category: 'Gadget', image: IMAGES.caps, alt: 'Cappellini rossi e neri Rimac personalizzati' },
  { id: 'kit', title: 'Kit stampato', client: 'UILPA', category: 'Stampa', image: IMAGES.kit, alt: 'Confezione di kit stampato UILPA' },
  { id: 'interior', title: 'Vetrofania decorativa', client: 'Applicazione per interni', category: 'Vetrofanie', image: IMAGES.interior, alt: 'Vetrofania decorativa con foglie su parete di vetro' },
  { id: 'wrapping', title: 'Pellicole per auto', client: 'Car wrapping', category: 'Wrapping', image: IMAGES.wrap, alt: 'Lavorazione di car wrapping su autovettura in officina' }
];
