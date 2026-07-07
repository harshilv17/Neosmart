import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../essay.css";
import { getEssay, getSlugs } from "@/lib/journal";

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) return {};
  return {
    title: `${essay.ogTitle} — Neosmart Journal`,
    description: essay.description,
    openGraph: {
      type: "article",
      title: essay.ogTitle,
      description: essay.description,
    },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) notFound();

  return (
    <div className="essay-page">
      <main>
        <header className="essay-head">
          <div className="read-col">
            <span className="when">Journal · {essay.date}</span>
            <h1>
              {essay.title}
              <span className="dot">.</span>
            </h1>
            <p className="by">
              By <b>{essay.author}</b> — who designs and builds the work this
              essay describes.
            </p>
          </div>
          <div className="read-col" style={{ marginTop: 44 }}>
            <div className="essay-rule" aria-hidden="true" />
          </div>
        </header>

        <article className="essay">
          <div className="read-col">
            <MDXRemote source={essay.body} />
          </div>
        </article>

        <div className="essay-end">
          <div className="read-col">
            <div className="stop">.</div>
            <Link className="back" href="/journal">
              Back to the journal
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
