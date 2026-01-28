import { CollectionConfig } from 'payload';
import { isAdminOrEditor, isAdmin } from './access/permissions';

const Tags: CollectionConfig = {
    slug: 'tags',
    admin: {
        useAsTitle: 'title',
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
            name: 'title',
            type: 'text',
            required: true,
            unique: true,
        }
    ],
};

export default Tags;