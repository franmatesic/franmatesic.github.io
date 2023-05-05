<script>
    import {onMount} from 'svelte';
    import {loadTheme} from './lib/theme.js';
    import {Router} from '@roxi/routify';
    import {routes} from '../.routify/routes';
    import {loadSplash} from './lib/splash.js';

    onMount(() => {
        loadTheme();
        loadSplash();
    });
</script>

<Router {routes}/>