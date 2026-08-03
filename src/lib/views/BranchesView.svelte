<script lang="ts">
  import { currentLang, translations } from '../i18n';

  $: t = translations[$currentLang];
</script>

<div class="branches-view container fade-in">
  <h1>{t.branches.title}</h1>

  <!-- Egmore Branch -->
  <fieldset class="glass-card branch-fieldset" id="egmore">
    <legend class="fieldset-legend">{t.branches.egmore.name}</legend>
    <div class="branch-grid">
      <div class="info-col">
        <h3>{t.branches.addressLabel}</h3>
        <p class="address">{t.branches.egmore.address}</p>

        <h3>{t.branches.transitLabel}</h3>
        
        <h4>{t.branches.mtcLabel}</h4>
        <div class="bus-list">
          {#each t.branches.egmore.mtc as bus}
            <span class="bus-item">{bus}</span>
          {/each}
        </div>

        <h4>{t.branches.suburbanLabel}</h4>
        <p>{t.branches.egmore.suburban}</p>

        <h4>{t.branches.metroLabel}</h4>
        <div class="metro-list">
          {#each t.branches.egmore.metro as metro}
            <div class="metro-item" style="color: {metro.color}">
              {metro.line}
            </div>
          {/each}
        </div>

        <br>
        <a 
          href={t.branches.egmore.directionsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-primary link-directions">
          {t.branches.egmore.directionsLabel}
        </a>
      </div>

      <div class="map-col">
        <iframe 
          title="Egmore Map"
          src={t.branches.egmore.mapEmbedUrl} 
          width="100%" 
          height="280px" 
          style="border:0; border-radius: 8px;" 
          allowfullscreen={true} 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </fieldset>

  <!-- Manappakkam Branch -->
  <fieldset class="glass-card branch-fieldset" id="manappakkam">
    <legend class="fieldset-legend">{t.branches.manappakkam.name}</legend>
    <div class="branch-grid">
      <div class="info-col">
        <h3>{t.branches.addressLabel}</h3>
        <p class="address">{t.branches.manappakkam.address}</p>

        <h3>{t.branches.transitLabel}</h3>
        
        <h4>{t.branches.mtcLabel}</h4>
        <div class="bus-list">
          {#each t.branches.manappakkam.mtc as bus}
            <span class="bus-item">{bus}</span>
          {/each}
        </div>

        <h4>{t.branches.suburbanLabel}</h4>
        <p>{t.branches.manappakkam.suburban}</p>

        <h4>{t.branches.metroLabel}</h4>
        <div class="metro-list">
          {#each t.branches.manappakkam.metro as metro}
            <div class="metro-item" style="color: {metro.color}">
              <i>{metro.line}</i>
            </div>
          {/each}
        </div>

        <br>
        <a 
          href={t.branches.manappakkam.directionsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-primary link-directions">
          {t.branches.manappakkam.directionsLabel}
        </a>
      </div>

      <div class="map-col">
        <iframe 
          title="Manappakkam Map"
          src={t.branches.manappakkam.mapEmbedUrl} 
          width="100%" 
          height="280px" 
          style="border:0; border-radius: 8px;" 
          allowfullscreen={true} 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </fieldset>
</div>

<style>
  .branches-view {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 24px;
  }

  .branches-view h1 {
    font-size: 2rem;
    color: #ffffff;
  }

  .branch-fieldset {
    padding: 24px 28px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
  }

  .fieldset-legend {
    padding: 0 12px;
    font-size: 1.3rem;
    font-weight: 700;
    color: #f59e0b;
  }

  .branch-grid {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 32px;
  }

  .info-col h3 {
    font-size: 1.1rem;
    color: #f8fafc;
    margin-top: 12px;
    margin-bottom: 4px;
  }

  .info-col h4 {
    font-size: 0.95rem;
    color: #94a3b8;
    margin-top: 8px;
    margin-bottom: 2px;
  }

  .address {
    color: #e2e8f0;
    margin-bottom: 12px;
  }

  .bus-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }

  .bus-item {
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.88rem;
    color: #60a5fa;
  }

  .metro-item {
    font-weight: 600;
    margin-bottom: 4px;
  }

  .link-directions {
    display: inline-block;
    margin-top: 12px;
  }

  .map-col {
    display: flex;
    align-items: center;
  }

  @media (max-width: 800px) {
    .branch-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
