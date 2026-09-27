import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { fileURLToPath, URL } from 'node:url';

function audioResolverPlugin() {
  return {
    name: 'audio-resolver-api',
    configureServer(server: any) {
      server.middlewares.use('/api/resolve-audio', async (req: any, res: any) => {
        try {
          const parsedUrl = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`);
          const title = parsedUrl.searchParams.get('title') || '';
          const artist = parsedUrl.searchParams.get('artist') || '';
          const query = `${title} ${artist} official audio`;
          const https = await import('node:https');
          const request = https.get('https://www.youtube.com/results?search_query=' + encodeURIComponent(query), (ytRes) => {
            let data = '';
            ytRes.on('data', (chunk) => { data += chunk; });
            ytRes.on('end', () => {
              const match = data.match(/\/watch\?v=([a-zA-Z0-9_-]{11})/);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ videoId: match ? match[1] : null }));
            });
          });
          request.on('error', () => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ videoId: null }));
          });
        } catch {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ videoId: null }));
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.VITE_ENABLE_SSL === 'true' ? [basicSsl()] : []),
    audioResolverPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5175,
    host: 'localhost',
    strictPort: true,
  },
  test: {
    environment: 'happy-dom',
    globals: true,
  },
});
