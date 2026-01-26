import * as motion from 'motion/react-client'
import { ArrowRight } from 'lucide-react';
import { Flex, Box, Heading, Text, Inset, AspectRatio, Grid } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

interface ShowCard {
    title: string;
    description: string;
    image: string;
    link: string;
}

interface ShowCardGridProps {
    showCards: ShowCard[];
}

export default function ShowCardGrid({ showCards }: ShowCardGridProps) {
    return (
        <Grid columns={{ initial: '1', sm: '2', md: '4', lg: '4', xl: '4' }} gap="4">
            {showCards.map((props, index) => (
                <motion.div
                    key={props.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView="rest"
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ height: '100%' }}
                    whileHover="hovered"
                    variants={{
                        hovered: { opacity: 1, y: 0 },
                        rest: { opacity: 1, y: 0 }
                    }}
                >
                    <Box className='overflow-hidden z-20 rounded-xl shadow-xl h-[100%] cursor-pointer border-[1px] border-[var(--grass-5)]/50'>
                        <Flex asChild direction="column" height="100%">
                            <Link href={props.link}>
                                <Inset side="top" className="flex-1">
                                    <AspectRatio ratio={4 / 3}>
                                        <motion.div
                                            className="relative w-full h-full" // Example size and relative positioning
                                            variants={{
                                                hovered: { scale: 1.2 },
                                                rest: { scale: 1 }
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Image
                                                alt={props.title}
                                                src={props.image}
                                                fill
                                                className='object-cover'
                                            />

                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-[var(--grass-12)] via-transparent to-transparent opacity-70"
                                            />
                                        </motion.div>
                                    </AspectRatio>
                                </Inset>
                                <Flex direction="column" justify="between" py="4" pr="8" pl="4" className='flex-1'>
                                    <Flex direction="column" gap="4">
                                        <Heading as="h3" size="5" weight="bold">
                                            {props.title}
                                        </Heading>
                                        <Text as="p" color="gray">
                                            {props.description}
                                        </Text>
                                    </Flex>
                                    <Flex gap="1" direction="row" align="center">
                                        <Text weight="bold" style={{ color: "var(--grass-11)" }}>
                                            Learn More
                                        </Text>
                                        <ArrowRight style={{ color: "var(--grass-11)" }} />
                                    </Flex>
                                </Flex>
                            </Link>
                        </Flex>
                    </Box>
                </motion.div>
            ))}
        </Grid>
    );
}