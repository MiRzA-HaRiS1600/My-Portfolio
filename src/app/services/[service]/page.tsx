import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFrame } from "~/components/site-frame";
import { services } from "~/data/services";

type ServicePageProps = {
  params: Promise<{ service: string }>;
};

export function generateStaticParams() {
  return services.map(({ slug }) => ({ service: slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service not found | Mirza Haris Amin" };
  }

  return {
    title: `${service.title} | Areas of Interest | Mirza Haris Amin`,
    description: service.detail
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <SiteFrame>
      <main id="main">
        <section className="section service-detail-section" aria-labelledby="service-title">
          <div className="container service-detail-container">
            <a className="back-link" href="/services"><span aria-hidden="true">←</span> All areas of interest</a>
            <div className="service-detail-heading">
              <p className="eyebrow"><span>{service.number}</span> AREA OF INTEREST · DEVELOPING SKILLS</p>
              <h1 id="service-title">{service.title}<span className="gradient-text">.</span></h1>
              <p className="service-detail-lead">{service.description}</p>
              <p className="service-detail-description">{service.detail}</p>
            </div>

            <div className="service-detail-grid">
              <section className="detail-panel" aria-labelledby="topics-title">
                <p className="eyebrow">WHAT I&apos;M LEARNING</p>
                <h2 id="topics-title">Topics I&apos;m exploring</h2>
                <ul className="learning-list">
                  {service.topics.map((topic) => (
                    <li key={topic}><span aria-hidden="true">↗</span>{topic}</li>
                  ))}
                </ul>
              </section>
              <aside className="practice-panel">
                <span className="practice-icon" aria-hidden="true">✦</span>
                <p className="eyebrow">PRACTICE IDEA</p>
                <h2>A way to put it into practice</h2>
                <p>{service.practice}</p>
                <p className="practice-note">This is a learning goal, not a claim of completed professional work.</p>
              </aside>
            </div>

            <div className="service-detail-footer">
              <p>Interested in discussing this area?</p>
              <a className="button button-primary" href="/contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>

            <nav className="other-services" aria-label="Other areas of interest">
              <p className="detail-label">EXPLORE OTHER AREAS</p>
              <div>
                {services.filter((item) => item.slug !== service.slug).map((item) => (
                  <a key={item.slug} href={`/services/${item.slug}`}>{item.title}<span aria-hidden="true">↗</span></a>
                ))}
              </div>
            </nav>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
