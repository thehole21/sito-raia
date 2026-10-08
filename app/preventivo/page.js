import QuoteForm from '@/components/quote-form';
export const metadata = { title: 'Richiedi un preventivo', description: 'Prepara una richiesta per un progetto di stampa o comunicazione RAIA.' };
export default async function PreventivoPage({ searchParams }) {
  const params = await searchParams;
  const defaultService = typeof params?.servizio === 'string' ? params.servizio : '';
  return <><section className="page-opening page-opening--quote shell"><div className="page-opening__eyebrow"><span className="little-dot" /> IL TUO PROGETTO</div><div className="page-opening__grid"><h1>Raccontaci<br /><em>la tua idea.</em></h1><p>Compila un brief. Per ora puoi visualizzarne il riepilogo: il form non invia ancora dati.</p></div></section><QuoteForm defaultService={defaultService}/></>;
}
