<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | AxelBase – Bidirectional Text Inspector</title>
  <meta name="description" content="Terms of use for the free, open-source Bidirectional Text Inspector." />
</svelte:head>

<div class="container fade-in post-layout">
  
  <div class="glass-card p-4 p-md-5">
      <div class="breadcrumbs mb-4">
        <a href="{base}/">Home</a>
        <span>/</span>
        <p>Terms and Conditions</p>
      </div>

      <article class="prose">
        <h1>Terms and Conditions</h1>
        <p class="post-meta">Last updated: December 25, 2025</p>

        <p>By accessing or using the <strong>AxelBase Bidirectional Text Inspector</strong> (the “Tool”), you agree to be bound by these Terms and Conditions.</p>

        <h2>1. Nature of the Tool</h2>
        <p>This is a <strong>free, open-source</strong>, client-side web utility hosted on GitHub Pages. It is provided <strong>“as is”</strong> and <strong>“as available”</strong> with no warranties of any kind.</p>

        <h2>2. License to Use</h2>
        <p>You are granted a worldwide, non-exclusive, royalty-free license to use the Tool for personal or commercial purposes, including security research, phishing analysis, and education.</p>

        <h2>3. Prohibited Uses</h2>
        <p>You may not:</p>
        <ul>
          <li>Use the Tool for any unlawful purpose</li>
          <li>Attempt to overwhelm or disrupt the GitHub Pages hosting</li>
          <li>Remove or alter the open-source license or attribution</li>
          <li>Represent the Tool as your own work</li>
        </ul>

        <h2>4. No Warranty</h2>
        <p>The Tool is provided without warranty of any kind. We do not guarantee that it will detect every possible bidirectional attack. Use at your own risk.</p>

        <h2>5. Limitation of Liability</h2>
        <p>In no event shall the author or contributors be liable for any damages arising from the use or inability to use the Tool.</p>

        <h2>6. Open Source</h2>
        <p>The complete source code is publicly available on GitHub under the MIT License.</p>

        <p class="italic-note"><strong>Simple, transparent, and privacy-first</strong> — just like the tool itself.</p>
      </article>
  </div>
</div>

<style>
  /* --- Reused Styling Variables --- */
  .post-layout { max-width: 900px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--color-text-muted); }
  .breadcrumbs a { color: var(--primary-brand); text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .breadcrumbs p { margin: 0; color: var(--color-text-main); font-weight: 500; }

  .prose { line-height: 1.8; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--color-text-main); font-weight: 700; }
  .prose h2 { margin-top: 2.5rem; font-size: 1.8rem; color: var(--primary-brand); border-bottom: 2px solid var(--glass-border); padding-bottom: 0.5rem; }
  .prose p, .prose ul { color: var(--color-text-main); margin-bottom: 1.2rem; }
  .prose ul { padding-left: 1.8rem; margin: 1.2rem 0; }
  .prose ul li { margin-bottom: 0.6rem; }
  .post-meta { color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 2rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem; }
  .italic-note { font-style: italic; text-align: center; color: var(--color-text-muted); margin-top: 3rem; font-size: 1.1rem; border-top: 1px solid var(--glass-border); padding-top: 2rem;}
</style>