// src/lib/bidi-inspector.js
// Single file containing all logic for bidirectional text inspection
// Exports functions and data for use in Svelte pages (primarily +page.svelte for FR-1, and about/+page.svelte for FR-2)

// Define the bidirectional control characters with their details
const bidiControls = {
  '\u200E': { name: 'Left-to-Right Mark', code: 'U+200E', abbr: 'LRM', description: 'Non-printing character used to mark the following text as left-to-right.' },
  '\u200F': { name: 'Right-to-Left Mark', code: 'U+200F', abbr: 'RLM', description: 'Non-printing character used to mark the following text as right-to-left.' },
  '\u202A': { name: 'Left-to-Right Embedding', code: 'U+202A', abbr: 'LRE', description: 'Treat the following text as embedded left-to-right.' },
  '\u202B': { name: 'Right-to-Left Embedding', code: 'U+202B', abbr: 'RLE', description: 'Treat the following text as embedded right-to-left.' },
  '\u202C': { name: 'Pop Directional Formatting', code: 'U+202C', abbr: 'PDF', description: 'Terminate the current embedding or override.' },
  '\u202D': { name: 'Left-to-Right Override', code: 'U+202D', abbr: 'LRO', description: 'Force the following text to be treated as left-to-right.' },
  '\u202E': { name: 'Right-to-Left Override', code: 'U+202E', abbr: 'RLO', description: 'Force the following text to be treated as right-to-left.' },
  '\u2066': { name: 'Left-to-Right Isolate', code: 'U+2066', abbr: 'LRI', description: 'Isolate the embedded content directionally from surroundings, treating as LTR.' },
  '\u2067': { name: 'Right-to-Left Isolate', code: 'U+2067', abbr: 'RLI', description: 'Isolate the embedded content directionally from surroundings, treating as RTL.' },
  '\u2068': { name: 'First Strong Isolate', code: 'U+2068', abbr: 'FSI', description: 'Isolate the embedded content, direction based on first strong directional character.' },
  '\u2069': { name: 'Pop Directional Isolate', code: 'U+2069', abbr: 'PDI', description: 'Terminate the current isolate.' },
  '\u061C': { name: 'Arabic Letter Mark', code: 'U+061C', abbr: 'ALM', description: 'Non-printing character used to mark the following text as right-to-left for Arabic.' }
};

// Function to detect bidirectional controls in the text
// Returns an array of objects: { position: number, char: string, info: object }
function detectBidiControls(text) {
  const results = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (bidiControls[char]) {
      results.push({
        position: i,
        char: char,
        info: bidiControls[char]
      });
    }
  }
  return results;
}

// Function to generate highlighted HTML for the text
// Replaces control characters with visible spans (e.g., <span class="bidi-highlight" title="LRM (U+200E) - Description">[LRM]</span>)
// Use Bootstrap classes for styling (e.g., badge bg-warning)
function generateHighlightedText(text) {
  let highlighted = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (bidiControls[char]) {
      const info = bidiControls[char];
      const tooltip = `${info.abbr} (${info.code}) - ${info.description}`;
      highlighted += `<span class="badge bg-warning text-dark" title="${tooltip}">[${info.abbr}]</span>`;
    } else {
      highlighted += escapeHtml(char);
    }
  }
  return highlighted;
}

// Helper function to escape HTML entities for safe rendering
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Function to generate a simple visualization of directionality
// This splits the text into segments based on overrides/embeds (simplified, not full UBA implementation)
// Returns HTML with spans having explicit direction styles for demonstration
function generateDirectionVisualization(text) {
  // Simplified: Use browser's bidi algorithm in a div with direction: auto
  // For visualization, we can wrap the whole text in <div dir="auto" style="border:1px solid; unicode-bidi: plaintext;">${escapeHtml(text)}</div>
  // But to show segments, we'd need to parse the controls, which is complex.
  // For simplicity, return two views: Rendered (with controls active), and Raw (with controls visible)
  const rendered = `<div dir="auto" style="unicode-bidi: embed;">${escapeHtml(text)}</div>`;
  const rawHighlighted = generateHighlightedText(text);
  return {
    rendered: rendered,
    raw: `<div style="unicode-bidi: plaintext; white-space: pre-wrap;">${rawHighlighted}</div>`
  };
}

// Export everything needed
export {
  bidiControls,
  detectBidiControls,
  generateHighlightedText,
  generateDirectionVisualization
};