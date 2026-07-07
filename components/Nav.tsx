"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "/studio", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/journal", label: "Journal" },
];

/** Pages that own a #conversation section the CTA can point to in-page. */
const HAS_CONVERSATION = new Set(["/", "/studio", "/work"]);

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Home: the giant wordmark is the masthead, so the bar stays hidden
  // until the hero (≈one viewport) has been scrolled past. (Desktop only —
  // on mobile the CSS forces the bar visible.)
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  // mobile overlay menu
  const [open, setOpen] = useState(false);
  // close on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  // lock scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const ctaHref = HAS_CONVERSATION.has(pathname)
    ? "#conversation"
    : "/#conversation";

  const barClass = [
    styles.bar,
    isHome ? styles.hide : "",
    isHome && visible ? styles.visible : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={`site-bar ${barClass}`} aria-label="Main">
        <div className={`wrap ${styles.row}`}>
          <Link className={styles.wm} href="/" aria-label="Neosmart, home">
            <span className={styles.wmFull}>
              Neosmart<span className="dot">.</span>
            </span>
            <span className={styles.wmMono} aria-hidden="true">
              N<span className="dot">.</span>
            </span>
          </Link>

          <div className={styles.links}>
            {LINKS.map(({ href, label }) => {
              const active = isCurrent(href);
              return (
                <Link
                  key={href}
                  className={`${styles.link} ${active ? styles.current : ""}`}
                  href={href}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
            <Link className={`${styles.link} ${styles.go}`} href={ctaHref}>
              Start a conversation
            </Link>
          </div>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <div
        id="site-menu"
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.menuMeasure} aria-hidden="true" />
        <ul>
          {LINKS.map(({ href, label }, i) => {
            const active = isCurrent(href);
            return (
              <li key={href} style={{ ["--i" as string]: String(i) } as CSSProperties}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          className={styles.menuCta}
          href={ctaHref}
          onClick={() => setOpen(false)}
        >
          Start a conversation
        </Link>
        <p className={styles.menuNote}>Replies come from a person, with a name.</p>
      </div>
    </>
  );
}
