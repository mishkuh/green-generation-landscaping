import React from 'react';
import * as motion from 'motion/react-client'
import { Award, Users, User, Leaf, Heart } from 'lucide-react';
import Image from 'next/image';
import { Box, Container, Section, Grid, Flex, Heading, Text, Card, Avatar, AspectRatio } from '@radix-ui/themes';

const About = () => {
    const values = [
        {
            icon: Heart,
            title: 'Customer Care',
            description: 'Your satisfaction is our priority. We build lasting relationships with our clients.'
        },
        {
            icon: Award,
            title: 'Quality',
            description: 'We deliver exceptional craftsmanship in every project, big or small.'
        },
        {
            icon: Users,
            title: 'Community',
            description: 'We\'re proud to serve our local community.'
        },
        {
            icon: Leaf,
            title: 'Attention to Detail',
            description: 'We pay close attention to detail to deliver clean, beautiful work every time.'
        }
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Section size="3" className="bg-[var(--lime-12)]">
                <Container size="3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Flex direction="column" align="center" className="text-center text-[var(--gray-1)] max-w-3xl mx-auto">
                            <Heading size="8" mb="6" className="font-novecento-sans text-[var(--gray-1)]">About Green Generation Landscaping</Heading>
                            <Text size="5" className="text-green-50 block">
                                Creating beautiful, sustainable landscapes for over 20 years
                            </Text>
                        </Flex>
                    </motion.div>
                </Container>
            </Section>

            {/* Story Section */}
            <Section size="3" className="bg-[var(--gray-2)]">
                <Container size="4" px="4">
                    <Grid columns={{ initial: '1', md: '2' }} gap="9" align="center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Heading size="8" className="text-[var(--gray-12)] mb-6 font-novecento-sans">Our Story</Heading>
                            <Flex direction="column" gap="4">
                                <Text as="p" size="3" className="text-[var(--gray-12)] leading-relaxed">
                                    We have 20 years of experience in the industry. We're known for being punctual, reliable, and taking our work seriously to ensure high-quality results and full client satisfaction. Rain or shine, we show up and pay close attention to detail to deliver clean, beautiful work every time.
                                </Text>
                                <Text as="p" size="3" className="text-[var(--gray-12)] leading-relaxed">
                                    What started as a small operation with just a handful of clients has grown into a trusted name in Greater Seattle landscaping. Our success is built on a foundation of quality work and genuine care for our clients.
                                </Text>
                                <Text as="p" size="3" className="text-[var(--gray-12)] leading-relaxed">
                                    Today, we're proud to serve both residential and commercial clients throughout the region, bringing the same dedication to excellence that has defined us from day one.
                                </Text>
                            </Flex>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Box className="rounded-2xl overflow-hidden shadow-2xl h-96 relative">
                                <Image
                                    alt="Green Generation Landscaping team working on landscape project"
                                    className="object-cover"
                                    src="/trimming_bush_thumb.jpg"
                                    fill
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                </Container>
            </Section>

            {/* Values Section */}
            <Section size="3" className="bg-[var(--lime-12)]">
                <Container size="4" px="4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center text-[var(--gray-1)] mb-12"
                    >
                        <Heading size="8" mb="4" className="text-[var(--gray-1)] font-novecento-sans">Our Values</Heading>
                        <Text size="5" className="text-[var(--gray-1)]/90 max-w-2xl mx-auto">
                            These core principles guide everything we do
                        </Text>
                    </motion.div>

                    <Grid columns={{ initial: '1', md: '2', lg: '4' }} gap="6" className="max-w-6xl mx-auto">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Box className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors h-full">
                                        <Flex justify="center" mb="4">
                                            <Flex justify="center" align="center" className="bg-[var(--lime-9)] w-16 h-16 rounded-full">
                                                <Icon className="w-8 h-8 text-[var(--gray-1)]" />
                                            </Flex>
                                        </Flex>
                                        <Heading size="4" weight="bold" className="text-[var(--gray-1)] mb-2 font-novecento-sans">{value.title}</Heading>
                                        <Text size="2" className="text-green-50 block">{value.description}</Text>
                                    </Box>
                                </motion.div>
                            );
                        })}
                    </Grid>
                </Container>
            </Section>

            {/* Team Section */}
            <Section size="2" className="bg-[var(--gray-2)]">
                <Container size="1" px="4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Heading size="8" className="text-[var(--gray-12)] mb-4 font-novecento-sans">Meet the Founder</Heading>
                    </motion.div>

                    <Card asChild className="shadow-lg hover:shadow-2xl transition-shadow" size="2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Flex maxWidth="500px" gap="4" p="6" direction="column" justify="center">
                                <Heading size="6" className="text-[var(--gray-12)]">Pedro Morales</Heading>
                                <Text size="2" weight="bold" className="text-[var(--lime-9)]">Founder and Lead Landscaper</Text>
                                <Text size="2" className="text-[var(--gray-11)]">Pedro is a passionate landscaper with over 20 years of experience in the industry. He founded Green Generation Landscaping with the goal of providing high-quality landscaping services to the community.</Text>
                            </Flex>
                        </motion.div>
                    </Card>
                </Container>
            </Section>

            {/* Stats Section */}
            <Section size="3" className="bg-[var(--gray-1)]">
                <Container size="4" px="4">
                    <Grid columns={{ initial: '2', md: '4' }} gap="8" className="max-w-4xl mx-auto">
                        {[
                            { number: '20+', label: 'Years Experience' },
                            { number: '500+', label: 'Projects Completed' },
                            { number: '200+', label: 'Happy Clients' },
                            { number: '10+', label: 'Team Members' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <Text size="8" weight="bold" className="text-[var(--lime-9)] mb-2 block font-novecento-sans">
                                    {stat.number}
                                </Text>
                                <Text size="3" weight="medium" className="text-[var(--gray-11)] block">{stat.label}</Text>
                            </motion.div>
                        ))}
                    </Grid>
                </Container>
            </Section>
        </Box>
    );
};

export default About;
