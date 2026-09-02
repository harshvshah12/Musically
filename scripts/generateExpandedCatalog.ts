import * as fs from 'fs';
import * as path from 'path';

interface TrackSeed {
  title: string;
  artist: string;
  artistId: string;
  album: string;
  duration: number;
  youtubeVideoId: string;
  genre: string;
  language: 'Punjabi' | 'Hindi' | 'English' | 'Instrumental' | 'Indie' | 'Tamil' | 'Telugu' | 'Malayalam' | 'Gujarati' | 'Marathi';
  mood: 'Energetic' | 'Chill' | 'Romantic' | 'Late Night' | 'Nostalgic' | 'Empowering' | 'Euphoric';
  bpm: number;
  danceability: number;
  energy: number;
  valence: number;
  acousticness: number;
  vibeScore: number;
}

const ARTWORK_MAP: Record<string, string[]> = {
  Punjabi: [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80"
  ],
  Hindi: [
    "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80"
  ],
  Indie: [
    "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80"
  ],
  Regional: [
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80"
  ],
  English: [
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
  ]
};

function getArtwork(language: string, index: number): string {
  let pool = ARTWORK_MAP.English;
  if (language === 'Punjabi') pool = ARTWORK_MAP.Punjabi;
  else if (language === 'Hindi') pool = ARTWORK_MAP.Hindi;
  else if (language === 'Indie') pool = ARTWORK_MAP.Indie;
  else if (['Tamil', 'Telugu', 'Malayalam', 'Gujarati', 'Marathi'].includes(language)) pool = ARTWORK_MAP.Regional;
  return pool[index % pool.length];
}

console.log('Generating expanded catalog...');
