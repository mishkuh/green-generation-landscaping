export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import { Button, Box, Section, Container, Grid, Heading, Text, Card, Flex, Inset } from '@radix-ui/themes';
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
        <Box pt="9" className="bg-transparent">
            {/* Hero Section */}
            <Section size="3" className="bg-[var(--grass-12)]">
                <Container size="3">
                    <Flex direction="column" align="center" className="text-center text-white max-w-3xl mx-auto">
                        <Heading size="8" mb="6" className="font-novecento-sans text-white">Our Services</Heading>
                        <Text size="5" className="text-green-50 block">
                            Comprehensive landscaping solutions to create and maintain beautiful outdoor spaces
                        </Text>
                    </Flex>
                </Container>
            </Section>
            {/* Services Grid */}
            <Section size="3" className="bg-[var(--gray-2)]">
                <Container size="4" px="4">
                    <Grid columns={{ initial: '1', md: '2', lg: '3' }} gap="8">
                        {services.map((service, index) => {
                            const bannerImage = service.bannerImage as Media;

                            return (
                                <Card asChild key={service.id} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <Link href={`/services/${service.id}`} className="flex flex-col h-full text-decoration-none block">
                                        <Inset className="relative h-56 overflow-hidden">
                                            {bannerImage?.url && (
                                                <Image
                                                    alt={bannerImage.alt || service.title}
                                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                    src={bannerImage.url}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            )}
                                            <Box className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                                        </Inset>
                                        <Box className="p-6 flex-grow flex flex-col">
                                            <Heading size="5" mb="4" className="text-[var(--gray-12)] font-novecento-sans leading-tight">{service.title}</Heading>
                                            <Text as="p" size="2" className="text-[var(--gray-11)] mb-6 leading-relaxed">{service.description}</Text>
                                            <Flex direction="column" gap="2.5" className="mt-auto">
                                                {service.featureList?.slice(0, 4).map((item, idx) => (
                                                    <Flex key={idx} align="center" gap="2">
                                                        <Box className="w-1.5 h-1.5 bg-[var(--grass-9)] rounded-full shrink-0" />
                                                        <Text size="2" className="text-[var(--gray-12)]">{item.feature}</Text>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        </Box>
                                        <Box px="6" pb="6" pt="4">
                                            <Button variant="solid" color="green" highContrast className="w-full">
                                                Learn More →
                                            </Button>
                                        </Box>
                                    </Link>
                                </Card>
                            );
                        })}
                    </Grid>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section size="3" className="bg-[var(--grass-12)]">
                <Container size="4" className="text-center">
                    <Flex direction="column" align="center" gap="4">
                        <Heading size="8" className="text-[var(--grass-1)] font-novecento-sans">
                            Need Multiple Services?
                        </Heading>
                        <Text size="5" className="text-[var(--grass-1)] mb-8 max-w-2xl mx-auto block">
                            We offer customized packages that combine services to meet your specific needs and budget
                        </Text>
                        <Button asChild size="4" className="text-[var(--grass-1)]">
                            <Link href="/contact">
                                Request a Quote
                            </Link>
                        </Button>
                    </Flex>
                </Container>
            </Section>
        </Box>
    );
};

export default Services;
