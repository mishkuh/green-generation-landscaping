import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - Green Generation Landscaping | Get Your Free Consultation',
    description: 'Contact Green Generation Landscaping for a free landscaping consultation. Reach out via phone, email, or our contact form to discuss your outdoor project needs.',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
