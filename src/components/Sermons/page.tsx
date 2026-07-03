import React, { useState } from 'react';

const Sermons: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("⚠️ Please enter a valid email address.");
            return;
        }
        setMessage("✅ Thanks for subscribing! We’ll notify you when sermons are available.");
        setEmail("");
    };

    return (
        <div className="bg-mw-cream font-sans min-h-[60vh] flex flex-col justify-center items-center py-20 px-4">
            <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center border border-mw-gold/20">
                <div className="w-20 h-20 bg-mw-gold/10 text-mw-gold rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                    📖
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-mw-green mb-4">Inspirational Sermons & Teachings</h1>
                <h2 className="text-xl md:text-2xl font-serif text-mw-gold font-semibold mb-6">Page Under Preparation</h2>
                <p className="text-lg leading-relaxed text-mw-green/80 mb-8 max-w-xl mx-auto">
                    Content will be posted later when ready. We are currently curating and preparing life-supporting discourses and spiritual guidance directly from His Holiness Maharishi Mahesh Yogi Ji, Brahmachari Girish Ji, and other esteemed Vedic scholars.
                </p>

                <div className="bg-mw-cream/40 p-6 rounded-xl max-w-lg mx-auto">
                    <h3 className="text-lg font-semibold text-mw-green mb-2">Get Notified</h3>
                    <p className="text-sm text-mw-green/70 mb-4">Subscribe to receive alerts immediately when new sermons are published.</p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-grow px-4 py-3 rounded-lg border border-mw-green/20 focus:outline-none focus:ring-2 focus:ring-mw-gold text-mw-green"
                            required
                        />
                        <button type="submit" className="bg-mw-green hover:bg-opacity-95 text-white font-bold px-6 py-3 rounded-lg transition-colors flex-shrink-0">
                            Notify Me
                        </button>
                    </form>
                    {message && <p className="mt-3 text-sm font-medium">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Sermons;
