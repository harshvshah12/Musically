/**
 * ColorExtractor
 * Samples album artwork using HTML5 Offscreen/In-Memory Canvas
 * Extracts dominant palette colors and dynamically applies CSS root variables for ambient lighting.
 */

export interface ExtractedPalette {
  dominant: string;
  rgb: string;
  glow: string;
  subtle: string;
  isLight: boolean;
}

const DEFAULT_PALETTE: ExtractedPalette = {
  dominant: '#f43f5e',
  rgb: '244, 63, 94',
  glow: 'rgba(244, 63, 94, 0.45)',
  subtle: 'rgba(244, 63, 94, 0.12)',
  isLight: false
};

const paletteCache = new Map<string, ExtractedPalette>();

export async function extractColorFromImage(imageUrl: string): Promise<ExtractedPalette> {
  if (!imageUrl) return DEFAULT_PALETTE;
  if (paletteCache.has(imageUrl)) {
    return paletteCache.get(imageUrl)!;
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(DEFAULT_PALETTE);
          return;
        }

        canvas.width = 64;
        canvas.height = 64;
        ctx.drawImage(img, 0, 0, 64, 64);

        const imageData = ctx.getImageData(0, 0, 64, 64).data;
        let r = 0, g = 0, b = 0, count = 0;
        let maxSaturation = 0;
        let vibrantR = 244, vibrantG = 63, vibrantB = 94;

        for (let i = 0; i < imageData.length; i += 16) {
          const pr = imageData[i];
          const pg = imageData[i + 1];
          const pb = imageData[i + 2];
          const pa = imageData[i + 3];

          if (pa < 128) continue;

          // Exclude extreme dark or bright white
          const brightness = (pr * 299 + pg * 587 + pb * 114) / 1000;
          if (brightness > 20 && brightness < 235) {
            r += pr;
            g += pg;
            b += pb;
            count++;

            // Calculate approximate saturation
            const max = Math.max(pr, pg, pb);
            const min = Math.min(pr, pg, pb);
            const sat = max === 0 ? 0 : (max - min) / max;
            if (sat > maxSaturation && brightness > 50) {
              maxSaturation = sat;
              vibrantR = pr;
              vibrantG = pg;
              vibrantB = pb;
            }
          }
        }

        if (count === 0) {
          resolve(DEFAULT_PALETTE);
          return;
        }

        // Favor vibrant color if found, else average
        const finalR = maxSaturation > 0.25 ? vibrantR : Math.round(r / count);
        const finalG = maxSaturation > 0.25 ? vibrantG : Math.round(g / count);
        const finalB = maxSaturation > 0.25 ? vibrantB : Math.round(b / count);

        const hex = `#${((1 << 24) + (finalR << 16) + (finalG << 8) + finalB).toString(16).slice(1)}`;
        const rgbStr = `${finalR}, ${finalG}, ${finalB}`;
        const lum = (finalR * 299 + finalG * 587 + finalB * 114) / 1000;

        const palette: ExtractedPalette = {
          dominant: hex,
          rgb: rgbStr,
          glow: `rgba(${rgbStr}, 0.45)`,
          subtle: `rgba(${rgbStr}, 0.12)`,
          isLight: lum > 140
        };

        paletteCache.set(imageUrl, palette);
        resolve(palette);
      } catch (e) {
        console.warn('Canvas color extraction CORS note, using fallback:', e);
        resolve(DEFAULT_PALETTE);
      }
    };

    img.onerror = () => {
      resolve(DEFAULT_PALETTE);
    };

    img.src = imageUrl;
  });
}

export function applyAccentToRoot(palette: ExtractedPalette): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.style.setProperty('--accent-color', palette.dominant);
  root.style.setProperty('--accent-rgb', palette.rgb);
  root.style.setProperty('--accent-glow', palette.glow);
  root.style.setProperty('--accent-subtle', palette.subtle);
}
