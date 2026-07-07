Here it is — the footer as applied across the site. Two parts: the markup and its CSS.
HTML (this version is for the homepage; on other pages, move aria-current="page" to whichever link matches that page):
html<footer>

  <div class="wrap">
    <div class="ft-top">
      <div class="ft-brand">
        <div class="fwm">Neosmart<span class="dot">.</span></div>
        <p>A studio that builds intelligent systems, products, and brands around you — designed and built by the same people, and yours to keep.</p>
      </div>
      <nav class="ft-col" aria-label="Pages">
        <span class="ft-label">Pages</span>
        <ul>
          <li><a href="index.html" aria-current="page">Home</a></li>
          <li><a href="neosmart-studio.html">Studio</a></li>
          <li><a href="neosmart-work.html">Work</a></li>
          <li><a href="neosmart-journal.html">Journal</a></li>
        </ul>
      </nav>
      <div class="ft-col">
        <span class="ft-label">Write to us</span>
        <ul>
          <li><a href="mailto:hello@neosmartlabs.com">hello@neosmartlabs.com</a></li>
        </ul>
        <p class="note">Replies come from a person, with a name.</p>
      </div>
    </div>
    <div class="ft-bottom">
      <span>© 2026 Neosmart Labs</span>
      <span>Made for one.</span>
    </div>
  </div>
</footer>
CSS (drops into any page already using the site's :root tokens):
css/* ————— footer · the colophon ————— */
footer {
  background: var(--ink);
  color: var(--taupe-lt);
  border-top: 1px solid var(--line-ink);
}
footer .ft-top {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 48px;
  padding: 64px 0 56px;
}
@media (max-width: 820px) {
  footer .ft-top { grid-template-columns: 1fr; gap: 40px; padding: 52px 0 44px; }
}
footer .ft-brand .fwm {
  font-weight: 800; letter-spacing: -0.03em;
  font-size: 1.5rem; color: var(--paper);
  line-height: 1;
}
footer .ft-brand p {
  margin-top: 16px;
  font-size: 0.92rem;
  line-height: 1.6;
  max-width: 38ch;
  color: var(--taupe-lt);
}
footer .ft-label {
  font-size: 0.66rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.18em;
  color: var(--taupe-lt);
  display: inline-flex; align-items: center; gap: 10px;
  margin-bottom: 18px;
}
footer .ft-label::before {
  content: ""; width: 1px; height: 12px; background: var(--oxblood);
  display: inline-block; flex: none;
}
footer .ft-col ul { list-style: none; }
footer .ft-col li + li { margin-top: 10px; }
footer .ft-col a {
  font-size: 0.95rem;
  color: var(--paper);
  text-decoration: none;
  transition: color 0.3s var(--ease);
}
footer .ft-col a:hover, footer .ft-col a:focus-visible { color: var(--taupe-lt); }
footer .ft-col a[aria-current="page"] {
  color: var(--taupe-lt);
  pointer-events: none;
}
footer .ft-col .note {
  margin-top: 14px;
  font-size: 0.8rem;
  color: var(--taupe-lt);
  max-width: 26ch;
  line-height: 1.6;
}
footer .ft-bottom {
  border-top: 1px solid var(--line-ink);
  padding: 22px 0;
  display: flex; justify-content: space-between; align-items: baseline;
  flex-wrap: wrap; gap: 10px 24px;
  font-size: 0.76rem; letter-spacing: 0.04em;
  color: var(--taupe-lt);
}
@media (max-width: 480px) {
  footer .ft-bottom { flex-direction: column; gap: 6px; }
}
How it follows the rules: the wordmark and category line lead; the pages column doubles as the site's cross-navigation so the top bar stays quiet; the contact column is the email plus its brand behavior line — no form, no second CTA button (the invitation section above the footer keeps that job); the bottom strip is where Neosmart Labs does its one legal job, paired with the tagline. Measure-ticks appear only as the two column labels. No socials, no terms/privacy links yet — those get added only when the pages actually exist, never as dead links.
Already applied to all eight files in the output folder — this snippet is for wiring it into anything else.
