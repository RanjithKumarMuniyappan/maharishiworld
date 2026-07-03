
import React from 'react';
import PageHeader from '../../commonComponents/PageHeader';
import { EarlyChildhoodDescription, EarlyChildhoodTitle } from '../../constants';

import kid from "/images/education/Kids/Maharishi_Kids_Home.webp"

const BulletPoint: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <li className="flex items-start">
        <span className="text-mw-gold mr-4 mt-1 flex-shrink-0">&#10003;</span>
        <div>
            <strong className="font-semibold text-mw-green">{title}:</strong> {children}
        </div>
    </li>
);

const EarlyChildhoodPage: React.FC = () => {
    return (
        <div className="bg-mw-cream text-mw-green/90 ">

            <PageHeader title={EarlyChildhoodTitle} description={EarlyChildhoodDescription} />


            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto space-y-12">

                    <section>
                        <div className="text-center">
                            <h2 className="text-3xl font-serif font-bold text-mw-green">Maharishi Kids Home (MKH)</h2>
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-4 leading-relaxed text-lg">
                                {/* <p>Maharishi Kids Home (MKH) is a chain of preschools dedicated to providing a loving, eco-friendly environment where children learn through play and discovery. The programme emphasises the motto <strong className="font-semibold text-mw-brown">“Life in Bliss”</strong> and focuses on developing a child's creativity, coordination and curiosity.</p> */}
                                <p>Maharishi Kids Home (MKH) is a unit of Maharishi Shiksha Sansthan (MSS) established under pious directions and with divine blessings of His Holiness Maharishi Mahesh Yogi Ji. Maharishi Kids Home facilitates pre-primary and primary education to kids in the most congenial atmosphere and with play way method. Teachers play, sing, and dance with the kids to make learning enjoyable.</p>
                                <p>These preschool centres provide an eco-friendly, child-centred environment where learning is playful and joyful. The motto <strong className="font-semibold text-mw-brown">“Life in Bliss”</strong> reflects their focus on happiness, creativity and simple Yoga and meditation practices through development of consciousness.</p>
                                <a href="https://maharishividyamandir.com/maharishi-kids-home" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
                                    Know More &rarr;
                                </a>
                            </div>
                            <div>
                                <img src={kid} alt="Children playing" className="rounded-lg shadow-xl" />
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-serif font-bold text-mw-green text-center">What Makes MKH Unique</h3>
                        <ul className="mt-8 space-y-4 text-lg max-w-2xl mx-auto">
                            <BulletPoint title="Play-based learning">
                                Children absorb concepts through games, music, art and storytelling rather than rote memorisation.
                            </BulletPoint>
                            <BulletPoint title="Consciousness-oriented">
                                {/* Daily routines include basic breathing exercises and brief meditation to instil habits of mindfulness and emotional balance. */}
                                Daily routines include basic breathing exercises and brief meditation sessions to instil habits of training consciousness with emotional balance.
                            </BulletPoint>
                            <BulletPoint title="Safe and nurturing">
                                Campuses use non-toxic materials and follow stringent safety standards, ensuring a secure space for toddlers and preschoolers.
                            </BulletPoint>
                            <BulletPoint title="Parent involvement">
                                Regular workshops and family events encourage parents to adopt consciousness-based approaches at home and strengthen school-family partnerships.
                            </BulletPoint>
                        </ul>
                    </section>

                    <section className="text-center text-lg leading-relaxed border-t-2 border-mw-gold/20 pt-8">
                        <p>MKH is open to children aged 3–6 and serves as a gentle transition to formal schooling. Graduates typically move on to the Maharishi Vidya Mandir schools, where the principles of consciousness-based education continue through the primary and secondary levels.</p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default EarlyChildhoodPage;