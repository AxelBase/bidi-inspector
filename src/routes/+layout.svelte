<script lang="ts">
    import { base } from '$app/paths';
    import { slide } from 'svelte/transition';
    import '../app.css';

    // --- Configuration ---
    const paypalUsername = 'AxelLab427';           // ← kept from file 2 (not used anymore)
    const bmacUsername = 'axelbase';               // ← from file 1
    const currentYear = new Date().getFullYear();

    // --- State ---
    let isDropdownOpen = false;

    // --- Theme Logic ---
    function toggleTheme() {
        const current = document.body.getAttribute('data-bs-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-bs-theme', newTheme);
    }

    // --- Dropdown Logic ---
    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }

    function closeDropdown() {
        isDropdownOpen = false;
    }

    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
                node.dispatchEvent(new CustomEvent('click_outside'));
            }
        };
        document.addEventListener('click', handleClick, true);
        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            }
        };
    }
</script>

<header class="fixed-top p-3 w-100" style="pointer-events: none; z-index: 1040;">
    <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm"
         style="pointer-events: auto; max-width: 1320px;">
        
        <div class="d-flex align-items-center gap-3">
            <a href="{base}/" class="d-flex align-items-center gap-2 logo-group text-decoration-none">
                <img src="{base}/AxelLab-Logo.ico" alt="AxelLab Logo" class="navbar-brand-logo" />
                <span class="fw-bold fs-5 d-none d-sm-block brand-text">AxelBase</span>
            </a>
        </div>

        <div class="d-flex align-items-center gap-3">
            
            <ul class="d-none d-lg-flex align-items-center gap-1 m-0 list-unstyled">
                <li><a class="nav-link-custom" href="{base}/">Home</a></li>
                <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
                <li><a class="nav-link-custom" href="{base}/#how-to-use">How to use</a></li>
                <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
                <li><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
            </ul>

            <div class="vr mx-2 d-none d-lg-block" style="color: var(--color-text-main);"></div>

            <button class="btn btn-icon-only" on:click={toggleTheme} aria-label="Toggle Dark Mode">
                <i class="bi bi-moon-stars-fill theme-icon"></i>
            </button>

            <!-- Buy Me a Coffee + Bitcoin Dropdown (style closer to File 1) -->
            <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
                <button
                    class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
                    on:click={toggleDropdown}
                    aria-label="Support options"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
                    </svg>
                    <span class="d-none d-md-inline fw-semibold">Buy me a Coffee</span>
                </button>

                {#if isDropdownOpen}
                    <div 
                        class="bmac-dropdown glass mt-2" 
                        transition:slide={{ duration: 280, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                    >
                        <a href="https://buymeacoffee.com/{bmacUsername}" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$3</span> One Coffee
                        </a>
                        <a href="https://buymeacoffee.com/{bmacUsername}" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$5</span> Two Coffees
                        </a>
                        <a href="https://buymeacoffee.com/{bmacUsername}" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$10</span> Three Coffees
                        </a>

                        <a href="https://buymeacoffee.com/{bmacUsername}" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
                            Custom Amount
                        </a>

                        <a
                            href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                            on:click={closeDropdown}
                            class="custom-amount bitcoin-option"
                        >
                            Buy via Crypto (Bitcoin)
                        </a>
                    </div>
                {/if}
            </div>

        </div>
    </nav>
</header>

<div class="pt-5 mt-4">
    <slot />
</div>

<footer class="glass border-top py-3 mt-auto">
    <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
        <span>© {currentYear} AxelBase Bidirectional Text Inspector</span>
        <div class="d-flex gap-3 mt-2 mt-sm-0">
            <a href="{base}/privacy" class="footer-link">Privacy</a>
            <a href="{base}/terms" class="footer-link">Terms</a>
        </div>
    </div>
</footer>

<style>
    /* ── Keeping most of File 2 styles ── */

    /* Buy Me a Coffee Button (style from File 1, adapted to orange theme) */
    .bmac-button {
        background: var(--primary-brand);
        font-size: 0.95rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(247, 94, 37, 0.35);
    }
    .bmac-button:hover {
        background: var(--primary-brand-hover);
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(247, 94, 37, 0.55);
    }

    /* Dropdown - File 1 style + glass from File 2 */
    .bmac-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        width: 240px;
        background: var(--glass-bg);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--glass-border);
        border-radius: 16px;
        box-shadow: var(--glass-shadow);
        overflow: hidden;
        z-index: 1050;
    }

    .bmac-dropdown a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        color: var(--color-text-main);
        text-decoration: none;
        font-size: 0.98rem;
        transition: all 0.22s ease;
    }

    .bmac-dropdown a:hover {
        background: rgba(247, 94, 37, 0.12);
        color: var(--primary-brand);
        padding-left: 28px;
    }

    .bmac-dropdown .amount {
        font-weight: 700;
        color: var(--primary-brand);
        font-size: 1.1rem;
    }

    .bmac-dropdown .custom-amount {
        font-weight: 600;
        color: var(--primary-brand);
        border-top: 1px solid var(--glass-border);
        justify-content: center !important;
        padding: 14px 20px;
    }

    .bitcoin-option {
        color: #f7931a !important;          /* bitcoin orange */
        font-weight: 600;
    }
    .bitcoin-option:hover {
        background: rgba(247, 147, 26, 0.12) !important;
        color: #f7931a !important;
    }

    /* Keep original File 2 styles for other elements */
    .navbar-brand-logo { height: 32px; width: auto; border-radius: 50%; border: 2px solid var(--secondary-brand); transition: transform 0.3s ease; }
    .logo-group:hover .navbar-brand-logo { transform: rotate(15deg) scale(1.1); }
    .brand-text { color: var(--primary-brand); transition: color 0.3s; }
    .logo-group:hover .brand-text { color: var(--primary-brand-hover); }

    .nav-link-custom { position: relative; padding: 0.5rem 0.8rem; color: var(--color-text-muted); font-weight: 600; transition: color 0.3s; }
    .nav-link-custom::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 50%; background-color: var(--primary-brand); transition: all 0.3s ease-in-out; transform: translateX(-50%); border-radius: 2px; }
    .nav-link-custom:hover { color: var(--primary-brand); }
    .nav-link-custom:hover::after { width: 80%; }

    .btn-icon-only { border: 1px solid var(--glass-border); color: var(--color-text-main); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
    .btn-icon-only:hover { background: rgba(255,255,255,0.2); transform: rotate(15deg); }
    :global([data-bs-theme="dark"]) .theme-icon { transform: rotate(360deg); }
    .theme-icon { transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

    .footer-link { color: var(--color-text-muted); transition: color 0.2s; }
    .footer-link:hover { color: var(--primary-brand); text-decoration: underline; }
</style>