import {writable} from 'svelte/store';

export const runSplash = writable(true);

export const setSplash = () => {
    runSplash.set(false);
    localStorage.splash = new Date().getTime();
};

export const loadSplash = () => {
    if (!localStorage.splash || localStorage.splash < new Date().getTime() - 86400000) {
        return;
    }
    runSplash.set(false);
};