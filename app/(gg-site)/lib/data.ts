import { db } from '@vercel/postgres';
import { Service, PortfolioProject } from '@/payload-types';

export async function fetchServiceDetails() {
    try {
        const client = await db.connect(); // Explicitly connect to Supabase
        const data = await client.sql<Service>`SELECT * FROM "services-details"`;
        client.release(); // Important: release the client back to the pool
        return data.rows;
    } catch (error) {
        console.error('Error fetching service details:', error);
        throw new Error('Failed to fetch service details.');
    }
}

export async function fetchServiceDetailsByRoute(route: string) {
    try {
        const client = await db.connect(); // Explicitly connect to Supabase
        const data = await client.sql<Service>`SELECT * FROM "services-details" WHERE route = ${route}`;
        client.release(); // Important: release the client back to the pool

        console.log(data.rows);
        return data.rows[0];
    } catch (error) {
        console.error('Error fetching service details:', error);
        throw new Error('Failed to fetch service details.');
    }
}

export async function fetchPortfolioDetails() {
    try {
        const client = await db.connect(); // Explicitly connect to Supabase
        const data = await client.sql<PortfolioProject>`SELECT * FROM "portfolio-projects"`;
        client.release(); // Important: release the client back to the pool
        return data.rows;
    } catch (error) {
        console.error('Error fetching portfolio details:', error);
        throw new Error('Failed to fetch portfolio data.');
    }
}

export async function fetchPortfolioDetailsByRoute(route: string) {
    try {
        const client = await db.connect(); // Explicitly connect to Supabase
        const data = await client.sql<PortfolioProject>`SELECT * FROM "portfolio-projects" WHERE route = ${route}`;
        client.release(); // Important: release the client back to the pool
        return data.rows[0];
    } catch (error) {
        console.error('Error fetching portfolio details:', error);
        throw new Error('Failed to fetch portfolio data.');
    }
}

