import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { BLOGS } from '../../data/blogsData';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get language from navigation state, defaulting to 'EN'
  const state = location.state as { defaultLang?: 'EN' | 'HI' } | null;
  const [lang, setLang] = useState<'EN' | 'HI'>(state?.defaultLang || 'EN');
  
  // Reading progress state
  const [scrollProgress, setScrollProgress] = useState(0);

  // Find the blog
  const blog = BLOGS.find((b) => b.id === id);

  // Monitor scroll for progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="bg-mw-cream min-h-screen flex flex-col justify-center items-center py-20 px-4">
        <div className="text-center bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-mw-gold/20 max-w-md">
          <p className="text-lg text-mw-green mb-4">⚠️ Blog Post Not Found</p>
          <Link to="/blogs" className="bg-mw-green text-white px-6 py-2 rounded-lg font-bold hover:bg-opacity-95 transition-colors">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const title = lang === 'EN' ? blog.titleEn : blog.titleHi;
  const author = lang === 'EN' ? blog.authorEn : blog.authorHi;
  const content = lang === 'EN' ? blog.contentEn : blog.contentHi;

  // Function to render content with beautiful layout and typography
  const renderContent = (text: string) => {
    // Split content by double newlines into paragraphs
    const paragraphs = text.split('\n\n');

    return paragraphs.map((paragraph, index) => {
      const trimmed = paragraph.trim();

      // Render section headers (e.g. "(A) Species to be planted", or similar headings)
      if (trimmed.startsWith('(A)') || trimmed.startsWith('(B)') || trimmed.startsWith('(C)') || trimmed.startsWith('(D)') || trimmed.startsWith('(E)')) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-serif font-bold text-mw-green mt-8 mb-4 border-b border-mw-gold/20 pb-2">
            {trimmed}
          </h3>
        );
      }

      // Render bullet items starting with •
      if (trimmed.startsWith('•')) {
        return (
          <div key={index} className="flex items-start gap-3 my-3 pl-4">
            <span className="text-mw-gold text-lg leading-none mt-1">✦</span>
            <p className="text-base text-mw-green/80 font-sans leading-relaxed">
              {trimmed.substring(1).trim()}
            </p>
          </div>
        );
      }

      // Render numbered list items starting with 1-, 2-, 3-
      const matchNumbered = trimmed.match(/^(\d+-\s*)(.*)/);
      if (matchNumbered) {
        return (
          <div key={index} className="flex items-start gap-3 my-3 pl-4">
            <span className="bg-mw-gold/10 text-mw-gold text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              {matchNumbered[1].replace('-', '').trim()}
            </span>
            <p className="text-base text-mw-green/80 font-sans leading-relaxed">
              {matchNumbered[2]}
            </p>
          </div>
        );
      }

      // Render signatures or ending credits
      if (trimmed.toLowerCase().includes('jai guru dev') || trimmed.toLowerCase().includes('jai gurudev') || trimmed.toLowerCase().includes('jai bharat')) {
        return (
          <p key={index} className="text-center font-serif text-lg font-bold text-mw-gold mt-10 tracking-widest">
            {trimmed}
          </p>
        );
      }

      // Render standard paragraph
      return (
        <p key={index} className="text-base md:text-lg leading-relaxed text-mw-green/85 font-sans mb-6 text-justify">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="bg-mw-cream min-h-screen text-mw-green/90 font-sans pb-20 relative">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-mw-gold z-50 transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Back Button & Language Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <button 
            onClick={() => navigate('/blogs')}
            className="flex items-center gap-2 text-sm font-bold text-mw-green hover:text-mw-gold transition-colors duration-300 group"
          >
            <svg 
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            {lang === 'EN' ? 'Back to all articles' : 'सभी लेखों पर वापस जाएँ'}
          </button>

          {/* Individual Article Language Toggle */}
          <div className="flex bg-white p-1 rounded-lg border border-mw-gold/15 shadow-sm">
            <button
              onClick={() => setLang('EN')}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all duration-300 ${
                lang === 'EN'
                  ? 'bg-mw-green text-white shadow-md'
                  : 'text-mw-green hover:bg-mw-green/10'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('HI')}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all duration-300 ${
                lang === 'HI'
                  ? 'bg-mw-green text-white shadow-md'
                  : 'text-mw-green hover:bg-mw-green/10'
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>

        {/* Detailed Blog Container */}
        <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-mw-gold/15 max-w-4xl mx-auto">
          
          {/* Header Image */}
          <div className="w-full aspect-[21/9] overflow-hidden bg-mw-cream relative">
            <img 
              src={`/${blog.image}`} 
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Category tag */}
            <span className="absolute bottom-4 left-4 bg-mw-gold text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {lang === 'EN' ? blog.category : (
                blog.category === 'Vedic Science' ? 'वैदिक विज्ञान' :
                blog.category === 'Meditation' ? 'ध्यान' :
                blog.category === 'Environment' ? 'पर्यावरण' :
                blog.category === 'Vedic Wisdom' ? 'वैदिक ज्ञान' : blog.category
              )}
            </span>
          </div>

          {/* Blog Content Section */}
          <div className="p-6 sm:p-10 md:p-12">
            
            {/* Metadata */}
            <div className="flex items-center gap-4 text-xs text-mw-green/60 mb-6 font-semibold pb-6 border-b border-mw-cream">
              <span className="flex items-center gap-1">
                📅 {blog.date}
              </span>
              <span className="flex items-center gap-1">
                ✍️ {author}
              </span>
              <span className="flex items-center gap-1">
                ⏱️ {lang === 'EN' ? '5 min read' : '5 मिनट पढ़ने का समय'}
              </span>
            </div>

            {/* Post Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-mw-green leading-tight mb-8">
              {title}
            </h1>

            {/* Post Content */}
            <div className="prose max-w-none">
              {renderContent(content)}
            </div>

          </div>
        </article>

        {/* Bottom CTA Card */}
        <div className="max-w-4xl mx-auto mt-12 bg-mw-green text-mw-cream p-8 rounded-3xl shadow-lg text-center">
          <h3 className="text-2xl font-serif font-bold">
            {lang === 'EN' ? 'Share in Our Vedic Vision' : 'हमारी वैदिक दृष्टि में भागीदार बनें'}
          </h3>
          <p className="mt-3 max-w-xl mx-auto text-mw-cream/80 text-sm leading-relaxed">
            {lang === 'EN' 
              ? 'Join our community of seekers, students, and practitioners committed to creating an ideal, peaceful, and blissful life on Earth.'
              : 'पृथ्वी पर एक आदर्श, शांतिपूर्ण और आनंदमय जीवन बनाने के लिए प्रतिबद्ध साधकों, छात्रों और अभ्यासियों के हमारे समुदाय में शामिल हों।'}
          </p>
          <Link 
            to="/donate" 
            className="mt-6 bg-mw-gold hover:bg-opacity-95 text-white font-bold py-3 px-8 rounded-full inline-block transition-transform transform hover:scale-105"
          >
            {lang === 'EN' ? 'Support Our Mission' : 'हमारे मिशन का समर्थन करें'}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogDetailPage;
