import { Deta } from 'deta';

const deta = Deta('your_deta_space_key');
const db = deta.Base('posts');

export async function _get() {
  const posts = await db.fetch({}).next();
  return { body: posts };
}

export async function _post(req) {
  const post = await db.put(JSON.parse(req.body));
  return { body: post };
}
