import SectionTitle from "../../commonComponents/SectionTitle"


const Testimonials = () => {
  return (
    <section className="py-20 bg-mw-green/5">
        <div className="container mx-auto px-4">
            <SectionTitle>Voices of Change</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-lg text-mw-green/90 italic">"Participating in the peace assembly was a profound experience. You could feel a tangible shift in the atmosphere—a deep silence and harmony. It’s amazing to know we are contributing to world peace just by meditating together."</p>
                    <p className="mt-4 text-right font-bold text-mw-green">— Anand P., Peace Assembly Participant</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                     <p className="text-lg text-mw-green/90 italic">"The Blissful World Plan isn't just a concept; it's a practical roadmap. The focus on holistic development has brought so much positivity to our school community. The children are calmer, more focused, and happier."</p>
                    <p className="mt-4 text-right font-bold text-mw-green">— Sunita D., MVM School Principal</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                     <p className="text-lg text-mw-green/90 italic">"Since a permanent peace group was established near our city, the changes have been noticeable. There’s a greater sense of community and optimism. The research is real—this technology for peace truly works."</p>
                    <p className="mt-4 text-right font-bold text-mw-green">— Ramesh S., Community Leader</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials