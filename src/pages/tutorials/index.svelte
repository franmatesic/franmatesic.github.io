<script>
    import {params, url} from '@roxi/routify';
    import {onMount} from 'svelte';

    let allTutorials = [];
    let search = '';

    onMount(() => loadTutorials());

    const loadTutorials = () => {
        const files = import.meta.glob('./*.svx');

        for (const key of Object.keys(files)) {
            files[key]().then(module => {
                const tutorial = Object.assign(module.metadata, {key: key.replace('.svx', '')});
                allTutorials = [...allTutorials, tutorial];
            });
        }
    };

    //TODO query params with dynamic search
    $: console.log($params);

    $: tutorials = allTutorials.filter(t => {
        const searchTerm = search.toLowerCase();
        const keywords = t.keywords.toLowerCase().split(',');
        return t.title.toLowerCase().includes(searchTerm) || t.description.toLowerCase().includes(searchTerm) || keywords.includes(searchTerm);
    }).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
</script>

<div class="flex flex-col gap-8 p-8">

  <div class="relative">
    <input
      class="peer w-full p-4 pl-12 text-sm text-dark-light bg-light-light border border-light-dark rounded-lg ring-primary outline-none caret-primary
      dark:border-dark-light dark:bg-dark-dark focus:ring-2"
      placeholder="Search..." bind:value={search}/>

    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none peer-focus:text-primary">
          <span class="material-symbols-outlined">
            search
          </span>
    </div>
  </div>

  <div class="flex gap-4">
    {#each tutorials as tutorial}

      <a class="flex flex-col bg-light-light dark:bg-dark-dark border border-light-dark dark:border-dark-light rounded-lg p-4 basis-1/3"
         href={$url(tutorial.key)}>

        <h1 class="mb-2">{tutorial.title}</h1>
        <p class="text-sm mb-4">{new Date(tutorial.date).toLocaleDateString()}</p>

        <img src={`images/tutorials/${tutorial.thumbnail}`} alt="thumbnail"/>

        <p class="italic">{tutorial.description}</p>
      </a>

    {/each}
  </div>
</div>