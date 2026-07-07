"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/studio", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/journal", label: "Journal" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.top}>
          <div>
            <div className={styles.fwm}>
              Neosmart<span className="dot">.</span>
            </div>
            <p className={styles.blurb}>
              A studio that builds intelligent systems, products, and brands
              around you — designed and built by the same people, and yours to
              keep.
            </p>
          </div>

          <nav className={styles.col} aria-label="Pages">
            <span className={styles.label}>Pages</span>
            <ul>
              {PAGES.map(({ href, label }) => {
                const active =
                  href === "/"
                    ? pathname === "/"
                    : pathname === href || pathname.startsWith(href + "/");
                return (
                  <li key={href}>
                    <Link href={href} aria-current={active ? "page" : undefined}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.col}>
            <span className={styles.label}>Write to us</span>
            <ul>
              <li>
                <a href="mailto:hello@neosmartlabs.com">hello@neosmartlabs.com</a>
              </li>
            </ul>
            <p className={styles.note}>Replies come from a person, with a name.</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Neosmart Labs</span>
          <span>Made for one.</span>
        </div>
      </div>
    </footer>
  );
}
