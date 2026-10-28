import type { ReactNode } from "react";
import Image from "next/image";
import { SiteNav } from "~/components/interactive";
import { styles } from "~/components/tailwind-styles";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-urban-ivory font-body text-urban-midnight antialiased">
      <a className="fixed -top-16 left-4 z-[100] rounded bg-urban-midnight px-4 py-2 text-urban-ivory focus:top-3" href="#main">Skip to content</a>
      <header className={styles.header}>
        <SiteNav />
      </header>
      {children}
      <footer className={styles.footer} id="footer">
        <div className={styles.footerGrid}>
          <div className="col-span-2 md:col-span-1">
            <a className={`${styles.brand} ${styles.footerBrand}`} href="/" aria-label="Mirza Haris Amin, back to home">
              <span className={`${styles.brandMark} !size-8`}>
                <Image
                  src="/images/mirza-haris-amin-profile.jpeg"
                  alt=""
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </span>
              <span>Mirza Haris Amin<span className="text-urban-blush">.</span></span>
            </a>
            <p className={styles.footerCopy}>A BS Computer Science student learning to build thoughtful web experiences.</p>
          </div>
          <div>
            <span className={styles.detailLabel}>EXPLORE</span>
            <nav className={styles.footerLinks} aria-label="Footer navigation">
              <a className={styles.footerLink} href="/">Home</a>
              <a className={styles.footerLink} href="/services">Services</a>
              <a className={styles.footerLink} href="/portfolio">Portfolio</a>
              <a className={styles.footerLink} href="/faq">FAQs</a>
              <a className={styles.footerLink} href="/contact">Contact</a>
            </nav>
          </div>
          <div>
            <span className={styles.detailLabel}>GET IN TOUCH</span>
            <a className={styles.footerEmail} href="mailto:harismughal1600@gmail.com">Email Haris <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.copyright}>© {new Date().getFullYear()} Mirza Haris Amin. All rights reserved.</span>
          <a className={styles.topLink} href="#main">Back to top <span className="text-urban-slate" aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </div>
  );
}
