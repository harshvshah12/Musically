import { Track, Playlist, Artist } from '../types/music';

export const ARTISTS_DATA: Artist[] = [
  {
    id: "artist-1",
    name: "AP Dhillon & Gurinder Gill",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    genres: ["Punjabi", "Hip-Hop", "R&B"],
    bio: "Pioneers of the modern brown sound wave, blending smooth Western 808s with evocative Punjabi poetry.",
    monthlyListeners: "9.8M",
    topTracks: ["track-1", "track-5", "track-8", "track-11", "track-16"]
  },
  {
    id: "artist-2",
    name: "Diljit Dosanjh",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    genres: ["Punjabi Pop", "Bhangra", "Urban Punjabi"],
    bio: "Global icon bringing high-octane Punjabi pop and festival energy to world stages.",
    monthlyListeners: "22.5M",
    topTracks: ["track-2", "track-6", "track-12", "track-14"]
  },
  {
    id: "artist-3",
    name: "Karan Aujla",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    genres: ["Punjabi", "Rap", "Desi Hip Hop"],
    bio: "Lyrical powerhouse with infectious rhythmic swagger, charting global hits across every platform.",
    monthlyListeners: "16.4M",
    topTracks: ["track-3", "track-7", "track-13", "track-15"]
  },
  {
    id: "artist-4",
    name: "Shubh",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    genres: ["Punjabi Hip-Hop", "Trap", "Melodic Punjabi"],
    bio: "The breakthrough sound of modern Punjabi trap, delivering late-night highway hits.",
    monthlyListeners: "13.1M",
    topTracks: ["track-4", "track-17"]
  },
  {
    id: "artist-5",
    name: "Sidhu Moose Wala",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    genres: ["Punjabi Folk-Trap", "Desi Hip Hop"],
    bio: "Legendary voice that forever redefined Punjabi music worldwide with raw authenticity and iconic melodies.",
    monthlyListeners: "18.9M",
    topTracks: ["track-9", "track-10"]
  },
  {
    id: "artist-6",
    name: "Sohaliya's Birthday Ensemble",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    genres: ["Celebration", "Punjabi Pop", "VIP Exclusive"],
    bio: "A special musical collective formed to curate unforgettable birthday vibes for Sohaliya.",
    monthlyListeners: "∞",
    topTracks: ["track-18", "track-secret-1"]
  }
];

export const TRACKS_DATA: Track[] = [
  {
    id: "track-1",
    title: "Excuses",
    artist: "AP Dhillon & Intense",
    artistId: "artist-1",
    album: "Hidden Gems",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/47/47/ac/4747ac85-1658-64ae-bc82-220a4d6213d5/859747478890_cover.jpg/400x400bb.jpg",
    duration: 176,
    audioSrc: "/audio/excuses.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'vX2cDW8LUWk',
      streamUrl: '/audio/excuses.m4a',
      durationSeconds: 176,
      isrc: 'CA-A23-20-00101'
    },
    genre: "Punjabi",
    language: "Punjabi",
    mood: "Energetic",
    bpm: 104,
    acousticFeatures: {
      danceability: 0.88,
      energy: 0.85,
      valence: 0.72,
      acousticness: 0.18,
      vibeScore: 0.94
    },
    birthdayNote: "Dedicated to Sohaliya: The ultimate singalong anthem.",
    lyrics: [
      "[00:00.00] Kehndi hundi si chan tak raah bana de",
      "[00:07.80] Tareyan de vich jadon mainu vekhegi",
      "[00:15.20] Yaadan jadon aungiyan tan pata lagguga",
      "[00:22.50] Dil naal laake dekhe dil tuttda kivein",
      "[00:29.80] Tareyan de vich jadon mainu vekhegi",
      "[00:37.00] Yaadan jadon aungiyan tan pata lagguga",
      "[00:44.20] Channa ve gall sun lai meri",
      "[00:51.50] Chhad ke na jaaveen tu yaari meri",
      "[00:58.80] Raatan nu jaag ke main tennu labhda",
      "[01:06.00] Sohaliya's favorite anthem playing in full stereo ✨",
      "[01:13.50] Kehndi hundi si chan tak raah bana de",
      "[01:21.00] Tareyan de vich jadon mainu vekhegi",
      "[01:28.00] Yaadan jadon aungiyan tan pata lagguga",
      "[01:35.50] Dil naal laake dekhe dil tuttda kivein",
      "[01:43.00] Majhail sound wave taking over the room!",
      "[01:50.50] Turn the volume all the way up for the birthday girl!"
    ]
  },
  {
    id: "track-2",
    title: "Lover",
    artist: "Diljit Dosanjh",
    artistId: "artist-2",
    album: "MoonChild Era",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8a/89/e4/8a89e445-d2c6-f8ac-a828-27818b0c1afe/859749638209_cover.jpg/400x400bb.jpg",
    duration: 184,
    audioSrc: "/audio/lover.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'mH_LFkWxpI0',
      streamUrl: '/audio/lover.m4a',
      durationSeconds: 184,
      isrc: 'IN-T10-21-00302'
    },
    genre: "Punjabi Pop",
    language: "Punjabi",
    mood: "Euphoric",
    bpm: 118,
    acousticFeatures: {
      danceability: 0.92,
      energy: 0.90,
      valence: 0.88,
      acousticness: 0.15,
      vibeScore: 0.96
    },
    birthdayNote: "Pure euphoria. Diljit's iconic synthwave Punjabi hit.",
    lyrics: [
      "[00:00.00] Tera ni lover, koi hor na howe",
      "[00:07.50] Meri gall sun lai, tu mere kol aake khowe",
      "[00:15.00] Dil mera dhadke jadon saamne tu aave",
      "[00:22.50] Mainu apna bana le, kade door na jaave",
      "[00:30.00] Ho tera ni lover, koi hor na howe",
      "[00:37.50] Akhiyan ch kajla te hathan ch rumaal",
      "[00:45.00] Sohaliya de piche saara shehar behal",
      "[00:52.50] Tere piche piche aavan jivein parchhawan",
      "[01:00.00] Tu jithe jithe jaavein othe othe aavan",
      "[01:07.50] Diljit's synth grooves filling the space!",
      "[01:15.00] Mainu tere naal pyar ho gaya Sohaliya!",
      "[01:22.50] Happy Birthday and let the celebration flow! ❤️"
    ]
  },
  {
    id: "track-3",
    title: "Softly",
    artist: "Karan Aujla & Ikky",
    artistId: "artist-3",
    album: "Making Memories",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/400x400bb.jpg",
    duration: 156,
    audioSrc: "/audio/softly.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'cHMmZ4g9E-o',
      streamUrl: '/audio/softly.m4a',
      durationSeconds: 156,
      isrc: 'CA-W89-23-00455'
    },
    genre: "Punjabi",
    language: "Punjabi",
    mood: "Energetic",
    bpm: 98,
    acousticFeatures: {
      danceability: 0.94,
      energy: 0.88,
      valence: 0.82,
      acousticness: 0.22,
      vibeScore: 0.98
    },
    birthdayNote: "Ikky's production + Aujla's swagger.",
    lyrics: [
      "[00:00.00] Softly softly tu kardi gallan",
      "[00:06.00] Main tere piche piche aawan jivein challan",
      "[00:12.50] Nazran na lagg jaan meri jaan nu",
      "[00:18.00] Karan Aujla flow matching Sohaliya's energy!",
      "[00:24.50] Koka tera lishke jivein taara ambran te",
      "[00:30.80] Husan di rani tu te geet sadde gallan te",
      "[00:37.00] Ikky on the beat making memories!",
      "[00:43.50] Softly softly tu kardi gallan",
      "[00:50.00] Unstoppable birthday energy all year long!"
    ]
  },
  {
    id: "track-4",
    title: "Cheques",
    artist: "Shubh",
    artistId: "artist-4",
    album: "Still Rollin",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dc/46/a9/dc46a9c9-794e-2d7a-1afb-97eb4ae0fff6/197188915704.jpg/400x400bb.jpg",
    duration: 183,
    audioSrc: "/audio/cheques.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: '4tywp83zkmk',
      streamUrl: '/audio/cheques.m4a',
      durationSeconds: 183,
      isrc: 'CA-S76-23-00109'
    },
    genre: "Punjabi Hip-Hop",
    language: "Punjabi",
    mood: "Empowering",
    bpm: 92,
    acousticFeatures: {
      danceability: 0.86,
      energy: 0.82,
      valence: 0.74,
      acousticness: 0.12,
      vibeScore: 0.92
    },
    birthdayNote: "Main character energy for the birthday girl.",
    lyrics: [
      "[00:00.00] Gaane saare hit jivein cheques sign hoye",
      "[00:07.50] Yaar saare khade jivein line hoye",
      "[00:15.00] Shubh's smooth trap groove rolling in",
      "[00:22.50] Sohaliya stepping into her winning era!",
      "[00:30.00] Kise naal karde ni compare kudiye",
      "[00:37.50] Mainu kehnde aa ballers yaar kudiye",
      "[00:45.00] Still rollin with zero compromises!",
      "[00:52.50] Level up, volume up, celebrate in style!"
    ]
  },
  {
    id: "track-5",
    title: "Brown Munde",
    artist: "AP Dhillon, Gurinder Gill & Shinda Kahlon",
    artistId: "artist-1",
    album: "Not by Chance",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/a3/ac/26a3ac64-69e4-95ec-80ab-1f5a477537d2/859742042973_cover.jpg/400x400bb.jpg",
    duration: 247,
    audioSrc: "/audio/brown_munde.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'VNs_cCtdbPc',
      streamUrl: '/audio/brown_munde.m4a',
      durationSeconds: 247,
      isrc: 'CA-A23-20-00899'
    },
    genre: "Punjabi",
    language: "Punjabi",
    mood: "Energetic",
    bpm: 112,
    acousticFeatures: {
      danceability: 0.95,
      energy: 0.93,
      valence: 0.85,
      acousticness: 0.10,
      vibeScore: 0.99
    },
    birthdayNote: "The song that turns any room into a concert instantly.",
    lyrics: [
      "[00:00.00] Desi je geet aa trapan di beat aa",
      "[00:06.00] Sir kadh gajde speakeran ch wajde",
      "[00:12.00] Brown Munde! The ultimate Punjabi anthem.",
      "[00:18.50] Geetan di machine kude, suni tu hamesha",
      "[00:25.00] Living room concert for Sohaliya's birthday!",
      "[00:31.50] Desi je geet aa trapan di beat aa",
      "[00:38.00] Sir kadh gajde speakeran ch wajde",
      "[00:44.50] AP, Gurinder, Shinda on the track!",
      "[00:51.00] Maximum bass and non-stop singalongs!"
    ]
  },
  {
    id: "track-6",
    title: "G.O.A.T.",
    artist: "Diljit Dosanjh",
    artistId: "artist-2",
    album: "G.O.A.T.",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d2/89/ac/d289ac98-749e-3822-6b6e-b06aa4815715/859740651597_cover.jpg/400x400bb.jpg",
    duration: 223,
    audioSrc: "/audio/goat.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'cl0a3i2wFcc',
      streamUrl: '/audio/goat.m4a',
      durationSeconds: 223,
      isrc: 'IN-T10-20-00145'
    },
    genre: "Punjabi Pop",
    language: "Punjabi",
    mood: "Empowering",
    bpm: 100,
    acousticFeatures: {
      danceability: 0.90,
      energy: 0.92,
      valence: 0.86,
      acousticness: 0.14,
      vibeScore: 0.95
    },
    birthdayNote: "Greatest Of All Time — celebrating the birthday VIP.",
    lyrics: [
      "[00:00.00] Gabru di taur dekh, att di snap dekh",
      "[00:07.00] Diamond di ring hath ch, look back dekh",
      "[00:15.00] Diljit Dosanjh bringing royalty vibes",
      "[00:22.00] G.O.A.T status unlocked for Sohaliya today!",
      "[00:30.00] Jatt da muqabla kade vi na mile",
      "[00:38.00] Celebratory rhythm flowing all night!"
    ]
  },
  {
    id: "track-7",
    title: "Winning Speech",
    artist: "Karan Aujla",
    artistId: "artist-3",
    album: "Four You",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/400x400bb.jpg",
    duration: 212,
    audioSrc: "/audio/winning_speech.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'zB0qVjG1R7g',
      streamUrl: '/audio/winning_speech.m4a',
      durationSeconds: 212,
      isrc: 'CA-W89-24-00112'
    },
    genre: "Punjabi",
    language: "Punjabi",
    mood: "Empowering",
    bpm: 96,
    acousticFeatures: {
      danceability: 0.87,
      energy: 0.89,
      valence: 0.80,
      acousticness: 0.16,
      vibeScore: 0.93
    },
    birthdayNote: "Swagger, confidence, and celebratory energy.",
    lyrics: [
      "[00:00.00] Jithe vi khade aan, othe hi raaj karde aan",
      "[00:07.00] Apne dam te aage vadhe aan, shaan naal",
      "[00:14.00] Karan Aujla deliverin pure inspiration.",
      "[00:21.00] Here is to your winning year, Sohaliya!",
      "[00:29.00] Unstoppable energy, non-stop wins."
    ]
  },
  {
    id: "track-8",
    title: "Insane",
    artist: "AP Dhillon & Gurinder Gill",
    artistId: "artist-1",
    album: "Hidden Gems",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/16/d6/94/16d6949f-6072-0b42-f88b-a61ffb129952/859747110851_cover.jpg/400x400bb.jpg",
    duration: 208,
    audioSrc: "/audio/insane.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: '1dfX_F2e3vU',
      streamUrl: '/audio/insane.m4a',
      durationSeconds: 208,
      isrc: 'CA-A23-21-00234'
    },
    genre: "Punjabi",
    language: "Punjabi",
    mood: "Energetic",
    bpm: 124,
    acousticFeatures: {
      danceability: 0.93,
      energy: 0.95,
      valence: 0.78,
      acousticness: 0.08,
      vibeScore: 0.97
    },
    birthdayNote: "Heavy 808s that rattle your speakers.",
    lyrics: [
      "[00:00.00] Gallan kardi insane kude",
      "[00:06.00] Sadda kardi tu brain freeze kude",
      "[00:12.00] Bass drop kicking into high gear!",
      "[00:18.50] AP & Gurinder synergy at maximum volume.",
      "[00:25.00] Insane beats for an unforgettable celebration!"
    ]
  },
  {
    id: "track-9",
    title: "295",
    artist: "Sidhu Moose Wala",
    artistId: "artist-5",
    album: "Moosetape",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/400x400bb.jpg",
    duration: 270,
    audioSrc: "/audio/295.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'n_FCrCQ6-9U',
      streamUrl: '/audio/295.m4a',
      durationSeconds: 270,
      isrc: 'IN-T10-21-00789'
    },
    genre: "Punjabi Folk-Trap",
    language: "Punjabi",
    mood: "Empowering",
    bpm: 88,
    acousticFeatures: {
      danceability: 0.82,
      energy: 0.91,
      valence: 0.65,
      acousticness: 0.20,
      vibeScore: 0.98
    },
    birthdayNote: "Timeless classic. Legendary Punjabi poetry.",
    lyrics: [
      "[00:00.00] Nitt controversy create milugi",
      "[00:08.00] Dharma de naam te debate milugi",
      "[00:16.00] Sach bolan te othe hate milugi",
      "[00:24.00] Sidhu Moose Wala immortal legacy",
      "[00:32.00] 295 playing loud and proud for Sohaliya."
    ]
  },
  {
    id: "track-10",
    title: "So High",
    artist: "Sidhu Moose Wala",
    artistId: "artist-5",
    album: "So High Single",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1b/6e/74/1b6e74cd-b93a-5dd9-e7a2-c7623df73d10/cover.jpg/400x400bb.jpg",
    duration: 235,
    audioSrc: "/audio/so_high.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'GgmFC8y8q3k',
      streamUrl: '/audio/so_high.m4a',
      durationSeconds: 235,
      isrc: 'IN-T10-17-00056'
    },
    genre: "Punjabi",
    language: "Punjabi",
    mood: "Energetic",
    bpm: 96,
    acousticFeatures: {
      danceability: 0.91,
      energy: 0.94,
      valence: 0.79,
      acousticness: 0.12,
      vibeScore: 0.97
    },
    birthdayNote: "The song that introduced Sidhu to the world.",
    lyrics: [
      "[00:00.00] Gaddi ch baithe mere yaar saare so high",
      "[00:08.00] Akhan ch barood te hathan ch sly",
      "[00:16.00] The legendary track that started it all!",
      "[00:24.00] High energy vibes on loop."
    ]
  },
  {
    id: "track-11",
    title: "With You",
    artist: "AP Dhillon",
    artistId: "artist-1",
    album: "Two Hearts Never Break the Same",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/400x400bb.jpg",
    duration: 160,
    audioSrc: "/audio/with_you.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'c8gS_a-Zg8M',
      streamUrl: '/audio/with_you.m4a',
      durationSeconds: 160,
      isrc: 'CA-A23-23-00512'
    },
    genre: "Punjabi Pop",
    language: "Punjabi",
    mood: "Chill",
    bpm: 110,
    acousticFeatures: {
      danceability: 0.85,
      energy: 0.76,
      valence: 0.88,
      acousticness: 0.35,
      vibeScore: 0.94
    },
    birthdayNote: "Smooth acoustic strumming and sweet melodies.",
    lyrics: [
      "[00:00.00] Tere naal jado di mulakaat ho gayi",
      "[00:07.00] Zindagi meri vi haseen ho gayi",
      "[00:14.00] AP Dhillon gentle acoustic groove",
      "[00:22.00] Pure warmth and sweet birthday vibes."
    ]
  },
  {
    id: "track-12",
    title: "Peaches",
    artist: "Diljit Dosanjh",
    artistId: "artist-2",
    album: "Drive Thru",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1b/2b/c5/1b2bc5ce-f6c1-c6c2-69bc-d5bc804701c7/859763661467_cover.jpg/400x400bb.jpg",
    duration: 192,
    audioSrc: "/audio/peaches.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'vC32qB6CeqY',
      streamUrl: '/audio/peaches.m4a',
      durationSeconds: 192,
      isrc: 'IN-T10-22-00445'
    },
    genre: "Punjabi Pop",
    language: "Punjabi",
    mood: "Chill",
    bpm: 108,
    acousticFeatures: {
      danceability: 0.91,
      energy: 0.83,
      valence: 0.90,
      acousticness: 0.20,
      vibeScore: 0.95
    },
    birthdayNote: "Smooth summer breezes and feel-good Punjabi rhythm.",
    lyrics: [
      "[00:00.00] Peaches jivein glow kare rang tera",
      "[00:08.00] Diljit with the infectious feel-good rhythm",
      "[00:16.00] Summer vibes all year round for Sohaliya."
    ]
  },
  {
    id: "track-13",
    title: "Tauba Tauba",
    artist: "Karan Aujla",
    artistId: "artist-3",
    album: "Bad Newz OST",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/400x400bb.jpg",
    duration: 207,
    audioSrc: "/audio/tauba_tauba.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'LK7-_dgAVQE',
      streamUrl: '/audio/tauba_tauba.m4a',
      durationSeconds: 207,
      isrc: 'IN-T10-24-00891'
    },
    genre: "Punjabi",
    language: "Punjabi",
    mood: "Energetic",
    bpm: 122,
    acousticFeatures: {
      danceability: 0.97,
      energy: 0.94,
      valence: 0.92,
      acousticness: 0.11,
      vibeScore: 0.99
    },
    birthdayNote: "The ultimate viral dance banger to celebrate in style.",
    lyrics: [
      "[00:00.00] Husan tera tauba tauba karda kamaal",
      "[00:07.00] Karan Aujla dance rhythm setting the vibe",
      "[00:14.00] Celebrating Sohaliya with non-stop dancing!"
    ]
  },
  {
    id: "track-14",
    title: "Hass Hass",
    artist: "Diljit Dosanjh & Sia",
    artistId: "artist-2",
    album: "Hass Hass Single",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/af/11/f9/af11f978-7b08-8025-eb57-25682c8d9acb/5054197842245.jpg/400x400bb.jpg",
    duration: 175,
    audioSrc: "/audio/hass_hass.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'jT-5iL_Gq3E',
      streamUrl: '/audio/hass_hass.m4a',
      durationSeconds: 175,
      isrc: 'IN-T10-23-00998'
    },
    genre: "Punjabi Pop",
    language: "Punjabi",
    mood: "Euphoric",
    bpm: 116,
    acousticFeatures: {
      danceability: 0.93,
      energy: 0.89,
      valence: 0.95,
      acousticness: 0.14,
      vibeScore: 0.98
    },
    birthdayNote: "Global Punjabi pop cross-over. Pure celebration.",
    lyrics: [
      "[00:00.00] Hass hass ke gallan kardian ankhiyan",
      "[00:08.00] Diljit and Sia harmony filling the room",
      "[00:16.00] Celebrating joy, laughter, and friendship!"
    ]
  },
  {
    id: "track-15",
    title: "Admirin' You",
    artist: "Karan Aujla & Ikky",
    artistId: "artist-3",
    album: "Making Memories",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/400x400bb.jpg",
    duration: 214,
    audioSrc: "/audio/admirin_you.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'XOMb7O1z5hM',
      streamUrl: '/audio/admirin_you.m4a',
      durationSeconds: 214,
      isrc: 'CA-W89-23-00456'
    },
    genre: "Punjabi",
    language: "Punjabi",
    mood: "Chill",
    bpm: 105,
    acousticFeatures: {
      danceability: 0.90,
      energy: 0.84,
      valence: 0.86,
      acousticness: 0.24,
      vibeScore: 0.96
    },
    birthdayNote: "Smooth late-night Aujla vibe for Sohaliya.",
    lyrics: [
      "[00:00.00] Admirin you from the moment you stepped in",
      "[00:08.00] Karan Aujla lyrical smoothness on beat",
      "[00:16.00] Perfect groove for relaxed afternoons."
    ]
  },
  {
    id: "track-16",
    title: "Dil Nu",
    artist: "AP Dhillon & Shinda Kahlon",
    artistId: "artist-1",
    album: "Two Hearts Never Break the Same",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/67/37/31/67373108-1018-da3f-7220-4515137e5e5e/859766525070_cover.jpg/400x400bb.jpg",
    duration: 192,
    audioSrc: "/audio/dil_nu.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: '0v7Vj3o5Q4U',
      streamUrl: '/audio/dil_nu.m4a',
      durationSeconds: 192,
      isrc: 'CA-A23-22-00341'
    },
    genre: "Punjabi",
    language: "Punjabi",
    mood: "Late Night",
    bpm: 100,
    acousticFeatures: {
      danceability: 0.87,
      energy: 0.81,
      valence: 0.70,
      acousticness: 0.28,
      vibeScore: 0.93
    },
    birthdayNote: "Late night drives, heavy bass, pure soul.",
    lyrics: [
      "[00:00.00] Dil nu samjhawan kivein",
      "[00:07.00] AP Dhillon midnight nostalgia",
      "[00:15.00] Smooth basslines keeping the vibe alive."
    ]
  },
  {
    id: "track-17",
    title: "Baller",
    artist: "Shubh & Ikky",
    artistId: "artist-4",
    album: "Baller Single",
    albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e9/bd/93/e9bd9316-75a6-bc15-aebe-c737037bedf0/196925634489.jpg/400x400bb.jpg",
    duration: 148,
    audioSrc: "/audio/baller.m4a",
    playbackSource: {
      provider: 'YOUTUBE_IFRAME',
      capability: 'FULL',
      youtubeVideoId: 'E4L6yL44b3c',
      streamUrl: '/audio/baller.m4a',
      durationSeconds: 148,
      isrc: 'CA-S76-22-00088'
    },
    genre: "Punjabi Hip-Hop",
    language: "Punjabi",
    mood: "Energetic",
    bpm: 114,
    acousticFeatures: {
      danceability: 0.96,
      energy: 0.92,
      valence: 0.88,
      acousticness: 0.10,
      vibeScore: 0.98
    },
    birthdayNote: "High-octane trap beat that never slows down.",
    lyrics: [
      "[00:00.00] Kise naal karde ni compare kudiye",
      "[00:06.50] Mainu kehnde aa ballers yaar kudiye",
      "[00:13.00] Shubh & Ikky delivering non-stop energy!"
    ]
  },
  {
    id: "track-18",
    title: "Sohaliya's Anthem (The Birthday Theme)",
    artist: "Sohaliya's Birthday Ensemble",
    artistId: "artist-6",
    album: "Sohaliya: The Soundtrack",
    albumArt: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    duration: 180,
    audioSrc: "/audio/excuses.m4a",
    playbackSource: {
      provider: 'HTML5_AUDIO',
      capability: 'FULL',
      streamUrl: '/audio/excuses.m4a',
      durationSeconds: 180,
      isrc: 'IN-VIP-26-00001'
    },
    genre: "Celebration",
    language: "Punjabi",
    mood: "Euphoric",
    bpm: 120,
    acousticFeatures: {
      danceability: 0.98,
      energy: 0.96,
      valence: 0.99,
      acousticness: 0.15,
      vibeScore: 1.00
    },
    birthdayNote: "Specially engineered sound dedicated to Sohaliya. Happy Birthday!",
    lyrics: [
      "[00:00.00] 3... 2... 1... PRESS PLAY!",
      "[00:06.00] Today the spotlight shines on Sohaliya!",
      "[00:12.00] Another year of greatness, another year of joy",
      "[00:18.00] The aux cord queen, the main character!",
      "[00:26.00] May your year be filled with unforgettable Punjabi anthems,",
      "[00:34.00] Endless laughs, wild road trips, and beautiful memories.",
      "[00:42.00] Happy Birthday Sohu! This whole soundtrack is for you! ❤️"
    ]
  },
  {
    id: "track-secret-1",
    title: "The Vault: Secret Birthday Mixtape (Sohaliya VIP)",
    artist: "Sohaliya's Birthday Ensemble",
    artistId: "artist-6",
    album: "VIP Unreleased",
    albumArt: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    duration: 195,
    audioSrc: "/audio/brown_munde.m4a",
    playbackSource: {
      provider: 'HTML5_AUDIO',
      capability: 'FULL',
      streamUrl: '/audio/brown_munde.m4a',
      durationSeconds: 195,
      isrc: 'IN-VIP-26-00777'
    },
    genre: "VIP Mixtape",
    language: "Punjabi",
    mood: "Euphoric",
    bpm: 128,
    acousticFeatures: {
      danceability: 0.99,
      energy: 0.99,
      valence: 1.00,
      acousticness: 0.05,
      vibeScore: 1.00
    },
    birthdayNote: "Unlocked via secret easter egg! Happy Birthday Sohaliya!",
    lyrics: [
      "[00:00.00] 🎊 VIP VAULT UNLOCKED!",
      "[00:05.00] You found the secret birthday easter egg!",
      "[00:10.00] Massive shoutout to Sohaliya on her special day!",
      "[00:16.00] Mahaveer, Shruti, Taher, Sandra and I are wishing you the happiest birthday!",
      "[00:24.00] Keep shining, keep thriving, and keep playing the best music on earth! ❤️"
    ]
  }
];

export const PLAYLISTS_DATA: Playlist[] = [
  {
    id: "pl-made-for-sohaliya",
    name: "Made For Sohaliya",
    description: "An algorithmically refined Punjabi mix tailored to Sohaliya's signature rhythm, top plays, and favorite AP Dhillon, Diljit & Karan Aujla tracks.",
    coverImage: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/47/47/ac/4747ac85-1658-64ae-bc82-220a4d6213d5/859747478890_cover.jpg/400x400bb.jpg",
    trackIds: ["track-1", "track-2", "track-3", "track-4", "track-5", "track-18"],
    category: "Personalized",
    gradient: "from-rose-500/80 to-purple-600/80",
    createdAt: "2026-09-02"
  },
  {
    id: "pl-birthday-special",
    name: "Sohaliya's Birthday Mix ❤️",
    description: "The official celebratory birthday mixtape. Curated with unforgettable memories, Punjabi bangers, and pure joy.",
    coverImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    trackIds: ["track-18", "track-1", "track-2", "track-3", "track-5", "track-13", "track-14"],
    isBirthdaySpecial: true,
    category: "Birthday Exclusive",
    gradient: "from-amber-400/80 via-rose-500/80 to-pink-600/80",
    createdAt: "2026-09-02"
  },
  {
    id: "pl-main-character",
    name: "For Your Main Character Era",
    description: "Unapologetic Punjabi bass, confident swagger, and songs that make you feel like the protagonist.",
    coverImage: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/400x400bb.jpg",
    trackIds: ["track-3", "track-4", "track-6", "track-7", "track-13", "track-17"],
    category: "Moods",
    gradient: "from-violet-600/80 to-indigo-900/80",
    createdAt: "2026-09-02"
  },
  {
    id: "pl-midnight-sohaliya",
    name: "Songs For Midnight",
    description: "Smooth Punjabi R&B, lo-fi beats, and mellow AP Dhillon & Shubh melodies for late-night drives.",
    coverImage: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/400x400bb.jpg",
    trackIds: ["track-11", "track-12", "track-15", "track-16", "track-1"],
    category: "Moods",
    gradient: "from-cyan-700/80 via-slate-800/80 to-black/80",
    createdAt: "2026-09-02"
  },
  {
    id: "pl-punjabi-bollywood",
    name: "Punjabi High-Voltage Anthems",
    description: "The greatest bangers from AP Dhillon, Diljit, Karan Aujla, and Sidhu Moose Wala that define the good times.",
    coverImage: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/a3/ac/26a3ac64-69e4-95ec-80ab-1f5a477537d2/859742042973_cover.jpg/400x400bb.jpg",
    trackIds: ["track-1", "track-2", "track-3", "track-5", "track-6", "track-7", "track-8", "track-9", "track-10", "track-13", "track-14", "track-17"],
    category: "Genres",
    gradient: "from-orange-500/80 to-red-600/80",
    createdAt: "2026-09-02"
  },
  {
    id: "pl-acoustic-warmth",
    name: "Chill & Acoustic Feels",
    description: "Tender acoustic strings, cozy café vibes, and gentle harmonies for relaxed afternoons.",
    coverImage: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1b/2b/c5/1b2bc5ce-f6c1-c6c2-69bc-d5bc804701c7/859763661467_cover.jpg/400x400bb.jpg",
    trackIds: ["track-11", "track-12", "track-15", "track-2"],
    category: "Vibes",
    gradient: "from-emerald-600/80 to-teal-800/80",
    createdAt: "2026-09-02"
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'All' },
  { id: 'punjabi', label: 'Punjabi Hits 🔥' },
  { id: 'birthday', label: 'Birthday Special 🎂' },
  { id: 'ap-dhillon', label: 'AP Dhillon & Intense' },
  { id: 'diljit', label: 'Diljit Dosanjh' },
  { id: 'karan-aujla', label: 'Karan Aujla' },
  { id: 'shubh', label: 'Shubh & Trap' },
  { id: 'midnight', label: 'Late Night & Chill' }
];
