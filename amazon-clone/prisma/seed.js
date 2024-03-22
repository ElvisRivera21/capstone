const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      // Add other fields as necessary
    },
  });

  const product = await prisma.product.create({
    data: {
      name: 'Sample Product',
      description: 'This is a sample product',
      price: 19.99,
      // Add other fields as necessary
    },
  });

  // You can also create relations, for example, if a user has many posts:
  const post = await prisma.post.create({
    data: {
      title: 'Hello World',
      content: 'This is my first post',
      authorId: alice.id, // Assuming you have a relation set up
      // Add other fields as necessary
    },
  });

  console.log({ alice, product, post });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
