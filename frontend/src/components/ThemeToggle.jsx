import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode);

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full text-gray-500 hover:text-premium-dark dark:text-gray-400 dark:hover:text-premium-gold transition-colors focus:outline-none"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
};

export default ThemeToggle;
