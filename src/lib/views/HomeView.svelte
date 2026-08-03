<script lang="ts">
  import { onMount } from 'svelte';
  import { currentLang, translations } from '../i18n';

  $: t = translations[$currentLang];

  interface AnnouncementItem {
    text: string;
    href?: string;
  }

  let announcements: AnnouncementItem[] = [];
  let loading = true;

  async function fetchAnnouncements() {
    try {
      const res = await fetch('announcements.md');
      if (res.ok) {
        const text = await res.text();
        announcements = parseMarkdownList(text);
      }
    } catch (err) {
      console.error('Failed to load announcements:', err);
    } finally {
      loading = false;
    }
  }

  function parseMarkdownList(md: string): AnnouncementItem[] {
    const lines = md.split('\n');
    const items: AnnouncementItem[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const content = trimmed.substring(2).trim();
        // Match [text](url)
        const match = content.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          items.push({ text: match[1], href: match[2] });
        } else {
          items.push({ text: content });
        }
      }
    }
    return items;
  }

  onMount(() => {
    fetchAnnouncements();
  });
</script>

<div class="home-view container fade-in">
  <div class="glass-card updates-card">
    <h2>{t.home.updatesTitle}</h2>
    
    {#if loading}
      <p class="loading-text">Loading updates...</p>
    {:else if announcements.length === 0}
      <p class="no-updates">No updates currently available.</p>
    {:else}
      <ul class="announcement-list">
        {#each announcements as item}
          <li class="announcement-item">
            {#if item.href}
              <a href={item.href} class="announcement-link">
                {item.text}
              </a>
            {:else}
              <span>{item.text}</span>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style>
  .home-view {
    padding-top: 32px;
    max-width: 800px;
  }

  .updates-card {
    padding: 32px;
    border-left: 4px solid #2563eb;
  }

  .updates-card h2 {
    font-size: 1.6rem;
    color: #f8fafc;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 12px;
  }

  .announcement-list {
    list-style: disc;
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .announcement-item {
    font-size: 1.1rem;
    color: #e2e8f0;
  }

  .announcement-link {
    color: #60a5fa;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.2s ease;
  }

  .announcement-link:hover {
    color: #93c5fd;
  }

  .loading-text, .no-updates {
    color: #94a3b8;
    font-style: italic;
  }
</style>
