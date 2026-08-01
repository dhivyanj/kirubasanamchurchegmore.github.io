<script lang="ts">
  import { currentLang, translations } from '../i18n';

  export let onSelectTab: (tab: string) => void;
  export let onOpenMeeting: () => void;

  $: t = translations[$currentLang];
</script>

<div class="home-view fade-in">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-bg-glow"></div>
    <div class="hero-card glass-card">
      <img src="logoen.png" alt="Kirubasanam Logo" class="hero-logo" />
      <h1 class="hero-title">{t.home.heroTitle}</h1>
      <p class="hero-subtitle">{t.home.heroSubtitle}</p>

      <div class="hero-cta">
        <button class="btn-accent" on:click={() => onSelectTab('convention')}>
          ✨ {t.home.conventionAnnouncement}
        </button>
        <button class="btn-primary" on:click={onOpenMeeting}>
          🎥 {t.nav.joinMeeting}
        </button>
      </div>
    </div>
  </section>

  <!-- Content Grid -->
  <section class="grid-section container">
    <!-- Announcements Card -->
    <div class="glass-card feature-card">
      <div class="card-icon">📢</div>
      <h2>{t.home.updatesTitle}</h2>
      <p class="card-sub">{t.home.updatesSubtitle}</p>
      
      <button class="announcement-box" on:click={() => onSelectTab('convention')}>
        <span class="announcement-badge">NEW</span>
        <div class="announcement-text">
          <h3>{t.home.conventionAnnouncement}</h3>
          <p>Aavikkurriya Viseshittha Kootangal 2025 • Song sheet & directions available</p>
        </div>
        <span class="arrow">➔</span>
      </button>
    </div>

    <!-- Sunday Service Card -->
    <div class="glass-card feature-card">
      <div class="card-icon">⛪</div>
      <h2>{t.home.sundayServiceTitle}</h2>
      <p class="card-sub">{t.home.sundayServiceDesc}</p>
      
      <div class="service-details">
        <div class="service-time">
          <span class="day">Sunday Morning Worship</span>
          <span class="time">Egmore & Manappakkam Branches</span>
        </div>
        <div class="action-buttons">
          <button class="btn-outline" on:click={() => onSelectTab('branches')}>
            📍 {t.nav.branches}
          </button>
          <button class="btn-primary" on:click={() => onSelectTab('member')}>
            ✉️ {t.nav.member}
          </button>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .home-view {
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 24px 0;
  }

  .hero-section {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    padding-top: 32px;
  }

  .hero-bg-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 70%);
    filter: blur(40px);
    z-index: 0;
  }

  .hero-card {
    position: relative;
    z-index: 1;
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .hero-logo {
    height: 90px;
    width: auto;
    margin-bottom: 20px;
    filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.4));
  }

  .hero-title {
    font-size: 2.2rem;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.2;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #ffffff, #93c5fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-subtitle {
    font-size: 1.15rem;
    color: #cbd5e1;
    max-width: 680px;
    margin-bottom: 32px;
  }

  .hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .grid-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }

  .feature-card {
    padding: 32px;
    display: flex;
    flex-direction: column;
  }

  .card-icon {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }

  .feature-card h2 {
    font-size: 1.4rem;
    color: #f8fafc;
    margin-bottom: 6px;
  }

  .card-sub {
    color: #94a3b8;
    font-size: 0.95rem;
    margin-bottom: 24px;
  }

  .announcement-box {
    display: flex;
    align-items: center;
    gap: 16px;
    background: rgba(30, 41, 59, 0.9);
    border: 1px solid rgba(245, 158, 11, 0.4);
    border-radius: 12px;
    padding: 16px 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    width: 100%;
    font-family: inherit;
  }

  .announcement-box:hover {
    background: rgba(51, 65, 85, 0.95);
    transform: translateX(4px);
    border-color: rgba(245, 158, 11, 0.8);
  }

  .announcement-badge {
    background: #f59e0b;
    color: #0f172a;
    font-size: 0.75rem;
    font-weight: 800;
    padding: 4px 8px;
    border-radius: 6px;
  }

  .announcement-text h3 {
    font-size: 1rem;
    color: #f8fafc;

  }

  .announcement-text p {
    font-size: 0.85rem;
    color: #94a3b8;
  }

  .arrow {
    margin-left: auto;
    font-size: 1.2rem;
    color: #f59e0b;
  }

  .service-details {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .service-time {
    display: flex;
    flex-direction: column;
    background: rgba(30, 41, 59, 0.6);
    padding: 14px 18px;
    border-radius: 8px;
    border-left: 4px solid #2563eb;
  }

  .service-time .day {
    font-weight: 700;
    color: #f8fafc;
  }

  .service-time .time {
    font-size: 0.88rem;
    color: #94a3b8;
  }

  .action-buttons {
    display: flex;
    gap: 12px;
  }

  @media (max-width: 800px) {
    .grid-section {
      grid-template-columns: 1fr;
    }
    .hero-title {
      font-size: 1.6rem;
    }
    .hero-subtitle {
      font-size: 1rem;
    }
  }
</style>
