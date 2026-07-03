
import { Link } from 'react-router-dom'

const JoinUs = () => {
    return (
        <section className="text-center bg-mw-green text-mw-cream p-12 rounded-lg shadow-lg">
            <h2 className="text-4xl font-serif font-bold">Join Us</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-mw-cream/80">
                Maharishi World invites everyone—students, educators, health professionals, social workers, entrepreneurs and seekers of truth and ideal blissful life—to participate in its mission. Whether you are looking for quality education, searching for natural ways to enhance health, aspiring to help in peace projects or wanting to contribute to environmental sustainability, you will find a place in our growing community. Together, we can realise Maharishi’s vision of <strong className="font-semibold text-mw-cream">Heaven on Earth</strong>.</p>
            <Link to="/donate" className="mt-8 bg-mw-gold hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full inline-block transition-transform transform hover:scale-105">
                Contribute to Our Mission
            </Link>
        </section>
    )
}

export default JoinUs