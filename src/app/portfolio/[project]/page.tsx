import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFrame } from "~/components/site-frame";
import { styles } from "~/components/tailwind-styles";
import { projects } from "~/data/projects";

type ProjectPageProps = {
  params: Promise<{ project: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ project: slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { project: slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found | Mirza Haris Amin" };
  }

  return {
    title: `${project.title} | Sample Project | Mirza Haris Amin`,
    description: project.overview
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { project: slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <SiteFrame>
      <main id="main">
        <section className={styles.detailSection} aria-labelledby="project-title">
          <div className={`${styles.detailContainer} !max-w-[900px]`}>
            <a className={styles.backLink} href="/portfolio"><span aria-hidden="true">←</span> All sample projects</a>
            <p className={styles.eyebrow}><span>{project.number}</span> SAMPLE CONCEPT · NOT COMPLETED WORK</p>
            <h1 className={styles.detailTitle} id="project-title">{project.title}<span className={styles.gradientText}>.</span></h1>
            <p className={`${styles.detailLead} mb-8 max-w-[700px]`}>{project.overview}</p>

            <section className={styles.projectBrief} aria-labelledby="brief-title">
              <p className={styles.eyebrow}>PROJECT BRIEF</p>
              <h2 className={styles.detailPanelTitle} id="brief-title">Ideas this concept explores</h2>
              <ul className={styles.learningList}>
                {project.goals.map((goal) => (
                  <li className={styles.learningItem} key={goal}><span className="text-urban-slate" aria-hidden="true">↗</span>{goal}</li>
                ))}
              </ul>
              <div className={`${styles.chipList} mt-6`}>
                {project.technologies.map((technology) => <span className={styles.chip} key={technology}>{technology}</span>)}
              </div>
            </section>

            <section className={styles.sourceStatus} id="source-code" aria-labelledby="source-title">
              <div className={styles.sourceCopy}>
                <p className={styles.eyebrow}>SOURCE CODE</p>
                <h2 className={`${styles.detailPanelTitle} mb-2`} id="source-title">No repository is published for this sample yet.</h2>
                <p className="text-xs leading-6 text-urban-slate">This is an example concept to be replaced with real work. There is no project source-code link to share at this time.</p>
              </div>
              <a className={`${styles.button} ${styles.secondaryButton}`} href="/contact">Ask me about this concept <span aria-hidden="true">↗</span></a>
            </section>

            <div className={styles.detailActions}>
              <a className={`${styles.button} ${styles.primaryButton}`} href="/portfolio">Back to Portfolio <span aria-hidden="true">↗</span></a>
              <a className="text-xs font-semibold text-urban-slate transition hover:text-urban-midnight" href="/contact">Get in touch <span className="text-urban-slate" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
