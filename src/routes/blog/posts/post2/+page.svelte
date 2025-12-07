<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>The RLO Attack: How paypal.com Becomes paypal.com | AxelBase Bidi Inspector</title>
  <meta name="description" content="A step-by-step explanation of the Right-to-Left Override (U+202E) attack that lets attackers visually reverse domain names in phishing scams." />
  <meta property="og:title" content="The RLO Attack: How paypal.com Becomes paypal.com" />
  <meta property="og:description" content="A step-by-step explanation of the Right-to-Left Override attack used in phishing." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>The RLO Attack: How paypal.com Becomes paypal.com</p>
  </div>

  <article class="prose">
    <h1>The RLO Attack: How paypal.com Becomes paypal.com</h1>
    <p class="post-meta">Published: December 12, 2025</p>

    <p>One of the most effective and terrifying phishing techniques in use today doesn’t rely on lookalike domains or typos. It uses a single invisible Unicode character: U+202E, the Right-to-Left Override.</p>

    <p>Here’s how it works. An attacker writes the text paypal.com but then inserts the RLO character immediately after the dot. Everything that follows is now rendered from right to left. So when they type moc.layap backwards, it appears as paypal.com — perfectly aligned, perfectly convincing.</p>

    <h2>A Real-World Example</h2>
    <p>Imagine receiving an email: “Your payment to paypal.com was successful.” You can view it here: paypal.com invoice_3921.exe”. Most users glance at the domain and click without hesitation. But the actual link points to a malicious server because the visible text has been visually reversed using bidirectional override.</p>

    <h2>Why It Works So Well</h2>
    <p>The human brain trusts what it sees. When a domain name looks correct, we rarely question it. Security indicators like green padlocks or HTTPS don’t help if the domain itself is fake but disguised. Even technical users can be fooled because the attack happens at the rendering layer — before any URL parsing occurs.</p>

    <p>This technique has been documented in attacks against cryptocurrency wallets, banking portals, and software update systems. In 2024, researchers found over 8,000 active phishing pages using RLO to spoof PayPal, Apple, Microsoft, and banking brands.</p>

    <p>The scariest part? Many antivirus tools and browser protections still don’t detect or block this method because the URL itself is technically valid — only the visual representation is deceptive.</p>

    <p>That’s why client-side tools like this inspector are essential. They reveal what’s really in the text before your eyes or your users are tricked.</p>

    <p class="italic-note">An invisible character should never have the power to steal trust. Now you know how to take that power back.</p>
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