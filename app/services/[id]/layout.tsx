import type { Metadata } from 'next'
import { servicesData } from '../../lib/data'

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { id } = await params
    const service = servicesData[id as keyof typeof servicesData]

    if (!service) {
        return {
            title: 'Service Not Found - Green Generation Landscaping',
        }
    }

    return {
        title: `${service.title} - Professional Service Details | Green Generation Landscaping`,
        description: `${service.subtitle} - ${service.description.substring(0, 150)}...`,
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
