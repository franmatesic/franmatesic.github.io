import {writable} from 'svelte/store';

export const runSplash = writable(true);

export const setSplash = () => {
    runSplash.set(false);
    localStorage.splash = new Date().getTime();
};

export const loadSplash = (refreshAfter) => {
    if (!localStorage.splash || localStorage.splash < new Date().getTime() - refreshAfter) {
        return;
    }
    runSplash.set(false);
};