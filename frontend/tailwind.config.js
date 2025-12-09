/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'premium-dark': '#1a1a1a', // Royal Charcoal
                'premium-cream': '#f9f9f5', // Cream
                'premium-gold': '#d4af37', // Gold
                'premium-slate': '#2c3e50', // Slate
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
