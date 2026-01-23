import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import Services from './collections/Services'
import Media from './collections/Media'
import Tags from './collections/Tags'
import PortfolioProjects from './collections/PortfolioProjects'

// Database connection config
const isProduction = process.env.NODE_ENV === 'production';

const sslConfig = isProduction
    ? true  // In production: use proper SSL (rejectUnauthorized defaults to true)
    : { rejectUnauthorized: false }; // In dev: allow self-signed certs

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
    secret: process.env.PAYLOAD_SECRET_KEY || '',
    db: postgresAdapter({
        // Set to true if you want to push your database schema to the database. This is not recommended for production
        push: false,
        pool: {
            connectionString: process.env.POSTGRES_URL,
            ssl: sslConfig,
        },
    }),

    sharp
})