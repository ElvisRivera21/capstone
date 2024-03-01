const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  //seed users
  console.log("Creating Initial User Data...");
  await Promise.all(
    [...Array(5)].map(() =>
      prisma.user.create({
        data: {
          username: faker.internet.userName(),
          password: faker.internet.password(),
        },
      })
    )
  );

  console.log("Creating Initial User Data...");
  //seed products
  await Promise.all(
    [...Array(20)].map((_, i) =>

      prisma.user.create({
        data: {
          name: faker.product.fullName(),
          secretNum: faker.number.int({ min: 2000, max: 3000 }),
          productid: (i % 5) + 1,
        },
      })
    )
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    return e;
  })