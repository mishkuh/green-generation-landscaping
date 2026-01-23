export const dynamic = 'force-dynamic'

import React from 'react';
import Link from 'next/link';
import * as motion from 'motion/react-client'
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation';
import { Media } from '@/payload-types';

const ProjectDetail = async (
    { params }: { params: Promise<{ id: string }> }
) => {
    const { id } = await params
    const payload = await getPayload({ config })

    const result = await payload.find({
        collection: 'portfolio-projects',
        where: {
            id: {
                equals: id,
            },
        },
    })

    const projectDetails = result.docs[0]
    if (!projectDetails) return notFound()

    if (!projectDetails) {
        return (
            <div className="pt-32 text-center pb-20">
                <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                <Link href="/portfolio" className="text-green-600 hover:underline">Back to Portfolio</Link>
            </div>
        );
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[400px]">
                <div className="absolute inset-0">
                    <Image
                        alt={(projectDetails.banner_image as Media).alt}
                        className="w-full h-full object-cover"
                        src={(projectDetails.banner_image as Media).url || ''}
                        fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                </div>
                <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
                    <div>
                        <Link href="/portfolio" className="inline-flex items-center text-white mb-4 hover:text-green-300 transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Portfolio
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-white font-novecento-sans"
                        >
                            {projectDetails.title}
                        </motion.h1>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">

                </div>
            </section>

            {/* Project Info */}
            <section className="py-8 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-6 justify-center">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-green-600" />
                            <span className="text-stone-700">{projectDetails.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-green-600" />
                            <span className="text-stone-700">
                                {projectDetails?.date}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-stone-900 mb-4 font-novecento-sans">Project Overview</h2>
                                <p className="text-lg text-stone-700 leading-relaxed">{projectDetails.description}</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-novecento-sans">The Challenge</h3>
                                <p className="text-stone-700 leading-relaxed">{projectDetails.challenge}</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-novecento-sans">Our Solution</h3>
                                <p className="text-stone-700 leading-relaxed">{projectDetails.solution}</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4 font-novecento-sans">Project Gallery</h3>
                                {projectDetails.image_gallery?.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {projectDetails.image_gallery?.map((image) => (
                                            <div key={image.id} className="relative h-64 rounded-lg overflow-hidden group">
                                                <Image
                                                    src={(image.image as Media).url || ''}
                                                    alt={(image.image as Media).alt || projectDetails.title}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-stone-500 italic">No images available for this project.</p>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                                <h3 className="text-xl font-bold text-stone-900 mb-4 font-novecento-sans">Key Features</h3>
                                <ul className="space-y-3">
                                    {projectDetails.feature_list?.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                                            <span className="text-stone-700">{feature.feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-stone-200">
                                    <p className="text-sm text-stone-600 mb-4">
                                        Interested in a similar project?
                                    </p>
                                    <Link href="/contact">
                                        <Button className="w-full bg-green-600 hover:bg-green-700">
                                            Get Started
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
