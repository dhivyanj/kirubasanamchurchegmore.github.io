<script lang="ts">
  import { currentLang, translations } from '../i18n';

  $: t = translations[$currentLang];
</script>

<div class="member-view container fade-in">
  <div class="header-card glass-card">
    <div class="icon">✉️</div>
    <h1>{t.member.title}</h1>
    <p>{t.member.description}</p>
  </div>

  <div class="forms-grid">
    <!-- Tamil Form Card -->
    <div class="glass-card form-card">
      <span class="lang-tag">தமிழ்</span>
      <h3>{t.member.headingTa}</h3>
      <a 
        href="https://forms.gle/k95T9hvQ6dWrVQ3z7" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-accent btn-form">
        📝 {t.member.taFormBtn} ➔
      </a>
    </div>

    <!-- English Form Card -->
    <div class="glass-card form-card">
      <span class="lang-tag">English</span>
      <h3>{t.member.headingEn}</h3>
      <a 
        href="https://forms.gle/RD6DnjDL8BwxuzJdA" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-primary btn-form">
        📝 {t.member.enFormBtn} ➔
      </a>
    </div>
  </div>
</div>

<style>
  .member-view {
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
    font-size: 1.8rem;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .header-card p {
    color: #94a3b8;
    max-width: 600px;
  }

  .forms-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }

  .form-card {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }

  .lang-tag {
    align-self: flex-start;
    padding: 4px 12px;
    border-radius: 999px;
    background: rgba(37, 99, 235, 0.2);
    border: 1px solid #2563eb;
    color: #60a5fa;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .form-card h3 {
    font-size: 1.05rem;
    color: #f8fafc;
    line-height: 1.6;
  }

  .btn-form {
    margin-top: auto;
    width: 100%;
  }

  @media (max-width: 768px) {
    .forms-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
