import { CollectionConfig } from 'payload';

const Users: CollectionConfig = {
    slug: 'users',
    auth: true, // This enables login/password and session management
    admin: {
        hidden: ({ user }) => {
            // If the user does NOT have the super-admin role, hide the collection
            return !user?.roles?.includes('super-admin');
        },
        useAsTitle: 'email',
        defaultColumns: ['email', 'roles'],
    },
    access: {
        // 1. Only Super Admins can create new users
        create: ({ req: { user } }) => {
            return Boolean(user?.roles?.includes('super-admin'));
        },

        // 2. Only Super Admins can see the list of all users
        // (Optional: Editors might not need to see the user list at all)
        read: ({ req: { user } }) => {
            if (user?.roles?.includes('super-admin')) return true;

            // If not admin, they can only "read" their own profile
            return { id: { equals: user?.id } };
        },

        // 3. Only Super Admins can delete users
        delete: ({ req: { user } }) => {
            return Boolean(user?.roles?.includes('super-admin'));
        },
    },
    fields: [
        {
            name: 'roles',
            type: 'select',
            hasMany: true,
            required: true,
            defaultValue: ['editor'],
            options: [
                { label: 'Super Admin', value: 'super-admin' },
                { label: 'Editor', value: 'editor' },
            ],
            access: {
                // Prevent editors from promoting themselves to super-admin
                create: ({ req: { user } }) => Boolean(user?.roles?.includes('super-admin')),
                update: ({ req: { user } }) => Boolean(user?.roles?.includes('super-admin')),
            },
        },
    ],
};

export default Users;