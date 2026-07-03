

const HeroBanner = () => {
    return (
        <section className="relative h-[80vh] min-h-[500px] text-white flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <img src="/images/home/hero_banner.webp" alt="Serene sunrise over a Vedic campus" className="absolute inset-0 w-full h-full object-cover mw_hero_sec" />
            <div className="mw_hero_sec_content relative z-20 container mx-auto px-4">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                        Awakening Inner Potential
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto ">
                        Creating a peaceful, blissful and prosperous world through Consciousness-Based approach to life and Vedic wisdom, as brought to light by His Holiness Maharishi Mahesh Yogi.
                    </p>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                    <a href="#aboutus" className="bg-mw-blue hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
                        Learn More
                    </a>
                    {/* <Link to="/donate" className="bg-mw-gold hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
                        Donate Now
                    </Link> */}
                </div>
            </div>
        </section>
    )
}

export default HeroBanner