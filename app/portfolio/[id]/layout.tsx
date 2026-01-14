import type { Metadata } from 'next'
import { portfolioData } from '@/app/lib/data'

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { id } = await params
    const project = portfolioData[id as keyof typeof portfolioData]

    if (!project) {
        return {
            title: 'Project Not Found - Green Generation Landscaping',
        }
    }

    return {
        title: `${project.title} - Project Portfolio | Green Generation Landscaping`,
        description: `${project.title} - ${project.description.substring(0, 150)}...`,
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
