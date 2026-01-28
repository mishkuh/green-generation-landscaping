import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us - Green Generation Landscaping | Our Story & Team',
    description: 'Learn about Green Generation Landscaping - our story, values, and the experienced team dedicated to creating beautiful, sustainable outdoor spaces in the Bay Area.',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
