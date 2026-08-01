<script lang="ts">
  import { currentLang, translations } from '../i18n';

  export let onSelectTab: (tab: string) => void;
  export let onOpenMeeting: () => void;

  $: t = translations[$currentLang];
</script>

<footer class="app-footer">
  <div class="container footer-content">
    <div class="footer-brand">
      <h3>{t.churchName}</h3>
      <p>{t.about.welcomeMsg}</p>
    </div>
    <div class="footer-links">
      <h4>{t.home.quickLinksTitle}</h4>
      <ul>
        <li><button on:click={() => onSelectTab('home')}>{t.nav.home}</button></li>
        <li><button on:click={() => onSelectTab('about')}>{t.nav.about}</button></li>
        <li><button on:click={() => onSelectTab('branches')}>{t.nav.branches}</button></li>
        <li><button on:click={() => onSelectTab('convention')}>{t.nav.convention}</button></li>
        <li><button on:click={() => onSelectTab('member')}>{t.nav.member}</button></li>
        <li><button on:click={() => onSelectTab('contact')}>{t.nav.contact}</button></li>
        <li><button on:click={onOpenMeeting} class="link-meeting">{t.nav.joinMeeting}</button></li>
      </ul>
    </div>
    <div class="footer-contact">
      <h4>{t.contact.title}</h4>
      <p>📍 107, Pantheon Rd, Egmore, Chennai 600008</p>
      <p>📞 <a href="tel:+919841099306">+91 98410 99306</a> ({t.contact.contactPerson})</p>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <p>&copy; {new Date().getFullYear()} Kirubasanam Church of Christ Egmore. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .app-footer {
    background: #090d16;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 48px;
    margin-top: 80px;
    color: #94a3b8;
  }
  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr;
    gap: 40px;
    padding-bottom: 40px;
  }
  .footer-brand h3 {
    color: #f8fafc;
    margin-bottom: 12px;
    font-size: 1.2rem;
  }
  .footer-links h4, .footer-contact h4 {
    color: #f8fafc;
    margin-bottom: 16px;
    font-size: 1.05rem;
  }
  .footer-links ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .footer-links button {
    color: #94a3b8;
    transition: color 0.2s ease;
  }
  .footer-links button:hover {
    color: #60a5fa;
  }
  .link-meeting {
    color: #f59e0b !important;
    font-weight: 600;
  }
  .footer-contact p {
    margin-bottom: 8px;
    font-size: 0.95rem;
  }
  .footer-contact a {
    color: #60a5fa;
  }
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 20px 0;
    text-align: center;
    font-size: 0.85rem;
  }
  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  }
</style>
