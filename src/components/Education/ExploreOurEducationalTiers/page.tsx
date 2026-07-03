import EducationCategoryCard from "../../../commonComponents/EducationCategoryCard"
import type { Category } from "../../../types";


const educationCategories: Category[] = [
  {
    title: 'Early Childhood (Kids)',
    description: 'Nurturing young minds in a loving, play-based environment.',
    path: '/education/kids',
    icon: "icons/Early & School Education.svg",
  },
  {
    title: 'School Education',
    description: 'India\'s largest private school network integrating modern curricula with Vedic Science.',
    path: '/education/school',
    icon: "icons/Early & School Education.svg",
  },
  {
    title: 'Higher Education',
    description: 'Universities and colleges offering consciousness-based higher learning.',
    path: '/education/higher',
    icon: "icons/Higher Education.svg",
  },
  {
    title: 'Vedic Education',
    description: 'Primary institutions for Vedic and Yogic studies, training scholars and pandits.',
    path: '/education/vedic-science',
    icon: "icons/Vedic Education.svg",
  },
  {
    title: 'Corporate Education',
    description: 'Consciousness-based training for corporate leaders and employees.',
    path: '/education/corporate',
    icon: "icons/Corporate & Skill Development.svg",
  },
  {
    title: 'Skill Development',
    description: 'Vocational training in technical trades to bridge the gap between education and employment.',
    path: '/education/skill-development',
    icon: "icons/Corporate & Skill Development.svg",
  },
];

const ExploreOurEducationalTiers = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-12">Explore Our Educational Tiers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {educationCategories.map((category) => (
                    <EducationCategoryCard key={category.title} category={category} />
                ))}
            </div>
        </div>
    )
}

export default ExploreOurEducationalTiers