import { CollectionConfig } from "payload";

const Services: CollectionConfig = {
    slug: 'services',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'subtitle', 'updatedAt'],
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'General Info',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'subtitle',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'icon',
                            type: 'upload',
                            relationTo: 'media',
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            required: true,
                        },
                        {
                            name: 'detailedDescription',
                            type: 'richText', // Great for formatting long-form content
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Lists & Features',
                    fields: [
                        {
                            name: 'featureList',
                            type: 'array',
                            label: 'Feature List',
                            labels: {
                                singular: 'Feature',
                                plural: 'Features'
                            },
                            required: true,
                            fields: [{ name: 'feature', type: 'text', required: true }],
                        },
                        {
                            name: 'benefitList',
                            type: 'array',
                            label: 'Benefit List',
                            labels: {
                                singular: 'Benefit',
                                plural: 'Benefits'
                            },
                            required: true,
                            fields: [{ name: 'benefit', type: 'text', required: true }],
                        },
                        {
                            name: 'processList',
                            type: 'array',
                            label: 'Process List',
                            labels: {
                                singular: 'Step',
                                plural: 'Steps'
                            },
                            required: true,
                            fields: [
                                { name: 'stepTitle', type: 'text', required: true },
                                { name: 'stepDescription', type: 'textarea', required: true },
                            ],
                        },
                    ],
                },
                {
                    label: 'Logistics',
                    fields: [
                        {
                            name: 'pricing',
                            type: 'text', // Or 'number' depending on your needs
                            required: true,
                        },
                        {
                            name: 'timeline',
                            type: 'text', // e.g., "2-4 weeks"
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Media',
                    fields: [
                        {
                            name: 'bannerImage',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                        {
                            name: 'imageGallery',
                            type: 'array',
                            required: true,
                            label: 'Image Gallery',
                            labels: {
                                singular: 'Image',
                                plural: 'Images'
                            },
                            fields: [
                                {
                                    name: 'image',
                                    type: 'upload',
                                    relationTo: 'media',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default Services;