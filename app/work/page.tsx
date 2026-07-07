import type { CSSProperties } from "react";
import type { Metadata } from "next";
import "../work.css";
import Reveal from "@/components/Reveal";
import InvitationForm from "@/components/InvitationForm";
import WorkFigure from "@/components/WorkFigure";

const d = (v: string): CSSProperties => ({ ["--d" as string]: v });

export const metadata: Metadata = {
  title: "Work",
  description:
    "Engagements told honestly — what each client now owns and runs. Shades of You, Tilak Sales, and the studio's founding note.",
  openGraph: {
    title: "Work — Neosmart",
    description:
      "Engagements told honestly — what each client now owns and runs.",
  },
};

export default function WorkPage() {
  return (
    <main>
      {/* MASTHEAD */}
      <Reveal as="header" className="ink-ground masthead">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            Work
          </span>
          <h1 className="mast-head">
            <span className="mask">
              <span style={d("0.1s")}>What clients</span>
            </span>
            <span className="mask">
              <span style={d("0.22s")}>now own and run.</span>
            </span>
          </h1>
          <p className="mast-sub fade" style={d("0.5s")}>
            No case-study cards, no borrowed metrics. Each engagement below is
            told the way it happened — and framed around the only measure that
            matters here: what&apos;s now in the client&apos;s hands.
          </p>
        </div>
      </Reveal>

      <div className="ink-ground" aria-hidden="true">
        <div className="wrap">
          <Reveal className="rule on-ink" />
        </div>
      </div>

      {/* ENGAGEMENT · SHADES OF YOU */}
      <Reveal as="section" className="paper-ground">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            Engagement · homegrown batik womenswear
          </span>
          <h2 className="eng-client">
            <span className="mask">
              <span style={d("0.1s")}>Shades of You</span>
            </span>
          </h2>
          <p className="eng-line fade" style={d("0.3s")}>
            A batik house that now runs its whole digital life itself.
          </p>
          <p className="body-copy fade" style={d("0.45s")}>
            Shades of You makes handcrafted batik clothing for women — suit sets,
            kurta sets, and co-ords, cut in sizes XS to 6XL and adjusted to the
            wearer on request. Work with a maker&apos;s hand in it, which
            deserved a digital presence built the same way. They didn&apos;t need
            a website, or a brand, or a way to manage customers. They needed all
            of it, working as one thing.
          </p>
          <p className="body-copy fade" style={d("0.55s")}>
            So it was designed and built as one: the brand the clothing ships
            under, the store where it sells — now live and shipping worldwide —
            and the customer system their team works in every day. The same
            hands across all of it, from first sketch to a store taking orders.
          </p>

          <div className="media-row">
            <WorkFigure
              wide
              src="/images/shades-of-you-01.jpg"
              alt="The Shades of You online store, live"
              caption="The store, live"
            />
            <WorkFigure
              src="/images/shades-of-you-02.jpg"
              alt="Shades of You brand identity in use"
              caption="The brand, in use"
            />
            <WorkFigure
              src="/images/shades-of-you-03.jpg"
              alt="The customer system Shades of You's team runs"
              caption="The system they run"
            />
            <WorkFigure
              wide
              src="/images/shades-of-you-04.jpg"
              alt="Shades of You batik clothing"
              caption="The work itself"
            />
          </div>

          <div className="owns">
            <span className="owns-label">Now in their hands</span>
            <div className="own-item" style={d("0.1s")}>
              <h3>The brand</h3>
              <p>
                The identity their batik ships under — theirs to grow, on every
                label, page, and post.
              </p>
            </div>
            <div className="own-item" style={d("0.22s")}>
              <h3>The store</h3>
              <p>
                Their website and shop, live and selling — on their own domain,
                in their own accounts, shipping worldwide.
              </p>
            </div>
            <div className="own-item" style={d("0.34s")}>
              <h3>The customer system</h3>
              <p>
                A CRM their own team runs every day — every enquiry, order, and
                customer relationship in one place they control.
              </p>
            </div>
          </div>

          <a
            className="proof"
            href="https://www.shadesofyou.co.in/"
            target="_blank"
            rel="noopener"
          >
            Visit Shades of You
          </a>
        </div>
      </Reveal>

      <div className="paper-ground" aria-hidden="true">
        <div className="wrap">
          <Reveal className="rule on-paper" />
        </div>
      </div>

      {/* ENGAGEMENT · TILAK SALES */}
      <Reveal as="section" className="paper-ground">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            Engagement · real estate
          </span>
          <h2 className="eng-client">
            <span className="mask">
              <span style={d("0.1s")}>Tilak Sales</span>
            </span>
          </h2>
          <p className="eng-line fade" style={d("0.3s")}>
            A real-estate business, given a brand it can build on.
          </p>
          <p className="body-copy fade" style={d("0.45s")}>
            Real estate runs on trust, and trust starts with how a name carries
            itself. Tilak Sales came for a brand — an identity considered enough
            to hold its own on a hoarding, a handshake, and a listing alike.
          </p>

          <div className="owns">
            <span className="owns-label">Now in their hands</span>
            <div className="own-item" style={d("0.1s")}>
              <h3>The identity</h3>
              <p>
                A brand built around their business — theirs to put on every
                property, document, and deal.
              </p>
            </div>
            <div className="own-item" style={d("0.22s")}>
              <h3>The website</h3>
              <p>
                Their site, carrying the brand — where a listing, a name, and a
                number are all a buyer needs to find.
              </p>
            </div>
          </div>

          <div className="media-row">
            <WorkFigure
              wide
              src="/images/tilak-sales-01.jpg"
              alt="The Tilak Sales brand identity"
              caption="The identity"
            />
            <WorkFigure
              src="/images/tilak-sales-02.jpg"
              alt="The Tilak Sales website"
              caption="The website"
            />
          </div>
        </div>
      </Reveal>

      {/* THE FOUNDING NOTE */}
      <Reveal as="section" className="paper-ground deep">
        <div className="wrap">
          <span className="eyebrow">
            <span className="tick" />
            The honest version
          </span>
          <h2 className="founding-head">
            <span className="mask">
              <span style={d("0.1s")}>The studio is young.</span>
            </span>
            <span className="mask">
              <span style={d("0.22s")}>The work above is the proof.</span>
            </span>
          </h2>
          <p className="body-copy fade" style={d("0.38s")}>
            Neosmart is new, and this page will grow slowly — engagements are
            added only when they can be told honestly, as what the client now
            owns. Work with us now and you get the studio at its most focused:
            the same hands from first sketch to finished build, undivided
            attention, and a real say in how we work.
          </p>
          <p className="body-copy fade" style={d("0.48s")}>
            Whatever we build together joins this page one day — and, like
            everything we make, <em>it&apos;s yours to keep.</em>
          </p>
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
  );
}
