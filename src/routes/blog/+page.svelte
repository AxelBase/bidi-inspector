<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Understanding Unicode Bidirectional Control Characters',
      description: 'An introduction to invisible Unicode characters that control text direction and how they can be abused in spoofing attacks.'
    },
    {
      href: '/blog/posts/post2',
      title: 'The RLO Attack: How paypal.com Becomes paypal.com',
      description: 'Deep dive into U+202E (Right-to-Left Override) — the most dangerous bidirectional control character in phishing.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Detecting Hidden LRM, RLM, and ALM Characters',
      description: 'Why non-printing marks like Left-to-Right Mark (U+200E) and Arabic Letter Mark (U+061C) are used in exploits.'
    },
    {
      href: '/blog/posts/post4',
      title: 'LRI, RLI, FSI, and PDI: The Modern Isolation Controls',
      description: 'How Unicode 6.3+ isolate controls (U+2066–U+2069) changed the game — and why older tools fail to detect them.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Visualizing Directionality: Raw vs Rendered Text',
      description: 'Why seeing both the logical order and visual rendering is essential to understanding bidirectional overrides.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Common Phishing Patterns Using Bidi Controls',
      description: 'Real-world examples from malware, scam sites, and social engineering using RLO, LRO, and nested embeddings.'
    },
    {
      href: '/blog/posts/post7',
      title: 'How This Inspector Works: Client-Side Bidi Analysis',
      description: 'Technical breakdown of detecting all 12 bidirectional control characters instantly in the browser — no server required.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | AxelBase – Bidirectional Text Inspector</title>
  <meta name="description" content="Technical deep dives, security insights, and guides on Unicode bidirectional control characters." />
</svelte:head>

<div class="container py-5 blog-index">
  <header class="text-center mb-5">
    <h1 class="display-4 fw-bold mb-3" style="color: var(--color-text-main);">
      Blog: Bidi Security & Unicode Insights
    </h1>
    <p class="lead col-lg-8 mx-auto" style="color: var(--color-text-muted);">
      In-depth articles about Unicode bidirectional algorithm, invisible control characters, spoofing attacks, and how tools like this inspector help protect users.
    </p>
  </header>

  <div class="row g-4">
    {#each posts as post}
      <div class="col-md-6 col-lg-4">
        <a href="{base}{post.href}" class="text-decoration-none h-100 d-block">
          <div class="card h-100 glass-card border-0 transition p-3">
            <div class="card-body d-flex flex-column">
              <h2 class="h5 fw-bold mb-3" style="color: var(--primary-brand);">{post.title}</h2>
              <p class="small flex-grow-1" style="color: var(--color-text-muted);">{post.description}</p>
              <span class="fw-semibold mt-3" style="color: var(--primary-brand);">
                Read more →
              </span>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .transition {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
</style>