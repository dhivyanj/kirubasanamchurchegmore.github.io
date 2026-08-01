<script lang="ts">
  import { currentLang, translations } from '../i18n';

  export let isOpen: boolean = false;
  export let onClose: () => void;

  $: t = translations[$currentLang];
  const meetUrl = "https://meet.google.com/bgf-wkih-eqx";
  let copied = false;

  function copyLink() {
    navigator.clipboard.writeText(meetUrl);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

{#if isOpen}
  <div 
    class="modal-backdrop fade-in" 
    on:click={onClose}>
    <div class="modal-card glass-card">
      <button class="close-btn" on:click={onClose}>✕</button>
      
      <div class="modal-header">
        <span class="icon-camera">🎥</span>
        <h2>{t.meetingModal.title}</h2>
      </div>

      <p class="modal-desc">{t.meetingModal.description}</p>

      <div class="url-box">
        <code>{meetUrl}</code>
        <button class="btn-copy" on:click={copyLink}>
          {copied ? t.meetingModal.copied : t.meetingModal.copyBtn}
        </button>
      </div>

      <div class="modal-actions">
        <a href={meetUrl} target="_blank" rel="noopener noreferrer" class="btn-primary btn-join">
          {t.meetingModal.joinBtn} ➔
        </a>
        <button class="btn-outline" on:click={onClose}>
          {t.meetingModal.close}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .modal-card {
    position: relative;
    max-width: 480px;
    width: 100%;
    padding: 32px;
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(59, 130, 246, 0.3);
    text-align: center;
  }

  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 1.2rem;
    color: #94a3b8;
  }

  .icon-camera {
    font-size: 3rem;
    display: block;
    margin-bottom: 12px;
  }

  .modal-header h2 {
    font-size: 1.4rem;
    color: #f8fafc;
    margin-bottom: 12px;
  }

  .modal-desc {
    color: #cbd5e1;
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  .url-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px 14px;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  .url-box code {
    color: #60a5fa;
    font-size: 0.9rem;
  }

  .btn-copy {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 0.8rem;
    padding: 4px 10px;
    border-radius: 4px;

  }

  .modal-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
  }

  .btn-join {
    flex: 1;
  }
</style>
