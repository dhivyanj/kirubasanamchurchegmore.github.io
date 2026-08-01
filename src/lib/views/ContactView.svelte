<script lang="ts">
  import { currentLang, translations } from '../i18n';

  export let onOpenMeeting: () => void;

  $: t = translations[$currentLang];
</script>

<div class="contact-view container fade-in">
  <div class="header-card glass-card">
    <div class="icon">📞</div>
    <h1>{t.contact.title}</h1>
    <p>{t.contact.subtitle}</p>
  </div>

  <div class="contact-grid">
    <!-- Primary Phone Card -->
    <div class="glass-card contact-card highlight-card">
      <h2>{t.contact.contactPerson}</h2>
      <p class="general-text">{t.contact.generalEnquiries}</p>
      
      <div class="phone-box">
        <span class="phone-number">+91 98410 99306</span>
        <a href="tel:+919841099306" class="btn-accent btn-call">
          📞 {t.contact.callNow}
        </a>
      </div>
    </div>

    <!-- Location & Meeting Card -->
    <div class="glass-card contact-card">
      <h2>{t.contact.title} Details</h2>
      <div class="info-item">
        <span class="item-icon">📍</span>
        <div>
          <h4>Kirubasanam Church of Christ Egmore</h4>
          <p>107, Pantheon Rd, Egmore, Chennai, Tamil Nadu 600008</p>
        </div>
      </div>
      
      <div class="info-item">
        <span class="item-icon">🎥</span>
        <div>
          <h4>Online Google Meet</h4>
          <button class="btn-primary" on:click={onOpenMeeting} style="margin-top: 8px;">
            {t.nav.joinMeeting} ➔
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .contact-view {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 24px;
  }

  .header-card {
    padding: 36px 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-card .icon {
    font-size: 3rem;
    margin-bottom: 12px;
  }

  .header-card h1 {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .header-card p {
    color: #94a3b8;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }

  .contact-card {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .highlight-card {
    border-color: rgba(245, 158, 11, 0.4);
  }

  .contact-card h2 {
    font-size: 1.4rem;
    color: #f8fafc;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
  }

  .general-text {
    color: #cbd5e1;
    font-size: 0.98rem;
  }

  .phone-box {
    margin-top: auto;
    background: rgba(30, 41, 59, 0.9);
    border: 1px solid rgba(245, 158, 11, 0.3);
    padding: 16px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .phone-number {
    font-size: 1.2rem;
    font-weight: 800;
    color: #fbbf24;
  }

  .info-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    margin-top: 8px;
  }

  .item-icon {
    font-size: 1.6rem;
  }

  .info-item h4 {
    color: #f8fafc;
    font-size: 1rem;
    margin-bottom: 4px;
  }

  .info-item p {
    color: #94a3b8;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
