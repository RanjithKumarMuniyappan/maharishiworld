import React from 'react'
import { Link } from 'react-router-dom';
import type { Category } from '../types';


const EducationCategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 flex flex-col">
    <div className="flex items-center space-x-4">
      {/* {category.icon} */}
      <img src={category.icon} alt="" className='w-16 h-16'/>
      <h3 className="text-xl font-serif font-bold text-mw-green">{category.title}</h3>
    </div>
    <p className="mt-4 text-mw-green/80 flex-grow">{category.description}</p>
    <Link to={category.path} className="text-mw-blue font-bold mt-6 inline-block hover:underline">
      Learn More &rarr;
    </Link>
  </div>
);

export default EducationCategoryCard