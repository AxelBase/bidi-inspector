<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Detecting Hidden LRM, RLM, and ALM Characters | AxelBase Bidi Inspector</title>
  <meta name="description" content="Explore how Left-to-Right Mark (U+200E), Right-to-Right Mark (U+200F), and Arabic Letter Mark (U+061C) are used in subtle text spoofing attacks." />
  <meta property="og:title" content="Detecting Hidden LRM, RLM, and ALM Characters" />
  <meta property="og:description" content="How non-printing directional marks are used in advanced spoofing and why most users never see them." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Detecting Hidden LRM, RLM, and ALM Characters</p>
  </div>

  <article class="prose">
    <h1>Detecting Hidden LRM, RLM, and ALM Characters</h1>
    <p class="post-meta">Published: December 14, 2025</p>

    <p>Not all bidirectional attacks are dramatic. Some of the most dangerous ones are nearly invisible — using non-printing marks that subtly shift text direction without reversing entire strings.</p>

    <p>The Left-to-Right Mark (U+200E), Right-to-Left Mark (U+200F), and Arabic Letter Mark (U+061C) don’t reverse text — they force a specific direction on the characters that follow. In most fonts, they leave no visual trace at all.</p>

    <h2>Real Attack Scenarios</h2>
    <p>Consider a comment that reads: “This software is safe — download from official site”. An attacker can insert an RLM after the word “safe” and before a malicious link. Now the link appears to belong to the trusted sentence, even though it’s actually separate. Users click thinking they’re safe.</p>

    <p>Another common trick involves file names. A file named Report.pdf followed by LRM and then com.exe.txt might display as Report.pdfexe.txt — hiding the executable extension from casual viewers.</p>

    <h2>Why They’re Hard to Spot</h2>
    <p>These characters have zero width and don’t affect line breaks or spacing in most applications. Even developers viewing source code or hex dumps might miss them if not looking carefully. That’s what makes them perfect for supply chain and social engineering attacks.</p>

    <p>Many security tools ignore these marks because they’re considered harmless formatting. But in the hands of an attacker, they become precision tools for deception.</p>

    <p>This inspector highlights every instance of LRM, RLM, and ALM so you can see exactly where direction has been forced — even when nothing looks wrong at first glance.</p>

    <p class="italic-note">True security isn’t just about blocking threats. It’s about seeing what others don’t.</p>
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