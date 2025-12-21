import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { PRODUCTS } from '../data/products';

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get('/categories/');
                setCategories(response.data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
            <Navbar />

            <main>
                <Hero />

                {/* Collections Section */}
                {categories.length > 0 && (
                    <section className="py-16 bg-gray-50 dark:bg-[#181818] transition-colors">
                        <div className="container-custom">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-10 text-premium-dark dark:text-white">
                                Shop by Collection
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {categories.map((cat) => (
                                    <a key={cat.id} href={`/shop?category=${cat.slug}`} className="group text-center block">
                                        <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white dark:border-[#2a2a2a] shadow-md group-hover:shadow-lg transition-all duration-300 mb-4 mx-auto w-32 h-32 md:w-40 md:h-40">
                                            {cat.image ? (
                                                <img
                                                    src={cat.image}
                                                    alt={cat.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                                    <span className="text-2xl">👶</span>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="font-medium text-lg text-gray-800 dark:text-gray-200 group-hover:text-premium-gold transition-colors">
                                            {cat.name}
                                        </h3>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                )}


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
