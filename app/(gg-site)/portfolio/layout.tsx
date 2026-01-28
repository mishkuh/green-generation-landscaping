import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Portfolio - Green Generation Landscaping | View Our Work',
    description: 'Browse our portfolio of completed landscaping projects. See beautiful residential and commercial landscape designs by Green Generation Landscaping\'s expert team.',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
