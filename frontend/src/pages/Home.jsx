import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { PRODUCTS } from '../data/products';

const Home = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
            <Navbar />

            <main>
                <Hero />

                {/* Featured Section */}
                <section className="py-20 md:py-32">
                    <div className="container-custom">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-premium-dark dark:text-white mb-4">
                                Curated Favorites
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Handpicked essentials that combine safety, comfort, and timeless design for your little ones.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {PRODUCTS.slice(0, 4).map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <a href="/shop" className="inline-block border-b-2 border-premium-dark dark:border-white pb-1 text-premium-dark dark:text-white font-medium hover:text-premium-gold dark:hover:text-premium-gold hover:border-premium-gold dark:hover:border-premium-gold transition-colors">
                                View All Products
                            </a>
                        </div>
                    </div>
                </section>

                {/* Brand Promise / Features */}
                <section className="bg-premium-cream dark:bg-[#1a1a1a] py-24 transition-colors">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div>
                                <div className="w-16 h-16 bg-white dark:bg-[#2a2a2a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <span className="text-2xl">🌿</span>
                                </div>
                                <h3 className="font-serif font-bold text-lg mb-3 dark:text-white">Sustainable Materials</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    We use only the finest organic cotton and eco-friendly materials safer for baby and planet.
                                </p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-white dark:bg-[#2a2a2a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <span className="text-2xl">🛡️</span>
                                </div>
                                <h3 className="font-serif font-bold text-lg mb-3 dark:text-white">Safety First</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Every product is rigorously tested to meet the highest safety standards.
                                </p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-white dark:bg-[#2a2a2a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <span className="text-2xl">💝</span>
                                </div>
                                <h3 className="font-serif font-bold text-lg mb-3 dark:text-white">Made with Love</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Crafted by artisans who care about quality and detail in every stitch.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
