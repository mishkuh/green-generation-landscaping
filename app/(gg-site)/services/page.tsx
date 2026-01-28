export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button, Box, Section, Container, Grid, Heading, Text, Card, Flex, Inset } from '@radix-ui/themes';
import { getPayload } from 'payload'
import config from '@/payload.config'
import ServiceCard from '@/app/(gg-site)/ui/components/ServiceCard';
import { Service } from '@/payload-types';
import AnimatedGrid from '@/app/(gg-site)/ui/components/AnimatedGrid';
import * as motion from 'motion/react-client'

const Services = async () => {
    const payload = await getPayload({ config })

    const servicesData = await payload.find({
        collection: 'services',
        depth: 1
    })

    const services = servicesData.docs as unknown as Service[];

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
                            <Heading size="8" mb="6" className="font-novecento-sans text-white">Our Services</Heading>
                            <Text size="5" className="text-green-50 block">
                                Comprehensive landscaping solutions to create and maintain beautiful outdoor spaces
                            </Text>
                        </Flex>
                    </motion.div>
                </Container>
            </Section>
            {/* Services Grid */}
            <Section size="3">
                <Container size="4" px="4">
                    <AnimatedGrid>
                        {services.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </AnimatedGrid>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section mt="3" size="3" className="bg-[var(--grass-12)]">
                <Container size="4" px="4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Flex direction="column" align="center" gap="4">
                            <Heading size="8" className="text-[var(--grass-1)] font-novecento-sans">
                                Need Multiple Services?
                            </Heading>
                            <Text size="5" className="text-[var(--grass-1)]">
                                We offer customized packages that combine services to meet your specific needs and budget
                            </Text>
                            <Button asChild size="4" className="text-[var(--grass-1)]">
                                <Link href="/contact">
                                    Request a Quote
                                </Link>
                            </Button>
                        </Flex>
                    </motion.div>
                </Container>
            </Section>
        </Box >
    );
};

export default Services;
