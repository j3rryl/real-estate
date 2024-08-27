import "@/envConfig";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { properties } from "./schema";
import { faker } from "@faker-js/faker";

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const db = drizzle(connection);
const main = async () => {
  console.time("Seeding complete");
  const batchSize = 50;
  const records = 250;
  const tasks = [];

  for (let i = 0; i < records; i += batchSize) {
    const batch = [];
    for (let j = 0; j < batchSize && i + j < records; j++) {
      batch.push({
        name: faker.company.name(),
        description: faker.commerce.productDescription(),
        price: `${faker.number.float({
          min: 1000,
          max: 10_000_000,
          fractionDigits: 2,
        })}`,
        location: faker.location.city(),
        propertyType: faker.helpers.arrayElement([
          "bungalow",
          "apartment",
          "house",
        ]),
        status: faker.helpers.arrayElement(["available", "sold", "rented"]),
        bedrooms: faker.number.int({ min: 1, max: 10 }),
        bathrooms: faker.number.int({ min: 1, max: 10 }),
        area: faker.number.float({ min: 100, max: 1000 }),
        thumbnail: faker.image.url(),
      });
    }
    // @ts-ignore
    tasks.push(db.insert(properties).values(batch));
    // @ts-ignore
  }
  await Promise.all(tasks);
  console.timeEnd("Seeding complete");
  process.exit(0);
};

main()
  .then()
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
