import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const pancakesTable = pgTable("pancakes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  startTimestamp: integer().notNull(),
  status: varchar({ length: 255 }).notNull(),
});
