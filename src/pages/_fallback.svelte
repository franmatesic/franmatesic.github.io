<script>
    import {metatags, url} from '@roxi/routify';

    metatags.title = '404';
</script>

<div class="h-4/5 grid place-items-center">
  <div class="flex flex-col gap-4 text-center">
    <span class="text-4xl">Page not found.</span>
    <a class="text-2xl text-primary font-semibold" href={$url('/')}>Return home</a>
  </div>
</div>