"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  // until the hero (≈one viewport) has been scrolled past.
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
    <nav className={`site-bar ${barClass}`} aria-label="Main">
      <div className={`wrap ${styles.row}`}>
        <Link className={styles.wm} href="/">
          Neosmart<span className="dot">.</span>
        </Link>
        <div className={styles.links}>
          {LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
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
      </div>
    </nav>
  );
}
