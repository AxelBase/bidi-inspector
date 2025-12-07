<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Common Phishing Patterns Using Bidi Controls | AxelBase Bidi Inspector</title>
  <meta name="description" content="Real-world examples of bidirectional spoofing used in banking, crypto, and software distribution attacks in 2024–2025." />
  <meta property="og:title" content="Common Phishing Patterns Using Bidi Controls" />
  <meta property="og:description" content="The most frequent bidirectional attack patterns seen in the wild — and how to recognize them instantly." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Common Phishing Patterns Using Bidi Controls</p>
  </div>

  <article class="prose">
    <h1>Common Phishing Patterns Using Bidi Controls</h1>
    <p class="post-meta">Published: December 20, 2025</p>

    <p>Bidirectional spoofing is no longer theoretical. Security researchers and threat intelligence teams track thousands of active campaigns every month that rely on invisible Unicode controls to trick victims.</p>

    <p>Here are the most common patterns seen in the wild during 2024 and 2025.</p>

    <h2>Top 5 Real Attack Types</h2>
    <p>First, the classic domain reversal: paypal.com reversed to appear as paypal.com. Variations target Apple, Microsoft, Binance, and banks worldwide.</p>

    <p>Second, executable hiding: attackers name files Update.pdf.exe but insert LRM or RLM to push the .exe part out of view or make it appear as part of the trusted name.</p>

    <p>Third, trusted brand insertion: a comment says “Verified Apple Support” but uses RLI to insert apple.com inside a malicious link, making it look official.</p>

    <p>Fourth, nested deception: combining RLO with LRI to reverse only part of a URL while keeping the brand name intact — extremely hard to spot without tools.</p>

    <p>Fifth, social media bio attacks: influencers and companies have had their verified account names altered using ALM or RLM to include fake bank details.</p>

    <p>These aren’t rare edge cases. Major security vendors including Google, Microsoft, and Cloudflare have published reports confirming widespread use across phishing kits, malicious documents, and compromised websites.</p>

    <p>The good news? Every single one of these patterns is instantly visible when you paste the text into this inspector. The controls are highlighted and the rendered view shows exactly what victims see.</p>

    <p class="italic-note">Knowing the patterns is the first step. Having a tool that reveals them instantly is the solution.</p>
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