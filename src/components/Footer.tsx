import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";

const Footer: React.FC = () => {
    return (
        <footer className="bg-mw-green text-mw-cream  relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23FDF6E3%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            <div className="container mx-auto px-8 py-12 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-serif font-bold mb-4">Maharishi World</h3>
                        {/* <p className="text-sm text-mw-cream/80">A global family dedicated to creating a peaceful, prosperous, and healthy world through Consciousness-Based Education and Vedic technologies.</p> */}
                        <p className="text-sm text-mw-cream/80">A global family dedicated to creating a peaceful, blissful, prosperous, and healthy world through Consciousness-Based Education and Vedic technologies</p>
                        {/* <div className="mt-6"><SocialMediaIcons /></div> */}
                    </div>
                    <div>
                        <h4 className="font-bold tracking-wider uppercase mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {NAV_LINKS.slice(1, 6).map(link => (
                                <li key={link.label}><Link to={link.path} className="hover:text-mw-white hover:font-bold transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                    {/* <div>
                        <h4 className="font-bold tracking-wider uppercase mb-4">Support Us</h4>
                        <ul className="space-y-2 text-sm">
                           <li><Link to="/donate" className="hover:text-mw-white hover:font-bold transition-colors">Donate Now</Link></li>
                           <li><a href="#" className="hover:text-mw-white hover:font-bold transition-colors">Volunteer</a></li>
                           <li><a href="#" className="hover:text-mw-white hover:font-bold transition-colors">Projects</a></li>
                        </ul>
                    </div> */}
                    <div>
                        <h4 className="font-bold tracking-wider uppercase mb-4">Contact</h4>
                        <p className="text-sm text-mw-cream/80">MCEE Campus, Lambakheda, <br /> Berasia Road

Bhopal (M.P.) - 462018 INDIA<br />wp9000@mssmail.org</p>
                    </div>
                </div>
                <div className="border-t border-mw-cream/20 mt-12 pt-6 text-center text-xs text-mw-cream/60">
                    <p>&copy; {new Date().getFullYear()} Mindlogicx. All Rights Reserved.</p>
                    {/* <p className="mt-1">
                        <a href="#" className="hover:text-mw-gold">Privacy Policy</a> | <a href="#" className="hover:text-mw-gold">Terms of Service</a>
                    </p> */}
                </div>
            </div>
        </footer>
    );
};
export default Footer