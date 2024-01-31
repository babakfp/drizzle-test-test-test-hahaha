import type { Config } from "drizzle-kit"

export default {
    schema: "./schema/*",
    out: "./drizzle",
    driver: "better-sqlite",
    dbCredentials: {
        url: "./sqlite.db",
    },
} satisfies Config
