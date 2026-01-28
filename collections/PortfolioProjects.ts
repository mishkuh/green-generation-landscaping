import { CollectionConfig } from 'payload';
import { isAdminOrEditor, isAdmin } from './access/permissions';

const PortfolioProjects: CollectionConfig = {
    slug: 'portfolio-projects',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'client', 'date'],
    },
    access: {
        read: () => true, // Public access for frontend
        // Both can create new posts
        create: isAdminOrEditor,

        // Both can edit existing posts
        update: isAdminOrEditor,

        // ONLY the super-admin can delete posts
        delete: isAdmin,
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
                            name: 'detailedDescription',
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
                            name: 'featureList',
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
                            name: 'bannerImage',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                            label: 'Banner Image',
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