export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Clock, DollarSign } from 'lucide-react';
import { Button, Box, Section, Container, Grid, Flex, Heading, Text, Card, Avatar, Separator } from '@radix-ui/themes';
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
        <Box>
            {/* Hero Section */}
            <Section p="0" className="relative h-[50vh] overflow-hidden">
                <Flex className="relative h-full w-full">
                    {/* Banner Image */}
                    <Image
                        alt={service.title}
                        src={(service.bannerImage as Media).url || ''}
                        objectFit='cover'
                        fill
                    />
                    {/* Background overlay */}
                    <Box className='absolute inset-0 bg-gradient-to-t from-[var(--gray-12)]/60 via-[var(--gray-12)]/0 to-[var(--gray-12)]/0' />

                    {/* Service Title */}
                    <Container size="2" className="h-full relative">
                        <Box px="6" py="3" mr="4" className='absolute bottom-6 left-6 z-20 backdrop-blur-md bg-gradient-to-b from-[var(--gray-1)]/10 to-[var(--gray-10)]/10 rounded-xl shadow-xl border-[1px] border-[var(--gray-10)]/70'>
                            <Flex direction="column" align="start">
                                <Button asChild variant="ghost" highContrast>
                                    <Link href="/services">
                                        <ArrowLeft className="w-5 h-5 mr-2" />
                                        Back to Services
                                    </Link>
                                </Button>
                                <Heading
                                    size="8"
                                    className="text-[var(--grass-1)] font-novecento-sans pt-2"
                                >
                                    {service.title}
                                </Heading>
                                <Text
                                    size="4"
                                    className="text-[var(--grass-1)]"
                                >
                                    {service.subtitle}
                                </Text>
                            </Flex>
                        </Box>
                    </Container>
                </Flex>
            </Section>

            {/* Service Overview */}
            <Section size="3" className="bg-[var(--gray-2)]">
                <Container size="4" px="4">
                    <Grid columns={{ initial: '1', lg: '3' }} gap="9">
                        <Flex direction="column" gap="9" className="lg:col-span-2">
                            <Flex direction="column" gap="2">
                                <Heading size="6" className="text-[var(--grass-11)] font-novecento-sans">Service Overview</Heading>
                                <Text size="4" className="text-[var(--gray-12)]">{service.description}</Text>
                            </Flex>

                            <Flex direction="column" gap="2">
                                <Heading size="5" className="text-[var(--grass-11)] font-novecento-sans">Our Process</Heading>
                                <Flex direction="column" gap="4">
                                    {service.processList?.map((item, index) => (
                                        <Card key={index} size="2">
                                            <Flex gap="4">
                                                <Flex justify="center" align="center" className="w-8 h-8 bg-[var(--grass-9)] text-white rounded-full font-bold shrink-0">
                                                    {index + 1}
                                                </Flex>
                                                <Box>
                                                    <Heading as="h4" size="3" weight="bold" className="text-[var(--gray-12)] mb-1 font-novecento-sans">{item.stepTitle}</Heading>
                                                    <Text size="2" className="text-[var(--gray-11)]">{item.stepDescription}</Text>
                                                </Box>
                                            </Flex>
                                        </Card>
                                    ))}
                                </Flex>
                            </Flex>

                            <Flex direction="column" gap="2">
                                <Heading size="5" className="text-[var(--grass-11)] mb-4 font-novecento-sans">Gallery</Heading>
                                {service.imageGallery?.length > 0 ? (
                                    <Grid columns={{ initial: '1', md: '2' }} gap="4">
                                        {service.imageGallery?.map((imageData) => (
                                            <Box key={imageData.id} className="relative h-64 rounded-lg overflow-hidden group">
                                                <Image
                                                    src={(imageData.image as Media).url || ''}
                                                    alt={(imageData.image as Media).alt || 'Gallery Image'}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </Box>
                                        ))}
                                    </Grid>
                                ) : (
                                    <Text className="text-[var(--gray-11)] italic">No images available for this service.</Text>
                                )}
                            </Flex>
                        </Flex>

                        <Flex p="4" direction="column" className="relative rounded-lg sticky top-40 self-start shadow-lg lg:col-span-1">
                            <Heading size="4" className="text-[var(--grass-11)] font-novecento-sans">Service Benefits</Heading>
                            <Flex pt="4" direction="column" gap="3">
                                {service.benefitList.map((benefit, index) => (
                                    <Flex direction="row" key={index} gap="2" align="center">
                                        <Check className="w-5 h-5 text-[var(--grass-9)] shrink-0" />
                                        <Text className="text-[var(--gray-12)]">{benefit.benefit}</Text>
                                    </Flex>
                                ))}
                            </Flex>

                            <Flex direction="column" gap="4" pt="4">
                                <Flex gap="3" align="start">
                                    <DollarSign className="w-5 h-5 text-[var(--grass-9)] shrink-0 mt-0.5" />
                                    <Box>
                                        <Text weight="bold" className="text-[var(--gray-12)] mb-1 block font-novecento-sans">Pricing</Text>
                                        <Text size="2" className="text-[var(--gray-11)]">{service.pricing}</Text>
                                    </Box>
                                </Flex>

                                <Flex gap="3" align="start" mb="2">
                                    <Clock className="w-5 h-5 text-[var(--grass-9)] shrink-0 mt-0.5" />
                                    <Box>
                                        <Text weight="bold" className="text-[var(--gray-12)] mb-1 block font-novecento-sans">Timeline</Text>
                                        <Text size="2" className="text-[var(--gray-11)]">{service.timeline}</Text>
                                    </Box>
                                </Flex>
                            </Flex>

                            <Flex direction="column" align="center" gap="2" px="6">
                                <Separator size="4" my="5" />
                                <Text size="2" className="text-[var(--gray-12)]">
                                    Ready to get started?
                                </Text>
                                <Button asChild size="4" variant="solid" color="green">
                                    <Link href="/contact">
                                        Request a Quote
                                    </Link>
                                </Button>
                            </Flex>
                        </Flex>
                    </Grid>
                </Container>
            </Section>
        </Box>
    );
};

export default ServiceDetail;
