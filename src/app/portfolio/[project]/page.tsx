import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFrame } from "~/components/site-frame";
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
        <section className="section project-detail-section" aria-labelledby="project-title">
          <div className="container project-detail-container">
            <a className="back-link" href="/portfolio"><span aria-hidden="true">←</span> All sample projects</a>
            <p className="eyebrow"><span>{project.number}</span> SAMPLE CONCEPT · NOT COMPLETED WORK</p>
            <h1 id="project-title">{project.title}<span className="gradient-text">.</span></h1>
            <p className="project-detail-lead">{project.overview}</p>

            <section className="project-brief" aria-labelledby="brief-title">
              <p className="eyebrow">PROJECT BRIEF</p>
              <h2 id="brief-title">Ideas this concept explores</h2>
              <ul className="learning-list">
                {project.goals.map((goal) => (
                  <li key={goal}><span aria-hidden="true">↗</span>{goal}</li>
                ))}
              </ul>
              <div className="tech-list project-detail-tech">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </section>

            <section className="source-status" id="source-code" aria-labelledby="source-title">
              <div>
                <p className="eyebrow">SOURCE CODE</p>
                <h2 id="source-title">No repository is published for this sample yet.</h2>
                <p>This is an example concept to be replaced with real work. There is no project source-code link to share at this time.</p>
              </div>
              <a className="button button-secondary" href="/contact">Ask me about this concept <span aria-hidden="true">↗</span></a>
            </section>

            <div className="project-detail-footer">
              <a className="button button-primary" href="/portfolio">Back to Portfolio <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="/contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
