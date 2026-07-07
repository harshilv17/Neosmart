Here's the navbar — one system, quiet, no hamburger (three links don't earn one).
HTML (move aria-current="page" to whichever link matches the page; on the homepage, no link gets it since the wordmark is home):

<nav class="site-bar" aria-label="Main">
  <div class="wrap row">
    <a class="wm" href="index.html">Neosmart<span class="dot">.</span></a>
    <div class="links">
      <a href="neosmart-studio.html">Studio</a>
      <a href="neosmart-work.html">Work</a>
      <a href="neosmart-journal.html">Journal</a>
      <a class="go" href="index.html#conversation">Start a conversation</a>
    </div>
  </div>
</nav>

CSS (uses the site's existing :root tokens):
css/_ ————— navbar · quiet, one line ————— _/
.site-bar {
position: fixed; top: 0; left: 0; right: 0; z-index: 30;
background: var(--ink);
border-bottom: 1px solid var(--line-ink);
}
.site-bar .row {
display: flex; justify-content: space-between; align-items: center;
padding: 16px 0;
}
.site-bar .wm {
font-weight: 800; letter-spacing: -0.03em;
font-size: 1.15rem; line-height: 1;
text-decoration: none; color: var(--paper);
}
.site-bar .links {
display: flex; align-items: center; gap: 30px;
}
.site-bar .links a {
font-size: 0.74rem; font-weight: 600;
text-transform: uppercase; letter-spacing: 0.16em;
color: var(--taupe-lt);
text-decoration: none;
transition: color 0.3s var(--ease);
}
.site-bar .links a:hover,
.site-bar .links a:focus-visible { color: var(--paper); }
.site-bar .links a[aria-current="page"] {
color: var(--paper);
display: inline-flex; align-items: center; gap: 10px;
}
.site-bar .links a[aria-current="page"]::before {
content: "";
width: 1px; height: 12px; background: var(--oxblood);
display: inline-block;
}
.site-bar .links .go {
display: inline-flex; align-items: center; gap: 10px;
}
.site-bar .links .go::after {
content: "";
width: 1px; height: 12px; background: var(--oxblood);
display: inline-block;
}
@media (max-width: 640px) {
.site-bar .links { gap: 20px; }
.site-bar .links .go { display: none; }
}
:where(.site-bar) :focus-visible { outline: 2px solid var(--paper); outline-offset: 3px; }

For the homepage only, keep the existing scroll-in behavior — the giant wordmark is the masthead, so the bar should stay hidden until it's scrolled past. Add transform: translateY(-101%); transition: transform 0.5s var(--ease); to .site-bar on that page plus .site-bar.visible { transform: translateY(0); }, and the landing page's existing scroll handler (siteBar.classList.toggle("visible", y > hero.offsetHeight \* 0.8)) already does the rest. On inner pages the bar is simply always there — no JS needed.
Design notes: the current page is marked with a measure-tick before its label (the motif marking position — its actual job), not an underline or color block. The CTA carries a tick after it, matching how it appears elsewhere, and on small screens it drops away rather than cramming — the invitation section and footer still carry it, so the one-CTA rule survives the cut. On pages other than the homepage, "Start a conversation" can point to that page's own #conversation section instead of routing back to index.html#conversation — Studio and Work have one; the Journal pages don't, so theirs should keep the index.html#conversation href to avoid a dead anchor.
