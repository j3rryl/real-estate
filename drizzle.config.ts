import "@/envConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: `${process.env.MYSQL_HOST}`,
    port: Number(`${process.env.MYSQL_PORT}`),
    user: `${process.env.MYSQL_USER}`,
    password: `${process.env.MYSQL_PASSWORD}`,
    database: `${process.env.MYSQL_DATABASE}`,
  },
  out: "./drizzle",
  //   verbose: true,
  strict: true,
});
