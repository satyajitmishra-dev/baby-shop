import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterSection = ({ title, isOpen, toggle, children }) => (
    <div className="border-b border-gray-100 dark:border-gray-800 py-4">
        <button
            className="flex items-center justify-between w-full text-left mb-2"
            onClick={toggle}
        >
            <span className="font-serif font-bold text-premium-dark dark:text-white">{title}</span>
            {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </button>
        {isOpen && <div className="mt-2 space-y-2">{children}</div>}
    </div>
);

const ShopFilters = ({ selectedCategory, onCategoryChange }) => {
    const [openSections, setOpenSections] = useState({
        category: true,
        price: true,
        color: false,
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const categories = ['All', 'Clothing', 'Toys', 'Essentials', 'Care', 'Gear', 'Feeding', 'Furniture', 'Bedding'];

    return (
        <div className="w-full">
            <h3 className="text-lg font-serif font-bold mb-6 text-gray-900 dark:text-white">Filters</h3>

            <FilterSection
                title="Category"
                isOpen={openSections.category}
                toggle={() => toggleSection('category')}
            >
                {categories.map(cat => (
                    <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                            type="radio"
                            name="category"
                            checked={selectedCategory.toLowerCase() === cat.toLowerCase() || (cat === 'All' && !selectedCategory)}
                            onChange={() => onCategoryChange(cat === 'All' ? '' : cat)}
                            className="rounded-full border-gray-300 dark:border-gray-600 text-premium-dark focus:ring-premium-gold bg-transparent dark:bg-gray-800"
                        />
                        <span className={`text-sm group-hover:text-premium-dark dark:group-hover:text-white transition-colors ${selectedCategory.toLowerCase() === cat.toLowerCase() ? 'font-medium text-premium-dark dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                            {cat}
                        </span>
                    </label>
                ))}
            </FilterSection>

            <FilterSection
                title="Price Range"
                isOpen={openSections.price}
                toggle={() => toggleSection('price')}
            >
                <div className="px-2">
                    <input type="range" min="0" max="20000" className="w-full accent-premium-dark dark:accent-premium-gold" />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                        <span>₹0</span>
                        <span>₹20,000+</span>
                    </div>
                </div>
            </FilterSection>

            <FilterSection
                title="Color"
                isOpen={openSections.color}
                toggle={() => toggleSection('color')}
            >
                <div className="flex flex-wrap gap-3">
                    {['bg-white border-2 border-gray-100', 'bg-black', 'bg-blue-200', 'bg-pink-200', 'bg-yellow-200', 'bg-green-200'].map((color, i) => (
                        <button key={i} className={`w-6 h-6 rounded-full ${color} shadow-sm hover:scale-110 transition-transform`}></button>
                    ))}
                </div>
            </FilterSection>
        </div>
    );
};

export default ShopFilters;
