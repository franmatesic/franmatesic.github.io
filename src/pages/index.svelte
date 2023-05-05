<script>
    import SplashLogo from '../components/SplashLogo.svelte';
</script>

<div class="flex justify-center mt-6 text-dark dark:text-light transition-all">

  <div class="flex self-center flex-col w-64 gap-4 mt-32">
    <SplashLogo/>
  </div>

  <!--  <div class="fixed flex gap-32 mb-32 self-end">-->
  <!--    <a class="rounded-3xl hover:bg-primary-lighter dark:hover:bg-primary-darker hover:shadow-lg"-->
  <!--       href="https://www.linkedin.com/in/franmatesic" target="_blank">-->
  <!--      <img src={linkedinIcon} alt="Linkedin link"/>-->
  <!--    </a>-->
  <!--    <a class="rounded-full hover:bg-primary-lighter dark:hover:bg-primary-darker hover:shadow-lg"-->
  <!--       href="https://github.com/franmatesic" target="_blank">-->
  <!--      <img src={githubIcon} alt="Github link"/>-->
  <!--    </a>-->
  <!--  </div>-->

  <!--  <div class="fixed -top-6 -left-6">-->
  <!--    <div class="opacity-10 hover:opacity-80 p-8">-->
  <!--      <button class="grid place-items-center bg-primary dark:bg-primary-light rounded-full w-14 h-14" on:click={switchTheme}>-->
  <!--        <span class="material-symbols-outlined text-light text-4xl">{$darkTheme ? 'light_mode' : 'dark_mode'}</span>-->
  <!--      </button>-->
  <!--    </div>-->
  <!--  </div>-->
</div>