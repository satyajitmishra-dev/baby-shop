import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#121212] pt-16 pb-8 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-serif font-bold text-premium-dark dark:text-white mb-4">
                            Baby<span className="text-premium-gold">Boutique</span>.
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Curated essentials for your little ones. Quality, comfort, and style in every stitch.
                        </p>
                        <div className="flex space-x-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-400 hover:text-premium-dark dark:hover:text-premium-gold transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-serif font-bold text-gray-900 dark:text-white mb-6">Shop</h4>
                        <ul className="space-y-3">
                            {['New Arrivals', 'Clothing', 'Accessories', 'Toys', 'Sale'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-500 dark:text-gray-400 hover:text-premium-dark dark:hover:text-white text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif font-bold text-gray-900 dark:text-white mb-6">Company</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Sustainability', 'Careers', 'Terms of Service', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-500 dark:text-gray-400 hover:text-premium-dark dark:hover:text-white text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif font-bold text-gray-900 dark:text-white mb-6">Stay Updated</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                            Subscribe for exclusive offers and new arrivals.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-l-md text-sm focus:outline-none focus:border-premium-dark dark:focus:border-premium-gold dark:text-white transition-colors"
                            />
                            <button className="bg-premium-dark dark:bg-premium-gold text-white dark:text-premium-dark px-4 py-2 rounded-r-md hover:bg-premium-gold dark:hover:bg-white transition-colors">
                                <Mail className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 dark:text-gray-500">
                    <p>© 2025 BabyBoutique. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <p>Designed with ❤️ for babies</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
