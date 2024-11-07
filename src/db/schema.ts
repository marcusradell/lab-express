import { pgTable, varchar, integer } from "drizzle-orm/pg-core";

export const pancakesTable = pgTable("pancakes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  status: varchar({ length: 255 }).notNull(),
});
