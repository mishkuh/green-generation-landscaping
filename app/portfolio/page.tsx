"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WaveDivider from '@/app/ui/components/WaveDivider';
import AnimatedWaveBackground from '@/app/ui/components/AnimatedWaveBackground';
import { portfolioData } from '@/app/lib/data';
import { Button } from '@/app/ui/components/button';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const projects = Object.values(portfolioData);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-green-800 to-green-600 overflow-hidden">
                <AnimatedWaveBackground height="100%" opacity={0.15} color="#ffffff" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-white max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-novecento-sans">Our Portfolio</h1>
                        <p className="text-xl text-green-50">
                            Explore our completed projects and see how we transform outdoor spaces into beautiful landscapes
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <WaveDivider color="#fafaf9" animate={true} />
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-stone-50 relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {['all', 'residential', 'commercial'].map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === category
                                    ? 'bg-green-600 text-white shadow-lg'
                                    : 'bg-white text-stone-700 hover:bg-stone-100'
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-stone-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                <Link href={`/portfolio/${project.id}`}>
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            src="https://picsum.photos/200/300" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-2">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-stone-900 mb-2 font-novecento-sans">{project.title}</h3>
                                        <p className="text-stone-600 mb-2">{project.location}</p>
                                        <p className="text-stone-700 mb-4">{project.description}</p>
                                        <span className="text-green-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                                            View Project
                                            <ArrowRight className="ml-1 w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <WaveDivider flip color="#15803d" animate={true} intensity="low" />
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-green-700 overflow-hidden">
                <AnimatedWaveBackground height="100%" opacity={0.1} color="#ffffff" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-novecento-sans">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                            Let's create something beautiful together
                        </p>
                        <Link href="/contact">
                            <Button className="bg-white text-green-800 hover:bg-green-50 font-semibold px-8 py-3 rounded-lg transition-colors">
                                Get Free Consultation
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
