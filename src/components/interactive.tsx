"use client";

import { useEffect, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { styles } from "~/components/tailwind-styles";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <a className={styles.brand} href="/" aria-label="Mirza Haris Amin, home">
        <span>Mirza Haris Amin<span className="text-urban-blush">.</span></span>
      </a>
      <button
        className={styles.navToggle}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`${styles.navToggleBar}${menuOpen ? " translate-y-[6px] rotate-45" : ""}`} />
        <span className={`${styles.navToggleBar}${menuOpen ? " opacity-0" : ""}`} />
        <span className={`${styles.navToggleBar}${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
      </button>
      <ul className={`${styles.navList} ${menuOpen ? "flex" : "hidden"}`} id="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a
              className={`${styles.navLink}${pathname === link.href ? " text-urban-midnight underline decoration-urban-blush underline-offset-[10px]" : ""}`}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li><a className={styles.navCta} href="/contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <span aria-hidden="true">↗</span></a></li>
      </ul>
    </nav>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please complete all fields before sending.");
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    setStatus("Your email app should open with your message ready to send.");
    window.location.href = `mailto:harismughal1600@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formHeading}><h3 className={styles.formTitle}>Send a message</h3><span className={styles.formSubtitle}>I&apos;ll be glad to hear from you.</span></div>
      <div className={styles.formRow}>
        <label className={styles.formLabel}>Name<input className={`${styles.formControl} ${styles.formInput}`} type="text" name="name" autoComplete="name" placeholder="Your name" required maxLength={100} /></label>
        <label className={styles.formLabel}>Email<input className={`${styles.formControl} ${styles.formInput}`} type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
      </div>
      <label className={styles.formLabel}>Subject<input className={`${styles.formControl} ${styles.formInput}`} type="text" name="subject" placeholder="What is this about?" required maxLength={150} /></label>
      <label className={styles.formLabel}>Message<textarea className={`${styles.formControl} ${styles.formTextarea}`} name="message" rows={4} placeholder="Write your message..." required maxLength={3000} /></label>
      <button className={`${styles.button} ${styles.primaryButton}`} type="submit">Send Message <span aria-hidden="true">↗</span></button>
      <p className={styles.formNote}>This form opens your email app with a pre-filled message; it doesn&apos;t send through a website backend. If no email app opens, email me directly using the address shown.</p>
      <p className={styles.formStatus} role="status" aria-live="polite">{status}</p>
    </form>
  );
}
