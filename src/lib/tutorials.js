import {writable} from 'svelte/store';

export const tutorials = writable([]);

export const loadTutorials = () => {
    const files = import.meta.glob('../pages/tutorials/*.svx');

    let allTutorials = [];
    for (const key of Object.keys(files)) {
        files[key]().then(module => {
            const url = key.replace('../pages/', '').replace('.svx', '');
            const tutorial = Object.assign(module.metadata, {key: url});
            allTutorials.push(tutorial);
        });
    }
    tutorials.set(allTutorials);
};