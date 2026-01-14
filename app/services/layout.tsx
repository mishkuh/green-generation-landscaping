import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Landscaping Services - Green Generation Landscaping | Professional Landscape Care',
    description: 'Professional landscaping services including maintenance, hardscaping, irrigation, tree care, and seasonal color. Expert landscape solutions in the Greater Seattle Area.',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
