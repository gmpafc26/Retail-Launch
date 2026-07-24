// Fast product name search - no stock lookup, just names and SKUs
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const token = process.env.LIGHTSPEED_TOKEN;
  if (!token) { res.status(500).json({ error: 'Token not configured' }); return; }

  const query = req.query.q || '';
  if (query.length < 2) { res.status(200).json({ products: [] }); return; }

  const BASE = 'https://portadelaidefc.retail.lightspeed.app/api/2.0';
  const headers = { 'Authorization': `Bearer ${token}` };

  try {
    const r = await fetch(`${BASE}/products?name=${encodeURIComponent(query)}&page_size=25&deleted=false`, { headers });
    if (!r.ok) { const e = await r.text(); res.status(r.status).json({ error: e }); return; }
    const d = await r.json();
    const products = (d.data || d.products || []).map(p => ({
      id: p.id,
      name: p.name,
      sku: p.sku || ''
    }));
    res.status(200).json({ products });
  } catch(e) { res.status(500).json({ error: e.message }); }
}
