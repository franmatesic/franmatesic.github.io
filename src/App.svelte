<script>
    import {onMount} from 'svelte';
    import {loadTheme} from './lib/theme.js';
    import {Router} from '@roxi/routify';
    import {routes} from '../.routify/routes';
    import {loadSplash} from './lib/splash.js';
    import {loadTutorials} from './lib/tutorials.js';

    onMount(() => {
        loadTheme();
        loadTutorials();
        loadSplash(3600000);
    });
</script>

<Router {routes}/>
