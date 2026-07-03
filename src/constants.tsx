
import type { NavLink, MissionPillar, ProgrammeHighlight, NewsArticle, Testimonial, Speaker, Sermon } from './types';



// Icons
export const PeaceIcon = () => (
  <svg className="w-16 h-16 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 0 0 9-9h-9V3a9 9 0 0 0-9 9a9 9 0 0 0 9 9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18" /></svg>
);

export const EducationIcon = () => (
    <svg className="w-16 h-16 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
);

export const SelfRelianceIcon = () => (
    <svg className="w-16 h-16 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22l-.648-1.437a4.5 4.5 0 01-3.09-3.09L10.5 16.25l1.437-.648a4.5 4.5 0 013.09 3.09L16.25 20l.648.562z" /></svg>
);

export const NatureIcon = () => (
    <svg className="w-16 h-16 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

export const SocialMediaIcons = () => (
  <div className="flex space-x-4">
    <a href="#" className="text-mw-cream hover:text-mw-gold"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.27 0 .34.04.67.11.98-3.56-.18-6.72-1.88-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.79 1.9 3.55-.7-.02-1.37-.22-1.95-.55v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.73.15-1.12.15-.27 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97-1.45 1.13-3.28 1.8-5.26 1.8-.34 0-.68-.02-1.01-.06 1.88 1.2 4.12 1.9 6.56 1.9 7.85 0 12.15-6.5 12.15-12.15 0-.18 0-.37-.01-.55.83-.6 1.56-1.35 2.14-2.22z" /></svg></a>
    <a href="#" className="text-mw-cream hover:text-mw-gold"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.52 4.5 10.02 10 10.02 5.52 0 10-4.5 10-10.02C22 6.53 17.52 2.04 12 2.04zM12 20.1c-4.47 0-8.1-3.63-8.1-8.1s3.63-8.1 8.1-8.1 8.1 3.63 8.1 8.1-3.63 8.1-8.1 8.1z" /><path d="M12 6.88c-2.85 0-3.22.01-4.34.06-1.12.05-1.89.28-2.56.55-.67.27-1.22.6-1.77 1.14-.55.55-.87 1.1-1.14 1.77-.27.67-.5 1.44-.55 2.56-.05 1.12-.06 1.49-.06 4.34s.01 3.22.06 4.34c.05 1.12.28 1.89.55 2.56.27.67.6 1.22 1.14 1.77.55.55 1.1.87 1.77 1.14.67.27 1.44.5 2.56.55 1.12.05 1.49.06 4.34.06s3.22-.01 4.34-.06c1.12-.05 1.89-.28 2.56-.55.67-.27 1.22-.6 1.77-1.14.55-.55.87-1.1 1.14-1.77.27-.67.5-1.44.55-2.56.05-1.12.06-1.49.06-4.34s-.01-3.22-.06-4.34c-.05-1.12-.28-1.89-.55-2.56-.27-.67-.6-1.22-1.14-1.77-.55-.55-1.1-.87-1.77-1.14-.67-.27-1.44-.5-2.56-.55-1.12-.05-1.49-.06-4.34-.06zm0 1.64c2.78 0 3.14.01 4.24.06 1.01.05 1.5.25 1.8.38.38.16.63.36.9.63.27.27.47.52.63.9.13.3.33.79.38 1.8.05 1.1.06 1.46.06 4.24s-.01 3.14-.06 4.24c-.05 1.01-.25 1.5-.38 1.8-.16.38-.36.63-.63.9-.27.27-.52.47-.9.63-.3.13-.79.33-1.8.38-1.1.05-1.46.06-4.24-.06s-3.14-.01-4.24-.06c-1.01-.05-1.5-.25-1.8-.38-.38-.16-.63-.36-.9-.63-.27-.27-.47-.52-.63-.9-.13-.3-.33-.79-.38-1.8-.05-1.1-.06-1.46-.06-4.24s.01-3.14.06-4.24c.05-1.01.25-1.5.38-1.8.16-.38.36.63.63-.9.27-.27.52.47.9-.63.3-.13.79.33 1.8.38 1.1-.05 1.46-.06 4.24-.06z" /><path d="M12 9.77c-1.29 0-2.33 1.04-2.33 2.33s1.04 2.33 2.33 2.33 2.33-1.04 2.33-2.33-1.04-2.33-2.33-2.33zm0 3.8c-.81 0-1.47-.66-1.47-1.47s.66-1.47 1.47-1.47 1.47.66 1.47 1.47-.66 1.47-1.47 1.47z" /><circle cx="16.94" cy="7.06" r=".97" /></svg></a>
    <a href="#" className="text-mw-cream hover:text-mw-gold"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.2 8.4h-1.8v-1.6c0-.5.1-.9.9-1 .8-.1 1.7 0 1.7 0V3.2s-1.1-.2-2.2-.2c-2.5 0-4.1 1.4-4.1 4.1v2.9H9.2v2.9h1.6V22h3.4v-7.8h2.3l.4-2.9h-2.7V9.1c0-.4.1-.7.7-.7z" /></svg></a>
  </div>
);

// Data
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/aboutus' },
  {
    label: 'Educational',
    path: '/education',
    sublinks: [
      { label: 'Kids', path: '/education/kids' },
      { label: 'School', path: '/education/school' },
      { label: 'Higher', path: '/education/higher' },
      { label: 'Corporate', path: '/education/corporate' },
      { label: 'Vedic Science', path: '/education/vedic-science' },
      { label: 'Skill Development', path: '/education/skill-development' },
    ]
  },
  { label: 'Healthcare', path: '/healthcare' },
  { label: 'Movement', path: '/movement' },
  { label: 'Media & PR', path: '/media' },
  { label: 'TM', path: '/tm' },
  { label: 'Goushala', path: '/goushala' },
  // { label: 'Donation/Philanthropy', path: '/donate' },
  { label: 'Sermons', path: '/sermons' },
  { label: 'Blogs', path: '/blogs' },
];

export const MISSION_PILLARS: MissionPillar[] = [
  { icon: "icons/Promote Bliss and Peace.svg", title: 'Promote Bliss and Peace', description: 'Awaken the cosmic dimension of life.' },
  // { icon: "icons/Deliver Holistic Education.svg", title: 'Deliver Holistic Education', description: 'Integrating modern curriculum with Vedic Science and TM.' },
  { icon: "icons/Deliver Holistic Education.svg", title: 'Deliver Holistic Education', description: 'Integrating modern curriculum with Vedic Science and Technologies.' },
  { icon: "icons/Foster Self-Reliance.svg", title: 'Foster Self-Reliance', description: 'Empowering individuals and communities.' },
  { icon: "icons/Harmony with Nature.svg", title: 'Harmony with Nature', description: 'Promoting sustainable and eco-friendly practices.' },
];

export const PROGRAMME_HIGHLIGHTS: ProgrammeHighlight[] = [
    { icon: "icons/Early & School Education.svg", title: 'Early & School Education', description: '154 schools and 90,000+ students in a holistic system.', path: '/education/school' },
    { icon: "icons/Higher Education.svg", title: 'Higher Education', description: 'Maharishi Institutes of Management and Technology.', path: '/education/higher' },
    { icon: "icons/Vedic Education.svg", title: 'Vedic Education', description: 'Training the next generation of Vedic scholars.', path: '/education/vedic-science' },
    { icon: "icons/Corporate & Skill Development.svg", title: 'Corporate & Skill Development', description: 'Corporate Development Programmes and skill training.', path: '/education/corporate' },
    { icon: "icons/Health & Wellness.svg", title: 'Health & Wellness', description: 'Maharishi Vedic Health Centre and Svaasthy Vigyaan Sansthaan.', path: '/healthcare' },
    { icon: "icons/Peace & Culture.svg", title: 'Peace & Culture', description: 'Bliss Residency, Ideal India Campaign, World Peace Movement.', path: '/movement' },
    { icon: "icons/Media & Publications.svg", title: 'Media & Publications', description: 'Digital media, news, Ramraj TV, and Ved Vigyan Prakashan.', path: '/media' },
    { icon: "icons/Environmental & Goushala.svg", title: 'Environmental & Goushala', description: 'Gaushaala training centre, Nursery, and Vedic Greens.', path: '/goushala' },
    { icon: "icons/Transcendental Meditation.svg", title: 'Transcendental Meditation', description: 'Simple, natural, effortless technique for inner peace and wellness.', path: '/tm' },
];

export const LATEST_NEWS: NewsArticle[] = [
  { image: 'images/home/latest_news/October_18.jpg', date: 'October 26, 2023', synopsis: 'Global Peace Initiative launched in 10 countries, promoting group meditation.', link: 'JavaScript:void(0)' },
  { image: 'images/home/latest_news/October_22.webp', date: 'October 22, 2023', synopsis: 'New Maharishi Vedic Health Centre opens its doors in the Himalayas.', link: 'JavaScript:void(0)' },
  { image: 'images/home/latest_news/October 26_1.webp', date: 'October 18, 2023', synopsis: 'MVM Schools celebrate annual day with cultural performances and Vedic chanting.', link: 'JavaScript:void(0)' },
];

export const TESTIMONIALS: Testimonial[] = [
    { quote: 'The Consciousness-Based Education system has not only improved my academic performance but also brought a deep sense of inner calm and happiness. It has truly been a transformative experience.', highlightedWords: ['transformative', 'calm', 'happiness'], author: 'Priya Sharma', role: 'Student, MVM School' },
    { quote: 'Implementing the Maharishi Corporate Development Programme has led to a remarkable increase in creativity and a significant reduction in employee stress. Our workplace is more harmonious and productive.', highlightedWords: ['creativity', 'reduction in stress', 'harmonious'], author: 'Rajesh Kumar', role: 'CEO, Tech Solutions Inc.' },
    { quote: 'Learning Transcendental Meditation was the best decision of my life. It provides a sanctuary of peace in my busy day, helping me to be more focused, energetic, and resilient.', highlightedWords: ['sanctuary of peace', 'focused', 'resilient'], author: 'Anjali Mehta', role: 'Corporate Trainee' },
];




export const AboutUsTitle :string = "About Maharishi World";
export const AboutUsDescription: string = "Discover our story, our inspiration, and our vision for a better world.";
export const EducationTitle : string = "Education: The Heart of Maharishi World";
export const EducationDescription : string = "From early childhood through university and beyond, our institutions integrate modern curricula with Maharishi Vedic Science and the practice of Transcendental Meditation (TM) to unlock each student's full potential. Across India, our network of schools, colleges and training programmes serve tens of thousands of students and professionals, fostering academic excellence, personal growth and social responsibility.";

export const EarlyChildhoodTitle:string = "Early Childhood (Kids)";
export const EarlyChildhoodDescription:string = "Nurturing young minds in a loving, eco-friendly environment.";
export const SchoolEductaionTitle:string = "School Education (Primary & Secondary)";
export const SchoolEductaionDescription:string = "Developing well-rounded individuals who excel academically and radiate harmony.";
export const HigherEductionTitle:string = "Higher Education";
export const HigherEductionDescription:string = "Training future leaders with consciousness-based principles.";
export const CorporateEducationTitle:string = "Corporate Education";
export const CorporateEducationDescription:string = "Enhancing productivity and well-being in the workplace.";
export const VedicEducationTitle:string = "Vedic Education";
export const VedicEducationDescription:string = "Fostering inner purity and deep comprehension of Vedic scriptures.";
export const SkillDevelopmentTitle:string = "Skill Development";
export const SkillDevelopmentDescription:string = "Bridging the gap between education and employment.";

export const HealthcareTitle:string = "Healthcare";
export const HealthcareDescription:string = "A Vedic Approach to Health and Well-being.";



// ====================================
// Icons


// Sermon Category Icons
export const VedicScienceIcon = () => <svg className="w-10 h-10 text-mw-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.098 19.902a3.75 3.75 0 005.304 0l6.402-6.402a3.75 3.75 0 00-5.304-5.304L4.098 14.6a3.75 3.75 0 000 5.304z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-6.402 6.402a3.75 3.75 0 005.304 5.304l6.402-6.402a3.75 3.75 0 000-5.304z" /></svg>;
export const MeditationIcon = () => <svg className="w-10 h-10 text-mw-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const HealthIconConst = () => <svg className="w-10 h-10 text-mw-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
export const PeaceIconConst = () => <svg className="w-10 h-10 text-mw-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 0 0 9-9h-9V3a9 9 0 0 0-9 9a9 9 0 0 0 9 9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18" /></svg>;
export const FestivalIcon = () => <svg className="w-10 h-10 text-mw-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v.01M12 6v.01M6 12h.01M18 12h.01M7.05 7.05l.01.01M16.95 16.95l.01.01M7.05 16.95l.01-.01M16.95 7.05l.01-.01" /></svg>;
export const AudioIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.879 12H4v-1.121c0-.53.21-1.039.586-1.414l2.828-2.828A2 2 0 019.121 6H12a1 1 0 011 1v8a1 1 0 01-1 1H9.121a2 2 0 01-1.414-.586L4.88 13.586A2 2 0 014 13.121V12z" /></svg>;
export const VideoIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
export const TranscriptIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;



export const SPEAKERS: Speaker[] = [
  { id: 'mmy', name: 'Maharishi Mahesh Yogi', bio: 'Founder of the Transcendental Meditation program and the worldwide Spiritual Regeneration Movement.', photoUrl: 'images/sermons/our_speaker/Maharishi Mahesh Yogi.webp' },
  { id: 'bgj', name: 'Brahmachari Girish Ji', bio: 'A long-time disciple of Maharishi and the guiding light of Maharishi World in India.', photoUrl: 'images/sermons/our_speaker/Brahmachari Girish Ji.webp' },
  { id: 'vs', name: 'Vedic Scholars', bio: 'Esteemed scholars and pandits from our Vedic universities, sharing deep insights into ancient scriptures.', photoUrl: 'images/sermons/our_speaker/Vedic Scholars.webp' },
];

export const SERMONS: Sermon[] = [
    { id: 1, title: 'The Science of Being and Art of Living', description: 'An exploration of the fundamental principles of life, consciousness, and the universe.', speakerId: 'mmy', category: 'Vedic Science', date: '2023-10-15', duration: '62 min', format: ['video', 'audio', 'transcript'], thumbnailUrl: 'images/sermons/sermon_library/The Science of Being and Art of Living.webp', transcript: 'This is a summary of the talk...' },
    { id: 2, title: 'Effortless Path to Enlightenment', description: 'Understanding how Transcendental Meditation naturally unfolds higher states of consciousness.', speakerId: 'mmy', category: 'Meditation', date: '2023-09-20', duration: '48 min', format: ['video', 'audio'], thumbnailUrl: 'images/sermons/sermon_library/Effortless Path to Enlightenment.webp', transcript: 'This is a summary of the talk...' },
    { id: 3, title: 'Living in Tune with Natural Law', description: 'Practical guidance on applying Vedic principles for a harmonious and successful life.', speakerId: 'bgj', category: 'Vedic Science', date: '2023-11-01', duration: '35 min', format: ['video', 'transcript'], thumbnailUrl: 'images/sermons/sermon_library/Living in Tune with Natural Law.webp', transcript: 'This is a summary of the talk...' },
    { id: 4, title: 'Ayurveda for Modern Life', description: 'How to maintain balance and health in a fast-paced world using ancient Ayurvedic wisdom.', speakerId: 'vs', category: 'Health', date: '2023-10-28', duration: '55 min', format: ['audio', 'transcript'], thumbnailUrl: 'images/sermons/sermon_library/Ayurveda for Modern Life.webp', transcript: 'This is a summary of the talk...' },
    { id: 5, title: 'The Maharishi Effect: Creating World Peace', description: 'The science behind how group meditation reduces societal stress and creates coherence.', speakerId: 'mmy', category: 'Peace', date: '2023-08-10', duration: '75 min', format: ['video', 'audio', 'transcript'], thumbnailUrl: 'images/sermons/sermon_library/The Maharishi Effect Creating World Peace.webp', transcript: 'This is a summary of the talk...' },
    { id: 6, title: 'The Role of a Guru in Spiritual Life', description: 'A Guru Purnima discourse on the significance of the master-disciple relationship.', speakerId: 'bgj', category: 'Festivals', date: '2023-07-03', duration: '40 min', format: ['video'], thumbnailUrl: 'images/sermons/sermon_library/The Role of a Guru in Spiritual Life.webp', transcript: 'This is a summary of the talk...' },
    { id: 7, title: 'Unlocking Creativity Through TM', description: 'Discover how transcending opens the mind to a reservoir of creativity and intelligence.', speakerId: 'mmy', category: 'Meditation', date: '2023-09-05', duration: '30 min', format: ['audio', 'transcript'], thumbnailUrl: 'images/sermons/sermon_library/Unlocking Creativity Through TM.webp', transcript: 'This is a summary of the talk...' },
    { id: 8, title: 'Vastu: Architecture in Accord with Nature', description: 'An introduction to the principles of Vedic architecture for health and prosperity.', speakerId: 'vs', category: 'Vedic Science', date: '2023-11-10', duration: '50 min', format: ['video', 'transcript'], thumbnailUrl: 'images/sermons/sermon_library/Vastu Architecture in Accord with Nature.webp', transcript: 'This is a summary of the talk...' },
];