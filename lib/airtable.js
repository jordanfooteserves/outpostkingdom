// Minimal Airtable REST helper (no SDK needed — uses fetch).
// All calls run server-side only, so your token is never exposed to the browser.
// If you don't need a database for this project, you can delete this file
// and the app/api folder.

const BASE = process.env.AIRTABLE_BASE_ID;
const TOKEN = process.env.AIRTABLE_API_TOKEN;
const API = 'https://api.airtable.com/v0';

// True once you've filled in .env.local. Until then, API routes can serve
// demo data so the app still runs out-of-the-box.
export const configured = Boolean(BASE && TOKEN);

async function at(path, options = {}) {
  const res = await fetch(`${API}/${BASE}/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Airtable ${res.status}: ${text}`);
  }
  return res.json();
}

export function listRecords(table, query = '') {
  const q = query ? `?${query}` : '';
  return at(`${encodeURIComponent(table)}${q}`);
}

export function createRecord(table, fields) {
  return at(encodeURIComponent(table), {
    method: 'POST',
    body: JSON.stringify({ fields }),
  });
}

export function updateRecord(table, id, fields) {
  return at(`${encodeURIComponent(table)}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ fields }),
  });
}

export async function findByField(table, field, value) {
  const formula = encodeURIComponent(`{${field}}='${value}'`);
  const data = await listRecords(table, `filterByFormula=${formula}&maxRecords=1`);
  return data.records && data.records[0] ? data.records[0] : null;
}
