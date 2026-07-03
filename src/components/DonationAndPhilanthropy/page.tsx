import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Icons for the page
const EducationIcon = () => <svg className="w-12 h-12 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const HealthIcon = () => <svg className="w-12 h-12 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const PeaceIcon = () => <svg className="w-12 h-12 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 0 0 9-9h-9V3a9 9 0 0 0-9 9a9 9 0 0 0 9 9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18" /></svg>;
const LeafIcon = () => <svg className="w-12 h-12 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const FundIcon = () => <svg className="w-12 h-12 text-mw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-4H9.5a.5.5 0 01-.5-.5zm.5-3.5a.5.5 0 00-1 0v.5h1v-.5z" /></svg>;

const currencyData: { [key: string]: { symbol: string; amounts: number[] } } = {
    'India': { symbol: '₹', amounts: [500, 1000, 2500, 5000] },
    'United States': { symbol: '$', amounts: [25, 50, 100, 250] },
    'United Kingdom': { symbol: '£', amounts: [20, 40, 80, 200] },
    'Eurozone': { symbol: '€', amounts: [25, 50, 100, 250] },
    'Canada': { symbol: 'CA$', amounts: [25, 50, 100, 250] },
    'Australia': { symbol: 'AU$', amounts: [25, 50, 100, 250] },
};

const countries = Object.keys(currencyData);


const DonationAndPhilanthropy: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('General');
    const [selectedCountry, setSelectedCountry] = useState('India');
    const [selectedAmount, setSelectedAmount] = useState<number | string>(currencyData['India'].amounts[0]);

    useEffect(() => {
        setSelectedAmount(currencyData[selectedCountry].amounts[0]);
    }, [selectedCountry]);
    
    const currentCurrency = currencyData[selectedCountry];

    const donationCategories = [
        { name: 'Education', icon: <EducationIcon />, description: 'Funds scholarships, classroom resources, teacher training and TM programmes for students.' },
        { name: 'Healthcare', icon: <HealthIcon />, description: 'Supports Vedic health clinics, free medical camps and Ayurvedic research.' },
        { name: 'Peace & Culture', icon: <PeaceIcon />, description: 'Helps organise meditation assemblies, cultural events and world peace research.' },
        { name: 'Sustainable Living & Goushala', icon: <LeafIcon />, description: 'Maintains cow shelters, organic farms, nurseries and environmental programmes.' },
        { name: 'General', icon: <FundIcon />, description: 'Allows the organisation to allocate funds where the need is greatest.' },
    ];
    
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        const form = document.getElementById('donation-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-mw-cream text-mw-green/90 font-sans">
            <div className="relative bg-mw-green/5 py-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%22%3E%3Cpath%20d%3D%22M25%2050a25%2025%200%201050%200%2025%2025%200%2010-50%200zm25%2015a15%2015%200%20100-30%2015%2015%200%20000%2030z%22%20fill%3D%22%232E4A2C%22%20opacity%3D%220.03%22/%3E%3C/svg%3E')] bg-repeat"></div>
                <div className="container mx-auto px-4 relative">
                    <h1 className="text-5xl lg:text-6xl font-serif font-bold text-mw-green">Donate to Transform Lives</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">Your contribution educates minds, heals bodies and fosters peace.</p>
                    <a href="#donation-form" className="mt-8 bg-mw-gold hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full inline-block transition-transform transform hover:scale-105">
                        Donate Now
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
                <section className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-serif font-bold text-mw-green mb-6">Support Our Mission</h2>
                    <p className="text-xl leading-relaxed text-mw-green/90 mb-8">
                        All Maharishi Organization's activities are charitable and we need generous support for continuing our program of uplifting the society. For various charitable projects/activities, we need generous contribution/financial support from fellow citizens.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div>
                            <p className="text-4xl font-bold text-mw-gold font-serif">150K+</p>
                            <p className="mt-2 text-mw-green">Students Educated</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-mw-gold font-serif">50K+</p>
                            <p className="mt-2 text-mw-green">Patients Treated</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-mw-gold font-serif">Thousands</p>
                            <p className="mt-2 text-mw-green">Trained in Organic Farming</p>
                        </div>
                    </div>
                </section>
                
                <section>
                    <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-12">Where Your Money Goes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {donationCategories.map((cat, index) => (
                            <div key={cat.name} className={`p-8 rounded-lg shadow-lg flex flex-col text-center items-center ${index % 2 === 0 ? 'bg-white' : 'bg-mw-green/5'}`}>
                                {cat.icon}
                                <h3 className="text-xl font-serif font-bold text-mw-green mt-4">{cat.name}</h3>
                                <p className="mt-2 text-mw-green/80 flex-grow">{cat.description}</p>
                                <button onClick={() => handleCategoryClick(cat.name)} className="mt-6 bg-mw-blue hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-full">
                                    Contribute to This Area
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="donation-form" className="bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-4xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-8">Make Your Contribution</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="country" className="block text-lg font-semibold mb-2">Select Your Country</label>
                            <select id="country" value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)} className="w-full px-4 py-3 rounded-md border border-mw-green/20 bg-white focus:outline-none focus:ring-2 focus:ring-mw-gold">
                                {countries.map(country => <option key={country} value={country}>{country}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg font-semibold mb-2">Select Amount ({currentCurrency.symbol})</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {currentCurrency.amounts.map(amount => (
                                    <button type="button" key={amount} onClick={() => setSelectedAmount(amount)} className={`p-3 rounded-md border-2 transition-colors ${selectedAmount === amount ? 'bg-mw-gold text-white border-mw-gold' : 'bg-mw-cream/50 border-mw-green/20 hover:border-mw-gold'}`}>{`${currentCurrency.symbol}${amount}`}</button>
                                ))}
                            </div>
                             <div className="relative mt-4">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-mw-green/70">{currentCurrency.symbol}</span>
                                <input type="number" placeholder="Enter custom amount" onChange={(e) => setSelectedAmount(e.target.value)}  className="w-full pl-8 pr-4 py-3 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-lg font-semibold mb-2">Choose Programme</label>
                            <select id="category" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 rounded-md border border-mw-green/20 bg-white focus:outline-none focus:ring-2 focus:ring-mw-gold">
                                {donationCategories.map(cat => <option key={cat.name} value={cat.name}>{cat.name}</option>)}
                            </select>
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-semibold mb-2">Full Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold" />
                            </div>
                        </div>
                        <div className="flex items-center">
                             <input type="checkbox" id="tax-receipt" className="h-5 w-5 rounded border-gray-300 text-mw-gold focus:ring-mw-gold" />
                             <label htmlFor="tax-receipt" className="ml-2 text-mw-green/80">I would like to request a tax receipt.</label>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-mw-gold text-white font-bold text-lg py-4 px-6 rounded-md hover:bg-opacity-90 transition-transform transform hover:scale-105">
                                Donate Securely {currentCurrency.symbol}{selectedAmount}
                            </button>
                            <p className="text-center text-sm mt-4 text-mw-green/70">Secure payments via Credit/Debit Cards, PayPal, & Net Banking.</p>
                        </div>
                    </form>
                </section>

                <section>
                    <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-12">Impact Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-6">
                            <img src="https://picsum.photos/150/150?random=student" alt="Student smiling" className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
                            <div>
                                <p className="italic">"The scholarship I received changed everything. Thanks to a donor's support, I could focus on my studies without financial stress. The TM practice taught here has given me a sense of inner peace I never knew was possible."</p>
                                <p className="font-semibold text-mw-green mt-2">— Sneha R., MVM School Graduate</p>
                            </div>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-6">
                             <img src="https://picsum.photos/150/150?random=patient" alt="Patient at a health clinic" className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
                            <div>
                                <p className="italic">"After years of chronic pain, the Ayurvedic treatments at the Maharishi clinic gave me my life back. The doctors were so caring, and the treatments were gentle yet powerful. I am grateful for the free medical camp that made this possible."</p>
                                <p className="font-semibold text-mw-green mt-2">— Kumar P., Healthcare Beneficiary</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-mw-green/5 p-8 md:p-12 rounded-lg">
                     <h2 className="text-4xl font-serif font-bold text-mw-green text-center mb-8">Transparency & Trust</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
                        <div>
                            <h3 className="font-bold text-lg">Accountability</h3>
                            <p className="mt-2 text-mw-green/80">Registered non-profit, FCRA compliant, with 80G tax benefits available for donors.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Fund Allocation</h3>
                            <p className="mt-2 text-mw-green/80">Over 85% of all donations go directly to funding our programmes and initiatives on the ground.</p>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg">Annual Reports</h3>
                            <p className="mt-2 text-mw-green/80">We believe in full transparency. Read our detailed impact reports.</p>
                            <Link to="/about" className="text-mw-blue font-bold mt-2 inline-block hover:underline">View Reports &rarr;</Link>
                        </div>
                     </div>
                </section>

                <section className="text-center bg-mw-green text-mw-cream p-12 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-serif font-bold">Help Us Multiply the Good</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-mw-cream/80">Every contribution makes a difference. Join us in building a more conscious, peaceful, blissful and healthy world.</p>
                     <a href="#donation-form" className="mt-8 bg-mw-gold hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full inline-block transition-transform transform hover:scale-105">
                        Donate Now
                    </a>
                </section>
            </div>
        </div>
    );
};

export default DonationAndPhilanthropy;
