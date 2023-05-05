<script>
    import {url} from '@roxi/routify';
    import {onMount} from 'svelte';

    let tutorials = [];

    onMount(() => loadTutorials());

    const loadTutorials = () => {
        const files = import.meta.glob('./*.svx');

        for (const key of Object.keys(files)) {
            files[key]().then(module => {
                const tutorial = Object.assign(module.metadata, {key: key.replace('.svx', '')});
                tutorials = [...tutorials, tutorial];
            });
        }
    };
</script>

<div class="p-12">
  <div class="grid grid-cols-3 gap-4">
    {#each tutorials as tutorial}

      <a href={$url(tutorial.key)} class="flex flex-col bg-light border-2 border-primary rounded-lg p-4 pb-2 shadow-lg hover:bg-light-light">
        <h1 class="text-center mb-12">{tutorial.title}</h1>
        <p class="text-xl text-center mb-12">{tutorial.description}</p>

        <p class="text-end">{tutorial.author}</p>
        <p class="text-end">{tutorial.date}</p>
      </a>

    {/each}
  </div>
</div>