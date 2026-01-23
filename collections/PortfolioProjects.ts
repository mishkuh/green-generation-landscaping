import { CollectionConfig } from 'payload';

const PortfolioProjects: CollectionConfig = {
    slug: 'portfolio-projects',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'client', 'date'],
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Project Overview',
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
                            name: 'client',
                            type: 'text',
                            required: true,
                        },
                        {
                            type: 'row', // Groups location and date side-by-side
                            fields: [
                                {
                                    name: 'location',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'date',
                                    type: 'date',
                                    required: true,
                                    admin: {
                                        date: {
                                            displayFormat: 'MM/yyyy',
                                        }
                                    },
                                },
                            ],
                        },
                        {
                            name: 'tags',
                            type: 'relationship',
                            relationTo: 'tags',
                            hasMany: true,
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            label: 'Short Description',
                            required: true,
                        },
                        {
                            name: 'detailed_description',
                            type: 'richText',
                            label: 'Detailed Description',
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Case Study Details',
                    fields: [
                        {
                            name: 'challenge',
                            type: 'textarea',
                            label: 'The Challenge',
                            required: true,
                        },
                        {
                            name: 'solution',
                            type: 'textarea',
                            label: 'The Solution',
                            required: true,
                        },
                        {
                            name: 'feature_list',
                            type: 'array',
                            label: 'Key Deliverables / Features',
                            labels: {
                                singular: 'Feature',
                                plural: 'Features'
                            },
                            fields: [
                                {
                                    name: 'feature',
                                    type: 'text',
                                    label: 'Feature',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Media',
                    fields: [
                        {
                            name: 'banner_image',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                            label: 'Banner Image',
                        },
                        {
                            name: 'image_gallery',
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
                                {
                                    name: 'caption',
                                    type: 'text',
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

export default PortfolioProjects;