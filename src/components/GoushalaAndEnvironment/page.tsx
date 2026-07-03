
import React, { useState } from 'react';


// Icons
const CareIcon = () => <svg className="w-10 h-10 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12.75l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" /></svg>;
const TrainingIcon = () => <svg className="w-10 h-10 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const VolunteerIcon = () => <svg className="w-8 h-8 text-mw-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9h.01M15 9h.01M9.343 14.25c.296-.296.65-.544 1.03-.742m.813-1.122A4.5 4.5 0 0112 12m2.814.386a4.5 4.5 0 011.03.742" /></svg>;
const SponsorIcon = () => <svg className="w-8 h-8 text-mw-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5v-8.25M12 4.875A2.625 2.625 0 1012 10.125A2.625 2.625 0 0012 4.875zM12 15a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z" /></svg>;

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

const GoushalaAndEnvironment: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        { q: "Why is cow protection important?", a: "In Vedic tradition, the cow is revered as a symbol of life, nourishment, and selfless giving. Protecting cows is considered a sacred duty that brings peace and prosperity. Beyond the spiritual significance, cow-based agriculture is sustainable and enriches the soil, promoting ecological balance." },
        { q: "How does the Goushala sustain itself?", a: "The Goushala is sustained through a combination of donations, sponsorships, and revenue from the sale of cow-based products like ghee, organic manure, and dhoop. Community support is vital to our mission." },
        { q: "What breeds do you care for?", a: "We focus on preserving indigenous Indian cattle breeds, such as Gir and Sahiwal, which are known for their hardiness, gentle nature, and the high quality of their A2 milk." },
        { q: "How can I adopt or sponsor a cow?", a: "You can sponsor a cow's food and care for a month, a year, or a lifetime. Please visit our 'Get Involved' section or contact us directly to learn about our sponsorship programs." },
        { q: "Can I visit?", a: "Yes, visitors are welcome! We encourage you to experience the serene atmosphere of the Goushala. Please contact us to schedule a tour during our visiting hours, which are typically from 9 AM to 5 PM daily." },
    ];

    return (
        <div className="bg-mw-cream text-mw-green/90 font-sans">
            <div className="relative bg-mw-green/5 py-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%22%3E%3Cpath%20d%3D%22M25%2050a25%2025%200%201050%200%2025%2025%200%2010-50%200zm25%2015a15%2015%200%20100-30%2015%2015%200%20000%2030z%22%20fill%3D%22%232E4A2C%22%20opacity%3D%220.03%22/%3E%3C/svg%3E')] bg-repeat"></div>
                <div className="container mx-auto px-4 relative">
                    <h1 className="text-5xl lg:text-6xl font-serif font-bold text-mw-green">Goushala & Sustainable Living</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-mw-green/90 font-sans">Honouring the sacred cow, nurturing our planet.</p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#projects" className="bg-mw-gold hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">Explore Our Projects</a>
                        {/* <Link to="/donate" className="bg-mw-blue hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">Support Goushala</Link> */}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
                <section className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-serif font-bold text-mw-green mb-6">Introduction</h2>
                    <div className="space-y-4 text-lg leading-relaxed">
                        <p>The Maharishi Goushala is more than a shelter; it is a living embodiment of the Vedic principle of reverence for all life. In our culture, the cow is honored as 'Gomata' (Mother Cow), a symbol of abundance and selfless service. Our Goushala is dedicated to protecting these gentle creatures and promoting a sustainable, cow-centric model for agriculture and community life.</p>
                        <p className="font-semibold text-mw-green border-t-2 border-b-2 border-mw-gold/20 py-4 mt-6">Mission: To preserve indigenous cattle breeds, educate communities in sustainable cow-based agriculture, and promote eco-friendly, organic living.</p>
                    </div>
                </section>

                <section id="projects">
                    <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-12">Maharshi Gaushaala evam Prashikshan Kendra</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center space-x-4">
                                <CareIcon />
                                <h3 className="text-2xl font-serif font-bold text-mw-green">Facilities & Care</h3>
                            </div>
                            <p className="mt-4">Starting with about 200 cows, the programme aims to establish gaushalas in other districts and to teach the spiritual and economic importance of indigenous cattle.</p>
                             <img src="images/goushala/Facilities & Care.webp" alt="Caretaker with a cow" className="mt-6 rounded-lg shadow-md w-full" />
                        </div>
                        <div className="bg-mw-green/5 p-8 rounded-lg shadow-lg">
                             <div className="flex items-center space-x-4">
                                <TrainingIcon />
                                <h3 className="text-2xl font-serif font-bold text-mw-green">Training & Education</h3>
                            </div>
                            <p className="mt-4">Trains villagers in cow care and dairy products, promoting a sustainable, self-sufficient, and compassionate cow-centric model.</p>
                            <img src="images/goushala/Training & Education.webp" alt="Training session with villagers" className="mt-6 rounded-lg shadow-md w-full" />
                        </div>
                    </div>
                </section>
                
                <section>
                     <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-12">Maharishi Nursery & Vedic Greens</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col">
                            <h3 className="text-2xl font-serif font-bold text-mw-green">Maharishi Nursery</h3>
                            <p className="mt-2 text-mw-green/80 flex-grow">Produces ornamental and medicinal plants and supplies seeds and organic manure. It also offers gardening classes and sells saplings for home and community gardens.</p>
                            <img src="images/goushala/Maharishi Nursery.webp" alt="Rows of plants in the nursery" className="mt-4 rounded-lg shadow-md" />
                            {/* <Link to="/donate" className="text-mw-blue font-bold mt-6 inline-block hover:underline">Visit the Nursery &rarr;</Link> */}
                        </div>
                         <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col">
                            <h3 className="text-2xl font-serif font-bold text-mw-green">Vedic Greens Store</h3>
                            <p className="mt-2 text-mw-green/80 flex-grow">The Vedic Greens outlet offers farm-fresh, organic vegetables, saplings, and gardening supplies to the public. It promotes a healthy, chemical-free lifestyle and provides a market for local organic farmers.</p>
                            <img src="images/goushala/Vedic Greens Store.webp" alt="Basket of fresh organic vegetables" className="mt-4 rounded-lg shadow-md" />
                            {/* <Link to="/donate" className="text-mw-blue font-bold mt-6 inline-block hover:underline">Shop at Vedic Greens &rarr;</Link> */}
                        </div>
                     </div>
                </section>

                <section className="text-center">
                    <h2 className="text-4xl font-serif font-bold text-mw-green mb-12">Impact & Community Stories</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-mw-green/5 p-6 rounded-lg shadow-lg">
                            <p className="text-5xl font-bold text-mw-gold font-serif">100+</p>
                            <p className="mt-2 text-lg text-mw-green">Cows Cared For</p>
                        </div>
                         <div className="bg-mw-green/5 p-6 rounded-lg shadow-lg">
                            <p className="text-5xl font-bold text-mw-gold font-serif">500+</p>
                            <p className="mt-2 text-lg text-mw-green">Villagers Trained</p>
                        </div>
                         <div className="bg-mw-green/5 p-6 rounded-lg shadow-lg">
                            <p className="text-5xl font-bold text-mw-gold font-serif">10+ Tonnes</p>
                            <p className="mt-2 text-lg text-mw-green">Organic Manure Produced Annually</p>
                        </div>
                    </div>
                    <div className="mt-12 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-lg italic">
                            <p className="text-mw-green/90">"The training I received at the Goushala transformed my farm. By using organic compost, my crop yields have increased, and my soil is healthier. It has improved my livelihood and my family's health."</p>
                            <p className="text-right font-semibold text-mw-green mt-4 not-italic">— Ram Singh, Local Farmer</p>
                        </div>
                    </div>
                </section>

                <section className="bg-mw-green/10 p-8 md:p-12 rounded-lg">
                    <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-12">Get Involved</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-serif font-bold text-mw-green mb-4">Volunteer</h3>
                            <ul className="space-y-3 text-mw-green/80">
                                <li className="flex items-start"><VolunteerIcon /><span className="ml-3">Help with daily care of cows and calves.</span></li>
                                <li className="flex items-start"><VolunteerIcon /><span className="ml-3">Assist in workshops and training sessions.</span></li>
                                <li className="flex items-start"><VolunteerIcon /><span className="ml-3">Support marketing of Goushala products.</span></li>
                            </ul>
                             {/* <Link to="/donate" className="bg-mw-blue hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-full inline-block mt-6">Volunteer Today</Link> */}
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-serif font-bold text-mw-green mb-4">Donate</h3>
                            <ul className="space-y-3 text-mw-green/80">
                                <li className="flex items-start"><SponsorIcon /><span className="ml-3">Sponsor a cow’s food and care for a year.</span></li>
                                <li className="flex items-start"><SponsorIcon /><span className="ml-3">Contribute to new shelter construction.</span></li>
                                <li className="flex items-start"><SponsorIcon /><span className="ml-3">Fund our farmer training programs.</span></li>
                            </ul>
                            {/* <Link to="/donate" className="bg-mw-gold hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-full inline-block mt-6">Sponsor a Cow</Link> */}
                        </div>
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

                <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
                    <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-8">Contact & Visit Us</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="text-lg">
                            <p>We welcome you to visit the Maharishi Goushala and experience its peaceful environment firsthand.</p>
                            <div className="mt-6 space-y-3">
                                <p><strong>Location:</strong> Near Vedic Centre, Bhopal, India</p>
                                <p><strong>Phone:</strong> +91 123 456 7890</p>
                                <p><strong>Email:</strong> goushala@maharishi.world</p>
                            </div>
                            <div className="mt-6">
                                <img src="images/goushala/Contact & Visit Us.webp" alt="Static map of Goushala location" className="rounded-lg shadow-md w-full border" />
                            </div>
                        </div>
                         <form className="space-y-4">
                            <h3 className="text-2xl font-serif font-bold text-mw-green mb-4">Schedule a Tour</h3>
                            <input type="text" placeholder="Your Name" className="w-full bg-mw-cream/50 px-4 py-3 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold" />
                            <input type="email" placeholder="Your Email" className="w-full bg-mw-cream/50 px-4 py-3 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold" />
                             <input type="date" className="w-full bg-mw-cream/50 px-4 py-3 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold text-mw-green/70" />
                            <textarea rows={3} placeholder="Any specific interests?" className="w-full bg-mw-cream/50 px-4 py-3 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold"></textarea>
                            <button type="submit" className="w-full bg-mw-green text-white font-bold px-6 py-3 rounded-md hover:bg-opacity-90">Request Visit</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default GoushalaAndEnvironment;
