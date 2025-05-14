import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-altora-navy text-white">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="font-serif text-2xl text-altora-gold mb-4">
                            Altora Global Estates
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Luxury real estate and migration services for discerning clients worldwide.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-altora-gold">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-altora-gold">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-altora-gold">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-altora-gold">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-xl mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/properties" className="text-gray-300 hover:text-altora-gold">
                                    Properties
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-altora-gold">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/concierge" className="text-gray-300 hover:text-altora-gold">
                                    Concierge Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/migration" className="text-gray-300 hover:text-altora-gold">
                                    Migration Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif text-xl mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>123 Luxury Avenue</li>
                            <li>New York, NY 10001</li>
                            <li>United States</li>
                            <li className="mt-4">
                                <a href="tel:+1234567890" className="hover:text-altora-gold">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@altoraglobal.com" className="hover:text-altora-gold">
                                    info@altoraglobal.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-xl mb-4">Newsletter</h4>
                        <p className="text-gray-300 mb-4">
                            Subscribe to our newsletter for the latest property listings and investment opportunities.
                        </p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-altora-gold text-white"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-altora-gold hover:bg-altora-gold-light text-white rounded transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-300">
                    <p>© {new Date().getFullYear()} Altora Global Estates. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 