import type { Metadata } from 'next'
import Header from '@/app/ui/components/Header'
import Footer from '@/app/ui/components/Footer'
import { Toaster } from "@/app/ui/components/toaster"
import './globals.css'
import { inter } from '@/app/fonts';

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
            <body className={`min-h-screen bg-stone-50 ${inter.className} antialiased`}>
                <Header />
                {children}
                <Footer />
                <Toaster />
            </body>
        </html>
    )
}
