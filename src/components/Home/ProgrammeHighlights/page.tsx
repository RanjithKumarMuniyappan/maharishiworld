
import { PROGRAMME_HIGHLIGHTS } from '../../../constants'
import { Link } from 'react-router-dom'

const ProgrammeHighlights = () => {
  return (
    <section className="py-20 bg-mw-cream">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-bold text-mw-green">Our Core Activities</h2>
            <p className="mt-2 text-lg text-mw-green/80 max-w-2xl mx-auto">Explore the diverse initiatives that form the heart of our global mission.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
                {PROGRAMME_HIGHLIGHTS.map((program, index) => (
                    <div key={program.title} className={`p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 ${index % 2 === 0 ? 'bg-white' : 'bg-mw-green/5'}`}>
                        <div className="flex items-center space-x-4">
                            {/* {program.icon} */}
                            <img src={program.icon} alt="" className='w-16 h-16' />
                            <h3 className="text-xl font-serif font-bold text-mw-green">{program.title}</h3>
                        </div>
                        <p className="mt-4 text-mw-green/80">{program.description}</p>
                        <Link to={program.path} className="text-mw-blue font-bold mt-6 inline-block hover:underline">
                            Explore &rarr;
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProgrammeHighlights