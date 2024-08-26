import { properties } from "./schema";
import { db } from "./db";

const main = async () => {
  console.log("Seeding started...");
  for (let i = 0; i < 20; i++) {
    await db.insert(properties).values({
      name: `Name ${i}`,
      thumbnail: `Thumbnail ${i}`,
    });
  }
  console.log("Seeding done!");
};

main();
