
import React from 'react';
import PageHeader from '../../commonComponents/PageHeader';
import { CorporateEducationDescription, CorporateEducationTitle } from '../../constants';

const CorporateEducationPage: React.FC = () => {
  return (
    <div className="bg-mw-cream text-mw-green/90 ">

      <PageHeader title={CorporateEducationTitle} description={CorporateEducationDescription}/>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img src="/images/education/Corporate/corporate_education.webp" alt="Corporate Training" className="rounded-lg shadow-xl object-cover w-full h-full" />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-serif font-bold text-mw-green">Maharishi Corporate Development Programme (MCDP)</h2>
                <div className="mt-4 space-y-4 leading-relaxed text-lg">
                  <p>Delivers consciousness-based training to business leaders, teaching employees to enhance decision-making and creativity through TM and working in accord with natural law. The program has been introduced to a large number of Fortune 100 and 500 companies worldwide with encouraging results.</p>
                </div>
                <a href="https://tm.org/corporate-development" target="_blank" rel="noopener noreferrer" className="text-mw-blue font-bold mt-6 inline-block hover:underline">
                  Know More &rarr;
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CorporateEducationPage;