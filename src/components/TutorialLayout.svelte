<script>
    export let title;
    export let author;
    export let date;
    export let description;
    export let thumbnail;
    export let keywords;
</script>

<div class="bg-light-dark dark:bg-dark-light py-6 px-12 mt-12">

  <div class="text-center">
    <span class="text-4xl font-bold">{title}</span>

    <div class="mt-2">
      {new Date(date).toLocaleDateString()}
    </div>

    <div class="mt-4">
      {description}
    </div>
  </div>

  <div class="mt-8">
    <slot/>
  </div>
</div>