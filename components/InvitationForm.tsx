"use client";

import { useState } from "react";
import styles from "./InvitationForm.module.css";

type State =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok" }
  | { kind: "error"; message: string };

const MAILTO = "mailto:hello@neosmartlabs.com";

export default function InvitationForm() {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        throw new Error(body.error || "Something went wrong.");
      }
      setState({ kind: "ok" });
      form.reset();
    } catch (err) {
      setState({
        kind: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  if (state.kind === "ok") {
    return (
      <p className={`${styles.status} ${styles.ok}`}>
        Thank you — your note is on its way to a person, with a name. You&apos;ll
        hear back from them, not from &ldquo;the Neosmart team.&rdquo;
      </p>
    );
  }

  const sending = state.kind === "sending";

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">How you work — and what you want to own</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="What recurs, what leaks time, what “done” needs to mean for you."
        />
      </div>

      <div className={styles.actions}>
        <button className="cta" type="submit" disabled={sending}>
          <span>{sending ? "Sending…" : "Start a conversation"}</span>
        </button>
      </div>

      {state.kind === "error" && (
        <p className={`${styles.status} ${styles.err}`}>
          {state.message} You can also write directly to{" "}
          <a href={MAILTO}>hello@neosmartlabs.com</a>.
        </p>
      )}

      <p className={styles.note}>Replies come from a person, with a name.</p>
    </form>
  );
}
