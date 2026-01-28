import Image from 'next/image';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { Media, Service } from '@/payload-types';
import * as motion from 'motion/react-client'

const ServiceCard = (service: Service) => {
    const image = service.bannerImage as Media;
    return (
        <motion.div
            initial="rest"
            whileHover="hovered"
            animate="rest"
            whileTap="pressed"
        >
            <motion.div
                variants={{
                    hovered: {
                        boxShadow: "0px 5px 15px 5px var(--gray-3)",
                        y: -5
                    },
                    rest: {
                        boxShadow: "0px 2px 10px 5px var(--gray-3)",
                        y: 0
                    },
                    pressed: {
                        boxShadow: "0px 0px 10px 3px var(--gray-3)",
                        y: 0
                    }
                }}
                transition={{ duration: 0.3 }}
                className="max-w-[800px] rounded-[var(--radius-4)]"
            >
                <Flex asChild maxWidth="800px" direction="column" key={service.id} position="relative" overflow="hidden" className="border border-[var(--gray-3)] rounded-[var(--radius-4)]">
                    <Link href={`/services/${service.id}`}>
                        <Box position="relative" width="100%" className="aspect-16/9">
                            <Image
                                alt={image?.alt || service.title}
                                src={image?.url || ""}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--gray-12)] via-transparent to-transparent opacity-60" />
                        </Box>

                        <Flex direction="column" gap="4" p="6" pt="4">
                            <Flex direction="column" gap="2">
                                <Heading size="5" className="text-[var(--gray-12)]">{service.title}</Heading>
                                <Text as="p" size="2" className="text-[var(--gray-11)]">{service.description}</Text>
                                <Flex direction="column" gap="4">
                                    {service.featureList?.slice(0, 4).map((item, idx) => (
                                        <Flex key={idx} align="center" gap="2">
                                            <Box className="w-1.5 h-1.5 bg-[var(--grass-9)] rounded-full shrink-0" />
                                            <Text size="2" className="text-[var(--gray-12)]">{item.feature}</Text>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>
                            <Button size="2" variant="solid" className="cursor-pointer">
                                Learn More →
                            </Button>
                        </Flex>
                    </Link>
                </Flex >
            </motion.div>
        </motion.div>
    )
}

export default ServiceCard
