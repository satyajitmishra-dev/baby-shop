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
                setCategories(response.data.results || response.data);
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
                <section className="py-24 bg-gray-50 dark:bg-[#181818] transition-colors relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-premium-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                        <div className="absolute left-0 bottom-0 w-96 h-96 bg-premium-dark rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-premium-dark dark:text-white mb-4 tracking-tight">
                                Shop by Collection
                            </h2>
                            <div className="w-24 h-1 bg-premium-gold mx-auto rounded-full"></div>
                        </div>

                        {categories.length === 0 ? (
                            // Skeleton Loader
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="animate-pulse flex flex-col items-center">
                                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 dark:bg-gray-700 mb-4"></div>
                                        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                                {categories.map((cat) => (
                                    <a key={cat.id} href={`/shop?category=${cat.slug}`} className="group flex flex-col items-center">
                                        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 border-2 border-transparent group-hover:border-premium-gold transition-all duration-500">
                                            <div className="w-full h-full rounded-full overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                                                {cat.image ? (
                                                    <img
                                                        src={cat.image}
                                                        alt={cat.name}
                                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                                        <span className="text-3xl">👶</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="mt-5 font-serif font-bold text-lg text-gray-800 dark:text-gray-200 group-hover:text-premium-gold transition-colors tracking-wide">
                                            {cat.name}
                                        </h3>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </section>


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
