import { Link } from "react-router-dom";
import SectionTitle from "../../commonComponents/SectionTitle";

const BlissfulWorldPlan = () => {
  const goals = [
        { icon: "images/movement/icons/Awaken the Individual.webp", title: 'Awaken the Individual', desc: 'Promoting inner peace and bliss through Transcendental Meditation.' },
        { icon: "images/movement/icons/Sustainable Living.webp", title: 'Sustainable Living', desc: 'Fostering harmony with nature through organic agriculture and Vedic ecology.' },
        { icon: "images/movement/icons/Holistic Education.webp", title: 'Holistic Education', desc: 'Integrating Consciousness-Based Education into all levels of learning.' },
        { icon: "images/movement/icons/Preventive Healthcare.webp", title: 'Preventive Healthcare', desc: 'Promoting perfect health and longevity with Maharishi Ayurveda.' },
        { icon: "images/movement/icons/Reviving Culture.webp", title: 'Reviving Culture', desc: 'Enlivening Vedic traditions in architecture, arts, and daily life.' },
        { icon: "images/movement/icons/Prosperous Economy.webp", title: 'Prosperous Economy', desc: 'Creating self-sufficiency and abundance based on Natural Law.' },
        { icon: "images/movement/icons/Ideal Governance.webp", title: 'Ideal Governance', desc: 'Administering society from the unified field of consciousness.' },
    ];

    return (
        <section id="blissful-world-plan" className="py-20 bg-mw-green/5">
            <div className="container mx-auto px-4">
                <SectionTitle>Blissful World Plan</SectionTitle>
                <p className="text-center max-w-3xl mx-auto mt-4 text-lg text-mw-green/90">A Vision for Global Upliftment</p>
                <div className="flex flex-col lg:flex-row items-center gap-12 mt-12 max-w-6xl mx-auto">
                    <div className="lg:w-1/2">
                        <img src="images/movement/Blissful World Plan.webp" alt="Globe radiating light" className="rounded-lg shadow-xl"/>
                    </div>
                    <div className="lg:w-1/2 space-y-4 text-lg text-mw-green/90">
                        <p>The Blissful World Plan is a comprehensive strategy to awaken the full potential of individuals and create stress-free, harmonious communities. It integrates Transcendental Meditation, Consciousness-Based Education, sustainable living, and Vedic cultural heritage to build a society where every person enjoys health, happiness, and success.</p>
                        <p>The plan is rolling out across all Maharishi institutions, creating model communities that demonstrate the principles of living in tune with Natural Law.</p>
                    </div>
                </div>

                <h3 className="text-3xl font-serif font-bold text-mw-green text-center mt-20">The Seven Goals</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
                    {goals.map((goal, index) => (
                        <div key={goal.title} className={`p-6 rounded-lg shadow-lg flex items-start space-x-4 ${index % 2 === 0 ? 'bg-white' : 'bg-mw-cream'}`}>
                            <div className="text-mw-gold flex-shrink-0 mt-1 bw_plan_icon_container">
                                <img src={goal.icon} alt="" />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-mw-green text-xl">{goal.title}</h4>
                                <p className="text-mw-green/80 mt-1">{goal.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                 <div className="mt-20 bg-white p-8 md:p-12 rounded-lg shadow-2xl text-center max-w-4xl mx-auto">
                    <h3 className="text-3xl font-serif font-bold text-mw-gold">Launch Event Spotlight</h3>
                    <p className="mt-4 text-lg text-mw-green/90">Join us for a historic two-day launch event on the 24th and 25th of this month! The agenda includes group meditations, workshops on the science behind the Maharishi Effect, and inspiring cultural performances. Experience the wave of bliss and learn how you can be a part of this global transformation.</p>
                    <Link to="/donate" className="mt-6 bg-mw-gold hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full inline-block transition-transform transform hover:scale-105">
                        Register Now
                    </Link>
                </div>

                <div className="text-center mt-20">
                    <h3 className="text-3xl font-serif font-bold text-mw-green">Become an Ambassador of Bliss</h3>
                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/donate" className="bg-mw-green hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full">Register for Launch Event</Link>
                        <Link to="/donate" className="bg-mw-green hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full">Become a Volunteer</Link>
                        <Link to="/donate" className="bg-mw-green hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full">Donate to the Plan</Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default BlissfulWorldPlan