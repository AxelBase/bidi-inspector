<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase – Bidirectional Text Inspector</title>
  <meta name="description" content="We collect zero data. Everything runs 100% in your browser." />
</svelte:head>

<div class="container fade-in post-layout">
  
  <div class="glass-card p-4 p-md-5">
      <div class="breadcrumbs mb-4">
        <a href="{base}/">Home</a>
        <span>/</span>
        <p>Privacy Policy</p>
      </div>

      <article class="prose">
        <h1>Privacy Policy</h1>
        <p class="post-meta">Effective Date: December 25, 2025</p>

        <p>Welcome to the <strong>AxelBase Bidirectional Text Inspector</strong> — a completely client-side, open-source web tool designed to detect and visualize Unicode bidirectional control characters in any text you paste.</p>

        <p><strong>We collect absolutely no personal data. Ever.</strong></p>

        <h2>No Data Collection Whatsoever</h2>
        <p>This tool runs <strong>100% in your browser</strong>. When you paste or type text into the inspector:</p>
        <ul>
          <li>No information is sent to any server</li>
          <li>No IP addresses are logged</li>
          <li>No cookies, localStorage, or tracking pixels are used</li>
          <li>No analytics services (Google Analytics, Plausible, etc.) are loaded</li>
          <li>Your clipboard content never leaves your device</li>
        </ul>

        <h2>How Your Text Is Processed</h2>
        <p>All analysis happens instantly and locally using pure JavaScript. The moment you paste suspicious text, the browser scans it character-by-character looking for the twelve known bidirectional control characters. Results are displayed immediately — and disappear the moment you close or refresh the page.</p>

        <h2>Third-Party Services</h2>
        <p>We use <strong>only</strong> the Bootstrap 5 CSS and JS files from the official CDN for styling. These files do not track users or set cookies when loaded with Subresource Integrity (SRI) hashes. No other external services are used.</p>

        <h2>GitHub Pages Hosting</h2>
        <p>The site is statically hosted on GitHub Pages. GitHub itself may log basic server access for security, but this is outside our control and contains no personal data from you.</p>

        <h2>Contact</h2>
        <p>Questions? Open an issue on our public GitHub repository.</p>

        <p class="italic-note"><strong>Your privacy is not a feature — it’s the foundation.</strong> By using this inspector, you can be certain that what you paste stays yours alone.</p>
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