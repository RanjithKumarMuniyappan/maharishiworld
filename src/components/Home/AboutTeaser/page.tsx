
import { Link } from 'react-router-dom'

const AboutTeaser = () => {
    return (
        <section id="about" className="py-20 bg-mw-cream/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M25%2050a25%2025%200%201050%200%2025%2025%200%2010-50%200zm25%2015a15%2015%200%20100-30%2015%2015%200%20000%2030z%22%20fill%3D%22%232E4A2C%22%20opacity%3D%220.03%22/%3E%3C/svg%3E')] bg-repeat"></div>
            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <img src="images/home/Our Inspiration.webp" alt="Maharishi Mahesh Yogi" className="rounded-lg shadow-2xl object-cover" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-mw-green">Our Inspiration</h2>
                        <p className="mt-4 text-lg leading-relaxed text-mw-green/90">
                            Maharishi World is guided by the profound wisdom of Maharishi Mahesh Yogi and the continuing leadership of Brahmachari Girish Ji. Our philosophy is rooted in Consciousness-Based Education, a system that integrates the development of students' full potential with academic excellence. By incorporating the Transcendental Meditation technique, we unlock creativity, intelligence, and happiness from within.
                        </p>
                        <Link to="/aboutus" className="text-mw-gold font-bold mt-6 inline-block hover:underline">
                            Read More &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTeaser