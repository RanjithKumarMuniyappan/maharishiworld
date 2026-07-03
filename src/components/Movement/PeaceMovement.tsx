
import { Link } from 'react-router-dom';
import SectionTitle from '../../commonComponents/SectionTitle';

const PeaceMovement = () => {
  const programs = [
        { title: 'Peace Assemblies', desc: 'Join large group meditations to create powerful coherence effects for your region and the world.', icon: "images/movement/peace_icons/Peace Assemblies.webp" },
        { title: 'Peace Volunteer Training', desc: 'Become a trained leader to organize group meditations and community peace initiatives.', icon: "images/movement/peace_icons/Peace Volunteer Training.webp" },
        { title: 'Permanent Peace Centres', desc: 'Support the establishment of permanent groups of advanced practitioners in strategic global locations.', icon: "images/movement/peace_icons/Permanent Peace Centres.webp" },
        { title: 'Research & Outreach', desc: 'Help share the extensive scientific research demonstrating the Maharishi Effect on society.', icon: "images/movement/peace_icons/Research & Outreach.webp" },
    ];

    return (
        <section id="peace-movement" className="py-20 bg-mw-cream">
            <div className="container mx-auto px-4">
                 <SectionTitle>Maharishi World Peace Movement</SectionTitle>
                 <p className="text-center max-w-3xl mx-auto mt-4 text-lg text-mw-green/90">Creating Collective Coherence</p>

                 <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mt-12 max-w-6xl mx-auto">
                    <div className="lg:w-1/2">
                        <img src="images/movement/Maharishi World Peace Movement.webp" alt="Diagram showing ripples of coherence" className="rounded-lg shadow-xl"/>
                    </div>
                    <div className="lg:w-1/2 space-y-4 text-lg text-mw-green/90">
                        <p>A global initiative founded by Brahmachari Girish Ji on 18th July 2008 based on the Vedic principles as brought to light by Maharishi Mahesh Yogi Ji to raise enough coherence in collective consciousness of the world and to create a stress-free, problem free peaceful world.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto">
                    {programs.map(program => (
                        <div key={program.title} className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                            {/* <div className="text-mw-blue flex-shrink-0 mt-1">{program.icon}</div> */}
                            <div className="text-mw-gold flex-shrink-0 mt-1 bw_plan_icon_container">
                                <img src={program.icon} alt="" />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-mw-green text-xl">{program.title}</h4>
                                <p className="text-mw-green/80 mt-1">{program.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-mw-gold/10 p-8 md:p-12 rounded-lg max-w-5xl mx-auto">
                    <h3 className="text-3xl font-serif font-bold text-mw-green text-center">How You Can Contribute</h3>
                    <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                        <li className="flex items-center"><span className="text-mw-gold mr-3">&#10148;</span><Link to="/tm" className="hover:underline">Learn Transcendental Meditation</Link></li>
                        <li className="flex items-center"><span className="text-mw-gold mr-3">&#10148;</span><Link to="/donate" className="hover:underline">Join local group meditations</Link></li>
                        <li className="flex items-center"><span className="text-mw-gold mr-3">&#10148;</span><Link to="/donate" className="hover:underline">Volunteer as a peace coordinator</Link></li>
                        <li className="flex items-center"><span className="text-mw-gold mr-3">&#10148;</span><Link to="/donate" className="hover:underline">Support peace centres through donations</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default PeaceMovement