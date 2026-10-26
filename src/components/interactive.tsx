"use client";

import { useEffect, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";

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
    <nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="/" aria-label="Mirza Haris Amin, home">
        <span className="brand-mark">MHA</span><span>Mirza Haris Amin<span className="brand-dot">.</span></span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>
      <ul className={`nav-links${menuOpen ? " is-open" : ""}`} id="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a
              className={`nav-link${pathname === link.href ? " active" : ""}`}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li><a className="nav-contact" href="/contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <span aria-hidden="true">↗</span></a></li>
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
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><h3>Send a message</h3><span>I&apos;ll be glad to hear from you.</span></div>
      <div className="form-row">
        <label>Name<input type="text" name="name" autoComplete="name" placeholder="Your name" required maxLength={100} /></label>
        <label>Email<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
      </div>
      <label>Subject<input type="text" name="subject" placeholder="What is this about?" required maxLength={150} /></label>
      <label>Message<textarea name="message" rows={4} placeholder="Write your message..." required maxLength={3000} /></label>
      <button className="button button-primary send-button" type="submit">Send Message <span aria-hidden="true">↗</span></button>
      <p className="form-note">This form opens your email app with a pre-filled message; it doesn&apos;t send through a website backend. If no email app opens, email me directly using the address shown.</p>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
