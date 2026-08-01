<script lang="ts">
  import { currentLang, translations, type Language } from '../i18n';

  export let activeTab: string = 'home';
  export let onSelectTab: (tab: string) => void;
  export let onOpenMeeting: () => void;

  let mobileMenuOpen = false;

  $: t = translations[$currentLang];

  function setLanguage(lang: Language) {
    currentLang.set(lang);
  }

  function handleTabClick(tab: string) {
    onSelectTab(tab);
    mobileMenuOpen = false;
  }
</script>

<header class="navbar-header">
  <div class="container nav-container">
    <!-- Logo & Title -->
    <a href="#home" class="brand" on:click|preventDefault={() => handleTabClick('home')}>
      <img src="logoen.png" alt="Kirubasanam Logo" class="brand-logo" />
      <div class="brand-titles">
        <span class="title-main">{$currentLang === 'ta' ? t.churchName : t.churchNameSub}</span>
        <span class="title-sub">{$currentLang === 'ta' ? t.churchNameSub : t.churchName}</span>
      </div>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="desktop-nav">
      <button 
        class="nav-link {activeTab === 'home' ? 'active' : ''}" 
        on:click={() => handleTabClick('home')}>
        {t.nav.home}
      </button>
      <button 
        class="nav-link {activeTab === 'about' ? 'active' : ''}" 
        on:click={() => handleTabClick('about')}>
        {t.nav.about}
      </button>
      <button 
        class="nav-link {activeTab === 'branches' ? 'active' : ''}" 
        on:click={() => handleTabClick('branches')}>
        {t.nav.branches}
      </button>
      <button 
        class="nav-link {activeTab === 'convention' ? 'active' : ''}" 
        on:click={() => handleTabClick('convention')}>
        <span class="badge-dot"></span>{t.nav.convention}
      </button>
      <button 
        class="nav-link {activeTab === 'member' ? 'active' : ''}" 
        on:click={() => handleTabClick('member')}>
        {t.nav.member}
      </button>
      <button 
        class="nav-link {activeTab === 'contact' ? 'active' : ''}" 
        on:click={() => handleTabClick('contact')}>
        {t.nav.contact}
      </button>
      <button class="btn-meeting-nav" on:click={onOpenMeeting}>
        🎥 {t.nav.joinMeeting}
      </button>
    </nav>

    <!-- Language Switcher Switch -->
    <div class="lang-switch-container">
      <div class="lang-pill">
        <button 
          class="lang-btn {$currentLang === 'ta' ? 'active' : ''}" 
          on:click={() => setLanguage('ta')}>
          தமிழ்
        </button>
        <button 
          class="lang-btn {$currentLang === 'en' ? 'active' : ''}" 
          on:click={() => setLanguage('en')}>
          EN
        </button>
      </div>

      <!-- Hamburger Button for Mobile -->
      <button 
        class="hamburger-btn" 
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
        aria-label="Toggle navigation menu">
        {#if mobileMenuOpen}
          ✕
        {:else}
          ☰
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Drawer Dropdown -->
  {#if mobileMenuOpen}
    <div class="mobile-drawer fade-in">
      <button class="mobile-link {activeTab === 'home' ? 'active' : ''}" on:click={() => handleTabClick('home')}>
        🏠 {t.nav.home}
      </button>
      <button class="mobile-link {activeTab === 'about' ? 'active' : ''}" on:click={() => handleTabClick('about')}>
        ℹ️ {t.nav.about}
      </button>
      <button class="mobile-link {activeTab === 'branches' ? 'active' : ''}" on:click={() => handleTabClick('branches')}>
        📍 {t.nav.branches}
      </button>
      <button class="mobile-link {activeTab === 'convention' ? 'active' : ''}" on:click={() => handleTabClick('convention')}>
        ✨ {t.nav.convention}
      </button>
      <button class="mobile-link {activeTab === 'member' ? 'active' : ''}" on:click={() => handleTabClick('member')}>
        ✉️ {t.nav.member}
      </button>
      <button class="mobile-link {activeTab === 'contact' ? 'active' : ''}" on:click={() => handleTabClick('contact')}>
        📞 {t.nav.contact}
      </button>
      <button class="btn-meeting-mobile" on:click={() => { onOpenMeeting(); mobileMenuOpen = false; }}>
        🎥 {t.nav.joinMeeting}
      </button>
    </div>
  {/if}
</header>

<style>
  .navbar-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(15, 23, 42, 0.92);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .brand-logo {
    height: 48px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
    transition: transform 0.25s ease;
  }

  .brand:hover .brand-logo {
    transform: scale(1.05);
  }

  .brand-titles {
    display: flex;
    flex-direction: column;
  }

  .title-main {
    font-size: 1.05rem;
    font-weight: 700;
    color: #f8fafc;
    line-height: 1.2;
  }

  .title-sub {
    font-size: 0.78rem;
    color: #94a3b8;
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .nav-link {
    padding: 8px 14px;
    color: #cbd5e1;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .nav-link:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }

  .nav-link.active {
    color: #60a5fa;
    background: rgba(37, 99, 235, 0.18);
    font-weight: 600;
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #f59e0b;
    display: inline-block;
  }

  .btn-meeting-nav {
    padding: 8px 16px;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: #fff;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 8px;
    margin-left: 8px;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    transition: all 0.2s ease;
  }

  .btn-meeting-nav:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.5);
  }

  .lang-switch-container {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .lang-pill {
    display: flex;
    background: rgba(30, 41, 59, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 999px;
    padding: 3px;
  }

  .lang-btn {
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #94a3b8;
    transition: all 0.2s ease;
  }

  .lang-btn.active {
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
  }

  .hamburger-btn {
    display: none;
    font-size: 1.5rem;
    color: #f8fafc;
    padding: 4px 8px;
  }

  .mobile-drawer {
    display: none;
    flex-direction: column;
    background: rgba(15, 23, 42, 0.98);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 16px 20px;
    gap: 10px;
  }

  .mobile-link {
    display: flex;
    align-items: center;
    gap: 10px;
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

  .btn-meeting-mobile {
    padding: 12px;
    background: #2563eb;
    color: #fff;
    font-weight: 700;
    border-radius: 8px;
    margin-top: 8px;
    text-align: center;
  }

  @media (max-width: 900px) {
    .desktop-nav {
      display: none;
    }
    .hamburger-btn {
      display: block;
    }
    .mobile-drawer {
      display: flex;
    }
    .title-sub {
      display: none;
    }
    .title-main {
      font-size: 0.95rem;
    }
  }
</style>
