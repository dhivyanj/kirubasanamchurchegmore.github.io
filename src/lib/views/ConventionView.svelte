<script lang="ts">
  import { currentLang, translations } from '../i18n';

  export let onSelectTab: (tab: string) => void;

  $: t = translations[$currentLang];
  let showPosterModal = false;
</script>

<div class="convention-view container fade-in">
  <div class="hero-card glass-card">
    <span class="badge-sparkle">✨ SPECIAL EVENT</span>
    <h1>{t.convention.title}</h1>
    <p class="subtitle">{t.convention.subtitle}</p>

    <div class="action-grid">
      <!-- Song Sheet Download -->
      <a 
        href="convention/AVKF2025SS.pdf" 
        download="AVKF2025SS.pdf" 
        class="btn-accent action-btn">
        📄 {t.convention.downloadSongSheet}
      </a>

      <!-- View Poster -->
      <button 
        class="btn-primary action-btn" 
        on:click={() => showPosterModal = true}>
        🖼️ {t.convention.downloadPoster}
      </button>

      <!-- Get Directions -->
      <a 
        href="https://maps.app.goo.gl/hrA73TVBYQ5VbPLB7" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-outline action-btn">
        🗺️ {t.convention.getDirections}
      </a>

      <!-- Detailed Directions -->
      <button 
        class="btn-outline action-btn" 
        on:click={() => onSelectTab('branches')}>
        📍 {t.convention.detailedDirections}
      </button>

      <!-- Contact Us -->
      <button 
        class="btn-outline action-btn" 
        on:click={() => onSelectTab('contact')}>
        📞 {t.convention.contactUs}
      </button>
    </div>
  </div>

  <!-- Poster Modal -->
  {#if showPosterModal}
    <div 
      class="modal-backdrop fade-in" 
      on:click={() => showPosterModal = false}>
      <div class="poster-modal glass-card">
        <button class="close-btn" on:click={() => showPosterModal = false}>✕</button>
        <h3>{t.convention.title} Poster</h3>
        <img src="convention/avk2025feb.jpg" alt="Convention Poster" class="poster-img" />
        <div class="modal-actions">
          <a href="convention/avk2025feb.jpg" download="avk2025feb.jpg" class="btn-accent">
            ⬇️ Download Image
          </a>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .convention-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
  }

  .hero-card {
    max-width: 800px;
    width: 100%;
    padding: 48px 32px;
    text-align: center;
    border: 1px solid rgba(245, 158, 11, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .badge-sparkle {
    background: rgba(245, 158, 11, 0.2);
    border: 1px solid #f59e0b;
    color: #fbbf24;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 6px 14px;
    border-radius: 999px;
    margin-bottom: 16px;
  }

  .hero-card h1 {
    font-size: 2.2rem;
    color: #ffffff;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  .subtitle {
    font-size: 1.15rem;
    color: #cbd5e1;
    margin-bottom: 36px;
  }

  .action-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 480px;
  }

  .action-btn {
    width: 100%;
    padding: 14px 20px;
    font-size: 1rem;
  }

  /* Modal */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .poster-modal {
    position: relative;
    max-width: 600px;
    width: 100%;
    padding: 24px;
    text-align: center;
    background: rgba(15, 23, 42, 0.98);
  }

  .close-btn {
    position: absolute;
    top: 12px;
    right: 16px;
    font-size: 1.4rem;
    color: #94a3b8;
  }

  .poster-modal h3 {
    color: #f8fafc;
    margin-bottom: 16px;
  }

  .poster-img {
    max-width: 100%;
    max-height: 70vh;
    border-radius: 8px;
    object-fit: contain;
    margin-bottom: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .modal-actions {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 600px) {
    .hero-card h1 {
      font-size: 1.6rem;
    }
  }
</style>
