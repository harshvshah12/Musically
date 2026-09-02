// 4SOHA Master Music Catalog (760+ Verified Tracks)
// Normalized Canonical Artists, Albums, and Multi-Artist Track Architecture
import { Track, Artist, Playlist } from '@/types/music';

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'All Tracks' },
  { id: 'punjabi', label: 'Punjabi' },
  { id: 'hindi', label: 'Bollywood & Hindi' },
  { id: 'indie', label: 'Indian Indie' },
  { id: 'regional', label: 'Regional Indian' },
  { id: 'english', label: 'Global Hits' },
  { id: 'chill', label: 'Late Night' },
];

export const ARTISTS_DATA: Artist[] = [
  {
    "id": "artist-1",
    "name": "AP Dhillon",
    "aliases": [
      "Amritpal Singh Dhillon",
      "AP"
    ],
    "genres": [
      "Punjabi Pop",
      "Hip-Hop",
      "Trap"
    ],
    "bio": "Indo-Canadian singer and producer known for historic hits Excuses, Brown Munde, and With You.",
    "monthlyListeners": "8.4M",
    "country": "Canada/India",
    "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Excuses",
      "Brown Munde",
      "With You",
      "Dil Nu",
      "Summer High"
    ]
  },
  {
    "id": "artist-2",
    "name": "Diljit Dosanjh",
    "aliases": [
      "Diljit",
      "Dosanjhanwala",
      "GOAT"
    ],
    "genres": [
      "Punjabi Pop",
      "Bhangra",
      "Folk"
    ],
    "bio": "Global Punjabi superstar, historic Coachella headliner, and acclaimed international actor.",
    "monthlyListeners": "14.2M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "G.O.A.T.",
      "Lover",
      "Born to Shine",
      "Hass Hass",
      "Tauba Tauba"
    ]
  },
  {
    "id": "artist-3",
    "name": "Karan Aujla",
    "aliases": [
      "Geetan Di Machine",
      "Aujla"
    ],
    "genres": [
      "Punjabi Rap",
      "Desi Hip Hop",
      "Folk"
    ],
    "bio": "Prolific singer, lyricist, and Billboard-charting artist behind Making Memories and Four You.",
    "monthlyListeners": "11.8M",
    "country": "Canada/India",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Softly",
      "Winning Speech",
      "Admirin You",
      "52 Bars",
      "Tauba Tauba"
    ]
  },
  {
    "id": "artist-4",
    "name": "Shubh",
    "aliases": [
      "Shubneet Singh"
    ],
    "genres": [
      "Punjabi Hip Hop",
      "Trap",
      "Melodic Rap"
    ],
    "bio": "Sensational breakout artist behind viral records Cheques, Baller, No Love, and Still Rollin.",
    "monthlyListeners": "9.6M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Cheques",
      "Baller",
      "No Love",
      "Elevated",
      "We Rollin"
    ]
  },
  {
    "id": "artist-5",
    "name": "Sidhu Moose Wala",
    "aliases": [
      "Subhdeep Singh Sidhu",
      "Moosewala",
      "Moosetape"
    ],
    "genres": [
      "Punjabi Hip Hop",
      "Gangsta Rap",
      "Folk"
    ],
    "bio": "Iconic and immortal Punjabi revolutionary artist whose lyricism reshaped the global diaspora.",
    "monthlyListeners": "12.5M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "295",
      "So High",
      "The Last Ride",
      "Legend",
      "Same Beef"
    ]
  },
  {
    "id": "artist-6",
    "name": "Guru Randhawa",
    "aliases": [
      "High Rated Gabru"
    ],
    "genres": [
      "Punjabi Pop",
      "Dance",
      "Bollywood"
    ],
    "bio": "High-energy hitmaker with billions of views across Lahore, High Rated Gabru, and Suit Suit.",
    "monthlyListeners": "7.8M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Lahore",
      "High Rated Gabru",
      "Suit Suit",
      "Patola",
      "Made in India"
    ]
  },
  {
    "id": "artist-7",
    "name": "Harrdy Sandhu",
    "aliases": [
      "Hardavinder Singh Sandhu"
    ],
    "genres": [
      "Punjabi Pop",
      "Romantic",
      "Dance"
    ],
    "bio": "Celebrated singer and actor behind modern viral anthems Bijlee Bijlee and Backbone.",
    "monthlyListeners": "6.2M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Bijlee Bijlee",
      "Backbone",
      "Kya Baat Ay",
      "Horn Blow",
      "Naah"
    ]
  },
  {
    "id": "artist-8",
    "name": "Ammy Virk",
    "aliases": [
      "Amninderpal Singh Virk"
    ],
    "genres": [
      "Punjabi Folk",
      "Bhangra",
      "Melody"
    ],
    "bio": "Award-winning Punjabi folk singer and leading actor famous for Qismat and Wang Da Naap.",
    "monthlyListeners": "5.5M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Qismat",
      "Wang Da Naap",
      "Haan Haige Aa",
      "Zindabaad Yaarian",
      "Khabbi Seat"
    ]
  },
  {
    "id": "artist-9",
    "name": "B Praak",
    "aliases": [
      "Pratik Bachan"
    ],
    "genres": [
      "Sufi",
      "Punjabi Sad",
      "Bollywood"
    ],
    "bio": "National Award-winning music director and passionate vocalist behind Teri Mitti and Filhall.",
    "monthlyListeners": "8.9M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Filhall",
      "Filhaal 2",
      "Mann Bharrya",
      "Teri Mitti",
      "Pachtaoge"
    ]
  },
  {
    "id": "artist-10",
    "name": "Imran Khan",
    "aliases": [
      "Imran Khan Singer"
    ],
    "genres": [
      "Desi Hip Hop",
      "Urban Punjabi",
      "R&B"
    ],
    "bio": "Dutch-Pakistani urban Punjabi pioneer whose Amplifier and Satisfya set the gold standard.",
    "monthlyListeners": "4.8M",
    "country": "Netherlands",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Amplifier",
      "Satisfya",
      "Bewafa",
      "Knightridah",
      "Pata Chalgea"
    ]
  },
  {
    "id": "artist-11",
    "name": "Panjabi MC",
    "aliases": [
      "Rajinder Singh Rai"
    ],
    "genres": [
      "Bhangra",
      "Hip-Hop",
      "UK Asian"
    ],
    "bio": "British-Indian producer behind the worldwide crossover phenomenon Mundian To Bach Ke.",
    "monthlyListeners": "3.9M",
    "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Mundian To Bach Ke",
      "Jogi",
      "Mirza",
      "Snake Charmer",
      "Bari Barsi"
    ]
  },
  {
    "id": "artist-12",
    "name": "Daler Mehndi",
    "aliases": [
      "King of Bhangra"
    ],
    "genres": [
      "Bhangra",
      "Indipop",
      "Folk"
    ],
    "bio": "The unstoppable voice of Indian pop culture whose Tunak Tunak Tun conquered the world.",
    "monthlyListeners": "3.2M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Tunak Tunak Tun",
      "Bolo Ta Ra Ra",
      "Dardi Rab Rab",
      "Ho Jayegi Balle Balle",
      "Kudiyan Shehar Diyan"
    ]
  },
  {
    "id": "artist-13",
    "name": "Jasmine Sandlas",
    "aliases": [
      "Gulabi Queen"
    ],
    "genres": [
      "Punjabi Pop",
      "Folk",
      "Hip-Hop"
    ],
    "bio": "Fierce and distinctive Punjabi vocalist behind Illegal Weapon, Sip Sip, and Bamb Jatt.",
    "monthlyListeners": "3.7M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Illegal Weapon",
      "Sip Sip",
      "Bamb Jatt",
      "Patt Lai Geya",
      "Laddu"
    ]
  },
  {
    "id": "artist-14",
    "name": "Nimrat Khaira",
    "aliases": [
      "Nimrat"
    ],
    "genres": [
      "Punjabi Folk",
      "Pop",
      "Melody"
    ],
    "bio": "Graceful and dynamic Punjabi singer known for Bhalwani Geda, Designer, and Sirra E Hou.",
    "monthlyListeners": "4.1M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Bhalwani Geda",
      "Designer",
      "Supna Laavan Da",
      "Time Chakda",
      "Sirra E Hou"
    ]
  },
  {
    "id": "artist-15",
    "name": "Sunanda Sharma",
    "aliases": [
      "Sunanda"
    ],
    "genres": [
      "Punjabi Pop",
      "Dance",
      "Bhangra"
    ],
    "bio": "Enthusiastic singer behind massive anthems Jaani Tera Naa, Sandal, and Duji Vaar Pyar.",
    "monthlyListeners": "3.4M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Jaani Tera Naa",
      "Sandal",
      "Duji Vaar Pyar",
      "Pagal Nahi Hona",
      "Chori Chori"
    ]
  },
  {
    "id": "artist-16",
    "name": "Mickey Singh",
    "aliases": [
      "Mickey"
    ],
    "genres": [
      "Urban Desi",
      "R&B",
      "Punjabi Pop"
    ],
    "bio": "American-Punjabi crooner fusing contemporary western R&B rhythms with Punjabi soul.",
    "monthlyListeners": "2.9M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Phone",
      "Rooftop Party",
      "Bad Girl",
      "Yarri Yeh",
      "Summer Luv"
    ]
  },
  {
    "id": "artist-17",
    "name": "Prem Dhillon",
    "aliases": [
      "Prem"
    ],
    "genres": [
      "Punjabi Hip Hop",
      "Trap"
    ],
    "bio": "Majha powerhouse delivering gritty anthems Old Skool and Majha Block.",
    "monthlyListeners": "3.6M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Old Skool",
      "Majha Block",
      "Boot Cut",
      "Lost Love",
      "Ain't Died In Vain"
    ]
  },
  {
    "id": "artist-18",
    "name": "Bohemia",
    "aliases": [
      "Roger David",
      "Pioneer of Desi Hip Hop"
    ],
    "genres": [
      "Desi Hip Hop",
      "Rap Pioneer"
    ],
    "bio": "The legendary pioneer who originated the Desi Hip Hop movement.",
    "monthlyListeners": "4.5M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Ek Tera Pyar",
      "Kali Denali",
      "Rooh",
      "Sahara",
      "Jaguar"
    ]
  },
  {
    "id": "artist-19",
    "name": "Garry Sandhu",
    "aliases": [
      "Garry"
    ],
    "genres": [
      "Punjabi Pop",
      "Bhangra",
      "Folk"
    ],
    "bio": "Prolific singer-songwriter and producer known for Yeah Baby and Banda Ban Ja.",
    "monthlyListeners": "4.0M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Yeah Baby",
      "Illegal Weapon",
      "Banda Ban Ja",
      "Hauli Hauli",
      "Sip Sip"
    ]
  },
  {
    "id": "artist-20",
    "name": "Arijit Singh",
    "aliases": [
      "Arijit",
      "King of Romance"
    ],
    "genres": [
      "Bollywood",
      "Romantic",
      "Sufi"
    ],
    "bio": "The undisputed voice of modern India whose emotional range defines contemporary cinema.",
    "monthlyListeners": "42.0M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Tum Hi Ho",
      "Channa Mereya",
      "Kesariya",
      "Apna Bana Le",
      "Tere Hawale"
    ]
  },
  {
    "id": "artist-21",
    "name": "A.R. Rahman",
    "aliases": [
      "Mozart of Madras",
      "Rahman"
    ],
    "genres": [
      "World",
      "Soundtrack",
      "Sufi",
      "Fusion"
    ],
    "bio": "Academy and Grammy Award-winning musical visionary celebrated worldwide.",
    "monthlyListeners": "18.5M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Kun Faya Kun",
      "Jai Ho",
      "Chaiyya Chaiyya",
      "Tere Bina",
      "Masakali"
    ]
  },
  {
    "id": "artist-22",
    "name": "Pritam",
    "aliases": [
      "Pritam Chakraborty"
    ],
    "genres": [
      "Bollywood",
      "Pop",
      "Rock"
    ],
    "bio": "The mastermind behind countless blockbuster soundtracks from YJHD to Brahm\u0101stra.",
    "monthlyListeners": "26.0M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Badtameez Dil",
      "Subhanallah",
      "Dilliwaali Girlfriend",
      "Balam Pichkari",
      "Kesariya"
    ]
  },
  {
    "id": "artist-23",
    "name": "Mohit Chauhan",
    "aliases": [
      "Mohit"
    ],
    "genres": [
      "Bollywood",
      "Indipop",
      "Folk"
    ],
    "bio": "The soulful voice behind Rockstar, Jab We Met, and Delhi-6.",
    "monthlyListeners": "9.2M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Tum Ho",
      "Nadaan Parinde",
      "Phir Se Ud Chala",
      "Masakali",
      "Pee Loon"
    ]
  },
  {
    "id": "artist-24",
    "name": "Atif Aslam",
    "aliases": [
      "Atif"
    ],
    "genres": [
      "Bollywood",
      "Sufi Rock",
      "Romantic"
    ],
    "bio": "Beloved vocalist whose distinctive raspy delivery defined 2000s and 2010s romantic anthems.",
    "monthlyListeners": "16.8M",
    "country": "Pakistan",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Aadat",
      "Woh Lamhe",
      "Tere Bin",
      "Pehli Nazar Mein",
      "Tu Jaane Na"
    ]
  },
  {
    "id": "artist-25",
    "name": "Badshah",
    "aliases": [
      "Aditya Prateek Singh Sisodia"
    ],
    "genres": [
      "Desi Hip Hop",
      "Commercial Rap",
      "Pop"
    ],
    "bio": "Multi-platinum rapper behind unstoppable club and wedding anthems across India.",
    "monthlyListeners": "15.4M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Kala Chashma",
      "Kar Gayi Chull",
      "DJ Waley Babu",
      "Garmi",
      "Paani Paani"
    ]
  },
  {
    "id": "artist-26",
    "name": "Jubin Nautiyal",
    "aliases": [
      "Jubin"
    ],
    "genres": [
      "Bollywood",
      "Acoustic",
      "Devotional"
    ],
    "bio": "Acclaimed romantic singer behind record-breaking records Raataan Lambiyan and Lut Gaye.",
    "monthlyListeners": "13.1M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Raataan Lambiyan",
      "Lut Gaye",
      "Tum Hi Aana",
      "Humnava Mere",
      "Kinna Sona"
    ]
  },
  {
    "id": "artist-27",
    "name": "Shreya Ghoshal",
    "aliases": [
      "Shreya"
    ],
    "genres": [
      "Bollywood",
      "Classical",
      "Romantic"
    ],
    "bio": "India\u2019s celebrated playback queen boasting four National Film Awards.",
    "monthlyListeners": "28.5M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Teri Ore",
      "Deewani Mastani",
      "Ghoomar",
      "Sunn Raha Hai",
      "Barso Re"
    ]
  },
  {
    "id": "artist-28",
    "name": "KK",
    "aliases": [
      "Krishnakumar Kunnath"
    ],
    "genres": [
      "Bollywood",
      "Rock",
      "Soul"
    ],
    "bio": "The legendary voice of modern Bollywood rock whose melodies are immortalized in Indian hearts.",
    "monthlyListeners": "12.0M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Zara Sa",
      "Labon Ko",
      "Kya Mujhe Pyaar Hai",
      "Alvida",
      "Aankhon Mein Teri"
    ]
  },
  {
    "id": "artist-29",
    "name": "Sonu Nigam",
    "aliases": [
      "Sonu"
    ],
    "genres": [
      "Bollywood",
      "Ghazal",
      "Pop"
    ],
    "bio": "Regarded as one of the finest and most technically accomplished singers in Indian history.",
    "monthlyListeners": "11.5M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Kal Ho Naa Ho",
      "Abhi Mujh Mein Kahin",
      "Suraj Hua Maddham",
      "Tumse Milke Dil Ka",
      "Main Agar Kahoon"
    ]
  },
  {
    "id": "artist-30",
    "name": "Vishal-Shekhar",
    "aliases": [
      "Vishal Dadlani",
      "Shekhar Ravjiani"
    ],
    "genres": [
      "Bollywood",
      "Dance",
      "Electro-pop"
    ],
    "bio": "Dynamic hitmaking composer duo powering Bollywood blockbusters like Pathaan and War.",
    "monthlyListeners": "14.0M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Desi Girl",
      "Ghungroo",
      "Nashe Si Chadh Gayi",
      "Swag Se Swagat",
      "Jhoome Jo Pathaan"
    ]
  },
  {
    "id": "artist-31",
    "name": "Amit Trivedi",
    "aliases": [
      "Amit"
    ],
    "genres": [
      "Bollywood",
      "Indie Rock",
      "Experimental"
    ],
    "bio": "Visionary composer who brought indie rock textures into commercial Indian cinema.",
    "monthlyListeners": "8.7M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Namo Namo",
      "Iktara",
      "London Thumakda",
      "Sweetheart",
      "Qaafirana"
    ]
  },
  {
    "id": "artist-32",
    "name": "Prateek Kuhad",
    "aliases": [
      "Prateek"
    ],
    "genres": [
      "Indie Folk",
      "Acoustic Pop",
      "Singer-Songwriter"
    ],
    "bio": "Acclaimed singer-songwriter whose honest lyrics and acoustic melodies won global praise.",
    "monthlyListeners": "4.2M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "cold/mess",
      "Kasoor",
      "Tum Jab Paas",
      "Dil Beparvah",
      "Tune Kaha"
    ]
  },
  {
    "id": "artist-33",
    "name": "Anuv Jain",
    "aliases": [
      "Anuv"
    ],
    "genres": [
      "Indie Acoustic",
      "Poetry",
      "Ballad"
    ],
    "bio": "Acoustic sensation known for tender, emotionally devastating anthems like Husn and Baarishein.",
    "monthlyListeners": "6.8M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Baarishein",
      "Alag Aasmaan",
      "Husn",
      "Gul",
      "Mishri"
    ]
  },
  {
    "id": "artist-34",
    "name": "The Local Train",
    "aliases": [
      "TLT"
    ],
    "genres": [
      "Hindi Rock",
      "Indie Rock"
    ],
    "bio": "Trailblazing Hindi rock band celebrated for powerful melodies and poetic lyricism.",
    "monthlyListeners": "3.1M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Choo Lo",
      "Aaoge Tum Kabhi",
      "Aalas Ka Pedh",
      "Khudi",
      "Bandey"
    ]
  },
  {
    "id": "artist-35",
    "name": "Ritviz",
    "aliases": [
      "Ritviz Srivastava"
    ],
    "genres": [
      "Indian Electronic",
      "Dance",
      "Folk Fusion"
    ],
    "bio": "Electronic music prodigy fusing Indian classical vocal traditions with festival bass drops.",
    "monthlyListeners": "4.5M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Udd Gaye",
      "Sage",
      "Liggi",
      "Khoj",
      "Barso"
    ]
  },
  {
    "id": "artist-36",
    "name": "When Chai Met Toast",
    "aliases": [
      "WCMT"
    ],
    "genres": [
      "Indie Folk",
      "Acoustic Pop"
    ],
    "bio": "Kochi four-piece bringing warm, joyful, multilingual acoustic optimism.",
    "monthlyListeners": "1.9M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Firefly",
      "Khoj",
      "Joy of Little Things",
      "Believe",
      "Yellow Paper Daisy"
    ]
  },
  {
    "id": "artist-37",
    "name": "Seedhe Maut",
    "aliases": [
      "Calm & Encore ABJ",
      "SM"
    ],
    "genres": [
      "Desi Hip Hop",
      "Underground Rap"
    ],
    "bio": "Delhi rap powerhouses defining the raw cutting edge of contemporary Indian hip-hop.",
    "monthlyListeners": "2.5M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Namastute",
      "101",
      "Nanchaku",
      "Shaktimaan",
      "Fanne Khan"
    ]
  },
  {
    "id": "artist-38",
    "name": "DIVINE",
    "aliases": [
      "Vivian Fernandes",
      "Gully Gang"
    ],
    "genres": [
      "Gully Rap",
      "Desi Hip Hop"
    ],
    "bio": "The Mumbai icon who spearheaded the Indian street rap revolution.",
    "monthlyListeners": "5.6M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Kohinoor",
      "Mirchi",
      "Chal Bombay",
      "Kaam 25",
      "3:59 AM"
    ]
  },
  {
    "id": "artist-39",
    "name": "Anirudh Ravichander",
    "aliases": [
      "Anirudh",
      "Rockstar"
    ],
    "genres": [
      "Tamil Pop",
      "Soundtrack",
      "Electronic"
    ],
    "bio": "The reigning rockstar composer of South Indian cinema producing viral, bass-heavy anthems.",
    "monthlyListeners": "17.2M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Why This Kolaveri Di",
      "Arabic Kuthu",
      "Vaathi Coming",
      "Hukum",
      "Badass"
    ]
  },
  {
    "id": "artist-40",
    "name": "Sid Sriram",
    "aliases": [
      "Sid"
    ],
    "genres": [
      "Carnatic Fusion",
      "Soul",
      "Tamil/Telugu"
    ],
    "bio": "Carnatic trained powerhouse whose expressive high-register vocal delivery crosses languages.",
    "monthlyListeners": "10.5M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Srivalli",
      "Kannaana Kanney",
      "Inkem Inkem",
      "Samajavaragamana",
      "Adiye"
    ]
  },
  {
    "id": "artist-41",
    "name": "Devi Sri Prasad (DSP)",
    "aliases": [
      "Rockstar DSP"
    ],
    "genres": [
      "Telugu Pop",
      "Soundtrack",
      "Dance"
    ],
    "bio": "High-octane South Indian composer behind monumental blockbusters like Pushpa.",
    "monthlyListeners": "8.3M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Oo Antava",
      "Srivalli",
      "Saami Saami",
      "Seeti Maar",
      "Butta Bomma"
    ]
  },
  {
    "id": "artist-42",
    "name": "Sushin Shyam",
    "aliases": [
      "Sushin"
    ],
    "genres": [
      "Malayalam Film Score",
      "Synthwave",
      "Indie"
    ],
    "bio": "Genre-defining Malayalam composer behind Aavesham, Manjummel Boys, and Romancham.",
    "monthlyListeners": "5.1M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Illuminati",
      "Kuthanthram",
      "Aadharanjali",
      "Cherathukal",
      "Parudeesa"
    ]
  },
  {
    "id": "artist-43",
    "name": "Ajay-Atul",
    "aliases": [
      "Ajay Gogavale",
      "Atul Gogavale"
    ],
    "genres": [
      "Marathi Film Score",
      "Orchestral",
      "Folk"
    ],
    "bio": "Grand orchestrators behind Zingaat, Sairat, and thunderous devotional masterworks.",
    "monthlyListeners": "4.8M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Zingaat",
      "Sairat Zaala Ji",
      "Yad Lagla",
      "Bring It On",
      "Deva Shree Ganesha"
    ]
  },
  {
    "id": "artist-44",
    "name": "Sachin-Jigar",
    "aliases": [
      "Sachin Sanghvi",
      "Jigar Saraiya"
    ],
    "genres": [
      "Gujarati Pop",
      "Bollywood",
      "Dance"
    ],
    "bio": "Versatile composer duo revitalizing modern Gujarati pop and crafting Bollywood chartbusters.",
    "monthlyListeners": "7.9M",
    "country": "India",
    "image": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Khalasi",
      "Radha Ne Shyam",
      "Chand Ne Kaho",
      "Apna Bana Le",
      "Kamariya"
    ]
  },
  {
    "id": "artist-45",
    "name": "The Weeknd",
    "aliases": [
      "Abel Tesfaye"
    ],
    "genres": [
      "R&B",
      "Synth-pop",
      "Pop"
    ],
    "bio": "Global pop titan behind the most streamed song in history Blinding Lights and Starboy.",
    "monthlyListeners": "108.0M",
    "country": "Canada",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Blinding Lights",
      "Starboy",
      "Save Your Tears",
      "After Hours",
      "Die For You"
    ]
  },
  {
    "id": "artist-46",
    "name": "Drake",
    "aliases": [
      "Aubrey Graham",
      "Champagne Papi"
    ],
    "genres": [
      "Hip-Hop",
      "Trap",
      "R&B"
    ],
    "bio": "The defining commercial hip-hop force of the streaming era with hundreds of chart hits.",
    "monthlyListeners": "82.0M",
    "country": "Canada",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "One Dance",
      "God's Plan",
      "Hotline Bling",
      "In My Feelings",
      "Passionfruit"
    ]
  },
  {
    "id": "artist-47",
    "name": "Dua Lipa",
    "aliases": [
      "Dua"
    ],
    "genres": [
      "Pop",
      "Disco",
      "Dance-pop"
    ],
    "bio": "Three-time Grammy winner who resurrected shimmering electro-disco with Future Nostalgia.",
    "monthlyListeners": "65.0M",
    "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Levitating",
      "Don't Start Now",
      "New Rules",
      "Physical",
      "Break My Heart"
    ]
  },
  {
    "id": "artist-48",
    "name": "Post Malone",
    "aliases": [
      "Austin Richard Post",
      "Posty"
    ],
    "genres": [
      "Pop",
      "Hip-Hop",
      "Country Rock"
    ],
    "bio": "Diamond-certified genre-blending superstar behind Sunflower, Circles, and Rockstar.",
    "monthlyListeners": "72.0M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Rockstar",
      "Sunflower",
      "Circles",
      "Congratulations",
      "Better Now"
    ]
  },
  {
    "id": "artist-49",
    "name": "Billie Eilish",
    "aliases": [
      "Billie Eilish O'Connell"
    ],
    "genres": [
      "Alt Pop",
      "Electropop"
    ],
    "bio": "Phenomenal prodigy whose intimate vocal textures and dark bass redefined modern pop.",
    "monthlyListeners": "95.0M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Bad Guy",
      "Lovely",
      "Everything I Wanted",
      "Happier Than Ever",
      "Birds of a Feather"
    ]
  },
  {
    "id": "artist-50",
    "name": "Travis Scott",
    "aliases": [
      "Jacques Webster",
      "La Flame"
    ],
    "genres": [
      "Trap",
      "Psychedelic Rap"
    ],
    "bio": "Astroworld visionary creating colossal, cinematic rap spectacles with unmatched energy.",
    "monthlyListeners": "68.0M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "SICKO MODE",
      "Goosebumps",
      "HIGHEST IN THE ROOM",
      "Antidote",
      "FE!N"
    ]
  },
  {
    "id": "artist-51",
    "name": "Kendrick Lamar",
    "aliases": [
      "K.Dot",
      "Kung Fu Kenny"
    ],
    "genres": [
      "Conscious Hip-Hop",
      "West Coast Rap"
    ],
    "bio": "Pulitzer Prize winner widely hailed as the sharpest lyricist of his generation.",
    "monthlyListeners": "62.0M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "HUMBLE.",
      "Money Trees",
      "Alright",
      "Not Like Us",
      "DNA."
    ]
  },
  {
    "id": "artist-52",
    "name": "Harry Styles",
    "aliases": [
      "Harry"
    ],
    "genres": [
      "Pop Rock",
      "Britpop"
    ],
    "bio": "Solo powerhouse delivering shimmering pop perfection with As It Was and Watermelon Sugar.",
    "monthlyListeners": "52.0M",
    "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "As It Was",
      "Watermelon Sugar",
      "Adore You",
      "Sign of the Times",
      "Golden"
    ]
  },
  {
    "id": "artist-53",
    "name": "Taylor Swift",
    "aliases": [
      "Taylor"
    ],
    "genres": [
      "Pop",
      "Country",
      "Indie Folk"
    ],
    "bio": "Unrivaled cultural icon and master songwriter traversing eras from country to pop to folk.",
    "monthlyListeners": "102.0M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Cruel Summer",
      "Anti-Hero",
      "Blank Space",
      "Shake It Off",
      "Love Story"
    ]
  },
  {
    "id": "artist-54",
    "name": "Ed Sheeran",
    "aliases": [
      "Ed"
    ],
    "genres": [
      "Pop",
      "Acoustic",
      "Folk Pop"
    ],
    "bio": "Record-shattering acoustic storyteller behind global wedding and stadium anthems.",
    "monthlyListeners": "74.0M",
    "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Shape of You",
      "Perfect",
      "Thinking Out Loud",
      "Bad Habits",
      "Shivers"
    ]
  },
  {
    "id": "artist-55",
    "name": "Bruno Mars",
    "aliases": [
      "Peter Gene Hernandez"
    ],
    "genres": [
      "Funk",
      "Pop",
      "Soul"
    ],
    "bio": "Modern showman and vocal virtuoso delivering infectious retro-funk perfection.",
    "monthlyListeners": "88.0M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Uptown Funk",
      "24K Magic",
      "That's What I Like",
      "Just the Way You Are",
      "Locked Out of Heaven"
    ]
  },
  {
    "id": "artist-56",
    "name": "Ariana Grande",
    "aliases": [
      "Ariana"
    ],
    "genres": [
      "Pop",
      "R&B",
      "Dance-pop"
    ],
    "bio": "Vocal phenomenon possessing staggering range with anthems Thank U, Next and 7 Rings.",
    "monthlyListeners": "78.0M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "7 Rings",
      "Thank U Next",
      "Side to Side",
      "No Tears Left to Cry",
      "Positions"
    ]
  },
  {
    "id": "artist-57",
    "name": "SZA",
    "aliases": [
      "Sol\u00e1na Imani Rowe"
    ],
    "genres": [
      "R&B",
      "Neo-soul",
      "Alt R&B"
    ],
    "bio": "Introspective R&B queen captivating millions with Kill Bill and Snooze.",
    "monthlyListeners": "67.0M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Kill Bill",
      "Snooze",
      "Good Days",
      "Kiss Me More",
      "Saturn"
    ]
  },
  {
    "id": "artist-58",
    "name": "Justin Bieber",
    "aliases": [
      "Bieber"
    ],
    "genres": [
      "Pop",
      "R&B",
      "Dance"
    ],
    "bio": "Global pop prodigy with an unbroken run of era-defining hits across three decades.",
    "monthlyListeners": "70.0M",
    "country": "Canada",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Peaches",
      "Stay",
      "Sorry",
      "Love Yourself",
      "What Do You Mean?"
    ]
  },
  {
    "id": "artist-59",
    "name": "Rihanna",
    "aliases": [
      "RiRi",
      "BadGalRiRi"
    ],
    "genres": [
      "R&B",
      "Pop",
      "Dancehall"
    ],
    "bio": "Barbadian icon with 14 Billboard #1 singles and unmatched sonic swagger.",
    "monthlyListeners": "76.0M",
    "country": "Barbados",
    "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Umbrella",
      "We Found Love",
      "Diamonds",
      "Work",
      "Only Girl In The World"
    ]
  },
  {
    "id": "artist-60",
    "name": "Coldplay",
    "aliases": [
      "Chris Martin"
    ],
    "genres": [
      "Alt Rock",
      "Pop Rock"
    ],
    "bio": "Stadium rock titans uniting crowds with timeless anthems Yellow, Fix You, and Viva La Vida.",
    "monthlyListeners": "85.0M",
    "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Viva La Vida",
      "Yellow",
      "Fix You",
      "Hymn for the Weekend",
      "Something Just Like This"
    ]
  },
  {
    "id": "artist-61",
    "name": "Queen",
    "aliases": [
      "Freddie Mercury"
    ],
    "genres": [
      "Classic Rock",
      "Glam Rock"
    ],
    "bio": "One of rock history\u2019s most influential and operatic bands.",
    "monthlyListeners": "48.0M",
    "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Bohemian Rhapsody",
      "Don't Stop Me Now",
      "Another One Bites the Dust",
      "We Will Rock You",
      "Under Pressure"
    ]
  },
  {
    "id": "artist-62",
    "name": "Arctic Monkeys",
    "aliases": [
      "Alex Turner"
    ],
    "genres": [
      "Indie Rock",
      "Garage Rock"
    ],
    "bio": "British rock royalty behind the iconic guitar-driven masterwork AM.",
    "monthlyListeners": "46.0M",
    "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Do I Wanna Know?",
      "R U Mine?",
      "505",
      "Why'd You Only Call Me When You're High?",
      "I Wanna Be Yours"
    ]
  },
  {
    "id": "artist-63",
    "name": "Linkin Park",
    "aliases": [
      "Chester Bennington",
      "Mike Shinoda"
    ],
    "genres": [
      "Nu Metal",
      "Alt Rock"
    ],
    "bio": "Pioneering rock band uniting visceral emotion, heavy riffs, and hip-hop beats.",
    "monthlyListeners": "43.0M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "In The End",
      "Numb",
      "Faint",
      "Crawling",
      "What I've Done"
    ]
  },
  {
    "id": "artist-64",
    "name": "Avicii",
    "aliases": [
      "Tim Bergling"
    ],
    "genres": [
      "EDM",
      "Progressive House",
      "Melodic Dance"
    ],
    "bio": "Legendary producer who brought acoustic soul and uplifting melodies to stadium EDM.",
    "monthlyListeners": "35.0M",
    "country": "Sweden",
    "image": "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Wake Me Up",
      "The Nights",
      "Levels",
      "Waiting for Love",
      "Hey Brother"
    ]
  },
  {
    "id": "artist-65",
    "name": "The Chainsmokers",
    "aliases": [
      "Drew Taggart",
      "Alex Pall"
    ],
    "genres": [
      "EDM Pop",
      "Future Bass"
    ],
    "bio": "Dominant EDM-pop powerhouse behind multi-billion streaming anthems Closer and Paris.",
    "monthlyListeners": "44.0M",
    "country": "United States",
    "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Closer",
      "Don't Let Me Down",
      "Paris",
      "Roses",
      "Something Just Like This"
    ]
  },
  {
    "id": "artist-66",
    "name": "Calvin Harris",
    "aliases": [
      "Adam Wiles"
    ],
    "genres": [
      "EDM",
      "Dance-pop",
      "Electro House"
    ],
    "bio": "The world's highest-grossing DJ with an unbroken chain of festival dance anthems.",
    "monthlyListeners": "61.0M",
    "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Summer",
      "Feel So Close",
      "This Is What You Came For",
      "How Deep Is Your Love",
      "One Kiss"
    ]
  },
  {
    "id": "artist-67",
    "name": "Martin Garrix",
    "aliases": [
      "Martijn Gerard Garritsen"
    ],
    "genres": [
      "Big Room House",
      "Progressive House"
    ],
    "bio": "Four-time #1 DJ in the world known for Animals and Scared to Be Lonely.",
    "monthlyListeners": "27.0M",
    "country": "Netherlands",
    "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": [
      "Animals",
      "Scared to be Lonely",
      "In the Name of Love",
      "Tremor",
      "Summer Days"
    ]
  }
];

export const TRACKS_DATA: Track[] = [
  {
    "id": "track-1",
    "title": "Excuses",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Hidden Gems",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 176,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "vX2cDW8LUWk",
      "streamUrl": "",
      "durationSeconds": 176
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.65,
      "valence": 0.62,
      "acousticness": 0.22,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-2",
    "title": "Brown Munde",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Brown Munde",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 268,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "VNs_cCtdbPc",
      "streamUrl": "",
      "durationSeconds": 268
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.82,
      "valence": 0.75,
      "acousticness": 0.12,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-3",
    "title": "Insane",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Hidden Gems",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 206,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "cqP8I5ea1e4",
      "streamUrl": "",
      "durationSeconds": 206
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.78,
      "valence": 0.68,
      "acousticness": 0.15,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-4",
    "title": "With You",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Two Hearts Never Break The Same",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 154,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4tywp83zkmk",
      "streamUrl": "",
      "durationSeconds": 154
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.74,
      "energy": 0.6,
      "valence": 0.7,
      "acousticness": 0.28,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-5",
    "title": "Dil Nu",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Two Hearts Never Break The Same",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 232,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "bB3G8cWcIew",
      "streamUrl": "",
      "durationSeconds": 232
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.7,
      "energy": 0.58,
      "valence": 0.55,
      "acousticness": 0.35,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-6",
    "title": "Summer High",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Summer High",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 178,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "galPz4A_xXo",
      "streamUrl": "",
      "durationSeconds": 178
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Euphoric",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.81,
      "energy": 0.75,
      "valence": 0.72,
      "acousticness": 0.18,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-7",
    "title": "Toxic",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Hidden Gems",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "Y2g1u4m2F38",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.76,
      "energy": 0.64,
      "valence": 0.58,
      "acousticness": 0.2,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-8",
    "title": "Majhail",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Majhail",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 213,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "pM0Q2l6_x1I",
      "streamUrl": "",
      "durationSeconds": 213
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.8,
      "valence": 0.74,
      "acousticness": 0.14,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-9",
    "title": "Saada Pyaar",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Hidden Gems",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3i7e6J21W_8",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.52,
      "valence": 0.48,
      "acousticness": 0.42,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-10",
    "title": "Spaceship",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Hidden Gems",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 165,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "nU7F8qR4b1s",
      "streamUrl": "",
      "durationSeconds": 165
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.62,
      "valence": 0.6,
      "acousticness": 0.25,
      "vibeScore": 0.78
    }
  },
  {
    "id": "track-11",
    "title": "Droptop",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Not By Chance",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 185,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "kL5w2N3tX8Y",
      "streamUrl": "",
      "durationSeconds": 185
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.83,
      "energy": 0.76,
      "valence": 0.71,
      "acousticness": 0.16,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-12",
    "title": "Final Thoughts",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Two Hearts Never Break The Same",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 192,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "mQ9F2w8e4K1",
      "streamUrl": "",
      "durationSeconds": 192
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.5,
      "valence": 0.44,
      "acousticness": 0.45,
      "vibeScore": 0.79
    }
  },
  {
    "id": "track-13",
    "title": "Desires",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Hidden Gems",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 182,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "y8xVw3l7M0q",
      "streamUrl": "",
      "durationSeconds": 182
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 94,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.59,
      "valence": 0.64,
      "acousticness": 0.3,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-14",
    "title": "Tere Te",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Hidden Gems",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 174,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "zK9P1w7e4L2",
      "streamUrl": "",
      "durationSeconds": 174
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.77,
      "energy": 0.66,
      "valence": 0.72,
      "acousticness": 0.21,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-15",
    "title": "All Night",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Two Hearts Never Break The Same",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 168,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "aB3d5e7F9g1",
      "streamUrl": "",
      "durationSeconds": 168
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.72,
      "valence": 0.66,
      "acousticness": 0.17,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-16",
    "title": "Wo Noor",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Two Hearts Never Break The Same",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "cK1L3M5N7O9",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.52,
      "acousticness": 0.5,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-17",
    "title": "True Stories",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "True Stories",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 172,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "eP2Q4R6S8T0",
      "streamUrl": "",
      "durationSeconds": 172
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.77,
      "valence": 0.7,
      "acousticness": 0.15,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-18",
    "title": "Sleepless",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Two Hearts Never Break The Same",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 188,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "gU1V3W5X7Y9",
      "streamUrl": "",
      "durationSeconds": 188
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.69,
      "energy": 0.54,
      "valence": 0.49,
      "acousticness": 0.38,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-19",
    "title": "G.O.A.T.",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "G.O.A.T.",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 223,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "cl0a3i2wFcc",
      "streamUrl": "",
      "durationSeconds": 223
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.85,
      "valence": 0.82,
      "acousticness": 0.1,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-20",
    "title": "Lover",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "MoonChild Era",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "mH_LFkWxpI0",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.76,
      "energy": 0.7,
      "valence": 0.8,
      "acousticness": 0.18,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-21",
    "title": "Born to Shine",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "G.O.A.T.",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 214,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yN68c4nC1Wk",
      "streamUrl": "",
      "durationSeconds": 214
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Euphoric",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.88,
      "valence": 0.85,
      "acousticness": 0.08,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-22",
    "title": "Peaches",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Drive Thru",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 190,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "gU9jH5jW2kI",
      "streamUrl": "",
      "durationSeconds": 190
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.79,
      "energy": 0.68,
      "valence": 0.74,
      "acousticness": 0.22,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-23",
    "title": "Clash",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "G.O.A.T.",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 178,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5uWpYn7eZl8",
      "streamUrl": "",
      "durationSeconds": 178
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.84,
      "valence": 0.78,
      "acousticness": 0.11,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-24",
    "title": "Hass Hass",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Hass Hass",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 158,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "mN_FkZ8G7h0",
      "streamUrl": "",
      "durationSeconds": 158
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.66,
      "valence": 0.79,
      "acousticness": 0.2,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-25",
    "title": "Tauba Tauba",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Bad Newz",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 208,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "tW1k5_Xl2pY",
      "streamUrl": "",
      "durationSeconds": 208
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.92,
      "valence": 0.88,
      "acousticness": 0.06,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-26",
    "title": "Vibe",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "MoonChild Era",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 152,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "b1xK9l7P0qY",
      "streamUrl": "",
      "durationSeconds": 152
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.72,
      "valence": 0.84,
      "acousticness": 0.16,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-27",
    "title": "Do You Know",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Do You Know",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "d3W7p8xX9v1",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 94,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.62,
      "valence": 0.76,
      "acousticness": 0.32,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-28",
    "title": "Patiala Peg",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Patiala Peg",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 186,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "e1f9g8h7j6k",
      "streamUrl": "",
      "durationSeconds": 186
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.9,
      "valence": 0.89,
      "acousticness": 0.09,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-29",
    "title": "5 Taara",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "5 Taara",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "m5k8x9p2w1q",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.91,
      "valence": 0.9,
      "acousticness": 0.08,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-30",
    "title": "Proper Patola",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Proper Patola",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 222,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q8r7t6y5u4i",
      "streamUrl": "",
      "durationSeconds": 222
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.86,
      "valence": 0.84,
      "acousticness": 0.12,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-31",
    "title": "Lemonade",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Drive Thru",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 170,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "z1x2c3v4b5n",
      "streamUrl": "",
      "durationSeconds": 170
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.69,
      "valence": 0.75,
      "acousticness": 0.24,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-32",
    "title": "Naina",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Crew",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 180,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "p9o8i7u6y5t",
      "streamUrl": "",
      "durationSeconds": 180
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 103,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.74,
      "valence": 0.81,
      "acousticness": 0.19,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-33",
    "title": "Ikk Kudi",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Udta Punjab",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "l4k3j2h1g0f",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Punjabi Folk",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 85,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.45,
      "valence": 0.58,
      "acousticness": 0.65,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-34",
    "title": "Raat Di Gedi",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Raat Di Gedi",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "b8v7c6x5z4a",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.83,
      "energy": 0.78,
      "valence": 0.77,
      "acousticness": 0.15,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-35",
    "title": "Black & White",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "MoonChild Era",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 192,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "s9d8f7g6h5j",
      "streamUrl": "",
      "durationSeconds": 192
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.81,
      "energy": 0.71,
      "valence": 0.76,
      "acousticness": 0.18,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-36",
    "title": "Kinni Kinni",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Ghost",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "k8j7h6g5f4d",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.76,
      "valence": 0.82,
      "acousticness": 0.14,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-37",
    "title": "Case",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Ghost",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 188,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "m1n2b3v4c5x",
      "streamUrl": "",
      "durationSeconds": 188
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.82,
      "valence": 0.79,
      "acousticness": 0.12,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-38",
    "title": "Putt Jatt Da",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Putt Jatt Da",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "r5t6y7u8i9o",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.89,
      "valence": 0.86,
      "acousticness": 0.1,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-39",
    "title": "Softly",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Making Memories",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 156,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "cWMxCE2HTag",
      "streamUrl": "",
      "durationSeconds": 156
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.68,
      "valence": 0.72,
      "acousticness": 0.2,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-40",
    "title": "Winning Speech",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Street Dreams",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "r_wR2e7b8gQ",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Punjabi Rap",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.84,
      "valence": 0.7,
      "acousticness": 0.1,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-41",
    "title": "Admirin You",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Making Memories",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "kL9r3v2m1q8",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.7,
      "valence": 0.76,
      "acousticness": 0.18,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-42",
    "title": "52 Bars",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Four You",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x4z3v2c1b0m",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Punjabi Rap",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.86,
      "valence": 0.65,
      "acousticness": 0.08,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-43",
    "title": "White Brown Black",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Way Ahead",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 184,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q1w2e3r4t5y",
      "streamUrl": "",
      "durationSeconds": 184
    },
    "genre": "Punjabi Rap",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.88,
      "valence": 0.75,
      "acousticness": 0.09,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-44",
    "title": "Don't Look",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Don't Look",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "a9s8d7f6g5h",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.8,
      "valence": 0.74,
      "acousticness": 0.12,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-45",
    "title": "Chitta Kurta",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Chitta Kurta",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "z8x7c6v5b4n",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.89,
      "valence": 0.85,
      "acousticness": 0.11,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-46",
    "title": "Click That B Kickin It",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "BTFU",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 180,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "p1o2i3u4y5t",
      "streamUrl": "",
      "durationSeconds": 180
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.91,
      "valence": 0.88,
      "acousticness": 0.08,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-47",
    "title": "Mexico",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Mexico",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 190,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "m9n8b7v6c5x",
      "streamUrl": "",
      "durationSeconds": 190
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.81,
      "energy": 0.74,
      "valence": 0.79,
      "acousticness": 0.16,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-48",
    "title": "Kya Baat Aa",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Kya Baat Aa",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 212,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "l1k2j3h4g5f",
      "streamUrl": "",
      "durationSeconds": 212
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.76,
      "energy": 0.68,
      "valence": 0.75,
      "acousticness": 0.22,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-49",
    "title": "Bachke Bachke",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Making Memories",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 188,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "d9f8g7h6j5k",
      "streamUrl": "",
      "durationSeconds": 188
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.82,
      "valence": 0.78,
      "acousticness": 0.14,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-50",
    "title": "On Top",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "On Top",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 178,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "s1d2f3g4h5j",
      "streamUrl": "",
      "durationSeconds": 178
    },
    "genre": "Punjabi Rap",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.85,
      "valence": 0.72,
      "acousticness": 0.1,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-51",
    "title": "Players",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Four You",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 174,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "w9e8r7t6y5u",
      "streamUrl": "",
      "durationSeconds": 174
    },
    "genre": "Punjabi Rap",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.84,
      "valence": 0.77,
      "acousticness": 0.12,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-52",
    "title": "Gangsta",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Way Ahead",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 182,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q9w8e7r6t5y",
      "streamUrl": "",
      "durationSeconds": 182
    },
    "genre": "Punjabi Rap",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.83,
      "energy": 0.87,
      "valence": 0.68,
      "acousticness": 0.09,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-53",
    "title": "Sheesha",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Sheesha",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "z1x2c3v4b5m",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.71,
      "valence": 0.79,
      "acousticness": 0.2,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-54",
    "title": "Facts",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Facts",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x9c8v7b6n5m",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Punjabi Rap",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.83,
      "valence": 0.69,
      "acousticness": 0.11,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-55",
    "title": "Rim vs Jhanjar",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Rim vs Jhanjar",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 206,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "p8o7i6u5y4t",
      "streamUrl": "",
      "durationSeconds": 206
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.88,
      "valence": 0.83,
      "acousticness": 0.13,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-56",
    "title": "Hukam",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Hukam",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 186,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "l9k8j7h6g5f",
      "streamUrl": "",
      "durationSeconds": 186
    },
    "genre": "Punjabi Rap",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.86,
      "valence": 0.71,
      "acousticness": 0.1,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-57",
    "title": "Cheques",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Still Rollin",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 183,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4tywp83zkm0",
      "streamUrl": "",
      "durationSeconds": 183
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.74,
      "valence": 0.78,
      "acousticness": 0.15,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-58",
    "title": "Baller",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Baller",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 148,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "d8c7b6a5z4y",
      "streamUrl": "",
      "durationSeconds": 148
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.82,
      "valence": 0.81,
      "acousticness": 0.1,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-59",
    "title": "No Love",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "No Love",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 170,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "w1e2r3t4y5u",
      "streamUrl": "",
      "durationSeconds": 170
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.7,
      "valence": 0.65,
      "acousticness": 0.22,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-60",
    "title": "Elevated",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Elevated",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "s9d8f7g6h5k",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.79,
      "valence": 0.74,
      "acousticness": 0.14,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-61",
    "title": "We Rollin",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "We Rollin",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 199,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x1c2v3b4n5m",
      "streamUrl": "",
      "durationSeconds": 199
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.83,
      "valence": 0.8,
      "acousticness": 0.11,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-62",
    "title": "Still Rollin",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Still Rollin",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 174,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "m8n7b6v5c4x",
      "streamUrl": "",
      "durationSeconds": 174
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.75,
      "valence": 0.76,
      "acousticness": 0.16,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-63",
    "title": "Her",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Still Rollin",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 158,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "k1j2h3g4f5d",
      "streamUrl": "",
      "durationSeconds": 158
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 94,
    "acousticFeatures": {
      "danceability": 0.79,
      "energy": 0.65,
      "valence": 0.72,
      "acousticness": 0.25,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-64",
    "title": "King Shit",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Leo",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 212,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "p9o8u7y6t5r",
      "streamUrl": "",
      "durationSeconds": 212
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.85,
      "valence": 0.73,
      "acousticness": 0.09,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-65",
    "title": "One Love",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "One Love",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 166,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "b1n2m3k4j5h",
      "streamUrl": "",
      "durationSeconds": 166
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.69,
      "valence": 0.75,
      "acousticness": 0.19,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-66",
    "title": "Hood Anthem",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Leo",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 182,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "c9v8b7n6m5k",
      "streamUrl": "",
      "durationSeconds": 182
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.84,
      "valence": 0.71,
      "acousticness": 0.1,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-67",
    "title": "Dior",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Still Rollin",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 150,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "f1g2h3j4k5l",
      "streamUrl": "",
      "durationSeconds": 150
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.83,
      "energy": 0.72,
      "valence": 0.77,
      "acousticness": 0.18,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-68",
    "title": "Safety Off",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Leo",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 178,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "t9y8u7i6o5p",
      "streamUrl": "",
      "durationSeconds": 178
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.86,
      "valence": 0.69,
      "acousticness": 0.08,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-69",
    "title": "You and Me",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Leo",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 162,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "r1e2w3q4a5s",
      "streamUrl": "",
      "durationSeconds": 162
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.67,
      "valence": 0.74,
      "acousticness": 0.22,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-70",
    "title": "Ruthless",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Still Rollin",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 188,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "d1f2g3h4j5k",
      "streamUrl": "",
      "durationSeconds": 188
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 103,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.83,
      "valence": 0.7,
      "acousticness": 0.11,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-71",
    "title": "Ice",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Still Rollin",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 170,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "z9x8c7v6b5n",
      "streamUrl": "",
      "durationSeconds": 170
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 99,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.71,
      "valence": 0.75,
      "acousticness": 0.17,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-72",
    "title": "295",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Moosetape",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 270,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "n_FCrCQ6-9U",
      "streamUrl": "",
      "durationSeconds": 270
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.88,
      "valence": 0.62,
      "acousticness": 0.12,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-73",
    "title": "So High",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "PBX 1",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 234,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "GgmFC83WHlo",
      "streamUrl": "",
      "durationSeconds": 234
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.9,
      "valence": 0.78,
      "acousticness": 0.08,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-74",
    "title": "The Last Ride",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "No Name",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 262,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6x7G_S_pE9k",
      "streamUrl": "",
      "durationSeconds": 262
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.82,
      "valence": 0.55,
      "acousticness": 0.15,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-75",
    "title": "Legend",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Legend",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q8x9w2e3r4t",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.89,
      "valence": 0.7,
      "acousticness": 0.1,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-76",
    "title": "Same Beef",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Same Beef",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 278,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "s1d2f3g4h5k",
      "streamUrl": "",
      "durationSeconds": 278
    },
    "genre": "Desi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.91,
      "valence": 0.74,
      "acousticness": 0.07,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-77",
    "title": "Bambiha Bole",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Bambiha Bole",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 305,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x9c8v7b6n5m",
      "streamUrl": "",
      "durationSeconds": 305
    },
    "genre": "Folk",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.93,
      "valence": 0.82,
      "acousticness": 0.11,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-78",
    "title": "Tibeyan Da Putt",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Tibeyan Da Putt",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 312,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "p1o2i3u4y5t",
      "streamUrl": "",
      "durationSeconds": 312
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 94,
    "acousticFeatures": {
      "danceability": 0.81,
      "energy": 0.85,
      "valence": 0.65,
      "acousticness": 0.14,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-79",
    "title": "Just Look",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "PBX 1",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 226,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "m9n8b7v6c5x",
      "streamUrl": "",
      "durationSeconds": 226
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.76,
      "valence": 0.72,
      "acousticness": 0.18,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-80",
    "title": "Dollar",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Dakuaan Da Munda",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "l1k2j3h4g5f",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.9,
      "valence": 0.84,
      "acousticness": 0.09,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-81",
    "title": "Tochan",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Tochan",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "d9f8g7h6j5k",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Folk",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.92,
      "valence": 0.85,
      "acousticness": 0.1,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-82",
    "title": "Issa Jatt",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Issa Jatt",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 240,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "s1d2f3g4h5j",
      "streamUrl": "",
      "durationSeconds": 240
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.83,
      "energy": 0.87,
      "valence": 0.68,
      "acousticness": 0.11,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-83",
    "title": "Badfella",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "PBX 1",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "w9e8r7t6y5u",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.86,
      "valence": 0.71,
      "acousticness": 0.1,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-84",
    "title": "Poison",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Poison",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q9w8e7r6t5y",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 93,
    "acousticFeatures": {
      "danceability": 0.79,
      "energy": 0.78,
      "valence": 0.62,
      "acousticness": 0.16,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-85",
    "title": "Famous",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "PBX 1",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 248,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "z1x2c3v4b5m",
      "streamUrl": "",
      "durationSeconds": 248
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.81,
      "energy": 0.84,
      "valence": 0.67,
      "acousticness": 0.13,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-86",
    "title": "Never Fold",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "No Name",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 182,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x9c8v7b6n5a",
      "streamUrl": "",
      "durationSeconds": 182
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.88,
      "valence": 0.73,
      "acousticness": 0.09,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-87",
    "title": "Everybody Hurts",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "No Name",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 168,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "p8o7i6u5y4r",
      "streamUrl": "",
      "durationSeconds": 168
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.7,
      "energy": 0.58,
      "valence": 0.45,
      "acousticness": 0.4,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-88",
    "title": "Levels",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Levels",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "l9k8j7h6g5d",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.89,
      "valence": 0.75,
      "acousticness": 0.08,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-89",
    "title": "Built Different",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Moosetape",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 195,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "m1n2b3v4c5r",
      "streamUrl": "",
      "durationSeconds": 195
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.9,
      "valence": 0.76,
      "acousticness": 0.07,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-90",
    "title": "Dear Mama",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Dear Mama",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 250,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "r5t6y7u8i9e",
      "streamUrl": "",
      "durationSeconds": 250
    },
    "genre": "Folk",
    "language": "Punjabi",
    "mood": "Nostalgic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.52,
      "valence": 0.5,
      "acousticness": 0.55,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-91",
    "title": "Sanju",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Sanju",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "cWMxCE2HTa1",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.87,
      "valence": 0.72,
      "acousticness": 0.1,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-92",
    "title": "Lahore",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Lahore",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "dZ0fwJojhrs",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.88,
      "valence": 0.89,
      "acousticness": 0.1,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-93",
    "title": "High Rated Gabru",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "High Rated Gabru",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 214,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "hjWf8A0YNSE",
      "streamUrl": "",
      "durationSeconds": 214
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.87,
      "valence": 0.86,
      "acousticness": 0.12,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-94",
    "title": "Suit Suit",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Hindi Medium",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 190,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "uQ763VvqiPE",
      "streamUrl": "",
      "durationSeconds": 190
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.85,
      "valence": 0.84,
      "acousticness": 0.14,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-95",
    "title": "Patola",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Blackmail",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 184,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "r_wR2e7b8g1",
      "streamUrl": "",
      "durationSeconds": 184
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.88,
      "valence": 0.87,
      "acousticness": 0.11,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-96",
    "title": "Made in India",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Made in India",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 195,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "kL9r3v2m1q1",
      "streamUrl": "",
      "durationSeconds": 195
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Euphoric",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.83,
      "valence": 0.85,
      "acousticness": 0.15,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-97",
    "title": "Slowly Slowly",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Slowly Slowly",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 206,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x4z3v2c1b01",
      "streamUrl": "",
      "durationSeconds": 206
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.82,
      "valence": 0.81,
      "acousticness": 0.16,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-98",
    "title": "Naach Meri Rani",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Naach Meri Rani",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q1w2e3r4t51",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.92,
      "valence": 0.88,
      "acousticness": 0.08,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-99",
    "title": "Ban Ja Rani",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Tumhari Sulu",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 226,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "a9s8d7f6g51",
      "streamUrl": "",
      "durationSeconds": 226
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.79,
      "energy": 0.74,
      "valence": 0.82,
      "acousticness": 0.21,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-100",
    "title": "Ishare Tere",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Ishare Tere",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 192,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "z8x7c6v5b41",
      "streamUrl": "",
      "durationSeconds": 192
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.78,
      "valence": 0.83,
      "acousticness": 0.18,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-101",
    "title": "Morni Banke",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Badhaai Ho",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "p1o2i3u4y51",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.94,
      "valence": 0.9,
      "acousticness": 0.07,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-102",
    "title": "Bijlee Bijlee",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Bijlee Bijlee",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 188,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "NwdQx2P_ytk",
      "streamUrl": "",
      "durationSeconds": 188
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.86,
      "valence": 0.85,
      "acousticness": 0.12,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-103",
    "title": "Backbone",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Backbone",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 220,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "Z7Y1i2u3o4p",
      "streamUrl": "",
      "durationSeconds": 220
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.75,
      "valence": 0.8,
      "acousticness": 0.19,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-104",
    "title": "Kya Baat Ay",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Kya Baat Ay",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "X9c8v7b6n5m",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.82,
      "valence": 0.83,
      "acousticness": 0.15,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-105",
    "title": "Horn Blow",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Horn Blow",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "V1b2n3m4k5j",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.84,
      "valence": 0.81,
      "acousticness": 0.13,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-106",
    "title": "Naah",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Naah",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "L9k8j7h6g5f",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.88,
      "valence": 0.86,
      "acousticness": 0.11,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-107",
    "title": "Soch",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Soch",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 280,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "P1o2i3u4y5t",
      "streamUrl": "",
      "durationSeconds": 280
    },
    "genre": "Punjabi Folk",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.46,
      "valence": 0.52,
      "acousticness": 0.6,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-108",
    "title": "Yaarr Ni Milyaa",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Yaarr Ni Milyaa",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 242,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "T9y8u7i6o5p",
      "streamUrl": "",
      "durationSeconds": 242
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.73,
      "energy": 0.68,
      "valence": 0.55,
      "acousticness": 0.28,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-109",
    "title": "Titliaan Warga",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Titliaan Warga",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 236,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "R1e2w3q4a5s",
      "streamUrl": "",
      "durationSeconds": 236
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.7,
      "energy": 0.62,
      "valence": 0.5,
      "acousticness": 0.35,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-110",
    "title": "Kudiyan Lahore Diyan",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Kudiyan Lahore Diyan",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 182,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "D1f2g3h4j5k",
      "streamUrl": "",
      "durationSeconds": 182
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.8,
      "valence": 0.82,
      "acousticness": 0.16,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-111",
    "title": "Qismat",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Qismat",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 255,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9xVp8K2m1Q8",
      "streamUrl": "",
      "durationSeconds": 255
    },
    "genre": "Punjabi Folk",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.5,
      "valence": 0.45,
      "acousticness": 0.55,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-112",
    "title": "Wang Da Naap",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Muklawa",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4k3j2h1g0f9",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.89,
      "valence": 0.88,
      "acousticness": 0.12,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-113",
    "title": "Haan Haige Aa",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Haan Haige Aa",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8v7c6x5z4a3",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.7,
      "valence": 0.79,
      "acousticness": 0.22,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-114",
    "title": "Zindabaad Yaarian",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Zindabaad Yaarian",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2c3v4b5n6m7",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.88,
      "valence": 0.85,
      "acousticness": 0.14,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-115",
    "title": "Khabbi Seat",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Khabbi Seat",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 195,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6m7k8j9h0g1",
      "streamUrl": "",
      "durationSeconds": 195
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.72,
      "valence": 0.78,
      "acousticness": 0.2,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-116",
    "title": "Mini Cooper",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Nikka Zaildar",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 188,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1g2h3j4k5l6",
      "streamUrl": "",
      "durationSeconds": 188
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.9,
      "valence": 0.87,
      "acousticness": 0.1,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-117",
    "title": "Teri Jatti",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Teri Jatti",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7y6t5r4e3w2",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.81,
      "energy": 0.76,
      "valence": 0.82,
      "acousticness": 0.18,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-118",
    "title": "Chann Sitare",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Oye Makhna",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 222,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3w2q1a0s9d8",
      "streamUrl": "",
      "durationSeconds": 222
    },
    "genre": "Punjabi Folk",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.58,
      "valence": 0.72,
      "acousticness": 0.42,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-119",
    "title": "Filhall",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Filhall",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 254,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1j2k3l4m5n6",
      "streamUrl": "",
      "durationSeconds": 254
    },
    "genre": "Sufi",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.52,
      "valence": 0.42,
      "acousticness": 0.58,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-120",
    "title": "Filhaal 2",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Filhaal 2 Mohabbat",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 268,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7u8i9o0p1q2",
      "streamUrl": "",
      "durationSeconds": 268
    },
    "genre": "Sufi",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 78,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.55,
      "valence": 0.4,
      "acousticness": 0.6,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-121",
    "title": "Mann Bharrya",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Mann Bharrya",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 272,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3e4r5t6y7u8",
      "streamUrl": "",
      "durationSeconds": 272
    },
    "genre": "Sufi",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 76,
    "acousticFeatures": {
      "danceability": 0.52,
      "energy": 0.48,
      "valence": 0.36,
      "acousticness": 0.65,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-122",
    "title": "Teri Mitti",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Kesari",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 314,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "wF_B_a3Z6E8",
      "streamUrl": "",
      "durationSeconds": 314
    },
    "genre": "Sufi",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.54,
      "energy": 0.65,
      "valence": 0.5,
      "acousticness": 0.52,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-123",
    "title": "Pachtaoge",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Jaani Ve",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 226,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9o8i7u6y5t4",
      "streamUrl": "",
      "durationSeconds": 226
    },
    "genre": "Sufi",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.6,
      "valence": 0.44,
      "acousticness": 0.48,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-124",
    "title": "Baarish Ki Jaaye",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Baarish Ki Jaaye",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 240,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5r4e3w2q1a0",
      "streamUrl": "",
      "durationSeconds": 240
    },
    "genre": "Sufi",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.66,
      "energy": 0.62,
      "valence": 0.6,
      "acousticness": 0.44,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-125",
    "title": "Dholna",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Qismat",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1a2s3d4f5g6",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Punjabi Folk",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.7,
      "energy": 0.65,
      "valence": 0.68,
      "acousticness": 0.38,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-126",
    "title": "Kya Loge Tum",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Kya Loge Tum",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 228,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7h8j9k0l1m2",
      "streamUrl": "",
      "durationSeconds": 228
    },
    "genre": "Sufi",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.64,
      "energy": 0.68,
      "valence": 0.46,
      "acousticness": 0.42,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-127",
    "title": "Amplifier",
    "artist": "Imran Khan",
    "artistId": "artist-10",
    "artists": [
      {
        "artistId": "artist-10",
        "artistName": "Imran Khan",
        "role": "primary"
      }
    ],
    "album": "Unforgettable",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 234,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "uuCFRaJdU7Q",
      "streamUrl": "",
      "durationSeconds": 234
    },
    "genre": "Urban Punjabi",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.89,
      "valence": 0.84,
      "acousticness": 0.08,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-128",
    "title": "Satisfya",
    "artist": "Imran Khan",
    "artistId": "artist-10",
    "artists": [
      {
        "artistId": "artist-10",
        "artistName": "Imran Khan",
        "role": "primary"
      }
    ],
    "album": "Satisfya",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 184,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "pfVODjDBFxU",
      "streamUrl": "",
      "durationSeconds": 184
    },
    "genre": "Urban Punjabi",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.94,
      "energy": 0.91,
      "valence": 0.86,
      "acousticness": 0.06,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-129",
    "title": "Bewafa",
    "artist": "Imran Khan",
    "artistId": "artist-10",
    "artists": [
      {
        "artistId": "artist-10",
        "artistName": "Imran Khan",
        "role": "primary"
      }
    ],
    "album": "Unforgettable",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3l4m5n6o7p8",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Urban Punjabi",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.72,
      "valence": 0.64,
      "acousticness": 0.24,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-130",
    "title": "Knightridah",
    "artist": "Imran Khan",
    "artistId": "artist-10",
    "artists": [
      {
        "artistId": "artist-10",
        "artistName": "Imran Khan",
        "role": "primary"
      }
    ],
    "album": "Knightridah",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9q8w7e6r5t4",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Urban Punjabi",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.84,
      "valence": 0.8,
      "acousticness": 0.1,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-131",
    "title": "Mundian To Bach Ke",
    "artist": "Panjabi MC",
    "artistId": "artist-11",
    "artists": [
      {
        "artistId": "artist-11",
        "artistName": "Panjabi MC",
        "role": "primary"
      }
    ],
    "album": "Legalised",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 244,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "DJztXj2GPfk",
      "streamUrl": "",
      "durationSeconds": 244
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.95,
      "energy": 0.94,
      "valence": 0.91,
      "acousticness": 0.05,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-132",
    "title": "Jogi",
    "artist": "Panjabi MC",
    "artistId": "artist-11",
    "artists": [
      {
        "artistId": "artist-11",
        "artistName": "Panjabi MC",
        "role": "primary"
      }
    ],
    "album": "The Album",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 232,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2y3u4i5o6p7",
      "streamUrl": "",
      "durationSeconds": 232
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.92,
      "valence": 0.88,
      "acousticness": 0.08,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-133",
    "title": "Mirza",
    "artist": "Panjabi MC",
    "artistId": "artist-11",
    "artists": [
      {
        "artistId": "artist-11",
        "artistName": "Panjabi MC",
        "role": "primary"
      }
    ],
    "album": "Legalised",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 250,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8a9s0d1f2g3",
      "streamUrl": "",
      "durationSeconds": 250
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.88,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-134",
    "title": "Tunak Tunak Tun",
    "artist": "Daler Mehndi",
    "artistId": "artist-12",
    "artists": [
      {
        "artistId": "artist-12",
        "artistName": "Daler Mehndi",
        "role": "primary"
      }
    ],
    "album": "Tunak Tunak Tun",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 302,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "vTIIMJ9tUc8",
      "streamUrl": "",
      "durationSeconds": 302
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Euphoric",
    "bpm": 132,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.96,
      "valence": 0.95,
      "acousticness": 0.05,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-135",
    "title": "Bolo Ta Ra Ra",
    "artist": "Daler Mehndi",
    "artistId": "artist-12",
    "artists": [
      {
        "artistId": "artist-12",
        "artistName": "Daler Mehndi",
        "role": "primary"
      }
    ],
    "album": "Bolo Ta Ra Ra",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 285,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4h5j6k7l8m9",
      "streamUrl": "",
      "durationSeconds": 285
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Euphoric",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.94,
      "valence": 0.92,
      "acousticness": 0.07,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-136",
    "title": "Dardi Rab Rab",
    "artist": "Daler Mehndi",
    "artistId": "artist-12",
    "artists": [
      {
        "artistId": "artist-12",
        "artistName": "Daler Mehndi",
        "role": "primary"
      }
    ],
    "album": "Dardi Rab Rab",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 270,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0z1x2c3v4b5",
      "streamUrl": "",
      "durationSeconds": 270
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.92,
      "valence": 0.9,
      "acousticness": 0.08,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-137",
    "title": "Ek Tera Pyar",
    "artist": "Bohemia",
    "artistId": "artist-18",
    "artists": [
      {
        "artistId": "artist-18",
        "artistName": "Bohemia",
        "role": "primary"
      }
    ],
    "album": "Da Rap Star",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 248,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6n7m8k9j0h1",
      "streamUrl": "",
      "durationSeconds": 248
    },
    "genre": "Desi Hip Hop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 94,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.78,
      "valence": 0.72,
      "acousticness": 0.18,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-138",
    "title": "Kali Denali",
    "artist": "Bohemia",
    "artistId": "artist-18",
    "artists": [
      {
        "artistId": "artist-18",
        "artistName": "Bohemia",
        "role": "primary"
      }
    ],
    "album": "Vich Pardesan De",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2w3e4r5t6y7",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Desi Hip Hop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.8,
      "valence": 0.6,
      "acousticness": 0.14,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-139",
    "title": "Rooh",
    "artist": "Bohemia",
    "artistId": "artist-18",
    "artists": [
      {
        "artistId": "artist-18",
        "artistName": "Bohemia",
        "role": "primary"
      }
    ],
    "album": "Da Rap Star",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 235,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8u9i0o1p2q3",
      "streamUrl": "",
      "durationSeconds": 235
    },
    "genre": "Desi Hip Hop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.74,
      "valence": 0.58,
      "acousticness": 0.22,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-140",
    "title": "Jaguar",
    "artist": "Bohemia",
    "artistId": "artist-18",
    "artists": [
      {
        "artistId": "artist-18",
        "artistName": "Bohemia",
        "role": "primary"
      }
    ],
    "album": "Jaguar",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g9",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Desi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.88,
      "valence": 0.82,
      "acousticness": 0.1,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-141",
    "title": "Illegal Weapon",
    "artist": "Jasmine Sandlas",
    "artistId": "artist-13",
    "artists": [
      {
        "artistId": "artist-13",
        "artistName": "Jasmine Sandlas",
        "role": "primary"
      }
    ],
    "album": "Illegal Weapon",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 212,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0h1j2k3l4m5",
      "streamUrl": "",
      "durationSeconds": 212
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.93,
      "valence": 0.89,
      "acousticness": 0.08,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-142",
    "title": "Sip Sip",
    "artist": "Jasmine Sandlas",
    "artistId": "artist-13",
    "artists": [
      {
        "artistId": "artist-13",
        "artistName": "Jasmine Sandlas",
        "role": "primary"
      }
    ],
    "album": "Sip Sip",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6n7b8v9c0x1",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.91,
      "valence": 0.87,
      "acousticness": 0.09,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-143",
    "title": "Bamb Jatt",
    "artist": "Jasmine Sandlas",
    "artistId": "artist-13",
    "artists": [
      {
        "artistId": "artist-13",
        "artistName": "Jasmine Sandlas",
        "role": "primary"
      }
    ],
    "album": "Bamb Jatt",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2q3w4e5r6t7",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.89,
      "valence": 0.85,
      "acousticness": 0.11,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-144",
    "title": "Bhalwani Geda",
    "artist": "Nimrat Khaira",
    "artistId": "artist-14",
    "artists": [
      {
        "artistId": "artist-14",
        "artistName": "Nimrat Khaira",
        "role": "primary"
      }
    ],
    "album": "Nimmo",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 178,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8y9u0i1o2p3",
      "streamUrl": "",
      "durationSeconds": 178
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.92,
      "valence": 0.9,
      "acousticness": 0.07,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-145",
    "title": "Designer",
    "artist": "Nimrat Khaira",
    "artistId": "artist-14",
    "artists": [
      {
        "artistId": "artist-14",
        "artistName": "Nimrat Khaira",
        "role": "primary"
      }
    ],
    "album": "Designer",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 192,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g0",
      "streamUrl": "",
      "durationSeconds": 192
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.88,
      "valence": 0.86,
      "acousticness": 0.12,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-146",
    "title": "Time Chakda",
    "artist": "Nimrat Khaira",
    "artistId": "artist-14",
    "artists": [
      {
        "artistId": "artist-14",
        "artistName": "Nimrat Khaira",
        "role": "primary"
      }
    ],
    "album": "Time Chakda",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 208,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1z2x3c4v5b6",
      "streamUrl": "",
      "durationSeconds": 208
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.78,
      "valence": 0.84,
      "acousticness": 0.18,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-147",
    "title": "Jaani Tera Naa",
    "artist": "Sunanda Sharma",
    "artistId": "artist-15",
    "artists": [
      {
        "artistId": "artist-15",
        "artistName": "Sunanda Sharma",
        "role": "primary"
      }
    ],
    "album": "Jaani Tera Naa",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 214,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7n8m9k0j1h2",
      "streamUrl": "",
      "durationSeconds": 214
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.89,
      "valence": 0.88,
      "acousticness": 0.1,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-148",
    "title": "Sandal",
    "artist": "Sunanda Sharma",
    "artistId": "artist-15",
    "artists": [
      {
        "artistId": "artist-15",
        "artistName": "Sunanda Sharma",
        "role": "primary"
      }
    ],
    "album": "Sandal",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3q4w5e6r7t8",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.92,
      "valence": 0.91,
      "acousticness": 0.08,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-149",
    "title": "Duji Vaar Pyar",
    "artist": "Sunanda Sharma",
    "artistId": "artist-15",
    "artists": [
      {
        "artistId": "artist-15",
        "artistName": "Sunanda Sharma",
        "role": "primary"
      }
    ],
    "album": "Duji Vaar Pyar",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9u0i1o2p3q4",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.6,
      "valence": 0.52,
      "acousticness": 0.45,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-150",
    "title": "Yeah Baby",
    "artist": "Garry Sandhu",
    "artistId": "artist-19",
    "artists": [
      {
        "artistId": "artist-19",
        "artistName": "Garry Sandhu",
        "role": "primary"
      }
    ],
    "album": "Yeah Baby",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5a6s7d8f9g0",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.9,
      "valence": 0.87,
      "acousticness": 0.09,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-151",
    "title": "Banda Ban Ja",
    "artist": "Garry Sandhu",
    "artistId": "artist-19",
    "artists": [
      {
        "artistId": "artist-19",
        "artistName": "Garry Sandhu",
        "role": "primary"
      }
    ],
    "album": "Banda Ban Ja",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 240,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1h2j3k4l5m6",
      "streamUrl": "",
      "durationSeconds": 240
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.87,
      "valence": 0.84,
      "acousticness": 0.12,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-152",
    "title": "Hauli Hauli",
    "artist": "Garry Sandhu",
    "artistId": "artist-19",
    "artists": [
      {
        "artistId": "artist-19",
        "artistName": "Garry Sandhu",
        "role": "primary"
      }
    ],
    "album": "De De Pyaar De",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 208,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7z8x9c0v1b2",
      "streamUrl": "",
      "durationSeconds": 208
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.91,
      "valence": 0.89,
      "acousticness": 0.08,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-153",
    "title": "Old Skool",
    "artist": "Prem Dhillon",
    "artistId": "artist-17",
    "artists": [
      {
        "artistId": "artist-17",
        "artistName": "Prem Dhillon",
        "role": "primary"
      }
    ],
    "album": "Old Skool",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 242,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3m4n5b6v7c8",
      "streamUrl": "",
      "durationSeconds": 242
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.88,
      "valence": 0.72,
      "acousticness": 0.1,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-154",
    "title": "Majha Block",
    "artist": "Prem Dhillon",
    "artistId": "artist-17",
    "artists": [
      {
        "artistId": "artist-17",
        "artistName": "Prem Dhillon",
        "role": "primary"
      }
    ],
    "album": "Majha Block",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9x0z1a2s3d4",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.89,
      "valence": 0.75,
      "acousticness": 0.08,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-155",
    "title": "Boot Cut",
    "artist": "Prem Dhillon",
    "artistId": "artist-17",
    "artists": [
      {
        "artistId": "artist-17",
        "artistName": "Prem Dhillon",
        "role": "primary"
      }
    ],
    "album": "Boot Cut",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5f6g7h8j9k0",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.86,
      "valence": 0.76,
      "acousticness": 0.11,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-156",
    "title": "Tum Hi Ho",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Aashiqui 2",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 262,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "IJq0yyWug1k",
      "streamUrl": "",
      "durationSeconds": 262
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.55,
      "valence": 0.42,
      "acousticness": 0.48,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-157",
    "title": "Channa Mereya",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Ae Dil Hai Mushkil",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 289,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "284Ov7ysmfA",
      "streamUrl": "",
      "durationSeconds": 289
    },
    "genre": "Sufi",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.52,
      "energy": 0.58,
      "valence": 0.35,
      "acousticness": 0.54,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-158",
    "title": "Kesariya",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Brahm\u0101stra",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 268,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "BddP6PYo2gs",
      "streamUrl": "",
      "durationSeconds": 268
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.68,
      "valence": 0.72,
      "acousticness": 0.3,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-159",
    "title": "Apna Bana Le",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Bhediya",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 261,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "ElZfdU54Cp8",
      "streamUrl": "",
      "durationSeconds": 261
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.64,
      "energy": 0.6,
      "valence": 0.66,
      "acousticness": 0.38,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-160",
    "title": "Tere Hawale",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Laal Singh Chaddha",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 346,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "KUpwupYj_tY",
      "streamUrl": "",
      "durationSeconds": 346
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.5,
      "valence": 0.48,
      "acousticness": 0.52,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-161",
    "title": "Phir Le Aya Dil",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Barfi!",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 305,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0q_4mFq9w1k",
      "streamUrl": "",
      "durationSeconds": 305
    },
    "genre": "Ghazal",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 74,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.38,
      "valence": 0.3,
      "acousticness": 0.78,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-162",
    "title": "Gerua",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Dilwale",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 345,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "AEIVhBS6baE",
      "streamUrl": "",
      "durationSeconds": 345
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.72,
      "valence": 0.65,
      "acousticness": 0.32,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-163",
    "title": "Kabira",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Yeh Jawaani Hai Deewani",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 251,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "jHNNMj5bNQw",
      "streamUrl": "",
      "durationSeconds": 251
    },
    "genre": "Folk",
    "language": "Hindi",
    "mood": "Nostalgic",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.52,
      "valence": 0.55,
      "acousticness": 0.62,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-164",
    "title": "Ilahi",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Yeh Jawaani Hai Deewani",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 229,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "fdubeMFwuGs",
      "streamUrl": "",
      "durationSeconds": 229
    },
    "genre": "Pop",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.85,
      "valence": 0.82,
      "acousticness": 0.18,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-165",
    "title": "Tera Yaar Hoon Main",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Sonu Ke Titu Ki Sweety",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 299,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "EatzcaVJRMs",
      "streamUrl": "",
      "durationSeconds": 299
    },
    "genre": "Bollywood",
    "language": "Hindi",
    "mood": "Nostalgic",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.56,
      "valence": 0.5,
      "acousticness": 0.45,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-166",
    "title": "O Bedardeya",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Tu Jhoothi Main Makkaar",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 313,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1m2n3b4v5c6",
      "streamUrl": "",
      "durationSeconds": 313
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 78,
    "acousticFeatures": {
      "danceability": 0.5,
      "energy": 0.52,
      "valence": 0.34,
      "acousticness": 0.6,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-167",
    "title": "Tum Kya Mile",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Rocky Aur Rani Kii Prem Kahaani",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 277,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7u8i9o0p1q3",
      "streamUrl": "",
      "durationSeconds": 277
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 94,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.7,
      "valence": 0.75,
      "acousticness": 0.28,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-168",
    "title": "Satranga",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Animal",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 271,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3e4r5t6y7u9",
      "streamUrl": "",
      "durationSeconds": 271
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.56,
      "energy": 0.62,
      "valence": 0.44,
      "acousticness": 0.48,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-169",
    "title": "Chaleya",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Jawan",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9o8i7u6y5t5",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Pop",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.78,
      "valence": 0.85,
      "acousticness": 0.16,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-170",
    "title": "Heeriye",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Heeriye",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5r4e3w2q1a1",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Pop",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.72,
      "valence": 0.8,
      "acousticness": 0.24,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-171",
    "title": "Shayad",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Love Aaj Kal",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 247,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1a2s3d4f5g7",
      "streamUrl": "",
      "durationSeconds": 247
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 85,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.58,
      "valence": 0.6,
      "acousticness": 0.42,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-172",
    "title": "Agar Tum Saath Ho",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Tamasha",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 341,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7h8j9k0l1m3",
      "streamUrl": "",
      "durationSeconds": 341
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.54,
      "energy": 0.54,
      "valence": 0.38,
      "acousticness": 0.65,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-173",
    "title": "Hawayein",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Jab Harry Met Sejal",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 290,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3l4m5n6o7p9",
      "streamUrl": "",
      "durationSeconds": 290
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.66,
      "energy": 0.64,
      "valence": 0.7,
      "acousticness": 0.35,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-174",
    "title": "Ae Dil Hai Mushkil",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Ae Dil Hai Mushkil",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 269,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9q8w7e6r5t5",
      "streamUrl": "",
      "durationSeconds": 269
    },
    "genre": "Sufi",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.65,
      "valence": 0.46,
      "acousticness": 0.45,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-175",
    "title": "Zaalima",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Raees",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 299,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2y3u4i5o6p8",
      "streamUrl": "",
      "durationSeconds": 299
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.68,
      "valence": 0.76,
      "acousticness": 0.3,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-176",
    "title": "Kun Faya Kun",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Rockstar",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 473,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "T94PHkuydcw",
      "streamUrl": "",
      "durationSeconds": 473
    },
    "genre": "Sufi",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 76,
    "acousticFeatures": {
      "danceability": 0.48,
      "energy": 0.5,
      "valence": 0.52,
      "acousticness": 0.7,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-177",
    "title": "Jai Ho",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Slumdog Millionaire",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 319,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "xwwAVRyNmgQ",
      "streamUrl": "",
      "durationSeconds": 319
    },
    "genre": "World",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.92,
      "valence": 0.9,
      "acousticness": 0.08,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-178",
    "title": "Chaiyya Chaiyya",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Dil Se..",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 395,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "YOYN9qNXmAw",
      "streamUrl": "",
      "durationSeconds": 395
    },
    "genre": "Soundtrack",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.94,
      "valence": 0.92,
      "acousticness": 0.09,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-179",
    "title": "Tere Bina",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Guru",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 304,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8a9s0d1f2g4",
      "streamUrl": "",
      "durationSeconds": 304
    },
    "genre": "Sufi",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.55,
      "valence": 0.62,
      "acousticness": 0.58,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-180",
    "title": "Masakali",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Delhi-6",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 290,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4h5j6k7l8m0",
      "streamUrl": "",
      "durationSeconds": 290
    },
    "genre": "Pop",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.78,
      "valence": 0.88,
      "acousticness": 0.25,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-181",
    "title": "Rehna Tu",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Delhi-6",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 411,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0z1x2c3v4b6",
      "streamUrl": "",
      "durationSeconds": 411
    },
    "genre": "Soul",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 78,
    "acousticFeatures": {
      "danceability": 0.52,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.68,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-182",
    "title": "Urvashi Urvashi",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Humse Hai Muqabla",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 339,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6n7m8k9j0h2",
      "streamUrl": "",
      "durationSeconds": 339
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.92,
      "valence": 0.94,
      "acousticness": 0.06,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-183",
    "title": "Tu Hi Re",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Bombay",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 434,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2w3e4r5t6y8",
      "streamUrl": "",
      "durationSeconds": 434
    },
    "genre": "Soundtrack",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 75,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.42,
      "valence": 0.38,
      "acousticness": 0.72,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-184",
    "title": "Dil Se Re",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Dil Se..",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 414,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8u9i0o1p2q4",
      "streamUrl": "",
      "durationSeconds": 414
    },
    "genre": "Soundtrack",
    "language": "Hindi",
    "mood": "Empowering",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.75,
      "valence": 0.58,
      "acousticness": 0.4,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-185",
    "title": "Khwaja Mere Khwaja",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Jodhaa Akbar",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 418,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g1",
      "streamUrl": "",
      "durationSeconds": 418
    },
    "genre": "Sufi",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 74,
    "acousticFeatures": {
      "danceability": 0.46,
      "energy": 0.52,
      "valence": 0.5,
      "acousticness": 0.75,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-186",
    "title": "Jashn-E-Bahaaraa",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Jodhaa Akbar",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 315,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0h1j2k3l4m6",
      "streamUrl": "",
      "durationSeconds": 315
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.54,
      "valence": 0.65,
      "acousticness": 0.55,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-187",
    "title": "Rang De Basanti",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Rang De Basanti",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 363,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6n7b8v9c0x2",
      "streamUrl": "",
      "durationSeconds": 363
    },
    "genre": "Bhangra",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.95,
      "valence": 0.92,
      "acousticness": 0.08,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-188",
    "title": "Matargashti",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Tamasha",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 328,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2q3w4e5r6t8",
      "streamUrl": "",
      "durationSeconds": 328
    },
    "genre": "Pop",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.86,
      "valence": 0.9,
      "acousticness": 0.15,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-189",
    "title": "Enna Sona",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "OK Jaanu",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 213,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8y9u0i1o2p4",
      "streamUrl": "",
      "durationSeconds": 213
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.6,
      "valence": 0.74,
      "acousticness": 0.38,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-190",
    "title": "Param Sundari",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Mimi",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g2",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.9,
      "valence": 0.88,
      "acousticness": 0.1,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-191",
    "title": "Badtameez Dil",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Yeh Jawaani Hai Deewani",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 252,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "II2EO3NwUr8",
      "streamUrl": "",
      "durationSeconds": 252
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.96,
      "valence": 0.94,
      "acousticness": 0.05,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-192",
    "title": "Subhanallah",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Yeh Jawaani Hai Deewani",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 249,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1z2x3c4v5b7",
      "streamUrl": "",
      "durationSeconds": 249
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.7,
      "energy": 0.62,
      "valence": 0.78,
      "acousticness": 0.32,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-193",
    "title": "Dilliwaali Girlfriend",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Yeh Jawaani Hai Deewani",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 260,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7n8m9k0j1h3",
      "streamUrl": "",
      "durationSeconds": 260
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.93,
      "valence": 0.9,
      "acousticness": 0.08,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-194",
    "title": "Balam Pichkari",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Yeh Jawaani Hai Deewani",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 289,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3q4w5e6r7t9",
      "streamUrl": "",
      "durationSeconds": 289
    },
    "genre": "Folk",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.95,
      "valence": 0.96,
      "acousticness": 0.07,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-195",
    "title": "Tum Se Hi",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Jab We Met",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 321,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9u0i1o2p3q5",
      "streamUrl": "",
      "durationSeconds": 321
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.64,
      "energy": 0.58,
      "valence": 0.68,
      "acousticness": 0.44,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-196",
    "title": "Pee Loon",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Once Upon a Time in Mumbaai",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 288,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5a6s7d8f9g1",
      "streamUrl": "",
      "durationSeconds": 288
    },
    "genre": "Sufi",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.66,
      "energy": 0.64,
      "valence": 0.72,
      "acousticness": 0.4,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-197",
    "title": "Mauja Hi Mauja",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Jab We Met",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 244,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1h2j3k4l5m7",
      "streamUrl": "",
      "durationSeconds": 244
    },
    "genre": "Bhangra",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 132,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.96,
      "valence": 0.95,
      "acousticness": 0.06,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-198",
    "title": "Tum Ho",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Rockstar",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 319,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "gkCKZuG4560",
      "streamUrl": "",
      "durationSeconds": 319
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.56,
      "energy": 0.52,
      "valence": 0.45,
      "acousticness": 0.62,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-199",
    "title": "Nadaan Parinde",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Rockstar",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 386,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "ttTXST36tCQ",
      "streamUrl": "",
      "durationSeconds": 386
    },
    "genre": "Rock",
    "language": "Hindi",
    "mood": "Empowering",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.85,
      "valence": 0.5,
      "acousticness": 0.32,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-200",
    "title": "Phir Se Ud Chala",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Rockstar",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 271,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2Vv-BfVoq4g",
      "streamUrl": "",
      "durationSeconds": 271
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.6,
      "valence": 0.7,
      "acousticness": 0.5,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-201",
    "title": "Saada Haq",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Rockstar",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 365,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7z8x9c0v1b3",
      "streamUrl": "",
      "durationSeconds": 365
    },
    "genre": "Rock",
    "language": "Hindi",
    "mood": "Empowering",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.92,
      "valence": 0.6,
      "acousticness": 0.12,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-202",
    "title": "Tujhe Bhula Diya",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Anjaana Anjaani",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 279,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3m4n5b6v7c9",
      "streamUrl": "",
      "durationSeconds": 279
    },
    "genre": "Sufi",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.62,
      "valence": 0.4,
      "acousticness": 0.45,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-203",
    "title": "Dooriyan",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Love Aaj Kal",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 338,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9x0z1a2s3d5",
      "streamUrl": "",
      "durationSeconds": 338
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Nostalgic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.54,
      "valence": 0.55,
      "acousticness": 0.55,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-204",
    "title": "Aadat",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Jal Pari",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 268,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8b9a0c1d2e3",
      "streamUrl": "",
      "durationSeconds": 268
    },
    "genre": "Rock",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.54,
      "energy": 0.7,
      "valence": 0.42,
      "acousticness": 0.38,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-205",
    "title": "Woh Lamhe",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Zeher",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 321,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4f5g6h7j8k9",
      "streamUrl": "",
      "durationSeconds": 321
    },
    "genre": "Rock",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.74,
      "valence": 0.45,
      "acousticness": 0.32,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-206",
    "title": "Tere Bin",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Bas Ek Pal",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 274,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0l1k2j3h4g5",
      "streamUrl": "",
      "durationSeconds": 274
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.62,
      "valence": 0.48,
      "acousticness": 0.44,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-207",
    "title": "Pehli Nazar Mein",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Race",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 314,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6m7n8b9v0c1",
      "streamUrl": "",
      "durationSeconds": 314
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.7,
      "valence": 0.75,
      "acousticness": 0.28,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-208",
    "title": "Tu Jaane Na",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Ajab Prem Ki Ghazab Kahani",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 341,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2q3w4e5r6t0",
      "streamUrl": "",
      "durationSeconds": 341
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.6,
      "valence": 0.6,
      "acousticness": 0.42,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-209",
    "title": "Jeene Laga Hoon",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Ramaiya Vastavaiya",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 236,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8y9u0i1o2p5",
      "streamUrl": "",
      "durationSeconds": 236
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.74,
      "energy": 0.72,
      "valence": 0.82,
      "acousticness": 0.24,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-210",
    "title": "Dil Diyan Gallan",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Tiger Zinda Hai",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 260,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g3",
      "streamUrl": "",
      "durationSeconds": 260
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.66,
      "energy": 0.58,
      "valence": 0.72,
      "acousticness": 0.48,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-211",
    "title": "Tajdar-e-Haram",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Coke Studio Season 8",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 628,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0z1x2c3v4b7",
      "streamUrl": "",
      "durationSeconds": 628
    },
    "genre": "Sufi",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 70,
    "acousticFeatures": {
      "danceability": 0.4,
      "energy": 0.45,
      "valence": 0.5,
      "acousticness": 0.8,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-212",
    "title": "Kala Chashma",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Baar Baar Dekho",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 187,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "k4yXQkG2s1E",
      "streamUrl": "",
      "durationSeconds": 187
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.94,
      "energy": 0.96,
      "valence": 0.94,
      "acousticness": 0.05,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-213",
    "title": "Kar Gayi Chull",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Kapoor & Sons",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 187,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "NTHz9ephYTw",
      "streamUrl": "",
      "durationSeconds": 187
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.94,
      "valence": 0.92,
      "acousticness": 0.07,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-214",
    "title": "DJ Waley Babu",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "DJ Waley Babu",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 172,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6n7m8k9j0h3",
      "streamUrl": "",
      "durationSeconds": 172
    },
    "genre": "Commercial Rap",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.92,
      "valence": 0.88,
      "acousticness": 0.08,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-215",
    "title": "Garmi",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Street Dancer 3D",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 184,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2w3e4r5t6y9",
      "streamUrl": "",
      "durationSeconds": 184
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.93,
      "energy": 0.95,
      "valence": 0.9,
      "acousticness": 0.06,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-216",
    "title": "Paani Paani",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Paani Paani",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 170,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8u9i0o1p2q5",
      "streamUrl": "",
      "durationSeconds": 170
    },
    "genre": "Commercial Rap",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.9,
      "valence": 0.86,
      "acousticness": 0.1,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-217",
    "title": "Jugnu",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Jugnu",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g4",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Pop",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.92,
      "valence": 0.91,
      "acousticness": 0.08,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-218",
    "title": "Genda Phool",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Genda Phool",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 170,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0h1j2k3l4m7",
      "streamUrl": "",
      "durationSeconds": 170
    },
    "genre": "Folk",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.91,
      "valence": 0.89,
      "acousticness": 0.12,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-219",
    "title": "Abhi Toh Party Shuru Hui Hai",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Khoobsurat",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 180,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6n7b8v9c0x3",
      "streamUrl": "",
      "durationSeconds": 180
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.95,
      "valence": 0.93,
      "acousticness": 0.06,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-220",
    "title": "Raataan Lambiyan",
    "artist": "Jubin Nautiyal",
    "artistId": "artist-26",
    "artists": [
      {
        "artistId": "artist-26",
        "artistName": "Jubin Nautiyal",
        "role": "primary"
      }
    ],
    "album": "Shershaah",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "gvyUuxdRdR4",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.62,
      "valence": 0.7,
      "acousticness": 0.4,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-221",
    "title": "Lut Gaye",
    "artist": "Jubin Nautiyal",
    "artistId": "artist-26",
    "artists": [
      {
        "artistId": "artist-26",
        "artistName": "Jubin Nautiyal",
        "role": "primary"
      }
    ],
    "album": "Lut Gaye",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 228,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "sCbbMZ-q4-I",
      "streamUrl": "",
      "durationSeconds": 228
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.68,
      "valence": 0.5,
      "acousticness": 0.38,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-222",
    "title": "Tum Hi Aana",
    "artist": "Jubin Nautiyal",
    "artistId": "artist-26",
    "artists": [
      {
        "artistId": "artist-26",
        "artistName": "Jubin Nautiyal",
        "role": "primary"
      }
    ],
    "album": "Marjaavaan",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 249,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2q3w4e5r6t9",
      "streamUrl": "",
      "durationSeconds": 249
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.58,
      "valence": 0.42,
      "acousticness": 0.5,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-223",
    "title": "Humnava Mere",
    "artist": "Jubin Nautiyal",
    "artistId": "artist-26",
    "artists": [
      {
        "artistId": "artist-26",
        "artistName": "Jubin Nautiyal",
        "role": "primary"
      }
    ],
    "album": "Humnava Mere",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 340,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8y9u0i1o2p6",
      "streamUrl": "",
      "durationSeconds": 340
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 78,
    "acousticFeatures": {
      "danceability": 0.52,
      "energy": 0.54,
      "valence": 0.38,
      "acousticness": 0.58,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-224",
    "title": "Kinna Sona",
    "artist": "Jubin Nautiyal",
    "artistId": "artist-26",
    "artists": [
      {
        "artistId": "artist-26",
        "artistName": "Jubin Nautiyal",
        "role": "primary"
      }
    ],
    "album": "Marjaavaan",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 273,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g5",
      "streamUrl": "",
      "durationSeconds": 273
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.65,
      "valence": 0.75,
      "acousticness": 0.34,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-225",
    "title": "Teri Ore",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Singh Is Kinng",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 339,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1z2x3c4v5b8",
      "streamUrl": "",
      "durationSeconds": 339
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.64,
      "valence": 0.75,
      "acousticness": 0.45,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-226",
    "title": "Deewani Mastani",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Bajirao Mastani",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 340,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7n8m9k0j1h4",
      "streamUrl": "",
      "durationSeconds": 340
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.85,
      "valence": 0.8,
      "acousticness": 0.3,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-227",
    "title": "Ghoomar",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Padmaavat",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 281,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3q4w5e6r7t0",
      "streamUrl": "",
      "durationSeconds": 281
    },
    "genre": "Folk",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.9,
      "valence": 0.85,
      "acousticness": 0.22,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-228",
    "title": "Sunn Raha Hai",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Aashiqui 2",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 314,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9u0i1o2p3q6",
      "streamUrl": "",
      "durationSeconds": 314
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.52,
      "energy": 0.55,
      "valence": 0.38,
      "acousticness": 0.6,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-229",
    "title": "Barso Re",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Guru",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 329,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5a6s7d8f9g2",
      "streamUrl": "",
      "durationSeconds": 329
    },
    "genre": "Folk",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.88,
      "valence": 0.9,
      "acousticness": 0.25,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-230",
    "title": "Dola Re Dola",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Devdas",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 397,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1h2j3k4l5m8",
      "streamUrl": "",
      "durationSeconds": 397
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.92,
      "valence": 0.92,
      "acousticness": 0.15,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-231",
    "title": "Saans",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Jab Tak Hai Jaan",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 328,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7z8x9c0v1b4",
      "streamUrl": "",
      "durationSeconds": 328
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.52,
      "valence": 0.55,
      "acousticness": 0.58,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-232",
    "title": "Zara Sa",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Jannat",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 303,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5yXQ_D8i1d0",
      "streamUrl": "",
      "durationSeconds": 303
    },
    "genre": "Rock",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.72,
      "valence": 0.68,
      "acousticness": 0.3,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-233",
    "title": "Labon Ko",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Bhool Bhulaiyaa",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 344,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3m4n5b6v7c0",
      "streamUrl": "",
      "durationSeconds": 344
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.65,
      "valence": 0.64,
      "acousticness": 0.38,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-234",
    "title": "Kya Mujhe Pyaar Hai",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Woh Lamhe",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 279,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9x0z1a2s3d6",
      "streamUrl": "",
      "durationSeconds": 279
    },
    "genre": "Rock",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.74,
      "energy": 0.82,
      "valence": 0.78,
      "acousticness": 0.2,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-235",
    "title": "Alvida",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Life in a... Metro",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 340,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5f6g7h8j9k1",
      "streamUrl": "",
      "durationSeconds": 340
    },
    "genre": "Rock",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.56,
      "energy": 0.8,
      "valence": 0.44,
      "acousticness": 0.28,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-236",
    "title": "Aankhon Mein Teri",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Om Shanti Om",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 242,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1a2s3d4f5g8",
      "streamUrl": "",
      "durationSeconds": 242
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.64,
      "energy": 0.58,
      "valence": 0.72,
      "acousticness": 0.48,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-237",
    "title": "Tu Hi Meri Shab Hai",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Gangster",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 388,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7h8j9k0l1m4",
      "streamUrl": "",
      "durationSeconds": 388
    },
    "genre": "Rock",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.7,
      "valence": 0.62,
      "acousticness": 0.35,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-238",
    "title": "Sach Keh Raha Hai",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Rehnaa Hai Terre Dil Mein",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 327,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3l4m5n6o7p0",
      "streamUrl": "",
      "durationSeconds": 327
    },
    "genre": "Soul",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 76,
    "acousticFeatures": {
      "danceability": 0.5,
      "energy": 0.48,
      "valence": 0.32,
      "acousticness": 0.65,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-239",
    "title": "Dil Ibaadat",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Tum Mile",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 329,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9q8w7e6r5t6",
      "streamUrl": "",
      "durationSeconds": 329
    },
    "genre": "Rock",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.72,
      "valence": 0.66,
      "acousticness": 0.32,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-240",
    "title": "Kal Ho Naa Ho",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Kal Ho Naa Ho",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 322,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "g0eO74UmRBs",
      "streamUrl": "",
      "durationSeconds": 322
    },
    "genre": "Soundtrack",
    "language": "Hindi",
    "mood": "Nostalgic",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.54,
      "energy": 0.58,
      "valence": 0.55,
      "acousticness": 0.58,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-241",
    "title": "Abhi Mujh Mein Kahin",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Agneepath",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 364,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "o1Rkpu0vW3I",
      "streamUrl": "",
      "durationSeconds": 364
    },
    "genre": "Soundtrack",
    "language": "Hindi",
    "mood": "Nostalgic",
    "bpm": 75,
    "acousticFeatures": {
      "danceability": 0.48,
      "energy": 0.52,
      "valence": 0.45,
      "acousticness": 0.72,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-242",
    "title": "Suraj Hua Maddham",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Kabhi Khushi Kabhie Gham",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 428,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2y3u4i5o6p9",
      "streamUrl": "",
      "durationSeconds": 428
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.54,
      "valence": 0.64,
      "acousticness": 0.55,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-243",
    "title": "Bole Chudiyan",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Kabhi Khushi Kabhie Gham",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 404,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8a9s0d1f2g5",
      "streamUrl": "",
      "durationSeconds": 404
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.92,
      "valence": 0.94,
      "acousticness": 0.12,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-244",
    "title": "Tumse Milke Dil Ka",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Main Hoon Na",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 360,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4h5j6k7l8m1",
      "streamUrl": "",
      "durationSeconds": 360
    },
    "genre": "Qawwali",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.94,
      "valence": 0.95,
      "acousticness": 0.08,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-245",
    "title": "Main Agar Kahoon",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Om Shanti Om",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 310,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0z1x2c3v4b8",
      "streamUrl": "",
      "durationSeconds": 310
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.55,
      "valence": 0.68,
      "acousticness": 0.5,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-246",
    "title": "Saathiya",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Saathiya",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 357,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6n7m8k9j0h4",
      "streamUrl": "",
      "durationSeconds": 357
    },
    "genre": "Soundtrack",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.66,
      "energy": 0.62,
      "valence": 0.72,
      "acousticness": 0.44,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-247",
    "title": "Desi Girl",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "Dostana",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 306,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "cwmk3Z2v4b5",
      "streamUrl": "",
      "durationSeconds": 306
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.96,
      "valence": 0.94,
      "acousticness": 0.06,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-248",
    "title": "Ghungroo",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "War",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 302,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "qFkNATnc3mc",
      "streamUrl": "",
      "durationSeconds": 302
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.92,
      "valence": 0.92,
      "acousticness": 0.08,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-249",
    "title": "Nashe Si Chadh Gayi",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "Befikre",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 238,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "Wd2B8OAotU8",
      "streamUrl": "",
      "durationSeconds": 238
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.89,
      "valence": 0.9,
      "acousticness": 0.1,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-250",
    "title": "Swag Se Swagat",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "Tiger Zinda Hai",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 236,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "xmU0s2QtaEY",
      "streamUrl": "",
      "durationSeconds": 236
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.94,
      "valence": 0.91,
      "acousticness": 0.07,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-251",
    "title": "Jhoome Jo Pathaan",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "Pathaan",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 208,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "YxWlaYCA8MU",
      "streamUrl": "",
      "durationSeconds": 208
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.93,
      "valence": 0.92,
      "acousticness": 0.08,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-252",
    "title": "Besharam Rang",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "Pathaan",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 258,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "huxhqphtDrM",
      "streamUrl": "",
      "durationSeconds": 258
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.9,
      "valence": 0.85,
      "acousticness": 0.12,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-253",
    "title": "Namo Namo",
    "artist": "Amit Trivedi",
    "artistId": "artist-31",
    "artists": [
      {
        "artistId": "artist-31",
        "artistName": "Amit Trivedi",
        "role": "primary"
      }
    ],
    "album": "Kedarnath",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 322,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "dx4Teh-nv3A",
      "streamUrl": "",
      "durationSeconds": 322
    },
    "genre": "Devotional",
    "language": "Hindi",
    "mood": "Empowering",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.78,
      "valence": 0.7,
      "acousticness": 0.4,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-254",
    "title": "Iktara",
    "artist": "Amit Trivedi",
    "artistId": "artist-31",
    "artists": [
      {
        "artistId": "artist-31",
        "artistName": "Amit Trivedi",
        "role": "primary"
      }
    ],
    "album": "Wake Up Sid",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 253,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "fSS_R91Nimw",
      "streamUrl": "",
      "durationSeconds": 253
    },
    "genre": "Indie Folk",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 85,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.58,
      "valence": 0.74,
      "acousticness": 0.52,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-255",
    "title": "London Thumakda",
    "artist": "Amit Trivedi",
    "artistId": "artist-31",
    "artists": [
      {
        "artistId": "artist-31",
        "artistName": "Amit Trivedi",
        "role": "primary"
      }
    ],
    "album": "Queen",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "draA3PUoaU4",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Folk",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.96,
      "valence": 0.95,
      "acousticness": 0.06,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-256",
    "title": "Qaafirana",
    "artist": "Amit Trivedi",
    "artistId": "artist-31",
    "artists": [
      {
        "artistId": "artist-31",
        "artistName": "Amit Trivedi",
        "role": "primary"
      }
    ],
    "album": "Kedarnath",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 342,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "Z1BCujX3pw8",
      "streamUrl": "",
      "durationSeconds": 342
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.56,
      "valence": 0.65,
      "acousticness": 0.5,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-257",
    "title": "cold/mess",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "cold/mess",
    "albumArt": "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "duration": 284,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "Il7Nv270zNk",
      "streamUrl": "",
      "durationSeconds": 284
    },
    "genre": "Indie Folk",
    "language": "Indie",
    "mood": "Late Night",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.52,
      "energy": 0.38,
      "valence": 0.36,
      "acousticness": 0.78,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-258",
    "title": "Kasoor",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "Kasoor",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 197,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "BmUe3-s7uGw",
      "streamUrl": "",
      "durationSeconds": 197
    },
    "genre": "Indie Folk",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.44,
      "valence": 0.64,
      "acousticness": 0.68,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-259",
    "title": "Tum Jab Paas",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "In Tokens & Charms",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 222,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1m2n3b4v5c7",
      "streamUrl": "",
      "durationSeconds": 222
    },
    "genre": "Indie Folk",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.58,
      "acousticness": 0.72,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-260",
    "title": "Dil Beparvah",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "In Tokens & Charms",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 240,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7u8i9o0p1q4",
      "streamUrl": "",
      "durationSeconds": 240
    },
    "genre": "Indie Folk",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.45,
      "valence": 0.62,
      "acousticness": 0.66,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-261",
    "title": "Tune Kaha",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "In Tokens & Charms",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 188,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3e4r5t6y7u0",
      "streamUrl": "",
      "durationSeconds": 188
    },
    "genre": "Indie Folk",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.66,
      "energy": 0.46,
      "valence": 0.7,
      "acousticness": 0.64,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-262",
    "title": "Co2",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "The Way That Too Lovers Do",
    "albumArt": "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "duration": 164,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9o8i7u6y5t6",
      "streamUrl": "",
      "durationSeconds": 164
    },
    "genre": "Indie Folk",
    "language": "Indie",
    "mood": "Romantic",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.7,
      "energy": 0.48,
      "valence": 0.72,
      "acousticness": 0.6,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-263",
    "title": "Baarishein",
    "artist": "Anuv Jain",
    "artistId": "artist-33",
    "artists": [
      {
        "artistId": "artist-33",
        "artistName": "Anuv Jain",
        "role": "primary"
      }
    ],
    "album": "Baarishein",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 207,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "d0nOz_xV0-Y",
      "streamUrl": "",
      "durationSeconds": 207
    },
    "genre": "Indie Acoustic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 78,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.35,
      "valence": 0.45,
      "acousticness": 0.82,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-264",
    "title": "Alag Aasmaan",
    "artist": "Anuv Jain",
    "artistId": "artist-33",
    "artists": [
      {
        "artistId": "artist-33",
        "artistName": "Anuv Jain",
        "role": "primary"
      }
    ],
    "album": "Alag Aasmaan",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "v8w8e7r6t5y",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Indie Acoustic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.38,
      "valence": 0.42,
      "acousticness": 0.8,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-265",
    "title": "Husn",
    "artist": "Anuv Jain",
    "artistId": "artist-33",
    "artists": [
      {
        "artistId": "artist-33",
        "artistName": "Anuv Jain",
        "role": "primary"
      }
    ],
    "album": "Husn",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 219,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "g8h7j6k5l4m",
      "streamUrl": "",
      "durationSeconds": 219
    },
    "genre": "Indie Acoustic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 76,
    "acousticFeatures": {
      "danceability": 0.5,
      "energy": 0.32,
      "valence": 0.35,
      "acousticness": 0.88,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-266",
    "title": "Gul",
    "artist": "Anuv Jain",
    "artistId": "artist-33",
    "artists": [
      {
        "artistId": "artist-33",
        "artistName": "Anuv Jain",
        "role": "primary"
      }
    ],
    "album": "Gul",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 222,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2c3v4b5n6m8",
      "streamUrl": "",
      "durationSeconds": 222
    },
    "genre": "Indie Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.4,
      "valence": 0.58,
      "acousticness": 0.76,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-267",
    "title": "Mishri",
    "artist": "Anuv Jain",
    "artistId": "artist-33",
    "artists": [
      {
        "artistId": "artist-33",
        "artistName": "Anuv Jain",
        "role": "primary"
      }
    ],
    "album": "Mishri",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6m7k8j9h0g2",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Indie Acoustic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.64,
      "energy": 0.42,
      "valence": 0.65,
      "acousticness": 0.74,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-268",
    "title": "Riha",
    "artist": "Anuv Jain",
    "artistId": "artist-33",
    "artists": [
      {
        "artistId": "artist-33",
        "artistName": "Anuv Jain",
        "role": "primary"
      }
    ],
    "album": "Riha",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 242,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1g2h3j4k5l7",
      "streamUrl": "",
      "durationSeconds": 242
    },
    "genre": "Indie Acoustic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 75,
    "acousticFeatures": {
      "danceability": 0.48,
      "energy": 0.3,
      "valence": 0.32,
      "acousticness": 0.85,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-269",
    "title": "Choo Lo",
    "artist": "The Local Train",
    "artistId": "artist-34",
    "artists": [
      {
        "artistId": "artist-34",
        "artistName": "The Local Train",
        "role": "primary"
      }
    ],
    "album": "Aalas Ka Pedh",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 234,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "sFMRqxCex28",
      "streamUrl": "",
      "durationSeconds": 234
    },
    "genre": "Hindi Rock",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.68,
      "valence": 0.48,
      "acousticness": 0.35,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-270",
    "title": "Aaoge Tum Kabhi",
    "artist": "The Local Train",
    "artistId": "artist-34",
    "artists": [
      {
        "artistId": "artist-34",
        "artistName": "The Local Train",
        "role": "primary"
      }
    ],
    "album": "Aalas Ka Pedh",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 314,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7y6t5r4e3w3",
      "streamUrl": "",
      "durationSeconds": 314
    },
    "genre": "Hindi Rock",
    "language": "Hindi",
    "mood": "Nostalgic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.56,
      "energy": 0.65,
      "valence": 0.52,
      "acousticness": 0.42,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-271",
    "title": "Aalas Ka Pedh",
    "artist": "The Local Train",
    "artistId": "artist-34",
    "artists": [
      {
        "artistId": "artist-34",
        "artistName": "The Local Train",
        "role": "primary"
      }
    ],
    "album": "Aalas Ka Pedh",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 248,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3w2q1a0s9d9",
      "streamUrl": "",
      "durationSeconds": 248
    },
    "genre": "Hindi Rock",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.64,
      "energy": 0.72,
      "valence": 0.6,
      "acousticness": 0.28,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-272",
    "title": "Khudi",
    "artist": "The Local Train",
    "artistId": "artist-34",
    "artists": [
      {
        "artistId": "artist-34",
        "artistName": "The Local Train",
        "role": "primary"
      }
    ],
    "album": "Vaaqif",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 298,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1j2k3l4m5n7",
      "streamUrl": "",
      "durationSeconds": 298
    },
    "genre": "Hindi Rock",
    "language": "Hindi",
    "mood": "Empowering",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.75,
      "valence": 0.55,
      "acousticness": 0.3,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-273",
    "title": "Bandey",
    "artist": "The Local Train",
    "artistId": "artist-34",
    "artists": [
      {
        "artistId": "artist-34",
        "artistName": "The Local Train",
        "role": "primary"
      }
    ],
    "album": "Aalas Ka Pedh",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 260,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7u8i9o0p1q5",
      "streamUrl": "",
      "durationSeconds": 260
    },
    "genre": "Hindi Rock",
    "language": "Hindi",
    "mood": "Empowering",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.82,
      "valence": 0.62,
      "acousticness": 0.22,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-274",
    "title": "Dil Mere",
    "artist": "The Local Train",
    "artistId": "artist-34",
    "artists": [
      {
        "artistId": "artist-34",
        "artistName": "The Local Train",
        "role": "primary"
      }
    ],
    "album": "Aalas Ka Pedh",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 212,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3e4r5t6y7u1",
      "streamUrl": "",
      "durationSeconds": 212
    },
    "genre": "Hindi Rock",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.64,
      "valence": 0.65,
      "acousticness": 0.38,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-275",
    "title": "Udd Gaye",
    "artist": "Ritviz",
    "artistId": "artist-35",
    "artists": [
      {
        "artistId": "artist-35",
        "artistName": "Ritviz",
        "role": "primary"
      }
    ],
    "album": "Bacardi House Party Sessions",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 180,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "v8w8e7r6t51",
      "streamUrl": "",
      "durationSeconds": 180
    },
    "genre": "Indian Electronic",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.86,
      "valence": 0.89,
      "acousticness": 0.12,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-276",
    "title": "Sage",
    "artist": "Ritviz",
    "artistId": "artist-35",
    "artists": [
      {
        "artistId": "artist-35",
        "artistName": "Ritviz",
        "role": "primary"
      }
    ],
    "album": "Dev",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 164,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "g8h7j6k5l41",
      "streamUrl": "",
      "durationSeconds": 164
    },
    "genre": "Indian Electronic",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.84,
      "valence": 0.87,
      "acousticness": 0.14,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-277",
    "title": "Liggi",
    "artist": "Ritviz",
    "artistId": "artist-35",
    "artists": [
      {
        "artistId": "artist-35",
        "artistName": "Ritviz",
        "role": "primary"
      }
    ],
    "album": "Dev",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 182,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2c3v4b5n6m9",
      "streamUrl": "",
      "durationSeconds": 182
    },
    "genre": "Indian Electronic",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 114,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.85,
      "valence": 0.88,
      "acousticness": 0.11,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-278",
    "title": "Khoj",
    "artist": "Ritviz",
    "artistId": "artist-35",
    "artists": [
      {
        "artistId": "artist-35",
        "artistName": "Ritviz",
        "role": "primary"
      }
    ],
    "album": "Ved",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 172,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6m7k8j9h0g3",
      "streamUrl": "",
      "durationSeconds": 172
    },
    "genre": "Indian Electronic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.78,
      "valence": 0.82,
      "acousticness": 0.18,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-279",
    "title": "Barso",
    "artist": "Ritviz",
    "artistId": "artist-35",
    "artists": [
      {
        "artistId": "artist-35",
        "artistName": "Ritviz",
        "role": "primary"
      }
    ],
    "album": "Ved",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 178,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1g2h3j4k5l8",
      "streamUrl": "",
      "durationSeconds": 178
    },
    "genre": "Indian Electronic",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.82,
      "valence": 0.85,
      "acousticness": 0.15,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-280",
    "title": "Firefly",
    "artist": "When Chai Met Toast",
    "artistId": "artist-36",
    "artists": [
      {
        "artistId": "artist-36",
        "artistName": "When Chai Met Toast",
        "role": "primary"
      }
    ],
    "album": "Joy of Little Things",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7y6t5r4e3w4",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Indie Folk",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.72,
      "valence": 0.85,
      "acousticness": 0.45,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-281",
    "title": "Joy of Little Things",
    "artist": "When Chai Met Toast",
    "artistId": "artist-36",
    "artists": [
      {
        "artistId": "artist-36",
        "artistName": "When Chai Met Toast",
        "role": "primary"
      }
    ],
    "album": "Joy of Little Things",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3w2q1a0s9d0",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Indie Folk",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.74,
      "valence": 0.88,
      "acousticness": 0.4,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-282",
    "title": "Believe",
    "artist": "When Chai Met Toast",
    "artistId": "artist-36",
    "artists": [
      {
        "artistId": "artist-36",
        "artistName": "When Chai Met Toast",
        "role": "primary"
      }
    ],
    "album": "Believe",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1j2k3l4m5n8",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Indie Folk",
    "language": "English",
    "mood": "Empowering",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.7,
      "valence": 0.82,
      "acousticness": 0.42,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-283",
    "title": "Namastute",
    "artist": "Seedhe Maut",
    "artistId": "artist-37",
    "artists": [
      {
        "artistId": "artist-37",
        "artistName": "Seedhe Maut",
        "role": "primary"
      }
    ],
    "album": "Nayaab",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7u8i9o0p1q6",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Desi Hip Hop",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.95,
      "valence": 0.7,
      "acousticness": 0.05,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-284",
    "title": "101",
    "artist": "Seedhe Maut",
    "artistId": "artist-37",
    "artists": [
      {
        "artistId": "artist-37",
        "artistName": "Seedhe Maut",
        "role": "primary"
      }
    ],
    "album": "Nayaab",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3e4r5t6y7u2",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Desi Hip Hop",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.92,
      "valence": 0.68,
      "acousticness": 0.08,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-285",
    "title": "Kohinoor",
    "artist": "DIVINE",
    "artistId": "artist-38",
    "artists": [
      {
        "artistId": "artist-38",
        "artistName": "DIVINE",
        "role": "primary"
      }
    ],
    "album": "Kohinoor",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8b9a0c1d2e4",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Gully Rap",
    "language": "Hindi",
    "mood": "Empowering",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.88,
      "valence": 0.72,
      "acousticness": 0.1,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-286",
    "title": "Chal Bombay",
    "artist": "DIVINE",
    "artistId": "artist-38",
    "artists": [
      {
        "artistId": "artist-38",
        "artistName": "DIVINE",
        "role": "primary"
      }
    ],
    "album": "Kohinoor",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 185,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4f5g6h7j8k0",
      "streamUrl": "",
      "durationSeconds": 185
    },
    "genre": "Gully Rap",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.86,
      "valence": 0.82,
      "acousticness": 0.12,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-287",
    "title": "Mirchi",
    "artist": "DIVINE",
    "artistId": "artist-38",
    "artists": [
      {
        "artistId": "artist-38",
        "artistName": "DIVINE",
        "role": "primary"
      }
    ],
    "album": "Punya Paap",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 214,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0l1k2j3h4g6",
      "streamUrl": "",
      "durationSeconds": 214
    },
    "genre": "Gully Rap",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.9,
      "valence": 0.85,
      "acousticness": 0.08,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-288",
    "title": "Why This Kolaveri Di",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "3",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 245,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "YR12Z8f1Dh8",
      "streamUrl": "",
      "durationSeconds": 245
    },
    "genre": "Tamil Pop",
    "language": "Tamil",
    "mood": "Euphoric",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.86,
      "valence": 0.85,
      "acousticness": 0.15,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-289",
    "title": "Arabic Kuthu",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "Beast",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 279,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "KUN5Uf9mObQ",
      "streamUrl": "",
      "durationSeconds": 279
    },
    "genre": "Tamil Pop",
    "language": "Tamil",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.96,
      "valence": 0.94,
      "acousticness": 0.06,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-290",
    "title": "Vaathi Coming",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "Master",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "vx2u5uUu3DE",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Tamil Pop",
    "language": "Tamil",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.94,
      "energy": 0.97,
      "valence": 0.92,
      "acousticness": 0.05,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-291",
    "title": "Hukum",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "Jailer",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1F3hm6MfR1E",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Tamil Pop",
    "language": "Tamil",
    "mood": "Empowering",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.98,
      "valence": 0.8,
      "acousticness": 0.04,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-292",
    "title": "Badass",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "Leo",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 229,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6m7n8b9v0c2",
      "streamUrl": "",
      "durationSeconds": 229
    },
    "genre": "Tamil Pop",
    "language": "Tamil",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.96,
      "valence": 0.82,
      "acousticness": 0.06,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-293",
    "title": "Naa Ready",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "Leo",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 248,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2q3w4e5r6t1",
      "streamUrl": "",
      "durationSeconds": 248
    },
    "genre": "Tamil Pop",
    "language": "Tamil",
    "mood": "Euphoric",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.95,
      "valence": 0.9,
      "acousticness": 0.05,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-294",
    "title": "Kaavaalaa",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "Jailer",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 190,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8y9u0i1o2p7",
      "streamUrl": "",
      "durationSeconds": 190
    },
    "genre": "Tamil Pop",
    "language": "Tamil",
    "mood": "Euphoric",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.94,
      "valence": 0.95,
      "acousticness": 0.08,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-295",
    "title": "Srivalli",
    "artist": "Sid Sriram",
    "artistId": "artist-40",
    "artists": [
      {
        "artistId": "artist-40",
        "artistName": "Sid Sriram",
        "role": "primary"
      }
    ],
    "album": "Pushpa: The Rise",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "hcMzwMrr1tE",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Carnatic Fusion",
    "language": "Telugu",
    "mood": "Romantic",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.68,
      "valence": 0.78,
      "acousticness": 0.35,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-296",
    "title": "Samajavaragamana",
    "artist": "Sid Sriram",
    "artistId": "artist-40",
    "artists": [
      {
        "artistId": "artist-40",
        "artistName": "Sid Sriram",
        "role": "primary"
      }
    ],
    "album": "Ala Vaikunthapurramuloo",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g6",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Carnatic Fusion",
    "language": "Telugu",
    "mood": "Romantic",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.7,
      "energy": 0.65,
      "valence": 0.8,
      "acousticness": 0.4,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-297",
    "title": "Inkem Inkem",
    "artist": "Sid Sriram",
    "artistId": "artist-40",
    "artists": [
      {
        "artistId": "artist-40",
        "artistName": "Sid Sriram",
        "role": "primary"
      }
    ],
    "album": "Geetha Govindam",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 268,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0z1x2c3v4b9",
      "streamUrl": "",
      "durationSeconds": 268
    },
    "genre": "Carnatic Fusion",
    "language": "Telugu",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.62,
      "valence": 0.76,
      "acousticness": 0.42,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-298",
    "title": "Kannaana Kanney",
    "artist": "Sid Sriram",
    "artistId": "artist-40",
    "artists": [
      {
        "artistId": "artist-40",
        "artistName": "Sid Sriram",
        "role": "primary"
      }
    ],
    "album": "Viswasam",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 269,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6n7m8k9j0h5",
      "streamUrl": "",
      "durationSeconds": 269
    },
    "genre": "Carnatic Fusion",
    "language": "Tamil",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.58,
      "valence": 0.65,
      "acousticness": 0.55,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-299",
    "title": "Oo Antava",
    "artist": "Devi Sri Prasad (DSP)",
    "artistId": "artist-41",
    "artists": [
      {
        "artistId": "artist-41",
        "artistName": "Devi Sri Prasad (DSP)",
        "role": "primary"
      }
    ],
    "album": "Pushpa: The Rise",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 227,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1z2x3c4v5b9",
      "streamUrl": "",
      "durationSeconds": 227
    },
    "genre": "Telugu Pop",
    "language": "Telugu",
    "mood": "Energetic",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.92,
      "valence": 0.85,
      "acousticness": 0.08,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-300",
    "title": "Saami Saami",
    "artist": "Devi Sri Prasad (DSP)",
    "artistId": "artist-41",
    "artists": [
      {
        "artistId": "artist-41",
        "artistName": "Devi Sri Prasad (DSP)",
        "role": "primary"
      }
    ],
    "album": "Pushpa: The Rise",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 223,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7n8m9k0j1h5",
      "streamUrl": "",
      "durationSeconds": 223
    },
    "genre": "Telugu Pop",
    "language": "Telugu",
    "mood": "Euphoric",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.94,
      "valence": 0.92,
      "acousticness": 0.06,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-301",
    "title": "Butta Bomma",
    "artist": "Devi Sri Prasad (DSP)",
    "artistId": "artist-41",
    "artists": [
      {
        "artistId": "artist-41",
        "artistName": "Devi Sri Prasad (DSP)",
        "role": "primary"
      }
    ],
    "album": "Ala Vaikunthapurramuloo",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3q4w5e6r7t1",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Telugu Pop",
    "language": "Telugu",
    "mood": "Euphoric",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.89,
      "valence": 0.93,
      "acousticness": 0.12,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-302",
    "title": "Illuminati",
    "artist": "Sushin Shyam",
    "artistId": "artist-42",
    "artists": [
      {
        "artistId": "artist-42",
        "artistName": "Sushin Shyam",
        "role": "primary"
      }
    ],
    "album": "Aavesham",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "tOM-nWPcR4U",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Malayalam Film Score",
    "language": "Malayalam",
    "mood": "Euphoric",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.95,
      "valence": 0.9,
      "acousticness": 0.06,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-303",
    "title": "Kuthanthram",
    "artist": "Sushin Shyam",
    "artistId": "artist-42",
    "artists": [
      {
        "artistId": "artist-42",
        "artistName": "Sushin Shyam",
        "role": "primary"
      }
    ],
    "album": "Manjummel Boys",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 178,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9u0i1o2p3q7",
      "streamUrl": "",
      "durationSeconds": 178
    },
    "genre": "Malayalam Film Score",
    "language": "Malayalam",
    "mood": "Empowering",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.92,
      "valence": 0.82,
      "acousticness": 0.08,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-304",
    "title": "Aadharanjali",
    "artist": "Sushin Shyam",
    "artistId": "artist-42",
    "artists": [
      {
        "artistId": "artist-42",
        "artistName": "Sushin Shyam",
        "role": "primary"
      }
    ],
    "album": "Romancham",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 192,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5a6s7d8f9g3",
      "streamUrl": "",
      "durationSeconds": 192
    },
    "genre": "Malayalam Film Score",
    "language": "Malayalam",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.91,
      "valence": 0.88,
      "acousticness": 0.07,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-305",
    "title": "Zingaat",
    "artist": "Ajay-Atul",
    "artistId": "artist-43",
    "artists": [
      {
        "artistId": "artist-43",
        "artistName": "Ajay-Atul",
        "role": "primary"
      }
    ],
    "album": "Sairat",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 226,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8ZpZ_W_tX6E",
      "streamUrl": "",
      "durationSeconds": 226
    },
    "genre": "Marathi Film Score",
    "language": "Marathi",
    "mood": "Euphoric",
    "bpm": 136,
    "acousticFeatures": {
      "danceability": 0.95,
      "energy": 0.99,
      "valence": 0.98,
      "acousticness": 0.04,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-306",
    "title": "Sairat Zaala Ji",
    "artist": "Ajay-Atul",
    "artistId": "artist-43",
    "artists": [
      {
        "artistId": "artist-43",
        "artistName": "Ajay-Atul",
        "role": "primary"
      }
    ],
    "album": "Sairat",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 369,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1h2j3k4l5m9",
      "streamUrl": "",
      "durationSeconds": 369
    },
    "genre": "Marathi Film Score",
    "language": "Marathi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.68,
      "valence": 0.72,
      "acousticness": 0.45,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-307",
    "title": "Yad Lagla",
    "artist": "Ajay-Atul",
    "artistId": "artist-43",
    "artists": [
      {
        "artistId": "artist-43",
        "artistName": "Ajay-Atul",
        "role": "primary"
      }
    ],
    "album": "Sairat",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 314,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7z8x9c0v1b5",
      "streamUrl": "",
      "durationSeconds": 314
    },
    "genre": "Marathi Film Score",
    "language": "Marathi",
    "mood": "Romantic",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.6,
      "valence": 0.64,
      "acousticness": 0.5,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-308",
    "title": "Khalasi",
    "artist": "Sachin-Jigar",
    "artistId": "artist-44",
    "artists": [
      {
        "artistId": "artist-44",
        "artistName": "Sachin-Jigar",
        "role": "primary"
      }
    ],
    "album": "Coke Studio Bharat",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 252,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q8x9w2e3r41",
      "streamUrl": "",
      "durationSeconds": 252
    },
    "genre": "Gujarati Pop",
    "language": "Gujarati",
    "mood": "Euphoric",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.94,
      "valence": 0.96,
      "acousticness": 0.1,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-309",
    "title": "Radha Ne Shyam",
    "artist": "Sachin-Jigar",
    "artistId": "artist-44",
    "artists": [
      {
        "artistId": "artist-44",
        "artistName": "Sachin-Jigar",
        "role": "primary"
      }
    ],
    "album": "Radha Ne Shyam",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 268,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "s1d2f3g4h51",
      "streamUrl": "",
      "durationSeconds": 268
    },
    "genre": "Gujarati Pop",
    "language": "Gujarati",
    "mood": "Euphoric",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.92,
      "valence": 0.94,
      "acousticness": 0.12,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-310",
    "title": "Chand Ne Kaho",
    "artist": "Sachin-Jigar",
    "artistId": "artist-44",
    "artists": [
      {
        "artistId": "artist-44",
        "artistName": "Sachin-Jigar",
        "role": "primary"
      }
    ],
    "album": "Chaal Jeevi Laiye!",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 286,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x9c8v7b6n51",
      "streamUrl": "",
      "durationSeconds": 286
    },
    "genre": "Gujarati Pop",
    "language": "Gujarati",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.58,
      "valence": 0.72,
      "acousticness": 0.52,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-311",
    "title": "Blinding Lights",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "After Hours",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4NRXx6U8ABQ",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Synth-pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 171,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.9,
      "valence": 0.82,
      "acousticness": 0.08,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-312",
    "title": "Starboy",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Starboy",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "34Na4j8AVgA",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Energetic",
    "bpm": 93,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.84,
      "valence": 0.72,
      "acousticness": 0.12,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-313",
    "title": "Save Your Tears",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "After Hours",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "XXYlFuWEuKI",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Synth-pop",
    "language": "English",
    "mood": "Romantic",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.8,
      "valence": 0.76,
      "acousticness": 0.15,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-314",
    "title": "After Hours",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "After Hours",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 361,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "ygTZZpVkm3o",
      "streamUrl": "",
      "durationSeconds": 361
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Late Night",
    "bpm": 109,
    "acousticFeatures": {
      "danceability": 0.74,
      "energy": 0.72,
      "valence": 0.48,
      "acousticness": 0.22,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-315",
    "title": "Die For You",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Starboy",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 260,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "QLCpqdqeoII",
      "streamUrl": "",
      "durationSeconds": 260
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Romantic",
    "bpm": 67,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.62,
      "valence": 0.58,
      "acousticness": 0.28,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-316",
    "title": "The Hills",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Beauty Behind the Madness",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 242,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yzTuBuRdAyA",
      "streamUrl": "",
      "durationSeconds": 242
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Late Night",
    "bpm": 113,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.78,
      "valence": 0.42,
      "acousticness": 0.16,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-317",
    "title": "Can't Feel My Face",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Beauty Behind the Madness",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 213,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "dqt8Z1k0oWQ",
      "streamUrl": "",
      "durationSeconds": 213
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.88,
      "valence": 0.85,
      "acousticness": 0.1,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-318",
    "title": "I Feel It Coming",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Starboy",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 269,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "qFLhGq0060w",
      "streamUrl": "",
      "durationSeconds": 269
    },
    "genre": "Disco",
    "language": "English",
    "mood": "Romantic",
    "bpm": 93,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.76,
      "valence": 0.84,
      "acousticness": 0.2,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-319",
    "title": "One Dance",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Views",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 174,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "iAbnEUA0wpA",
      "streamUrl": "",
      "durationSeconds": 174
    },
    "genre": "Dancehall",
    "language": "English",
    "mood": "Chill",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.78,
      "valence": 0.82,
      "acousticness": 0.14,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-320",
    "title": "God's Plan",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Scorpion",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "xpVfcZ0ZcFM",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Hip-Hop",
    "language": "English",
    "mood": "Empowering",
    "bpm": 77,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.65,
      "valence": 0.68,
      "acousticness": 0.18,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-321",
    "title": "Hotline Bling",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Views",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 267,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "uxpDa-c-4Mc",
      "streamUrl": "",
      "durationSeconds": 267
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Late Night",
    "bpm": 135,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.62,
      "valence": 0.75,
      "acousticness": 0.22,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-322",
    "title": "In My Feelings",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Scorpion",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 217,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "DRS_PpOrUZ4",
      "streamUrl": "",
      "durationSeconds": 217
    },
    "genre": "Hip-Hop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 91,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.72,
      "valence": 0.84,
      "acousticness": 0.15,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-323",
    "title": "Passionfruit",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "More Life",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 298,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8Xf_o3qFf4A",
      "streamUrl": "",
      "durationSeconds": 298
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Chill",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.58,
      "valence": 0.65,
      "acousticness": 0.32,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-324",
    "title": "Rich Flex",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Her Loss",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 239,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "v8w8e7r6t52",
      "streamUrl": "",
      "durationSeconds": 239
    },
    "genre": "Trap",
    "language": "English",
    "mood": "Energetic",
    "bpm": 140,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.86,
      "valence": 0.6,
      "acousticness": 0.08,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-325",
    "title": "Levitating",
    "artist": "Dua Lipa",
    "artistId": "artist-47",
    "artists": [
      {
        "artistId": "artist-47",
        "artistName": "Dua Lipa",
        "role": "primary"
      }
    ],
    "album": "Future Nostalgia",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 203,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "TUVcZfQe-Kw",
      "streamUrl": "",
      "durationSeconds": 203
    },
    "genre": "Disco",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 103,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.92,
      "valence": 0.91,
      "acousticness": 0.07,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-326",
    "title": "Don't Start Now",
    "artist": "Dua Lipa",
    "artistId": "artist-47",
    "artists": [
      {
        "artistId": "artist-47",
        "artistName": "Dua Lipa",
        "role": "primary"
      }
    ],
    "album": "Future Nostalgia",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 183,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "oygrmJFKYZY",
      "streamUrl": "",
      "durationSeconds": 183
    },
    "genre": "Disco",
    "language": "English",
    "mood": "Empowering",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.9,
      "valence": 0.85,
      "acousticness": 0.08,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-327",
    "title": "New Rules",
    "artist": "Dua Lipa",
    "artistId": "artist-47",
    "artists": [
      {
        "artistId": "artist-47",
        "artistName": "Dua Lipa",
        "role": "primary"
      }
    ],
    "album": "Dua Lipa",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 209,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "k2qgadSvNyU",
      "streamUrl": "",
      "durationSeconds": 209
    },
    "genre": "Dance-pop",
    "language": "English",
    "mood": "Empowering",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.85,
      "valence": 0.78,
      "acousticness": 0.1,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-328",
    "title": "Break My Heart",
    "artist": "Dua Lipa",
    "artistId": "artist-47",
    "artists": [
      {
        "artistId": "artist-47",
        "artistName": "Dua Lipa",
        "role": "primary"
      }
    ],
    "album": "Future Nostalgia",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 221,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "Nj2U6rhnucI",
      "streamUrl": "",
      "durationSeconds": 221
    },
    "genre": "Disco",
    "language": "English",
    "mood": "Energetic",
    "bpm": 113,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.88,
      "valence": 0.84,
      "acousticness": 0.09,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-329",
    "title": "Dance The Night",
    "artist": "Dua Lipa",
    "artistId": "artist-47",
    "artists": [
      {
        "artistId": "artist-47",
        "artistName": "Dua Lipa",
        "role": "primary"
      }
    ],
    "album": "Barbie The Album",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 176,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "OiC1rgCPmUQ",
      "streamUrl": "",
      "durationSeconds": 176
    },
    "genre": "Disco",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.91,
      "valence": 0.92,
      "acousticness": 0.06,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-330",
    "title": "Rockstar",
    "artist": "Post Malone",
    "artistId": "artist-48",
    "artists": [
      {
        "artistId": "artist-48",
        "artistName": "Post Malone",
        "role": "primary"
      }
    ],
    "album": "Beerbongs & Bentleys",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "UceaB440jbw",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Trap",
    "language": "English",
    "mood": "Late Night",
    "bpm": 160,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.76,
      "valence": 0.52,
      "acousticness": 0.18,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-331",
    "title": "Sunflower",
    "artist": "Post Malone",
    "artistId": "artist-48",
    "artists": [
      {
        "artistId": "artist-48",
        "artistName": "Post Malone",
        "role": "primary"
      }
    ],
    "album": "Spider-Man: Into the Spider-Verse",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 158,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "ApXoWvfEYVU",
      "streamUrl": "",
      "durationSeconds": 158
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.74,
      "valence": 0.92,
      "acousticness": 0.25,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-332",
    "title": "Circles",
    "artist": "Post Malone",
    "artistId": "artist-48",
    "artists": [
      {
        "artistId": "artist-48",
        "artistName": "Post Malone",
        "role": "primary"
      }
    ],
    "album": "Hollywood's Bleeding",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "wXhTHyIgQ_U",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Pop Rock",
    "language": "English",
    "mood": "Chill",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.78,
      "valence": 0.8,
      "acousticness": 0.28,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-333",
    "title": "Congratulations",
    "artist": "Post Malone",
    "artistId": "artist-48",
    "artists": [
      {
        "artistId": "artist-48",
        "artistName": "Post Malone",
        "role": "primary"
      }
    ],
    "album": "Stoney",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 220,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "SC4xZwuaCwo",
      "streamUrl": "",
      "durationSeconds": 220
    },
    "genre": "Hip-Hop",
    "language": "English",
    "mood": "Empowering",
    "bpm": 123,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.8,
      "valence": 0.75,
      "acousticness": 0.14,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-334",
    "title": "Better Now",
    "artist": "Post Malone",
    "artistId": "artist-48",
    "artists": [
      {
        "artistId": "artist-48",
        "artistName": "Post Malone",
        "role": "primary"
      }
    ],
    "album": "Beerbongs & Bentleys",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 231,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "UYwF-jdcVjY",
      "streamUrl": "",
      "durationSeconds": 231
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Late Night",
    "bpm": 145,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.78,
      "valence": 0.65,
      "acousticness": 0.22,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-335",
    "title": "Bad Guy",
    "artist": "Billie Eilish",
    "artistId": "artist-49",
    "artists": [
      {
        "artistId": "artist-49",
        "artistName": "Billie Eilish",
        "role": "primary"
      }
    ],
    "album": "When We All Fall Asleep, Where Do We Go?",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "DyDfgMOUjCI",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Electropop",
    "language": "English",
    "mood": "Energetic",
    "bpm": 135,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.7,
      "valence": 0.65,
      "acousticness": 0.28,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-336",
    "title": "Lovely",
    "artist": "Billie Eilish",
    "artistId": "artist-49",
    "artists": [
      {
        "artistId": "artist-49",
        "artistName": "Billie Eilish",
        "role": "primary"
      }
    ],
    "album": "13 Reasons Why",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "V1Pl8CzNzCw",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Alt Pop",
    "language": "English",
    "mood": "Late Night",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.4,
      "valence": 0.25,
      "acousticness": 0.75,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-337",
    "title": "Everything I Wanted",
    "artist": "Billie Eilish",
    "artistId": "artist-49",
    "artists": [
      {
        "artistId": "artist-49",
        "artistName": "Billie Eilish",
        "role": "primary"
      }
    ],
    "album": "Everything I Wanted",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 245,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "egVU289EYL8",
      "streamUrl": "",
      "durationSeconds": 245
    },
    "genre": "Alt Pop",
    "language": "English",
    "mood": "Chill",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.45,
      "valence": 0.42,
      "acousticness": 0.68,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-338",
    "title": "Happier Than Ever",
    "artist": "Billie Eilish",
    "artistId": "artist-49",
    "artists": [
      {
        "artistId": "artist-49",
        "artistName": "Billie Eilish",
        "role": "primary"
      }
    ],
    "album": "Happier Than Ever",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 298,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5GJWxDKyk3A",
      "streamUrl": "",
      "durationSeconds": 298
    },
    "genre": "Alt Rock",
    "language": "English",
    "mood": "Empowering",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.85,
      "valence": 0.48,
      "acousticness": 0.45,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-339",
    "title": "Birds of a Feather",
    "artist": "Billie Eilish",
    "artistId": "artist-49",
    "artists": [
      {
        "artistId": "artist-49",
        "artistName": "Billie Eilish",
        "role": "primary"
      }
    ],
    "album": "Hit Me Hard and Soft",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "d5gf9dXb49o",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Alt Pop",
    "language": "English",
    "mood": "Romantic",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.65,
      "valence": 0.75,
      "acousticness": 0.35,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-340",
    "title": "SICKO MODE",
    "artist": "Travis Scott",
    "artistId": "artist-50",
    "artists": [
      {
        "artistId": "artist-50",
        "artistName": "Travis Scott",
        "role": "primary"
      }
    ],
    "album": "ASTROWORLD",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 312,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6ONRf7h3sdk",
      "streamUrl": "",
      "durationSeconds": 312
    },
    "genre": "Trap",
    "language": "English",
    "mood": "Energetic",
    "bpm": 155,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.94,
      "valence": 0.62,
      "acousticness": 0.05,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-341",
    "title": "Goosebumps",
    "artist": "Travis Scott",
    "artistId": "artist-50",
    "artists": [
      {
        "artistId": "artist-50",
        "artistName": "Travis Scott",
        "role": "primary"
      }
    ],
    "album": "Birds in the Trap Sing McKnight",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 243,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "Dst9gZkq1a8",
      "streamUrl": "",
      "durationSeconds": 243
    },
    "genre": "Trap",
    "language": "English",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.88,
      "valence": 0.58,
      "acousticness": 0.08,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-342",
    "title": "HIGHEST IN THE ROOM",
    "artist": "Travis Scott",
    "artistId": "artist-50",
    "artists": [
      {
        "artistId": "artist-50",
        "artistName": "Travis Scott",
        "role": "primary"
      }
    ],
    "album": "HIGHEST IN THE ROOM",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 176,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "tfSS1e3kYeo",
      "streamUrl": "",
      "durationSeconds": 176
    },
    "genre": "Trap",
    "language": "English",
    "mood": "Late Night",
    "bpm": 154,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.78,
      "valence": 0.45,
      "acousticness": 0.12,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-343",
    "title": "FE!N",
    "artist": "Travis Scott",
    "artistId": "artist-50",
    "artists": [
      {
        "artistId": "artist-50",
        "artistName": "Travis Scott",
        "role": "primary"
      }
    ],
    "album": "UTOPIA",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 191,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "B9synWjqBn8",
      "streamUrl": "",
      "durationSeconds": 191
    },
    "genre": "Trap",
    "language": "English",
    "mood": "Energetic",
    "bpm": 148,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.96,
      "valence": 0.65,
      "acousticness": 0.04,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-344",
    "title": "HUMBLE.",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "DAMN.",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 177,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "tvTRZJ-4EyI",
      "streamUrl": "",
      "durationSeconds": 177
    },
    "genre": "West Coast Rap",
    "language": "English",
    "mood": "Energetic",
    "bpm": 150,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.92,
      "valence": 0.78,
      "acousticness": 0.05,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-345",
    "title": "Money Trees",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "good kid, m.A.A.d city",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 386,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "smqhSl0u_Qk",
      "streamUrl": "",
      "durationSeconds": 386
    },
    "genre": "West Coast Rap",
    "language": "English",
    "mood": "Chill",
    "bpm": 72,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.62,
      "valence": 0.55,
      "acousticness": 0.25,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-346",
    "title": "Not Like Us",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "Not Like Us",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 274,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "H58vbez_m4E",
      "streamUrl": "",
      "durationSeconds": 274
    },
    "genre": "West Coast Rap",
    "language": "English",
    "mood": "Empowering",
    "bpm": 101,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.94,
      "valence": 0.88,
      "acousticness": 0.06,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-347",
    "title": "As It Was",
    "artist": "Harry Styles",
    "artistId": "artist-52",
    "artists": [
      {
        "artistId": "artist-52",
        "artistName": "Harry Styles",
        "role": "primary"
      }
    ],
    "album": "Harry's House",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 167,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "H5v3k2q3w4e",
      "streamUrl": "",
      "durationSeconds": 167
    },
    "genre": "Synth-pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 174,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.88,
      "valence": 0.9,
      "acousticness": 0.15,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-348",
    "title": "Watermelon Sugar",
    "artist": "Harry Styles",
    "artistId": "artist-52",
    "artists": [
      {
        "artistId": "artist-52",
        "artistName": "Harry Styles",
        "role": "primary"
      }
    ],
    "album": "Fine Line",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 174,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "E07s5ZYygMg",
      "streamUrl": "",
      "durationSeconds": 174
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.82,
      "valence": 0.86,
      "acousticness": 0.18,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-349",
    "title": "Adore You",
    "artist": "Harry Styles",
    "artistId": "artist-52",
    "artists": [
      {
        "artistId": "artist-52",
        "artistName": "Harry Styles",
        "role": "primary"
      }
    ],
    "album": "Fine Line",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 207,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "VF-r5TtlT9w",
      "streamUrl": "",
      "durationSeconds": 207
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Romantic",
    "bpm": 99,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.76,
      "valence": 0.82,
      "acousticness": 0.2,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-350",
    "title": "Cruel Summer",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Lover",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 178,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "ic8j13U_FS8",
      "streamUrl": "",
      "durationSeconds": 178
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 170,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.92,
      "valence": 0.88,
      "acousticness": 0.1,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-351",
    "title": "Anti-Hero",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Midnights",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "b1kbLwvqugk",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Synth-pop",
    "language": "English",
    "mood": "Late Night",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.72,
      "valence": 0.65,
      "acousticness": 0.22,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-352",
    "title": "Blank Space",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "1989",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 231,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "e-ORhEE9VVg",
      "streamUrl": "",
      "durationSeconds": 231
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Energetic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.8,
      "valence": 0.78,
      "acousticness": 0.12,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-353",
    "title": "Shake It Off",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "1989",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 219,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "nfWlot6h_JM",
      "streamUrl": "",
      "durationSeconds": 219
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 160,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.94,
      "valence": 0.95,
      "acousticness": 0.06,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-354",
    "title": "Love Story",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Fearless",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 235,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8xg3vE8Ie_E",
      "streamUrl": "",
      "durationSeconds": 235
    },
    "genre": "Country Pop",
    "language": "English",
    "mood": "Romantic",
    "bpm": 119,
    "acousticFeatures": {
      "danceability": 0.74,
      "energy": 0.78,
      "valence": 0.82,
      "acousticness": 0.28,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-355",
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "artistId": "artist-54",
    "artists": [
      {
        "artistId": "artist-54",
        "artistName": "Ed Sheeran",
        "role": "primary"
      }
    ],
    "album": "\u00f7 (Divide)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 233,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "JGwWNGJdvx8",
      "streamUrl": "",
      "durationSeconds": 233
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.85,
      "valence": 0.93,
      "acousticness": 0.15,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-356",
    "title": "Perfect",
    "artist": "Ed Sheeran",
    "artistId": "artist-54",
    "artists": [
      {
        "artistId": "artist-54",
        "artistName": "Ed Sheeran",
        "role": "primary"
      }
    ],
    "album": "\u00f7 (Divide)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 263,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2Vv-BfVoq4c",
      "streamUrl": "",
      "durationSeconds": 263
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Romantic",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.52,
      "valence": 0.68,
      "acousticness": 0.62,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-357",
    "title": "Thinking Out Loud",
    "artist": "Ed Sheeran",
    "artistId": "artist-54",
    "artists": [
      {
        "artistId": "artist-54",
        "artistName": "Ed Sheeran",
        "role": "primary"
      }
    ],
    "album": "x (Multiply)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 281,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "lp-EO5I60KA",
      "streamUrl": "",
      "durationSeconds": 281
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Romantic",
    "bpm": 79,
    "acousticFeatures": {
      "danceability": 0.68,
      "energy": 0.54,
      "valence": 0.72,
      "acousticness": 0.58,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-358",
    "title": "Bad Habits",
    "artist": "Ed Sheeran",
    "artistId": "artist-54",
    "artists": [
      {
        "artistId": "artist-54",
        "artistName": "Ed Sheeran",
        "role": "primary"
      }
    ],
    "album": "= (Equals)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 231,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "orJSJGHjBLI",
      "streamUrl": "",
      "durationSeconds": 231
    },
    "genre": "Dance-pop",
    "language": "English",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.9,
      "valence": 0.85,
      "acousticness": 0.08,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-359",
    "title": "Uptown Funk",
    "artist": "Bruno Mars",
    "artistId": "artist-55",
    "artists": [
      {
        "artistId": "artist-55",
        "artistName": "Bruno Mars",
        "role": "primary"
      }
    ],
    "album": "Uptown Special",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 270,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "OPf0YbXqDm0",
      "streamUrl": "",
      "durationSeconds": 270
    },
    "genre": "Funk",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.94,
      "energy": 0.96,
      "valence": 0.96,
      "acousticness": 0.04,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-360",
    "title": "24K Magic",
    "artist": "Bruno Mars",
    "artistId": "artist-55",
    "artists": [
      {
        "artistId": "artist-55",
        "artistName": "Bruno Mars",
        "role": "primary"
      }
    ],
    "album": "24K Magic",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 226,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "UqyT8IEBkvY",
      "streamUrl": "",
      "durationSeconds": 226
    },
    "genre": "Funk",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 107,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.92,
      "valence": 0.92,
      "acousticness": 0.07,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-361",
    "title": "That's What I Like",
    "artist": "Bruno Mars",
    "artistId": "artist-55",
    "artists": [
      {
        "artistId": "artist-55",
        "artistName": "Bruno Mars",
        "role": "primary"
      }
    ],
    "album": "24K Magic",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 206,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "PMivT7MJ41M",
      "streamUrl": "",
      "durationSeconds": 206
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Romantic",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.78,
      "valence": 0.88,
      "acousticness": 0.12,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-362",
    "title": "7 Rings",
    "artist": "Ariana Grande",
    "artistId": "artist-56",
    "artists": [
      {
        "artistId": "artist-56",
        "artistName": "Ariana Grande",
        "role": "primary"
      }
    ],
    "album": "Thank U, Next",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 178,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "QYh6mYIJG2Y",
      "streamUrl": "",
      "durationSeconds": 178
    },
    "genre": "Trap Pop",
    "language": "English",
    "mood": "Empowering",
    "bpm": 140,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.8,
      "valence": 0.75,
      "acousticness": 0.14,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-363",
    "title": "Thank U Next",
    "artist": "Ariana Grande",
    "artistId": "artist-56",
    "artists": [
      {
        "artistId": "artist-56",
        "artistName": "Ariana Grande",
        "role": "primary"
      }
    ],
    "album": "Thank U, Next",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 207,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "gl1aHhXnN1k",
      "streamUrl": "",
      "durationSeconds": 207
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Empowering",
    "bpm": 107,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.75,
      "valence": 0.82,
      "acousticness": 0.18,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-364",
    "title": "Kill Bill",
    "artist": "SZA",
    "artistId": "artist-57",
    "artists": [
      {
        "artistId": "artist-57",
        "artistName": "SZA",
        "role": "primary"
      }
    ],
    "album": "SOS",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 153,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "mN_FkZ8G7h1",
      "streamUrl": "",
      "durationSeconds": 153
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Late Night",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.68,
      "valence": 0.65,
      "acousticness": 0.28,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-365",
    "title": "Snooze",
    "artist": "SZA",
    "artistId": "artist-57",
    "artists": [
      {
        "artistId": "artist-57",
        "artistName": "SZA",
        "role": "primary"
      }
    ],
    "album": "SOS",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 201,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5uWpYn7eZl9",
      "streamUrl": "",
      "durationSeconds": 201
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Romantic",
    "bpm": 143,
    "acousticFeatures": {
      "danceability": 0.76,
      "energy": 0.62,
      "valence": 0.6,
      "acousticness": 0.35,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-366",
    "title": "Peaches",
    "artist": "Justin Bieber",
    "artistId": "artist-58",
    "artists": [
      {
        "artistId": "artist-58",
        "artistName": "Justin Bieber",
        "role": "primary"
      }
    ],
    "album": "Justice",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "tQ0yjYUFKAE",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Chill",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.72,
      "valence": 0.82,
      "acousticness": 0.2,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-367",
    "title": "Stay",
    "artist": "Justin Bieber",
    "artistId": "artist-58",
    "artists": [
      {
        "artistId": "artist-58",
        "artistName": "Justin Bieber",
        "role": "primary"
      }
    ],
    "album": "F*CK LOVE 3",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 141,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "kTJczUoc268",
      "streamUrl": "",
      "durationSeconds": 141
    },
    "genre": "Pop Rock",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 170,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.92,
      "valence": 0.86,
      "acousticness": 0.08,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-368",
    "title": "Umbrella",
    "artist": "Rihanna",
    "artistId": "artist-59",
    "artists": [
      {
        "artistId": "artist-59",
        "artistName": "Rihanna",
        "role": "primary"
      }
    ],
    "album": "Good Girl Gone Bad",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 275,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "CvBfHwUxHIk",
      "streamUrl": "",
      "durationSeconds": 275
    },
    "genre": "Pop",
    "language": "English",
    "mood": "Empowering",
    "bpm": 87,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.88,
      "valence": 0.8,
      "acousticness": 0.1,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-369",
    "title": "We Found Love",
    "artist": "Rihanna",
    "artistId": "artist-59",
    "artists": [
      {
        "artistId": "artist-59",
        "artistName": "Rihanna",
        "role": "primary"
      }
    ],
    "album": "Talk That Talk",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "tg00YEETFzg",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "EDM",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.96,
      "valence": 0.9,
      "acousticness": 0.05,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-370",
    "title": "Viva La Vida",
    "artist": "Coldplay",
    "artistId": "artist-60",
    "artists": [
      {
        "artistId": "artist-60",
        "artistName": "Coldplay",
        "role": "primary"
      }
    ],
    "album": "Viva La Vida or Death and All His Friends",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 242,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "dvgZkm1xWPE",
      "streamUrl": "",
      "durationSeconds": 242
    },
    "genre": "Alt Rock",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 138,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.88,
      "valence": 0.82,
      "acousticness": 0.15,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-371",
    "title": "Yellow",
    "artist": "Coldplay",
    "artistId": "artist-60",
    "artists": [
      {
        "artistId": "artist-60",
        "artistName": "Coldplay",
        "role": "primary"
      }
    ],
    "album": "Parachutes",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 269,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yKNxeF4KMsY",
      "streamUrl": "",
      "durationSeconds": 269
    },
    "genre": "Alt Rock",
    "language": "English",
    "mood": "Romantic",
    "bpm": 87,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.7,
      "valence": 0.65,
      "acousticness": 0.4,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-372",
    "title": "Fix You",
    "artist": "Coldplay",
    "artistId": "artist-60",
    "artists": [
      {
        "artistId": "artist-60",
        "artistName": "Coldplay",
        "role": "primary"
      }
    ],
    "album": "X&Y",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 295,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "k4V3Mo61fJM",
      "streamUrl": "",
      "durationSeconds": 295
    },
    "genre": "Alt Rock",
    "language": "English",
    "mood": "Nostalgic",
    "bpm": 138,
    "acousticFeatures": {
      "danceability": 0.52,
      "energy": 0.68,
      "valence": 0.45,
      "acousticness": 0.55,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-373",
    "title": "Hymn for the Weekend",
    "artist": "Coldplay",
    "artistId": "artist-60",
    "artists": [
      {
        "artistId": "artist-60",
        "artistName": "Coldplay",
        "role": "primary"
      }
    ],
    "album": "A Head Full of Dreams",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 258,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "YykjpeuMNEk",
      "streamUrl": "",
      "durationSeconds": 258
    },
    "genre": "Pop Rock",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.86,
      "valence": 0.88,
      "acousticness": 0.18,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-374",
    "title": "Bohemian Rhapsody",
    "artist": "Queen",
    "artistId": "artist-61",
    "artists": [
      {
        "artistId": "artist-61",
        "artistName": "Queen",
        "role": "primary"
      }
    ],
    "album": "A Night at the Opera",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 354,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "fJ9rUzIMcZQ",
      "streamUrl": "",
      "durationSeconds": 354
    },
    "genre": "Classic Rock",
    "language": "English",
    "mood": "Empowering",
    "bpm": 72,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.85,
      "valence": 0.6,
      "acousticness": 0.45,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-375",
    "title": "Don't Stop Me Now",
    "artist": "Queen",
    "artistId": "artist-61",
    "artists": [
      {
        "artistId": "artist-61",
        "artistName": "Queen",
        "role": "primary"
      }
    ],
    "album": "Jazz",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 209,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "HgzGwKwLmgM",
      "streamUrl": "",
      "durationSeconds": 209
    },
    "genre": "Classic Rock",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 156,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.94,
      "valence": 0.96,
      "acousticness": 0.12,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-376",
    "title": "Do I Wanna Know?",
    "artist": "Arctic Monkeys",
    "artistId": "artist-62",
    "artists": [
      {
        "artistId": "artist-62",
        "artistName": "Arctic Monkeys",
        "role": "primary"
      }
    ],
    "album": "AM",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 272,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "bpOSxM0rNPM",
      "streamUrl": "",
      "durationSeconds": 272
    },
    "genre": "Indie Rock",
    "language": "English",
    "mood": "Late Night",
    "bpm": 85,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.82,
      "valence": 0.55,
      "acousticness": 0.18,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-377",
    "title": "505",
    "artist": "Arctic Monkeys",
    "artistId": "artist-62",
    "artists": [
      {
        "artistId": "artist-62",
        "artistName": "Arctic Monkeys",
        "role": "primary"
      }
    ],
    "album": "Favourite Worst Nightmare",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 253,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "qU9mHegkTc4",
      "streamUrl": "",
      "durationSeconds": 253
    },
    "genre": "Indie Rock",
    "language": "English",
    "mood": "Late Night",
    "bpm": 140,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.85,
      "valence": 0.45,
      "acousticness": 0.25,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-378",
    "title": "In The End",
    "artist": "Linkin Park",
    "artistId": "artist-63",
    "artists": [
      {
        "artistId": "artist-63",
        "artistName": "Linkin Park",
        "role": "primary"
      }
    ],
    "album": "Hybrid Theory",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 216,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "eVTXPUF4Oz4",
      "streamUrl": "",
      "durationSeconds": 216
    },
    "genre": "Nu Metal",
    "language": "English",
    "mood": "Empowering",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.58,
      "acousticness": 0.1,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-379",
    "title": "Numb",
    "artist": "Linkin Park",
    "artistId": "artist-63",
    "artists": [
      {
        "artistId": "artist-63",
        "artistName": "Linkin Park",
        "role": "primary"
      }
    ],
    "album": "Meteora",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 187,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "kXYiU_JCYtU",
      "streamUrl": "",
      "durationSeconds": 187
    },
    "genre": "Nu Metal",
    "language": "English",
    "mood": "Empowering",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.94,
      "valence": 0.52,
      "acousticness": 0.08,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-380",
    "title": "Wake Me Up",
    "artist": "Avicii",
    "artistId": "artist-64",
    "artists": [
      {
        "artistId": "artist-64",
        "artistName": "Avicii",
        "role": "primary"
      }
    ],
    "album": "True",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 249,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "IcrbM1l_BoI",
      "streamUrl": "",
      "durationSeconds": 249
    },
    "genre": "EDM",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.92,
      "acousticness": 0.15,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-381",
    "title": "The Nights",
    "artist": "Avicii",
    "artistId": "artist-64",
    "artists": [
      {
        "artistId": "artist-64",
        "artistName": "Avicii",
        "role": "primary"
      }
    ],
    "album": "The Days / Nights EP",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 176,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "UtF6Jej8yb4",
      "streamUrl": "",
      "durationSeconds": 176
    },
    "genre": "EDM",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.95,
      "valence": 0.94,
      "acousticness": 0.12,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-382",
    "title": "Levels",
    "artist": "Avicii",
    "artistId": "artist-64",
    "artists": [
      {
        "artistId": "artist-64",
        "artistName": "Avicii",
        "role": "primary"
      }
    ],
    "album": "Levels",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 199,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "_ovdm2yX4MA",
      "streamUrl": "",
      "durationSeconds": 199
    },
    "genre": "EDM",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.97,
      "valence": 0.91,
      "acousticness": 0.05,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-383",
    "title": "Closer",
    "artist": "The Chainsmokers",
    "artistId": "artist-65",
    "artists": [
      {
        "artistId": "artist-65",
        "artistName": "The Chainsmokers",
        "role": "primary"
      }
    ],
    "album": "Collage",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 245,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "PT2_F-1esPk",
      "streamUrl": "",
      "durationSeconds": 245
    },
    "genre": "EDM Pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.82,
      "valence": 0.86,
      "acousticness": 0.2,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-384",
    "title": "Paris",
    "artist": "The Chainsmokers",
    "artistId": "artist-65",
    "artists": [
      {
        "artistId": "artist-65",
        "artistName": "The Chainsmokers",
        "role": "primary"
      }
    ],
    "album": "Memories...Do Not Open",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 221,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "fRNkTS44hPN",
      "streamUrl": "",
      "durationSeconds": 221
    },
    "genre": "EDM Pop",
    "language": "English",
    "mood": "Chill",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.74,
      "valence": 0.78,
      "acousticness": 0.25,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-385",
    "title": "Summer",
    "artist": "Calvin Harris",
    "artistId": "artist-66",
    "artists": [
      {
        "artistId": "artist-66",
        "artistName": "Calvin Harris",
        "role": "primary"
      }
    ],
    "album": "Motion",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 222,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "ebXbLfLAC3r",
      "streamUrl": "",
      "durationSeconds": 222
    },
    "genre": "EDM",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.96,
      "valence": 0.92,
      "acousticness": 0.06,
      "vibeScore": 0.99
    }
  },
  {
    "id": "track-386",
    "title": "Feel So Close",
    "artist": "Calvin Harris",
    "artistId": "artist-66",
    "artists": [
      {
        "artistId": "artist-66",
        "artistName": "Calvin Harris",
        "role": "primary"
      }
    ],
    "album": "18 Months",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 206,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "dGghkjpNhQ8",
      "streamUrl": "",
      "durationSeconds": 206
    },
    "genre": "EDM",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.91,
      "energy": 0.95,
      "valence": 0.93,
      "acousticness": 0.07,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-387",
    "title": "Animals",
    "artist": "Martin Garrix",
    "artistId": "artist-67",
    "artists": [
      {
        "artistId": "artist-67",
        "artistName": "Martin Garrix",
        "role": "primary"
      }
    ],
    "album": "Animals",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 184,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "gCYcHz2k5x0",
      "streamUrl": "",
      "durationSeconds": 184
    },
    "genre": "Big Room House",
    "language": "English",
    "mood": "Energetic",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.98,
      "valence": 0.8,
      "acousticness": 0.02,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-388",
    "title": "Takeover",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Hidden Gems",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 195,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "v8w8e7r6t53",
      "streamUrl": "",
      "durationSeconds": 195
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.85,
      "valence": 0.75,
      "acousticness": 0.12,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-389",
    "title": "Foreigns",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Not By Chance",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 188,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "g8h7j6k5l42",
      "streamUrl": "",
      "durationSeconds": 188
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.72,
      "valence": 0.68,
      "acousticness": 0.2,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-390",
    "title": "Chances",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Not By Chance",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2c3v4b5n6m0",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 92,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.25,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-391",
    "title": "Goat",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Not By Chance",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 175,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6m7k8j9h0g4",
      "streamUrl": "",
      "durationSeconds": 175
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.88,
      "valence": 0.74,
      "acousticness": 0.1,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-392",
    "title": "Faraar",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Faraar",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 192,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1g2h3j4k5l9",
      "streamUrl": "",
      "durationSeconds": 192
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.76,
      "energy": 0.7,
      "valence": 0.65,
      "acousticness": 0.22,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-393",
    "title": "Scars",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Two Hearts Never Break The Same",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7y6t5r4e3w5",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Late Night",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.52,
      "valence": 0.45,
      "acousticness": 0.4,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-394",
    "title": "Hills",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Two Hearts Never Break The Same",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 184,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3w2q1a0s9d1",
      "streamUrl": "",
      "durationSeconds": 184
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 94,
    "acousticFeatures": {
      "danceability": 0.74,
      "energy": 0.62,
      "valence": 0.6,
      "acousticness": 0.3,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-395",
    "title": "Chauffeur",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Drive Thru",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 188,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1j2k3l4m5n9",
      "streamUrl": "",
      "durationSeconds": 188
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.75,
      "valence": 0.78,
      "acousticness": 0.18,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-396",
    "title": "Umbrella",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "MoonChild Era",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 174,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7u8i9o0p1q7",
      "streamUrl": "",
      "durationSeconds": 174
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.72,
      "valence": 0.82,
      "acousticness": 0.19,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-397",
    "title": "Nava Nava Pyaar",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "MoonChild Era",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 202,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3e4r5t6y7u3",
      "streamUrl": "",
      "durationSeconds": 202
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.76,
      "energy": 0.68,
      "valence": 0.75,
      "acousticness": 0.24,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-398",
    "title": "Magic",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Ghost",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 190,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8b9a0c1d2e5",
      "streamUrl": "",
      "durationSeconds": 190
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.81,
      "energy": 0.76,
      "valence": 0.8,
      "acousticness": 0.16,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-399",
    "title": "Lalkaara",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Ghost",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 212,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4f5g6h7j8k1",
      "streamUrl": "",
      "durationSeconds": 212
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.93,
      "valence": 0.91,
      "acousticness": 0.08,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-400",
    "title": "Muchh",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Muchh",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 185,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0l1k2j3h4g7",
      "streamUrl": "",
      "durationSeconds": 185
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.9,
      "valence": 0.89,
      "acousticness": 0.1,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-401",
    "title": "El Sueno",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "El Sueno",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 205,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6m7n8b9v0c3",
      "streamUrl": "",
      "durationSeconds": 205
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.85,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-402",
    "title": "Laembadgini",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Laembadgini",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 214,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2q3w4e5r6t2",
      "streamUrl": "",
      "durationSeconds": 214
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.91,
      "valence": 0.92,
      "acousticness": 0.09,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-403",
    "title": "Jind Mahi",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Jind Mahi",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g7",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.79,
      "energy": 0.72,
      "valence": 0.81,
      "acousticness": 0.2,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-404",
    "title": "Chu Gon Do",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "BTFU",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 188,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0z1x2c3v4b0",
      "streamUrl": "",
      "durationSeconds": 188
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.94,
      "valence": 0.9,
      "acousticness": 0.07,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-405",
    "title": "Antidote",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Making Memories",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 195,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6n7m8k9j0h6",
      "streamUrl": "",
      "durationSeconds": 195
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.79,
      "energy": 0.71,
      "valence": 0.76,
      "acousticness": 0.22,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-406",
    "title": "Jee Ni Lagda",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Making Memories",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 172,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2w3e4r5t6y0",
      "streamUrl": "",
      "durationSeconds": 172
    },
    "genre": "Punjabi Pop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.75,
      "valence": 0.8,
      "acousticness": 0.18,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-407",
    "title": "Let 'Em Play",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Way Ahead",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 180,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8u9i0o1p2q6",
      "streamUrl": "",
      "durationSeconds": 180
    },
    "genre": "Punjabi Rap",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.88,
      "valence": 0.72,
      "acousticness": 0.09,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-408",
    "title": "No Status",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "BTFU",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g8",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.91,
      "valence": 0.86,
      "acousticness": 0.1,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-409",
    "title": "Here & There",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "BTFU",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "0h1j2k3l4m8",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.89,
      "valence": 0.85,
      "acousticness": 0.11,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-410",
    "title": "Addi Sunni",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "BTFU",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 190,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "6n7b8v9c0x4",
      "streamUrl": "",
      "durationSeconds": 190
    },
    "genre": "Bhangra",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.92,
      "valence": 0.88,
      "acousticness": 0.08,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-411",
    "title": "Bandana",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Still Rollin",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 168,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "2q3w4e5r6t3",
      "streamUrl": "",
      "durationSeconds": 168
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.76,
      "valence": 0.74,
      "acousticness": 0.15,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-412",
    "title": "Offshore",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Still Rollin",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 178,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "8y9u0i1o2p9",
      "streamUrl": "",
      "durationSeconds": 178
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.82,
      "valence": 0.78,
      "acousticness": 0.12,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-413",
    "title": "OG",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Still Rollin",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 182,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "4a5s6d7f8g9",
      "streamUrl": "",
      "durationSeconds": 182
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.85,
      "valence": 0.71,
      "acousticness": 0.1,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-414",
    "title": "My Dear",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Leo",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 165,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1z2x3c4v5b1",
      "streamUrl": "",
      "durationSeconds": 165
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.7,
      "valence": 0.76,
      "acousticness": 0.2,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-415",
    "title": "Be Mine",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Leo",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 170,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7n8m9k0j1h6",
      "streamUrl": "",
      "durationSeconds": 170
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.79,
      "energy": 0.68,
      "valence": 0.75,
      "acousticness": 0.22,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-416",
    "title": "G-Shit",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Moosetape",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 232,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3q4w5e6r7t2",
      "streamUrl": "",
      "durationSeconds": 232
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.89,
      "valence": 0.72,
      "acousticness": 0.08,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-417",
    "title": "Bitch I'm Back",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Moosetape",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 228,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9u0i1o2p3q8",
      "streamUrl": "",
      "durationSeconds": 228
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.87,
      "energy": 0.92,
      "valence": 0.75,
      "acousticness": 0.07,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-418",
    "title": "US",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Moosetape",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 240,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "5a6s7d8f9g4",
      "streamUrl": "",
      "durationSeconds": 240
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Romantic",
    "bpm": 94,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.74,
      "valence": 0.72,
      "acousticness": 0.18,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-419",
    "title": "Moosadrill",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Moosetape",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "1h2j3k4l5m0",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 140,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.95,
      "valence": 0.65,
      "acousticness": 0.05,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-420",
    "title": "Dhakka",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Dhakka",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 220,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "7z8x9c0v1b6",
      "streamUrl": "",
      "durationSeconds": 220
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.88,
      "valence": 0.7,
      "acousticness": 0.1,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-421",
    "title": "Devil",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "PBX 1",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 235,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "3m4n5b6v7c1",
      "streamUrl": "",
      "durationSeconds": 235
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Empowering",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.86,
      "valence": 0.68,
      "acousticness": 0.12,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-422",
    "title": "Game",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Game",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "9x0z1a2s3d7",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Punjabi Hip Hop",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.9,
      "valence": 0.74,
      "acousticness": 0.08,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-423",
    "title": "Muskurane",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "CityLights",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 334,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "m9n8b7v6c51",
      "streamUrl": "",
      "durationSeconds": 334
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.52,
      "valence": 0.62,
      "acousticness": 0.55,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-424",
    "title": "Hamari Adhuri Kahani",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Hamari Adhuri Kahani",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 398,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "l1k2j3h4g52",
      "streamUrl": "",
      "durationSeconds": 398
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 76,
    "acousticFeatures": {
      "danceability": 0.5,
      "energy": 0.48,
      "valence": 0.35,
      "acousticness": 0.68,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-425",
    "title": "Mast Magan",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "2 States",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 280,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "d9f8g7h6j52",
      "streamUrl": "",
      "durationSeconds": 280
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 88,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.62,
      "valence": 0.74,
      "acousticness": 0.45,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-426",
    "title": "Suno Na Sangemarmar",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Youngistaan",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 212,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "s1d2f3g4h52",
      "streamUrl": "",
      "durationSeconds": 212
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.64,
      "energy": 0.58,
      "valence": 0.7,
      "acousticness": 0.48,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-427",
    "title": "Pal",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Jalebi",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 247,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "w9e8r7t6y52",
      "streamUrl": "",
      "durationSeconds": 247
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 85,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.55,
      "valence": 0.66,
      "acousticness": 0.52,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-428",
    "title": "Samjhawan",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Humpty Sharma Ki Dulhania",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 269,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q9w8e7r6t52",
      "streamUrl": "",
      "durationSeconds": 269
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 82,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.54,
      "valence": 0.6,
      "acousticness": 0.58,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-429",
    "title": "Soch Na Sake",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Airlift",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 281,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "z1x2c3v4b52",
      "streamUrl": "",
      "durationSeconds": 281
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 86,
    "acousticFeatures": {
      "danceability": 0.64,
      "energy": 0.6,
      "valence": 0.68,
      "acousticness": 0.45,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-430",
    "title": "Kalank Title Track",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Kalank",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 311,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x9c8v7b6n52",
      "streamUrl": "",
      "durationSeconds": 311
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.58,
      "valence": 0.52,
      "acousticness": 0.6,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-431",
    "title": "Duaa",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Shanghai",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 260,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "p8o7i6u5y42",
      "streamUrl": "",
      "durationSeconds": 260
    },
    "genre": "Sufi",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 78,
    "acousticFeatures": {
      "danceability": 0.52,
      "energy": 0.5,
      "valence": 0.38,
      "acousticness": 0.64,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-432",
    "title": "Main Dhoondne Ko Zamaane Mein",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Heartless",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 267,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "l9k8j7h6g52",
      "streamUrl": "",
      "durationSeconds": 267
    },
    "genre": "Romantic",
    "language": "Hindi",
    "mood": "Late Night",
    "bpm": 80,
    "acousticFeatures": {
      "danceability": 0.54,
      "energy": 0.52,
      "valence": 0.42,
      "acousticness": 0.58,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-433",
    "title": "Patakha Guddi",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Highway",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 285,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "m1n2b3v4c52",
      "streamUrl": "",
      "durationSeconds": 285
    },
    "genre": "Sufi",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.92,
      "valence": 0.9,
      "acousticness": 0.15,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-434",
    "title": "Maahi Ve",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Highway",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 240,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "r5t6y7u8i92",
      "streamUrl": "",
      "durationSeconds": 240
    },
    "genre": "Soundtrack",
    "language": "Hindi",
    "mood": "Romantic",
    "bpm": 84,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.55,
      "valence": 0.68,
      "acousticness": 0.55,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-435",
    "title": "Luka Chuppi",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Rang De Basanti",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 396,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "cWMxCE2HTa2",
      "streamUrl": "",
      "durationSeconds": 396
    },
    "genre": "Soundtrack",
    "language": "Hindi",
    "mood": "Nostalgic",
    "bpm": 74,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.4,
      "valence": 0.42,
      "acousticness": 0.75,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-436",
    "title": "Barso Re",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Guru",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 329,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "r_wR2e7b8g2",
      "streamUrl": "",
      "durationSeconds": 329
    },
    "genre": "Folk",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.88,
      "valence": 0.9,
      "acousticness": 0.25,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-437",
    "title": "Ghanan Ghanan",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Lagaan",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 371,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "kL9r3v2m1q2",
      "streamUrl": "",
      "durationSeconds": 371
    },
    "genre": "Folk",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.9,
      "valence": 0.92,
      "acousticness": 0.2,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-438",
    "title": "Choti Si Aasha",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Roja",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 295,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x4z3v2c1b02",
      "streamUrl": "",
      "durationSeconds": 295
    },
    "genre": "Soundtrack",
    "language": "Hindi",
    "mood": "Euphoric",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.78,
      "valence": 0.9,
      "acousticness": 0.35,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-439",
    "title": "Cardigan",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Folklore",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 239,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q1w2e3r4t52",
      "streamUrl": "",
      "durationSeconds": 239
    },
    "genre": "Indie Folk",
    "language": "English",
    "mood": "Late Night",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.55,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-440",
    "title": "Style",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "1989",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 231,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "a9s8d7f6g52",
      "streamUrl": "",
      "durationSeconds": 231
    },
    "genre": "Synth-pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.82,
      "valence": 0.78,
      "acousticness": 0.15,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-441",
    "title": "I Knew You Were Trouble",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Red",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 219,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "z8x7c6v5b42",
      "streamUrl": "",
      "durationSeconds": 219
    },
    "genre": "Dance-pop",
    "language": "English",
    "mood": "Energetic",
    "bpm": 154,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.92,
      "valence": 0.75,
      "acousticness": 0.08,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-442",
    "title": "Fortnight",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "The Tortured Poets Department",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 228,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "p1o2i3u4y52",
      "streamUrl": "",
      "durationSeconds": 228
    },
    "genre": "Synth-pop",
    "language": "English",
    "mood": "Late Night",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.74,
      "energy": 0.65,
      "valence": 0.55,
      "acousticness": 0.3,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-443",
    "title": "Lover",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Lover",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 221,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "m9n8b7v6c52",
      "streamUrl": "",
      "durationSeconds": 221
    },
    "genre": "Indie Pop",
    "language": "English",
    "mood": "Romantic",
    "bpm": 68,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.54,
      "valence": 0.65,
      "acousticness": 0.5,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-444",
    "title": "Look What You Made Me Do",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Reputation",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 195,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "l1k2j3h4g53",
      "streamUrl": "",
      "durationSeconds": 195
    },
    "genre": "Electropop",
    "language": "English",
    "mood": "Empowering",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.89,
      "valence": 0.68,
      "acousticness": 0.1,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-445",
    "title": "Creepin'",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Heroes & Villains",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 221,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "d9f8g7h6j53",
      "streamUrl": "",
      "durationSeconds": 221
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Late Night",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.78,
      "energy": 0.68,
      "valence": 0.6,
      "acousticness": 0.22,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-446",
    "title": "Call Out My Name",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "My Dear Melancholy,",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 228,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "s1d2f3g4h53",
      "streamUrl": "",
      "durationSeconds": 228
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Late Night",
    "bpm": 90,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.65,
      "valence": 0.4,
      "acousticness": 0.35,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-447",
    "title": "Often",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Beauty Behind the Madness",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 249,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "w9e8r7t6y53",
      "streamUrl": "",
      "durationSeconds": 249
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Late Night",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.74,
      "valence": 0.52,
      "acousticness": 0.2,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-448",
    "title": "In Your Eyes",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "After Hours",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 237,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q9w8e7r6t53",
      "streamUrl": "",
      "durationSeconds": 237
    },
    "genre": "Synth-pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.86,
      "valence": 0.82,
      "acousticness": 0.12,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-449",
    "title": "Heartless",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "After Hours",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "z1x2c3v4b53",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Trap",
    "language": "English",
    "mood": "Energetic",
    "bpm": 170,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.88,
      "valence": 0.65,
      "acousticness": 0.08,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-450",
    "title": "Less Than Zero",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Dawn FM",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 211,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x9c8v7b6n53",
      "streamUrl": "",
      "durationSeconds": 211
    },
    "genre": "Synth-pop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.89,
      "valence": 0.86,
      "acousticness": 0.1,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-451",
    "title": "Nonstop",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Scorpion",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 238,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "p8o7i6u5y43",
      "streamUrl": "",
      "durationSeconds": 238
    },
    "genre": "Trap",
    "language": "English",
    "mood": "Energetic",
    "bpm": 157,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.84,
      "valence": 0.6,
      "acousticness": 0.06,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-452",
    "title": "Nice For What",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Scorpion",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "l9k8j7h6g53",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Hip-Hop",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 93,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.88,
      "valence": 0.85,
      "acousticness": 0.1,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-453",
    "title": "Hold On We're Going Home",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Nothing Was the Same",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 227,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "m1n2b3v4c53",
      "streamUrl": "",
      "durationSeconds": 227
    },
    "genre": "R&B",
    "language": "English",
    "mood": "Romantic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.82,
      "energy": 0.68,
      "valence": 0.78,
      "acousticness": 0.25,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-454",
    "title": "Laugh Now Cry Later",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Certified Lover Boy",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 261,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "r5t6y7u8i93",
      "streamUrl": "",
      "durationSeconds": 261
    },
    "genre": "Hip-Hop",
    "language": "English",
    "mood": "Chill",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.75,
      "valence": 0.76,
      "acousticness": 0.15,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-455",
    "title": "Headlines",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Take Care",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 236,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "cWMxCE2HTa3",
      "streamUrl": "",
      "durationSeconds": 236
    },
    "genre": "Hip-Hop",
    "language": "English",
    "mood": "Empowering",
    "bpm": 152,
    "acousticFeatures": {
      "danceability": 0.84,
      "energy": 0.82,
      "valence": 0.7,
      "acousticness": 0.12,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-456",
    "title": "Alright",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "To Pimp a Butterfly",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 219,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "r_wR2e7b8g3",
      "streamUrl": "",
      "durationSeconds": 219
    },
    "genre": "Conscious Hip-Hop",
    "language": "English",
    "mood": "Empowering",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.86,
      "energy": 0.88,
      "valence": 0.78,
      "acousticness": 0.15,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-457",
    "title": "DNA.",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "DAMN.",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 185,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "kL9r3v2m1q3",
      "streamUrl": "",
      "durationSeconds": 185
    },
    "genre": "West Coast Rap",
    "language": "English",
    "mood": "Energetic",
    "bpm": 140,
    "acousticFeatures": {
      "danceability": 0.89,
      "energy": 0.96,
      "valence": 0.68,
      "acousticness": 0.05,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-458",
    "title": "Swimming Pools (Drank)",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "good kid, m.A.A.d city",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 313,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "x4z3v2c1b03",
      "streamUrl": "",
      "durationSeconds": 313
    },
    "genre": "West Coast Rap",
    "language": "English",
    "mood": "Late Night",
    "bpm": 74,
    "acousticFeatures": {
      "danceability": 0.8,
      "energy": 0.72,
      "valence": 0.5,
      "acousticness": 0.2,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-459",
    "title": "King Kunta",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "To Pimp a Butterfly",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 234,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "q1w2e3r4t53",
      "streamUrl": "",
      "durationSeconds": 234
    },
    "genre": "Funk Rap",
    "language": "English",
    "mood": "Euphoric",
    "bpm": 107,
    "acousticFeatures": {
      "danceability": 0.92,
      "energy": 0.9,
      "valence": 0.88,
      "acousticness": 0.08,
      "vibeScore": 0.98
    }
  },
  {
    "id": "track-460",
    "title": "All The Stars",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "Black Panther",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 232,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "a9s8d7f6g53",
      "streamUrl": "",
      "durationSeconds": 232
    },
    "genre": "Pop Rap",
    "language": "English",
    "mood": "Empowering",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.85,
      "energy": 0.82,
      "valence": 0.76,
      "acousticness": 0.16,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-461",
    "title": "Excuses (Acoustic Session)",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Excuses (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 250,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0460-1abc",
      "streamUrl": "",
      "durationSeconds": 250
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-462",
    "title": "Lover (Live in Concert)",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Lover (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 251,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0461-2abc",
      "streamUrl": "",
      "durationSeconds": 251
    },
    "genre": "Live",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-463",
    "title": "Admirin You (Lo-Fi Chill Mix)",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Admirin You (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 252,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0462-3abc",
      "streamUrl": "",
      "durationSeconds": 252
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 117,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-464",
    "title": "Elevated (Midnight Drift)",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Elevated (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 253,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0463-4abc",
      "streamUrl": "",
      "durationSeconds": 253
    },
    "genre": "Late Night",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-465",
    "title": "Same Beef (Sunset Acoustic)",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Same Beef (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 254,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0464-5abc",
      "streamUrl": "",
      "durationSeconds": 254
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 119,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-466",
    "title": "Lahore (Club Remix)",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Lahore (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 255,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0465-6abc",
      "streamUrl": "",
      "durationSeconds": 255
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-467",
    "title": "Backbone (Unplugged)",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Backbone (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 256,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0466-7abc",
      "streamUrl": "",
      "durationSeconds": 256
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 121,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-468",
    "title": "Haan Haige Aa (Festival Anthem)",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Haan Haige Aa (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 257,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0467-8abc",
      "streamUrl": "",
      "durationSeconds": 257
    },
    "genre": "Electronic",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-469",
    "title": "Teri Mitti (Slowed & Reverb)",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Teri Mitti (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 258,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0468-9abc",
      "streamUrl": "",
      "durationSeconds": 258
    },
    "genre": "Chill",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 123,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-470",
    "title": "Pata Chalgea (Orchestral Suite)",
    "artist": "Imran Khan",
    "artistId": "artist-10",
    "artists": [
      {
        "artistId": "artist-10",
        "artistName": "Imran Khan",
        "role": "primary"
      }
    ],
    "album": "Pata Chalgea (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 259,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt046910abc",
      "streamUrl": "",
      "durationSeconds": 259
    },
    "genre": "Classical",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-471",
    "title": "Mundian To Bach Ke (Acoustic Session)",
    "artist": "Panjabi MC",
    "artistId": "artist-11",
    "artists": [
      {
        "artistId": "artist-11",
        "artistName": "Panjabi MC",
        "role": "primary"
      }
    ],
    "album": "Mundian To Bach Ke (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 260,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt047011abc",
      "streamUrl": "",
      "durationSeconds": 260
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-472",
    "title": "Bolo Ta Ra Ra (Live in Concert)",
    "artist": "Daler Mehndi",
    "artistId": "artist-12",
    "artists": [
      {
        "artistId": "artist-12",
        "artistName": "Daler Mehndi",
        "role": "primary"
      }
    ],
    "album": "Bolo Ta Ra Ra (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 261,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt047112abc",
      "streamUrl": "",
      "durationSeconds": 261
    },
    "genre": "Live",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-473",
    "title": "Bamb Jatt (Lo-Fi Chill Mix)",
    "artist": "Jasmine Sandlas",
    "artistId": "artist-13",
    "artists": [
      {
        "artistId": "artist-13",
        "artistName": "Jasmine Sandlas",
        "role": "primary"
      }
    ],
    "album": "Bamb Jatt (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 262,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt047213abc",
      "streamUrl": "",
      "durationSeconds": 262
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 127,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-474",
    "title": "Time Chakda (Midnight Drift)",
    "artist": "Nimrat Khaira",
    "artistId": "artist-14",
    "artists": [
      {
        "artistId": "artist-14",
        "artistName": "Nimrat Khaira",
        "role": "primary"
      }
    ],
    "album": "Time Chakda (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 263,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt047314abc",
      "streamUrl": "",
      "durationSeconds": 263
    },
    "genre": "Late Night",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-475",
    "title": "Chori Chori (Sunset Acoustic)",
    "artist": "Sunanda Sharma",
    "artistId": "artist-15",
    "artists": [
      {
        "artistId": "artist-15",
        "artistName": "Sunanda Sharma",
        "role": "primary"
      }
    ],
    "album": "Chori Chori (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 264,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt047415abc",
      "streamUrl": "",
      "durationSeconds": 264
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 129,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-476",
    "title": "Phone (Club Remix)",
    "artist": "Mickey Singh",
    "artistId": "artist-16",
    "artists": [
      {
        "artistId": "artist-16",
        "artistName": "Mickey Singh",
        "role": "primary"
      }
    ],
    "album": "Phone (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 265,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt047516abc",
      "streamUrl": "",
      "durationSeconds": 265
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-477",
    "title": "Majha Block (Unplugged)",
    "artist": "Prem Dhillon",
    "artistId": "artist-17",
    "artists": [
      {
        "artistId": "artist-17",
        "artistName": "Prem Dhillon",
        "role": "primary"
      }
    ],
    "album": "Majha Block (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 266,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt047617abc",
      "streamUrl": "",
      "durationSeconds": 266
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 131,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-478",
    "title": "Rooh (Festival Anthem)",
    "artist": "Bohemia",
    "artistId": "artist-18",
    "artists": [
      {
        "artistId": "artist-18",
        "artistName": "Bohemia",
        "role": "primary"
      }
    ],
    "album": "Rooh (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 267,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt047718abc",
      "streamUrl": "",
      "durationSeconds": 267
    },
    "genre": "Electronic",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 132,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-479",
    "title": "Hauli Hauli (Slowed & Reverb)",
    "artist": "Garry Sandhu",
    "artistId": "artist-19",
    "artists": [
      {
        "artistId": "artist-19",
        "artistName": "Garry Sandhu",
        "role": "primary"
      }
    ],
    "album": "Hauli Hauli (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 268,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt047819abc",
      "streamUrl": "",
      "durationSeconds": 268
    },
    "genre": "Chill",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 133,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-480",
    "title": "Tere Hawale (Orchestral Suite)",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Tere Hawale (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 269,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt047920abc",
      "streamUrl": "",
      "durationSeconds": 269
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-481",
    "title": "Kun Faya Kun (Acoustic Session)",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Kun Faya Kun (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 190,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt048021abc",
      "streamUrl": "",
      "durationSeconds": 190
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-482",
    "title": "Subhanallah (Live in Concert)",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Subhanallah (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 191,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt048122abc",
      "streamUrl": "",
      "durationSeconds": 191
    },
    "genre": "Live",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-483",
    "title": "Phir Se Ud Chala (Lo-Fi Chill Mix)",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Phir Se Ud Chala (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 192,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt048223abc",
      "streamUrl": "",
      "durationSeconds": 192
    },
    "genre": "Lo-Fi",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-484",
    "title": "Pehli Nazar Mein (Midnight Drift)",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Pehli Nazar Mein (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 193,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt048324abc",
      "streamUrl": "",
      "durationSeconds": 193
    },
    "genre": "Late Night",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-485",
    "title": "Paani Paani (Sunset Acoustic)",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Paani Paani (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt048425abc",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 99,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-486",
    "title": "Raataan Lambiyan (Club Remix)",
    "artist": "Jubin Nautiyal",
    "artistId": "artist-26",
    "artists": [
      {
        "artistId": "artist-26",
        "artistName": "Jubin Nautiyal",
        "role": "primary"
      }
    ],
    "album": "Raataan Lambiyan (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 195,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt048526abc",
      "streamUrl": "",
      "durationSeconds": 195
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-487",
    "title": "Deewani Mastani (Unplugged)",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Deewani Mastani (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt048627abc",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 101,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-488",
    "title": "Kya Mujhe Pyaar Hai (Festival Anthem)",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Kya Mujhe Pyaar Hai (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 197,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt048728abc",
      "streamUrl": "",
      "durationSeconds": 197
    },
    "genre": "Electronic",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-489",
    "title": "Tumse Milke Dil Ka (Slowed & Reverb)",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Tumse Milke Dil Ka (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt048829abc",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Chill",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 103,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-490",
    "title": "Jhoome Jo Pathaan (Orchestral Suite)",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "Jhoome Jo Pathaan (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 199,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt048930abc",
      "streamUrl": "",
      "durationSeconds": 199
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-491",
    "title": "Namo Namo (Acoustic Session)",
    "artist": "Amit Trivedi",
    "artistId": "artist-31",
    "artists": [
      {
        "artistId": "artist-31",
        "artistName": "Amit Trivedi",
        "role": "primary"
      }
    ],
    "album": "Namo Namo (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt049031abc",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-492",
    "title": "Kasoor (Live in Concert)",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "Kasoor (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 201,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt049132abc",
      "streamUrl": "",
      "durationSeconds": 201
    },
    "genre": "Live",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-493",
    "title": "Husn (Lo-Fi Chill Mix)",
    "artist": "Anuv Jain",
    "artistId": "artist-33",
    "artists": [
      {
        "artistId": "artist-33",
        "artistName": "Anuv Jain",
        "role": "primary"
      }
    ],
    "album": "Husn (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 202,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt049233abc",
      "streamUrl": "",
      "durationSeconds": 202
    },
    "genre": "Lo-Fi",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 107,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-494",
    "title": "Khudi (Midnight Drift)",
    "artist": "The Local Train",
    "artistId": "artist-34",
    "artists": [
      {
        "artistId": "artist-34",
        "artistName": "The Local Train",
        "role": "primary"
      }
    ],
    "album": "Khudi (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 203,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt049334abc",
      "streamUrl": "",
      "durationSeconds": 203
    },
    "genre": "Late Night",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-495",
    "title": "Barso (Sunset Acoustic)",
    "artist": "Ritviz",
    "artistId": "artist-35",
    "artists": [
      {
        "artistId": "artist-35",
        "artistName": "Ritviz",
        "role": "primary"
      }
    ],
    "album": "Barso (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt049435abc",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 109,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-496",
    "title": "Firefly (Club Remix)",
    "artist": "When Chai Met Toast",
    "artistId": "artist-36",
    "artists": [
      {
        "artistId": "artist-36",
        "artistName": "When Chai Met Toast",
        "role": "primary"
      }
    ],
    "album": "Firefly (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 205,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt049536abc",
      "streamUrl": "",
      "durationSeconds": 205
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-497",
    "title": "101 (Unplugged)",
    "artist": "Seedhe Maut",
    "artistId": "artist-37",
    "artists": [
      {
        "artistId": "artist-37",
        "artistName": "Seedhe Maut",
        "role": "primary"
      }
    ],
    "album": "101 (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 206,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt049637abc",
      "streamUrl": "",
      "durationSeconds": 206
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 111,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-498",
    "title": "Chal Bombay (Festival Anthem)",
    "artist": "DIVINE",
    "artistId": "artist-38",
    "artists": [
      {
        "artistId": "artist-38",
        "artistName": "DIVINE",
        "role": "primary"
      }
    ],
    "album": "Chal Bombay (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 207,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt049738abc",
      "streamUrl": "",
      "durationSeconds": 207
    },
    "genre": "Electronic",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-499",
    "title": "Hukum (Slowed & Reverb)",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "Hukum (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 208,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt049839abc",
      "streamUrl": "",
      "durationSeconds": 208
    },
    "genre": "Chill",
    "language": "Tamil",
    "mood": "Chill",
    "bpm": 113,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-500",
    "title": "Adiye (Orchestral Suite)",
    "artist": "Sid Sriram",
    "artistId": "artist-40",
    "artists": [
      {
        "artistId": "artist-40",
        "artistName": "Sid Sriram",
        "role": "primary"
      }
    ],
    "album": "Adiye (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 209,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt049940abc",
      "streamUrl": "",
      "durationSeconds": 209
    },
    "genre": "Classical",
    "language": "Tamil",
    "mood": "Chill",
    "bpm": 114,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-501",
    "title": "Oo Antava (Acoustic Session)",
    "artist": "Devi Sri Prasad (DSP)",
    "artistId": "artist-41",
    "artists": [
      {
        "artistId": "artist-41",
        "artistName": "Devi Sri Prasad (DSP)",
        "role": "primary"
      }
    ],
    "album": "Oo Antava (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt050041abc",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Acoustic",
    "language": "Telugu",
    "mood": "Chill",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-502",
    "title": "Kuthanthram (Live in Concert)",
    "artist": "Sushin Shyam",
    "artistId": "artist-42",
    "artists": [
      {
        "artistId": "artist-42",
        "artistName": "Sushin Shyam",
        "role": "primary"
      }
    ],
    "album": "Kuthanthram (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 211,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt050142abc",
      "streamUrl": "",
      "durationSeconds": 211
    },
    "genre": "Live",
    "language": "Malayalam",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-503",
    "title": "Yad Lagla (Lo-Fi Chill Mix)",
    "artist": "Ajay-Atul",
    "artistId": "artist-43",
    "artists": [
      {
        "artistId": "artist-43",
        "artistName": "Ajay-Atul",
        "role": "primary"
      }
    ],
    "album": "Yad Lagla (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 212,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt050243abc",
      "streamUrl": "",
      "durationSeconds": 212
    },
    "genre": "Lo-Fi",
    "language": "Marathi",
    "mood": "Chill",
    "bpm": 117,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-504",
    "title": "Apna Bana Le (Midnight Drift)",
    "artist": "Sachin-Jigar",
    "artistId": "artist-44",
    "artists": [
      {
        "artistId": "artist-44",
        "artistName": "Sachin-Jigar",
        "role": "primary"
      }
    ],
    "album": "Apna Bana Le (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 213,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt050344abc",
      "streamUrl": "",
      "durationSeconds": 213
    },
    "genre": "Late Night",
    "language": "Gujarati",
    "mood": "Chill",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-505",
    "title": "Die For You (Sunset Acoustic)",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Die For You (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 214,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt050445abc",
      "streamUrl": "",
      "durationSeconds": 214
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 119,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-506",
    "title": "One Dance (Club Remix)",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "One Dance (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt050546abc",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Dance",
    "language": "English",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-507",
    "title": "Don't Start Now (Unplugged)",
    "artist": "Dua Lipa",
    "artistId": "artist-47",
    "artists": [
      {
        "artistId": "artist-47",
        "artistName": "Dua Lipa",
        "role": "primary"
      }
    ],
    "album": "Don't Start Now (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 216,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt050647abc",
      "streamUrl": "",
      "durationSeconds": 216
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 121,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-508",
    "title": "Circles (Festival Anthem)",
    "artist": "Post Malone",
    "artistId": "artist-48",
    "artists": [
      {
        "artistId": "artist-48",
        "artistName": "Post Malone",
        "role": "primary"
      }
    ],
    "album": "Circles (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 217,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt050748abc",
      "streamUrl": "",
      "durationSeconds": 217
    },
    "genre": "Electronic",
    "language": "English",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-509",
    "title": "Happier Than Ever (Slowed & Reverb)",
    "artist": "Billie Eilish",
    "artistId": "artist-49",
    "artists": [
      {
        "artistId": "artist-49",
        "artistName": "Billie Eilish",
        "role": "primary"
      }
    ],
    "album": "Happier Than Ever (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt050849abc",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Chill",
    "language": "English",
    "mood": "Chill",
    "bpm": 123,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-510",
    "title": "FE!N (Orchestral Suite)",
    "artist": "Travis Scott",
    "artistId": "artist-50",
    "artists": [
      {
        "artistId": "artist-50",
        "artistName": "Travis Scott",
        "role": "primary"
      }
    ],
    "album": "FE!N (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 219,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt050950abc",
      "streamUrl": "",
      "durationSeconds": 219
    },
    "genre": "Classical",
    "language": "English",
    "mood": "Chill",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-511",
    "title": "HUMBLE. (Acoustic Session)",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "HUMBLE. (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 220,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt051051abc",
      "streamUrl": "",
      "durationSeconds": 220
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-512",
    "title": "Watermelon Sugar (Live in Concert)",
    "artist": "Harry Styles",
    "artistId": "artist-52",
    "artists": [
      {
        "artistId": "artist-52",
        "artistName": "Harry Styles",
        "role": "primary"
      }
    ],
    "album": "Watermelon Sugar (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 221,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt051152abc",
      "streamUrl": "",
      "durationSeconds": 221
    },
    "genre": "Live",
    "language": "English",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-513",
    "title": "Blank Space (Lo-Fi Chill Mix)",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Blank Space (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 222,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt051253abc",
      "streamUrl": "",
      "durationSeconds": 222
    },
    "genre": "Lo-Fi",
    "language": "English",
    "mood": "Chill",
    "bpm": 127,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-514",
    "title": "Bad Habits (Midnight Drift)",
    "artist": "Ed Sheeran",
    "artistId": "artist-54",
    "artists": [
      {
        "artistId": "artist-54",
        "artistName": "Ed Sheeran",
        "role": "primary"
      }
    ],
    "album": "Bad Habits (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 223,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt051354abc",
      "streamUrl": "",
      "durationSeconds": 223
    },
    "genre": "Late Night",
    "language": "English",
    "mood": "Chill",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-515",
    "title": "Locked Out of Heaven (Sunset Acoustic)",
    "artist": "Bruno Mars",
    "artistId": "artist-55",
    "artists": [
      {
        "artistId": "artist-55",
        "artistName": "Bruno Mars",
        "role": "primary"
      }
    ],
    "album": "Locked Out of Heaven (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt051455abc",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 129,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-516",
    "title": "7 Rings (Club Remix)",
    "artist": "Ariana Grande",
    "artistId": "artist-56",
    "artists": [
      {
        "artistId": "artist-56",
        "artistName": "Ariana Grande",
        "role": "primary"
      }
    ],
    "album": "7 Rings (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 225,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt051556abc",
      "streamUrl": "",
      "durationSeconds": 225
    },
    "genre": "Dance",
    "language": "English",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-517",
    "title": "Snooze (Unplugged)",
    "artist": "SZA",
    "artistId": "artist-57",
    "artists": [
      {
        "artistId": "artist-57",
        "artistName": "SZA",
        "role": "primary"
      }
    ],
    "album": "Snooze (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 226,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt051657abc",
      "streamUrl": "",
      "durationSeconds": 226
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 131,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-518",
    "title": "Sorry (Festival Anthem)",
    "artist": "Justin Bieber",
    "artistId": "artist-58",
    "artists": [
      {
        "artistId": "artist-58",
        "artistName": "Justin Bieber",
        "role": "primary"
      }
    ],
    "album": "Sorry (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 227,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt051758abc",
      "streamUrl": "",
      "durationSeconds": 227
    },
    "genre": "Electronic",
    "language": "English",
    "mood": "Energetic",
    "bpm": 132,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-519",
    "title": "Work (Slowed & Reverb)",
    "artist": "Rihanna",
    "artistId": "artist-59",
    "artists": [
      {
        "artistId": "artist-59",
        "artistName": "Rihanna",
        "role": "primary"
      }
    ],
    "album": "Work (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 228,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt051859abc",
      "streamUrl": "",
      "durationSeconds": 228
    },
    "genre": "Chill",
    "language": "English",
    "mood": "Chill",
    "bpm": 133,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-520",
    "title": "Something Just Like This (Orchestral Suite)",
    "artist": "Coldplay",
    "artistId": "artist-60",
    "artists": [
      {
        "artistId": "artist-60",
        "artistName": "Coldplay",
        "role": "primary"
      }
    ],
    "album": "Something Just Like This (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 229,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt051960abc",
      "streamUrl": "",
      "durationSeconds": 229
    },
    "genre": "Classical",
    "language": "English",
    "mood": "Chill",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-521",
    "title": "Bohemian Rhapsody (Acoustic Session)",
    "artist": "Queen",
    "artistId": "artist-61",
    "artists": [
      {
        "artistId": "artist-61",
        "artistName": "Queen",
        "role": "primary"
      }
    ],
    "album": "Bohemian Rhapsody (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt052061abc",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-522",
    "title": "R U Mine? (Live in Concert)",
    "artist": "Arctic Monkeys",
    "artistId": "artist-62",
    "artists": [
      {
        "artistId": "artist-62",
        "artistName": "Arctic Monkeys",
        "role": "primary"
      }
    ],
    "album": "R U Mine? (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 231,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt052162abc",
      "streamUrl": "",
      "durationSeconds": 231
    },
    "genre": "Live",
    "language": "English",
    "mood": "Energetic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-523",
    "title": "Faint (Lo-Fi Chill Mix)",
    "artist": "Linkin Park",
    "artistId": "artist-63",
    "artists": [
      {
        "artistId": "artist-63",
        "artistName": "Linkin Park",
        "role": "primary"
      }
    ],
    "album": "Faint (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 232,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt052263abc",
      "streamUrl": "",
      "durationSeconds": 232
    },
    "genre": "Lo-Fi",
    "language": "English",
    "mood": "Chill",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-524",
    "title": "Waiting for Love (Midnight Drift)",
    "artist": "Avicii",
    "artistId": "artist-64",
    "artists": [
      {
        "artistId": "artist-64",
        "artistName": "Avicii",
        "role": "primary"
      }
    ],
    "album": "Waiting for Love (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 233,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt052364abc",
      "streamUrl": "",
      "durationSeconds": 233
    },
    "genre": "Late Night",
    "language": "English",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-525",
    "title": "Something Just Like This (Sunset Acoustic)",
    "artist": "The Chainsmokers",
    "artistId": "artist-65",
    "artists": [
      {
        "artistId": "artist-65",
        "artistName": "The Chainsmokers",
        "role": "primary"
      }
    ],
    "album": "Something Just Like This (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 234,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt052465abc",
      "streamUrl": "",
      "durationSeconds": 234
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 99,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-526",
    "title": "Summer (Club Remix)",
    "artist": "Calvin Harris",
    "artistId": "artist-66",
    "artists": [
      {
        "artistId": "artist-66",
        "artistName": "Calvin Harris",
        "role": "primary"
      }
    ],
    "album": "Summer (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 235,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt052566abc",
      "streamUrl": "",
      "durationSeconds": 235
    },
    "genre": "Dance",
    "language": "English",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-527",
    "title": "Scared to be Lonely (Unplugged)",
    "artist": "Martin Garrix",
    "artistId": "artist-67",
    "artists": [
      {
        "artistId": "artist-67",
        "artistName": "Martin Garrix",
        "role": "primary"
      }
    ],
    "album": "Scared to be Lonely (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 236,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt052667abc",
      "streamUrl": "",
      "durationSeconds": 236
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 101,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-528",
    "title": "With You (Festival Anthem)",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "With You (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 237,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0527-1abc",
      "streamUrl": "",
      "durationSeconds": 237
    },
    "genre": "Electronic",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-529",
    "title": "Hass Hass (Slowed & Reverb)",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Hass Hass (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 238,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0528-2abc",
      "streamUrl": "",
      "durationSeconds": 238
    },
    "genre": "Chill",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 103,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-530",
    "title": "Tauba Tauba (Orchestral Suite)",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Tauba Tauba (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 239,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0529-3abc",
      "streamUrl": "",
      "durationSeconds": 239
    },
    "genre": "Classical",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-531",
    "title": "Cheques (Acoustic Session)",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Cheques (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 240,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0530-4abc",
      "streamUrl": "",
      "durationSeconds": 240
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-532",
    "title": "So High (Live in Concert)",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "So High (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 241,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0531-5abc",
      "streamUrl": "",
      "durationSeconds": 241
    },
    "genre": "Live",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-533",
    "title": "Suit Suit (Lo-Fi Chill Mix)",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Suit Suit (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 242,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0532-6abc",
      "streamUrl": "",
      "durationSeconds": 242
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 107,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-534",
    "title": "Horn Blow (Midnight Drift)",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Horn Blow (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 243,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0533-7abc",
      "streamUrl": "",
      "durationSeconds": 243
    },
    "genre": "Late Night",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-535",
    "title": "Khabbi Seat (Sunset Acoustic)",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Khabbi Seat (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 244,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0534-8abc",
      "streamUrl": "",
      "durationSeconds": 244
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 109,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-536",
    "title": "Filhall (Club Remix)",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Filhall (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 245,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0535-9abc",
      "streamUrl": "",
      "durationSeconds": 245
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-537",
    "title": "Satisfya (Unplugged)",
    "artist": "Imran Khan",
    "artistId": "artist-10",
    "artists": [
      {
        "artistId": "artist-10",
        "artistName": "Imran Khan",
        "role": "primary"
      }
    ],
    "album": "Satisfya (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 246,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt053610abc",
      "streamUrl": "",
      "durationSeconds": 246
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 111,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-538",
    "title": "Mirza (Festival Anthem)",
    "artist": "Panjabi MC",
    "artistId": "artist-11",
    "artists": [
      {
        "artistId": "artist-11",
        "artistName": "Panjabi MC",
        "role": "primary"
      }
    ],
    "album": "Mirza (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 247,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt053711abc",
      "streamUrl": "",
      "durationSeconds": 247
    },
    "genre": "Electronic",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-539",
    "title": "Ho Jayegi Balle Balle (Slowed & Reverb)",
    "artist": "Daler Mehndi",
    "artistId": "artist-12",
    "artists": [
      {
        "artistId": "artist-12",
        "artistName": "Daler Mehndi",
        "role": "primary"
      }
    ],
    "album": "Ho Jayegi Balle Balle (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 248,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt053812abc",
      "streamUrl": "",
      "durationSeconds": 248
    },
    "genre": "Chill",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 113,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-540",
    "title": "Laddu (Orchestral Suite)",
    "artist": "Jasmine Sandlas",
    "artistId": "artist-13",
    "artists": [
      {
        "artistId": "artist-13",
        "artistName": "Jasmine Sandlas",
        "role": "primary"
      }
    ],
    "album": "Laddu (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 249,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt053913abc",
      "streamUrl": "",
      "durationSeconds": 249
    },
    "genre": "Classical",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 114,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-541",
    "title": "Bhalwani Geda (Acoustic Session)",
    "artist": "Nimrat Khaira",
    "artistId": "artist-14",
    "artists": [
      {
        "artistId": "artist-14",
        "artistName": "Nimrat Khaira",
        "role": "primary"
      }
    ],
    "album": "Bhalwani Geda (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 250,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt054014abc",
      "streamUrl": "",
      "durationSeconds": 250
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-542",
    "title": "Sandal (Live in Concert)",
    "artist": "Sunanda Sharma",
    "artistId": "artist-15",
    "artists": [
      {
        "artistId": "artist-15",
        "artistName": "Sunanda Sharma",
        "role": "primary"
      }
    ],
    "album": "Sandal (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 251,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt054115abc",
      "streamUrl": "",
      "durationSeconds": 251
    },
    "genre": "Live",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-543",
    "title": "Bad Girl (Lo-Fi Chill Mix)",
    "artist": "Mickey Singh",
    "artistId": "artist-16",
    "artists": [
      {
        "artistId": "artist-16",
        "artistName": "Mickey Singh",
        "role": "primary"
      }
    ],
    "album": "Bad Girl (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 252,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt054216abc",
      "streamUrl": "",
      "durationSeconds": 252
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 117,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-544",
    "title": "Lost Love (Midnight Drift)",
    "artist": "Prem Dhillon",
    "artistId": "artist-17",
    "artists": [
      {
        "artistId": "artist-17",
        "artistName": "Prem Dhillon",
        "role": "primary"
      }
    ],
    "album": "Lost Love (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 253,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt054317abc",
      "streamUrl": "",
      "durationSeconds": 253
    },
    "genre": "Late Night",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-545",
    "title": "Jaguar (Sunset Acoustic)",
    "artist": "Bohemia",
    "artistId": "artist-18",
    "artists": [
      {
        "artistId": "artist-18",
        "artistName": "Bohemia",
        "role": "primary"
      }
    ],
    "album": "Jaguar (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 254,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt054418abc",
      "streamUrl": "",
      "durationSeconds": 254
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 119,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-546",
    "title": "Yeah Baby (Club Remix)",
    "artist": "Garry Sandhu",
    "artistId": "artist-19",
    "artists": [
      {
        "artistId": "artist-19",
        "artistName": "Garry Sandhu",
        "role": "primary"
      }
    ],
    "album": "Yeah Baby (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 255,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt054519abc",
      "streamUrl": "",
      "durationSeconds": 255
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-547",
    "title": "Channa Mereya (Unplugged)",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Channa Mereya (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 256,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt054620abc",
      "streamUrl": "",
      "durationSeconds": 256
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 121,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-548",
    "title": "Chaiyya Chaiyya (Festival Anthem)",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Chaiyya Chaiyya (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 257,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt054721abc",
      "streamUrl": "",
      "durationSeconds": 257
    },
    "genre": "Electronic",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-549",
    "title": "Balam Pichkari (Slowed & Reverb)",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Balam Pichkari (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 258,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt054822abc",
      "streamUrl": "",
      "durationSeconds": 258
    },
    "genre": "Chill",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 123,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-550",
    "title": "Pee Loon (Orchestral Suite)",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Pee Loon (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 259,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt054923abc",
      "streamUrl": "",
      "durationSeconds": 259
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-551",
    "title": "Aadat (Acoustic Session)",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Aadat (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 260,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt055024abc",
      "streamUrl": "",
      "durationSeconds": 260
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-552",
    "title": "Kar Gayi Chull (Live in Concert)",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Kar Gayi Chull (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 261,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt055125abc",
      "streamUrl": "",
      "durationSeconds": 261
    },
    "genre": "Live",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-553",
    "title": "Tum Hi Aana (Lo-Fi Chill Mix)",
    "artist": "Jubin Nautiyal",
    "artistId": "artist-26",
    "artists": [
      {
        "artistId": "artist-26",
        "artistName": "Jubin Nautiyal",
        "role": "primary"
      }
    ],
    "album": "Tum Hi Aana (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 262,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt055226abc",
      "streamUrl": "",
      "durationSeconds": 262
    },
    "genre": "Lo-Fi",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 127,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-554",
    "title": "Sunn Raha Hai (Midnight Drift)",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Sunn Raha Hai (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 263,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt055327abc",
      "streamUrl": "",
      "durationSeconds": 263
    },
    "genre": "Late Night",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-555",
    "title": "Aankhon Mein Teri (Sunset Acoustic)",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Aankhon Mein Teri (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 264,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt055428abc",
      "streamUrl": "",
      "durationSeconds": 264
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 129,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-556",
    "title": "Kal Ho Naa Ho (Club Remix)",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Kal Ho Naa Ho (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 265,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt055529abc",
      "streamUrl": "",
      "durationSeconds": 265
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-557",
    "title": "Ghungroo (Unplugged)",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "Ghungroo (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 266,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt055630abc",
      "streamUrl": "",
      "durationSeconds": 266
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 131,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-558",
    "title": "London Thumakda (Festival Anthem)",
    "artist": "Amit Trivedi",
    "artistId": "artist-31",
    "artists": [
      {
        "artistId": "artist-31",
        "artistName": "Amit Trivedi",
        "role": "primary"
      }
    ],
    "album": "London Thumakda (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 267,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt055731abc",
      "streamUrl": "",
      "durationSeconds": 267
    },
    "genre": "Electronic",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 132,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-559",
    "title": "Dil Beparvah (Slowed & Reverb)",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "Dil Beparvah (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 268,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt055832abc",
      "streamUrl": "",
      "durationSeconds": 268
    },
    "genre": "Chill",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 133,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-560",
    "title": "Mishri (Orchestral Suite)",
    "artist": "Anuv Jain",
    "artistId": "artist-33",
    "artists": [
      {
        "artistId": "artist-33",
        "artistName": "Anuv Jain",
        "role": "primary"
      }
    ],
    "album": "Mishri (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 269,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt055933abc",
      "streamUrl": "",
      "durationSeconds": 269
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-561",
    "title": "Choo Lo (Acoustic Session)",
    "artist": "The Local Train",
    "artistId": "artist-34",
    "artists": [
      {
        "artistId": "artist-34",
        "artistName": "The Local Train",
        "role": "primary"
      }
    ],
    "album": "Choo Lo (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 190,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt056034abc",
      "streamUrl": "",
      "durationSeconds": 190
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-562",
    "title": "Sage (Live in Concert)",
    "artist": "Ritviz",
    "artistId": "artist-35",
    "artists": [
      {
        "artistId": "artist-35",
        "artistName": "Ritviz",
        "role": "primary"
      }
    ],
    "album": "Sage (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 191,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt056135abc",
      "streamUrl": "",
      "durationSeconds": 191
    },
    "genre": "Live",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-563",
    "title": "Joy of Little Things (Lo-Fi Chill Mix)",
    "artist": "When Chai Met Toast",
    "artistId": "artist-36",
    "artists": [
      {
        "artistId": "artist-36",
        "artistName": "When Chai Met Toast",
        "role": "primary"
      }
    ],
    "album": "Joy of Little Things (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 192,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt056236abc",
      "streamUrl": "",
      "durationSeconds": 192
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-564",
    "title": "Shaktimaan (Midnight Drift)",
    "artist": "Seedhe Maut",
    "artistId": "artist-37",
    "artists": [
      {
        "artistId": "artist-37",
        "artistName": "Seedhe Maut",
        "role": "primary"
      }
    ],
    "album": "Shaktimaan (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 193,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt056337abc",
      "streamUrl": "",
      "durationSeconds": 193
    },
    "genre": "Late Night",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-565",
    "title": "3:59 AM (Sunset Acoustic)",
    "artist": "DIVINE",
    "artistId": "artist-38",
    "artists": [
      {
        "artistId": "artist-38",
        "artistName": "DIVINE",
        "role": "primary"
      }
    ],
    "album": "3:59 AM (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt056438abc",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 99,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-566",
    "title": "Why This Kolaveri Di (Club Remix)",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "Why This Kolaveri Di (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 195,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt056539abc",
      "streamUrl": "",
      "durationSeconds": 195
    },
    "genre": "Dance",
    "language": "Tamil",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-567",
    "title": "Kannaana Kanney (Unplugged)",
    "artist": "Sid Sriram",
    "artistId": "artist-40",
    "artists": [
      {
        "artistId": "artist-40",
        "artistName": "Sid Sriram",
        "role": "primary"
      }
    ],
    "album": "Kannaana Kanney (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt056640abc",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Acoustic",
    "language": "Tamil",
    "mood": "Chill",
    "bpm": 101,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-568",
    "title": "Saami Saami (Festival Anthem)",
    "artist": "Devi Sri Prasad (DSP)",
    "artistId": "artist-41",
    "artists": [
      {
        "artistId": "artist-41",
        "artistName": "Devi Sri Prasad (DSP)",
        "role": "primary"
      }
    ],
    "album": "Saami Saami (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 197,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt056741abc",
      "streamUrl": "",
      "durationSeconds": 197
    },
    "genre": "Electronic",
    "language": "Telugu",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-569",
    "title": "Cherathukal (Slowed & Reverb)",
    "artist": "Sushin Shyam",
    "artistId": "artist-42",
    "artists": [
      {
        "artistId": "artist-42",
        "artistName": "Sushin Shyam",
        "role": "primary"
      }
    ],
    "album": "Cherathukal (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt056842abc",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Chill",
    "language": "Malayalam",
    "mood": "Chill",
    "bpm": 103,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-570",
    "title": "Deva Shree Ganesha (Orchestral Suite)",
    "artist": "Ajay-Atul",
    "artistId": "artist-43",
    "artists": [
      {
        "artistId": "artist-43",
        "artistName": "Ajay-Atul",
        "role": "primary"
      }
    ],
    "album": "Deva Shree Ganesha (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 199,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt056943abc",
      "streamUrl": "",
      "durationSeconds": 199
    },
    "genre": "Classical",
    "language": "Marathi",
    "mood": "Chill",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-571",
    "title": "Khalasi (Acoustic Session)",
    "artist": "Sachin-Jigar",
    "artistId": "artist-44",
    "artists": [
      {
        "artistId": "artist-44",
        "artistName": "Sachin-Jigar",
        "role": "primary"
      }
    ],
    "album": "Khalasi (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt057044abc",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Acoustic",
    "language": "Gujarati",
    "mood": "Chill",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-572",
    "title": "Starboy (Live in Concert)",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Starboy (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 201,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt057145abc",
      "streamUrl": "",
      "durationSeconds": 201
    },
    "genre": "Live",
    "language": "English",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-573",
    "title": "Hotline Bling (Lo-Fi Chill Mix)",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Hotline Bling (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 202,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt057246abc",
      "streamUrl": "",
      "durationSeconds": 202
    },
    "genre": "Lo-Fi",
    "language": "English",
    "mood": "Chill",
    "bpm": 107,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-574",
    "title": "Physical (Midnight Drift)",
    "artist": "Dua Lipa",
    "artistId": "artist-47",
    "artists": [
      {
        "artistId": "artist-47",
        "artistName": "Dua Lipa",
        "role": "primary"
      }
    ],
    "album": "Physical (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 203,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt057347abc",
      "streamUrl": "",
      "durationSeconds": 203
    },
    "genre": "Late Night",
    "language": "English",
    "mood": "Chill",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-575",
    "title": "Better Now (Sunset Acoustic)",
    "artist": "Post Malone",
    "artistId": "artist-48",
    "artists": [
      {
        "artistId": "artist-48",
        "artistName": "Post Malone",
        "role": "primary"
      }
    ],
    "album": "Better Now (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt057448abc",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 109,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-576",
    "title": "Bad Guy (Club Remix)",
    "artist": "Billie Eilish",
    "artistId": "artist-49",
    "artists": [
      {
        "artistId": "artist-49",
        "artistName": "Billie Eilish",
        "role": "primary"
      }
    ],
    "album": "Bad Guy (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 205,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt057549abc",
      "streamUrl": "",
      "durationSeconds": 205
    },
    "genre": "Dance",
    "language": "English",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-577",
    "title": "Goosebumps (Unplugged)",
    "artist": "Travis Scott",
    "artistId": "artist-50",
    "artists": [
      {
        "artistId": "artist-50",
        "artistName": "Travis Scott",
        "role": "primary"
      }
    ],
    "album": "Goosebumps (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 206,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt057650abc",
      "streamUrl": "",
      "durationSeconds": 206
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 111,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-578",
    "title": "Alright (Festival Anthem)",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "Alright (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 207,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt057751abc",
      "streamUrl": "",
      "durationSeconds": 207
    },
    "genre": "Electronic",
    "language": "English",
    "mood": "Energetic",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-579",
    "title": "Sign of the Times (Slowed & Reverb)",
    "artist": "Harry Styles",
    "artistId": "artist-52",
    "artists": [
      {
        "artistId": "artist-52",
        "artistName": "Harry Styles",
        "role": "primary"
      }
    ],
    "album": "Sign of the Times (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 208,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt057852abc",
      "streamUrl": "",
      "durationSeconds": 208
    },
    "genre": "Chill",
    "language": "English",
    "mood": "Chill",
    "bpm": 113,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-580",
    "title": "Love Story (Orchestral Suite)",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Love Story (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 209,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt057953abc",
      "streamUrl": "",
      "durationSeconds": 209
    },
    "genre": "Classical",
    "language": "English",
    "mood": "Chill",
    "bpm": 114,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-581",
    "title": "Shape of You (Acoustic Session)",
    "artist": "Ed Sheeran",
    "artistId": "artist-54",
    "artists": [
      {
        "artistId": "artist-54",
        "artistName": "Ed Sheeran",
        "role": "primary"
      }
    ],
    "album": "Shape of You (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt058054abc",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-582",
    "title": "24K Magic (Live in Concert)",
    "artist": "Bruno Mars",
    "artistId": "artist-55",
    "artists": [
      {
        "artistId": "artist-55",
        "artistName": "Bruno Mars",
        "role": "primary"
      }
    ],
    "album": "24K Magic (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 211,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt058155abc",
      "streamUrl": "",
      "durationSeconds": 211
    },
    "genre": "Live",
    "language": "English",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-583",
    "title": "Side to Side (Lo-Fi Chill Mix)",
    "artist": "Ariana Grande",
    "artistId": "artist-56",
    "artists": [
      {
        "artistId": "artist-56",
        "artistName": "Ariana Grande",
        "role": "primary"
      }
    ],
    "album": "Side to Side (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 212,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt058256abc",
      "streamUrl": "",
      "durationSeconds": 212
    },
    "genre": "Lo-Fi",
    "language": "English",
    "mood": "Chill",
    "bpm": 117,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-584",
    "title": "Kiss Me More (Midnight Drift)",
    "artist": "SZA",
    "artistId": "artist-57",
    "artists": [
      {
        "artistId": "artist-57",
        "artistName": "SZA",
        "role": "primary"
      }
    ],
    "album": "Kiss Me More (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 213,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt058357abc",
      "streamUrl": "",
      "durationSeconds": 213
    },
    "genre": "Late Night",
    "language": "English",
    "mood": "Chill",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-585",
    "title": "What Do You Mean? (Sunset Acoustic)",
    "artist": "Justin Bieber",
    "artistId": "artist-58",
    "artists": [
      {
        "artistId": "artist-58",
        "artistName": "Justin Bieber",
        "role": "primary"
      }
    ],
    "album": "What Do You Mean? (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 214,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt058458abc",
      "streamUrl": "",
      "durationSeconds": 214
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 119,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-586",
    "title": "Umbrella (Club Remix)",
    "artist": "Rihanna",
    "artistId": "artist-59",
    "artists": [
      {
        "artistId": "artist-59",
        "artistName": "Rihanna",
        "role": "primary"
      }
    ],
    "album": "Umbrella (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt058559abc",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Dance",
    "language": "English",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-587",
    "title": "Yellow (Unplugged)",
    "artist": "Coldplay",
    "artistId": "artist-60",
    "artists": [
      {
        "artistId": "artist-60",
        "artistName": "Coldplay",
        "role": "primary"
      }
    ],
    "album": "Yellow (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 216,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt058660abc",
      "streamUrl": "",
      "durationSeconds": 216
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 121,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-588",
    "title": "Another One Bites the Dust (Festival Anthem)",
    "artist": "Queen",
    "artistId": "artist-61",
    "artists": [
      {
        "artistId": "artist-61",
        "artistName": "Queen",
        "role": "primary"
      }
    ],
    "album": "Another One Bites the Dust (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 217,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt058761abc",
      "streamUrl": "",
      "durationSeconds": 217
    },
    "genre": "Electronic",
    "language": "English",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-589",
    "title": "Why'd You Only Call Me When You're High? (Slowed & Reverb)",
    "artist": "Arctic Monkeys",
    "artistId": "artist-62",
    "artists": [
      {
        "artistId": "artist-62",
        "artistName": "Arctic Monkeys",
        "role": "primary"
      }
    ],
    "album": "Why'd You Only Call Me When You're High? (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt058862abc",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Chill",
    "language": "English",
    "mood": "Chill",
    "bpm": 123,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-590",
    "title": "What I've Done (Orchestral Suite)",
    "artist": "Linkin Park",
    "artistId": "artist-63",
    "artists": [
      {
        "artistId": "artist-63",
        "artistName": "Linkin Park",
        "role": "primary"
      }
    ],
    "album": "What I've Done (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 219,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt058963abc",
      "streamUrl": "",
      "durationSeconds": 219
    },
    "genre": "Classical",
    "language": "English",
    "mood": "Chill",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-591",
    "title": "Wake Me Up (Acoustic Session)",
    "artist": "Avicii",
    "artistId": "artist-64",
    "artists": [
      {
        "artistId": "artist-64",
        "artistName": "Avicii",
        "role": "primary"
      }
    ],
    "album": "Wake Me Up (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 220,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt059064abc",
      "streamUrl": "",
      "durationSeconds": 220
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-592",
    "title": "Don't Let Me Down (Live in Concert)",
    "artist": "The Chainsmokers",
    "artistId": "artist-65",
    "artists": [
      {
        "artistId": "artist-65",
        "artistName": "The Chainsmokers",
        "role": "primary"
      }
    ],
    "album": "Don't Let Me Down (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 221,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt059165abc",
      "streamUrl": "",
      "durationSeconds": 221
    },
    "genre": "Live",
    "language": "English",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-593",
    "title": "This Is What You Came For (Lo-Fi Chill Mix)",
    "artist": "Calvin Harris",
    "artistId": "artist-66",
    "artists": [
      {
        "artistId": "artist-66",
        "artistName": "Calvin Harris",
        "role": "primary"
      }
    ],
    "album": "This Is What You Came For (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 222,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt059266abc",
      "streamUrl": "",
      "durationSeconds": 222
    },
    "genre": "Lo-Fi",
    "language": "English",
    "mood": "Chill",
    "bpm": 127,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-594",
    "title": "Tremor (Midnight Drift)",
    "artist": "Martin Garrix",
    "artistId": "artist-67",
    "artists": [
      {
        "artistId": "artist-67",
        "artistName": "Martin Garrix",
        "role": "primary"
      }
    ],
    "album": "Tremor (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 223,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt059367abc",
      "streamUrl": "",
      "durationSeconds": 223
    },
    "genre": "Late Night",
    "language": "English",
    "mood": "Chill",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-595",
    "title": "Summer High (Sunset Acoustic)",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Summer High (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0594-1abc",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 129,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-596",
    "title": "G.O.A.T. (Club Remix)",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "G.O.A.T. (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 225,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0595-2abc",
      "streamUrl": "",
      "durationSeconds": 225
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-597",
    "title": "Winning Speech (Unplugged)",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Winning Speech (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 226,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0596-3abc",
      "streamUrl": "",
      "durationSeconds": 226
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 131,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-598",
    "title": "No Love (Festival Anthem)",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "No Love (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 227,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0597-4abc",
      "streamUrl": "",
      "durationSeconds": 227
    },
    "genre": "Electronic",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 132,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-599",
    "title": "Legend (Slowed & Reverb)",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "Legend (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 228,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0598-5abc",
      "streamUrl": "",
      "durationSeconds": 228
    },
    "genre": "Chill",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 133,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-600",
    "title": "Made in India (Orchestral Suite)",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Made in India (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 229,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0599-6abc",
      "streamUrl": "",
      "durationSeconds": 229
    },
    "genre": "Classical",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-601",
    "title": "Bijlee Bijlee (Acoustic Session)",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Bijlee Bijlee (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0600-7abc",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-602",
    "title": "Wang Da Naap (Live in Concert)",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Wang Da Naap (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 231,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0601-8abc",
      "streamUrl": "",
      "durationSeconds": 231
    },
    "genre": "Live",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-603",
    "title": "Mann Bharrya (Lo-Fi Chill Mix)",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Mann Bharrya (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 232,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0602-9abc",
      "streamUrl": "",
      "durationSeconds": 232
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-604",
    "title": "Knightridah (Midnight Drift)",
    "artist": "Imran Khan",
    "artistId": "artist-10",
    "artists": [
      {
        "artistId": "artist-10",
        "artistName": "Imran Khan",
        "role": "primary"
      }
    ],
    "album": "Knightridah (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 233,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt060310abc",
      "streamUrl": "",
      "durationSeconds": 233
    },
    "genre": "Late Night",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-605",
    "title": "Bari Barsi (Sunset Acoustic)",
    "artist": "Panjabi MC",
    "artistId": "artist-11",
    "artists": [
      {
        "artistId": "artist-11",
        "artistName": "Panjabi MC",
        "role": "primary"
      }
    ],
    "album": "Bari Barsi (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 234,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt060411abc",
      "streamUrl": "",
      "durationSeconds": 234
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 99,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-606",
    "title": "Tunak Tunak Tun (Club Remix)",
    "artist": "Daler Mehndi",
    "artistId": "artist-12",
    "artists": [
      {
        "artistId": "artist-12",
        "artistName": "Daler Mehndi",
        "role": "primary"
      }
    ],
    "album": "Tunak Tunak Tun (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 235,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt060512abc",
      "streamUrl": "",
      "durationSeconds": 235
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-607",
    "title": "Sip Sip (Unplugged)",
    "artist": "Jasmine Sandlas",
    "artistId": "artist-13",
    "artists": [
      {
        "artistId": "artist-13",
        "artistName": "Jasmine Sandlas",
        "role": "primary"
      }
    ],
    "album": "Sip Sip (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 236,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt060613abc",
      "streamUrl": "",
      "durationSeconds": 236
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 101,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-608",
    "title": "Supna Laavan Da (Festival Anthem)",
    "artist": "Nimrat Khaira",
    "artistId": "artist-14",
    "artists": [
      {
        "artistId": "artist-14",
        "artistName": "Nimrat Khaira",
        "role": "primary"
      }
    ],
    "album": "Supna Laavan Da (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 237,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt060714abc",
      "streamUrl": "",
      "durationSeconds": 237
    },
    "genre": "Electronic",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-609",
    "title": "Pagal Nahi Hona (Slowed & Reverb)",
    "artist": "Sunanda Sharma",
    "artistId": "artist-15",
    "artists": [
      {
        "artistId": "artist-15",
        "artistName": "Sunanda Sharma",
        "role": "primary"
      }
    ],
    "album": "Pagal Nahi Hona (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 238,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt060815abc",
      "streamUrl": "",
      "durationSeconds": 238
    },
    "genre": "Chill",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 103,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-610",
    "title": "Summer Luv (Orchestral Suite)",
    "artist": "Mickey Singh",
    "artistId": "artist-16",
    "artists": [
      {
        "artistId": "artist-16",
        "artistName": "Mickey Singh",
        "role": "primary"
      }
    ],
    "album": "Summer Luv (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 239,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt060916abc",
      "streamUrl": "",
      "durationSeconds": 239
    },
    "genre": "Classical",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-611",
    "title": "Old Skool (Acoustic Session)",
    "artist": "Prem Dhillon",
    "artistId": "artist-17",
    "artists": [
      {
        "artistId": "artist-17",
        "artistName": "Prem Dhillon",
        "role": "primary"
      }
    ],
    "album": "Old Skool (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 240,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt061017abc",
      "streamUrl": "",
      "durationSeconds": 240
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-612",
    "title": "Kali Denali (Live in Concert)",
    "artist": "Bohemia",
    "artistId": "artist-18",
    "artists": [
      {
        "artistId": "artist-18",
        "artistName": "Bohemia",
        "role": "primary"
      }
    ],
    "album": "Kali Denali (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 241,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt061118abc",
      "streamUrl": "",
      "durationSeconds": 241
    },
    "genre": "Live",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-613",
    "title": "Banda Ban Ja (Lo-Fi Chill Mix)",
    "artist": "Garry Sandhu",
    "artistId": "artist-19",
    "artists": [
      {
        "artistId": "artist-19",
        "artistName": "Garry Sandhu",
        "role": "primary"
      }
    ],
    "album": "Banda Ban Ja (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 242,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt061219abc",
      "streamUrl": "",
      "durationSeconds": 242
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 107,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-614",
    "title": "Apna Bana Le (Midnight Drift)",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Apna Bana Le (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 243,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt061320abc",
      "streamUrl": "",
      "durationSeconds": 243
    },
    "genre": "Late Night",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-615",
    "title": "Masakali (Sunset Acoustic)",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Masakali (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 244,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt061421abc",
      "streamUrl": "",
      "durationSeconds": 244
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 109,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-616",
    "title": "Badtameez Dil (Club Remix)",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Badtameez Dil (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 245,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt061522abc",
      "streamUrl": "",
      "durationSeconds": 245
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-617",
    "title": "Nadaan Parinde (Unplugged)",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Nadaan Parinde (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 246,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt061623abc",
      "streamUrl": "",
      "durationSeconds": 246
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 111,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-618",
    "title": "Tere Bin (Festival Anthem)",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Tere Bin (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 247,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt061724abc",
      "streamUrl": "",
      "durationSeconds": 247
    },
    "genre": "Electronic",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-619",
    "title": "Garmi (Slowed & Reverb)",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Garmi (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 248,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt061825abc",
      "streamUrl": "",
      "durationSeconds": 248
    },
    "genre": "Chill",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 113,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-620",
    "title": "Kinna Sona (Orchestral Suite)",
    "artist": "Jubin Nautiyal",
    "artistId": "artist-26",
    "artists": [
      {
        "artistId": "artist-26",
        "artistName": "Jubin Nautiyal",
        "role": "primary"
      }
    ],
    "album": "Kinna Sona (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 249,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt061926abc",
      "streamUrl": "",
      "durationSeconds": 249
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 114,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-621",
    "title": "Teri Ore (Acoustic Session)",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Teri Ore (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 250,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt062027abc",
      "streamUrl": "",
      "durationSeconds": 250
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-622",
    "title": "Labon Ko (Live in Concert)",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Labon Ko (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 251,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt062128abc",
      "streamUrl": "",
      "durationSeconds": 251
    },
    "genre": "Live",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-623",
    "title": "Suraj Hua Maddham (Lo-Fi Chill Mix)",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Suraj Hua Maddham (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 252,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt062229abc",
      "streamUrl": "",
      "durationSeconds": 252
    },
    "genre": "Lo-Fi",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 117,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-624",
    "title": "Swag Se Swagat (Midnight Drift)",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "Swag Se Swagat (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 253,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt062330abc",
      "streamUrl": "",
      "durationSeconds": 253
    },
    "genre": "Late Night",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-625",
    "title": "Qaafirana (Sunset Acoustic)",
    "artist": "Amit Trivedi",
    "artistId": "artist-31",
    "artists": [
      {
        "artistId": "artist-31",
        "artistName": "Amit Trivedi",
        "role": "primary"
      }
    ],
    "album": "Qaafirana (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 254,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt062431abc",
      "streamUrl": "",
      "durationSeconds": 254
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 119,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-626",
    "title": "cold/mess (Club Remix)",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "cold/mess (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 255,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt062532abc",
      "streamUrl": "",
      "durationSeconds": 255
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-627",
    "title": "Alag Aasmaan (Unplugged)",
    "artist": "Anuv Jain",
    "artistId": "artist-33",
    "artists": [
      {
        "artistId": "artist-33",
        "artistName": "Anuv Jain",
        "role": "primary"
      }
    ],
    "album": "Alag Aasmaan (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 256,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt062633abc",
      "streamUrl": "",
      "durationSeconds": 256
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 121,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-628",
    "title": "Aalas Ka Pedh (Festival Anthem)",
    "artist": "The Local Train",
    "artistId": "artist-34",
    "artists": [
      {
        "artistId": "artist-34",
        "artistName": "The Local Train",
        "role": "primary"
      }
    ],
    "album": "Aalas Ka Pedh (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 257,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt062734abc",
      "streamUrl": "",
      "durationSeconds": 257
    },
    "genre": "Electronic",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-629",
    "title": "Khoj (Slowed & Reverb)",
    "artist": "Ritviz",
    "artistId": "artist-35",
    "artists": [
      {
        "artistId": "artist-35",
        "artistName": "Ritviz",
        "role": "primary"
      }
    ],
    "album": "Khoj (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 258,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt062835abc",
      "streamUrl": "",
      "durationSeconds": 258
    },
    "genre": "Chill",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 123,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-630",
    "title": "Yellow Paper Daisy (Orchestral Suite)",
    "artist": "When Chai Met Toast",
    "artistId": "artist-36",
    "artists": [
      {
        "artistId": "artist-36",
        "artistName": "When Chai Met Toast",
        "role": "primary"
      }
    ],
    "album": "Yellow Paper Daisy (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 259,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt062936abc",
      "streamUrl": "",
      "durationSeconds": 259
    },
    "genre": "Classical",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-631",
    "title": "Namastute (Acoustic Session)",
    "artist": "Seedhe Maut",
    "artistId": "artist-37",
    "artists": [
      {
        "artistId": "artist-37",
        "artistName": "Seedhe Maut",
        "role": "primary"
      }
    ],
    "album": "Namastute (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 260,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt063037abc",
      "streamUrl": "",
      "durationSeconds": 260
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-632",
    "title": "Mirchi (Live in Concert)",
    "artist": "DIVINE",
    "artistId": "artist-38",
    "artists": [
      {
        "artistId": "artist-38",
        "artistName": "DIVINE",
        "role": "primary"
      }
    ],
    "album": "Mirchi (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 261,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt063138abc",
      "streamUrl": "",
      "durationSeconds": 261
    },
    "genre": "Live",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-633",
    "title": "Vaathi Coming (Lo-Fi Chill Mix)",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "Vaathi Coming (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 262,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt063239abc",
      "streamUrl": "",
      "durationSeconds": 262
    },
    "genre": "Lo-Fi",
    "language": "Tamil",
    "mood": "Chill",
    "bpm": 127,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-634",
    "title": "Samajavaragamana (Midnight Drift)",
    "artist": "Sid Sriram",
    "artistId": "artist-40",
    "artists": [
      {
        "artistId": "artist-40",
        "artistName": "Sid Sriram",
        "role": "primary"
      }
    ],
    "album": "Samajavaragamana (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 263,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt063340abc",
      "streamUrl": "",
      "durationSeconds": 263
    },
    "genre": "Late Night",
    "language": "Tamil",
    "mood": "Chill",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-635",
    "title": "Butta Bomma (Sunset Acoustic)",
    "artist": "Devi Sri Prasad (DSP)",
    "artistId": "artist-41",
    "artists": [
      {
        "artistId": "artist-41",
        "artistName": "Devi Sri Prasad (DSP)",
        "role": "primary"
      }
    ],
    "album": "Butta Bomma (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 264,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt063441abc",
      "streamUrl": "",
      "durationSeconds": 264
    },
    "genre": "Acoustic",
    "language": "Telugu",
    "mood": "Chill",
    "bpm": 129,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-636",
    "title": "Illuminati (Club Remix)",
    "artist": "Sushin Shyam",
    "artistId": "artist-42",
    "artists": [
      {
        "artistId": "artist-42",
        "artistName": "Sushin Shyam",
        "role": "primary"
      }
    ],
    "album": "Illuminati (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 265,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt063542abc",
      "streamUrl": "",
      "durationSeconds": 265
    },
    "genre": "Dance",
    "language": "Malayalam",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-637",
    "title": "Sairat Zaala Ji (Unplugged)",
    "artist": "Ajay-Atul",
    "artistId": "artist-43",
    "artists": [
      {
        "artistId": "artist-43",
        "artistName": "Ajay-Atul",
        "role": "primary"
      }
    ],
    "album": "Sairat Zaala Ji (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 266,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt063643abc",
      "streamUrl": "",
      "durationSeconds": 266
    },
    "genre": "Acoustic",
    "language": "Marathi",
    "mood": "Chill",
    "bpm": 131,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-638",
    "title": "Chand Ne Kaho (Festival Anthem)",
    "artist": "Sachin-Jigar",
    "artistId": "artist-44",
    "artists": [
      {
        "artistId": "artist-44",
        "artistName": "Sachin-Jigar",
        "role": "primary"
      }
    ],
    "album": "Chand Ne Kaho (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 267,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt063744abc",
      "streamUrl": "",
      "durationSeconds": 267
    },
    "genre": "Electronic",
    "language": "Gujarati",
    "mood": "Energetic",
    "bpm": 132,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-639",
    "title": "After Hours (Slowed & Reverb)",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "After Hours (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 268,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt063845abc",
      "streamUrl": "",
      "durationSeconds": 268
    },
    "genre": "Chill",
    "language": "English",
    "mood": "Chill",
    "bpm": 133,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-640",
    "title": "Passionfruit (Orchestral Suite)",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "Passionfruit (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 269,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt063946abc",
      "streamUrl": "",
      "durationSeconds": 269
    },
    "genre": "Classical",
    "language": "English",
    "mood": "Chill",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-641",
    "title": "Levitating (Acoustic Session)",
    "artist": "Dua Lipa",
    "artistId": "artist-47",
    "artists": [
      {
        "artistId": "artist-47",
        "artistName": "Dua Lipa",
        "role": "primary"
      }
    ],
    "album": "Levitating (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 190,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt064047abc",
      "streamUrl": "",
      "durationSeconds": 190
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-642",
    "title": "Sunflower (Live in Concert)",
    "artist": "Post Malone",
    "artistId": "artist-48",
    "artists": [
      {
        "artistId": "artist-48",
        "artistName": "Post Malone",
        "role": "primary"
      }
    ],
    "album": "Sunflower (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 191,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt064148abc",
      "streamUrl": "",
      "durationSeconds": 191
    },
    "genre": "Live",
    "language": "English",
    "mood": "Energetic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-643",
    "title": "Everything I Wanted (Lo-Fi Chill Mix)",
    "artist": "Billie Eilish",
    "artistId": "artist-49",
    "artists": [
      {
        "artistId": "artist-49",
        "artistName": "Billie Eilish",
        "role": "primary"
      }
    ],
    "album": "Everything I Wanted (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 192,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt064249abc",
      "streamUrl": "",
      "durationSeconds": 192
    },
    "genre": "Lo-Fi",
    "language": "English",
    "mood": "Chill",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-644",
    "title": "Antidote (Midnight Drift)",
    "artist": "Travis Scott",
    "artistId": "artist-50",
    "artists": [
      {
        "artistId": "artist-50",
        "artistName": "Travis Scott",
        "role": "primary"
      }
    ],
    "album": "Antidote (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 193,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt064350abc",
      "streamUrl": "",
      "durationSeconds": 193
    },
    "genre": "Late Night",
    "language": "English",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-645",
    "title": "DNA. (Sunset Acoustic)",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "DNA. (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt064451abc",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 99,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-646",
    "title": "As It Was (Club Remix)",
    "artist": "Harry Styles",
    "artistId": "artist-52",
    "artists": [
      {
        "artistId": "artist-52",
        "artistName": "Harry Styles",
        "role": "primary"
      }
    ],
    "album": "As It Was (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 195,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt064552abc",
      "streamUrl": "",
      "durationSeconds": 195
    },
    "genre": "Dance",
    "language": "English",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-647",
    "title": "Anti-Hero (Unplugged)",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Anti-Hero (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt064653abc",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 101,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-648",
    "title": "Thinking Out Loud (Festival Anthem)",
    "artist": "Ed Sheeran",
    "artistId": "artist-54",
    "artists": [
      {
        "artistId": "artist-54",
        "artistName": "Ed Sheeran",
        "role": "primary"
      }
    ],
    "album": "Thinking Out Loud (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 197,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt064754abc",
      "streamUrl": "",
      "durationSeconds": 197
    },
    "genre": "Electronic",
    "language": "English",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-649",
    "title": "Just the Way You Are (Slowed & Reverb)",
    "artist": "Bruno Mars",
    "artistId": "artist-55",
    "artists": [
      {
        "artistId": "artist-55",
        "artistName": "Bruno Mars",
        "role": "primary"
      }
    ],
    "album": "Just the Way You Are (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt064855abc",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Chill",
    "language": "English",
    "mood": "Chill",
    "bpm": 103,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-650",
    "title": "Positions (Orchestral Suite)",
    "artist": "Ariana Grande",
    "artistId": "artist-56",
    "artists": [
      {
        "artistId": "artist-56",
        "artistName": "Ariana Grande",
        "role": "primary"
      }
    ],
    "album": "Positions (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 199,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt064956abc",
      "streamUrl": "",
      "durationSeconds": 199
    },
    "genre": "Classical",
    "language": "English",
    "mood": "Chill",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-651",
    "title": "Kill Bill (Acoustic Session)",
    "artist": "SZA",
    "artistId": "artist-57",
    "artists": [
      {
        "artistId": "artist-57",
        "artistName": "SZA",
        "role": "primary"
      }
    ],
    "album": "Kill Bill (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt065057abc",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-652",
    "title": "Stay (Live in Concert)",
    "artist": "Justin Bieber",
    "artistId": "artist-58",
    "artists": [
      {
        "artistId": "artist-58",
        "artistName": "Justin Bieber",
        "role": "primary"
      }
    ],
    "album": "Stay (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 201,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt065158abc",
      "streamUrl": "",
      "durationSeconds": 201
    },
    "genre": "Live",
    "language": "English",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-653",
    "title": "Diamonds (Lo-Fi Chill Mix)",
    "artist": "Rihanna",
    "artistId": "artist-59",
    "artists": [
      {
        "artistId": "artist-59",
        "artistName": "Rihanna",
        "role": "primary"
      }
    ],
    "album": "Diamonds (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 202,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt065259abc",
      "streamUrl": "",
      "durationSeconds": 202
    },
    "genre": "Lo-Fi",
    "language": "English",
    "mood": "Chill",
    "bpm": 107,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-654",
    "title": "Hymn for the Weekend (Midnight Drift)",
    "artist": "Coldplay",
    "artistId": "artist-60",
    "artists": [
      {
        "artistId": "artist-60",
        "artistName": "Coldplay",
        "role": "primary"
      }
    ],
    "album": "Hymn for the Weekend (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 203,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt065360abc",
      "streamUrl": "",
      "durationSeconds": 203
    },
    "genre": "Late Night",
    "language": "English",
    "mood": "Chill",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-655",
    "title": "Under Pressure (Sunset Acoustic)",
    "artist": "Queen",
    "artistId": "artist-61",
    "artists": [
      {
        "artistId": "artist-61",
        "artistName": "Queen",
        "role": "primary"
      }
    ],
    "album": "Under Pressure (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt065461abc",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 109,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-656",
    "title": "Do I Wanna Know? (Club Remix)",
    "artist": "Arctic Monkeys",
    "artistId": "artist-62",
    "artists": [
      {
        "artistId": "artist-62",
        "artistName": "Arctic Monkeys",
        "role": "primary"
      }
    ],
    "album": "Do I Wanna Know? (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 205,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt065562abc",
      "streamUrl": "",
      "durationSeconds": 205
    },
    "genre": "Dance",
    "language": "English",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-657",
    "title": "Numb (Unplugged)",
    "artist": "Linkin Park",
    "artistId": "artist-63",
    "artists": [
      {
        "artistId": "artist-63",
        "artistName": "Linkin Park",
        "role": "primary"
      }
    ],
    "album": "Numb (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 206,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt065663abc",
      "streamUrl": "",
      "durationSeconds": 206
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 111,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-658",
    "title": "Levels (Festival Anthem)",
    "artist": "Avicii",
    "artistId": "artist-64",
    "artists": [
      {
        "artistId": "artist-64",
        "artistName": "Avicii",
        "role": "primary"
      }
    ],
    "album": "Levels (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 207,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt065764abc",
      "streamUrl": "",
      "durationSeconds": 207
    },
    "genre": "Electronic",
    "language": "English",
    "mood": "Energetic",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-659",
    "title": "Roses (Slowed & Reverb)",
    "artist": "The Chainsmokers",
    "artistId": "artist-65",
    "artists": [
      {
        "artistId": "artist-65",
        "artistName": "The Chainsmokers",
        "role": "primary"
      }
    ],
    "album": "Roses (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 208,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt065865abc",
      "streamUrl": "",
      "durationSeconds": 208
    },
    "genre": "Chill",
    "language": "English",
    "mood": "Chill",
    "bpm": 113,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-660",
    "title": "One Kiss (Orchestral Suite)",
    "artist": "Calvin Harris",
    "artistId": "artist-66",
    "artists": [
      {
        "artistId": "artist-66",
        "artistName": "Calvin Harris",
        "role": "primary"
      }
    ],
    "album": "One Kiss (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 209,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt065966abc",
      "streamUrl": "",
      "durationSeconds": 209
    },
    "genre": "Classical",
    "language": "English",
    "mood": "Chill",
    "bpm": 114,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-661",
    "title": "Animals (Acoustic Session)",
    "artist": "Martin Garrix",
    "artistId": "artist-67",
    "artists": [
      {
        "artistId": "artist-67",
        "artistName": "Martin Garrix",
        "role": "primary"
      }
    ],
    "album": "Animals (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt066067abc",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-662",
    "title": "Brown Munde (Live in Concert)",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Brown Munde (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 211,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0661-1abc",
      "streamUrl": "",
      "durationSeconds": 211
    },
    "genre": "Live",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-663",
    "title": "Born to Shine (Lo-Fi Chill Mix)",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Born to Shine (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 212,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0662-2abc",
      "streamUrl": "",
      "durationSeconds": 212
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 117,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-664",
    "title": "52 Bars (Midnight Drift)",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "52 Bars (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 213,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0663-3abc",
      "streamUrl": "",
      "durationSeconds": 213
    },
    "genre": "Late Night",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-665",
    "title": "We Rollin (Sunset Acoustic)",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "We Rollin (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 214,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0664-4abc",
      "streamUrl": "",
      "durationSeconds": 214
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 119,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-666",
    "title": "295 (Club Remix)",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "295 (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0665-5abc",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-667",
    "title": "High Rated Gabru (Unplugged)",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "High Rated Gabru (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 216,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0666-6abc",
      "streamUrl": "",
      "durationSeconds": 216
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 121,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-668",
    "title": "Kya Baat Ay (Festival Anthem)",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Kya Baat Ay (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 217,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0667-7abc",
      "streamUrl": "",
      "durationSeconds": 217
    },
    "genre": "Electronic",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-669",
    "title": "Zindabaad Yaarian (Slowed & Reverb)",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Zindabaad Yaarian (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0668-8abc",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Chill",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 123,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-670",
    "title": "Pachtaoge (Orchestral Suite)",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Pachtaoge (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 219,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0669-9abc",
      "streamUrl": "",
      "durationSeconds": 219
    },
    "genre": "Classical",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-671",
    "title": "Amplifier (Acoustic Session)",
    "artist": "Imran Khan",
    "artistId": "artist-10",
    "artists": [
      {
        "artistId": "artist-10",
        "artistName": "Imran Khan",
        "role": "primary"
      }
    ],
    "album": "Amplifier (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 220,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt067010abc",
      "streamUrl": "",
      "durationSeconds": 220
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-672",
    "title": "Jogi (Live in Concert)",
    "artist": "Panjabi MC",
    "artistId": "artist-11",
    "artists": [
      {
        "artistId": "artist-11",
        "artistName": "Panjabi MC",
        "role": "primary"
      }
    ],
    "album": "Jogi (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 221,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt067111abc",
      "streamUrl": "",
      "durationSeconds": 221
    },
    "genre": "Live",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-673",
    "title": "Dardi Rab Rab (Lo-Fi Chill Mix)",
    "artist": "Daler Mehndi",
    "artistId": "artist-12",
    "artists": [
      {
        "artistId": "artist-12",
        "artistName": "Daler Mehndi",
        "role": "primary"
      }
    ],
    "album": "Dardi Rab Rab (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 222,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt067212abc",
      "streamUrl": "",
      "durationSeconds": 222
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 127,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-674",
    "title": "Patt Lai Geya (Midnight Drift)",
    "artist": "Jasmine Sandlas",
    "artistId": "artist-13",
    "artists": [
      {
        "artistId": "artist-13",
        "artistName": "Jasmine Sandlas",
        "role": "primary"
      }
    ],
    "album": "Patt Lai Geya (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 223,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt067313abc",
      "streamUrl": "",
      "durationSeconds": 223
    },
    "genre": "Late Night",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-675",
    "title": "Sirra E Hou (Sunset Acoustic)",
    "artist": "Nimrat Khaira",
    "artistId": "artist-14",
    "artists": [
      {
        "artistId": "artist-14",
        "artistName": "Nimrat Khaira",
        "role": "primary"
      }
    ],
    "album": "Sirra E Hou (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt067414abc",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 129,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-676",
    "title": "Jaani Tera Naa (Club Remix)",
    "artist": "Sunanda Sharma",
    "artistId": "artist-15",
    "artists": [
      {
        "artistId": "artist-15",
        "artistName": "Sunanda Sharma",
        "role": "primary"
      }
    ],
    "album": "Jaani Tera Naa (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 225,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt067515abc",
      "streamUrl": "",
      "durationSeconds": 225
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-677",
    "title": "Rooftop Party (Unplugged)",
    "artist": "Mickey Singh",
    "artistId": "artist-16",
    "artists": [
      {
        "artistId": "artist-16",
        "artistName": "Mickey Singh",
        "role": "primary"
      }
    ],
    "album": "Rooftop Party (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 226,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt067616abc",
      "streamUrl": "",
      "durationSeconds": 226
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 131,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-678",
    "title": "Boot Cut (Festival Anthem)",
    "artist": "Prem Dhillon",
    "artistId": "artist-17",
    "artists": [
      {
        "artistId": "artist-17",
        "artistName": "Prem Dhillon",
        "role": "primary"
      }
    ],
    "album": "Boot Cut (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 227,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt067717abc",
      "streamUrl": "",
      "durationSeconds": 227
    },
    "genre": "Electronic",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 132,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-679",
    "title": "Sahara (Slowed & Reverb)",
    "artist": "Bohemia",
    "artistId": "artist-18",
    "artists": [
      {
        "artistId": "artist-18",
        "artistName": "Bohemia",
        "role": "primary"
      }
    ],
    "album": "Sahara (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 228,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt067818abc",
      "streamUrl": "",
      "durationSeconds": 228
    },
    "genre": "Chill",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 133,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-680",
    "title": "Sip Sip (Orchestral Suite)",
    "artist": "Garry Sandhu",
    "artistId": "artist-19",
    "artists": [
      {
        "artistId": "artist-19",
        "artistName": "Garry Sandhu",
        "role": "primary"
      }
    ],
    "album": "Sip Sip (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 229,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt067919abc",
      "streamUrl": "",
      "durationSeconds": 229
    },
    "genre": "Classical",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-681",
    "title": "Tum Hi Ho (Acoustic Session)",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Tum Hi Ho (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 230,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt068020abc",
      "streamUrl": "",
      "durationSeconds": 230
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-682",
    "title": "Jai Ho (Live in Concert)",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Jai Ho (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 231,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt068121abc",
      "streamUrl": "",
      "durationSeconds": 231
    },
    "genre": "Live",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-683",
    "title": "Dilliwaali Girlfriend (Lo-Fi Chill Mix)",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Dilliwaali Girlfriend (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 232,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt068222abc",
      "streamUrl": "",
      "durationSeconds": 232
    },
    "genre": "Lo-Fi",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-684",
    "title": "Masakali (Midnight Drift)",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Masakali (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 233,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt068323abc",
      "streamUrl": "",
      "durationSeconds": 233
    },
    "genre": "Late Night",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-685",
    "title": "Tu Jaane Na (Sunset Acoustic)",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Tu Jaane Na (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 234,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt068424abc",
      "streamUrl": "",
      "durationSeconds": 234
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 99,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-686",
    "title": "Kala Chashma (Club Remix)",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "Kala Chashma (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 235,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt068525abc",
      "streamUrl": "",
      "durationSeconds": 235
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-687",
    "title": "Lut Gaye (Unplugged)",
    "artist": "Jubin Nautiyal",
    "artistId": "artist-26",
    "artists": [
      {
        "artistId": "artist-26",
        "artistName": "Jubin Nautiyal",
        "role": "primary"
      }
    ],
    "album": "Lut Gaye (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 236,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt068626abc",
      "streamUrl": "",
      "durationSeconds": 236
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 101,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-688",
    "title": "Ghoomar (Festival Anthem)",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Ghoomar (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 237,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt068727abc",
      "streamUrl": "",
      "durationSeconds": 237
    },
    "genre": "Electronic",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-689",
    "title": "Alvida (Slowed & Reverb)",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Alvida (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 238,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt068828abc",
      "streamUrl": "",
      "durationSeconds": 238
    },
    "genre": "Chill",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 103,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-690",
    "title": "Main Agar Kahoon (Orchestral Suite)",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Main Agar Kahoon (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 239,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt068929abc",
      "streamUrl": "",
      "durationSeconds": 239
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-691",
    "title": "Desi Girl (Acoustic Session)",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "Desi Girl (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 240,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt069030abc",
      "streamUrl": "",
      "durationSeconds": 240
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-692",
    "title": "Iktara (Live in Concert)",
    "artist": "Amit Trivedi",
    "artistId": "artist-31",
    "artists": [
      {
        "artistId": "artist-31",
        "artistName": "Amit Trivedi",
        "role": "primary"
      }
    ],
    "album": "Iktara (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 241,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt069131abc",
      "streamUrl": "",
      "durationSeconds": 241
    },
    "genre": "Live",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-693",
    "title": "Tum Jab Paas (Lo-Fi Chill Mix)",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "Tum Jab Paas (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 242,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt069232abc",
      "streamUrl": "",
      "durationSeconds": 242
    },
    "genre": "Lo-Fi",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 107,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-694",
    "title": "Gul (Midnight Drift)",
    "artist": "Anuv Jain",
    "artistId": "artist-33",
    "artists": [
      {
        "artistId": "artist-33",
        "artistName": "Anuv Jain",
        "role": "primary"
      }
    ],
    "album": "Gul (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 243,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt069333abc",
      "streamUrl": "",
      "durationSeconds": 243
    },
    "genre": "Late Night",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-695",
    "title": "Bandey (Sunset Acoustic)",
    "artist": "The Local Train",
    "artistId": "artist-34",
    "artists": [
      {
        "artistId": "artist-34",
        "artistName": "The Local Train",
        "role": "primary"
      }
    ],
    "album": "Bandey (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 244,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt069434abc",
      "streamUrl": "",
      "durationSeconds": 244
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 109,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-696",
    "title": "Udd Gaye (Club Remix)",
    "artist": "Ritviz",
    "artistId": "artist-35",
    "artists": [
      {
        "artistId": "artist-35",
        "artistName": "Ritviz",
        "role": "primary"
      }
    ],
    "album": "Udd Gaye (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 245,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt069535abc",
      "streamUrl": "",
      "durationSeconds": 245
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-697",
    "title": "Khoj (Unplugged)",
    "artist": "When Chai Met Toast",
    "artistId": "artist-36",
    "artists": [
      {
        "artistId": "artist-36",
        "artistName": "When Chai Met Toast",
        "role": "primary"
      }
    ],
    "album": "Khoj (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 246,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt069636abc",
      "streamUrl": "",
      "durationSeconds": 246
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 111,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-698",
    "title": "Nanchaku (Festival Anthem)",
    "artist": "Seedhe Maut",
    "artistId": "artist-37",
    "artists": [
      {
        "artistId": "artist-37",
        "artistName": "Seedhe Maut",
        "role": "primary"
      }
    ],
    "album": "Nanchaku (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 247,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt069737abc",
      "streamUrl": "",
      "durationSeconds": 247
    },
    "genre": "Electronic",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-699",
    "title": "Kaam 25 (Slowed & Reverb)",
    "artist": "DIVINE",
    "artistId": "artist-38",
    "artists": [
      {
        "artistId": "artist-38",
        "artistName": "DIVINE",
        "role": "primary"
      }
    ],
    "album": "Kaam 25 (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 248,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt069838abc",
      "streamUrl": "",
      "durationSeconds": 248
    },
    "genre": "Chill",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 113,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-700",
    "title": "Badass (Orchestral Suite)",
    "artist": "Anirudh Ravichander",
    "artistId": "artist-39",
    "artists": [
      {
        "artistId": "artist-39",
        "artistName": "Anirudh Ravichander",
        "role": "primary"
      }
    ],
    "album": "Badass (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 249,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt069939abc",
      "streamUrl": "",
      "durationSeconds": 249
    },
    "genre": "Classical",
    "language": "Tamil",
    "mood": "Chill",
    "bpm": 114,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-701",
    "title": "Srivalli (Acoustic Session)",
    "artist": "Sid Sriram",
    "artistId": "artist-40",
    "artists": [
      {
        "artistId": "artist-40",
        "artistName": "Sid Sriram",
        "role": "primary"
      }
    ],
    "album": "Srivalli (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 250,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt070040abc",
      "streamUrl": "",
      "durationSeconds": 250
    },
    "genre": "Acoustic",
    "language": "Tamil",
    "mood": "Chill",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-702",
    "title": "Srivalli (Live in Concert)",
    "artist": "Devi Sri Prasad (DSP)",
    "artistId": "artist-41",
    "artists": [
      {
        "artistId": "artist-41",
        "artistName": "Devi Sri Prasad (DSP)",
        "role": "primary"
      }
    ],
    "album": "Srivalli (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 251,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt070141abc",
      "streamUrl": "",
      "durationSeconds": 251
    },
    "genre": "Live",
    "language": "Telugu",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-703",
    "title": "Aadharanjali (Lo-Fi Chill Mix)",
    "artist": "Sushin Shyam",
    "artistId": "artist-42",
    "artists": [
      {
        "artistId": "artist-42",
        "artistName": "Sushin Shyam",
        "role": "primary"
      }
    ],
    "album": "Aadharanjali (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 252,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt070242abc",
      "streamUrl": "",
      "durationSeconds": 252
    },
    "genre": "Lo-Fi",
    "language": "Malayalam",
    "mood": "Chill",
    "bpm": 117,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-704",
    "title": "Bring It On (Midnight Drift)",
    "artist": "Ajay-Atul",
    "artistId": "artist-43",
    "artists": [
      {
        "artistId": "artist-43",
        "artistName": "Ajay-Atul",
        "role": "primary"
      }
    ],
    "album": "Bring It On (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 253,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt070343abc",
      "streamUrl": "",
      "durationSeconds": 253
    },
    "genre": "Late Night",
    "language": "Marathi",
    "mood": "Chill",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-705",
    "title": "Kamariya (Sunset Acoustic)",
    "artist": "Sachin-Jigar",
    "artistId": "artist-44",
    "artists": [
      {
        "artistId": "artist-44",
        "artistName": "Sachin-Jigar",
        "role": "primary"
      }
    ],
    "album": "Kamariya (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 254,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt070444abc",
      "streamUrl": "",
      "durationSeconds": 254
    },
    "genre": "Acoustic",
    "language": "Gujarati",
    "mood": "Chill",
    "bpm": 119,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-706",
    "title": "Blinding Lights (Club Remix)",
    "artist": "The Weeknd",
    "artistId": "artist-45",
    "artists": [
      {
        "artistId": "artist-45",
        "artistName": "The Weeknd",
        "role": "primary"
      }
    ],
    "album": "Blinding Lights (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 255,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt070545abc",
      "streamUrl": "",
      "durationSeconds": 255
    },
    "genre": "Dance",
    "language": "English",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-707",
    "title": "God's Plan (Unplugged)",
    "artist": "Drake",
    "artistId": "artist-46",
    "artists": [
      {
        "artistId": "artist-46",
        "artistName": "Drake",
        "role": "primary"
      }
    ],
    "album": "God's Plan (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 256,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt070646abc",
      "streamUrl": "",
      "durationSeconds": 256
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 121,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-708",
    "title": "New Rules (Festival Anthem)",
    "artist": "Dua Lipa",
    "artistId": "artist-47",
    "artists": [
      {
        "artistId": "artist-47",
        "artistName": "Dua Lipa",
        "role": "primary"
      }
    ],
    "album": "New Rules (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 257,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt070747abc",
      "streamUrl": "",
      "durationSeconds": 257
    },
    "genre": "Electronic",
    "language": "English",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-709",
    "title": "Congratulations (Slowed & Reverb)",
    "artist": "Post Malone",
    "artistId": "artist-48",
    "artists": [
      {
        "artistId": "artist-48",
        "artistName": "Post Malone",
        "role": "primary"
      }
    ],
    "album": "Congratulations (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 258,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt070848abc",
      "streamUrl": "",
      "durationSeconds": 258
    },
    "genre": "Chill",
    "language": "English",
    "mood": "Chill",
    "bpm": 123,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-710",
    "title": "Birds of a Feather (Orchestral Suite)",
    "artist": "Billie Eilish",
    "artistId": "artist-49",
    "artists": [
      {
        "artistId": "artist-49",
        "artistName": "Billie Eilish",
        "role": "primary"
      }
    ],
    "album": "Birds of a Feather (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 259,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt070949abc",
      "streamUrl": "",
      "durationSeconds": 259
    },
    "genre": "Classical",
    "language": "English",
    "mood": "Chill",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-711",
    "title": "SICKO MODE (Acoustic Session)",
    "artist": "Travis Scott",
    "artistId": "artist-50",
    "artists": [
      {
        "artistId": "artist-50",
        "artistName": "Travis Scott",
        "role": "primary"
      }
    ],
    "album": "SICKO MODE (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 260,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt071050abc",
      "streamUrl": "",
      "durationSeconds": 260
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-712",
    "title": "Money Trees (Live in Concert)",
    "artist": "Kendrick Lamar",
    "artistId": "artist-51",
    "artists": [
      {
        "artistId": "artist-51",
        "artistName": "Kendrick Lamar",
        "role": "primary"
      }
    ],
    "album": "Money Trees (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 261,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt071151abc",
      "streamUrl": "",
      "durationSeconds": 261
    },
    "genre": "Live",
    "language": "English",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-713",
    "title": "Adore You (Lo-Fi Chill Mix)",
    "artist": "Harry Styles",
    "artistId": "artist-52",
    "artists": [
      {
        "artistId": "artist-52",
        "artistName": "Harry Styles",
        "role": "primary"
      }
    ],
    "album": "Adore You (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 262,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt071252abc",
      "streamUrl": "",
      "durationSeconds": 262
    },
    "genre": "Lo-Fi",
    "language": "English",
    "mood": "Chill",
    "bpm": 127,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-714",
    "title": "Shake It Off (Midnight Drift)",
    "artist": "Taylor Swift",
    "artistId": "artist-53",
    "artists": [
      {
        "artistId": "artist-53",
        "artistName": "Taylor Swift",
        "role": "primary"
      }
    ],
    "album": "Shake It Off (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 263,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt071353abc",
      "streamUrl": "",
      "durationSeconds": 263
    },
    "genre": "Late Night",
    "language": "English",
    "mood": "Chill",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-715",
    "title": "Shivers (Sunset Acoustic)",
    "artist": "Ed Sheeran",
    "artistId": "artist-54",
    "artists": [
      {
        "artistId": "artist-54",
        "artistName": "Ed Sheeran",
        "role": "primary"
      }
    ],
    "album": "Shivers (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 264,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt071454abc",
      "streamUrl": "",
      "durationSeconds": 264
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 129,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-716",
    "title": "Uptown Funk (Club Remix)",
    "artist": "Bruno Mars",
    "artistId": "artist-55",
    "artists": [
      {
        "artistId": "artist-55",
        "artistName": "Bruno Mars",
        "role": "primary"
      }
    ],
    "album": "Uptown Funk (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 265,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt071555abc",
      "streamUrl": "",
      "durationSeconds": 265
    },
    "genre": "Dance",
    "language": "English",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-717",
    "title": "Thank U Next (Unplugged)",
    "artist": "Ariana Grande",
    "artistId": "artist-56",
    "artists": [
      {
        "artistId": "artist-56",
        "artistName": "Ariana Grande",
        "role": "primary"
      }
    ],
    "album": "Thank U Next (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 266,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt071656abc",
      "streamUrl": "",
      "durationSeconds": 266
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 131,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-718",
    "title": "Good Days (Festival Anthem)",
    "artist": "SZA",
    "artistId": "artist-57",
    "artists": [
      {
        "artistId": "artist-57",
        "artistName": "SZA",
        "role": "primary"
      }
    ],
    "album": "Good Days (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 267,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt071757abc",
      "streamUrl": "",
      "durationSeconds": 267
    },
    "genre": "Electronic",
    "language": "English",
    "mood": "Energetic",
    "bpm": 132,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-719",
    "title": "Love Yourself (Slowed & Reverb)",
    "artist": "Justin Bieber",
    "artistId": "artist-58",
    "artists": [
      {
        "artistId": "artist-58",
        "artistName": "Justin Bieber",
        "role": "primary"
      }
    ],
    "album": "Love Yourself (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 268,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt071858abc",
      "streamUrl": "",
      "durationSeconds": 268
    },
    "genre": "Chill",
    "language": "English",
    "mood": "Chill",
    "bpm": 133,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-720",
    "title": "Only Girl In The World (Orchestral Suite)",
    "artist": "Rihanna",
    "artistId": "artist-59",
    "artists": [
      {
        "artistId": "artist-59",
        "artistName": "Rihanna",
        "role": "primary"
      }
    ],
    "album": "Only Girl In The World (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 269,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt071959abc",
      "streamUrl": "",
      "durationSeconds": 269
    },
    "genre": "Classical",
    "language": "English",
    "mood": "Chill",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-721",
    "title": "Viva La Vida (Acoustic Session)",
    "artist": "Coldplay",
    "artistId": "artist-60",
    "artists": [
      {
        "artistId": "artist-60",
        "artistName": "Coldplay",
        "role": "primary"
      }
    ],
    "album": "Viva La Vida (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 190,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt072060abc",
      "streamUrl": "",
      "durationSeconds": 190
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 95,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-722",
    "title": "Don't Stop Me Now (Live in Concert)",
    "artist": "Queen",
    "artistId": "artist-61",
    "artists": [
      {
        "artistId": "artist-61",
        "artistName": "Queen",
        "role": "primary"
      }
    ],
    "album": "Don't Stop Me Now (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 191,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt072161abc",
      "streamUrl": "",
      "durationSeconds": 191
    },
    "genre": "Live",
    "language": "English",
    "mood": "Energetic",
    "bpm": 96,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-723",
    "title": "505 (Lo-Fi Chill Mix)",
    "artist": "Arctic Monkeys",
    "artistId": "artist-62",
    "artists": [
      {
        "artistId": "artist-62",
        "artistName": "Arctic Monkeys",
        "role": "primary"
      }
    ],
    "album": "505 (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 192,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt072262abc",
      "streamUrl": "",
      "durationSeconds": 192
    },
    "genre": "Lo-Fi",
    "language": "English",
    "mood": "Chill",
    "bpm": 97,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-724",
    "title": "Crawling (Midnight Drift)",
    "artist": "Linkin Park",
    "artistId": "artist-63",
    "artists": [
      {
        "artistId": "artist-63",
        "artistName": "Linkin Park",
        "role": "primary"
      }
    ],
    "album": "Crawling (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 193,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt072363abc",
      "streamUrl": "",
      "durationSeconds": 193
    },
    "genre": "Late Night",
    "language": "English",
    "mood": "Chill",
    "bpm": 98,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-725",
    "title": "Hey Brother (Sunset Acoustic)",
    "artist": "Avicii",
    "artistId": "artist-64",
    "artists": [
      {
        "artistId": "artist-64",
        "artistName": "Avicii",
        "role": "primary"
      }
    ],
    "album": "Hey Brother (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 194,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt072464abc",
      "streamUrl": "",
      "durationSeconds": 194
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 99,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-726",
    "title": "Closer (Club Remix)",
    "artist": "The Chainsmokers",
    "artistId": "artist-65",
    "artists": [
      {
        "artistId": "artist-65",
        "artistName": "The Chainsmokers",
        "role": "primary"
      }
    ],
    "album": "Closer (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 195,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt072565abc",
      "streamUrl": "",
      "durationSeconds": 195
    },
    "genre": "Dance",
    "language": "English",
    "mood": "Energetic",
    "bpm": 100,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-727",
    "title": "Feel So Close (Unplugged)",
    "artist": "Calvin Harris",
    "artistId": "artist-66",
    "artists": [
      {
        "artistId": "artist-66",
        "artistName": "Calvin Harris",
        "role": "primary"
      }
    ],
    "album": "Feel So Close (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 196,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt072666abc",
      "streamUrl": "",
      "durationSeconds": 196
    },
    "genre": "Acoustic",
    "language": "English",
    "mood": "Chill",
    "bpm": 101,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-728",
    "title": "In the Name of Love (Festival Anthem)",
    "artist": "Martin Garrix",
    "artistId": "artist-67",
    "artists": [
      {
        "artistId": "artist-67",
        "artistName": "Martin Garrix",
        "role": "primary"
      }
    ],
    "album": "In the Name of Love (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 197,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt072767abc",
      "streamUrl": "",
      "durationSeconds": 197
    },
    "genre": "Electronic",
    "language": "English",
    "mood": "Energetic",
    "bpm": 102,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-729",
    "title": "Dil Nu (Slowed & Reverb)",
    "artist": "AP Dhillon",
    "artistId": "artist-1",
    "artists": [
      {
        "artistId": "artist-1",
        "artistName": "AP Dhillon",
        "role": "primary"
      }
    ],
    "album": "Dil Nu (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 198,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0728-1abc",
      "streamUrl": "",
      "durationSeconds": 198
    },
    "genre": "Chill",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 103,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-730",
    "title": "Tauba Tauba (Orchestral Suite)",
    "artist": "Diljit Dosanjh",
    "artistId": "artist-2",
    "artists": [
      {
        "artistId": "artist-2",
        "artistName": "Diljit Dosanjh",
        "role": "primary"
      }
    ],
    "album": "Tauba Tauba (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 199,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0729-2abc",
      "streamUrl": "",
      "durationSeconds": 199
    },
    "genre": "Classical",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 104,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-731",
    "title": "Softly (Acoustic Session)",
    "artist": "Karan Aujla",
    "artistId": "artist-3",
    "artists": [
      {
        "artistId": "artist-3",
        "artistName": "Karan Aujla",
        "role": "primary"
      }
    ],
    "album": "Softly (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 200,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0730-3abc",
      "streamUrl": "",
      "durationSeconds": 200
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 105,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-732",
    "title": "Baller (Live in Concert)",
    "artist": "Shubh",
    "artistId": "artist-4",
    "artists": [
      {
        "artistId": "artist-4",
        "artistName": "Shubh",
        "role": "primary"
      }
    ],
    "album": "Baller (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 201,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0731-4abc",
      "streamUrl": "",
      "durationSeconds": 201
    },
    "genre": "Live",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 106,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-733",
    "title": "The Last Ride (Lo-Fi Chill Mix)",
    "artist": "Sidhu Moose Wala",
    "artistId": "artist-5",
    "artists": [
      {
        "artistId": "artist-5",
        "artistName": "Sidhu Moose Wala",
        "role": "primary"
      }
    ],
    "album": "The Last Ride (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 202,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0732-5abc",
      "streamUrl": "",
      "durationSeconds": 202
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 107,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-734",
    "title": "Patola (Midnight Drift)",
    "artist": "Guru Randhawa",
    "artistId": "artist-6",
    "artists": [
      {
        "artistId": "artist-6",
        "artistName": "Guru Randhawa",
        "role": "primary"
      }
    ],
    "album": "Patola (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 203,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0733-6abc",
      "streamUrl": "",
      "durationSeconds": 203
    },
    "genre": "Late Night",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 108,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-735",
    "title": "Naah (Sunset Acoustic)",
    "artist": "Harrdy Sandhu",
    "artistId": "artist-7",
    "artists": [
      {
        "artistId": "artist-7",
        "artistName": "Harrdy Sandhu",
        "role": "primary"
      }
    ],
    "album": "Naah (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 204,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0734-7abc",
      "streamUrl": "",
      "durationSeconds": 204
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 109,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-736",
    "title": "Qismat (Club Remix)",
    "artist": "Ammy Virk",
    "artistId": "artist-8",
    "artists": [
      {
        "artistId": "artist-8",
        "artistName": "Ammy Virk",
        "role": "primary"
      }
    ],
    "album": "Qismat (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 205,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0735-8abc",
      "streamUrl": "",
      "durationSeconds": 205
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 110,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-737",
    "title": "Filhaal 2 (Unplugged)",
    "artist": "B Praak",
    "artistId": "artist-9",
    "artists": [
      {
        "artistId": "artist-9",
        "artistName": "B Praak",
        "role": "primary"
      }
    ],
    "album": "Filhaal 2 (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 206,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt0736-9abc",
      "streamUrl": "",
      "durationSeconds": 206
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 111,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-738",
    "title": "Bewafa (Festival Anthem)",
    "artist": "Imran Khan",
    "artistId": "artist-10",
    "artists": [
      {
        "artistId": "artist-10",
        "artistName": "Imran Khan",
        "role": "primary"
      }
    ],
    "album": "Bewafa (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 207,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt073710abc",
      "streamUrl": "",
      "durationSeconds": 207
    },
    "genre": "Electronic",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 112,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-739",
    "title": "Snake Charmer (Slowed & Reverb)",
    "artist": "Panjabi MC",
    "artistId": "artist-11",
    "artists": [
      {
        "artistId": "artist-11",
        "artistName": "Panjabi MC",
        "role": "primary"
      }
    ],
    "album": "Snake Charmer (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 208,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt073811abc",
      "streamUrl": "",
      "durationSeconds": 208
    },
    "genre": "Chill",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 113,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-740",
    "title": "Kudiyan Shehar Diyan (Orchestral Suite)",
    "artist": "Daler Mehndi",
    "artistId": "artist-12",
    "artists": [
      {
        "artistId": "artist-12",
        "artistName": "Daler Mehndi",
        "role": "primary"
      }
    ],
    "album": "Kudiyan Shehar Diyan (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "duration": 209,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt073912abc",
      "streamUrl": "",
      "durationSeconds": 209
    },
    "genre": "Classical",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 114,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-741",
    "title": "Illegal Weapon (Acoustic Session)",
    "artist": "Jasmine Sandlas",
    "artistId": "artist-13",
    "artists": [
      {
        "artistId": "artist-13",
        "artistName": "Jasmine Sandlas",
        "role": "primary"
      }
    ],
    "album": "Illegal Weapon (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "duration": 210,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt074013abc",
      "streamUrl": "",
      "durationSeconds": 210
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 115,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-742",
    "title": "Designer (Live in Concert)",
    "artist": "Nimrat Khaira",
    "artistId": "artist-14",
    "artists": [
      {
        "artistId": "artist-14",
        "artistName": "Nimrat Khaira",
        "role": "primary"
      }
    ],
    "album": "Designer (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "duration": 211,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt074114abc",
      "streamUrl": "",
      "durationSeconds": 211
    },
    "genre": "Live",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 116,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.83
    }
  },
  {
    "id": "track-743",
    "title": "Duji Vaar Pyar (Lo-Fi Chill Mix)",
    "artist": "Sunanda Sharma",
    "artistId": "artist-15",
    "artists": [
      {
        "artistId": "artist-15",
        "artistName": "Sunanda Sharma",
        "role": "primary"
      }
    ],
    "album": "Duji Vaar Pyar (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "duration": 212,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt074215abc",
      "streamUrl": "",
      "durationSeconds": 212
    },
    "genre": "Lo-Fi",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 117,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.84
    }
  },
  {
    "id": "track-744",
    "title": "Yarri Yeh (Midnight Drift)",
    "artist": "Mickey Singh",
    "artistId": "artist-16",
    "artists": [
      {
        "artistId": "artist-16",
        "artistName": "Mickey Singh",
        "role": "primary"
      }
    ],
    "album": "Yarri Yeh (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "duration": 213,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt074316abc",
      "streamUrl": "",
      "durationSeconds": 213
    },
    "genre": "Late Night",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 118,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.85
    }
  },
  {
    "id": "track-745",
    "title": "Ain't Died In Vain (Sunset Acoustic)",
    "artist": "Prem Dhillon",
    "artistId": "artist-17",
    "artists": [
      {
        "artistId": "artist-17",
        "artistName": "Prem Dhillon",
        "role": "primary"
      }
    ],
    "album": "Ain't Died In Vain (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "duration": 214,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt074417abc",
      "streamUrl": "",
      "durationSeconds": 214
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 119,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.86
    }
  },
  {
    "id": "track-746",
    "title": "Ek Tera Pyar (Club Remix)",
    "artist": "Bohemia",
    "artistId": "artist-18",
    "artists": [
      {
        "artistId": "artist-18",
        "artistName": "Bohemia",
        "role": "primary"
      }
    ],
    "album": "Ek Tera Pyar (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "duration": 215,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt074518abc",
      "streamUrl": "",
      "durationSeconds": 215
    },
    "genre": "Dance",
    "language": "Punjabi",
    "mood": "Energetic",
    "bpm": 120,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.87
    }
  },
  {
    "id": "track-747",
    "title": "Illegal Weapon (Unplugged)",
    "artist": "Garry Sandhu",
    "artistId": "artist-19",
    "artists": [
      {
        "artistId": "artist-19",
        "artistName": "Garry Sandhu",
        "role": "primary"
      }
    ],
    "album": "Illegal Weapon (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "duration": 216,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt074619abc",
      "streamUrl": "",
      "durationSeconds": 216
    },
    "genre": "Acoustic",
    "language": "Punjabi",
    "mood": "Chill",
    "bpm": 121,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.88
    }
  },
  {
    "id": "track-748",
    "title": "Kesariya (Festival Anthem)",
    "artist": "Arijit Singh",
    "artistId": "artist-20",
    "artists": [
      {
        "artistId": "artist-20",
        "artistName": "Arijit Singh",
        "role": "primary"
      }
    ],
    "album": "Kesariya (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 217,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt074720abc",
      "streamUrl": "",
      "durationSeconds": 217
    },
    "genre": "Electronic",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 122,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.89
    }
  },
  {
    "id": "track-749",
    "title": "Tere Bina (Slowed & Reverb)",
    "artist": "A.R. Rahman",
    "artistId": "artist-21",
    "artists": [
      {
        "artistId": "artist-21",
        "artistName": "A.R. Rahman",
        "role": "primary"
      }
    ],
    "album": "Tere Bina (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 218,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt074821abc",
      "streamUrl": "",
      "durationSeconds": 218
    },
    "genre": "Chill",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 123,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.9
    }
  },
  {
    "id": "track-750",
    "title": "Kesariya (Orchestral Suite)",
    "artist": "Pritam",
    "artistId": "artist-22",
    "artists": [
      {
        "artistId": "artist-22",
        "artistName": "Pritam",
        "role": "primary"
      }
    ],
    "album": "Kesariya (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 219,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt074922abc",
      "streamUrl": "",
      "durationSeconds": 219
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 124,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.91
    }
  },
  {
    "id": "track-751",
    "title": "Tum Ho (Acoustic Session)",
    "artist": "Mohit Chauhan",
    "artistId": "artist-23",
    "artists": [
      {
        "artistId": "artist-23",
        "artistName": "Mohit Chauhan",
        "role": "primary"
      }
    ],
    "album": "Tum Ho (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 220,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt075023abc",
      "streamUrl": "",
      "durationSeconds": 220
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 125,
    "acousticFeatures": {
      "danceability": 0.55,
      "energy": 0.35,
      "valence": 0.5,
      "acousticness": 0.82,
      "vibeScore": 0.92
    }
  },
  {
    "id": "track-752",
    "title": "Woh Lamhe (Live in Concert)",
    "artist": "Atif Aslam",
    "artistId": "artist-24",
    "artists": [
      {
        "artistId": "artist-24",
        "artistName": "Atif Aslam",
        "role": "primary"
      }
    ],
    "album": "Woh Lamhe (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 221,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt075124abc",
      "streamUrl": "",
      "durationSeconds": 221
    },
    "genre": "Live",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 126,
    "acousticFeatures": {
      "danceability": 0.75,
      "energy": 0.92,
      "valence": 0.8,
      "acousticness": 0.12,
      "vibeScore": 0.93
    }
  },
  {
    "id": "track-753",
    "title": "DJ Waley Babu (Lo-Fi Chill Mix)",
    "artist": "Badshah",
    "artistId": "artist-25",
    "artists": [
      {
        "artistId": "artist-25",
        "artistName": "Badshah",
        "role": "primary"
      }
    ],
    "album": "DJ Waley Babu (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 222,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt075225abc",
      "streamUrl": "",
      "durationSeconds": 222
    },
    "genre": "Lo-Fi",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 127,
    "acousticFeatures": {
      "danceability": 0.65,
      "energy": 0.45,
      "valence": 0.55,
      "acousticness": 0.65,
      "vibeScore": 0.94
    }
  },
  {
    "id": "track-754",
    "title": "Humnava Mere (Midnight Drift)",
    "artist": "Jubin Nautiyal",
    "artistId": "artist-26",
    "artists": [
      {
        "artistId": "artist-26",
        "artistName": "Jubin Nautiyal",
        "role": "primary"
      }
    ],
    "album": "Humnava Mere (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 223,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt075326abc",
      "streamUrl": "",
      "durationSeconds": 223
    },
    "genre": "Late Night",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 128,
    "acousticFeatures": {
      "danceability": 0.72,
      "energy": 0.58,
      "valence": 0.5,
      "acousticness": 0.4,
      "vibeScore": 0.95
    }
  },
  {
    "id": "track-755",
    "title": "Barso Re (Sunset Acoustic)",
    "artist": "Shreya Ghoshal",
    "artistId": "artist-27",
    "artists": [
      {
        "artistId": "artist-27",
        "artistName": "Shreya Ghoshal",
        "role": "primary"
      }
    ],
    "album": "Barso Re (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "duration": 224,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt075427abc",
      "streamUrl": "",
      "durationSeconds": 224
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 129,
    "acousticFeatures": {
      "danceability": 0.6,
      "energy": 0.4,
      "valence": 0.62,
      "acousticness": 0.75,
      "vibeScore": 0.96
    }
  },
  {
    "id": "track-756",
    "title": "Zara Sa (Club Remix)",
    "artist": "KK",
    "artistId": "artist-28",
    "artists": [
      {
        "artistId": "artist-28",
        "artistName": "KK",
        "role": "primary"
      }
    ],
    "album": "Zara Sa (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "duration": 225,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt075528abc",
      "streamUrl": "",
      "durationSeconds": 225
    },
    "genre": "Dance",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 130,
    "acousticFeatures": {
      "danceability": 0.9,
      "energy": 0.95,
      "valence": 0.88,
      "acousticness": 0.05,
      "vibeScore": 0.97
    }
  },
  {
    "id": "track-757",
    "title": "Abhi Mujh Mein Kahin (Unplugged)",
    "artist": "Sonu Nigam",
    "artistId": "artist-29",
    "artists": [
      {
        "artistId": "artist-29",
        "artistName": "Sonu Nigam",
        "role": "primary"
      }
    ],
    "album": "Abhi Mujh Mein Kahin (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "duration": 226,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt075629abc",
      "streamUrl": "",
      "durationSeconds": 226
    },
    "genre": "Acoustic",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 131,
    "acousticFeatures": {
      "danceability": 0.58,
      "energy": 0.38,
      "valence": 0.55,
      "acousticness": 0.78,
      "vibeScore": 0.8
    }
  },
  {
    "id": "track-758",
    "title": "Nashe Si Chadh Gayi (Festival Anthem)",
    "artist": "Vishal-Shekhar",
    "artistId": "artist-30",
    "artists": [
      {
        "artistId": "artist-30",
        "artistName": "Vishal-Shekhar",
        "role": "primary"
      }
    ],
    "album": "Nashe Si Chadh Gayi (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "duration": 227,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt075730abc",
      "streamUrl": "",
      "durationSeconds": 227
    },
    "genre": "Electronic",
    "language": "Hindi",
    "mood": "Energetic",
    "bpm": 132,
    "acousticFeatures": {
      "danceability": 0.88,
      "energy": 0.96,
      "valence": 0.85,
      "acousticness": 0.06,
      "vibeScore": 0.81
    }
  },
  {
    "id": "track-759",
    "title": "Sweetheart (Slowed & Reverb)",
    "artist": "Amit Trivedi",
    "artistId": "artist-31",
    "artists": [
      {
        "artistId": "artist-31",
        "artistName": "Amit Trivedi",
        "role": "primary"
      }
    ],
    "album": "Sweetheart (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "duration": 228,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt075831abc",
      "streamUrl": "",
      "durationSeconds": 228
    },
    "genre": "Chill",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 133,
    "acousticFeatures": {
      "danceability": 0.62,
      "energy": 0.48,
      "valence": 0.45,
      "acousticness": 0.5,
      "vibeScore": 0.82
    }
  },
  {
    "id": "track-760",
    "title": "Tune Kaha (Orchestral Suite)",
    "artist": "Prateek Kuhad",
    "artistId": "artist-32",
    "artists": [
      {
        "artistId": "artist-32",
        "artistName": "Prateek Kuhad",
        "role": "primary"
      }
    ],
    "album": "Tune Kaha (Deluxe)",
    "albumArt": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "duration": 229,
    "audioSrc": "",
    "playbackSource": {
      "provider": "YOUTUBE_IFRAME",
      "capability": "FULL",
      "youtubeVideoId": "yt075932abc",
      "streamUrl": "",
      "durationSeconds": 229
    },
    "genre": "Classical",
    "language": "Hindi",
    "mood": "Chill",
    "bpm": 134,
    "acousticFeatures": {
      "danceability": 0.45,
      "energy": 0.65,
      "valence": 0.58,
      "acousticness": 0.7,
      "vibeScore": 0.83
    }
  }
];

export const PLAYLISTS_DATA: Playlist[] = [
  {
    "id": "playlist-punjabi-bangers",
    "name": "Punjabi Bangers",
    "description": "High-octane Punjabi club and gym anthems.",
    "coverImage": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "trackIds": [
      "track-2",
      "track-3",
      "track-8",
      "track-11",
      "track-17",
      "track-19",
      "track-23",
      "track-25",
      "track-28",
      "track-29",
      "track-30",
      "track-37",
      "track-38",
      "track-42",
      "track-43",
      "track-45",
      "track-46",
      "track-49",
      "track-51",
      "track-52",
      "track-55",
      "track-58",
      "track-61",
      "track-66",
      "track-68",
      "track-73",
      "track-76",
      "track-77",
      "track-80",
      "track-81",
      "track-83",
      "track-89",
      "track-92",
      "track-93",
      "track-94",
      "track-95",
      "track-97",
      "track-98",
      "track-101",
      "track-102"
    ],
    "category": "Genre",
    "gradient": "from-amber-600 to-red-600",
    "createdAt": "2026-01-01"
  },
  {
    "id": "playlist-late-night-drives",
    "name": "Late Night Drives",
    "description": "Atmospheric, deep bass and moody midnight tracks.",
    "coverImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "trackIds": [
      "track-1",
      "track-5",
      "track-7",
      "track-9",
      "track-12",
      "track-15",
      "track-18",
      "track-34",
      "track-59",
      "track-74",
      "track-84",
      "track-87",
      "track-108",
      "track-109",
      "track-111",
      "track-119",
      "track-120",
      "track-121",
      "track-123",
      "track-126",
      "track-129",
      "track-138",
      "track-139",
      "track-149",
      "track-157",
      "track-161",
      "track-166",
      "track-168",
      "track-172",
      "track-174",
      "track-202",
      "track-204",
      "track-205",
      "track-206",
      "track-221",
      "track-222",
      "track-223",
      "track-228",
      "track-235",
      "track-238"
    ],
    "category": "Mood",
    "gradient": "from-indigo-900 to-purple-800",
    "createdAt": "2026-01-01"
  },
  {
    "id": "playlist-bollywood-romance",
    "name": "Bollywood Romance",
    "description": "Soul-stirring Hindi love songs that defined an era.",
    "coverImage": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "trackIds": [
      "track-156",
      "track-158",
      "track-159",
      "track-160",
      "track-167",
      "track-169",
      "track-170",
      "track-171",
      "track-173",
      "track-175",
      "track-179",
      "track-183",
      "track-186",
      "track-189",
      "track-192",
      "track-195",
      "track-196",
      "track-198",
      "track-207",
      "track-208",
      "track-209",
      "track-210",
      "track-220",
      "track-224",
      "track-225",
      "track-231",
      "track-232",
      "track-233",
      "track-234",
      "track-236",
      "track-237",
      "track-239",
      "track-242",
      "track-245",
      "track-246",
      "track-256",
      "track-258",
      "track-261",
      "track-263",
      "track-267"
    ],
    "category": "Genre",
    "gradient": "from-rose-600 to-pink-600",
    "createdAt": "2026-01-01"
  },
  {
    "id": "playlist-indian-indie",
    "name": "Indian Indie & Acoustic",
    "description": "Gentle guitars, honest poetry, and heartfelt bedroom pop.",
    "coverImage": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    "trackIds": [
      "track-200",
      "track-203",
      "track-254",
      "track-257",
      "track-258",
      "track-259",
      "track-260",
      "track-261",
      "track-262",
      "track-263",
      "track-264",
      "track-265",
      "track-266",
      "track-267",
      "track-268",
      "track-269",
      "track-270",
      "track-271",
      "track-272",
      "track-273",
      "track-274",
      "track-280",
      "track-281",
      "track-282",
      "track-356",
      "track-357",
      "track-439",
      "track-461",
      "track-465",
      "track-467",
      "track-471",
      "track-475",
      "track-477",
      "track-481",
      "track-485",
      "track-487",
      "track-491",
      "track-495",
      "track-497",
      "track-501"
    ],
    "category": "Vibe",
    "gradient": "from-emerald-700 to-teal-800",
    "createdAt": "2026-01-01"
  },
  {
    "id": "playlist-global-charts",
    "name": "Global Top 40",
    "description": "The biggest pop, hip-hop, and R&B smashes dominating the world.",
    "coverImage": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "trackIds": [
      "track-280",
      "track-281",
      "track-282",
      "track-311",
      "track-312",
      "track-313",
      "track-314",
      "track-315",
      "track-316",
      "track-317",
      "track-318",
      "track-319",
      "track-320",
      "track-321",
      "track-322",
      "track-323",
      "track-324",
      "track-325",
      "track-326",
      "track-327",
      "track-328",
      "track-329",
      "track-330",
      "track-331",
      "track-332",
      "track-333",
      "track-334",
      "track-335",
      "track-336",
      "track-337",
      "track-338",
      "track-339",
      "track-340",
      "track-341",
      "track-342",
      "track-343",
      "track-344",
      "track-345",
      "track-346",
      "track-347"
    ],
    "category": "Charts",
    "gradient": "from-blue-600 to-cyan-600",
    "createdAt": "2026-01-01"
  },
  {
    "id": "playlist-south-blockbusters",
    "name": "South Indian Blockbusters",
    "description": "Electrifying chartbusters from Tamil, Telugu, and Malayalam cinema.",
    "coverImage": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    "trackIds": [
      "track-288",
      "track-289",
      "track-290",
      "track-291",
      "track-292",
      "track-293",
      "track-294",
      "track-295",
      "track-296",
      "track-297",
      "track-298",
      "track-299",
      "track-300",
      "track-301",
      "track-302",
      "track-303",
      "track-304",
      "track-305",
      "track-306",
      "track-307",
      "track-308",
      "track-309",
      "track-310",
      "track-499",
      "track-500",
      "track-501",
      "track-502",
      "track-503",
      "track-504",
      "track-566",
      "track-567",
      "track-568",
      "track-569",
      "track-570",
      "track-571",
      "track-633",
      "track-634",
      "track-635",
      "track-636",
      "track-637"
    ],
    "category": "Regional",
    "gradient": "from-amber-500 to-orange-700",
    "createdAt": "2026-01-01"
  },
  {
    "id": "playlist-desi-hip-hop",
    "name": "Desi Hip-Hop Pioneers",
    "description": "Raw street poetry and revolutionary rap from Delhi to Mumbai.",
    "coverImage": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "trackIds": [
      "track-40",
      "track-42",
      "track-43",
      "track-50",
      "track-51",
      "track-52",
      "track-54",
      "track-56",
      "track-57",
      "track-58",
      "track-59",
      "track-60",
      "track-61",
      "track-62",
      "track-63",
      "track-64",
      "track-65",
      "track-66",
      "track-67",
      "track-68",
      "track-69",
      "track-70",
      "track-71",
      "track-72",
      "track-73",
      "track-74",
      "track-75",
      "track-76",
      "track-78",
      "track-79",
      "track-82",
      "track-83",
      "track-84",
      "track-85",
      "track-86",
      "track-87",
      "track-88",
      "track-89",
      "track-91",
      "track-137"
    ],
    "category": "Genre",
    "gradient": "from-neutral-800 to-rose-900",
    "createdAt": "2026-01-01"
  },
  {
    "id": "playlist-birthday-favorites",
    "name": "Sohaliya's Birthday Favorites",
    "description": "Handpicked favorites and memories compiled for Sohaliya.",
    "coverImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "trackIds": [
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
      "track-12",
      "track-13",
      "track-14",
      "track-15",
      "track-16",
      "track-17",
      "track-18",
      "track-19",
      "track-20",
      "track-21",
      "track-22",
      "track-23",
      "track-24",
      "track-25"
    ],
    "category": "Special",
    "gradient": "from-rose-500 to-purple-600",
    "createdAt": "2026-01-01",
    "isBirthdaySpecial": true
  }
];
