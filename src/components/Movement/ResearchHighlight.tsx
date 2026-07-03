
import { Link } from 'react-router-dom'

const ResearchHighlight = () => {
  return (
    <section className="bg-mw-green/10 py-12">
        <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-serif font-bold text-mw-green">Backed by Science</h3>
            <p className="mt-2 text-lg max-w-3xl mx-auto text-mw-green/90">Over 600 scientific studies have documented the benefits of Transcendental Meditation, with dozens published in leading peer-reviewed journals on the societal benefits of the Maharishi Effect.</p>
            <Link to="/about" className="mt-4 text-mw-blue font-bold inline-block hover:underline">
                See the Research &rarr;
            </Link>
        </div>
    </section>
  )
}

export default ResearchHighlight