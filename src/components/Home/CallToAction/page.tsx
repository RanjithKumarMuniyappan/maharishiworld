import { Link } from "react-router-dom"


const CallToAction = () => {
    return (
        <section className="bg-mw-green text-white py-20 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif font-bold">Support Our Mission</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-mw-cream/80">
                    Your contribution supports scholarships, healthcare, peace initiatives, and rural development. Join us in creating a better world.
                </p>
                <Link to="/donate" className="mt-8 bg-mw-gold hover:bg-opacity-90 text-white font-bold py-4 px-10 rounded-full inline-block transition-transform transform hover:scale-105 text-lg">
                    Contribute
                </Link>
            </div>
        </section>
    )

}
export default CallToAction
