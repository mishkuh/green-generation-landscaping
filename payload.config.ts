import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
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
    db: postgresAdapter({
        // Set to true if you want to push your database schema to the database. This is not recommended for production
        push: isVercelEnv ? false : true,
        pool: {
            connectionString: process.env.POSTGRES_URL,
            ssl: dbCert ? {
                ca: dbCert,
                rejectUnauthorized: true,
            } : false,
        },
    }),

    plugins: [
        s3Storage({
            collections: {
                media: {
                    prefix: 'media',
                }
            },
            bucket: process.env.S3_BUCKET!,
            config: {
                region: process.env.AWS_REGION || "us-east-1",
                forcePathStyle: true,
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY_ID!,
                    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
                },
                endpoint: process.env.S3_ENDPOINT,
            }
        }),
    ],

    sharp
})