import { PrismaClient } from '@prisma/client';
require('dotenv').config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.database_url,
    },
  },
});

async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
