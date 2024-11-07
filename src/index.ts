import { createApiRouter } from "./api-router";
import { createHttpApp } from "./app";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { pancakesTable } from "./db/schema";

createHttpApp(createApiRouter()).listen(3000, () => {
  console.log(`Server started on http://localhost:3000.`);
});

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const pancake: typeof pancakesTable.$inferInsert = {
    startTimestamp: new Date(),
    status: "COOKING",
  };

  await db.insert(pancakesTable).values(pancake);
  console.log("New pancake created!");

  const users = await db.select().from(pancakesTable);
  console.log("Getting all pancakes from the database: ", users);
}

main();
