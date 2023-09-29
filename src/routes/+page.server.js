import { error } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const post = await api.readArticle(params.slug);

	if (post) {
		return post;
	}

	throw error(404, 'Not found');
}