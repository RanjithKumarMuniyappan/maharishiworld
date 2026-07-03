
import React, { useState } from 'react';



const FaqItem: React.FC<{ faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => (
    <div className="border-b border-mw-green/20">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-4 px-2">
            <span className="text-lg font-semibold text-mw-green">{faq.q}</span>
            <svg className={`w-6 h-6 text-mw-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        {isOpen && (
            <div className="pb-4 px-2 text-mw-green/80 leading-relaxed">
                {faq.a}
            </div>
        )}
    </div>
);

const TranscendentalMeditation: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        { q: "Is TM a religion?", a: "No. Transcendental Meditation is a simple mental technique, not a religion or philosophy. It doesn't require any change in lifestyle or beliefs and is practiced by people of all backgrounds, cultures, and religions." },
        { q: "Do I have to change my lifestyle or beliefs?", a: "Not at all. TM is a technique that you add to your daily routine. You can continue with your current lifestyle, diet, and beliefs. The practice simply helps enhance your life from within." },
        { q: "How much does the course cost?", a: "Course fees vary by location and are structured to ensure that anyone who wants to learn can do so. The fees cover the initial 4-day course and a lifetime of follow-up support. Please contact your local TM center for specific details." },
        { q: "What if I can't sit still?", a: "This is a common concern. Because TM is effortless, people who feel they are too restless to meditate often find they can practice it easily and comfortably. The technique naturally allows the mind and body to settle down without any effort." },
        { q: "What research supports the benefits?", a: "Over 600 scientific studies have been conducted at more than 250 universities and research institutions in 30 countries. This research has been published in leading peer-reviewed journals and confirms a wide range of benefits for mind, body, and behavior." },
    ];

    const benefits = [
        { icon: "images/TM/tm_icons/Reduces Stress & Anxiety.webp", title: "Reduces Stress & Anxiety", description: "TM produces deep rest that dissolves stress and promotes calmness." },
        { icon: "images/TM/tm_icons/Improves Mental Clarity & Focus.webp", title: "Improves Mental Clarity & Focus", description: "Regular practice enhances creativity, intelligence, and decision-making ability." },
        { icon: "images/TM/tm_icons/Promotes heart health.webp", title: "Promotes Heart Health", description: "Studies show reductions in blood pressure and the risk of heart disease." },
        { icon: "images/TM/tm_icons/Enhances Emotional Well-Being.webp", title: "Enhances Emotional Well-Being", description: "Practitioners experience greater happiness, resilience, and positivity." },
        { icon: "images/TM/tm_icons/Supports Performance.webp", title: "Supports Performance", description: "Improved learning ability, productivity, and professional relationships." },
        { icon: "images/TM/tm_icons/Encourages Personal Growth.webp", title: "Encourages Personal Growth", description: "Awakening inner peace leads to more compassionate and purposeful living." },
    ];

    const learningSteps = [
        "Attend an Introductory Talk: A free presentation explaining TM, its benefits, and how it is taught.",
        "Personal Interview: Meet a certified TM teacher to discuss individual requirements.",
        "Course Sessions: Four sessions over consecutive days, each about 1-2 hours long, for personal instruction.",
        "Follow-Up & Support: A lifetime of regular check-ins and group meditations to refine the practice."
    ];

    const testimonials = [
        { quote: "Learning TM was the best decision of my life. It provides a sanctuary of peace in my busy day, helping me to be more focused, energetic, and resilient.", author: "Anjali Mehta", role: "Corporate Trainee" },
        { quote: "As a student, TM has dramatically improved my ability to learn and retain information. My stress levels during exams are much lower, and my grades have improved.", author: "Rohan Verma", role: "University Student" },
        { quote: "The clarity and calm I've gained from my TM practice have been invaluable in my work. I make better decisions under pressure and feel more connected to my team.", author: "Priya Sharma", role: "Project Manager" },
    ];

    return (
        <div className="bg-mw-cream text-mw-green/90 font-sans">
            <div className="relative bg-mw-green/5 py-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%22%3E%3Cpath%20d%3D%22M25%2050a25%2025%200%201050%200%2025%2025%200%2010-50%200zm25%2015a15%2015%200%20100-30%2015%2015%200%20000%2030z%22%20fill%3D%22%232E4A2C%22%20opacity%3D%220.03%22/%3E%3C/svg%3E')] bg-repeat"></div>
                <div className="container mx-auto px-4 relative">
                    <h1 className="text-5xl lg:text-6xl font-serif font-bold text-mw-green">Transcendental Meditation®</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-mw-green/90 font-sans">A simple, natural technique to access inner calm and unlock the mind’s full potential.</p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* <Link to="/donate" className="bg-mw-gold hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">Learn TM</Link>
                        <Link to="/donate" className="bg-mw-blue hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">Find a Teacher</Link> */}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-mw-green mb-6">What is TM?</h2>
                            <div className="space-y-4 leading-relaxed text-lg">
                                <p>Transcendental Meditation (TM) is a simple, natural and effortless technique brought to light by His Holiness Maharishi Mahesh Yogi Ji, practiced twice a day for 15-20 minutes. Practitioners sit comfortably and let the mind settle inward until it experiences a state of pure consciousness—transcendental consciousness.</p>
                                <p>TM alleviates stress and awakens creativity and intelligence. The TM-Siddhi programme, including Yogic Flying, accelerates personal development and creates a positive influence in the environment.</p>
                            </div>
                        </div>
                        <div>
                            <img src="images/TM/TM.webp" alt="Illustration showing stages of meditation" className="rounded-lg shadow-xl w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-12">Benefits of TM</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={benefit.title} className={`p-8 rounded-lg shadow-lg flex flex-col items-center text-center ${index % 2 === 0 ? 'bg-white' : 'bg-mw-green/5'}`}>
                                {/* {benefit.icon} */}
                                <div className="text-mw-gold flex-shrink-0 mt-1 bw_plan_icon_container">
                                    <img src={benefit.icon} alt="" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-mw-green mt-4">{benefit.title}</h3>
                                <p className="mt-2 text-mw-green/80">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>



                <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl font-serif font-bold text-mw-green mb-6">Advanced Practice: The TM-Sidhi Programme</h2>
                            <div className="space-y-4 leading-relaxed text-lg">
                                <p>After a few months of regular TM practice, one can learn the advanced TM-Sidhi programme. This programme enhances the benefits of TM by accelerating personal growth and developing higher states of consciousness.</p>
                                <p>A key aspect is Yogic Flying, where the body lifts up in short hops. This indicates profound mind-body coordination and generates powerful coherence, benefiting both the individual and society when practiced in groups.</p>
                                {/* <Link to="/donate" className="text-mw-blue font-bold mt-4 inline-block hover:underline">Learn About TM-Sidhi Courses &rarr;</Link> */}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img src="images/TM/Advanced Practice.webp" alt="A group meditating in a hall" className="rounded-lg shadow-lg w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-serif font-bold text-mw-green mb-6">Scientific Research</h3>
                            <div className="space-y-4 text-lg">
                                <p>The benefits of Transcendental Meditation are supported by hundreds of peer-reviewed research studies. This extensive body of scientific work highlights significant improvements in mental and physical health, including reduced stress, lower blood pressure, and enhanced brain function.</p>
                                <img src="images/TM/Scientific Research.webp" alt="Graph showing stress reduction" className="my-4 rounded-lg shadow-md" />
                                {/* <Link to="/about" className="text-mw-blue font-bold hover:underline">View Research Papers &rarr;</Link> */}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-serif font-bold text-mw-green mb-6">Testimonials</h3>
                            <div className="space-y-6">
                                {testimonials.map(t => (
                                    <div key={t.author} className="bg-white p-6 rounded-lg shadow-md italic">
                                        <p className="text-mw-green/90">"{t.quote}"</p>
                                        <p className="text-right font-semibold text-mw-green mt-4 not-italic">— {t.author}, <span className="font-normal text-mw-green/80">{t.role}</span></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-4xl font-serif font-bold text-mw-green mb-12">How to Learn TM</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {learningSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-mw-gold text-white rounded-full flex items-center justify-center text-2xl font-bold font-serif mb-4">{index + 1}</div>
                                <p className="text-mw-green/80">{step}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-lg">TM is taught personally by a certified teacher, not from a book or video, to ensure you learn the technique correctly.</p>
                    <div className="mt-8">
                        {/* <Link to="/donate" className="bg-mw-gold hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-block mx-2">Attend an Intro Session</Link>
                        <Link to="/donate" className="bg-mw-blue hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-block mx-2 mt-4 sm:mt-0">Find a TM Centre</Link> */}
                    </div>
                </section>

                <section className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-8">Frequently Asked Questions</h2>
                    <div>
                        {faqs.map((faq, index) => (
                            <FaqItem key={index} faq={faq} isOpen={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)} />
                        ))}
                    </div>
                </section>

                <section className="bg-mw-green/10 p-8 md:p-12 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-mw-green">Get Started</h2>
                            <p className="mt-4 text-lg leading-relaxed">Take the first step on a life-changing journey to inner peace and fulfillment. Contact a certified teacher today to learn more.</p>
                            <p className="mt-4">For corporate or school programmes, please specify your interest in the message.</p>
                        </div>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-white px-4 py-3 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold" />
                            <input type="email" placeholder="Your Email" className="w-full bg-white px-4 py-3 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold" />
                            <textarea rows={4} placeholder="Your Message" className="w-full bg-white px-4 py-3 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold"></textarea>
                            <button type="submit" className="w-full bg-mw-blue text-white font-bold px-6 py-3 rounded-md hover:bg-opacity-90">Request Information</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TranscendentalMeditation;
