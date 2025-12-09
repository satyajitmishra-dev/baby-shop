import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (delta) => {
        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + delta }));
    };

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 py-6 border-b border-gray-100 dark:border-white/10 last:border-0">
            {/* Image */}
            <div className="w-24 h-24 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-between w-full sm:w-auto">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <h4 className="font-serif font-bold text-gray-900 dark:text-white">{item.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.category?.name || item.category}</p>
                    <p className="text-sm font-medium text-premium-dark dark:text-premium-gold">₹{parseFloat(item.price).toLocaleString('en-IN')}</p>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
                        <button
                            onClick={() => handleQuantityChange(-1)}
                            className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                        >
                            <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium dark:text-gray-200">{item.quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                        >
                            <Plus className="w-3 h-3" />
                        </button>
                    </div>

                    <p className="font-bold text-gray-900 dark:text-white w-16 text-right">
                        ₹{(parseFloat(item.price) * item.quantity).toLocaleString('en-IN')}
                    </p>

                    <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
