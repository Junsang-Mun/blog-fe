export async function _createArticle(article) {
  fetch(`${import.meta.env.VITE_API_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(article),
    'X-API-KEY': import.meta.env.VITE_X_API_KEY,
  })
}

export async function _readArticle(key) {
  fetch(`${import.meta.env.VITE_API_URL}/items/${key}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    'X-API-KEY': import.meta.env.VITE_X_API_KEY,
  })
}

export async function _updateArticle(article) {
  fetch(`${import.meta.env.VITE_API_URL}/items`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(article),
    'X-API-KEY': import.meta.env.VITE_X_API_KEY,
  })
}

export async function _deleteArticle(article) {
  fetch(`${import.meta.env.VITE_API_URL}/items`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(article),
    'X-API-KEY': import.meta.env.VITE_X_API_KEY,
  })
}
