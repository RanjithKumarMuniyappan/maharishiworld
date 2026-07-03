
import { TESTIMONIALS } from '../../../constants'
import type { Testimonial as TestimonialType } from '../../../types';

const Testimonials = () => {

    const renderHighlightedText = (text: string, words: string[]) => {
        if (!words.length) return text;
        const regex = new RegExp(`(${words.join('|')})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i) =>
            regex.test(part) ? (
                <span key={i} className="text-mw-gold font-bold">{part}</span>
            ) : (
                part
            )
        );
    };


    return (
        <section className="py-20 bg-mw-cream">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif font-bold text-mw-green text-center">Voices of Transformation</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    {TESTIMONIALS.map((testimonial: TestimonialType) => (
                        <div key={testimonial.author} className="bg-white p-8 rounded-lg shadow-lg relative">
                            <svg className="absolute top-4 left-4 w-12 h-12 text-mw-gold/10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M9.33 8.35C5.86 11.26 4.34 15.14 4.34 19.34c0 1.25.13 2.45.38 3.59.25 1.14.59 2.22 1.02 3.24.43 1.02.94 1.95 1.54 2.79.6.84 1.28 1.54 2.04 2.11 0 .09.02.17.02.26 0 1.25-.36 2.33-1.09 3.24-.72.91-1.68 1.59-2.88 2.04-1.19.45-2.47.68-3.82.68-2.93 0-5.59-1.02-7.98-3.06S0 30.59 0 27.25c0-4.08 1.25-7.73 3.75-10.95C6.25 12.98 9.61 11 13.83 11c.17 0 .34.02.5.02.17.02.32.02.47.02l-5.47-2.71zM25.33 8.35C21.86 11.26 20.34 15.14 20.34 19.34c0 1.25.13 2.45.38 3.59.25 1.14.59 2.22 1.02 3.24.43 1.02.94 1.95 1.54 2.79.6.84 1.28 1.54 2.04 2.11 0 .09.02.17.02.26 0 1.25-.36 2.33-1.09 3.24-.72.91-1.68 1.59-2.88 2.04-1.19.45-2.47.68-3.82.68-2.93 0-5.59-1.02-7.98-3.06S8 30.59 8 27.25c0-4.08 1.25-7.73 3.75-10.95C14.25 12.98 17.61 11 21.83 11c.17 0 .34.02.5.02.17.02.32.02.47.02l-5.47-2.71z" />
                            </svg>
                            <p className="text-lg text-mw-green/90 relative z-10 italic">
                                "{renderHighlightedText(testimonial.quote, testimonial.highlightedWords)}"
                            </p>
                            <div className="mt-6 text-right">
                                <p className="font-bold text-mw-green">{testimonial.author}</p>
                                <p className="text-sm text-mw-green/70">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials