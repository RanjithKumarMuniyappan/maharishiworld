
import React from 'react';
import PageHeader from '../../commonComponents/PageHeader';
import { SchoolEductaionDescription, SchoolEductaionTitle } from '../../constants';

import maharishi_vidya_mandir from "/images/education/School/Maharishi Vidya Mandir (MVM).webp";



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

const Feature: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <li className="flex items-start">
      <span className="text-mw-gold mr-4 mt-1 flex-shrink-0">&#10003;</span>
      <div>
        <strong className="font-semibold text-mw-green">{title}:</strong> {children}
      </div>
    </li>
  );

const SchoolEducationPage: React.FC = () => {
  return (
    <div className="bg-mw-cream text-mw-green/90 ">
      <PageHeader title={SchoolEductaionTitle} description={SchoolEductaionDescription} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <section>
            <h2 className="text-3xl font-serif font-bold text-mw-green mb-6">Maharishi Vidya Mandir (MVM) Schools</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 flex-shrink-0">
                  <img src={maharishi_vidya_mandir} alt="Maharishi Vidya Mandir School" className="rounded-lg shadow-xl object-cover w-full"/>
              </div>
              <div className="md:w-2/3">
                  {/* <p className="leading-relaxed text-lg">Maharishi Vidya Mandir is among India's largest private school networks. According to official figures, the group operates over <strong className="font-semibold text-mw-brown">150 schools across 14 states</strong> and more than 110 cities, serving around <strong className="font-semibold text-mw-brown">90,000 students</strong> and employing roughly 6,500 staff members. These schools follow national curricula (CBSE) or the respective state boards while integrating Maharishi Vedic Science, Yoga and TM into daily life. The aim is to develop well-rounded individuals who excel academically and radiate harmony and positivity.</p> */}
                  <p className="leading-relaxed text-lg">Maharishi Vidya Mandir (MVM) Schools. India's one of the largest privately run chain of public schools. Maharishi Vidya Mandir Group operates <strong className="font-semibold text-mw-brown">154 schools across 14 states and 112 cities</strong>, serving about <strong className="font-semibold text-mw-brown">90,000 students</strong> with 6500 teaching and non-teaching staff members. Schools follow CBSE or state board curricula enhanced with Maharishi Vedic Science, Yoga and Transcendental Meditation to produce students who radiate harmony and peace.</p>
                   <a href="https://maharishividyamandir.com/" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline mt-4">
                    Visit MVM Schools Website &rarr;
                  </a>
              </div>
            </div>
            <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-mw-green">Key Features</h3>
                <ul className="mt-4 space-y-3">
                    <Feature title="Consciousness-based academics">Standard subjects are taught through innovative methodologies that maintain students' alertness and creativity.</Feature>
                    <Feature title="Daily TM and Yoga">Twice-daily practice of Transcendental Meditation and Yogic exercises helps reduce stress and improve concentration.</Feature>
                    <Feature title="Value education">Lessons in ethics, ecology and social responsibility are woven into the curriculum to foster good citizenship.</Feature>
                    <Feature title="Extracurricular diversity">Students participate in sports, music, Vedic chanting and environmental clubs to explore their talents.</Feature>
                    <Feature title="Student & teacher numbers">With a teacher-student ratio designed to give personal attention, MVM schools maintain a supportive atmosphere for learning.</Feature>
                </ul>
            </div>
          </section>

          <Institution
            title="Centre for Educational Excellence (Camps & Schools)"
            imageSrc="/images/education/School/Centre for Educational Excellence (Camps & Schools).png"
            imageAlt="Centre for Educational Excellence"
            imageLeft={false}
          >
            <p>Maharishi Centre for Educational Excellence - Bhopal (MCEE) is a CBSE-affiliated senior secondary campus on a 5-acre Vastu-compliant site, featuring audio-visual smart classrooms, computer labs, a well-stocked library, art and music rooms, and dedicated halls for meditation and Yoga. MCEE belongs to the wider network of 154 branches in 14 states.</p>
            <p className="mt-4">Maharishi School of Excellence - Chennai & Maharishi Centre for Excellence - Bengaluru. Launched in the early 2010s, these schools replicate the network's model with modern classrooms, labs, libraries and specialised halls for TM and Yoga. The best standard of education are followed in these schools.</p>
            <a href="https://maharishividyamandir.com/" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
              Know More &rarr;
            </a>
          </Institution>

          <Institution
            title="Department of Education"
            imageSrc="/images/education/School/Maharishi Shiksha Sansthan (MSS) – Department of Education.png"
            imageAlt="Maharishi Shiksha Sansthan"
          >
            <p>MSS supervises and offers teacher education. Its Bilaspur and Indore campuses host a modern computer laboratory and a well-stocked library for Dl.Ed. studies with highly qualified and experienced faculty.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
              Know More &rarr;
            </a>
          </Institution>

          <Institution
            title="Maharishi Mahavidyalaya Colleges"
            imageSrc="/images/education/School/Maharishi Mahavidyalaya Colleges.png"
            imageAlt="Maharishi Mahavidyalaya College"
            imageLeft={false}
          >
            <p>Maharishi Mahavidyalaya campuses in Panna, Berasia, Narsinghpur, and Chhindwara provide B.Ed., Dl.Ed., and undergraduate programmes in arts and commerce that combine contemporary methods with Maharishi Vedic principles.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
              Know More &rarr;
            </a>
          </Institution>

        </div>
      </div>
    </div>
  );
};

export default SchoolEducationPage;