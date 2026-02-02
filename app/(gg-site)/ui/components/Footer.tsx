import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import { Mail, Phone, MapPin } from 'lucide-react';
import config from '@/payload.config';
import { Service } from '@/payload-types';
import logo from '@/public/logo.png';
import { Box, Flex, Heading, Text, AspectRatio, Container, Section, Separator } from '@radix-ui/themes';

const Footer = async () => {
    const payload = await getPayload({ config })

    const servicesData = await payload.find({
        collection: 'services',
        where: {
            id: {
                in: ['1', '2', '3']
            }
        }
    })

    const featuredServices = servicesData.docs as Service[];

    return (
        <Section className="bg-[var(--gray-12)] text-[var(--gray-9)] px-2">
            <Container className="pt-10">
                <Flex align={{ initial: 'center', sm: 'start' }} direction={{ initial: 'column', sm: 'row' }}>
                    {/* Brand Column */}
                    <Flex direction="column" className="flex-2 p-2 h-100%">
                        <Flex align="center" className="p-2">
                            <Box width="50px" height="50px" className="rounded-full overflow-hidden bg-white p-1 mr-3">
                                <AspectRatio ratio={1 / 1}>
                                    <Image src={logo} alt="Logo" fill className="object-contain" />
                                </AspectRatio>
                            </Box>
                            <Heading as="h3" className="text-[var(--gray-1)] font-novecento-sans">
                                Green Generation
                            </Heading>
                        </Flex>
                        <Text wrap="balance" as="p">
                            Transforming outdoor spaces into beautiful, sustainable landscapes that enhance your property and lifestyle.
                        </Text>
                    </Flex>

                    {/* Quick Links Column */}
                    <Flex direction="column" justify="between" align={{ initial: 'center', sm: 'start' }} className="flex-1 p-2 h-100%">
                        <Heading className="text-[var(--gray-1)] font-novecento-sans p-1 mb-1 mr-1">
                            Quick Links
                        </Heading>
                        <Link className="hover:text-[var(--lime-8)] transition-all duration-200 p-1" href="/">Home</Link>
                        <Separator size="1" orientation="vertical" />
                        <Link className="hover:text-[var(--lime-8)] transition-all duration-200 p-1" href="/portfolio">Portfolio</Link>
                        <Separator size="1" orientation="vertical" />
                        <Link className="hover:text-[var(--lime-8)] transition-all duration-200 p-1" href="/services">Services</Link>
                        <Separator size="1" orientation="vertical" />
                        <Link className="hover:text-[var(--lime-8)] transition-all duration-200 p-1" href="/about">About</Link>
                        <Separator size="1" orientation="vertical" />
                        <Link className="hover:text-[var(--lime-8)] transition-all duration-200 p-1" href="/contact">Contact</Link>
                    </Flex>

                    {/* Services Column */}
                    <Flex direction="column" justify="between" className="flex-1 p-2 h-100%" align={{ initial: 'center', sm: 'start' }}>
                        <Heading className="text-[var(--gray-1)] font-novecento-sans p-1 mb-1 mr-1">
                            Services
                        </Heading>
                        <Link className="hover:text-[var(--lime-8)] transition-all duration-200 p-1" href={`/services/${featuredServices[0].id}`}>{featuredServices[0].title}</Link>
                        <Separator size="1" orientation="vertical" />
                        <Link className="hover:text-[var(--lime-8)] transition-all duration-200 p-1" href={`/services/${featuredServices[1].id}`}>{featuredServices[1].title}</Link>
                        <Separator size="1" orientation="vertical" />
                        <Link className="hover:text-[var(--lime-8)] transition-all duration-200 p-1" href={`/services/${featuredServices[2].id}`}>{featuredServices[2].title}</Link>
                        <Separator size="1" orientation="vertical" />
                        <Link className="hover:text-[var(--lime-8)] transition-all duration-200 p-1" href="/services">All Services</Link>
                    </Flex>

                    {/* Contact Info Column */}
                    <Flex direction="column" justify="between" className="flex-1 p-2 h-100%" align={{ initial: 'center', sm: 'start' }}>
                        <Heading className="text-[var(--gray-1)] font-novecento-sans p-1 mb-1 mr-1">
                            Contact Info
                        </Heading>
                        <Flex align="center" className="p-1">
                            <MapPin className="text-[var(--lime-9)] mr-2" />
                            <Text className="text-[var(--gray-9)]">
                                Greater Seattle Area, WA
                            </Text>
                        </Flex>
                        <Flex align="center" className="p-1">
                            <Phone className="text-[var(--lime-9)] mr-2" />
                            <Text className="text-[var(--gray-9)]">
                                (253) 304-7250
                            </Text>
                        </Flex>
                        <Flex align="center" className="p-1">
                            <Mail className="text-[var(--lime-9)] mr-2" />
                            <Text className="text-[var(--gray-9)]">
                                ggenerationlandscaping@gmail.com
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
            <Container>
                <Flex align="center" justify="center" className="w-full border-t border-[var(--gray-11)] py-2 my-2">
                    <Text className='text-[var(--gray-9)]'>
                        © {new Date().getFullYear()} Green Generation Landscaping. All rights reserved.
                    </Text>
                </Flex>
            </Container>
        </Section >
    );
};

export default Footer;