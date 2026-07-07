"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroLanding.module.css";

const TICKS = 13;

export default function HeroLanding() {
  const heroRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [isIn, setIsIn] = useState(false);
  const [progVisible, setProgVisible] = useState(false);
  const [onPaper, setOnPaper] = useState(false);
  const [head, setHead] = useState(0);

  // hero entrance on mount. A short timeout (not rAF) so the reveal still
  // fires when the tab is backgrounded on load — rAF is paused for hidden
  // tabs, which would otherwise leave the hero blank until first interaction.
  useEffect(() => {
    const t = setTimeout(() => setIsIn(true), 60);
    return () => clearTimeout(t);
  }, []);

  // scroll: progress ticks, paper-view toggle
  useEffect(() => {
    const paperSections = Array.from(
      document.querySelectorAll<HTMLElement>(".paper-ground")
    );
    const paperInView = () => {
      const mid = window.innerHeight / 2;
      return paperSections.some((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= mid && r.bottom >= mid;
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? y / max : 0;
        setProgVisible(y > 60);
        setOnPaper(paperInView());
        setHead(Math.round(p * (TICKS - 1)));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // cursor parallax + scroll-driven fade on the hero inner (a few px of depth)
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !window.matchMedia("(pointer: fine)").matches) {
      // still apply the scroll fade even without pointer parallax
      const onScroll = () => {
        const inner = innerRef.current;
        if (!inner) return;
        const h = Math.min(window.scrollY / window.innerHeight, 1);
        inner.style.opacity = (1 - h * 0.85).toFixed(3);
        inner.style.transform = `translate3d(0,${(-h * 60).toFixed(2)}px,0)`;
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    let mx = 0,
      my = 0,
      tx = 0,
      ty = 0,
      rafId: number | null = null;

    const apply = () => {
      const inner = innerRef.current;
      if (!inner) return;
      const h = Math.min(window.scrollY / window.innerHeight, 1);
      inner.style.opacity = (1 - h * 0.85).toFixed(3);
      inner.style.transform = `translate3d(${mx.toFixed(2)}px,${(
        my -
        h * 60
      ).toFixed(2)}px,0)`;
    };
    const loop = () => {
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      apply();
      if (Math.abs(tx - mx) > 0.05 || Math.abs(ty - my) > 0.05) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = null;
      }
    };
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * -8;
      ty = (e.clientY / window.innerHeight - 0.5) * -6;
      if (!rafId) rafId = requestAnimationFrame(loop);
    };
    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(loop);
    };
    apply();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const progClass = [
    styles.progress,
    progVisible ? styles.visible : "",
    onPaper ? styles.onPaper : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={progClass} aria-hidden="true">
        {Array.from({ length: TICKS }).map((_, i) => (
          <i
            key={i}
            className={[
              i <= head ? styles.on : "",
              i === head ? styles.head : "",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        ))}
      </div>

      <header
        ref={heroRef}
        className={`ink-ground ${styles.hero} ${isIn ? styles.isIn : ""} ${
          isIn ? "is-in" : ""
        }`}
        id="hero"
      >
        <div className={styles.top}>
          <div className="wrap">
            <div className={`${styles.row} ${styles.fade}`} style={{ ["--d" as string]: "0s" }}>
              <span className={styles.label}>Studio</span>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className={styles.inner} ref={innerRef}>
            <h1 className={styles.wordmark} aria-label="Neosmart">
              <span className={styles.mask}>
                <span style={{ ["--d" as string]: "0.25s" }}>
                  Neosmart
                  <span className={styles.stop} aria-hidden="true">
                    .
                  </span>
                </span>
              </span>
            </h1>

            <p className={styles.tagline}>
              <span className={styles.mask}>
                <span style={{ ["--d" as string]: "0.75s" }}>
                  Made for one<span className="dot">.</span>
                </span>
              </span>
            </p>

            <p className={`${styles.cat} ${styles.fade}`} style={{ ["--d" as string]: "1s" }}>
              A studio that builds intelligent systems, products, and brands
              around you — designed and built by the same people, and yours to
              keep.
            </p>
          </div>
        </div>

        <a
          className={`${styles.cue} ${styles.fade}`}
          style={{ ["--d" as string]: "1.45s" }}
          href="#point"
          aria-label="Scroll to read more"
        >
          <span>Scroll</span>
          <span className={styles.stem} aria-hidden="true" />
        </a>

        <div className={styles.measure} aria-hidden="true">
          <div className={styles.band}>
            <span className={styles.sweep} />
          </div>
        </div>
      </header>
    </>
  );
}
