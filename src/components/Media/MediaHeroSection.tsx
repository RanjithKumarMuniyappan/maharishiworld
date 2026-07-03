

const MediaHeroSection = () => {
  return (
    <div className="relative bg-mw-green/5 py-24 text-center overflow-hidden">
        <img src="https://picsum.photos/1600/500?random=media-bg" alt="Broadcasting equipment" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-mw-cream to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-mw-green">Media & Public Relations</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto font-sans text-mw-green/90">Sharing Vedic knowledge, news, and culture with the world.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#subscribe" className="bg-mw-blue hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
                    Subscribe to Our Channels
                </a>
                <a href="#contact" className="bg-mw-green hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
                    Contact Media Relations
                </a>
            </div>
        </div>
    </div>
  )
}

export default MediaHeroSection