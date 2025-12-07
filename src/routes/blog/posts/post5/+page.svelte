<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Visualizing Directionality: Raw vs Rendered Text | AxelBase Bidi Inspector</title>
  <meta name="description" content="Why showing both the logical order and final visual rendering is essential to truly understanding bidirectional text attacks." />
  <meta property="og:title" content="Visualizing Directionality: Raw vs Rendered Text" />
  <meta property="og:description" content="The difference between what is written and what you see — and why both views are critical for security." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Visualizing Directionality: Raw vs Rendered Text</p>
  </div>

  <article class="prose">
    <h1>Visualizing Directionality: Raw vs Rendered Text</h1>
    <p class="post-meta">Published: December 18, 2025</p>

    <p>When analyzing suspicious text, seeing only one view is never enough. You need both: the raw logical order exactly as stored, and the final rendered appearance exactly as the victim sees it.</p>

    <p>Many security analysts make the mistake of examining only the source text. They see paypal.com followed by strange symbols and assume it’s harmless formatting. But when the same text is rendered in a browser, email client, or messaging app, those invisible controls completely change the meaning.</p>

    <h2>Two Views, One Truth</h2>
    <p>The raw view shows every control character highlighted and labeled. You can see exactly where an RLO begins, where a PDI closes an isolate, or where an LRM forces direction. This is the truth of what was written.</p>

    <p>The rendered view shows exactly what a normal user sees: no highlights, no warnings — just the final visual result. This is the lie the attacker wants the victim to believe.</p>

    <p>By placing both side by side, you instantly spot the deception. A domain that reads apple.com in the rendered panel but shows apple.com reversed with an RLO in the raw panel is an immediate red flag.</p>

    <h2>Why This Matters in Practice</h2>
    <p>Security teams reviewing phishing reports, moderators checking social media posts, and developers auditing user-generated content all benefit from this dual view. It removes guesswork. Either the text means what it appears to mean — or it doesn’t.</p>

    <p>No amount of domain reputation, SSL certificates, or link scanning can protect against an attack that never touches the network in the first place. The deception happens entirely in the rendering engine.</p>

    <p class="italic-note">Seeing is not always believing. But seeing both truths at once is understanding.</p>
  </article>
</div>

<style>
  /* --- Reusable Post Styling (Dark Mode Compatible) --- */
  .post-layout { max-width: 900px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--color-text-muted); }
  .breadcrumbs a { color: var(--primary-brand); text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .breadcrumbs p { margin: 0; color: var(--color-text-main); font-weight: 500; }

  .prose { line-height: 1.8; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--color-text-main); font-weight: 700; }
  .prose h2 { margin-top: 2.5rem; font-size: 1.8rem; color: var(--primary-brand); border-bottom: 2px solid var(--glass-border); padding-bottom: 0.5rem; }
  
  .prose p { color: var(--color-text-main); margin-bottom: 1.2rem; }
  
  .post-meta { color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 2rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem; }
  
  .italic-note { font-style: italic; text-align: center; color: var(--color-text-muted); margin-top: 3rem; font-size: 1.1rem; border-top: 1px solid var(--glass-border); padding-top: 2rem;}
  
  @media (max-width: 768px) {
    .prose h1 { font-size: 2rem; }
  }
</style>