export interface BirthdayMemory {
  id: string;
  title: string;
  caption: string;
  date: string;
  location?: string;
  imageUrl: string;
  associatedTrackId?: string;
  tags: string[];
}

export interface TimelineMilestone {
  id: string;
  year: string;
  date?: string;
  title: string;
  story: string;
  icon: 'star' | 'heart' | 'music' | 'sparkles' | 'coffee' | 'plane' | 'camera';
  badge?: string;
}

export interface FriendWish {
  id: string;
  name: string;
  avatar: string;
  relation: string;
  message: string;
  favoriteTrackRecommendation?: string;
  timestamp: string;
}

export interface BirthdayConfig {
  recipient: {
    name: string;
    nickname: string;
    ageTitle: string;
    birthdayDate: string; // YYYY-MM-DD
    heroGreeting: string;
    heroSubtitle: string;
    avatarUrl: string;
    personalityTags: string[];
  };
  revealStory: {
    step1Prompt: string;
    step2Analyzing: string;
    step3Discovery: string;
    step4BuiltForYou: string;
    step5Celebration: string;
    celebrationSubtitle: string;
  };
  birthdayLetter: {
    title: string;
    leadNote: string;
    paragraphs: string[];
    signOff: string;
    author: string;
  };
  memories: BirthdayMemory[];
  timeline: TimelineMilestone[];
  friendWishes: FriendWish[];
  birthdayMixtapeTrackIds: string[];
  easterEggs: {
    secretCodes: string[];
    konamiMessage: string;
    bonusTrackId: string;
  };
}

export const BIRTHDAY_CONFIG: BirthdayConfig = {
  recipient: {
    name: "Sohaliya",
    nickname: "Sohu",
    ageTitle: "21 & Thriving in Her Main Character Era",
    birthdayDate: "2026-09-02",
    heroGreeting: "Hey Sohaliya.",
    heroSubtitle: "Your soundtrack starts here. A sonic universe tailored exclusively to your rhythm, memories, and Punjabi music taste.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    personalityTags: [
      "Main Character",
      "Punjabi Pop Connoisseur",
      "AP Dhillon & Diljit Loyal",
      "Late Night Vibe Queen",
      "Acoustic Coffee Drinker",
      "Unmatched Music Taste"
    ]
  },
  revealStory: {
    step1Prompt: "Ready to explore something made exclusively for your ears?",
    step2Analyzing: "Analyzing your sonic frequency, repeat skips, and Punjabi replay patterns...",
    step3Discovery: "Apparently, Sohaliya has an undeniable, top-tier Punjabi music taste.",
    step4BuiltForYou: "So I engineered an entire dynamic music streaming universe around it...",
    step5Celebration: "Happy Birthday, Sohaliya! ❤️",
    celebrationSubtitle: "Every single Punjabi banger, glowing glass card, and personalized recommendation on this platform is dedicated to celebrating you today."
  },
  birthdayLetter: {
    title: "To Sohaliya — The Soundtrack of Every Room You Walk Into",
    leadNote: "Because you deserve something infinitely more memorable than an ordinary birthday card.",
    paragraphs: [
      "Happy Birthday, Sohaliya! If life were a continuous film, you would undoubtedly have the greatest Punjabi soundtrack playing in the background. From spontaneous road trip singalongs to midnight playlists that just hit different, your energy makes every single moment brighter.",
      "I wanted to build something that feels as vibrant, thoughtful, and genuinely exceptional as you are. Not just a static webpage, but a living, breathing music universe that listens back, learns your taste, and stores every melody that reminds me of you.",
      "May this year bring you unforgettable adventures, wild laughter, peaceful acoustic mornings, and endless bass-heavy Punjabi anthems. Thank you for being such an extraordinary friend.",
      "Turn the volume all the way up. This soundtrack is officially yours."
    ],
    signOff: "With endless love, memories, and good vibes,",
    author: "Your Favorite Friend"
  },
  memories: [
    {
      id: "mem-1",
      title: "The Golden Hour Road Trip",
      caption: "Windows down, singing at the top of my lungs to every AP Dhillon & Diljit banger on loop with you.",
      date: "Summer '24",
      location: "Highway Drives",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      associatedTrackId: "track-1",
      tags: ["RoadTrip", "PunjabiHits", "CoreMemory"]
    },
    {
      id: "mem-2",
      title: "Late Night Chai & Deep Talks",
      caption: "When a quick tea break turned into a 3-hour heart-to-heart conversation at 2:00 AM with lo-fi beats.",
      date: "Autumn '24",
      location: "The Rooftop",
      imageUrl: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      associatedTrackId: "track-2",
      tags: ["Chai", "Midnight", "Vibes"]
    },
    {
      id: "mem-3",
      title: "The Concert Euphoria",
      caption: "Losing our voices singing Diljit & Karan Aujla, dancing non-stop, and feeling the live bass in the crowd.",
      date: "Spring '25",
      location: "Live Arena",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      associatedTrackId: "track-3",
      tags: ["DiljitDosanjh", "LiveBass", "Energy"]
    },
    {
      id: "mem-4",
      title: "The Spontaneous Dance Party",
      caption: "When one Punjabi beat dropped and the entire room instantly transformed into a dance floor.",
      date: "Winter '25",
      location: "Living Room",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      associatedTrackId: "track-5",
      tags: ["Dance", "PunjabiBeats", "Joy"]
    }
  ],
  timeline: [
    {
      id: "time-1",
      year: "Chapter 1",
      date: "The First Meet",
      title: "The Instant Connection",
      story: "I bonded with you over music within minutes of meeting and realized we shared the exact same elite Punjabi playlist taste.",
      icon: "sparkles",
      badge: "Origin Story"
    },
    {
      id: "time-2",
      year: "Chapter 2",
      date: "The Unstoppable Duo",
      title: "Spontaneous Adventures",
      story: "Never having a rigid plan but somehow always ending up with the best memories, inside jokes, and funniest stories.",
      icon: "star",
      badge: "Core Era"
    },
    {
      id: "time-3",
      year: "Chapter 3",
      date: "Late Night Playlist Debates",
      title: "The Aux Cord Champion",
      story: "I officially gave you permanent rights to the car aux cord because you never miss with a single Punjabi song selection.",
      icon: "music",
      badge: "Certified DJ"
    },
    {
      id: "time-4",
      year: "Chapter 4",
      date: "Today & Beyond",
      title: "The Next Big Era",
      story: "Stepping into your happiest, most successful, and bass-heavy year yet. Happy Birthday, Sohaliya!",
      icon: "heart",
      badge: "Birthday VIP"
    }
  ],
  friendWishes: [
    {
      id: "wish-1",
      name: "Mahaveer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      relation: "Aux Cord Partner",
      message: "Happy Birthday Sohu! Even though you always hijack the playlist, I have to admit your Punjabi music taste is 10/10. Keep blasting those AP Dhillon & Diljit bangers!",
      favoriteTrackRecommendation: "Excuses — AP Dhillon",
      timestamp: "Today"
    },
    {
      id: "wish-2",
      name: "Shruti",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      relation: "Gossip & Chai Partner",
      message: "Happy Birthday to the girl who brings the ultimate main character energy wherever she goes! May your year be filled with dream trips and non-stop dancing!",
      favoriteTrackRecommendation: "Softly — Karan Aujla",
      timestamp: "Today"
    },
    {
      id: "wish-3",
      name: "Taher",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
      relation: "Late Night Drive Crew",
      message: "Wishing you a birthday as loud, energetic, and legendary as our night drives. Keep living life on 100% volume with the heaviest bass!",
      favoriteTrackRecommendation: "Cheques — Shubh",
      timestamp: "Today"
    },
    {
      id: "wish-4",
      name: "Sandra",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      relation: "Soul Sister",
      message: "To the sweetest and most genuine friend — I hope this year brings you infinite laughter, happiness, and all the best Punjabi anthems!",
      favoriteTrackRecommendation: "Lover — Diljit Dosanjh",
      timestamp: "Today"
    }
  ],
  birthdayMixtapeTrackIds: [
    "track-1",
    "track-2",
    "track-3",
    "track-4",
    "track-5",
    "track-6",
    "track-7",
    "track-8",
    "track-9",
    "track-10",
    "track-11",
    "track-12"
  ],
  easterEggs: {
    secretCodes: ["sohaliya", "sohu", "bday", "cake", "party", "queen", "punjabi"],
    konamiMessage: "🎉 SECRET BIRTHDAY MODE UNLOCKED: Unlimited Good Vibes & VIP Punjabi Access for Sohaliya!",
    bonusTrackId: "track-secret-1"
  }
};
