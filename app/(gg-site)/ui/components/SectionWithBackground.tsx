import { Section, Box, Inset } from "@radix-ui/themes";
import clsx from "clsx";
import Image from "next/image";

interface SectionWithBackgroundProps {
    children: React.ReactNode;
    imageUrl: string;
    alt: string;
    className?: string;
    height?: string;
    blurDataURL?: string;
}

const SectionWithBackground = (props: SectionWithBackgroundProps) => {
    const { children, className, imageUrl, alt, height, blurDataURL } = props;
    return (
        <Section position="relative" size="4" width="100%" height={height ? height : "calc(100vh - 95px)"} className={clsx(
            "overflow-hidden",
            className
        )} >
            <Inset>
                {/* Background Image */}
                <Image
                    alt={alt}
                    src={imageUrl}
                    objectFit='cover'
                    fill
                    priority={true}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gray-12)] to-transparent opacity-50" />
                <div className="absolute inset-0 bg-[var(--lime-11)] opacity-30"></div>
            </Inset>
            {children}
        </Section>
    );
};

export default SectionWithBackground;
