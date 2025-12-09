import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`glass-nav dark:bg-premium-dark/90 dark:border-white/10 ${isScrolled ? 'py-3' : 'py-5'}`}>
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-premium-dark dark:text-gray-100">
                    Baby<span className="text-premium-gold">Boutique</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {['Shop', 'Collections', 'About', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-premium-dark dark:hover:text-premium-gold transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-6">
                    <ThemeToggle />
                    <button className="text-gray-600 dark:text-gray-400 hover:text-premium-dark dark:hover:text-white transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <div className="relative">
                        <Link to="/cart" className="text-gray-600 dark:text-gray-400 hover:text-premium-dark dark:hover:text-white transition-colors">
                            <ShoppingBag className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-premium-gold text-premium-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                    <button
                        className="md:hidden text-gray-600 dark:text-gray-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-premium-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10 py-4 shadow-lg animate-fade-in">
                    <div className="flex flex-col space-y-4 px-6">
                        {['Shop', 'Collections', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                                className="text-lg font-medium text-gray-800 dark:text-gray-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
