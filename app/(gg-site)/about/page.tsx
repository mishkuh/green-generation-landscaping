import React from 'react';
import * as motion from 'motion/react-client'
import { Award, Users, User, Leaf, Heart } from 'lucide-react';
import Image from 'next/image';
import { Box, Container, Section, Grid, Flex, Heading, Text, Card, Avatar } from '@radix-ui/themes';

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

    const team = [
        {
            name: 'Pedro Morales',
            role: 'Founder & Lead',
            bio: 'With over 20 years of experience in landscape design, Pedro founded Green Generation Landscaping to bring sustainable, beautiful landscapes to the Greater Seattle Area.'
        },
        {
            name: 'Team Member 1',
            role: 'Operations Manager',
            bio: '______ ensures every project runs smoothly from consultation to completion, maintaining our high standards of quality.'
        },
        {
            name: 'Team Member 2',
            role: 'Master Horticulturist',
            bio: '_____ expertise in plant health and sustainable practices ensures our landscapes thrive for years to come.'
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
                                    src="/hero-bg.jpg"
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
            <Section size="3" className="bg-[var(--gray-2)]">
                <Container size="4" px="4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Heading size="8" className="text-[var(--gray-12)] mb-4 font-novecento-sans">Meet Our Team</Heading>
                        <Text size="5" className="text-[var(--gray-11)] max-w-2xl mx-auto">
                            The experienced professionals behind every beautiful landscape
                        </Text>
                    </motion.div>

                    <Grid columns={{ initial: '1', md: '3' }} gap="8" className="max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full" size="2">
                                    <Flex justify="center" align="center" className="h-64 bg-[var(--gray-3)]">
                                        <User className="w-24 h-24 text-[var(--gray-8)]" />
                                    </Flex>
                                    <Box p="4">
                                        <Heading size="5" className="text-[var(--gray-12)] mb-1 font-novecento-sans">{member.name}</Heading>
                                        <Text size="2" weight="bold" className="text-[var(--lime-9)] mb-3 block">{member.role}</Text>
                                        <Text size="2" className="text-[var(--gray-11)] leading-relaxed block">{member.bio}</Text>
                                    </Box>
                                </Card>
                            </motion.div>
                        ))}
                    </Grid>
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
