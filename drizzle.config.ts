import type { Config } from "drizzle-kit"

export default {
    schema: "./src/lib/server/schema/*.ts",
    out: "./src/drizzle",
    driver: "better-sqlite",
    dbCredentials: {
        url: "./src/sqlite.db",
    },
} satisfies Config
