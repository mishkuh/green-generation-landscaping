export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Media, Service } from '@/payload-types';

const Services = async () => {
    const payload = await getPayload({ config })

    const servicesData = await payload.find({
        collection: 'services',
        depth: 1
    })

    const services = servicesData.docs as unknown as Service[];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-green-800 to-green-600 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-novecento-sans">Our Services</h1>
                        <p className="text-xl text-green-50">
                            Comprehensive landscaping solutions to create and maintain beautiful outdoor spaces
                        </p>
                    </div>
                </div>
            </section>
            {/* Services Grid */}
            <section className="py-20 bg-stone-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const bannerImage = service.bannerImage as Media;
                            const icon = service.icon as Media;

                            return (
                                <div
                                    key={service.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                                >
                                    <Link href={`/services/${service.id}`} className="flex flex-col h-full">
                                        <div className="relative h-56 overflow-hidden">
                                            {bannerImage?.url && (
                                                <Image
                                                    alt={bannerImage.alt || service.title}
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                    src={bannerImage.url}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                                            <div className="absolute bottom-4 left-4">
                                                <div className="bg-green-600 p-3 rounded-full flex items-center justify-center w-12 h-12">
                                                    {icon?.url && (
                                                        <Image
                                                            src={icon.url}
                                                            alt={icon.alt || 'Service Icon'}
                                                            width={24}
                                                            height={24}
                                                            className="w-6 h-6 brightness-0 invert"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-grow">
                                            <h3 className="text-2xl font-bold text-stone-900 mb-3 font-novecento-sans">{service.title}</h3>
                                            <p className="text-stone-600 mb-4">{service.description}</p>
                                            <div className="space-y-2">
                                                {service.featureList?.slice(0, 4).map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                                        <span className="text-sm text-stone-700">{item.feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-6 pt-0 content-center">
                                            <Button>
                                                Learn More →
                                            </Button>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">

                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-gradient-to-br from-green-700 to-green-500 overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="text-center text-white max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-novecento-sans">
                            Need Multiple Services?
                        </h2>
                        <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                            We offer customized packages that combine services to meet your specific needs and budget
                        </p>
                        <Link href="/contact">
                            <Button className="bg-white text-green-800 hover:bg-green-50 font-semibold px-8 py-3 rounded-lg transition-colors">
                                Request a Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
