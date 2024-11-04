import { createApiRouter } from "./api-router";
import { createApp } from "./app";

createApp(createApiRouter()).listen(3000, () => {
  console.log(`Server started on http://localhost:3000.`);
});
