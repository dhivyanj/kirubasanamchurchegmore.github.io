<script lang="ts">
  import { currentLang, translations } from '../i18n';

  export let activeTab: string = 'home';
  export let onSelectTab: (tab: string) => void;
  export let onOpenMeeting: () => void;

  let mobileMenuOpen = false;

  $: t = translations[$currentLang];

  function toggleLanguage() {
    currentLang.update(l => l === 'en' ? 'ta' : 'en');
  }

  function handleTabClick(tab: string) {
    onSelectTab(tab);
    mobileMenuOpen = false;
  }
</script>

<header class="navbar-header">
  <div class="container nav-container">
    <!-- Header Title with Logo -->
    <a href="#home" class="brand" on:click|preventDefault={() => handleTabClick('home')}>
      <img src="logoen.png" alt="Logo" class="brand-logo" />
      <div class="brand-titles">
        <h1 class="en1">{t.churchName}</h1>
        <h1 class="ta1">{t.churchNameTa}</h1>
      </div>
    </a>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <button 
        class="nav-link {activeTab === 'home' ? 'active' : ''}" 
        on:click={() => handleTabClick('home')}>
        {t.nav.home}
      </button>
      <button 
        class="nav-link {activeTab === 'convention' ? 'active' : ''}" 
        on:click={() => handleTabClick('convention')}>
        {t.nav.convention}
      </button>
      <button 
        class="nav-link" 
        on:click={onOpenMeeting}>
        {t.nav.joinMeeting}
      </button>
      <button 
        class="nav-link {activeTab === 'branches' ? 'active' : ''}" 
        on:click={() => handleTabClick('branches')}>
        {t.nav.branches}
      </button>
      <button 
        class="nav-link {activeTab === 'contact' ? 'active' : ''}" 
        on:click={() => handleTabClick('contact')}>
        {t.nav.contact}
      </button>
      <button 
        class="lang-switch-btn" 
        on:click={toggleLanguage}>
        {$currentLang === 'en' ? 'தமிழ்' : 'English'}
      </button>
    </nav>

    <!-- Mobile Hamburger button -->
    <button 
      class="hamburger-btn" 
      on:click={() => mobileMenuOpen = !mobileMenuOpen}
      aria-label="Toggle Menu">
      {#if mobileMenuOpen}✕{:else}☰{/if}
    </button>
  </div>

  <!-- Mobile Menu Drawer -->
  {#if mobileMenuOpen}
    <div class="mobile-drawer fade-in">
      <button class="mobile-link {activeTab === 'home' ? 'active' : ''}" on:click={() => handleTabClick('home')}>
        {t.nav.home}
      </button>
      <button class="mobile-link {activeTab === 'convention' ? 'active' : ''}" on:click={() => handleTabClick('convention')}>
        {t.nav.convention}
      </button>
      <button class="mobile-link" on:click={() => { onOpenMeeting(); mobileMenuOpen = false; }}>
        {t.nav.joinMeeting}
      </button>
      <button class="mobile-link {activeTab === 'branches' ? 'active' : ''}" on:click={() => handleTabClick('branches')}>
        {t.nav.branches}
      </button>
      <button class="mobile-link {activeTab === 'contact' ? 'active' : ''}" on:click={() => handleTabClick('contact')}>
        {t.nav.contact}
      </button>
      <button class="mobile-link lang-mobile" on:click={() => { toggleLanguage(); mobileMenuOpen = false; }}>
        🌐 {$currentLang === 'en' ? 'தமிழ்' : 'English'}
      </button>
    </div>
  {/if}
</header>

<style>
  .navbar-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(15, 23, 42, 0.94);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .brand-logo {
    height: 52px;
    width: auto;
    object-fit: contain;
  }

  .brand-titles h1 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .en1 {
    color: #f8fafc;
  }

  .ta1 {
    color: #94a3b8;
    font-size: 0.9rem !important;
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .nav-link {
    padding: 8px 14px;
    color: #cbd5e1;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }

  .nav-link.active {
    color: #60a5fa;
    background: rgba(37, 99, 235, 0.2);
    font-weight: 600;
  }

  .lang-switch-btn {
    padding: 6px 14px;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: #ffffff;
    font-weight: 600;
    border-radius: 999px;
    font-size: 0.88rem;
    margin-left: 8px;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
  }

  .lang-switch-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.5);
  }

  .hamburger-btn {
    display: none;
    font-size: 1.6rem;
    color: #f8fafc;
    padding: 4px 8px;
  }

  .mobile-drawer {
    display: none;
    flex-direction: column;
    background: rgba(15, 23, 42, 0.98);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 16px 20px;
    gap: 8px;
  }

  .mobile-link {
    padding: 12px 16px;
    font-size: 1rem;
    color: #e2e8f0;
    border-radius: 8px;
    text-align: left;
  }

  .mobile-link.active {
    background: rgba(37, 99, 235, 0.2);
    color: #60a5fa;
    font-weight: 600;
  }

  .lang-mobile {
    color: #f59e0b;
    font-weight: 700;
  }

  @media (max-width: 820px) {
    .desktop-nav {
      display: none;
    }
    .hamburger-btn {
      display: block;
    }
    .mobile-drawer {
      display: flex;
    }
    .brand-titles h1 {
      font-size: 0.9rem;
    }
    .ta1 {
      font-size: 0.8rem !important;
    }
  }
</style>
