import { relations, sql } from "drizzle-orm";
import { bigint, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const properties = mysqlTable("properties", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }),
  thumbnail: varchar("thumbnail", { length: 255 }),
  createdAt: timestamp("createdAt", { mode: "date" })
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow(),
});

export const propertyImages = mysqlTable("property_images", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  propertyId: bigint("property_id", { mode: "number" })
    .notNull()
    .references(() => properties.id, { onDelete: "cascade" }),
  image: varchar("image", { length: 255 }),
  createdAt: timestamp("createdAt", { mode: "date" })
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow(),
});

export const imagesRelations = relations(propertyImages, ({ one }) => ({
  parent: one(properties, {
    fields: [propertyImages.propertyId],
    references: [properties.id],
  }),
}));

export type PropertyModel = typeof properties.$inferSelect;
export type PropertyImageModel = typeof propertyImages.$inferSelect;
