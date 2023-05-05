<script>
    export let title = 'Code';
    let code;
</script>

<div bind:this={code} class="flex flex-col rounded-b-lg my-4">

  <div class="flex justify-between bg-dark py-2 px-4 text-light rounded-t-lg">
    <span>{title}</span>
    <span>copy</span>
  </div>

  <slot/>
</div>