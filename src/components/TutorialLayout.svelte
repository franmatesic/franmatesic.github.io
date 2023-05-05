<script>

    export let title;
    export let author;
    export let date;
    export let description;
</script>

<div class="flex justify-center">

  <div class="bg-light-dark px-8 py-4">

    <div class="text-center">
      <span class="text-4xl font-bold">{title}</span>

      <div class="mt-2">
        <p>{author}</p>
        <p>{date}</p>
      </div>
    </div>

    <div class="mt-8">
      <slot/>
    </div>
  </div>
</div>