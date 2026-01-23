export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import * as motion from 'motion/react-client'
import { ArrowRight } from 'lucide-react';
import { fetchPortfolioDetails } from '@/app/(gg-site)/lib/data';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import { getPayload } from 'payload'
import config from '@/payload.config'

const Portfolio = async () => {
    const payload = await getPayload({ config })

    const data = await payload.find({
        collection: 'portfolio-projects'
    })

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-green-800 to-green-600 overflow-hidden">
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

                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-stone-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.docs.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                <Link href={`/portfolio/${project.id}`} className="flex flex-col h-full">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            src="https://xsccfbkilvspngsihxwg.supabase.co/storage/v1/object/public/green-generation-landscaping/images/hero-bg.jpg"
                                            width={200}
                                            height={300} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-2xl font-bold text-stone-900 mb-2 font-novecento-sans">{project.title}</h3>
                                        <p className="text-stone-600 mb-2">{project.location}</p>
                                        <p className="text-stone-700 mb-4">{project.description}</p>
                                    </div>
                                    <div className="p-6 pt-0 content-center">
                                        <Button>
                                            View Project →
                                        </Button>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">

                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-green-700 overflow-hidden">
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
