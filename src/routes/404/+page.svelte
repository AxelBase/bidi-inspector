<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 – Page Not Found | AxelBase Bidirectional Text Inspector</title>
  <meta name="description" content="The page you're looking for doesn't exist." />
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="container py-5 text-center">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      
      <div class="glass-card p-5">
          <h1 class="display-1 fw-bold mb-4" style="color: var(--primary-brand);">404</h1>
          <h2 class="mb-4">This page got overridden</h2>
          <p class="lead mb-5" style="color: var(--color-text-muted);">
            Just like a sneaky <strong>RLO</strong> character can reverse a domain name, the URL you entered has vanished into the bidirectional void.
          </p>

          <div class="d-grid gap-3 d-md-flex justify-content-center mb-5">
            <a href="{base}/" class="btn btn-primary btn-lg px-5">
              Back to Inspector
            </a>
            <a href="{base}/blog" class="btn btn-outline-secondary btn-lg px-5">
              Read the Blog
            </a>
          </div>

          <div class="helpful-links mt-5">
            <p class="small" style="color: var(--color-text-muted);">Or go directly to:</p>
            <div class="d-flex flex-wrap justify-content-center gap-4">
              <a href="{base}/" class="text-link">Inspector</a>
              <span>•</span>
              <a href="{base}/blog" class="text-link">Blog</a>
              <span>•</span>
              <a href="{base}/privacy" class="text-link">Privacy</a>
              <span>•</span>
              <a href="{base}/terms" class="text-link">Terms</a>
            </div>
          </div>

          <p class="italic-note mt-5" style="color: var(--color-text-muted);">
            <em>Even invisible characters can’t hide from this tool — and neither should bad links.</em>
          </p>
      </div>

    </div>
  </div>
</div>

<style>
  .display-1 {
    font-size: 8rem;
    font-weight: 900;
    letter-spacing: -0.05em;
  }
  @media (max-width: 576px) {
    .display-1 { font-size: 5.5rem; }
  }
  .text-link {
    color: var(--primary-brand);
    text-decoration: none;
    transition: color 0.3s;
  }
  .text-link:hover {
    color: var(--primary-brand-hover);
    text-decoration: underline;
  }
  .italic-note {
    font-size: 1.1rem;
    opacity: 0.8;
  }
  /* Button Outline Override for Dark Mode compat */
  .btn-outline-secondary {
    color: var(--color-text-main);
    border-color: var(--glass-border);
  }
  .btn-outline-secondary:hover {
    background-color: var(--glass-border);
    color: var(--color-text-main);
  }
</style>