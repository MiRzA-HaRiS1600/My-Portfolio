import Image from "next/image";
import { ContactForm } from "~/components/interactive";
import { SiteFrame } from "~/components/site-frame";
import { styles } from "~/components/tailwind-styles";
import { projects } from "~/data/projects";
import { services } from "~/data/services";

export type PortfolioPageName = "home" | "services" | "portfolio" | "faq" | "contact";

function ServiceIcon({ name }: { name: (typeof services)[number]["icon"] }) {
  return (
    <svg className={styles.serviceIconSvg} aria-hidden="true" viewBox="0 0 24 24">
      {name === "web" && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 6.5h.01M6 13l2 2-2 2m5 0h4" />
        </>
      )}
      {name === "responsive" && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 20v-4h8v4M8 8h8" />
        </>
      )}
      {name === "frontend" && <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 12" />}
      {name === "maintenance" && (
        <path d="M20 7v5h-5M4 17v-5h5M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2" />
      )}
    </svg>
  );
}

function ProjectPreview({ type }: { type: (typeof projects)[number]["preview"] }) {
  if (type === "portfolio") {
    return (
      <div className="preview-art preview-portfolio" aria-hidden="true">
        <div className="mock-browser">
          <div className="mock-top"><i /><i /><i /><span>my-portfolio.site</span></div>
          <div className="mock-page">
            <div className="mock-nav"><b>H.</b><span /><span /><span /></div>
            <div className="mock-hero">
              <div><i /><b /><span /><span /><em /></div>
              <div className="mock-avatar">HA</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "landing") {
    return (
      <div className="preview-art preview-landing" aria-hidden="true">
        <div className="landing-mock">
          <div className="landing-nav"><b>nōva</b><span>ABOUT</span><span>FEATURES</span><span>GET STARTED</span></div>
          <div className="landing-body"><span className="landing-kicker">A BETTER WAY TO BEGIN</span><b>Make room<br />for what matters.</b><i /><span className="landing-button" /></div>
          <div className="landing-art"><div /><i /><span /></div>
        </div>
      </div>
    );
  }
  return (
    <div className="preview-art preview-dashboard" aria-hidden="true">
      <div className="dashboard-mock">
        <aside><b>▰</b><span /><span /><span /><span /></aside>
        <div className="dash-main"><div className="dash-head"><b>Students</b><i /></div><div className="dash-stats"><i /><i /><i /></div><div className="dash-table"><b /><span /><span /><span /><span /><span /><span /><span /></div></div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "Who is Mirza Haris Amin?",
    answer:
      "I am a Bachelor of Science in Computer Science student, exploring web development, programming, and the ideas behind useful digital products."
  },
  {
    question: "Are the projects shown here completed client projects?",
    answer:
      "No. The projects currently shown are sample concepts for learning and portfolio presentation. They are labeled clearly and are not represented as client work."
  },
  {
    question: "What kind of work are you interested in?",
    answer:
      "I am interested in front-end development, responsive website design, and small web projects that help me practice and grow my skills."
  },
  {
    question: "How can I get in touch?",
    answer:
      "Use the contact form to prepare an email, or write directly to harismughal1600@gmail.com. The form opens your email app; it does not send data to a website backend."
  }
];

export default function PortfolioPage({ page }: { page: PortfolioPageName }) {
  const isHome = page === "home";
  const showServices = isHome || page === "services";
  const showPortfolio = isHome || page === "portfolio";
  const showFaqs = isHome || page === "faq";

  return (
    <SiteFrame>
      <main id="main">
        {isHome && (
          <>
            <section className={styles.hero} id="home" aria-labelledby="hero-title">
              <div className={styles.heroGrid}>
                <div className={styles.heroCopy}>
                  <p className={styles.heroStatus}><span className={styles.statusDot} /> BS COMPUTER SCIENCE STUDENT</p>
                  <h1 className={styles.heroTitle} id="hero-title">Mirza Haris<br /><span className={styles.gradientText}>Amin.</span></h1>
                  <p className={styles.heroSubtitle}>Curious by nature. Building for what&apos;s next.</p>
                  <p className={styles.heroDescription}>
                    I&apos;m a BSCS student with a growing interest in web development, thoughtful design, and turning ideas into useful digital experiences.
                  </p>
                  <div className={styles.heroActions}>
                    <a className={`${styles.button} ${styles.primaryButton}`} href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
                    <a className={`${styles.button} ${styles.secondaryButton}`} href="/#portfolio">Explore my work <span aria-hidden="true">↓</span></a>
                  </div>
                  <div className={styles.heroMeta}><span className="h-px w-8 bg-urban-slate/50" /> Learning with intention. Building one idea at a time.</div>
                </div>
                <div className={styles.heroVisual} aria-label="Mirza Haris Amin logo">
                  <div className={styles.heroArt}>
                    <span className={styles.artIndex}>PORTFOLIO · 2026</span>
                    <Image
                      className={styles.artPortrait}
                      src="/images/mirza-haris-amin-profile.jpeg"
                      alt="Portrait of Mirza Haris Amin"
                      width={768}
                      height={1024}
                    />
                    <span className={styles.artCaption}>MIRZA HARIS AMIN<br /><small className={styles.artCaptionSmall}>COMPUTER SCIENCE · WEB</small></span>
                    <span className={`${styles.artSeal} -translate-y-1/2`} aria-hidden="true">✳</span>
                  </div>
                  <span className={styles.heroIndex}><span className="font-display text-xs text-urban-midnight">01</span><span className="h-px w-7 bg-urban-slate/50" /><span>INTRODUCTION</span></span>
                </div>
              </div>
              <a className={styles.scrollCue} href="/#services"><span className="h-[17px] w-3 rounded-full border border-urban-blush" /> DISCOVER MORE <span aria-hidden="true">↓</span></a>
            </section>
            <section className={styles.intro} aria-label="About Mirza">
              <div className={styles.introGrid}>
                <span className={styles.introTitle}>A LITTLE ABOUT ME</span>
                <p className={styles.introText}>Currently studying computer science and developing practical skills through curiosity, coursework, and personal projects.</p>
                <a className="text-xs font-semibold tracking-wide text-urban-slate transition hover:text-urban-midnight" href="/services">What I&apos;m learning <span className="text-urban-slate" aria-hidden="true">↗</span></a>
              </div>
            </section>
          </>
        )}

        {showServices && (
          <section className={`${styles.section} ${styles.servicesSection}`} id="services" aria-labelledby="services-title">
            <div className={styles.container}>
              <div className={styles.sectionHeading}>
                <div><p className={styles.eyebrow}>FOUNDATIONS IN PROGRESS</p><h2 className={styles.sectionTitle} id="services-title">Areas of <span className={styles.gradientText}>interest.</span></h2></div>
                <p className={styles.sectionIntro}>A thoughtful start in the craft of building for the web. These are skills I&apos;m actively developing through study and practice.</p>
              </div>
              <div className={styles.serviceGrid}>
                {services.map((service) => (
                  <a className={styles.serviceCard} key={service.number} href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}>
                    <div className={styles.serviceIcon}><ServiceIcon name={service.icon} /></div>
                    <span className={styles.cardNumber}>{service.number}</span>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDescription}>{service.description}</p>
                    <span className={styles.cardArrow} aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {showPortfolio && (
          <section className={`${styles.section} ${styles.portfolioSection}`} id="portfolio" aria-labelledby="portfolio-title">
            <div className={styles.container}>
              <div className={styles.sectionHeading}>
                <div><p className={styles.eyebrow}>A PRACTICE OF MAKING</p><h2 className={styles.sectionTitle} id="portfolio-title">Selected <span className={styles.gradientText}>concepts.</span></h2></div>
                <p className={styles.sectionIntro}>Early-stage ideas and exercises that reflect what I&apos;m learning. Each is labeled honestly; more original work will be added as it&apos;s ready.</p>
              </div>
              <div className={styles.projectGrid}>
                {projects.map((project) => (
                  <article className={styles.projectCard} key={project.number}>
                    <div className={styles.projectPreview}>
                      <ProjectPreview type={project.preview} />
                      <span className={styles.sampleLabel}>STUDENT CONCEPT</span>
                    </div>
                    <div className={styles.projectContent}>
                      <div className={styles.projectTopline}><span>{project.number} / {project.type}</span><span className={styles.projectStatus}>Concept</span></div>
                      <h3 className="mb-2"><a className={styles.projectTitle} href={`/portfolio/${project.slug}`}>{project.title}</a></h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                      <div className={styles.chipList}>{project.technologies.map((tech) => <span className={styles.chip} key={tech}>{tech}</span>)}</div>
                      <div className={styles.projectActions}>
                        <a className={`${styles.button} ${styles.primaryButton} ${styles.projectAction}`} href={`/portfolio/${project.slug}`}>Explore concept <span aria-hidden="true">↗</span></a>
                        <a className={`${styles.button} ${styles.secondaryButton} ${styles.projectAction}`} href={`/portfolio/${project.slug}#source-code`}>Project notes <span aria-hidden="true">↘</span></a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <p className={styles.note}><span className="text-urban-slate" aria-hidden="true">✳</span> Concepts for learning — not completed client work.</p>
            </div>
          </section>
        )}

        {showFaqs && (
          <section className={`${styles.section} ${styles.faqSection}`} id="faq" aria-labelledby="faq-title">
            <div className={`${styles.container} ${styles.faqLayout}`}>
              <div>
                <p className={styles.eyebrow}>A FEW THINGS TO KNOW</p>
                <h2 className={`${styles.faqHeading} mb-5`} id="faq-title">Frequently<br /><span className={styles.gradientText}>asked.</span></h2>
                <p className={`${styles.sectionIntro} mb-6`}>A little more about my studies, projects, and how to reach me.</p>
                <a className="text-xs font-semibold tracking-wide text-urban-slate transition hover:text-urban-midnight" href="/faq">View all FAQs <span className="text-urban-slate" aria-hidden="true">↗</span></a>
              </div>
              <div className={styles.faqList}>
                {faqs.map((faq) => (
                  <details className={styles.faqItem} key={faq.question}>
                    <summary className={styles.faqQuestion}>{faq.question}<span className="text-xl text-urban-blush transition group-open:rotate-45" aria-hidden="true">+</span></summary>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {(isHome || page === "contact") && (
          <section className={`${styles.section} ${styles.contactSection}`} id="contact" aria-labelledby="contact-title">
            <div className={styles.container}>
              <div className={styles.contactPanel}>
                <div>
                  <p className={styles.eyebrow}>GOOD THINGS START WITH A CONVERSATION</p>
                  <h2 className={styles.contactTitle} id="contact-title">Have an idea?<br /><span className={styles.gradientText}>Let&apos;s connect.</span></h2>
                  <p className={styles.contactCopy}>I&apos;m open to connecting with fellow students, exchanging ideas, and hearing about interesting opportunities.</p>
                  <div className={styles.contactDetails}>
                    <span className={styles.detailLabel}>WRITE TO ME</span>
                    <a className={styles.emailLink} href="mailto:harismughal1600@gmail.com">harismughal1600@gmail.com <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </section>
        )}
      </main>
    </SiteFrame>
  );
}
