import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent navigation if wrapped in Link (though here button is separate layer)
        e.stopPropagation();
        dispatch(addToCart({ ...product, quantity: 1 }));
    };

    return (
        <Link to={`/product/${product.id}`} className="group relative bg-white dark:bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 block">
            {/* Badge */}
            {product.isNew && (
                <span className="absolute top-3 left-3 bg-premium-dark dark:bg-premium-gold text-white dark:text-premium-dark text-[10px] uppercase font-bold px-2 py-1 rounded-sm z-10">
                    New
                </span>
            )}

            {/* Image Container */}
            <div className="relative aspect-[4/5] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 shadow-md transition-colors"
                    >
                        <Heart className="w-4 h-4" />
                    </button>
                </div>

                {/* Add to Cart Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-white/90 dark:bg-black/80 backdrop-blur-sm text-premium-dark dark:text-white py-3 rounded-md font-medium text-sm hover:bg-premium-dark hover:text-white dark:hover:bg-premium-gold dark:hover:text-premium-dark transition-colors shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-700"
                    >
                        <Plus className="w-4 h-4 mr-2" /> Add to Cart
                    </button>
                </div>
            </div>

            {/* Details */}
            <div className="p-5">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.category?.name || product.category}</p>
                <h3 className="font-serif font-bold text-gray-900 dark:text-gray-100 text-lg mb-2 group-hover:text-premium-slate dark:group-hover:text-premium-gold transition-colors">
                    {product.name}
                </h3>
                <div className="flex items-center justify-between">
                    <span className="text-premium-dark dark:text-premium-gold font-medium">₹{parseFloat(product.price).toLocaleString('en-IN')}</span>
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-[#D4AF37] border border-gray-200 dark:border-gray-600"></div>
                        <div className="w-3 h-3 rounded-full bg-[#2C3E50] border border-gray-200 dark:border-gray-600"></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
