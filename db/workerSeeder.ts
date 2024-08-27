import { workerData, parentPort } from "worker_threads";
import "@/envConfig";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { properties } from "./schema";
import { faker } from "@faker-js/faker";

// Establish the database connection
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const db = drizzle(connection);

const main = async () => {
  try {
    const { start, end } = workerData;
    for (let i = start; i < end; i++) {
      await db.insert(properties).values({
        name: faker.location.city(),
        thumbnail: faker.image.url(),
      });
    }
  } catch (error) {
    parentPort?.postMessage(`Worker encountered an error: ${error}`);
  } finally {
    await connection.end();
    parentPort?.close();
  }
};

main();
