import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import Services from './collections/Services'
import Media from './collections/Media'
import Tags from './collections/Tags'
import PortfolioProjects from './collections/PortfolioProjects'

const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === 'preview'
const pushConfig = isProduction ? false : true;

export default buildConfig({
    // If you'd like to use Rich Text, pass your editor here
    editor: lexicalEditor(),

    // Define and configure your collections in this array
    collections: [
        Services,
        Media,
        Tags,
        PortfolioProjects,
    ],

    // Your Payload secret - should be a complex and secure string, unguessable
    secret: process.env.PAYLOAD_SECRET || '',
    db: postgresAdapter({
        // Set to true if you want to push your database schema to the database. This is not recommended for production
        push: pushConfig,
        pool: {
            connectionString: process.env.POSTGRES_URL,
            ssl: isVercel ? { ca: process.env.SUPABASE_CERT, rejectUnauthorized: true } : false,
        },
    }),

    sharp
})