import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import { ArrowRight, Lock } from 'lucide-react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = cartItems.length > 0 ? 150.00 : 0;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
            <Navbar />

            <div className="container-custom py-12 md:py-20">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-premium-dark dark:text-white mb-10 text-center">Your Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-gray-400 mb-6">Your cart is currently empty.</p>
                        <Link to="/shop" className="btn-primary dark:bg-premium-gold dark:text-premium-dark dark:hover:bg-white transition-all">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-2">
                            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
                                {cartItems.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))}

                                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                                    <Link to="/shop" className="text-sm text-gray-600 dark:text-gray-400 hover:text-premium-dark dark:hover:text-white underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Checkout Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#f9f9f5] dark:bg-[#1a1a1a] rounded-xl p-8 sticky top-24 border border-transparent dark:border-gray-800">
                                <h3 className="font-serif font-bold text-xl mb-6 text-premium-dark dark:text-white">Order Summary</h3>

                                <div className="space-y-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-gray-900 dark:text-gray-200">₹{subtotal.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping Estimate</span>
                                        <span className="font-medium text-gray-900 dark:text-gray-200">₹{shipping.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tax</span>
                                        <span className="font-medium text-gray-900 dark:text-gray-200">Calculated at next step</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-black/10 dark:border-white/10 flex justify-between items-center mb-8">
                                    <span className="font-bold text-lg text-premium-dark dark:text-white">Total</span>
                                    <span className="font-bold text-xl text-premium-dark dark:text-premium-gold">₹{total.toLocaleString('en-IN')}</span>
                                </div>

                                <Link to="/checkout" className="w-full btn-primary flex justify-center items-center group dark:bg-premium-gold dark:text-premium-dark dark:hover:bg-white">
                                    Checkout
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-400 dark:text-gray-500">
                                    <Lock className="w-3 h-3" />
                                    <span>Secure Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Cart;
