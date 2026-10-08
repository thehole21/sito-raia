import ProjectsGrid from '@/components/projects-grid';
export const metadata = { title: 'Progetti', description: 'Lavori RAIA: Gucci, NTT DATA, Rimac e altre realizzazioni documentate.' };
export default function ProgettiPage() {
  return (
    <>
      <section className="page-opening shell">
        <div className="page-opening__eyebrow"><span className="little-dot" /> LAVORI REALIZZATI</div>
        <div className="page-opening__grid"><h1>Le idee,<br /><em>realizzate.</em></h1><p>Progetti, superfici e lavorazioni raccontati attraverso fotografie di lavori RAIA.</p></div>
      </section>
      <ProjectsGrid />
    </>
  );
}
