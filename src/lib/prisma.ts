import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const connectionString = process.env.POSTGRES_PRISMA_URL;

const prismaClientSingleton = () => {
    // We force the connection string into a template literal to ensure string type
    const pool = new pg.Pool({
        connectionString: `${connectionString}`,
        ssl: {
            rejectUnauthorized: false // Required for some Neon/Vercel environments
        }
    });

    const adapter = new PrismaPg(pool);
    return new PrismaClient({ adapter });
};

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;