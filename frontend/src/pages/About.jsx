import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
            <Navbar />
            <div className="container-custom py-20 md:py-32">
                <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-premium-dark dark:text-white">Our Story</h1>
                    <div className="w-20 h-1 bg-premium-gold mx-auto"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Founded with a simple mission: to bring comfort, safety, and style to the little ones we love most.
                        BabyBoutique began as a small family passion project and has grown into a curated destination for parents who value quality.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        We believe that every stitch matters. That's why we partner exclusively with artisans who use organic materials, non-toxic dyes, and sustainable practices.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800" className="rounded-xl shadow-lg" alt="About Us 1" />
                        <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800" className="rounded-xl shadow-lg" alt="About Us 2" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
