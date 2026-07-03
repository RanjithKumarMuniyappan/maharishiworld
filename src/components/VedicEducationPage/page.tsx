
import React from 'react';
import PageHeader from '../../commonComponents/PageHeader';
import { VedicEducationDescription, VedicEducationTitle } from '../../constants';

const Institution: React.FC<{ title: string; imageSrc: string; imageAlt: string; imageLeft?: boolean; children: React.ReactNode }> = ({ title, imageSrc, imageAlt, imageLeft = true, children }) => (
  <section className="border-t-2 border-mw-gold/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0">
    <h2 className="text-3xl font-serif font-bold text-mw-green mb-6">{title}</h2>
    <div className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}>
      <div className="md:w-1/3 flex-shrink-0">
        <img src={imageSrc} alt={imageAlt} className="rounded-lg shadow-xl object-cover w-full"/>
      </div>
      <div className="md:w-2/3 space-y-4 leading-relaxed text-lg">
        {children}
      </div>
    </div>
  </section>
);

const VedicEducationPage: React.FC = () => {
  return (
    <div className="bg-mw-cream text-mw-green/90 ">
      <PageHeader title={VedicEducationTitle} description={VedicEducationDescription}/>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <Institution
            title="Maharishi Ved Vigyan Vishwa Vidyapeetham (MVVVP)"
            imageSrc="/images/education/Vedic Science/MMYVV_1.webp"
            imageAlt="Maharishi Ved Vigyan Vishwa Vidyapeetham"
          >
            <p>Established in 1982, MVVVP trains Vedic scholars, Yagyiks and Pandits. To date it has trained more than <strong className="font-semibold text-mw-brown">150,000 scholars</strong> and operates <strong className="font-semibold text-mw-brown">23 residential campuses</strong> for over 5,000 advanced-trained Vedic Scholars, Yagyiks, and trainees. Curriculum includes study of Ved and Vedic Literature, Yagyas, Anushthans, Graha Shanti, Vastu Shanti, and Jyotish.</p>
            <a href="https://maharishi-programmes.global/vedic-pandits/" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
              Know More &rarr;
            </a>
          </Institution>

          <Institution
            title="Maharishi Mahesh Yogi Vedic Vishwavidyalaya (MMYVV)"
            imageSrc="/images/education/Vedic Science/MMYVV_2.webp"
            imageAlt="Maharishi Mahesh Yogi Vedic Vishwavidyalaya"
            imageLeft={false}
          >
            <p>Created by the Madhya Pradesh Government's Act 37 of 1995 and recognised by the University Grants Commission, this university offers study programmes in 40 branches of Vedic science, combining life-oriented, consciousness-based instruction with modern knowledge and conventional certificate, diploma, UG, PG and Ph.D. curriculums in various disciplines.</p>
            <a href="https://mmyvv.com/" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
              Know More &rarr;
            </a>
          </Institution>

          <Institution
            title="Maharishi Vedic University – Department of Education (Jabalpur)"
            imageSrc="/images/education/Vedic Science/Maharishi Vedic University – Department of Education (Jabalpur)_1.webp"
            imageAlt="Maharishi Vedic University"
          >
            <p>The Jabalpur Department of Education emphasises cultivating the core values of truthfulness, non-violence, purity, contentment and devotion. Students engage in regular Yoga and TM practice, which supports a calm and receptive mind for absorbing Vedic wisdom.</p>
            <a href="https://mmyvv.com/" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
              Know More &rarr;
            </a>
          </Institution>

          <Institution
            title="Maharishi Institute of Vedic and Management Sciences (MIVMS)"
            imageSrc="/images/education/Vedic Science/MVVVP_1.webp"
            imageAlt="Maharishi Institute of Vedic and Management Sciences"
            imageLeft={false}
          >
            <p>MIVMS oversees several Vedic and management institutions and sponsors the Maharishi University of Management & Technology. It offers diploma and degree programmes that combine classical Vedic learning with modern management education, preparing graduates for leadership roles rooted in ethics and natural law.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
              Know More &rarr;
            </a>
          </Institution>

        </div>
      </div>
    </div>
  );
};

export default VedicEducationPage;
