
import React from 'react';
import PageHeader from '../../commonComponents/PageHeader';
import { HigherEductionDescription, HigherEductionTitle } from '../../constants';

const OtherInstitutionCard: React.FC<{ title: string; imageSrc: string; imageAlt: string; children: React.ReactNode }> = ({ title, imageSrc, imageAlt, children }) => (
    <div className="flex flex-col sm:flex-row items-start gap-6 p-6 bg-mw-green/5 rounded-lg transition-shadow hover:shadow-md">
        <img src={imageSrc} alt={imageAlt} className="w-full sm:w-48 h-auto object-cover rounded-lg shadow-md flex-shrink-0" />
        <div>
            <h4 className="font-bold text-mw-green text-xl font-serif">{title}</h4>
            <div className="text-mw-green/90 mt-2 space-y-2 leading-relaxed">
                {children}
            </div>
        </div>
    </div>
);

const HigherEducationPage: React.FC = () => {
    return (
        <div className="bg-mw-cream text-mw-green/90 ">

            <PageHeader title={HigherEductionTitle} description={HigherEductionDescription} />



            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto space-y-16">

                    <section>
                        <h2 className="text-3xl font-serif font-bold text-mw-green mb-6">Maharishi Institute of Management (MIM)</h2>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="md:w-1/3 flex-shrink-0">
                                <img src="/images/education/Higher/Maharishi Institute of Management (MIM).png" alt="Maharishi Institute of Management" className="rounded-lg shadow-xl object-cover w-full" />
                            </div>
                            <div className="md:w-2/3 space-y-4 leading-relaxed text-lg">
                                <p>Established in 1995, MIM branches at Bhopal and Indore merge modern management training with natural law-based- Vedic Management principles. The programmes foster both professional skills and personal growth in an environment grounded in cultural integrity. MIMs provide region-specific management and business programmes.</p>
                                <a href="https://mim.org.in/" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
                                    Visit MIM Website &rarr;
                                </a>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-serif font-bold text-mw-green mb-6">Maharishi University of Management & Technology (MUMT)</h2>
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                            <div className="md:w-1/3 flex-shrink-0">
                                <img src="/images/education/Higher/Maharishi University of Management & Technology (MUMT).png" alt="Maharishi University of Management & Technology" className="rounded-lg shadow-xl object-cover w-full" />
                            </div>
                            <div className="md:w-2/3 space-y-4 leading-relaxed text-lg">
                                <p>A university offering undergraduate, postgraduate and research degrees in technical and professional fields. It aims to incorporate consciousness-based approaches into conventional higher education.</p>
                                <a href="https://mumt.org/" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
                                    Visit MUMT Website &rarr;
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
                        <h3 className="text-3xl font-serif font-bold text-mw-green text-center mb-8">Other Institutions and Centres</h3>
                        <div className="space-y-8">
                            <OtherInstitutionCard
                                title="Regional MIM Campuses"
                                imageSrc="https://picsum.photos/200/150?random=MIM-regional"
                                imageAlt="Regional MIM Campus building"
                            >
                                <p>Additional MIM branches across India deliver similar management programmes tailored to local needs and industries.</p>
                                <a href="https://mim.org.in/" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold mt-2 block hover:underline">
                                    Know More &rarr;
                                </a>
                            </OtherInstitutionCard>
                            <OtherInstitutionCard
                                title="Maharishi Shiksha Sansthan (MSS) B.Ed. Colleges"
                                imageSrc="https://picsum.photos/200/150?random=MSS"
                                imageAlt="MSS B.Ed. College classroom"
                            >
                                <p>These colleges provide education degrees and serve the teacher-training pipeline across the Maharishi network.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold mt-2 block hover:underline">
                                    Know More &rarr;
                                </a>
                            </OtherInstitutionCard>
                            <OtherInstitutionCard
                                title="Maharishi University of Management & Vedic Studies"
                                imageSrc="https://picsum.photos/200/150?random=MUMVS"
                                imageAlt="Vedic Studies building facade"
                            >
                                <p>Separate units within the university system explore the intersection of Vedic knowledge and modern disciplines, such as sustainable management and consciousness-based entrepreneurship.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold mt-2 block hover:underline">
                                    Know More &rarr;
                                </a>
                            </OtherInstitutionCard>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default HigherEducationPage;