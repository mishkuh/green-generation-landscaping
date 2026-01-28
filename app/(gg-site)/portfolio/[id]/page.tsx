export const dynamic = 'force-dynamic'

import React from 'react';
import Link from 'next/link';
import * as motion from 'motion/react-client'
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { Button, Box, Section, Container, Grid, Flex, Heading, Text, Card, Separator } from '@radix-ui/themes';
import Image from 'next/image';
import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation';
import { Media } from '@/payload-types';
import SectionWithBackground from '@/app/(gg-site)/ui/components/SectionWithBackground';

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

    return (
        <Box>
            {/* Hero Section */}
            <SectionWithBackground height="60vh" image={(projectDetails.bannerImage as Media).url || ''}>
                {/* Project Title */}
                <Box position="absolute" bottom="6" left="6" px="6" py="3" className='backdrop-blur-md bg-gradient-to-b from-[var(--gray-1)]/10 to-[var(--gray-10)]/10 rounded-xl shadow-xl border-[1px] border-[var(--gray-10)]/70'>
                    <Flex direction="column" align="start">
                        <Button asChild variant="ghost" highContrast>
                            <Link href="/portfolio">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Portfolio
                            </Link>
                        </Button>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Heading
                                size="8"
                                className="text-[var(--grass-1)] font-novecento-sans pt-2"
                            >
                                {projectDetails.title}
                            </Heading>
                        </motion.div>
                    </Flex>
                </Box>
            </SectionWithBackground>

            {/* Location and Date */}
            <Section size="1">
                <Container size="4" px="4">
                    <Flex wrap="wrap" gap="6" justify="center">
                        <Flex align="center" gap="2">
                            <MapPin className="w-5 h-5 text-[var(--grass-9)]" />
                            <Text className="text-[var(--gray-12)]">{projectDetails.location}</Text>
                        </Flex>
                        <Flex align="center" gap="2">
                            <Calendar className="w-5 h-5 text-[var(--grass-9)]" />
                            <Text className="text-[var(--gray-12)]">
                                {new Date(projectDetails?.date).toLocaleDateString('en-US', {
                                    month: '2-digit',
                                    year: 'numeric'
                                })}
                            </Text>
                        </Flex>
                    </Flex>
                </Container>
            </Section>

            {/* Project Details */}
            <Section size="3">
                <Container size="4" px="4">
                    <Grid columns={{ initial: '1', md: '3' }} gap="9">
                        <Flex direction="column" gap="8" className="lg:col-span-2">
                            <Flex direction="column" gap="2">
                                <Heading size="6" className="text-[var(--grass-11)] font-novecento-sans">Project Overview</Heading>
                                <Text size="4" className="text-[var(--gray-12)]">{projectDetails.description}</Text>
                            </Flex>

                            <Flex direction="column" gap="2">
                                <Heading size="5" className="text-[var(--grass-11)] font-novecento-sans">The Challenge</Heading>
                                <Text className="text-[var(--gray-12)]">{projectDetails.challenge}</Text>
                            </Flex>

                            <Flex direction="column" gap="2">
                                <Heading size="5" className="text-[var(--grass-11)] font-novecento-sans">Our Solution</Heading>
                                <Text className="text-[var(--gray-12)]">{projectDetails.solution}</Text>
                            </Flex>

                            <Flex direction="column" gap="2">
                                <Heading size="5" className="text-[var(--grass-11)] mb-4 font-novecento-sans">Project Gallery</Heading>
                                {projectDetails.imageGallery?.length > 0 ? (
                                    <Grid columns={{ initial: '1', md: '2' }} gap="4">
                                        {projectDetails.imageGallery?.map((image) => (
                                            <Box key={image.id} className="relative h-64 rounded-lg overflow-hidden group">
                                                <Image
                                                    src={(image.image as Media).url || ''}
                                                    alt={(image.image as Media).alt || projectDetails.title}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </Box>
                                        ))}
                                    </Grid>
                                ) : (
                                    <Text className="text-[var(--gray-2)]0 italic">No images available for this project.</Text>
                                )}
                            </Flex>
                        </Flex>

                        <Flex p="6" direction="column" className="relative rounded-lg sticky top-40 self-start shadow-lg lg:col-span-1 bg-[var(--gray-1)]">
                            <Heading size="4" mb="4" className="text-[var(--grass-11)] font-novecento-sans">Key Features</Heading>
                            <Flex direction="column" gap="3">
                                {projectDetails.featureList?.map((feature, index) => (
                                    <Flex direction="row" key={index} gap="2" align="center">
                                        <Box className="w-1.5 h-1.5 bg-[var(--grass-9)] rounded-full shrink-0" />
                                        <Text className="text-[var(--gray-12)]">{feature.feature}</Text>
                                    </Flex>
                                ))}
                            </Flex>

                            <Flex direction="column" align="center" gap="3">
                                <Separator size="4" my="5" />
                                <Text size="2" className="text-[var(--gray-12)] whitespace-nowrap">
                                    Interested in a similar project?
                                </Text>
                                <Button asChild size="3" variant="solid" color="green">
                                    <Link href="/contact">
                                        Get Started
                                    </Link>
                                </Button>
                            </Flex>
                        </Flex>
                    </Grid>
                </Container>
            </Section>
        </Box >
    );
};

export default ProjectDetail;
