import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
            <Navbar />
            <div className="container-custom py-20">
                <div className="max-w-xl mx-auto">
                    <h1 className="text-4xl font-serif font-bold text-premium-dark dark:text-white mb-8 text-center">Contact Us</h1>

                    <form className="bg-gray-50 dark:bg-[#1E1E1E] p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] dark:text-white focus:ring-1 focus:ring-premium-dark dark:focus:ring-premium-gold outline-none" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] dark:text-white focus:ring-1 focus:ring-premium-dark dark:focus:ring-premium-gold outline-none" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] dark:text-white focus:ring-1 focus:ring-premium-dark dark:focus:ring-premium-gold outline-none" placeholder="How can we help?"></textarea>
                        </div>
                        <button className="w-full btn-primary dark:bg-premium-gold dark:text-premium-dark dark:hover:bg-white">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
