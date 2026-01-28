export const dynamic = 'force-dynamic';

import React from 'react';
import { Suspense } from 'react';
import Link from 'next/link';
import * as motion from 'motion/react-client'
import { Button, Box, Section, Container, Heading, Text, Flex, Skeleton } from '@radix-ui/themes';
import { getPayload } from 'payload'
import config from '@/payload.config'
import AnimatedGrid from '@/app/(gg-site)/ui/components/AnimatedGrid';
import ProjectCard from '@/app/(gg-site)/ui/components/ProjectCard';
import { Media } from '@/payload-types';

const Portfolio = async () => {
    const payload = await getPayload({ config })

    const data = await payload.find({
        collection: 'portfolio-projects'
    })

    const projects = data.docs.map((project) => ({
        ...project,
        link: `/portfolio/${project.id}`,
        image: project.banner_image ? (project.banner_image as Media)?.url : ""
    }));

    return (
        <Box>
            {/* Hero Section */}
            <Section size="3" className="bg-[var(--grass-12)]">
                <Container size="3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Flex direction="column" align="center" className="text-center text-white max-w-3xl mx-auto">
                            <Heading size="8" mb="6" className="font-novecento-sans text-white">Our Portfolio</Heading>
                            <Text size="5" className="text-green-50 block">
                                Explore our completed projects and see how we transform outdoor spaces into beautiful landscapes
                            </Text>
                        </Flex>
                    </motion.div>
                </Container>
            </Section>

            {/* Projects Grid */}
            <Section size="4">
                <Container size="4" px="4">
                    <AnimatedGrid>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </AnimatedGrid>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section position="relative" size="3" className="bg-[var(--grass-12)]">
                <Container size="4" className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Flex direction="column" align="center" gap="4">
                            <Heading size="8" className="text-[var(--grass-1)] font-novecento-sans">
                                Ready to Start Your Project?
                            </Heading>
                            <Text size="5" className="text-[var(--grass-1)]  mb-8 max-w-2xl mx-auto block">
                                Let's create something beautiful together
                            </Text>
                            <Button asChild size="4" className="text-[var(--grass-1)]">
                                <Link href="/contact">
                                    Get Free Consultation
                                </Link>
                            </Button>
                        </Flex>
                    </motion.div>
                </Container>
            </Section>
        </Box>
    );
};

export default Portfolio;
