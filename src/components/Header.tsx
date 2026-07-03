import type React from "react";
import { useState } from "react";
import { NAV_LINKS } from "../constants";
import { NavLink as RouterNavLink } from 'react-router-dom';
import type { NavLink as NavLinkType } from '../types';


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    return (
        <header className="sticky top-0 z-50 ">
            {/* <div className="bg-mw-green/80 text-mw-cream py-1 px-4 md:px-8">
                <div className="container mx-auto flex justify-between items-center text-xs">
                    <div>Language: English</div>
                    <div className="flex items-center space-x-4">
                        <span>contact@maharishi.world</span>
                        <div className="hidden md:flex"><SocialMediaIcons /></div>
                    </div>
                </div>
            </div> */}
            <nav className="bg-mw-white text-mw-cream py-4 px-4 md:px-8 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="logo_container flex gap-1 items-center flex-row"  >
                        <a href="/">
                            <div className="logo_img">
                                <img src="/MW_logo.webp" alt="" />
                            </div>
                        </a>
                        <RouterNavLink to="/" className="text-mw-gold text-2xl font-serif font-bold tracking-wider">Maharishi World</RouterNavLink>
                    </div>


                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {NAV_LINKS.map((link: NavLinkType) => (
                            link.sublinks ? (
                                <div key={link.label} className="relative group">
                                    <RouterNavLink to={link.path} className={({ isActive }) => `flex items-center gap-1 hover:text-mw-brown  transition-colors duration-300 ${isActive ? 'text-mw-gold font-bold underline' : 'text-mw-gold'}`}>
                                        {link.label}
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </RouterNavLink>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-mw-green rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 transform scale-95 group-hover:scale-100">
                                        <div className="py-1">
                                            {link.sublinks.map((sublink: any) => (
                                                <RouterNavLink key={sublink.label} to={sublink.path} className={({ isActive }) => `block px-4 py-2 text-sm whitespace-nowrap ${isActive ? 'text-mw-white font-bold underline' : 'text-mw-white hover:text-mw-white hover:font-bold'}`}>
                                                    {sublink.label}
                                                </RouterNavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <RouterNavLink key={link.label} to={link.path} className={({ isActive }) => `hover:text-mw-green  transition-colors duration-300 ${isActive ? 'text-mw-gold font-bold underline' : 'text-mw-gold'}`}>
                                    {link.label}
                                </RouterNavLink>
                            )
                        ))}
                    </div>

                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className="mw_burger_icon_container">
                            <img src="icons/hamburger icon.webp" alt="" />
                        </div>
                        {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg> */}
                    </button>
                </div>


                {isMenuOpen && (
                    <div className="lg:hidden mt-4">
                        {NAV_LINKS.map((link: NavLinkType) => (
                            <div key={link.label} className="border-b border-mw-cream/10  last:border-b-0">
                                {link.sublinks ? (
                                    <div>
                                        <button onClick={() => setOpenSubMenu(openSubMenu === link.label ? null : link.label)} className="w-full flex justify-between items-center py-2 px-4 text-left text-sm hover:bg-mw-green/50">
                                            {/* <span className={({ isActive }) => `block py-2 px-4 text-sm text-mw-gold ${isActive ? 'bg-mw-gold text-mw-white font-bold' : 'hover:bg-mw-green/50'}`} >{link.label}</span> */}
                                            <span className="font-mw-gold text-mw-gold" >{link.label}</span>
                                            <svg className={`w-4 h-4 transition-transform duration-300 ${openSubMenu === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </button>
                                        {openSubMenu === link.label && (
                                            <div className="pl-4 bg-mw-green/20">
                                                {link.sublinks.map(sublink => (
                                                    <RouterNavLink key={sublink.label} to={sublink.path} className={({ isActive }) => `block py-2 px-4 text-sm text-mw-gold ${isActive ? 'bg-mw-gold text-mw-white font-bold' : 'hover:bg-mw-gold/50'}`} onClick={() => setIsMenuOpen(false)}>
                                                        {sublink.label}
                                                    </RouterNavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <RouterNavLink to={link.path} className={({ isActive }) => `block py-2 px-4 text-sm text-mw-gold ${isActive ? 'bg-mw-gold text-mw-white font-bold' : 'hover:bg-mw-green/50'}`} onClick={() => setIsMenuOpen(false)}>
                                        {link.label}
                                    </RouterNavLink>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;