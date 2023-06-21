<script>
    import {goto, params, url} from '@roxi/routify';
    import {tutorials} from '../../lib/tutorials.js';
    import {onMount} from 'svelte';

    let query;

    onMount(() => {
        if (Object.keys($params).length > 0) {
            query = $params.query;
        }
    });

    const search = () => {
        if (!query || query.length === 0) {
            $goto('./');
            return;
        }
        $goto('./', {query: query});
    };

    $: filteredTutorials = $tutorials.filter(t => {
        if (Object.keys($params).length === 0) {
            return true;
        }
        const searchTerm = $params.query.toLowerCase();
        return t.title.toLowerCase().includes(searchTerm) || t.description.toLowerCase().includes(searchTerm) || t.keywords.includes(searchTerm);
    }).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
</script>

<div class="flex flex-col gap-8 mt-12">

  <form on:submit|preventDefault={() => null}>
    <div class="relative">
      <input class="peer w-full p-4 pl-12 text-sm text-dark-light bg-light-light border border-light-dark rounded-lg ring-primary outline-none caret-primary
             dark:border-dark-light dark:bg-dark-dark dark:text-light-dark focus:ring-2"
             name="tutorialsSearch" placeholder="Search" autocomplete="off" bind:value={query} on:input={search}/>

      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none peer-focus:text-primary">
          <span class="material-symbols-outlined">
            search
          </span>
      </div>
    </div>
  </form>

  <div class="flex gap-4">
    {#each filteredTutorials as tutorial}

      <div
        class="bg-light-light dark:bg-dark-dark border border-light-dark dark:border-dark-light hover:border-primary-dark hover:dark:border-primary-light rounded-lg basis-1/3">
        <a class="flex flex-col p-4"
           href={$url(tutorial.key)}>

          <h1 class="mb-2">{tutorial.title}</h1>
          <p class="text-sm mb-4">{new Date(tutorial.date).toLocaleDateString()}</p>

          <img src={`images/tutorials/${tutorial.thumbnail}`} alt="thumbnail"/>

          <p class="italic">{tutorial.description}</p>
        </a>
      </div>


    {/each}
  </div>
</div>
