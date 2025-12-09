import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { Share2, Minus, Plus, Star, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const product = PRODUCTS.find(p => p.id === parseInt(id)) || PRODUCTS[0];

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity }));
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
            <Navbar />

            <main className="container-custom py-12">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
                    <Link to="/" className="hover:text-premium-dark dark:hover:text-white">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/shop" className="hover:text-premium-dark dark:hover:text-white">Shop</Link>
                    <span className="mx-2">/</span>
                    <span className="text-premium-dark dark:text-premium-gold font-medium">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Gallery Section */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[0, 1, 2, 3].map((idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-premium-dark dark:border-premium-gold ring-1 ring-premium-dark dark:ring-premium-gold ring-offset-2 dark:ring-offset-black' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'}`}
                                >
                                    <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col">
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-premium-gold uppercase tracking-wider">{product.category?.name || product.category}</span>
                            <button className="text-gray-400 hover:text-premium-dark dark:hover:text-white transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-premium-dark dark:text-white mb-4 leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-center space-x-4 mb-6">
                            <p className="text-2xl text-gray-900 dark:text-gray-200 font-medium">₹{parseFloat(product.price).toLocaleString('en-IN')}</p>
                            <div className="flex items-center text-yellow-500">
                                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                                <span className="text-gray-400 dark:text-gray-500 text-sm ml-2">(12 reviews)</span>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
                            {product.description} Crafted with care using premium materials ensuring the utmost comfort and safety for your little one.
                        </p>

                        {/* Selectors */}
                        <div className="space-y-6 border-t border-b border-gray-100 dark:border-gray-800 py-6 mb-8">
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-white mb-3">Color: <span className="font-normal text-gray-600 dark:text-gray-400">Off-White</span></p>
                                <div className="flex space-x-3">
                                    {['bg-[#f9f9f5]', 'bg-[#2c3e50]', 'bg-[#d4af37]'].map((color, i) => (
                                        <button key={i} className={`w-8 h-8 rounded-full ${color} border border-gray-200 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-premium-dark dark:focus:ring-offset-black hover:scale-110 transition-transform`}></button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md w-max bg-white dark:bg-gray-800">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-12 text-center font-medium text-gray-900 dark:text-white">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 btn-primary text-center justify-center dark:bg-premium-gold dark:text-premium-dark dark:hover:bg-white"
                            >
                                Add to Cart - ₹{(parseFloat(product.price) * quantity).toLocaleString('en-IN')}
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                                <ShieldCheck className="w-5 h-5 text-premium-gold" />
                                <span>Certified Organic materials & Safe dyes</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                                <Truck className="w-5 h-5 text-premium-gold" />
                                <span>Free shipping on orders over $50</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                                <RefreshCcw className="w-5 h-5 text-premium-gold" />
                                <span>30-day easy returns</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <section className="mt-24 pt-12 border-t border-gray-100 dark:border-gray-800">
                    <h2 className="text-2xl font-serif font-bold text-premium-dark dark:text-white mb-8">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PRODUCTS.slice(0, 4).map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetails;
