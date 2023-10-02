import { error } from '@sveltejs/kit';

export function GET({ url }) {
	throw error(400, 'Are you in the right place?');
}
