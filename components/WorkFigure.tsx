"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
};

/**
 * A framed piece of real work. Until the image asset exists in
 * /public/images, it fails to load and the whole figure hides itself —
 * the site never ships an empty frame (brand rule: real work or nothing).
 */
export default function WorkFigure({ src, alt, caption, wide }: Props) {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  return (
    <figure className={wide ? "wide" : undefined}>
      <div className="frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHidden(true)}
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
