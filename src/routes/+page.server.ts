import { db } from "$lib/server/db"
import { users } from "$lib/server/schema"

export const load = async () => {
    const result = await db.select().from(users)
    return { users: result }
}
