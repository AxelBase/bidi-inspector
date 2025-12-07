<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding Unicode Bidirectional Control Characters | AxelBase Bidi Inspector</title>
  <meta name="description" content="Learn what Unicode bidirectional control characters are and how they can be weaponized." />
</svelte:head>

<div class="container fade-in post-layout">
  
  <div class="glass-card p-4 p-md-5">
      <div class="breadcrumbs mb-4">
        <a href="{base}/blog">Blog</a>
        <span>/</span>
        <p>Understanding Unicode Bidirectional Control Characters</p>
      </div>

      <article class="prose">
        <h1>Understanding Unicode Bidirectional Control Characters</h1>
        <p class="post-meta">Published: December 10, 2025</p>

        <p>Most people never notice them, but hidden inside almost every piece of multilingual text on the internet are invisible characters that control how text flows: left-to-right or right-to-left. These are called Unicode bidirectional control characters, and while they were created with good intentions, they have become one of the most powerful tools in phishing and social engineering attacks.</p>

        <p>When you write in English, Arabic, or Hebrew together, the browser needs help deciding which direction each part should go. Without guidance, the result can look broken or confusing. To solve this, Unicode introduced special invisible formatting marks that tell rendering engines exactly how to display mixed-direction text.</p>

        <h2>Why These Characters Exist</h2>
        <p>Before these controls, mixing languages like English and Arabic caused visual chaos. Words would appear in the wrong order, punctuation would jump to the wrong side, and entire sentences could become unreadable. The bidirectional algorithm, known as UBA, was designed to fix this by letting authors explicitly control text direction when needed.</p>

        <h2>The Problem: Invisible Power</h2>
        <p>The danger lies in the fact that these characters are completely invisible in normal viewing. A user sees paypal.com but what’s actually written might be p a y p a l . c o m followed by a Right-to-Left Override character, then m o c . l a y a p. The result? The domain visually reads paypal.com — but it’s actually the reversed string.</p>

        <p>This technique has been used in real attacks against banks, cryptocurrency platforms, and software download sites. Attackers register domains like xn--pypal-ffa.com and then use bidirectional overrides to make them appear as legitimate paypal.com addresses.</p>

        <h2>Who Is Affected?</h2>
        <p>Every platform that allows user-generated text is vulnerable: social media comments, forum posts, chat applications, document titles, file names, and even source code comments. Security researchers have found thousands of active phishing pages using this method in 2024 and 2025 alone.</p>

        <p>That’s why tools like this inspector exist — to make the invisible visible again.</p>

        <p class="italic-note">Knowledge is the best defense against deception. Understanding these controls helps you spot attacks that millions never see coming.</p>
      </article>
  </div>

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