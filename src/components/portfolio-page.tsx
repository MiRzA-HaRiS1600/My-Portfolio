import { ContactForm } from "~/components/interactive";
import { SiteFrame } from "~/components/site-frame";
import { projects } from "~/data/projects";
import { services } from "~/data/services";

export type PortfolioPageName = "home" | "services" | "portfolio" | "faq" | "contact";

function ServiceIcon({ name }: { name: (typeof services)[number]["icon"] }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
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
            <section className="hero" id="home" aria-labelledby="hero-title">
              <div className="hero-grid container">
                <div className="hero-copy">
                  <p className="eyebrow"><span className="status-dot" /> BS COMPUTER SCIENCE STUDENT</p>
                  <h1 id="hero-title">Mirza Haris<br /><span className="gradient-text">Amin.</span></h1>
                  <p className="hero-subtitle">Curious by nature. Building for what&apos;s next.</p>
                  <p className="hero-description">
                    I&apos;m a BSCS student with a growing interest in web development, thoughtful design, and turning ideas into useful digital experiences.
                  </p>
                  <div className="hero-actions">
                    <a className="button button-primary" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
                    <a className="button button-secondary" href="/#portfolio">Explore my work <span aria-hidden="true">↓</span></a>
                  </div>
                  <div className="hero-meta"><span className="meta-line" /> Learning with intention. Building one idea at a time.</div>
                </div>
                <div className="hero-visual" aria-label="Decorative monogram artwork">
                  <div className="hero-art">
                    <span className="art-index">PORTFOLIO · 2026</span>
                    <span className="art-orbit art-orbit-one" />
                    <span className="art-orbit art-orbit-two" />
                    <span className="art-monogram">HA</span>
                    <span className="art-caption">MIRZA HARIS AMIN<br /><small>COMPUTER SCIENCE · WEB</small></span>
                    <span className="art-seal" aria-hidden="true">✳</span>
                  </div>
                  <span className="hero-index"><span>01</span><span className="index-rule" /><span>INTRODUCTION</span></span>
                </div>
              </div>
              <a className="scroll-cue" href="/#services"><span className="scroll-mouse" /> DISCOVER MORE <span aria-hidden="true">↓</span></a>
            </section>
            <section className="intro-strip" aria-label="About Mirza">
              <div className="container intro-strip-inner">
                <span className="detail-label">A LITTLE ABOUT ME</span>
                <p>Currently studying computer science and developing practical skills through curiosity, coursework, and personal projects.</p>
                <a className="text-link" href="/services">What I&apos;m learning <span aria-hidden="true">↗</span></a>
              </div>
            </section>
          </>
        )}

        {showServices && (
          <section className="section services-section" id="services" aria-labelledby="services-title">
            <div className="container">
              <div className="section-heading">
                <div><p className="eyebrow">FOUNDATIONS IN PROGRESS</p><h2 id="services-title">Areas of <span className="gradient-text">interest.</span></h2></div>
                <p className="section-intro">A thoughtful start in the craft of building for the web. These are skills I&apos;m actively developing through study and practice.</p>
              </div>
              <div className="services-grid">
                {services.map((service) => (
                  <a className="service-card" key={service.number} href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}>
                    <div className={`service-icon icon-${service.icon}`}><ServiceIcon name={service.icon} /></div>
                    <span className="card-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="card-arrow" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {showPortfolio && (
          <section className="section portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
            <div className="container">
              <div className="section-heading">
                <div><p className="eyebrow">A PRACTICE OF MAKING</p><h2 id="portfolio-title">Selected <span className="gradient-text">concepts.</span></h2></div>
                <p className="section-intro">Early-stage ideas and exercises that reflect what I&apos;m learning. Each is labeled honestly; more original work will be added as it&apos;s ready.</p>
              </div>
              <div className="projects-grid">
                {projects.map((project) => (
                  <article className="project-card" key={project.number}>
                    <div className="project-preview">
                      <ProjectPreview type={project.preview} />
                      <span className="sample-label">STUDENT CONCEPT</span>
                    </div>
                    <div className="project-content">
                      <div className="project-topline"><span>{project.number} / {project.type}</span><span className="project-status">Concept</span></div>
                      <h3><a className="project-title-link" href={`/portfolio/${project.slug}`}>{project.title}</a></h3>
                      <p>{project.description}</p>
                      <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                      <div className="project-actions">
                        <a className="button button-primary project-action" href={`/portfolio/${project.slug}`}>Explore concept <span aria-hidden="true">↗</span></a>
                        <a className="button button-secondary project-action" href={`/portfolio/${project.slug}#source-code`}>Project notes <span aria-hidden="true">↘</span></a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <p className="projects-note"><span aria-hidden="true">✳</span> Concepts for learning — not completed client work.</p>
            </div>
          </section>
        )}

        {showFaqs && (
          <section className="section faq-section" id="faq" aria-labelledby="faq-title">
            <div className="container faq-layout">
              <div className="faq-heading">
                <p className="eyebrow">A FEW THINGS TO KNOW</p>
                <h2 id="faq-title">Frequently<br /><span className="gradient-text">asked.</span></h2>
                <p className="section-intro">A little more about my studies, projects, and how to reach me.</p>
                <a className="text-link" href="/faq">View all FAQs <span aria-hidden="true">↗</span></a>
              </div>
              <div className="faq-list">
                {faqs.map((faq) => (
                  <details className="faq-item" key={faq.question}>
                    <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {(isHome || page === "contact") && (
          <section className="section contact-section" id="contact" aria-labelledby="contact-title">
            <div className="container">
              <div className="contact-panel">
                <div className="contact-copy">
                  <p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p>
                  <h2 id="contact-title">Have an idea?<br /><span className="gradient-text">Let&apos;s connect.</span></h2>
                  <p>I&apos;m open to connecting with fellow students, exchanging ideas, and hearing about interesting opportunities.</p>
                  <div className="contact-details">
                    <span className="detail-label">WRITE TO ME</span>
                    <a className="email-link" href="mailto:harismughal1600@gmail.com">harismughal1600@gmail.com <span aria-hidden="true">↗</span></a>
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
