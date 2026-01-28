import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { id } = await params
    const payload = await getPayload({ config })

    const result = await payload.find({
        collection: 'portfolio-projects',
        where: {
            id: {
                equals: id,
            },
        },
    })

    const project = result.docs[0]

    if (!project) notFound()

    return {
        title: `${project.title} - Project Portfolio | Green Generation Landscaping`,
        description: `${project.title} - ${project.description?.substring(0, 150)}...`,
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
