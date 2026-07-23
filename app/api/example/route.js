import { listRecords, configured } from '@/lib/airtable';

// Example data route. Reads rows from your Airtable table (AIRTABLE_TABLE).
// Before Airtable is connected, it returns demo data so the app still runs.
// Copy/rename this file for each real data endpoint you need.
export async function GET() {
  if (!configured) {
    return Response.json({
      demo: true,
      items: [
        { id: 'demo1', name: 'Example item A' },
        { id: 'demo2', name: 'Example item B' },
      ],
    });
  }
  try {
    const table = process.env.AIRTABLE_TABLE || 'Items';
    const data = await listRecords(table, 'maxRecords=10');
    const items = (data.records || []).map((r) => ({ id: r.id, ...r.fields }));
    return Response.json({ items });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
