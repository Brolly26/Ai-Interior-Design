import { pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
    id:serial('id').primaryKey(),
    name:varChar('name').notNull(),
    email: varChar('email').notNull(),
    imageUrl: varChar('imageUrl').notNull(),
    credits:integer('credits').default(3)
})