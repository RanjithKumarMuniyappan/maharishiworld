
import MediaCard from '../../commonComponents/MediaCard'

import SectionTitle from '../../commonComponents/SectionTitle'

import MediaHeroSection from './MediaHeroSection';





const Media = () => {
    return (
        <div className="bg-mw-cream font-sans">
            <MediaHeroSection />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">

                <section className="max-w-4xl mx-auto text-center">
                    <p className="text-xl leading-relaxed text-mw-green/90">
                        Maharishi World utilizes a diverse array of media platforms to disseminate timeless Vedic knowledge, promote our global programmes, and maintain transparent communication with the public. Our Media & PR division encompasses news portals, magazines, television channels, publishing houses, and digital platforms, all dedicated to spreading a message of peace, positivity, and enlightenment.
                    </p>
                </section>

                <section>
                    <SectionTitle >News Services</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <MediaCard
                            icon={"images/media/icons/Mahamedia News Service (1).webp"}
                            title="Mahamedia News Service"
                            imageSrc="images/media/Mahamedia News Service.webp"
                            imageAlt="Digital news on a screen"
                            cta={<a href="#" className="text-mw-blue font-bold hover:underline">Read Latest Articles &rarr;</a>}
                        >
                            <p>A news portal focused on constructive life-oriented articles and information, highlighting positive developments and community solutions.</p>
                        </MediaCard>
                        <MediaCard
                            icon={"images/media/icons/Special Reports & Event Coverage (1).webp"}
                            title="Special Reports & Event Coverage"
                            imageSrc="images/media/Special Reports & Event Coverage.webp"
                            imageAlt="Media covering a live event"
                            cta={<a href="#" className="text-mw-blue font-bold hover:underline">View Event Archive &rarr;</a>}
                        >
                            <p>Our Media & PR team provides real-time coverage of key events, such as the launch of the Blissful World Plan, International Yoga Day celebrations, and educational conferences, ensuring our global family stays connected and informed.</p>
                        </MediaCard>
                    </div>
                </section>

                <section id="subscribe" className="bg-mw-green/5 p-8 md:p-12 rounded-lg">
                    <SectionTitle >Magazines & Newsletters</SectionTitle>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="space-y-8">
                            <MediaCard
                                icon={"images/media/icons/Mahamedia Magazine.webp"}
                                title="Mahamedia Magazine"
                                imageSrc="images/media/magazin/Mahamedia Magazine.webp"
                                imageAlt="Cover of Mahamedia Magazine"
                                btnStatus={false}
                                cta={<a href="#" className="bg-mw-gold text-white font-bold px-6 py-2 rounded-md hover:bg-opacity-90 inline-block">Subscribe to Mahamedia</a>}
                            >
                                <p>A monthly Hindi magazine focused on constructive life-oriented articles, self-development, and Vedic culture.</p>
                            </MediaCard>
                            <MediaCard
                                icon={"images/media/icons/Publishing & Literature.webp"}
                                title="Maharishi Ved Vigyan Prakashan"
                                imageSrc="images/media/magazin/Publishing & Literature.webp"
                                imageAlt="Collection of published books"
                                btnStatus={false}
                                cta={<a href="#" className="text-mw-blue font-bold hover:underline">Visit Our Bookstore &rarr;</a>}
                            >
                                <p>Publishes books, audio and video materials on Vedic science and culture to promote a healthy and enlightened life.</p>
                            </MediaCard>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center space-x-4">
                                <div className="text-mw-gold flex-shrink-0 mt-1 bw_plan_icon_container">
                                    <img src="images/media/icons/E-Gyan Newsletter.webp" alt="" />
                                </div>

                                <h3 className="text-2xl font-serif font-bold text-mw-green">E-Gyan Newsletter</h3>
                            </div>
                            <p className="mt-4 text-mw-green/80">A digital monthly newsletter launched on 7 July 2009 (Guru Purnima) that shares articles on Maharishi's knowledge, organizational news, events and success stories of all Maharishi organizations and members in India.</p>
                            <form className="mt-6 space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold" />
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold" />
                                <button type="submit" className="w-full bg-mw-green text-white font-bold px-6 py-2 rounded-md hover:bg-opacity-90">Join the Mailing List</button>
                            </form>
                        </div>
                    </div>
                </section>



                <section>
                    <SectionTitle >Broadcast & Streaming</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <MediaCard
                            icon={"images/media/icons/Ramraj TV & Online Streaming.webp"}
                            title="Ramraj TV"
                            imageSrc="images/media/broadcast/Ramraj TV & Online Streaming.webp"
                            imageAlt="A television broadcast studio"
                            cta={
                                <div className="flex space-x-4">
                                    <a href="#" className="text-mw-blue font-bold hover:underline">Watch Now &rarr;</a>
                                    <a href="#" className="text-mw-blue font-bold hover:underline">Program Schedule &rarr;</a>
                                </div>
                            }
                        >
                            <p>An internet channel created to share Maharishi's vision of governance of life aligned with natural law.</p>
                        </MediaCard>
                        <MediaCard
                            icon={"images/media/icons/Maharishi Digital Media House.webp"}
                            title="Maharishi Digital Media House"
                            imageSrc="images/media/broadcast/Maharishi Digital Media House.webp"
                            imageAlt="Person streaming content on a tablet"
                            cta={<a href="#" className="bg-mw-blue text-white font-bold px-6 py-2 rounded-md hover:bg-opacity-90 inline-block">Explore Subscriptions</a>}
                        >
                            <p>A subscription-based multimedia platform offering exclusive audio, video, live Yagyas, and educational courses from our extensive library of knowledge.</p>
                        </MediaCard>
                    </div>
                </section>



                <section>
                    <SectionTitle >Programme Portals & Resources</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <MediaCard
                            icon={"public/images/media/icons/Maharishi_s Programmes Portal.webp"}
                            title="Maharishi's Programmes in India"
                            imageSrc="images/media/program_portal/Maharishi_s Programmes Portal.webp"
                            imageAlt="A web portal showing various programs"
                            cta={<a href="#" className="text-mw-blue font-bold hover:underline">Explore All Programmes &rarr;</a>}
                        >
                            <p>A portal that provides a comprehensive list of more than thirty Maharishi programmes and organisations across India.</p>
                        </MediaCard>
                        <MediaCard
                            icon={"public/images/media/icons/Resource Library.webp"}
                            title="Resource Library"
                            imageSrc="images/media/program_portal/Resource Library.webp"
                            imageAlt="Digital library resources on a computer"
                            cta={<a href="#" className="text-mw-blue font-bold hover:underline">Download Press Kit &rarr;</a>}
                        >
                            <p>A dedicated section for journalists and researchers with links to scientific studies, case studies, press releases, and high-resolution images.</p>
                        </MediaCard>
                    </div>
                </section>

                <section>
                    <SectionTitle>Information Technology Services</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <MediaCard
                            icon={"images/media/icons/Publishing & Literature.webp"}
                            title="Maharishi Information Technology Pvt. Ltd. (MITPL)"
                            imageSrc="/public/images/media/MaharishiInformationTechnologyPvtLtd.jpg"
                            imageAlt="IT development and software solutions"
                            cta={<a href="#" className="text-mw-blue font-bold hover:underline">Visit MITPL Website &rarr;</a>}
                        >
                            <p>An IT company delivering computer education, web designing, portal development, hosting, networking and e-commerce solutions. The firm manages 205 portals and operates in 38 cities, fostering innovation and personal development.</p>
                        </MediaCard>
                    </div>
                </section>

                <section id="contact" className="bg-mw-green text-mw-cream p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23FDF6E3%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-serif font-bold">Get Involved</h2>
                            <p className="mt-4 text-mw-cream/80">Stay connected with our mission. Subscribe to our channels, contact our press office for enquiries, or follow us on social media.</p>
                            {/* <div className="mt-6">
                                <SocialMediaIcons />
                            </div> */}
                            <div className="mt-8 text-mw-cream/80">
                                <p><strong>Media Enquiries:</strong><br />wp9000@mssmail.org</p>
                                <p className="mt-2"><strong>Mailing Address:</strong><br />MCEE Campus, Lambakheda, Berasia Road Bhopal (M.P.) - 462018 INDIA</p>
                            </div>
                        </div>
                        <form className="space-y-4">
                            <h3 className="text-2xl font-serif font-bold">Contact Media Relations</h3>
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input type="text" id="name" placeholder="Your Name" className="w-full bg-mw-cream/10 border border-mw-cream/20 text-mw-cream px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-mw-gold placeholder-mw-cream/60" />
                            </div>
                            <div>
                                <label htmlFor="email_contact" className="sr-only">Email</label>
                                <input type="email" id="email_contact" placeholder="Your Email" className="w-full bg-mw-cream/10 border border-mw-cream/20 text-mw-cream px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-mw-gold placeholder-mw-cream/60" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea id="message" rows={4} placeholder="Your Message" className="w-full bg-mw-cream/10 border border-mw-cream/20 text-mw-cream px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-mw-gold placeholder-mw-cream/60"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-mw-gold text-white font-bold px-6 py-3 rounded-md hover:bg-opacity-90">Send Message</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Media