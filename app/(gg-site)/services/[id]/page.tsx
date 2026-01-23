export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Clock, DollarSign } from 'lucide-react';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import config from '@/payload.config'
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import { Media } from '@/payload-types';

const ServiceDetail = async (
    { params }: { params: Promise<{ id: string }> }
) => {

    const { id } = await params
    const payload = await getPayload({ config })

    const result = await payload.find({
        collection: 'services',
        where: {
            id: {
                equals: id,
            },
        },
    })

    const service = result.docs[0]
    if (!service) return notFound()

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[400px]">
                <div className="absolute inset-0">
                    <Image
                        alt={service.title}
                        className="w-full h-full object-cover"
                        src={(service.bannerImage as Media).url || ''}
                        fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                </div>
                <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
                    <div>
                        <Link href="/services" className="inline-flex items-center text-white mb-4 hover:text-green-300 transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Services
                        </Link>
                        <h1
                            className="text-4xl md:text-5xl font-bold text-white mb-2 font-novecento-sans"
                        >
                            {service.title}
                        </h1>
                        <p
                            className="text-xl text-green-50"
                        >
                            {service.subtitle}
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">

                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-stone-900 mb-4 font-novecento-sans">Service Overview</h2>
                                <p className="text-lg text-stone-700 leading-relaxed">{service.description}</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-6 font-novecento-sans">Our Process</h3>
                                <div className="space-y-4">
                                    {service.processList?.map((item, index) => (
                                        <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow">
                                            <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-stone-900 mb-1 font-novecento-sans">{item.stepTitle}</h4>
                                                <p className="text-stone-600">{item.stepDescription}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-6 font-novecento-sans">Gallery</h3>
                                {service.imageGallery?.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.imageGallery?.map((imageData) => (
                                            <div key={imageData.id} className="relative h-64 rounded-lg overflow-hidden group">
                                                <Image
                                                    src={(imageData.image as Media).url || ''}
                                                    alt={(imageData.image as Media).alt}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-stone-500 italic">No images available for this service.</p>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-4 font-novecento-sans">Service Benefits</h3>
                                    <ul className="space-y-3 mb-6">
                                        {service.benefitList.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                <span className="text-stone-700">{benefit.benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-stone-200 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <DollarSign className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-stone-900 mb-1 font-novecento-sans">Pricing</p>
                                            <p className="text-sm text-stone-600">{service.pricing}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 mb-6">
                                        <Clock className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-stone-900 mb-1 font-novecento-sans">Timeline</p>
                                            <p className="text-sm text-stone-600">{service.timeline}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-stone-200">
                                    <Link href="/contact">
                                        <Button className="w-full bg-green-600 hover:bg-green-700">
                                            Request a Quote
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

export default ServiceDetail;
