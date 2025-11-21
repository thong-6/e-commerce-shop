import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "prisma/schema.prisma",

    // Prisma 7 datasource configuration
    datasource: {
        url: env("DATABASE_URL"),
    },
});
