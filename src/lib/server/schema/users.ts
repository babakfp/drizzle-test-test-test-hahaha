import { sqliteTable, numeric, integer, text } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
    id: integer("id").primaryKey(),
    username: text("username").notNull(),
    email: text("email").notNull(),
    age: integer("age").notNull(),
})
