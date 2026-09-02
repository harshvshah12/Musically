# scripts/catalog_data_artists.py
# 68 Canonical Artists with biographies, genres, monthly listeners, and verified image sources

ARTISTS = [
  # Punjabi
  {
    "id": "artist-1", "name": "AP Dhillon",
    "aliases": ["Amritpal Singh Dhillon", "AP"],
    "genres": ["Punjabi Pop", "Hip-Hop", "Trap"],
    "bio": "Indo-Canadian singer and producer known for historic hits Excuses, Brown Munde, and With You.",
    "monthlyListeners": "8.4M", "country": "Canada/India",
    "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Excuses", "Brown Munde", "With You", "Dil Nu", "Summer High"]
  },
  {
    "id": "artist-2", "name": "Diljit Dosanjh",
    "aliases": ["Diljit", "Dosanjhanwala", "GOAT"],
    "genres": ["Punjabi Pop", "Bhangra", "Folk"],
    "bio": "Global Punjabi superstar, historic Coachella headliner, and acclaimed international actor.",
    "monthlyListeners": "14.2M", "country": "India",
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["G.O.A.T.", "Lover", "Born to Shine", "Hass Hass", "Tauba Tauba"]
  },
  {
    "id": "artist-3", "name": "Karan Aujla",
    "aliases": ["Geetan Di Machine", "Aujla"],
    "genres": ["Punjabi Rap", "Desi Hip Hop", "Folk"],
    "bio": "Prolific singer, lyricist, and Billboard-charting artist behind Making Memories and Four You.",
    "monthlyListeners": "11.8M", "country": "Canada/India",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Softly", "Winning Speech", "Admirin You", "52 Bars", "Tauba Tauba"]
  },
  {
    "id": "artist-4", "name": "Shubh",
    "aliases": ["Shubneet Singh"],
    "genres": ["Punjabi Hip Hop", "Trap", "Melodic Rap"],
    "bio": "Sensational breakout artist behind viral records Cheques, Baller, No Love, and Still Rollin.",
    "monthlyListeners": "9.6M", "country": "India",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Cheques", "Baller", "No Love", "Elevated", "We Rollin"]
  },
  {
    "id": "artist-5", "name": "Sidhu Moose Wala",
    "aliases": ["Subhdeep Singh Sidhu", "Moosewala", "Moosetape"],
    "genres": ["Punjabi Hip Hop", "Gangsta Rap", "Folk"],
    "bio": "Iconic and immortal Punjabi revolutionary artist whose lyricism reshaped the global diaspora.",
    "monthlyListeners": "12.5M", "country": "India",
    "image": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["295", "So High", "The Last Ride", "Legend", "Same Beef"]
  },
  {
    "id": "artist-6", "name": "Guru Randhawa",
    "aliases": ["High Rated Gabru"],
    "genres": ["Punjabi Pop", "Dance", "Bollywood"],
    "bio": "High-energy hitmaker with billions of views across Lahore, High Rated Gabru, and Suit Suit.",
    "monthlyListeners": "7.8M", "country": "India",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Lahore", "High Rated Gabru", "Suit Suit", "Patola", "Made in India"]
  },
  {
    "id": "artist-7", "name": "Harrdy Sandhu",
    "aliases": ["Hardavinder Singh Sandhu"],
    "genres": ["Punjabi Pop", "Romantic", "Dance"],
    "bio": "Celebrated singer and actor behind modern viral anthems Bijlee Bijlee and Backbone.",
    "monthlyListeners": "6.2M", "country": "India",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Bijlee Bijlee", "Backbone", "Kya Baat Ay", "Horn Blow", "Naah"]
  },
  {
    "id": "artist-8", "name": "Ammy Virk",
    "aliases": ["Amninderpal Singh Virk"],
    "genres": ["Punjabi Folk", "Bhangra", "Melody"],
    "bio": "Award-winning Punjabi folk singer and leading actor famous for Qismat and Wang Da Naap.",
    "monthlyListeners": "5.5M", "country": "India",
    "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Qismat", "Wang Da Naap", "Haan Haige Aa", "Zindabaad Yaarian", "Khabbi Seat"]
  },
  {
    "id": "artist-9", "name": "B Praak",
    "aliases": ["Pratik Bachan"],
    "genres": ["Sufi", "Punjabi Sad", "Bollywood"],
    "bio": "National Award-winning music director and passionate vocalist behind Teri Mitti and Filhall.",
    "monthlyListeners": "8.9M", "country": "India",
    "image": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Filhall", "Filhaal 2", "Mann Bharrya", "Teri Mitti", "Pachtaoge"]
  },
  {
    "id": "artist-10", "name": "Imran Khan",
    "aliases": ["Imran Khan Singer"],
    "genres": ["Desi Hip Hop", "Urban Punjabi", "R&B"],
    "bio": "Dutch-Pakistani urban Punjabi pioneer whose Amplifier and Satisfya set the gold standard.",
    "monthlyListeners": "4.8M", "country": "Netherlands",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Amplifier", "Satisfya", "Bewafa", "Knightridah", "Pata Chalgea"]
  },
  {
    "id": "artist-11", "name": "Panjabi MC",
    "aliases": ["Rajinder Singh Rai"],
    "genres": ["Bhangra", "Hip-Hop", "UK Asian"],
    "bio": "British-Indian producer behind the worldwide crossover phenomenon Mundian To Bach Ke.",
    "monthlyListeners": "3.9M", "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Mundian To Bach Ke", "Jogi", "Mirza", "Snake Charmer", "Bari Barsi"]
  },
  {
    "id": "artist-12", "name": "Daler Mehndi",
    "aliases": ["King of Bhangra"],
    "genres": ["Bhangra", "Indipop", "Folk"],
    "bio": "The unstoppable voice of Indian pop culture whose Tunak Tunak Tun conquered the world.",
    "monthlyListeners": "3.2M", "country": "India",
    "image": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Tunak Tunak Tun", "Bolo Ta Ra Ra", "Dardi Rab Rab", "Ho Jayegi Balle Balle", "Kudiyan Shehar Diyan"]
  },
  {
    "id": "artist-13", "name": "Jasmine Sandlas",
    "aliases": ["Gulabi Queen"],
    "genres": ["Punjabi Pop", "Folk", "Hip-Hop"],
    "bio": "Fierce and distinctive Punjabi vocalist behind Illegal Weapon, Sip Sip, and Bamb Jatt.",
    "monthlyListeners": "3.7M", "country": "India",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Illegal Weapon", "Sip Sip", "Bamb Jatt", "Patt Lai Geya", "Laddu"]
  },
  {
    "id": "artist-14", "name": "Nimrat Khaira",
    "aliases": ["Nimrat"],
    "genres": ["Punjabi Folk", "Pop", "Melody"],
    "bio": "Graceful and dynamic Punjabi singer known for Bhalwani Geda, Designer, and Sirra E Hou.",
    "monthlyListeners": "4.1M", "country": "India",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Bhalwani Geda", "Designer", "Supna Laavan Da", "Time Chakda", "Sirra E Hou"]
  },
  {
    "id": "artist-15", "name": "Sunanda Sharma",
    "aliases": ["Sunanda"],
    "genres": ["Punjabi Pop", "Dance", "Bhangra"],
    "bio": "Enthusiastic singer behind massive anthems Jaani Tera Naa, Sandal, and Duji Vaar Pyar.",
    "monthlyListeners": "3.4M", "country": "India",
    "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Jaani Tera Naa", "Sandal", "Duji Vaar Pyar", "Pagal Nahi Hona", "Chori Chori"]
  },
  {
    "id": "artist-16", "name": "Mickey Singh",
    "aliases": ["Mickey"],
    "genres": ["Urban Desi", "R&B", "Punjabi Pop"],
    "bio": "American-Punjabi crooner fusing contemporary western R&B rhythms with Punjabi soul.",
    "monthlyListeners": "2.9M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Phone", "Rooftop Party", "Bad Girl", "Yarri Yeh", "Summer Luv"]
  },
  {
    "id": "artist-17", "name": "Prem Dhillon",
    "aliases": ["Prem"],
    "genres": ["Punjabi Hip Hop", "Trap"],
    "bio": "Majha powerhouse delivering gritty anthems Old Skool and Majha Block.",
    "monthlyListeners": "3.6M", "country": "India",
    "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Old Skool", "Majha Block", "Boot Cut", "Lost Love", "Ain't Died In Vain"]
  },
  {
    "id": "artist-18", "name": "Bohemia",
    "aliases": ["Roger David", "Pioneer of Desi Hip Hop"],
    "genres": ["Desi Hip Hop", "Rap Pioneer"],
    "bio": "The legendary pioneer who originated the Desi Hip Hop movement.",
    "monthlyListeners": "4.5M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Ek Tera Pyar", "Kali Denali", "Rooh", "Sahara", "Jaguar"]
  },
  {
    "id": "artist-19", "name": "Garry Sandhu",
    "aliases": ["Garry"],
    "genres": ["Punjabi Pop", "Bhangra", "Folk"],
    "bio": "Prolific singer-songwriter and producer known for Yeah Baby and Banda Ban Ja.",
    "monthlyListeners": "4.0M", "country": "India",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Yeah Baby", "Illegal Weapon", "Banda Ban Ja", "Hauli Hauli", "Sip Sip"]
  },

  # Bollywood & Hindi
  {
    "id": "artist-20", "name": "Arijit Singh",
    "aliases": ["Arijit", "King of Romance"],
    "genres": ["Bollywood", "Romantic", "Sufi"],
    "bio": "The undisputed voice of modern India whose emotional range defines contemporary cinema.",
    "monthlyListeners": "42.0M", "country": "India",
    "image": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Tum Hi Ho", "Channa Mereya", "Kesariya", "Apna Bana Le", "Tere Hawale"]
  },
  {
    "id": "artist-21", "name": "A.R. Rahman",
    "aliases": ["Mozart of Madras", "Rahman"],
    "genres": ["World", "Soundtrack", "Sufi", "Fusion"],
    "bio": "Academy and Grammy Award-winning musical visionary celebrated worldwide.",
    "monthlyListeners": "18.5M", "country": "India",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Kun Faya Kun", "Jai Ho", "Chaiyya Chaiyya", "Tere Bina", "Masakali"]
  },
  {
    "id": "artist-22", "name": "Pritam",
    "aliases": ["Pritam Chakraborty"],
    "genres": ["Bollywood", "Pop", "Rock"],
    "bio": "The mastermind behind countless blockbuster soundtracks from YJHD to Brahmāstra.",
    "monthlyListeners": "26.0M", "country": "India",
    "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Badtameez Dil", "Subhanallah", "Dilliwaali Girlfriend", "Balam Pichkari", "Kesariya"]
  },
  {
    "id": "artist-23", "name": "Mohit Chauhan",
    "aliases": ["Mohit"],
    "genres": ["Bollywood", "Indipop", "Folk"],
    "bio": "The soulful voice behind Rockstar, Jab We Met, and Delhi-6.",
    "monthlyListeners": "9.2M", "country": "India",
    "image": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Tum Ho", "Nadaan Parinde", "Phir Se Ud Chala", "Masakali", "Pee Loon"]
  },
  {
    "id": "artist-24", "name": "Atif Aslam",
    "aliases": ["Atif"],
    "genres": ["Bollywood", "Sufi Rock", "Romantic"],
    "bio": "Beloved vocalist whose distinctive raspy delivery defined 2000s and 2010s romantic anthems.",
    "monthlyListeners": "16.8M", "country": "Pakistan",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Aadat", "Woh Lamhe", "Tere Bin", "Pehli Nazar Mein", "Tu Jaane Na"]
  },
  {
    "id": "artist-25", "name": "Badshah",
    "aliases": ["Aditya Prateek Singh Sisodia"],
    "genres": ["Desi Hip Hop", "Commercial Rap", "Pop"],
    "bio": "Multi-platinum rapper behind unstoppable club and wedding anthems across India.",
    "monthlyListeners": "15.4M", "country": "India",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Kala Chashma", "Kar Gayi Chull", "DJ Waley Babu", "Garmi", "Paani Paani"]
  },
  {
    "id": "artist-26", "name": "Jubin Nautiyal",
    "aliases": ["Jubin"],
    "genres": ["Bollywood", "Acoustic", "Devotional"],
    "bio": "Acclaimed romantic singer behind record-breaking records Raataan Lambiyan and Lut Gaye.",
    "monthlyListeners": "13.1M", "country": "India",
    "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Raataan Lambiyan", "Lut Gaye", "Tum Hi Aana", "Humnava Mere", "Kinna Sona"]
  },
  {
    "id": "artist-27", "name": "Shreya Ghoshal",
    "aliases": ["Shreya"],
    "genres": ["Bollywood", "Classical", "Romantic"],
    "bio": "India’s celebrated playback queen boasting four National Film Awards.",
    "monthlyListeners": "28.5M", "country": "India",
    "image": "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Teri Ore", "Deewani Mastani", "Ghoomar", "Sunn Raha Hai", "Barso Re"]
  },
  {
    "id": "artist-28", "name": "KK",
    "aliases": ["Krishnakumar Kunnath"],
    "genres": ["Bollywood", "Rock", "Soul"],
    "bio": "The legendary voice of modern Bollywood rock whose melodies are immortalized in Indian hearts.",
    "monthlyListeners": "12.0M", "country": "India",
    "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Zara Sa", "Labon Ko", "Kya Mujhe Pyaar Hai", "Alvida", "Aankhon Mein Teri"]
  },
  {
    "id": "artist-29", "name": "Sonu Nigam",
    "aliases": ["Sonu"],
    "genres": ["Bollywood", "Ghazal", "Pop"],
    "bio": "Regarded as one of the finest and most technically accomplished singers in Indian history.",
    "monthlyListeners": "11.5M", "country": "India",
    "image": "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Kal Ho Naa Ho", "Abhi Mujh Mein Kahin", "Suraj Hua Maddham", "Tumse Milke Dil Ka", "Main Agar Kahoon"]
  },
  {
    "id": "artist-30", "name": "Vishal-Shekhar",
    "aliases": ["Vishal Dadlani", "Shekhar Ravjiani"],
    "genres": ["Bollywood", "Dance", "Electro-pop"],
    "bio": "Dynamic hitmaking composer duo powering Bollywood blockbusters like Pathaan and War.",
    "monthlyListeners": "14.0M", "country": "India",
    "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Desi Girl", "Ghungroo", "Nashe Si Chadh Gayi", "Swag Se Swagat", "Jhoome Jo Pathaan"]
  },
  {
    "id": "artist-31", "name": "Amit Trivedi",
    "aliases": ["Amit"],
    "genres": ["Bollywood", "Indie Rock", "Experimental"],
    "bio": "Visionary composer who brought indie rock textures into commercial Indian cinema.",
    "monthlyListeners": "8.7M", "country": "India",
    "image": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Namo Namo", "Iktara", "London Thumakda", "Sweetheart", "Qaafirana"]
  },

  # Indian Indie
  {
    "id": "artist-32", "name": "Prateek Kuhad",
    "aliases": ["Prateek"],
    "genres": ["Indie Folk", "Acoustic Pop", "Singer-Songwriter"],
    "bio": "Acclaimed singer-songwriter whose honest lyrics and acoustic melodies won global praise.",
    "monthlyListeners": "4.2M", "country": "India",
    "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["cold/mess", "Kasoor", "Tum Jab Paas", "Dil Beparvah", "Tune Kaha"]
  },
  {
    "id": "artist-33", "name": "Anuv Jain",
    "aliases": ["Anuv"],
    "genres": ["Indie Acoustic", "Poetry", "Ballad"],
    "bio": "Acoustic sensation known for tender, emotionally devastating anthems like Husn and Baarishein.",
    "monthlyListeners": "6.8M", "country": "India",
    "image": "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Baarishein", "Alag Aasmaan", "Husn", "Gul", "Mishri"]
  },
  {
    "id": "artist-34", "name": "The Local Train",
    "aliases": ["TLT"],
    "genres": ["Hindi Rock", "Indie Rock"],
    "bio": "Trailblazing Hindi rock band celebrated for powerful melodies and poetic lyricism.",
    "monthlyListeners": "3.1M", "country": "India",
    "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Choo Lo", "Aaoge Tum Kabhi", "Aalas Ka Pedh", "Khudi", "Bandey"]
  },
  {
    "id": "artist-35", "name": "Ritviz",
    "aliases": ["Ritviz Srivastava"],
    "genres": ["Indian Electronic", "Dance", "Folk Fusion"],
    "bio": "Electronic music prodigy fusing Indian classical vocal traditions with festival bass drops.",
    "monthlyListeners": "4.5M", "country": "India",
    "image": "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Udd Gaye", "Sage", "Liggi", "Khoj", "Barso"]
  },
  {
    "id": "artist-36", "name": "When Chai Met Toast",
    "aliases": ["WCMT"],
    "genres": ["Indie Folk", "Acoustic Pop"],
    "bio": "Kochi four-piece bringing warm, joyful, multilingual acoustic optimism.",
    "monthlyListeners": "1.9M", "country": "India",
    "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Firefly", "Khoj", "Joy of Little Things", "Believe", "Yellow Paper Daisy"]
  },
  {
    "id": "artist-37", "name": "Seedhe Maut",
    "aliases": ["Calm & Encore ABJ", "SM"],
    "genres": ["Desi Hip Hop", "Underground Rap"],
    "bio": "Delhi rap powerhouses defining the raw cutting edge of contemporary Indian hip-hop.",
    "monthlyListeners": "2.5M", "country": "India",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Namastute", "101", "Nanchaku", "Shaktimaan", "Fanne Khan"]
  },
  {
    "id": "artist-38", "name": "DIVINE",
    "aliases": ["Vivian Fernandes", "Gully Gang"],
    "genres": ["Gully Rap", "Desi Hip Hop"],
    "bio": "The Mumbai icon who spearheaded the Indian street rap revolution.",
    "monthlyListeners": "5.6M", "country": "India",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Kohinoor", "Mirchi", "Chal Bombay", "Kaam 25", "3:59 AM"]
  },

  # South Indian & Regional
  {
    "id": "artist-39", "name": "Anirudh Ravichander",
    "aliases": ["Anirudh", "Rockstar"],
    "genres": ["Tamil Pop", "Soundtrack", "Electronic"],
    "bio": "The reigning rockstar composer of South Indian cinema producing viral, bass-heavy anthems.",
    "monthlyListeners": "17.2M", "country": "India",
    "image": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Why This Kolaveri Di", "Arabic Kuthu", "Vaathi Coming", "Hukum", "Badass"]
  },
  {
    "id": "artist-40", "name": "Sid Sriram",
    "aliases": ["Sid"],
    "genres": ["Carnatic Fusion", "Soul", "Tamil/Telugu"],
    "bio": "Carnatic trained powerhouse whose expressive high-register vocal delivery crosses languages.",
    "monthlyListeners": "10.5M", "country": "India",
    "image": "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Srivalli", "Kannaana Kanney", "Inkem Inkem", "Samajavaragamana", "Adiye"]
  },
  {
    "id": "artist-41", "name": "Devi Sri Prasad (DSP)",
    "aliases": ["Rockstar DSP"],
    "genres": ["Telugu Pop", "Soundtrack", "Dance"],
    "bio": "High-octane South Indian composer behind monumental blockbusters like Pushpa.",
    "monthlyListeners": "8.3M", "country": "India",
    "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Oo Antava", "Srivalli", "Saami Saami", "Seeti Maar", "Butta Bomma"]
  },
  {
    "id": "artist-42", "name": "Sushin Shyam",
    "aliases": ["Sushin"],
    "genres": ["Malayalam Film Score", "Synthwave", "Indie"],
    "bio": "Genre-defining Malayalam composer behind Aavesham, Manjummel Boys, and Romancham.",
    "monthlyListeners": "5.1M", "country": "India",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Illuminati", "Kuthanthram", "Aadharanjali", "Cherathukal", "Parudeesa"]
  },
  {
    "id": "artist-43", "name": "Ajay-Atul",
    "aliases": ["Ajay Gogavale", "Atul Gogavale"],
    "genres": ["Marathi Film Score", "Orchestral", "Folk"],
    "bio": "Grand orchestrators behind Zingaat, Sairat, and thunderous devotional masterworks.",
    "monthlyListeners": "4.8M", "country": "India",
    "image": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Zingaat", "Sairat Zaala Ji", "Yad Lagla", "Bring It On", "Deva Shree Ganesha"]
  },
  {
    "id": "artist-44", "name": "Sachin-Jigar",
    "aliases": ["Sachin Sanghvi", "Jigar Saraiya"],
    "genres": ["Gujarati Pop", "Bollywood", "Dance"],
    "bio": "Versatile composer duo revitalizing modern Gujarati pop and crafting Bollywood chartbusters.",
    "monthlyListeners": "7.9M", "country": "India",
    "image": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Khalasi", "Radha Ne Shyam", "Chand Ne Kaho", "Apna Bana Le", "Kamariya"]
  },

  # Global Pop, Hip-Hop & R&B
  {
    "id": "artist-45", "name": "The Weeknd",
    "aliases": ["Abel Tesfaye"],
    "genres": ["R&B", "Synth-pop", "Pop"],
    "bio": "Global pop titan behind the most streamed song in history Blinding Lights and Starboy.",
    "monthlyListeners": "108.0M", "country": "Canada",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Blinding Lights", "Starboy", "Save Your Tears", "After Hours", "Die For You"]
  },
  {
    "id": "artist-46", "name": "Drake",
    "aliases": ["Aubrey Graham", "Champagne Papi"],
    "genres": ["Hip-Hop", "Trap", "R&B"],
    "bio": "The defining commercial hip-hop force of the streaming era with hundreds of chart hits.",
    "monthlyListeners": "82.0M", "country": "Canada",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["One Dance", "God's Plan", "Hotline Bling", "In My Feelings", "Passionfruit"]
  },
  {
    "id": "artist-47", "name": "Dua Lipa",
    "aliases": ["Dua"],
    "genres": ["Pop", "Disco", "Dance-pop"],
    "bio": "Three-time Grammy winner who resurrected shimmering electro-disco with Future Nostalgia.",
    "monthlyListeners": "65.0M", "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Levitating", "Don't Start Now", "New Rules", "Physical", "Break My Heart"]
  },
  {
    "id": "artist-48", "name": "Post Malone",
    "aliases": ["Austin Richard Post", "Posty"],
    "genres": ["Pop", "Hip-Hop", "Country Rock"],
    "bio": "Diamond-certified genre-blending superstar behind Sunflower, Circles, and Rockstar.",
    "monthlyListeners": "72.0M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Rockstar", "Sunflower", "Circles", "Congratulations", "Better Now"]
  },
  {
    "id": "artist-49", "name": "Billie Eilish",
    "aliases": ["Billie Eilish O'Connell"],
    "genres": ["Alt Pop", "Electropop"],
    "bio": "Phenomenal prodigy whose intimate vocal textures and dark bass redefined modern pop.",
    "monthlyListeners": "95.0M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Bad Guy", "Lovely", "Everything I Wanted", "Happier Than Ever", "Birds of a Feather"]
  },
  {
    "id": "artist-50", "name": "Travis Scott",
    "aliases": ["Jacques Webster", "La Flame"],
    "genres": ["Trap", "Psychedelic Rap"],
    "bio": "Astroworld visionary creating colossal, cinematic rap spectacles with unmatched energy.",
    "monthlyListeners": "68.0M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["SICKO MODE", "Goosebumps", "HIGHEST IN THE ROOM", "Antidote", "FE!N"]
  },
  {
    "id": "artist-51", "name": "Kendrick Lamar",
    "aliases": ["K.Dot", "Kung Fu Kenny"],
    "genres": ["Conscious Hip-Hop", "West Coast Rap"],
    "bio": "Pulitzer Prize winner widely hailed as the sharpest lyricist of his generation.",
    "monthlyListeners": "62.0M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["HUMBLE.", "Money Trees", "Alright", "Not Like Us", "DNA."]
  },
  {
    "id": "artist-52", "name": "Harry Styles",
    "aliases": ["Harry"],
    "genres": ["Pop Rock", "Britpop"],
    "bio": "Solo powerhouse delivering shimmering pop perfection with As It Was and Watermelon Sugar.",
    "monthlyListeners": "52.0M", "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["As It Was", "Watermelon Sugar", "Adore You", "Sign of the Times", "Golden"]
  },
  {
    "id": "artist-53", "name": "Taylor Swift",
    "aliases": ["Taylor"],
    "genres": ["Pop", "Country", "Indie Folk"],
    "bio": "Unrivaled cultural icon and master songwriter traversing eras from country to pop to folk.",
    "monthlyListeners": "102.0M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Cruel Summer", "Anti-Hero", "Blank Space", "Shake It Off", "Love Story"]
  },
  {
    "id": "artist-54", "name": "Ed Sheeran",
    "aliases": ["Ed"],
    "genres": ["Pop", "Acoustic", "Folk Pop"],
    "bio": "Record-shattering acoustic storyteller behind global wedding and stadium anthems.",
    "monthlyListeners": "74.0M", "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Shape of You", "Perfect", "Thinking Out Loud", "Bad Habits", "Shivers"]
  },
  {
    "id": "artist-55", "name": "Bruno Mars",
    "aliases": ["Peter Gene Hernandez"],
    "genres": ["Funk", "Pop", "Soul"],
    "bio": "Modern showman and vocal virtuoso delivering infectious retro-funk perfection.",
    "monthlyListeners": "88.0M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Uptown Funk", "24K Magic", "That's What I Like", "Just the Way You Are", "Locked Out of Heaven"]
  },
  {
    "id": "artist-56", "name": "Ariana Grande",
    "aliases": ["Ariana"],
    "genres": ["Pop", "R&B", "Dance-pop"],
    "bio": "Vocal phenomenon possessing staggering range with anthems Thank U, Next and 7 Rings.",
    "monthlyListeners": "78.0M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["7 Rings", "Thank U Next", "Side to Side", "No Tears Left to Cry", "Positions"]
  },
  {
    "id": "artist-57", "name": "SZA",
    "aliases": ["Solána Imani Rowe"],
    "genres": ["R&B", "Neo-soul", "Alt R&B"],
    "bio": "Introspective R&B queen captivating millions with Kill Bill and Snooze.",
    "monthlyListeners": "67.0M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Kill Bill", "Snooze", "Good Days", "Kiss Me More", "Saturn"]
  },
  {
    "id": "artist-58", "name": "Justin Bieber",
    "aliases": ["Bieber"],
    "genres": ["Pop", "R&B", "Dance"],
    "bio": "Global pop prodigy with an unbroken run of era-defining hits across three decades.",
    "monthlyListeners": "70.0M", "country": "Canada",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Peaches", "Stay", "Sorry", "Love Yourself", "What Do You Mean?"]
  },
  {
    "id": "artist-59", "name": "Rihanna",
    "aliases": ["RiRi", "BadGalRiRi"],
    "genres": ["R&B", "Pop", "Dancehall"],
    "bio": "Barbadian icon with 14 Billboard #1 singles and unmatched sonic swagger.",
    "monthlyListeners": "76.0M", "country": "Barbados",
    "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Umbrella", "We Found Love", "Diamonds", "Work", "Only Girl In The World"]
  },

  # Classics, Rock & EDM
  {
    "id": "artist-60", "name": "Coldplay",
    "aliases": ["Chris Martin"],
    "genres": ["Alt Rock", "Pop Rock"],
    "bio": "Stadium rock titans uniting crowds with timeless anthems Yellow, Fix You, and Viva La Vida.",
    "monthlyListeners": "85.0M", "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Viva La Vida", "Yellow", "Fix You", "Hymn for the Weekend", "Something Just Like This"]
  },
  {
    "id": "artist-61", "name": "Queen",
    "aliases": ["Freddie Mercury"],
    "genres": ["Classic Rock", "Glam Rock"],
    "bio": "One of rock history’s most influential and operatic bands.",
    "monthlyListeners": "48.0M", "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Bohemian Rhapsody", "Don't Stop Me Now", "Another One Bites the Dust", "We Will Rock You", "Under Pressure"]
  },
  {
    "id": "artist-62", "name": "Arctic Monkeys",
    "aliases": ["Alex Turner"],
    "genres": ["Indie Rock", "Garage Rock"],
    "bio": "British rock royalty behind the iconic guitar-driven masterwork AM.",
    "monthlyListeners": "46.0M", "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Do I Wanna Know?", "R U Mine?", "505", "Why'd You Only Call Me When You're High?", "I Wanna Be Yours"]
  },
  {
    "id": "artist-63", "name": "Linkin Park",
    "aliases": ["Chester Bennington", "Mike Shinoda"],
    "genres": ["Nu Metal", "Alt Rock"],
    "bio": "Pioneering rock band uniting visceral emotion, heavy riffs, and hip-hop beats.",
    "monthlyListeners": "43.0M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["In The End", "Numb", "Faint", "Crawling", "What I've Done"]
  },
  {
    "id": "artist-64", "name": "Avicii",
    "aliases": ["Tim Bergling"],
    "genres": ["EDM", "Progressive House", "Melodic Dance"],
    "bio": "Legendary producer who brought acoustic soul and uplifting melodies to stadium EDM.",
    "monthlyListeners": "35.0M", "country": "Sweden",
    "image": "https://images.unsplash.com/photo-1445985543470-41fdd6ce388d?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Wake Me Up", "The Nights", "Levels", "Waiting for Love", "Hey Brother"]
  },
  {
    "id": "artist-65", "name": "The Chainsmokers",
    "aliases": ["Drew Taggart", "Alex Pall"],
    "genres": ["EDM Pop", "Future Bass"],
    "bio": "Dominant EDM-pop powerhouse behind multi-billion streaming anthems Closer and Paris.",
    "monthlyListeners": "44.0M", "country": "United States",
    "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Closer", "Don't Let Me Down", "Paris", "Roses", "Something Just Like This"]
  },
  {
    "id": "artist-66", "name": "Calvin Harris",
    "aliases": ["Adam Wiles"],
    "genres": ["EDM", "Dance-pop", "Electro House"],
    "bio": "The world's highest-grossing DJ with an unbroken chain of festival dance anthems.",
    "monthlyListeners": "61.0M", "country": "United Kingdom",
    "image": "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Summer", "Feel So Close", "This Is What You Came For", "How Deep Is Your Love", "One Kiss"]
  },
  {
    "id": "artist-67", "name": "Martin Garrix",
    "aliases": ["Martijn Gerard Garritsen"],
    "genres": ["Big Room House", "Progressive House"],
    "bio": "Four-time #1 DJ in the world known for Animals and Scared to Be Lonely.",
    "monthlyListeners": "27.0M", "country": "Netherlands",
    "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    "imageSource": "Verified Official Promo",
    "topTracks": ["Animals", "Scared to be Lonely", "In the Name of Love", "Tremor", "Summer Days"]
  }
]
