<script>
    import {onMount} from 'svelte';
    import {darkTheme, loadTheme, switchTheme} from './lib/theme.js';
    import Logo from './components/Logo.svelte';
    import linkedinIcon from './assets/icons8-linkedin-144.png';
    import githubIcon from './assets/icons8-github-144.png';

    onMount(() => {
        loadTheme();
    });
</script>

<div class="flex justify-center h-full bg-light dark:bg-dark text-dark dark:text-light transition-all">

  <div class="flex self-center flex-col gap-4">
    <Logo/>
    <span class="border-t-2 border-primary dark:divide-primary-light"></span>
    <span class="font-bold text-4xl">Fran Matešić</span>
  </div>

  <div class="fixed self-center -mt-32">

    <span class="select-none opacity-10 font-imbue text-[720px]">Soon</span>
  </div>

  <div class="fixed flex gap-32 mb-32 self-end">
    <a class="rounded-3xl hover:bg-primary-lighter dark:hover:bg-primary-darker hover:shadow-lg"
       href="https://www.linkedin.com/in/franmatesic" target="_blank">
      <img src={linkedinIcon} alt="Linkedin link"/>
    </a>
    <a class="rounded-full hover:bg-primary-lighter dark:hover:bg-primary-darker hover:shadow-lg"
       href="https://github.com/franmatesic" target="_blank">
      <img src={githubIcon} alt="Github link"/>
    </a>
  </div>

  <div class="fixed -top-6 -left-6">
    <div class="opacity-10 hover:opacity-80 p-8">
      <button class="grid place-items-center bg-primary dark:bg-primary-light rounded-full w-14 h-14" on:click={switchTheme}>
        <span class="material-symbols-outlined text-light text-4xl">{$darkTheme ? 'light_mode' : 'dark_mode'}</span>
      </button>
    </div>
  </div>
</div>



