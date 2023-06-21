import {writable} from 'svelte/store';

export const runSplash = writable(false);

export const setSplash = () => {
    runSplash.set(false);
    localStorage.splash = new Date().getTime();
};

export const loadSplash = (refreshAfter) => {
    if (!localStorage.splash || localStorage.splash < new Date().getTime() - refreshAfter) {
        runSplash.set(true);
        return;
    }
    runSplash.set(false);
};
