import { db } from "$lib/server/db"
import { users } from "$lib/server/schema/users"

export const load = async () => {
    const result = await db.select().from(users)
    return { users: result }
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const username = data.get("username") as string
        const email = data.get("email") as string
        const age = Number(data.get("age")) as number

        try {
            await db.insert(users).values({ username, email, age })
        } catch (error) {
            console.log(error)
        }
    },
}
