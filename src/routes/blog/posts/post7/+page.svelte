<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How This Inspector Works: Client-Side Bidi Analysis | AxelBase Bidi Inspector</title>
  <meta name="description" content="A technical look at how the Bidirectional Text Inspector detects all 12 Unicode control characters instantly in your browser — no server, no data shared." />
  <meta property="og:title" content="How This Inspector Works: Client-Side Bidi Analysis" />
  <meta property="og:description" content="Privacy-first, instant detection of LRM, RLM, RLO, isolates and more — entirely in the browser." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How This Inspector Works: Client-Side Bidi Analysis</p>
  </div>

  <article class="prose">
    <h1>How This Inspector Works: Client-Side Bidi Analysis</h1>
    <p class="post-meta">Published: December 22, 2025</p>

    <p>You don’t need to trust a server to analyze suspicious text. Everything happens in your browser — instantly and privately. That is the core principle behind this tool.</p>

    <p>When you paste text into the inspector, JavaScript immediately scans every single character looking for the twelve known bidirectional control characters. As soon as one is found, it is highlighted with a yellow badge showing its name and code point.</p>

    <h2>No Data Leaves Your Device</h2>
    <p>Unlike online phishing checkers that upload your input to a remote server, this inspector processes everything locally. No logs, no telemetry, no risk of sensitive data exposure. Your clipboard content never leaves your machine.</p>

    <p>The detection logic lives in a single, readable JavaScript file. You can review it, fork it, or embed it in your own projects. It works offline after the first load.</p>

    <h2>Two Views for Maximum Clarity</h2>
    <p>The raw view shows every control character highlighted so you can see exactly what was written. The rendered view shows what a normal user sees — the final visual result after the browser processing. Together, they reveal deception that single-view tools miss.</p>

    <p>Performance is critical. Even with thousands of controls, analysis completes in milliseconds using simple iteration and a lookup table — no complex regex or external libraries required.</p>

    <p>This tool proves that powerful security doesn’t require complexity or privacy trade-offs. Sometimes the best defense is a lightweight, transparent client-side scanner running directly in the user’s browser.</p>

    <p class="italic-note">Privacy and power are not mutually exclusive. This inspector proves it every day.</p>
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