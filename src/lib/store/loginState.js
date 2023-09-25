import { writable } from 'svelte/store';

export const loginState = writable({
	isLoggedIn: false,
	user: null,
});
