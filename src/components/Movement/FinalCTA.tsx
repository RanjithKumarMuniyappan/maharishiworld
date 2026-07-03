import { Link } from "react-router-dom"

const FinalCTA = () => {
  return (
    <section className="bg-mw-green text-mw-cream py-20 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold">Support the Movements</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-mw-cream/80">
                Your support is vital to expanding these transformative programmes. Help us create a more peaceful and blissful world for all.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/donate" className="bg-mw-gold hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full">Donate to Blissful World Plan</Link>
                <Link to="/donate" className="bg-mw-blue hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full">Donate to Peace Centres</Link>
                <Link to="/donate" className="border-2 border-mw-cream hover:bg-mw-cream hover:text-mw-green font-bold py-3 px-8 rounded-full">Volunteer or Contact Us</Link>
            </div>
        </div>
    </section>
  )
}

export default FinalCTA