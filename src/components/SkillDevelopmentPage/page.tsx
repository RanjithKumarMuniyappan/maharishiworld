
import React from 'react';
import PageHeader from '../../commonComponents/PageHeader';
import { SkillDevelopmentDescription, SkillDevelopmentTitle } from '../../constants';

const SkillDevelopmentPage: React.FC = () => {
  return (
    <div className="bg-mw-cream text-mw-green/90 ">
      <PageHeader title={SkillDevelopmentTitle} description={SkillDevelopmentDescription}/>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <section>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4 leading-relaxed text-lg">
                    <h2 className="text-3xl font-serif font-bold text-mw-green">Maharishi Institute of Skill Development and Training</h2>
                    <p>A skill-development institution that offers training in technical trades and information technology and plans to expand with new facilities across India. It has trained over 2,500 students of rural areas and organized jobs for them.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold inline-block hover:underline">
                      Know More &rarr;
                    </a>
                </div>
                <div>
                    <img src="/images/education/Skill Development/Maharishi Institute of Skill Development and Training.webp" alt="Students learning technical skills" className="rounded-lg shadow-xl" />
                </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SkillDevelopmentPage;
