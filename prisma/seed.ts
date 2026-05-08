import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import "dotenv/config";

// 1. Setup the connection pool
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_PRISMA_URL;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

// 2. Pass the adapter to the constructor (This fixes your error!)
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🚀 Starting seed...');

    await prisma.notice.deleteMany();
    await prisma.keyDate.deleteMany();

    await prisma.notice.createMany({
        data: [
            { title: 'Summer Vacation Starts', date: 'MAY 25', type: 'Holiday', description: 'School will remain closed for 15 days.' },
            { title: 'New Admissions 2026', date: 'APR 10', type: 'Admission', description: 'Registration open for Playgroup to Grade 8.' }
        ]
    });

    await prisma.keyDate.createMany({
        data: [
            { title: 'Registration Deadline', date: 'March 20, 2026', order: 1 },
            { title: 'Entrance Assessment', date: 'March 25, 2026', order: 2 }
        ]
    });

    console.log('✅ Database has been seeded! 🌱');
}

main()
    .catch((e) => {
        console.error('❌ Seed error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end(); // Clean up the connection
    });