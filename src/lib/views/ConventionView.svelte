<script lang="ts">
  import { onMount } from 'svelte';
  import { currentLang, translations } from '../i18n';

  export let onSelectTab: (tab: string) => void;

  $: t = translations[$currentLang];

  interface ConventionData {
    titleEn: string;
    titleTa: string;
    getDirectionsUrl: string;
    songSheetPdf: string;
    contactPhone: string;
    bannerImage: string;
  }

  let data: ConventionData = {
    titleEn: "Aavikkurriya Viseshittha Kootangal 2026",
    titleTa: "ஆவிக்குரிய விசேஷித்த கூட்டங்கள் 2026",
    getDirectionsUrl: "https://maps.app.goo.gl/hrA73TVBYQ5VbPLB7",
    songSheetPdf: "convention/AVKF2025SS.pdf",
    contactPhone: "+919841099306",
    bannerImage: "convention/avk2025feb.jpg"
  };

  let loading = true;

  function cleanPath(path: string): string {
    if (!path) return '';
    return path.replace(/^public\//, '');
  }

  async function loadConventionData() {
    try {
      const res = await fetch('convention.json');
      if (res.ok) {
        const json = await res.json();
        data = { ...data, ...json };
      }
    } catch (err) {
      console.error('Failed to load convention.json:', err);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadConventionData();
  });
</script>

<div class="convention-view container fade-in">
  <div class="glass-card convention-card">
    <div class="title-box">
      <h1>{$currentLang === 'en' ? data.titleEn : data.titleTa}</h1>
    </div>

    <div class="links-box">
      {#if data.getDirectionsUrl}
        <a href={data.getDirectionsUrl} target="_blank" rel="noopener noreferrer" class="link-btn btn-primary">
          🗺️ {t.convention.getDirections}
        </a>
      {/if}

      <button class="link-btn btn-outline" on:click={() => onSelectTab('branches')}>
        📍 {t.convention.detailedDirections}
      </button>

      {#if data.songSheetPdf}
        <a href={cleanPath(data.songSheetPdf)} download class="link-btn btn-accent">
          📄 {t.convention.downloadSongSheet}
        </a>
      {/if}

      {#if data.contactPhone}
        <a href="tel:{data.contactPhone}" class="link-btn btn-outline">
          📞 {t.convention.contactUs}
        </a>
      {/if}
    </div>

    {#if data.bannerImage}
      <div class="banner-box">
        <img src={cleanPath(data.bannerImage)} alt="Convention Banner" class="banner-img" />
      </div>
    {/if}
  </div>
</div>

<style>
  .convention-view {
    padding-top: 32px;
    max-width: 800px;
  }

  .convention-card {
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
  }

  .title-box h1 {
    font-size: 1.8rem;
    color: #ffffff;
    line-height: 1.3;
  }

  .links-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 380px;
  }

  .link-btn {
    width: 100%;
    padding: 12px 18px;
    font-size: 1rem;
    text-align: center;
  }

  .banner-box {
    margin-top: 12px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .banner-img {
    max-width: 100%;
    height: auto;
    max-height: 500px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }
</style>
