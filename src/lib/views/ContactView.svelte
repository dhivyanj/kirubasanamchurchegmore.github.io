<script lang="ts">
  import { currentLang, translations } from '../i18n';

  $: t = translations[$currentLang];
</script>

<div class="contact-view container fade-in">
  <div class="glass-card contact-card">
    <h2>{t.contact.title}</h2>
    <div class="contact-info">
      <span>{t.contact.contactPerson} - </span>
      <a href="tel:{t.contact.phone}" class="phone-link">{t.contact.phone}</a>
    </div>
  </div>
</div>

<style>
  .contact-view {
    padding-top: 32px;
    max-width: 600px;
  }

  .contact-card {
    padding: 32px;
    border-left: 4px solid #2563eb;
  }

  .contact-card h2 {
    font-size: 1.6rem;
    color: #f8fafc;
    margin-bottom: 16px;
  }

  .contact-info {
    font-size: 1.2rem;
    color: #e2e8f0;
  }

  .phone-link {
    color: #60a5fa;
    text-decoration: underline;
    font-weight: 600;
  }

  .phone-link:hover {
    color: #93c5fd;
  }
</style>
