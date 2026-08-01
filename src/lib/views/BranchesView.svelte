<script lang="ts">
  import { currentLang, translations, type BranchInfo } from '../i18n';

  $: t = translations[$currentLang];
  let selectedBranchId: 'egmore' | 'manappakkam' = 'egmore';

  $: selectedBranch = selectedBranchId === 'egmore' ? t.branches.egmore : t.branches.manappakkam;
</script>

<div class="branches-view container fade-in">
  <div class="header-card glass-card">
    <h1>{t.branches.title}</h1>
    <p>{t.branches.subtitle}</p>

    <!-- Branch Tab Switcher -->
    <div class="branch-tabs">
      <button 
        class="tab-btn {selectedBranchId === 'egmore' ? 'active' : ''}" 
        on:click={() => selectedBranchId = 'egmore'}>
        🏛️ {t.branches.egmore.name}
      </button>
      <button 
        class="tab-btn {selectedBranchId === 'manappakkam' ? 'active' : ''}" 
        on:click={() => selectedBranchId = 'manappakkam'}>
        🏢 {t.branches.manappakkam.name}
      </button>
    </div>
  </div>

  <!-- Selected Branch Card Details -->
  <div class="branch-content-grid">
    <!-- Transport & Info Side -->
    <div class="glass-card branch-info-card">
      <h2>{selectedBranch.name}</h2>
      
      <div class="info-section">
        <h3>📍 {t.branches.addressLabel}</h3>
        <p class="address-text">{selectedBranch.address}</p>
      </div>

      <div class="info-section">
        <h3>🚌 {t.branches.mtcLabel}</h3>
        <div class="bus-chips">
          {#each selectedBranch.mtc as bus}
            <span class="badge badge-bus">{bus}</span>
          {/each}
        </div>
      </div>

      <div class="info-section">
        <h3>🚆 {t.branches.suburbanLabel}</h3>
        <p class="suburban-text">{selectedBranch.suburban}</p>
      </div>

      <div class="info-section">
        <h3>🚇 {t.branches.metroLabel}</h3>
        <div class="metro-list">
          {#each selectedBranch.metro as metro}
            <div class="metro-badge" style="border-left-color: {metro.color}">
              <span class="metro-name" style="color: {metro.color}">{metro.line}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="action-box">
        <a 
          href={selectedBranch.directionsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-accent btn-directions">
          🗺️ {t.branches.getDirections} ➔
        </a>
      </div>
    </div>

    <!-- Map Side -->
    <div class="glass-card map-card">
      <h3>🗺️ Google Maps Location</h3>
      <div class="iframe-wrapper">
        <iframe 
          title="Google Maps - {selectedBranch.name}"
          src={selectedBranch.mapEmbedUrl} 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</div>

<style>
  .branches-view {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 24px;
  }

  .header-card {
    padding: 32px;
    text-align: center;
  }

  .header-card h1 {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .header-card p {
    color: #94a3b8;
    margin-bottom: 24px;
  }

  .branch-tabs {
    display: inline-flex;
    background: rgba(30, 41, 59, 0.8);
    padding: 6px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    gap: 8px;
  }

  .tab-btn {
    padding: 10px 24px;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 600;
    color: #cbd5e1;
    transition: all 0.2s ease;
  }

  .tab-btn.active {
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
  }

  .branch-content-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 28px;
  }

  .branch-info-card {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .branch-info-card h2 {
    font-size: 1.6rem;
    color: #f8fafc;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 12px;
  }

  .info-section h3 {
    font-size: 1.05rem;
    color: #f59e0b;
    margin-bottom: 8px;
  }

  .address-text, .suburban-text {
    font-size: 1rem;
    color: #e2e8f0;
  }

  .bus-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .metro-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .metro-badge {
    padding: 8px 14px;
    background: rgba(30, 41, 59, 0.6);
    border-radius: 6px;
    border-left: 4px solid #2563eb;
    font-size: 0.95rem;
    font-weight: 600;
  }

  .btn-directions {
    width: 100%;
    margin-top: 12px;
  }

  .map-card {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .map-card h3 {
    color: #f8fafc;
    font-size: 1.1rem;
  }

  .iframe-wrapper {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 850px) {
    .branch-content-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
