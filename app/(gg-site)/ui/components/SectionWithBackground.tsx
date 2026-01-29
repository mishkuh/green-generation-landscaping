import { Section, Box, Inset } from "@radix-ui/themes";
import clsx from "clsx";
import Image from "next/image";

const SectionWithBackground = ({ children, className, image, height }: { children: React.ReactNode, className?: string, image?: string, height?: string }) => {
    return (
        <Section position="relative" size="4" width="100%" height={height ? height : "calc(100vh - 95px)"} className={clsx(
            "overflow-hidden",
            className
        )} >
            <Inset>
                {/* Background Image */}
                <Image
                    alt={image ? "" : "Lush green landscape with beautiful garden"}
                    src={image || "/hero-bg.jpg"}
                    objectFit='cover'
                    fill
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gray-12)] via-transparent to-transparent opacity-60" />
            </Inset>
            {children}
        </Section>
    );
};

export default SectionWithBackground;
