import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../commonComponents/PageHeader';
import { BLOGS } from '../../data/blogsData';
import type { Blog } from '../../data/blogsData';

const BlogsPage: React.FC = () => {
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Standardize categories
  const categories = ['All', 'Vedic Science', 'Meditation', 'Environment', 'Vedic Wisdom'];

  // Filter blogs based on search and category
  const filteredBlogs = BLOGS.filter((blog) => {
    const title = lang === 'EN' ? blog.titleEn : blog.titleHi;
    const author = lang === 'EN' ? blog.authorEn : blog.authorHi;
    const desc = lang === 'EN' ? blog.descriptionEn : blog.descriptionHi;
    
    const matchesSearch = 
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desc.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-mw-cream min-h-screen text-mw-green/90 font-sans pb-20">
      {/* Page Header */}
      <PageHeader 
        title={lang === 'EN' ? 'Vedic Insights & Knowledge' : 'वैदिक विचार और ज्ञान'} 
        description={
          lang === 'EN' 
            ? 'Explore articles, teachings, and practical guides on Vedic Science, meditation, and natural living by Maharishi Mahesh Yogi Ji and Brahmachari Girish Ji.' 
            : 'महर्षि महेश योगी जी और ब्रह्मचारी गिरीश जी द्वारा वैदिक विज्ञान, ध्यान और प्राकृतिक जीवन पर लेख, शिक्षाएं और व्यावहारिक मार्गदर्शिकाएँ।'
        } 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Controls Bar: Language, Search, Categories */}
        <div className="bg-white rounded-2xl shadow-md border border-mw-gold/10 p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* Language Switcher */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-mw-green/70">
                {lang === 'EN' ? 'Language:' : 'भाषा चुनें:'}
              </span>
              <div className="flex bg-mw-cream p-1 rounded-lg border border-mw-gold/20">
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

            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                placeholder={lang === 'EN' ? 'Search articles...' : 'लेख खोजें...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold text-mw-green text-sm bg-mw-cream/20"
              />
              <svg
                className="absolute left-3.5 top-3 w-4 h-4 text-mw-green/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-mw-cream">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-mw-gold text-white shadow-sm'
                    : 'bg-mw-cream/40 text-mw-green/80 hover:bg-mw-cream hover:text-mw-green'
                }`}
              >
                {lang === 'EN' ? cat : (
                  cat === 'All' ? 'सभी' :
                  cat === 'Vedic Science' ? 'वैदिक विज्ञान' :
                  cat === 'Meditation' ? 'ध्यान' :
                  cat === 'Environment' ? 'पर्यावरण' :
                  cat === 'Vedic Wisdom' ? 'वैदिक ज्ञान' : cat
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredBlogs.map((blog: Blog) => {
              const title = lang === 'EN' ? blog.titleEn : blog.titleHi;
              const author = lang === 'EN' ? blog.authorEn : blog.authorHi;
              const desc = lang === 'EN' ? blog.descriptionEn : blog.descriptionHi;

              return (
                <div
                  key={blog.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-mw-gold/15 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Blog Card Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-mw-cream">
                    <img
                      src={blog.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Category tag */}
                    <span className="absolute top-4 left-4 bg-mw-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {lang === 'EN' ? blog.category : (
                        blog.category === 'Vedic Science' ? 'वैदिक विज्ञान' :
                        blog.category === 'Meditation' ? 'ध्यान' :
                        blog.category === 'Environment' ? 'पर्यावरण' :
                        blog.category === 'Vedic Wisdom' ? 'वैदिक ज्ञान' : blog.category
                      )}
                    </span>
                  </div>

                  {/* Blog Card Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    {/* Date and Author */}
                    <div className="flex items-center gap-4 text-xs text-mw-green/60 mb-3 font-semibold">
                      <span className="flex items-center gap-1">
                        📅 {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        ✍️ {author}
                      </span>
                    </div>

                    {/* Blog Title */}
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-mw-green mb-3 line-clamp-2 hover:text-mw-gold transition-colors duration-300">
                      <Link to={`/blogs/${blog.id}`} state={{ defaultLang: lang }}>
                        {title}
                      </Link>
                    </h3>

                    {/* Blog Short Description (~35 words) */}
                    <p className="text-sm leading-relaxed text-mw-green/75 mb-6 line-clamp-3">
                      {desc}
                    </p>

                    {/* Card Actions */}
                    <div className="mt-auto pt-4 border-t border-mw-cream/60 flex items-center justify-between">
                      <span className="text-xs font-medium text-mw-gold">
                        {lang === 'EN' ? '5 min read' : '5 मिनट पढ़ने का समय'}
                      </span>
                      <Link
                        to={`/blogs/${blog.id}`}
                        state={{ defaultLang: lang }}
                        className="flex items-center gap-1 text-xs font-bold text-mw-green hover:text-mw-gold transition-all duration-300 group/link"
                      >
                        {lang === 'EN' ? 'Read Full Article' : 'पूरा लेख पढ़ें'}
                        <svg
                          className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-mw-gold/15 shadow-md">
            <p className="text-lg text-mw-green/60 mb-2">
              {lang === 'EN' ? 'No articles found matching your query.' : 'आपकी खोज के अनुसार कोई लेख नहीं मिला।'}
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-sm font-bold text-mw-gold hover:underline"
            >
              {lang === 'EN' ? 'Clear Filters' : 'फ़िल्टर हटाएँ'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
