import {get, writable} from 'svelte/store';

export const darkTheme = writable(false);

export const switchTheme = () => {
    darkTheme.update(dark => !dark);
    saveLocal();
    setDocument();
};

export const loadTheme = () => {
    darkTheme.set(loadLocal());
    setDocument();
};

const loadLocal = () => localStorage.darkTheme === 'true';

const saveLocal = () => localStorage.darkTheme = get(darkTheme);

const setDocument = () => document.querySelector('html').className = get(darkTheme) ? 'dark' : '';