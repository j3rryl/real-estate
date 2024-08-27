import { relations, sql } from "drizzle-orm";
import {
  bigint,
  decimal,
  float,
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const properties = mysqlTable("properties", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 }),
  location: varchar("location", { length: 255 }),
  propertyType: varchar("property_type", { length: 255 }),
  status: mysqlEnum("status", ["available", "sold", "rented"]).default(
    "available"
  ),
  bedrooms: int("bedrooms"),
  bathrooms: int("bathrooms"),
  area: float("area"),
  thumbnail: varchar("thumbnail", { length: 255 }),
  createdAt: timestamp("createdAt", { mode: "date" })
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updatedAt", { mode: "date" })
    .defaultNow()
    .onUpdateNow(),
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
