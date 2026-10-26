import { ContactForm } from "~/components/interactive";
import { SiteFrame } from "~/components/site-frame";
import { projects } from "~/data/projects";
import { services } from "~/data/services";

export type PortfolioPageName = "home" | "services" | "portfolio" | "contact";

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

export default function PortfolioPage({ page }: { page: PortfolioPageName }) {
  return (
    <SiteFrame>
      <main id="main">
        {page === "home" && (
        <section className="hero section" id="home" aria-labelledby="hero-title">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> BSCS STUDENT &amp; TECH ENTHUSIAST</p>
              <h1 id="hero-title">Mirza Haris<br /><span className="gradient-text">Amin.</span></h1>
              <p className="hero-subtitle">Aspiring Web Developer &amp; Computer Science Student</p>
              <p className="hero-intro">Hi, I&apos;m Mirza Haris Amin, a BSCS student passionate about technology, programming, and web development.</p>
              <p className="hero-description">I enjoy learning new technologies and creating useful digital solutions. I&apos;m building my skills one project at a time and always curious about what I can make next.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="/contact">Hire Me <span aria-hidden="true">↗</span></a>
                <a className="button button-secondary" href="/portfolio"><span className="play-icon" aria-hidden="true">↘</span> View My Work</a>
              </div>
              <div className="hero-meta"><span className="meta-line" /> Curious mind. Growing skills. Thoughtful work.</div>
            </div>
            <div className="hero-visual">
              <div className="portrait-frame">
                <div className="portrait-orbit orbit-a" />
                <div className="portrait-orbit orbit-b" />
                <div className="portrait-card" role="img" aria-label="Profile photo placeholder for Mirza Haris Amin">
                  <div className="portrait-shine" />
                  <div className="portrait-initials">HA</div>
                  <div className="portrait-caption"><span>YOUR PHOTO HERE</span><small>Replace this placeholder with your image</small></div>
                </div>
                <div className="floating-chip chip-code"><span aria-hidden="true">&lt;/&gt;</span> Building skills</div>
                <div className="floating-chip chip-spark"><span aria-hidden="true">✦</span> Always learning</div>
              </div>
              <div className="hero-index"><span>01</span><span className="index-rule" /><span>INTRODUCTION</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="/services"><span className="scroll-mouse" /> EXPLORE SERVICES <span aria-hidden="true">↗</span></a>
        </section>
        )}

        {page === "services" && (
        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">WHAT I&apos;M EXPLORING</p><h2 id="services-title">Areas of <span className="gradient-text">interest.</span></h2></div>
              <p className="section-intro">These are skills I&apos;m actively developing through study and practice—not claims of professional experience.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <a
                  className="service-card"
                  key={service.number}
                  href={`/services/${service.slug}`}
                  aria-label={`Explore ${service.title}`}
                >
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

        {page === "portfolio" && (
        <section className="section portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">LEARNING BY MAKING</p><h2 id="portfolio-title">Selected <span className="gradient-text">projects.</span></h2></div>
              <p className="section-intro">Sample project concepts to show the kind of work I&apos;m learning to build. Replace these with your real projects as they&apos;re ready.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-preview">
                    <ProjectPreview type={project.preview} />
                    <span className="sample-label">SAMPLE CONCEPT</span>
                  </div>
                  <div className="project-content">
                    <div className="project-topline"><span>{project.number} / {project.type}</span><span className="project-status">Concept</span></div>
                    <h3><a className="project-title-link" href={`/portfolio/${project.slug}`}>{project.title}</a></h3>
                    <p>{project.description}</p>
                    <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <div className="project-actions">
                      <a className="button button-primary project-action" href={`/portfolio/${project.slug}`}>View Project <span aria-hidden="true">↗</span></a>
                      <a className="button button-secondary project-action" href={`/portfolio/${project.slug}#source-code`}>Source Code <span aria-hidden="true">↘</span></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="projects-note"><span aria-hidden="true">✦</span> All projects above are examples, not completed client work. Add your real project links when available.</p>
          </div>
        </section>
        )}

        {page === "contact" && (
        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-copy">
                <p className="eyebrow">HAVE A QUESTION OR IDEA?</p>
                <h2 id="contact-title">Let&apos;s make<br /><span className="gradient-text">something useful.</span></h2>
                <p>I&apos;m open to connecting, learning from others, and discussing ideas. Send me a note and I&apos;ll get back to you.</p>
                <div className="contact-details">
                  <span className="detail-label">EMAIL ME AT</span>
                  <a className="email-link" href="mailto:harismughal1600@gmail.com">harismughal1600@gmail.com <span aria-hidden="true">↗</span></a>
                  <div className="social-links"><span className="detail-label">FIND ME ONLINE</span><span className="social-placeholder">Social links can be added here</span></div>
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
