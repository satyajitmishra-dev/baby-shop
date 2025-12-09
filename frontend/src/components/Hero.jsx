import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative bg-[#FDFBF7] dark:bg-[#121212] overflow-hidden transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f5f0e6] dark:bg-[#1a1a1a] rounded-bl-[100px] -z-0 opacity-60 dark:opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-premium-gold/10 dark:bg-premium-gold/5 rounded-full blur-3xl -z-0"></div>

            <div className="container-custom relative z-10 pt-20 pb-24 md:pt-32 md:pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <span className="inline-block px-4 py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase shadow-sm">
                            New Collection 2024
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-premium-dark dark:text-white leading-[1.1]">
                            Gentle Care for <br />
                            <span className="text-premium-gold italic">Little Moments</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                            Discover our curated selection of organic clothing, safe toys, and nursery essentials designed with love.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/shop" className="btn-primary flex items-center group dark:bg-premium-gold dark:text-premium-dark dark:hover:bg-white transition-all">
                                Shop Collection
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="px-6 py-3 bg-white dark:bg-transparent text-premium-dark dark:text-white border border-gray-200 dark:border-gray-700 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-sm">
                                Our Story
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-premium-gold/20 dark:bg-premium-gold/10 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800"
                            alt="Happy Baby"
                            className="relative z-10 w-full rounded-[2rem] shadow-2xl transform transition-transform hover:scale-[1.02] duration-500"
                        />

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#1E1E1E] p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 z-20 max-w-xs animate-bounce-slow hidden md:block">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                                    🌱
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-gray-800 dark:text-gray-200">100% Organic Cotton</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Certified & Safe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
