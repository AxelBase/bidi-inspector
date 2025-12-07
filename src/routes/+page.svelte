<script>
    import { base } from '$app/paths';
    import { detectBidiControls, generateHighlightedText, generateDirectionVisualization } from '../lib/bidi-inspector.js';
    import { fade, fly, slide } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    let text = '';
    let detectedControls = [];
    let visualization = { rendered: '', raw: '' };

    // Reactive block: Update on text change
    $: {
        detectedControls = detectBidiControls(text);
        visualization = generateDirectionVisualization(text);
    }
</script>

<main class="container py-5">
    
    <section class="row justify-content-center mb-5">
        <div class="col-lg-10">
            
            <div class="text-center mb-5" in:fade={{ duration: 1000, delay: 200 }}>
                <h1 class="display-4 fw-bold mb-3" style="color: var(--primary-brand);">Bidirectional Text Inspector</h1>
                <p class="lead text-muted">Detect and visualize hidden Unicode control characters securely.</p>
            </div>

            <div class="glass-card p-4 p-md-5" in:fly={{ y: 50, duration: 800, easing: cubicOut }}>
                <form on:submit|preventDefault>
                    <div class="mb-3">
                        <label for="textInput" class="form-label fw-bold ps-2">Input Text:</label>
                        <textarea
                            id="textInput"
                            class="form-control code-view"
                            rows="5"
                            bind:value={text}
                            placeholder="Paste your code or text here..."
                            style="font-size: 1.1rem;"
                        ></textarea>
                    </div>
                </form>

                {#if text.length > 0}
                    <div transition:slide={{ duration: 500 }}>
                        <div class="mt-5 mb-4 border-bottom pb-2" style="border-color: var(--glass-border) !important;">
                            <h2 class="h3">🔍 Inspection Results</h2>
                        </div>

                        {#if detectedControls.length > 0}
                            <h4 class="mb-3 text-muted h6">Detected Bidirectional Controls ({detectedControls.length}):</h4>
                            <div class="table-responsive glass rounded-4 p-3 mb-4">
                                <table class="table table-hover m-0 align-middle">
                                    <thead>
                                        <tr>
                                            <th>Pos</th>
                                            <th>Abbr</th>
                                            <th>Name</th>
                                            <th>Code</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {#each detectedControls as control}
                                            <tr>
                                                <td><span class="badge bg-secondary">{control.position}</span></td>
                                                <td class="fw-bold text-primary">{control.info.abbr}</td>
                                                <td>{control.info.name}</td>
                                                <td class="font-monospace small">{control.info.code}</td>
                                                <td class="small text-muted">{control.info.description}</td>
                                            </tr>
                                        {/each}
                                    </tbody>
                                </table>
                            </div>
                        {:else}
                            <div class="alert glass border-0 d-flex align-items-center gap-3 text-success p-4 rounded-4">
                                <i class="bi bi-check-circle-fill fs-4"></i>
                                <div>
                                    <strong>Clean!</strong> No bidirectional control characters detected.
                                </div>
                            </div>
                        {/if}

                        <h4 class="mt-5 mb-3 text-muted h6">👁️ Visualization:</h4>
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="glass p-4 h-100 rounded-4 border-0 position-relative">
                                    <h5 class="h6 text-primary mb-3 fw-bold">Raw (Controls Highlighted)</h5>
                                    <div class="p-3 rounded-3 code-view" style="background: rgba(0,0,0,0.05); min-height: 100px;">
                                        {@html visualization.raw}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="glass p-4 h-100 rounded-4 border-0 position-relative">
                                    <h5 class="h6 text-primary mb-3 fw-bold">Rendered (With Directionality)</h5>
                                    <div class="p-3 rounded-3" style="background: rgba(0,0,0,0.05); min-height: 100px; direction: rtl; unicode-bidi: bidi-override;">
                                        {@html visualization.rendered}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </section>

    <div class="row justify-content-center">
        <div class="col-lg-10">
            
<!-- ABOUT SECTION -->
<section id="about" class="glass-card p-5 mb-5 scroll-margin">
  <h2 class="mb-4 text-gradient display-5">About the Bidirectional Text Inspector</h2>
  <div class="lead fs-5 text-muted mb-4">
    A free, open-source, 100% client-side web tool that instantly reveals invisible Unicode bidirectional control characters in any text — protecting you from spoofing, phishing, and Trojan Source attacks.
  </div>

  <p>
    The internet is full of invisible threats. A single character like <strong>U+202E (Right-to-Left Override)</strong> can make <em>paypal.com</em> appear when the actual text reads <em>moc.layap</em>. Attackers use these non-printing control characters to deceive users, bypass code review, and hide malicious payloads in plain sight.
  </p>

  <p>
    This inspector detects <strong>all twelve</strong> official Unicode bidirectional control characters — including the modern isolate controls (LRI, RLI, FSI, PDI) that many older tools completely miss. It works instantly in your browser: no data is sent, no cookies are set, no logs are kept. Your pasted text never leaves your device.
  </p>

  <p>
    Originally built to help security researchers, content moderators, developers, and everyday users spot phishing links and malicious documents, this tool has become essential in 2025 as bidirectional attacks surge across email, social media, chat apps, and even source code repositories.
  </p>

  <p>
    Whether you're verifying a suspicious link, reviewing a pull request, or teaching others about Unicode security, this inspector gives you immediate, trustworthy visibility into what is really in the text — not just what it appears to be.
  </p>

  <p class="fw-bold mt-4">
    Privacy by design. Security by transparency. Built for everyone.
  </p>
</section>

<!-- HOW TO USE SECTION -->
<section id="how-to-use" class="glass-card p-5 mb-5 scroll-margin">
  <h2 class="mb-4 text-gradient display-5">How to Use the Inspector</h2>

  <ol class="list-group list-group-numbered fs-5">
    <li class="list-group-item bg-transparent border-0 py-3">
      <strong>Paste any text</strong> into the large input box above — URLs, emails, chat messages, code comments, file names, or entire documents.
    </li>
    <li class="list-group-item bg-transparent border-0 py-3">
      The tool <strong>automatically scans</strong> and <strong>instantly</strong> scans for all 12 bidirectional control characters (LRM, RLM, RLO, LRO, LRE, RLE, PDF, LRI, RLI, FSI, PDI, ALM).
    </li>
    <li class="list-group-item bg-transparent border-0 py-3">
      <strong>Review the results</strong>:
      <ul class="mt-2 mb-0">
        <li><strong>Table</strong> — shows exact position, abbreviation, name, and description of each control</li>
        <li><strong>Raw view</strong> — highlights every invisible character with a yellow badge like [RLO]</li>
        <li><strong>Rendered view</strong> — shows exactly what a victim would see (the deception)</li>
      </ul>
    </li>
    <li class="list-group-item bg-transparent border-0 py-3">
      <strong>Share or report</strong> — copy the highlighted output or take a screenshot to warn others.
    </li>
  </ol>

  <div class="alert alert-info mt-4 fs-5">
    <strong>Pro tip:</strong> When in doubt, paste it here first. If the rendered text doesn’t match your expectation — trust the inspector.
  </div>
</section>

<!-- FAQ SECTION -->
<section id="faq" class="glass-card p-5 mb-5 scroll-margin">
  <h2 class="mb-4 text-gradient display-5">Frequently Asked Questions</h2>

  <div class="accordion accordion-flush" id="faqAccordion">
    <div class="accordion-item border-start border-primary border-4 mb-3 rounded shadow-sm">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
          What are bidirectional (Bidi) control characters?
        </button>
      </h3>
      <div id="q1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          They are invisible Unicode characters (U+200E through U+2069, plus U+061C) that tell browsers and text renderers how to handle mixed left-to-right (English, Latin) and right-to-left (Arabic, Hebrew) text. While designed for legitimate multilingual support, they can be abused to visually reverse or hide parts of text.
        </div>
      </div>
    </div>

    <div class="accordion-item border-start border-primary border-4 mb-3 rounded shadow-sm">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
          Why are these characters dangerous?
        </button>
      </h3>
      <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Attackers use them to spoof domains (paypal.com), hide malicious code in comments (Trojan Source attacks), disguise file extensions (.exe appearing as .pdf), or make trusted text appear inside malicious links. The human eye sees one thing — the computer processes another.
        </div>
      </div>
    </div>

    <div class="accordion-item border-start border-primary border-4 mb-3 rounded shadow-sm">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
          Does this tool send my text to a server?
        </button>
      </h3>
      <div id="q3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          <strong>No. Never.</strong> All processing is 100% client-side. Your clipboard content, passwords, private messages, or source code never leave your browser. Check the Network tab — zero requests after page load.
        </div>
      </div>
    </div>

    <div class="accordion-item border-start border-primary border-4 mb-3 rounded shadow-sm">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
          Does it work offline?
        </button>
      </h3>
      <div id="q4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Yes! After the first visit, your browser caches everything. You can bookmark the page or save it as a PWA and use it completely offline.
        </div>
      </div>
    </div>

    <div class="accordion-item border-start border-primary border-4 mb-3 rounded shadow-sm">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
          Can I use this in my own security workflow or product?
        </button>
      </h3>
      <div id="q5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Absolutely. The entire project is open-source under the MIT License. Fork it, embed the <code>bidi-inspector.js</code> logic, or integrate it into CI/CD pipelines, email gateways, or moderation tools.
        </div>
      </div>
    </div>
  </div>

  <p class="text-center mt-5 text-muted fst-italic">
    Still have questions? Visit the <a href="{base}/blog" class="text-primary">Blog</a> or open an issue on GitHub.
  </p>
</section>
        </div>
    </div>

</main>

<style>
    .scroll-margin {
        scroll-margin-top: 140px;
    }
    .text-gradient {
        background: linear-gradient(135deg, var(--primary-brand), #ffcc80);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>