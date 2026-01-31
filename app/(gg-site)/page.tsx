import Link from 'next/link';
import * as motion from 'motion/react-client'
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button, Flex, Box, Heading, Text, Grid, Container, Section, Em, Card } from '@radix-ui/themes';
import AnimatedGrid from '@/app/(gg-site)/ui/components/AnimatedGrid';
import SectionWithBackground from '@/app/(gg-site)/ui/components/SectionWithBackground';
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Service, Media } from '@/payload-types';
import blurBg from '@/public/hero-bg.png';
import ServiceCard from '@/app/(gg-site)/ui/components/ServiceCard';

const Home = async () => {
    const payload = await getPayload({ config })
    
    const heroImageData = await payload.find({
        collection: 'media',
        where: {
            id: {
                equals: '1'
            }
        }
    })
    
    const servicesData = await payload.find({
        collection: 'services',
        where: {
            id: {
                in: ['4', '5', '6']
            }
        }
    })


    const heroImage = heroImageData.docs[0] as Media;
    const featuredServices = servicesData.docs as Service[];

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
            <SectionWithBackground imageUrl={heroImage.url!} alt={heroImage.alt} blurDataURL={blurBg.blurDataURL}>
                <Flex position="relative" align={{ initial: "end", sm: "center" }} justify="center" width="100%" height="100%">
                    {/* Hero Content */}
                    <Flex position="absolute" m="8px" maxWidth="800px" p="8" gap="4" direction="column" justify="center" className='backdrop-blur-md bg-[var(--gray-12)]/20 rounded-xl shadow-xl border-[1px] border-[var(--gray-10)]/70'>
                        <Heading
                            asChild
                            size={{ initial: "8", sm: "9" }}
                            style={{ color: 'var(--gray-2)' }}
                        >
                            <motion.header
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Transform Your Outdoor Space Into Paradise
                            </motion.header>
                        </Heading>
                        <Text
                            asChild
                            size={{ initial: "5", sm: "6" }}
                            style={{ color: 'var(--gray-2)' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Professional landscaping services that bring your vision to life
                            </motion.div>
                        </Text>
                        <Flex asChild gap="4" direction={{ initial: 'column', sm: 'row' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Button asChild size={{ initial: "3", sm: "4" }} variant="solid">
                                    <Link href="/contact">
                                        Get Free Consultation
                                        <ArrowRight />
                                    </Link>
                                </Button>
                                <Button asChild size={{ initial: "3", sm: "4" }} variant="outline" className='extra-vision'>
                                    <Link href="/portfolio">
                                        View Our Work
                                    </Link>
                                </Button>
                            </motion.div>
                        </Flex>
                    </Flex>
                </Flex>
            </SectionWithBackground>

            {/* Services Section */}
            <Section size="3">
                <Container asChild size="3" px="4" mb="6">
                    {/* Heading and text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-[var(--lime-12)]"
                    >
                        <Heading size="8">Featured Services</Heading>
                        <Text size="5">
                            Comprehensive landscaping solutions for residential and commercial properties
                        </Text>
                    </motion.div>
                </Container>

                {/* Grid of services */}
                <Container size="4" px="6">
                    <AnimatedGrid>
                        {featuredServices.map((service, index) => (
                            <ServiceCard key={index} {...{
                                title: service.title,
                                description: service.description,
                                bannerImageURL: (service.bannerImage as Media).thumbnailURL!,
                                alt: (service.bannerImage as Media).alt,
                                featureList: service.featureList,
                                link: `/services/${service.id}`
                            }} />
                        )).concat(
                            // Add a card to view all services
                            <ServiceCard key={featuredServices.length} {...{
                            title: 'View All Services',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                            bannerImageURL: '/trimming_bush_thumb.jpg',
                            alt: 'man caring for a bush',
                            featureList: [],
                            link: '/services/'
                        }} />
                        )}
                    </AnimatedGrid>
                </Container>
            </Section>

            {/* Why Choose Us Section */}
            <Section size="3" className="bg-[var(--lime-12)]">
                <Container px="4" size="3" mb="6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Flex gap="4" direction="column">
                            <Heading size="8" className='text-[var(--lime-1)]'>Why Choose Green Generation Landscaping?</Heading>
                            <Text size="5" className='text-[var(--lime-2)]'>
                                We're committed to excellence in every project we undertake
                            </Text>
                        </Flex>
                    </motion.div>
                </Container>
                <Container p="3" size="3">
                    <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
                        {benefitsList.map((benefit, index) => (
                            <Flex asChild justify="center" key={index} className="bg-[var(--lime-1)]/90 h-[100%] p-2 rounded-[var(--radius-3)]">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Flex direction="row" align="center" gap="2">
                                        <CheckCircle className='text-[var(--lime-10)]' />
                                        <Text>{benefit}</Text>
                                    </Flex>
                                </motion.div>
                            </Flex>
                        ))}
                    </Grid>
                </Container>
            </Section >
            {/* <WavySeparator waveColor="var(--lime-12)" className='white' /> */}

            {/* Testimonials Section */}
            < Section size="3" >
                <Container size="3" px="4">
                    <Flex gap="4" direction="column" justify="center" align="center">
                        <Heading asChild size="8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                What Our Clients Say
                            </motion.div>
                        </Heading>

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
                                <Card asChild size="3" variant="surface" key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Flex direction="column" gap="4">
                                            <Flex gap="1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star color="var(--yellow-6)" fill="var(--yellow-6)" key={i} />
                                                ))}
                                            </Flex>
                                            <Text as="p" mb="4"><Em>"{testimonial.text}"</Em></Text>
                                            <Text weight="bold">{testimonial.name}</Text>
                                        </Flex>
                                    </motion.div>
                                </Card>
                            ))}
                        </Grid>
                    </Flex>
                </Container>
            </Section >

            {/* CTA Section */}
            < Section size="3" style={{ backgroundColor: 'var(--lime-12)' }}>
                <Container size="3" px="4">
                    <Flex asChild direction="column" gap="4" justify="center" align="center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
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
                        </motion.div>
                    </Flex>
                </Container>
            </Section >
        </Box >
    );
};

export default Home;
