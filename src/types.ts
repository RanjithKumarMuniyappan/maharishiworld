
export interface NavLink {
  label: string;
  path: string;
  sublinks?: NavLink[];
}

export interface MissionPillar {
  icon: string;
  title: string;
  description: string;
}

export interface ProgrammeHighlight {
  icon: string;
  title: string;
  description: string;
  path: string;
}

export interface NewsArticle {
  image: string;
  date: string;
  synopsis: string;
  link: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  highlightedWords: string[];
}


export interface Category {
  title: string;
  description: string;
  path: string;
  icon: string;
}

export interface Sermon {
  id: number;
  title: string;
  description: string;
  speakerId: string;
  category: 'Vedic Science' | 'Meditation' | 'Health' | 'Peace' | 'Festivals';
  date: string;
  duration: string; // e.g., "45 min"
  format: ('video' | 'audio' | 'transcript')[];
  thumbnailUrl: string;
  videoUrl?: string; // Placeholder
  transcript: string;
}

export interface Speaker {
  id: string;
  name: string;
  bio: string;
  photoUrl: string;
}