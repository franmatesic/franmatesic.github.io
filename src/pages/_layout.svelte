<script>
    import {url} from '@roxi/routify';
</script>

<nav class="flex gap-6 p-6 text-xl bg-light">
  <a href={$url('./')}>Home</a>
  <a href={$url('./tutorials')}>Tutorials</a>
</nav>

<slot></slot>