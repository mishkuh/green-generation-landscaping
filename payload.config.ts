import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { buildConfig } from 'payload'
import Services from './collections/Services'
import Media from './collections/Media'
import Tags from './collections/Tags'
import PortfolioProjects from './collections/PortfolioProjects'
import Users from './collections/Users'

const isVercelEnv = process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === "preview";
const dbCert = process.env.DB_CERT_BASE64
    ? Buffer.from(process.env.DB_CERT_BASE64, 'base64').toString('utf8')
    : undefined;

export default buildConfig({
    // If you'd like to use Rich Text, pass your editor here
    editor: lexicalEditor(),

    // Define and configure your collections in this array
    collections: [
        Services,
        Media,
        Tags,
        PortfolioProjects,
        Users,
    ],

    // Your Payload secret - should be a complex and secure string, unguessable
    secret: process.env.PAYLOAD_SECRET || '',
    db: vercelPostgresAdapter({
        push: false,
        pool: {
            connectionString: process.env.DATABASE_URL
        }
    }),

    plugins: [
        vercelBlobStorage({
            // Specify which collections should use Vercel Blob
            collections: {
                media: true
            },
            // Token provided by Vercel once Blob storage is added to your Vercel project
            token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
    ],

    sharp
})