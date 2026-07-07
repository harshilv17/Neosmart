import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import "../journal.css";
import Reveal from "@/components/Reveal";
import { getAllEssays } from "@/lib/journal";

const d = (v: string): CSSProperties => ({ ["--d" as string]: v });

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Occasional, considered writing from Neosmart — how the studio thinks, published in the open.",
  openGraph: {
    title: "Journal — Neosmart",
    description:
      "Occasional, considered writing — how the studio thinks, published in the open.",
  },
};

export default function JournalPage() {
  const essays = getAllEssays();

  return (
    <main>
      <Reveal as="header" className="ink-ground masthead">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            Journal
          </span>
          <h1 className="mast-head">
            <span className="mask">
              <span style={d("0.1s")}>How we think,</span>
            </span>
            <span className="mask">
              <span style={d("0.22s")}>in the open.</span>
            </span>
          </h1>
          <p className="mast-sub fade" style={d("0.5s")}>
            Occasional, considered writing — published when it&apos;s ready,
            never on a schedule, and never behind a form. If it&apos;s worth your
            time, it&apos;s free to read.
          </p>
        </div>
      </Reveal>

      <div className="ink-ground" aria-hidden="true">
        <div className="wrap">
          <Reveal className="rule on-ink" />
        </div>
      </div>

      <Reveal as="section" className="paper-ground entries">
        <div className="wrap">
          {essays.map((e) => (
            <Link key={e.slug} className="entry" href={`/journal/${e.slug}`}>
              <span className="when">{e.date}</span>
              <h2>{e.title}</h2>
              <p>{e.dek}</p>
              <span className="read">Read the essay</span>
            </Link>
          ))}

          <p className="entries-note fade" style={d("0.3s")}>
            This page grows slowly, on purpose. Writing joins it the same way
            work joins the studio — when it&apos;s finished.
          </p>
        </div>
      </Reveal>
    </main>
  );
}
