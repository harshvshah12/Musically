import https from 'node:https';

export default async function handler(req: any, res: any) {
  try {
    const host = req.headers?.host || 'localhost';
    const parsedUrl = new URL(req.url || '', `https://${host}`);
    const title = parsedUrl.searchParams.get('title') || '';
    const artist = parsedUrl.searchParams.get('artist') || '';
    const query = `${title} ${artist} official audio`.trim();

    if (!query) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ videoId: null }));
      return;
    }

    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

    https.get(
      searchUrl,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept-Language': 'en-US,en;q=0.9',
        },
      },
      (ytRes) => {
        let data = '';
        ytRes.on('data', (chunk) => {
          data += chunk;
        });
        ytRes.on('end', () => {
          const match = data.match(/\/watch\?v=([a-zA-Z0-9_-]{11})/);
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
          res.end(JSON.stringify({ videoId: match ? match[1] : null }));
        });
      }
    ).on('error', () => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ videoId: null }));
    });
  } catch {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ videoId: null }));
  }
}
