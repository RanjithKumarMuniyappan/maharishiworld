
import React from 'react';
import PageHeader from '../../commonComponents/PageHeader';
import { HealthcareDescription, HealthcareTitle } from '../../constants';

const ContentSection: React.FC<{ title: string; imageSrc: string; imageAlt: string; imageLeft?: boolean; children: React.ReactNode }> = ({ title, imageSrc, imageAlt, imageLeft = true, children }) => (
    <section className="border-t-2 border-mw-gold/20 pt-12 mt-12 first-of-type:border-t-0 first-of-type:pt-0 first-of-type:mt-0">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-mw-green mb-8">{title}</h2>
        <div className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-start`}>
            <div className="md:w-2/5 flex-shrink-0">
                <img src={imageSrc} alt={imageAlt} className="rounded-lg shadow-xl object-cover w-full" />
            </div>
            <div className="md:w-3/5 space-y-4 leading-relaxed text-lg">
                {children}
            </div>
        </div>
    </section>
);

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <span className="text-mw-gold mr-3 mt-1.5 flex-shrink-0">&#9679;</span>
        <div>{children}</div>
    </li>
);

const HealthcarePage: React.FC = () => {
    return (
        <div className="bg-mw-cream text-mw-green/90 ">
            <PageHeader title={HealthcareTitle} description={HealthcareDescription} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-8xl mx-auto">
                    <section className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-mw-green">Overview</h2>
                        <p className="mt-4 text-lg max-w-4xl mx-auto leading-relaxed">
                            Maharishi World’s healthcare initiatives are rooted in the belief that true health arises from balance in mind, body and environment. Rather than merely treating symptoms, our approach emphasises preventing illness and restoring harmony through the Maharishi Vedic Approach to Health. Treatments combine Ayurveda, Yoga, meditation and diet to revitalise the body’s natural healing mechanisms.
                        </p>
                    </section>

                    <ContentSection
                        title="Maharishi Vedic Health Centre (MVHC)"
                        imageSrc="images/healthcare/Maharishi Vedic Health Centre (MVHC) 500x350px.jpg"
                        imageAlt="Serene interior of Maharishi Vedic Health Centre"
                    >
                        <p>A 50 bed government approved state of the arts facility in central India- capital of Madhya Pradesh-Bhopal, specializing in preventive healthcare through Maharishi Vedic Approach to Health. Treatments focus on balancing mind and body via personalised routines, diet, herbal supplements and practice of Yoga and TM.</p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-serif font-semibold text-mw-green mb-3">Key Services</h3>
                            <ul className="space-y-3">
                                <BulletPoint><strong className="font-semibold">Panchakarma Therapies:</strong> Detoxification procedures such as Vamana, Virechana, Basti, Nasya, and Shirodhara, administered by trained Ayurvedic physicians and therapists.</BulletPoint>
                                <BulletPoint><strong className="font-semibold">Individualised Wellness Programmes:</strong> Customised plans covering diet, daily routines, herbal supplements, gentle yoga and TM practice.</BulletPoint>
                                <BulletPoint><strong className="font-semibold">Modern Facilities:</strong> Well‑equipped treatment rooms, comfortable patient accommodation, an Ayurvedic pharmacy and a vegetarian dining hall serving organic, sattvic meals.</BulletPoint>
                                <BulletPoint><strong className="font-semibold">Integration with TM and Yoga:</strong> Patients are encouraged to learn Transcendental Meditation and simple Yogic postures to reduce stress and enhance healing.</BulletPoint>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-2xl font-serif font-semibold text-mw-green mb-3">Unique Highlights</h3>
                            <ul className="space-y-3">
                                <BulletPoint><strong className="font-semibold">Holistic Diagnostics:</strong> Physicians utilise pulse diagnosis (Nadi Vigyan) to assess imbalances before they manifest as disease.</BulletPoint>
                                <BulletPoint><strong className="font-semibold">Government Approval:</strong> MVHC is recognised by local health authorities, ensuring adherence to medical standards.</BulletPoint>
                                <BulletPoint><strong className="font-semibold">Educational Workshops:</strong> Regular seminars teach visitors how to incorporate Maharishi Ayurveda into daily life.</BulletPoint>
                            </ul>
                        </div>
                    </ContentSection>

                    <ContentSection
                        title="Maharshi Svaasthy Vigyaan Sansthaan"
                        imageSrc="images/healthcare/Maharshi Svaasthy Vigyaan Sansthaan_500x350.jpg"
                        imageAlt="Students learning Ayurveda at Svaasthy Vigyaan Sansthaan"
                        imageLeft={false}
                    >
                        <p>The Maharshi Svaasthy Vigyaan Sansthaan complements MVHC by providing integrated Ayurvedic and Yoga services with a focus on capacity building and community outreach.</p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-serif font-semibold text-mw-green mb-3">Facilities & Services</h3>
                            <ul className="space-y-3">
                                <BulletPoint><strong className="font-semibold">Hospital Services:</strong> A 50-bed facility for inpatient Ayurvedic care and Yoga therapy sessions.</BulletPoint>
                                <BulletPoint><strong className="font-semibold">Panchakarma & Rejuvenation:</strong> Detox and rejuvenation therapies tailored to each individual’s constitution.</BulletPoint>
                                <BulletPoint><strong className="font-semibold">Training Programmes:</strong> A training wing for panchakarma technicians, Yoga instructors and Ayurvedic paramedics.</BulletPoint>
                                <BulletPoint><strong className="font-semibold">Community Health Camps:</strong> Mobile camps provide free or low-cost consultations and lifestyle advice to rural and urban populations.</BulletPoint>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-2xl font-serif font-semibold text-mw-green mb-3">Why It Matters</h3>
                            <ul className="space-y-3">
                                <BulletPoint><strong className="font-semibold">Capacity Building:</strong> Training technicians and therapists helps expand access to authentic Ayurveda.</BulletPoint>
                                <BulletPoint><strong className="font-semibold">Community Outreach:</strong> Health camps bring Maharishi Vedic health knowledge to underserved areas.</BulletPoint>
                                <BulletPoint><strong className="font-semibold">Research Collaboration:</strong> The centre contributes to the wider evidence base for Maharishi Vedic treatments.</BulletPoint>
                            </ul>
                        </div>
                    </ContentSection>

                    <section className="mt-16 bg-white p-8 md:p-12 rounded-lg shadow-xl">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                            <div className="md:w-2/3">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-mw-green mb-6">Health Education & Research</h2>
                                <p className="text-lg leading-relaxed mb-6">
                                    Maharishi World recognises that sustainable health requires informed communities and ongoing research. In addition to clinical services, several initiatives promote health education and scientific inquiry:
                                </p>
                                <ul className="space-y-3 text-lg">
                                    <BulletPoint><strong className="font-semibold">Wellness Workshops:</strong> Open to the public, teaching participants to integrate Ayurvedic principles into everyday life.</BulletPoint>
                                    <BulletPoint><strong className="font-semibold">Professional Courses:</strong> Certifications in Ayurvedic lifestyle management and Yoga therapy for health professionals.</BulletPoint>
                                    <BulletPoint><strong className="font-semibold">Collaborative Research:</strong> Partnerships with universities to explore the efficacy of Maharishi Ayurveda and TM.</BulletPoint>
                                    <BulletPoint><strong className="font-semibold">Outreach to Schools:</strong> Educational programmes to introduce students and teachers to simple wellness practices.</BulletPoint>
                                </ul>
                            </div>
                            <div className="md:w-1/3">
                                <img src="images/healthcare/Health Education & Research.png" alt="Scientific research in a lab" className="rounded-lg shadow-lg object-cover w-full h-full" />
                            </div>
                        </div>
                    </section>

                    <section className="text-center mt-16 bg-mw-green text-mw-cream p-12 rounded-lg shadow-lg">
                        <h2 className="text-4xl font-serif font-bold">Conclusion</h2>
                        <p className="mt-4 text-lg max-w-4xl mx-auto text-mw-cream/80 leading-relaxed">
                            Maharishi World’s healthcare offerings highlight the organisation’s commitment to holistic living. By uniting time‑tested Ayurvedic wisdom with the modern practice of Transcendental Meditation and Yoga, our institutions offer individuals a pathway to vitality and inner balance. Through patient care, professional training, community health camps and research, these institutions embody Maharishi’s vision of a disease‑free society grounded in harmony with natural law.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HealthcarePage;
