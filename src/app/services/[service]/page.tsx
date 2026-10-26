import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFrame } from "~/components/site-frame";
import { styles } from "~/components/tailwind-styles";
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
        <section className={styles.detailSection} aria-labelledby="service-title">
          <div className={styles.detailContainer}>
            <a className={styles.backLink} href="/services"><span aria-hidden="true">←</span> All areas of interest</a>
            <div className={styles.detailHeading}>
              <p className={styles.eyebrow}><span>{service.number}</span> AREA OF INTEREST · DEVELOPING SKILLS</p>
              <h1 className={styles.detailTitle} id="service-title">{service.title}<span className={styles.gradientText}>.</span></h1>
              <p className={styles.detailLead}>{service.description}</p>
              <p className={styles.detailDescription}>{service.detail}</p>
            </div>

            <div className={styles.detailGrid}>
              <section className={styles.detailPanel} aria-labelledby="topics-title">
                <p className={styles.eyebrow}>WHAT I&apos;M LEARNING</p>
                <h2 className={styles.detailPanelTitle} id="topics-title">Topics I&apos;m exploring</h2>
                <ul className={styles.learningList}>
                  {service.topics.map((topic) => (
                    <li className={styles.learningItem} key={topic}><span className="text-urban-slate" aria-hidden="true">↗</span>{topic}</li>
                  ))}
                </ul>
              </section>
              <aside className={styles.practicePanel}>
                <span className={styles.practiceIcon} aria-hidden="true">✦</span>
                <p className={styles.eyebrow}>PRACTICE IDEA</p>
                <h2 className={styles.detailPanelTitle}>A way to put it into practice</h2>
                <p className={styles.practiceText}>{service.practice}</p>
                <p className={styles.practiceNote}>This is a learning goal, not a claim of completed professional work.</p>
              </aside>
            </div>

            <div className={styles.detailFooter}>
              <p className="text-[11px] text-urban-slate">Interested in discussing this area?</p>
              <a className={`${styles.button} ${styles.primaryButton}`} href="/contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>

            <nav className={styles.otherServices} aria-label="Other areas of interest">
              <p className={styles.detailLabel}>EXPLORE OTHER AREAS</p>
              <div className={styles.otherServiceList}>
                {services.filter((item) => item.slug !== service.slug).map((item) => (
                  <a className={styles.otherServiceLink} key={item.slug} href={`/services/${item.slug}`}>{item.title}<span className="text-urban-slate" aria-hidden="true">↗</span></a>
                ))}
              </div>
            </nav>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
