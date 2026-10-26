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
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="/">
            <span className="brand-mark">H</span>
            <span>Haris<span className="brand-dot">.</span></span>
          </a>
          <p>Learning, building, and growing — one project at a time.</p>
          <span className="copyright">© {new Date().getFullYear()} Mirza Haris Amin</span>
        </div>
      </footer>
    </>
  );
}
