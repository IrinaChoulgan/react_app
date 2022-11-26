const BASE_URL = 'http://localhost:8000';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

export default function fetchUsers() {
  return fetchWithErrorHandling(`${BASE_URL}/users`);
}
