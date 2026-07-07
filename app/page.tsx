import type { CSSProperties } from "react";
import "./landing.css";
import HeroLanding from "@/components/HeroLanding";
import Reveal from "@/components/Reveal";
import InvitationForm from "@/components/InvitationForm";

const d = (v: string): CSSProperties => ({ ["--d" as string]: v });

export default function Home() {
  return (
    <>
      <HeroLanding />

      <main id="top">
        {/* 1 · YOU ARE THE POINT */}
        <Reveal as="section" className="paper-ground" id="point">
          <div className="wrap">
            <span className="eyebrow">
              <span className="tick" />
              You are the point
            </span>
            <h2 className="point-head">
              <span className="mask">
                <span style={d("0.1s")}>Built around you,</span>
              </span>
              <span className="mask">
                <span style={d("0.22s")}>not a process</span>
              </span>
              <span className="mask">
                <span style={d("0.34s")}>you&apos;re fitted into.</span>
              </span>
            </h2>
            <p className="body-copy fade" style={d("0.5s")}>
              We build around your business and how it actually works. You are
              the brief — not a template we adjust to fit. Every engagement
              starts from what your work needs, and is shaped to nothing else.
            </p>
          </div>
        </Reveal>

        <div className="paper-ground" aria-hidden="true">
          <div className="wrap">
            <Reveal className="rule on-paper" />
          </div>
        </div>

        {/* 2 · WHAT YOU GET */}
        <Reveal as="section" className="paper-ground">
          <div className="wrap">
            <span className="eyebrow">
              <span className="tick" />
              What you get
            </span>
            <h2 className="section-head">
              <span className="mask">
                <span style={d("0.1s")}>One engagement.</span>
              </span>
              <span className="mask">
                <span style={d("0.22s")}>The full range.</span>
              </span>
            </h2>
            <p className="body-copy fade" style={d("0.4s")}>
              Your work might be a system that removes a week of manual effort, a
              product built from first sketch to production, or the brand and
              growth engine it all ships under. Usually it&apos;s some of each.{" "}
              <em>We scope to your problem, not to a service list.</em>
            </p>

            <div className="crafts">
              <div className="craft" style={d("0.1s")}>
                <h3>Intelligent systems</h3>
                <p>
                  Automation built into your business — research, operations,
                  document handling, customer conversations. It runs in your
                  stack, operated by your people.
                </p>
              </div>
              <div className="craft" style={d("0.25s")}>
                <h3>Products</h3>
                <p>
                  Full-stack software from first sketch to production — design,
                  frontend, backend, infrastructure. Real products with real
                  users, not prototypes that need a “real team” later.
                </p>
              </div>
              <div className="craft" style={d("0.4s")}>
                <h3>Brand &amp; growth</h3>
                <p>
                  The identity, the website, the positioning, and the measurable
                  machinery — SEO, funnels, analytics — that turns a good
                  product into a growing business.
                </p>
              </div>
            </div>
            <p className="crafts-note fade" style={d("0.55s")}>
              These aren&apos;t a menu. They&apos;re the range your engagement can
              draw on — under the same hands, to the same standard.
            </p>
          </div>
        </Reveal>

        {/* 3 · HOW IT'S BUILT + 4 · WHAT YOU KEEP */}
        <Reveal as="section" className="ink-ground">
          <div className="wrap">
            <span className="eyebrow">
              <span className="tick" />
              How it&apos;s built — and what you keep
            </span>
            <div className="hands-grid">
              <div className="bigword fade" style={d("0.15s")}>
                Yours<span className="dot">.</span>
                <small>
                  Everything we build,
                  <br />
                  you own and run.
                  <br />
                  We hand you the keys.
                </small>
              </div>
              <div className="truths">
                <div className="truth" style={d("0.2s")}>
                  <h3>The same hands, start to finish</h3>
                  <p>
                    The people who design your work build it and stay with it.
                    Your point of contact is the person making the thing — no
                    account managers, no handoff to a production line, no junior
                    swap after the sale.
                  </p>
                </div>
                <div className="truth" style={d("0.38s")}>
                  <h3>Yours to keep</h3>
                  <p>
                    Everything ends in something you own and run — a system, a
                    product, a brand — that keeps working after we&apos;re gone.
                    “Done” means it works in your hands, not that a file was
                    delivered.
                  </p>
                </div>
                <div className="truth" style={d("0.56s")}>
                  <h3>Built to last</h3>
                  <p>
                    Built properly the first time, so it doesn&apos;t reset to
                    zero when the invoice clears. If a timeline forces
                    disposability, we&apos;d rather not start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 5 · WHAT WE CARE ABOUT — the refusal */}
        <Reveal as="section" className="paper-ground">
          <div className="wrap">
            <span className="eyebrow">
              <span className="tick" />
              What we care about
            </span>
            <h2 className="section-head">
              <span className="mask">
                <span style={d("0.1s")}>We care how</span>
              </span>
              <span className="mask">
                <span style={d("0.22s")}>it turns out.</span>
              </span>
            </h2>
            <div className="refusal-quotes">
              <p className="rq" style={d("0.35s")}>
                “We don&apos;t accept projects where design is treated as
                decoration.”
              </p>
              <p className="rq" style={d("0.5s")}>
                “We work with founders who value clarity over speed.”
              </p>
            </div>
            <p className="refusal-plain fade" style={d("0.65s")}>
              That means no bidding against five quotes, no renting hours, and no
              work whose timeline forces disposability. We would rather do it
              right than do it fast — your standards are the ones we build to.
            </p>
          </div>
        </Reveal>

        {/* FOUNDING NOTE */}
        <Reveal as="section" className="paper-ground deep">
          <div className="wrap">
            <span className="eyebrow">
              <span className="tick" />
              The honest version
            </span>
            <h2 className="founding-head">
              <span className="mask">
                <span style={d("0.1s")}>Founding engagements</span>
              </span>
              <span className="mask">
                <span style={d("0.22s")}>now open.</span>
              </span>
            </h2>
            <p className="body-copy fade" style={d("0.38s")}>
              Neosmart is new — so instead of inventing a portfolio, here&apos;s
              the honest version. We&apos;re taking on our first clients now.
              Work with us early and you get the studio at its most focused: the
              same hands from first sketch to finished build, undivided
              attention, and a real say in how we work.
            </p>
            <p className="body-copy fade" style={d("0.48s")}>
              What we build together is the first proof — and, like everything we
              make, <em>it&apos;s yours to keep.</em>
            </p>
          </div>
        </Reveal>

        {/* 6 · THE SINGLE INVITATION */}
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
              A scoping call is a diagnosis, not a pitch. If we&apos;re not the
              right fit, we&apos;ll say so on the call — and point you somewhere
              better where we can.
            </p>
            <InvitationForm />
          </div>
          <div className="wrap" style={{ marginTop: 100 }}>
            <Reveal className="rule on-ink" aria-hidden="true" />
          </div>
        </Reveal>
      </main>
    </>
  );
}
