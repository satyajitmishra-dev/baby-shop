import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ShopFilters from '../components/ShopFilters';
import api from '../api/axios';

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState('newest');

    // Get category from URL or default to empty
    const selectedCategory = searchParams.get('category') || '';

    const handleCategoryChange = (category) => {
        const newParams = new URLSearchParams(searchParams);
        if (category) {
            newParams.set('category', category.toLowerCase());
        } else {
            newParams.delete('category');
        }
        setSearchParams(newParams);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                let url = '/products/';
                if (selectedCategory) {
                    url += `?category=${encodeURIComponent(selectedCategory.toLowerCase().trim())}`;
                }

                console.log("Fetching products from:", url);
                const response = await api.get(url);
                console.log("Products response:", response.data);

                setProducts(response.data.results || response.data);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch products", err);
                setError("Failed to load products. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCategory]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        // Implement backend sort later or client sort here
        // For now, client side sort basic
        let sorted = [...products];
        if (e.target.value === 'price-low') sorted.sort((a, b) => a.price - b.price);
        if (e.target.value === 'price-high') sorted.sort((a, b) => b.price - a.price);
        setProducts(sorted);
    };

    return (
        <div className="bg-gray-50 dark:bg-[#121212] min-h-screen pt-24 pb-12 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-premium-dark dark:text-white mb-2">
                            Shop Collection
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Curated essentials for your little ones
                        </p>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <button
                            className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition-colors"
                            onClick={() => setMobileFiltersOpen(true)}
                        >
                            <SlidersHorizontal className="w-4 h-4" /> Filters
                        </button>

                        <div className="relative flex-1 md:w-48">
                            <select
                                className="w-full appearance-none px-4 py-2 bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-premium-gold dark:text-gray-200 cursor-pointer"
                                value={sortBy}
                                onChange={handleSortChange}
                            >
                                <option value="newest">Newest Arrivals</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="popular">Most Popular</option>
                            </select>
                            <Filter className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Desktop Sidebar Filters */}
                    <div className="hidden md:block w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <ShopFilters
                                selectedCategory={selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : ''}
                                onCategoryChange={handleCategoryChange}
                            />
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-premium-gold"></div>
                            </div>
                        ) : error ? (
                            <div className="text-center text-red-500 py-12">
                                <p>{error}</p>
                                <button onClick={() => window.location.reload()} className="mt-4 text-premium-gold underline">Try Again</button>
                            </div>
                        ) : products.length === 0 ? (
                            <div className="text-center text-gray-500 py-12">
                                <p>No products found in this category.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}

                        {/* Pagination Placeholder */}
                        {!loading && !error && products.length > 0 && (
                            <div className="mt-12 flex justify-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-premium-gold text-white bg-premium-gold">1</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors">2</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors">3</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filter Modal */}
            {mobileFiltersOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-[#1E1E1E] p-6 overflow-y-auto transform transition-transform duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-serif font-bold dark:text-white">Filters</h2>
                            <button onClick={() => setMobileFiltersOpen(false)}>
                                <X className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>
                        <ShopFilters
                            selectedCategory={selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : ''}
                            onCategoryChange={(cat) => {
                                handleCategoryChange(cat);
                                // Optional: Keep modal open or close it?
                            }}
                        />
                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                            <button
                                className="w-full bg-premium-dark dark:bg-premium-gold text-white dark:text-premium-dark py-3 rounded-lg font-medium"
                                onClick={() => setMobileFiltersOpen(false)}
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shop;
