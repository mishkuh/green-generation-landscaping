import * as motion from 'motion/react-client'
import { ArrowRight } from 'lucide-react';
import { Flex, Heading, Text, Box } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedServiceCard = (props: { title: string, description: string, image: string, link: string }) => {
    return (
        <Flex asChild direction="column" height="100%" overflow="hidden" className='shadow-xl border-[1px] border-[var(--lime-5)]/50 rounded-[var(--radius-4)]'>
            <Link href={props.link}>
                <Box position="relative" width="100%" className="aspect-16/9">
                    <motion.div
                        className="relative w-full h-full"
                        variants={{
                            hovered: { scale: 1.1 },
                            rest: { scale: 1 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            alt={props.title}
                            src={props.image}
                            fill
                            className='object-cover'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-t from-[var(--lime-12)] via-transparent to-transparent opacity-70"
                        />
                    </motion.div>
                </Box>
                <Flex direction="column" justify="between" py="4" pr="8" pl="4" className='flex-1'>
                    <Flex direction="column" gap="4">
                        <Heading as="h3" size="5" weight="bold">
                            {props.title}
                        </Heading>
                        <Text as="p" color="gray">
                            {props.description}
                        </Text>
                    </Flex>
                    <Flex gap="1" direction="row" align="center" className="text-[var(--lime-11)] hover:text-[var(--lime-10)] transition-colors">
                        <Text weight="bold">
                            Learn More
                        </Text>
                        <ArrowRight />
                    </Flex>
                </Flex>
            </Link>
        </Flex>
    )
}

export default FeaturedServiceCard
