<script lang="ts">
  import { currentLang, translations } from '../i18n';

  export let onSelectTab: (tab: string) => void;

  $: t = translations[$currentLang];
</script>

<div class="about-view container fade-in">
  <div class="header-card glass-card">
    <h1>{t.about.title}</h1>
    <p class="welcome-quote">"{t.about.welcomeMsg}"</p>
  </div>

  <div class="about-grid">
    <div class="glass-card section-card">
      <div class="card-header">
        <span class="icon">📖</span>
        <h2>{t.churchName}</h2>
      </div>
      <p class="desc-text">{t.about.description}</p>
    </div>

    <div class="glass-card section-card">
      <div class="card-header">
        <span class="icon">✝️</span>
        <h2>{t.about.missionTitle}</h2>
      </div>
      <p class="desc-text">{t.about.missionDesc}</p>
    </div>
  </div>

  <div class="action-card glass-card">
    <h3>Have questions or want to join us?</h3>
    <p>Feel free to view our branch routes or reach out directly.</p>
    <div class="btn-group">
      <button class="btn-primary" on:click={() => onSelectTab('branches')}>
        📍 {t.nav.branches}
      </button>
      <button class="btn-outline" on:click={() => onSelectTab('contact')}>
        📞 {t.nav.contact}
      </button>
    </div>
  </div>
</div>

<style>
  .about-view {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 24px;
  }

  .header-card {
    padding: 40px 32px;
    text-align: center;
    border-left: 6px solid #2563eb;
  }

  .header-card h1 {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 12px;
  }

  .welcome-quote {
    font-size: 1.1rem;
    font-style: italic;
    color: #fbbf24;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }

  .section-card {
    padding: 32px;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .card-header .icon {
    font-size: 2rem;
  }

  .card-header h2 {
    font-size: 1.3rem;
    color: #f8fafc;
  }

  .desc-text {
    color: #cbd5e1;
    font-size: 1rem;
    line-height: 1.7;
  }

  .action-card {
    padding: 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .action-card h3 {
    font-size: 1.3rem;
    color: #f8fafc;
  }

  .action-card p {
    color: #94a3b8;
  }

  .btn-group {
    display: flex;
    gap: 16px;
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
