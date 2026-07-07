"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ComponentPropsWithoutRef } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  /** merged into className alongside the reveal hook class */
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

/**
 * Scroll reveal wrapper. Ports the original pages' IntersectionObserver:
 * once the element crosses 16% into view, `is-in` is added and it's
 * unobserved. All the actual motion lives in CSS (.mask, .fade, ticks…).
 */
export default function Reveal<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
