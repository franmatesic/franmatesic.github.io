import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {mdsvex} from 'mdsvex';

export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    extensions: [
        '.svelte',
        '.svx',
        '.md'
    ],
    preprocess: [
        vitePreprocess(),
        mdsvex({
            layout: './src/components/TutorialLayout.svelte',
            extensions: [
                '.svx',
                '.md'
            ]
        })
    ]
};
