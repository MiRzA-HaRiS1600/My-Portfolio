import type { ReactNode } from "react";
import { SiteNav } from "~/components/interactive";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <SiteNav />
      </header>
      {children}
      <footer className="site-footer" id="footer">
        <div className="container footer-inner">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="/" aria-label="Mirza Haris Amin, back to home">
              <span className="brand-mark">MHA</span>
              <span>Mirza Haris Amin<span className="brand-dot">.</span></span>
            </a>
            <p>A BS Computer Science student learning to build thoughtful web experiences.</p>
          </div>
          <div className="footer-navigation-block">
            <span className="detail-label">EXPLORE</span>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/faq">FAQs</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
          <div className="footer-contact">
            <span className="detail-label">GET IN TOUCH</span>
            <a href="mailto:harismughal1600@gmail.com">Email Haris <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span className="copyright">© {new Date().getFullYear()} Mirza Haris Amin. All rights reserved.</span>
          <a href="#main">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  );
}
