<script>
    import {page, url} from '@roxi/routify';
    import {darkTheme, switchTheme} from '../lib/theme.js';
    import Logo from '../components/Logo.svelte';
    import {runSplash} from '../lib/splash.js';
    import SplashLogo from '../components/SplashLogo.svelte';

    $: linkEquals = href => {
        const link = href.length > 1 ? href.substring(1).concat('/index') : '/index';
        return $page.path === link;
    };

    const links = [
        {name: 'Home', link: '/'},
        {name: 'Tutorials', link: './tutorials'}
    ];
</script>

<style>
    .active {
        @apply text-primary-light font-semibold;
    }
</style>

<div class="h-full bg-light dark:bg-dark text-dark dark:text-light-dark transition-colors">

  <nav class="px-6 py-3 bg-light-light dark:bg-dark-dark shadow overflow-visible relative select-none">

    <div class="flex items-center gap-10 mx-auto max-w-5xl">
      {#each links as link}
        <a class:active={linkEquals(link.link)}
           class="flex hover:text-dark-lighter dark:hover:text-light-darker"
           href={$url(link.link)}>
          {link.name}
        </a>
      {/each}

      <div class="ms-auto">
        <button class="grid place-items-center w-10 h-10 rounded-full hover:bg-dark/10 dark:hover:bg-light/10" on:click={switchTheme}>
        <span class="material-symbols-outlined">
          {$darkTheme ? 'light_mode' : 'dark_mode'}
        </span>
        </button>
      </div>
    </div>

    <div class="absolute left-1/2 -translate-x-1/2 top-2 flex gap-2 items-center text-xl font-semibold font-castoro">
      <span>Fran</span>
      <div id="layoutNavLogo" class="w-20 h-20 border-2 rounded-lg" class:border-none={!$runSplash}>
        <div class="p-4 bg-primary rounded-lg dark:bg-primary-dark" class:hidden={$runSplash}>
          <a class="fill-light" href={$url('./')}>
            <Logo/>
          </a>
        </div>
      </div>
      <span>Matešić</span>
    </div>

  </nav>

  <SplashLogo/>

  <div class="px-4 mx-auto max-w-5xl">
    <slot/>
  </div>
</div>
