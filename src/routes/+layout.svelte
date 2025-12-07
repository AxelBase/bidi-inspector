<script lang="ts">
    import { base } from '$app/paths';
    import { slide } from 'svelte/transition';
    import '../app.css';

    // --- Configuration ---
    const paypalUsername = 'AxelLab427'; 
    const donationAmounts = [1, 3, 5, 10];
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

            <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
                <button class="btn btn-coffee d-flex align-items-center gap-2" on:click={toggleDropdown}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="coffee-icon">
                        <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
                    </svg>
                    <span class="d-none d-md-inline">Donate</span>
                </button>

                {#if isDropdownOpen}
                    <div class="dropdown-menu-custom glass" transition:slide={{ duration: 300 }}>
                        <div class="d-flex flex-column gap-1">
                            {#each donationAmounts as amount}
                                <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" rel="noopener noreferrer" on:click={closeDropdown} class="donation-link">
                                    ${amount}
                                </a>
                            {/each}
                        </div>
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
        <span>&copy; {currentYear} AxelBase Bidirectional Text Inspector</span>
        <div class="d-flex gap-3 mt-2 mt-sm-0">
            <a href="{base}/privacy" class="footer-link">Privacy</a>
            <a href="{base}/terms" class="footer-link">Terms</a>
        </div>
    </div>
</footer>

<style>
    /* Navbar Logo Animation */
    .navbar-brand-logo { height: 32px; width: auto; border-radius: 50%; border: 2px solid var(--secondary-brand); transition: transform 0.3s ease; }
    .logo-group:hover .navbar-brand-logo { transform: rotate(15deg) scale(1.1); }
    .brand-text { color: var(--primary-brand); transition: color 0.3s; }
    .logo-group:hover .brand-text { color: var(--primary-brand-hover); }

    /* Nav Links */
    .nav-link-custom { position: relative; padding: 0.5rem 0.8rem; color: var(--color-text-muted); font-weight: 600; transition: color 0.3s; }
    .nav-link-custom::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 50%; background-color: var(--primary-brand); transition: all 0.3s ease-in-out; transform: translateX(-50%); border-radius: 2px; }
    .nav-link-custom:hover { color: var(--primary-brand); }
    .nav-link-custom:hover::after { width: 80%; }

    /* Theme Toggle */
    .btn-icon-only { border: 1px solid var(--glass-border); color: var(--color-text-main); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
    .btn-icon-only:hover { background: rgba(255,255,255,0.2); transform: rotate(15deg); }
    :global([data-bs-theme="dark"]) .theme-icon { transform: rotate(360deg); }
    .theme-icon { transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

    /* Coffee Button */
    .btn-coffee { background: var(--primary-brand); color: white; font-weight: 700; border: none; padding: 0.4rem 1.2rem; box-shadow: 0 4px 10px rgba(247, 94, 37, 0.3); font-size: 0.9rem; border-radius: 2rem; }
    .btn-coffee:hover { background: var(--primary-brand-hover); transform: translateY(-2px); box-shadow: 0 6px 15px rgba(247, 94, 37, 0.5) !important; }
    .coffee-icon { width: 18px; height: 18px; animation: steam 2s infinite ease-out; }

    /* Dropdown */
    .dropdown-menu-custom { 
        position: absolute; top: 115%; right: 0; min-width: 100px; padding: 0.5rem; border-radius: 16px; z-index: 1050; display: flex; flex-direction: column; overflow: hidden; 
        /* Override glass bg for better visibility in dark mode if needed, but glass class handles most */
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
    }
    .donation-link { 
        display: block; padding: 8px; text-align: center; border-radius: 10px; font-weight: bold; color: var(--primary-brand); 
        background: rgba(255,255,255,0.5); /* Light mode default */
        transition: all 0.2s; margin-bottom: 2px;
    }
    
    /* Dark mode override for donation link background to ensure visibility */
    :global([data-bs-theme="dark"]) .donation-link {
        background: rgba(255, 255, 255, 0.1); 
    }

    .donation-link:hover { background: var(--primary-brand); color: white; transform: scale(1.05); }

    /* Footer Links */
    .footer-link { color: var(--color-text-muted); transition: color 0.2s; }
    .footer-link:hover { color: var(--primary-brand); text-decoration: underline; }

    @keyframes steam { 0% { opacity: 0.8; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-5px); } }
</style>