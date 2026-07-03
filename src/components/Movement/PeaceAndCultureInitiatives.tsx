import React from 'react';
import SectionTitle from '../../commonComponents/SectionTitle';

interface Initiative {
  title: string;
  desc: string;
  imageSrc: string;
  imageAlt: string;
}

const initiatives: Initiative[] = [
  {
    title: 'Maharishi Bliss Residency (MBR)',
    desc: 'An educational and corporate leaders training center near Bhopal situated on 17 acres with gardens, farms and a dairy. It provides 100 air-conditioned rooms, 24-hour Wi-Fi, solar-heated water and medical care. Course participants receive specialized knowledge of their field and also practice Yoga and TM daily and contribute to global peace through group meditation.',
    imageSrc: '/public/images/movement/MaharishiBlissResidency.jpg',
    imageAlt: 'Maharishi Bliss Residency campus'
  },
  {
    title: 'Maharishi Ideal India Campaign (MIIC)',
    desc: "Launched on 11 January 2015 to encourage citizens to adopt Vedic values and ethical living for their own and nation's upliftment. The campaign aims to provide an Ideal Life to all citizens, society, and the nation.",
    imageSrc: '/public/images/movement/MaharishiIdealIndiaCampaign.jpg',
    imageAlt: 'Ideal India Campaign presentation'
  },
  {
    title: 'Maharishi Vedic Sanskratik Kendra (MVSK)',
    desc: 'Located in Bhopal, this centre includes lecture halls, exhibition rooms, TM initiation rooms, a Yoga and Yogic Flying hall, a library and counselling rooms. It offers courses in different fields of Vedic education, Jyotish, Vedic Approach to Health, Vastu, Gandharva Veda, Vedic Agriculture and gardening.',
    imageSrc: '/public/images/movement/MaharishiVedicSanskratikKendra.jpg',
    imageAlt: 'Maharishi Vedic Sanskratik Kendra building'
  },
  {
    title: 'Maharishi Vedic Administrative Training Institute',
    desc: 'Provides natural-law-based administrative training—specifically training on Vedic Management and Vedic Life—to participants. Thousands of individuals and administrators have been trained by the institute.',
    imageSrc: '/public/images/movement/MaharishiVedicAdministrativeTrainingInstitute.jpg',
    imageAlt: 'Vedic Administrative Training class'
  },
  {
    title: 'Maharishi Smarak',
    desc: "A memorial in Teerthraj Prayagraj on the pious confluence (sangam) of Ganga, Yamuna and Saraswati, a unique monument of Maharishi Vedic Science and Technology, commemorating Maharishi Mahesh Yogi's life, knowledge, and work.",
    imageSrc: '/public/images/movement/MaharishiSmarak.jpg',
    imageAlt: 'Maharishi Smarak memorial'
  }
];

const PeaceAndCultureInitiatives: React.FC = () => {
  return (
    <section id="peace-culture-initiatives" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Peace & Culture Initiatives</SectionTitle>
        <p className="text-center max-w-3xl mx-auto mt-4 text-lg text-mw-green/90">
          Enlivening Vedic traditions and fostering collective consciousness through dedicated campuses and campaigns.
        </p>

        <div className="mt-12 space-y-16 max-w-6xl mx-auto">
          {initiatives.map((init, index) => (
            <div
              key={init.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-mw-cream/30 p-8 rounded-2xl shadow-lg border border-mw-gold/10 hover:shadow-xl transition-shadow`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={init.imageSrc}
                  alt={init.imageAlt}
                  className="rounded-xl shadow-md w-full object-cover aspect-[3/2] hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-serif font-bold text-mw-green">
                  {init.title}
                </h3>
                <p className="text-lg leading-relaxed text-mw-green/90">
                  {init.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeaceAndCultureInitiatives;
