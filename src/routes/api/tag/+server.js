import { json, error } from '@sveltejs/kit';

export function POST({ request }) {
	const tag = request.body.get('tag');
	const d = max - min;

	if (isNaN(d) || d < 0) {
		throw error(400, 'min and max must be numbers, and min must be less than max');
	}
	const random = min + Math.random() * d;
	return new Response(String(random));
}
