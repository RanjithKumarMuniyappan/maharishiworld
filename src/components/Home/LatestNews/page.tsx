
import { LATEST_NEWS } from '../../../constants'

const LatestNews = () => {
    return (
        <section className="py-20 bg-mw-cream/50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif font-bold text-mw-green text-center">Latest News & Updates</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {LATEST_NEWS.map((article) => (
                        <div key={article.date} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                            <img src={article.image} alt="News thumbnail" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="p-6">
                                <p className="text-sm text-mw-green/60">{article.date}</p>
                                <p className="mt-2 text-mw-green/90">{article.synopsis}</p>
                                <a href={article.link} className="text-mw-blue font-bold mt-4 inline-block hover:underline">Read Full Article &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 bg-mw-green text-mw-cream p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-serif font-bold">Subscribe to our E-Gyan Newsletter</h3>
                    <p className="mt-2 text-mw-cream/80">Get the latest updates and insights delivered to your inbox.</p>
                    <form className="mt-6 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                        <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-md text-mw-green focus:outline-none focus:ring-2 focus:ring-mw-gold" />
                        <button type="submit" className="bg-mw-gold text-white font-bold px-6 py-2 rounded-md hover:bg-opacity-90">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LatestNews