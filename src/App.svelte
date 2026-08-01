<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from './lib/components/Navbar.svelte';
  import Footer from './lib/components/Footer.svelte';
  import JoinMeetingModal from './lib/components/JoinMeetingModal.svelte';

  import HomeView from './lib/views/HomeView.svelte';
  import AboutView from './lib/views/AboutView.svelte';
  import BranchesView from './lib/views/BranchesView.svelte';
  import ConventionView from './lib/views/ConventionView.svelte';
  import MemberView from './lib/views/MemberView.svelte';
  import ContactView from './lib/views/ContactView.svelte';

  let activeTab = 'home';
  let meetingModalOpen = false;

  function parseHash() {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (['home', 'about', 'branches', 'convention', 'member', 'contact'].includes(hash)) {
      activeTab = hash;
    } else {
      activeTab = 'home';
    }
  }

  function handleSelectTab(tab: string) {
    activeTab = tab;
    window.location.hash = `#/${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => {
      window.removeEventListener('hashchange', parseHash);
    };
  });
</script>

<div class="app-shell">
  <!-- Sticky Glass Navbar -->
  <Navbar 
    {activeTab} 
    onSelectTab={handleSelectTab} 
    onOpenMeeting={() => meetingModalOpen = true} 
  />

  <!-- Main View Container -->
  <main class="main-content">
    {#if activeTab === 'home'}
      <HomeView onSelectTab={handleSelectTab} onOpenMeeting={() => meetingModalOpen = true} />
    {:else if activeTab === 'about'}
      <AboutView onSelectTab={handleSelectTab} />
    {:else if activeTab === 'branches'}
      <BranchesView />
    {:else if activeTab === 'convention'}
      <ConventionView onSelectTab={handleSelectTab} />
    {:else if activeTab === 'member'}
      <MemberView />
    {:else if activeTab === 'contact'}
      <ContactView onOpenMeeting={() => meetingModalOpen = true} />
    {/if}
  </main>

  <!-- Google Meet Dialog Modal -->
  <JoinMeetingModal 
    isOpen={meetingModalOpen} 
    onClose={() => meetingModalOpen = false} 
  />

  <!-- Footer -->
  <Footer 
    onSelectTab={handleSelectTab} 
    onOpenMeeting={() => meetingModalOpen = true} 
  />
</div>

<style>
  .app-shell {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
    padding-bottom: 60px;
  }
</style>
