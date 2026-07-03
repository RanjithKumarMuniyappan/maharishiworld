import SectionTitle from "../../../commonComponents/SectionTitle"

const OurPhilosophy = () => {
    return (
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
            <SectionTitle>Our Philosophy</SectionTitle>
            {/* <p className="text-center max-w-4xl mx-auto text-lg mb-12 leading-relaxed">At Maharishi World, education is not merely the transfer of information; it is a process of <strong className="font-semibold text-mw-green">awakening the total creative intelligence</strong> inherent in every human being. We call this <strong className="font-semibold text-mw-green">Consciousness-Based Education</strong>. It harmoniously integrates:</p> */}
            <p className="text-center max-w-4xl mx-auto text-lg mb-12 leading-relaxed">At Maharishi World, education is not merely the transfer of information; it is a process of <strong className="font-semibold text-mw-green">awakening the total creative intelligence</strong> inherent in every human being. We call this <strong className="font-semibold text-mw-green">Consciousness-Based Education.</strong>. It harmoniously integrates:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="border-t-4 border-mw-gold pt-6">
                    <h4 className="text-xl font-serif font-bold text-mw-green mb-2">Traditional Learning</h4>
                    <p>In sciences, humanities and vocational fields.</p>
                </div>
                <div className="border-t-4 border-mw-gold pt-6">
                    <h4 className="text-xl font-serif font-bold text-mw-green mb-2">Maharishi Vedic Science</h4>
                    <p>Revealing the underlying laws of nature governing the universe and human life.</p>
                </div>
                <div className="border-t-4 border-mw-gold pt-6">
                    <h4 className="text-xl font-serif font-bold text-mw-green mb-2">Transcendental Meditation & Yoga</h4>
                    <p>Providing a direct experience of unbounded awareness and nurturing balance.</p>
                </div>
            </div>
            <p className="text-center max-w-4xl mx-auto text-lg mt-12 leading-relaxed">This holistic approach extends beyond classrooms. Our health programmes focus on preventing diseases and restoring balance through holistic health approach including Ayurveda, Meditation, Yoga, Naturopathy, Vedic Sound Therapy, Music Therapy, Mantra Therapy, Astrology, Yagyanushthan and principles of ideal living. Our social initiatives promote self-sufficiency and cooperation with nature—encouraging organic farming, sustainable communities and ecological stewardship. By aligning individual life with natural law, we strive to create a society where peace, bliss and harmony are the norm.</p>
        </section>
    )
}

export default OurPhilosophy