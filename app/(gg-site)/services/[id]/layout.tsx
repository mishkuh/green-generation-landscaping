import type { Metadata } from 'next'
import config from '@/payload.config'
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { id } = await params
    const payload = await getPayload({ config })

    const result = await payload.find({
        collection: 'services',
        where: {
            id: {
                equals: id,
            },
        },
    })

    const service = result.docs[0]

    if (!service) notFound()
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
