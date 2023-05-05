<script>
    import {onMount} from 'svelte';
    import {loadTheme} from './lib/theme.js';
    import {Router} from '@roxi/routify';
    import {routes} from '../.routify/routes';

    onMount(() => {
        loadTheme();
    });
</script>

<Router {routes}/>