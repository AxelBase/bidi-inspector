<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>LRI, RLI, FSI, and PDI: The Modern Isolation Controls | AxelBase Bidi Inspector</title>
  <meta name="description" content="How Unicode 6.3 introduced directional isolates (LRI/RLI/FSI/PDI) to fix embedding flaws — and why attackers still exploit them today." />
  <meta property="og:title" content="LRI, RLI, FSI, and PDI: The Modern Isolation Controls" />
  <meta property="og:description" content="Understanding the safer, modern way to handle mixed-direction text and how attackers bypass weak detectors." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>LRI, RLI, FSI, and PDI: The Modern Isolation Controls</p>
  </div>

  <article class="prose">
    <h1>LRI, RLI, FSI, and PDI: The Modern Isolation Controls</h1>
    <p class="post-meta">Published: December 16, 2025</p>

    <p>In 2012, Unicode introduced a major improvement to the bidirectional algorithm: directional isolates. These four new control characters — Left-to-Right Isolate, Right-to-Left Isolate, First Strong Isolate, and Pop Directional Isolate — were designed to replace the older, flawed embedding and override system.</p>

    <p>The old system using LRE, RLE, LRO, RLO, and PDF had a critical weakness: once you started an embedding or override, it affected everything until explicitly closed. A single missing PDF could leak directionality across an entire document, creating chaos or enabling spoofing.</p>

    <h2>How Isolates Fixed the Problem</h2>
    <p>Isolates work differently. When you insert an LRI or RLI, you create a protected bubble. Text inside the bubble follows its own direction rules, and when you close it with PDI, the surrounding text is completely forgotten. No leakage. No leftover overrides.</p>

    <p>This makes isolates much safer for modern applications like chat, email, and social media where user content from different languages appears side by side.</p>

    <h2>But Attackers Adapted</h2>
    <p>Unfortunately, many security tools written before 2015 still only look for the old LRO/RLO characters and completely ignore isolates. Attackers know this. Today, sophisticated phishing pages increasingly use RLI plus PDI to hide reversed domains while appearing clean to outdated detectors.</p>

    <p>Worse, some platforms strip LRO/RLO for security but leave isolates untouched — creating a perfect blind spot. A domain like evil.com wrapped in RLI and reversed can display as paypal.com while passing basic filters.</p>

    <p>That is why this inspector detects all twelve control characters — including the full modern isolate set. You cannot defend against tomorrow’s attacks with yesterday’s rules.</p>

    <p class="italic-note">The future of text security isn’t blocking old tricks. It’s understanding new ones before they spread.</p>
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