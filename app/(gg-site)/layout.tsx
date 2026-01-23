import type { Metadata } from 'next'
import Header from '@/app/(gg-site)/ui/components/Header'
import Footer from '@/app/(gg-site)/ui/components/Footer'
import './globals.css'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
    title: 'Green Generation Landscaping - Professional Landscaping Services',
    description: 'Professional landscaping services including landscape design, lawn maintenance, hardscaping, and irrigation systems. Transform your outdoor space with Green Generation Landscaping\'s expert team.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`min-h-screen bg-stone-50 antialiased`}>
                <Header />
                <Theme accentColor="green">{children}</Theme>
                <Footer />
            </body>
        </html>
    )
}
