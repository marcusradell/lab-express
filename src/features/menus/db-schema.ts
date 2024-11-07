import { pgTable, varchar, integer } from "drizzle-orm/pg-core";

export const menusTable = pgTable("menus", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});
