import Link from 'next/link';
import * as motion from 'motion/react-client'
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button, Flex, Box, Heading, Text, Grid, Container, Section, Em, Card } from '@radix-ui/themes';
import Image from 'next/image';
import ShowCardGrid from './ui/components/ShowCardGrid';

const Home = async () => {
    const featuredServices = [
        {
            title: 'Landscape Maintenance',
            description: 'Keep your landscaping healthy and pristine year-round',
            image: '/overhead.jpg',
            link: '/services/landscape-maintenance'
        },
        {
            title: 'Hardscaping',
            description: 'Patios, walkways, and outdoor living spaces',
            image: '/hardscaping.jpg',
            link: '/services/hardscaping'
        },
        {
            title: 'Irrigation Systems',
            description: 'Efficient watering solutions for a thriving landscape',
            image: '/irrigation.jpg',
            link: '/services/irrigation'
        },
        {
            title: 'View All Services',
            description: 'View all our services',
            image: '/trimming_bush.jpg',
            link: '/services'
        }
    ];

    const benefitsList = [
        'Licensed & Insured',
        'Eco-Friendly Practices',
        'Free Consultations',
        'Satisfaction Guaranteed',
        '20+ Years Experience',
        'Competitive Pricing'
    ];

    return (
        <Box>
            {/* Hero Section with Animated Background */}
            <Section className='min-h-screen relative pt-[9em]'>
                <Container size="2" className='h-[calc(100vh-9rem)]'>
                    <Flex
                        align="center"
                        justify="center"
                        className='h-[calc(100vh-9rem)]'
                    >
                        {/* Background Image */}
                        <Image
                            alt="Lush green landscape with beautiful garden"
                            src="/hero-bg.jpg"
                            objectFit='cover'
                            fill
                        />

                        {/* Background overlay */}
                        <Box className='absolute inset-0 bg-[var(--grass-12)] opacity-80' />

                        <Box p="8" className='z-20 backdrop-blur-md bg-gradient-to-b from-[var(--gray-1)]/10 to-[var(--gray-10)]/10 rounded-xl shadow-xl border-[1px] border-[var(--gray-10)]/70'>
                            {/* Hero Content */}
                            <Flex
                                align="center"
                                justify="center"
                            >
                                <Flex gap="4" direction="column" justify="center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Heading
                                            size="9"
                                            style={{ color: 'var(--gray-2)' }}
                                        >
                                            Transform Your Outdoor Space Into Paradise
                                        </Heading>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <Text
                                            size="6"
                                            style={{ color: 'var(--gray-2)' }}
                                        >
                                            Professional landscaping services that bring your vision to life
                                        </Text>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <Flex gap="4" direction={{ initial: 'column', sm: 'row' }}>
                                            <Button asChild size="4" variant="solid">
                                                <Link href="/contact">
                                                    Get Free Consultation
                                                    <ArrowRight />
                                                </Link>
                                            </Button>
                                            <Button asChild size="4" variant="outline">
                                                <Link href="/portfolio">
                                                    View Our Work
                                                </Link>
                                            </Button>
                                        </Flex>
                                    </motion.div>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                </Container>
            </Section>

            {/* Services Section */}
            <Section size="3">
                <Container size="3" px="4" mb="6">
                    {/* Heading and text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-[var(--grass-12)]"
                    >
                        <Heading size="8">Featured Services</Heading>
                        <Text size="5">
                            Comprehensive landscaping solutions for residential and commercial properties
                        </Text>
                    </motion.div>
                </Container>

                {/* Grid of services */}
                <Container size="4" px="6">
                    <ShowCardGrid showCards={featuredServices} />
                </Container>
            </Section>

            {/* Why Choose Us Section */}
            <Section size="3" className="bg-[var(--grass-12)]">
                <Container px="4" size="3" mb="6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Flex gap="4" direction="column">
                            <Heading size="8" className='text-[var(--grass-1)]'>Why Choose Green Generation Landscaping?</Heading>
                            <Text size="5" className='text-[var(--grass-2)]'>
                                We're committed to excellence in every project we undertake
                            </Text>
                        </Flex>
                    </motion.div>
                </Container>
                <Container p="3" size="3">
                    <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
                        {benefitsList.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Flex justify="center" className="bg-[var(--grass-1)]/90 h-[100%] p-2 rounded-lg">
                                    <Flex direction="row" align="center" gap="2">
                                        <CheckCircle className='text-[var(--grass-10)]' />
                                        <Text>{benefit}</Text>
                                    </Flex>
                                </Flex>
                            </motion.div>
                        ))}
                    </Grid>
                </Container>
            </Section >

            {/* Testimonials Section */}
            < Section size="3" >
                <Container size="3" px="4">
                    <Flex gap="4" direction="column" justify="center" align="center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Heading size="8">What Our Clients Say</Heading>
                        </motion.div>

                        <Grid columns={{ initial: '1', sm: '3', md: '3' }} gap="6">
                            {[
                                {
                                    name: 'Kirk Golub',
                                    text: 'Green Generation Landscaping continues to be my go-to landscaping company. The attention to detail is incredible!',
                                    rating: 5
                                },
                                {
                                    name: 'Michael Wiens',
                                    text: 'Professional and reliable. They exceeded our expectations on our residential landscaping.',
                                    rating: 5
                                },
                                {
                                    name: 'John Doe',
                                    text: 'Best landscaping company we\'ve worked with. They maintain our property beautifully and are always responsive.',
                                    rating: 5
                                }
                            ].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card size="3" variant="surface">
                                        <Flex direction="column" gap="4">
                                            <Flex gap="1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star color="var(--yellow-6)" fill="var(--yellow-6)" key={i} />
                                                ))}
                                            </Flex>
                                            <Text as="p" mb="4"><Em>"{testimonial.text}"</Em></Text>
                                            <Text weight="bold">{testimonial.name}</Text>
                                        </Flex>
                                    </Card>
                                </motion.div>
                            ))}
                        </Grid>
                    </Flex>
                </Container>
            </Section >

            {/* CTA Section */}
            < Section size="3" style={{ backgroundColor: 'var(--grass-12)' }}>
                <Container size="3" px="4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Flex direction="column" gap="4" justify="center" align="center">
                            <Heading size="8" style={{ color: 'var(--gray-1)' }}>
                                Ready to Transform Your Landscape?
                            </Heading>
                            <Text size="5" style={{ color: 'var(--gray-2)' }}>
                                Get started with a free consultation and let us bring your outdoor vision to life
                            </Text>
                            <Button asChild size="4">
                                <Link href="/contact">
                                    Schedule Free Consultation
                                    <ArrowRight />
                                </Link>
                            </Button>
                        </Flex>
                    </motion.div>
                </Container>
            </Section >
        </Box >
    );
};

export default Home;
