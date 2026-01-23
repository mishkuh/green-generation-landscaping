import { CollectionConfig } from 'payload';

const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                height: undefined, // maintain aspect ratio
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
        formatOptions: {
            format: 'webp', // Automatically convert to WebP for performance
            options: { quality: 80 },
        },
    },
    access: {
        read: () => true, // Public access for frontend
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true, // Enforce accessibility best practices
        },
    ],
};

export default Media;