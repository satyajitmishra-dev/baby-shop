import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Lock, CreditCard, Truck } from 'lucide-react';

const InputGroup = ({ label, placeholder, type = "text", half = false }) => (
    <div className={half ? "col-span-1" : "col-span-2"}>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-1 focus:ring-premium-dark dark:focus:ring-premium-gold focus:border-premium-dark dark:focus:border-premium-gold outline-none transition-shadow bg-gray-50 dark:bg-gray-800 dark:text-white focus:bg-white dark:focus:bg-[#1a1a1a]"
        />
    </div>
);

const Checkout = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-300">
            <Navbar />

            <div className="container-custom py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-serif font-bold text-premium-dark dark:text-white">Checkout</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Complete your order securely</p>
                    </div>

                    <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                        {/* Step 1: Contact & Shipping */}
                        <div className="p-8 border-b border-gray-100 dark:border-gray-800">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-premium-dark dark:bg-premium-gold text-white dark:text-premium-dark flex items-center justify-center font-bold text-sm">1</div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Shipping Information</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <InputGroup label="Email Address" placeholder="you@example.com" type="email" />
                                <InputGroup label="First Name" placeholder="Jane" half />
                                <InputGroup label="Last Name" placeholder="Doe" half />
                                <InputGroup label="Address" placeholder="123 Baby St" />
                                <InputGroup label="Apartment, suite, etc." placeholder="Apt 101" />
                                <InputGroup label="City" placeholder="New York" half />
                                <InputGroup label="Postal Code" placeholder="10001" half />
                            </div>
                        </div>

                        {/* Step 2: Payment */}
                        <div className="p-8 bg-[#fdfdfd] dark:bg-[#1a1a1a]">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-premium-dark dark:bg-premium-gold text-white dark:text-premium-dark flex items-center justify-center font-bold text-sm">2</div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Payment Details</h3>
                            </div>

                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6 bg-white dark:bg-[#1E1E1E]">
                                <div className="flex items-center space-x-3 mb-4">
                                    <input type="radio" name="payment" defaultChecked className="accent-premium-dark dark:accent-premium-gold w-4 h-4" />
                                    <div className="flex items-center space-x-2">
                                        <CreditCard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                        <span className="font-medium text-gray-900 dark:text-white">Credit Card</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pl-7">
                                    <InputGroup label="Card Number" placeholder="0000 0000 0000 0000" />
                                    <InputGroup label="Expiration" placeholder="MM/YY" half />
                                    <InputGroup label="CVC" placeholder="123" half />
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                                <div className="text-sm text-gray-900 dark:text-white">
                                    <p className="text-gray-500 dark:text-gray-400">Total to pay:</p>
                                    <p className="text-2xl font-bold text-premium-dark dark:text-premium-gold">₹8,149.00</p>
                                </div>
                                <button className="btn-primary flex items-center space-x-2 px-8 dark:bg-premium-gold dark:text-premium-dark dark:hover:bg-white">
                                    <Lock className="w-4 h-4" />
                                    <span>Pay Now</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8 text-sm text-gray-400 dark:text-gray-500 flex items-center justify-center space-x-4">
                        <span className="flex items-center"><Truck className="w-3 h-3 mr-1" /> Free Returns</span>
                        <span className="flex items-center"><Lock className="w-3 h-3 mr-1" /> SSL Secure Payment</span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Checkout;
