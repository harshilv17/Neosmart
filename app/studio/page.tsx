import type { CSSProperties } from "react";
import type { Metadata } from "next";
import "../studio.css";
import Reveal from "@/components/Reveal";
import InvitationForm from "@/components/InvitationForm";

const d = (v: string): CSSProperties => ({ ["--d" as string]: v });

export const metadata: Metadata = {
  title: "Studio",
  description:
    "The people you meet are the people who build it. How Neosmart works, from first call to handover — the same hands, start to finish.",
  openGraph: {
    title: "Studio — Neosmart",
    description:
      "The people you meet are the people who build it. How Neosmart works, from first call to handover.",
  },
};

export default function StudioPage() {
  return (
    <main>
      {/* MASTHEAD */}
      <Reveal as="header" className="ink-ground masthead">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            Studio
          </span>
          <h1 className="mast-head">
            <span className="mask">
              <span style={d("0.1s")}>The people you meet</span>
            </span>
            <span className="mask">
              <span style={d("0.22s")}>are the people</span>
            </span>
            <span className="mask">
              <span style={d("0.34s")}>who build it.</span>
            </span>
          </h1>
          <p className="mast-sub fade" style={d("0.55s")}>
            No account managers, no handoff to a production line, no junior swap
            after the sale. This page is how that works in practice — from the
            first call to the day you&apos;re running it without us.
          </p>
        </div>
      </Reveal>

      <div className="ink-ground" aria-hidden="true">
        <div className="wrap">
          <Reveal className="rule on-ink" />
        </div>
      </div>

      {/* WHY "STUDIO" */}
      <Reveal as="section" className="paper-ground">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            Why “studio”
          </span>
          <p className="why-quote">
            <span className="mask">
              <span style={d("0.1s")}>An agency sells you a process.</span>
            </span>
            <span className="mask">
              <span style={d("0.25s")}>A studio puts its own hands</span>
            </span>
            <span className="mask">
              <span style={d("0.4s")}>
                on <b>your</b> work.
              </span>
            </span>
          </p>
          <p className="body-copy fade" style={d("0.6s")}>
            The word is deliberate. In a studio, the person you talk to is the
            person at the bench — designing, building, and answering for the
            result. Your questions go to the maker, and the maker&apos;s
            decisions are made with your business in the room, not summarised
            into it later.
          </p>
          <p className="body-copy muted fade" style={d("0.7s")}>
            We keep the workload small enough that your work gets the studio&apos;s
            full attention. You&apos;ll feel that in how fast questions are
            answered and how well the details are known — not in anything we
            advertise.
          </p>
        </div>
      </Reveal>

      {/* THE SHAPE OF AN ENGAGEMENT */}
      <Reveal as="section" className="paper-ground">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            How an engagement runs
          </span>
          <h2 className="section-head">
            <span className="mask">
              <span style={d("0.1s")}>First call</span>
            </span>
            <span className="mask">
              <span style={d("0.22s")}>to handover.</span>
            </span>
          </h2>
          <p className="body-copy fade" style={d("0.4s")}>
            Four stages, the same hands throughout. The order matters — nothing
            is built before it&apos;s understood, and nothing is finished until
            it runs in yours.
          </p>

          <div className="arc">
            <div className="stage" style={d("0.1s")}>
              <div className="pos" aria-hidden="true">
                <i className="hit" />
                <i />
                <i />
                <i />
              </div>
              <div>
                <h3>
                  <small>First</small>A diagnosis, not a pitch
                </h3>
                <p>
                  The first call is about your business: what recurs, what leaks
                  time, what &ldquo;done&rdquo; needs to mean for you. If
                  we&apos;re not the right fit, we say so on the call — and point
                  you somewhere better where we can.
                </p>
              </div>
            </div>
            <div className="stage" style={d("0.25s")}>
              <div className="pos" aria-hidden="true">
                <i />
                <i className="hit" />
                <i />
                <i />
              </div>
              <div>
                <h3>
                  <small>Then</small>Designed around how you work
                </h3>
                <p>
                  Scope is drawn from your problem, not a service list. You see
                  the thinking early and often — the shape of the system, the
                  product, or the brand before anything expensive is committed.
                </p>
              </div>
            </div>
            <div className="stage" style={d("0.4s")}>
              <div className="pos" aria-hidden="true">
                <i />
                <i />
                <i className="hit" />
                <i />
              </div>
              <div>
                <h3>
                  <small>Then</small>Built by the same hands
                </h3>
                <p>
                  The person who designed it builds it. You talk to them
                  directly, watch it take shape, and change course while
                  changing course is still cheap. No relay through an account
                  layer.
                </p>
              </div>
            </div>
            <div className="stage" style={d("0.55s")}>
              <div className="pos" aria-hidden="true">
                <i />
                <i />
                <i />
                <i className="hit" />
              </div>
              <div>
                <h3>
                  <small>Finally</small>Handed over, working
                </h3>
                <p>
                  You own it and your people run it — the system in your stack,
                  the product on your infrastructure, the brand in your hands.
                  &ldquo;Done&rdquo; means it works in your hands, not that a
                  file was delivered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* THE HANDS */}
      <Reveal as="section" className="ink-ground">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            The hands
          </span>
          <h2 className="section-head">
            <span className="mask">
              <span style={d("0.1s")}>Who you&apos;ll</span>
            </span>
            <span className="mask">
              <span style={d("0.22s")}>be working with.</span>
            </span>
          </h2>
          <p className="hands-intro fade" style={d("0.4s")}>
            Not a team page — a straight answer. The name below is the person who
            designs your work, builds it, and replies to your email.
          </p>

          <div className="maker fade" style={d("0.55s")}>
            <div className="nm">Aarav Mehta</div>
            <div className="rl">Designs &amp; builds · your point of contact</div>
            <p>
              Aarav works across all three crafts — the systems, the product,
              and the brand — which is what lets one engagement draw on all of
              them without a handoff.{" "}
              <b>When you write to Neosmart, he&apos;s who answers.</b>
            </p>
          </div>
        </div>
      </Reveal>

      {/* HOW THE STUDIO BEHAVES */}
      <Reveal as="section" className="paper-ground deep">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            Things you can check
          </span>
          <h2 className="section-head">
            <span className="mask">
              <span style={d("0.1s")}>How we behave,</span>
            </span>
            <span className="mask">
              <span style={d("0.22s")}>not how we sell.</span>
            </span>
          </h2>
          <p className="body-copy fade" style={d("0.38s")}>
            Every line below is testable from your side of the screen — on the
            first email, the first call, the first week.
          </p>

          <div className="checks">
            <div className="check" style={d("0.1s")}>
              <h3>Replies come from a person, with a name</h3>
              <p>
                Never from “the Neosmart team.” The name on the reply is the name
                on the work.
              </p>
            </div>
            <div className="check" style={d("0.22s")}>
              <h3>Scoping calls diagnose — they don&apos;t pitch</h3>
              <p>
                If we&apos;re not the right fit, you hear it on the call, along
                with where to look instead.
              </p>
            </div>
            <div className="check" style={d("0.34s")}>
              <h3>We publish how we think</h3>
              <p>
                Occasional, considered writing — in the open, not gated behind a
                form.
              </p>
            </div>
            <div className="check" style={d("0.46s")}>
              <h3>We finish</h3>
              <p>
                Nothing ships with placeholders, dead links, or “coming soon.”
                This site is the first test of that — go looking.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* THE SINGLE INVITATION */}
      <Reveal as="section" className="ink-ground" id="conversation">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            The invitation
          </span>
          <h2 className="invite-head">
            <span className="mask">
              <span style={d("0.1s")}>Tell us how</span>
            </span>
            <span className="mask">
              <span style={d("0.22s")}>you work.</span>
            </span>
          </h2>
          <p className="body-copy muted fade" style={d("0.4s")}>
            A scoping call is a diagnosis, not a pitch. Write to us about your
            business — what recurs, what leaks time, what you want to own at the
            end.
          </p>
          <InvitationForm />
        </div>
        <div className="wrap" style={{ marginTop: 100 }}>
          <Reveal className="rule on-ink" aria-hidden="true" />
        </div>
      </Reveal>
    </main>
  );
}
