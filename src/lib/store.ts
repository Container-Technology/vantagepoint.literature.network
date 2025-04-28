import { writable, type Writable } from 'svelte/store';

export const connectionLoaded: Writable<boolean> = writable(false)

