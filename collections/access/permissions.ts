import { Access } from 'payload';
import { User } from '@/payload-types';

// Check if user is a Super Admin
export const isAdmin: Access<User> = ({ req: { user } }) => {
    return Boolean(user?.roles?.includes('super-admin'));
};

// Check if user is either Super Admin OR Editor
export const isAdminOrEditor: Access<User> = ({ req: { user } }) => {
    const roles = user?.roles || [];
    return roles.includes('super-admin') || roles.includes('editor');
};