import { pgTable as table, uuid, varchar, timestamp, date, primaryKey } from 'drizzle-orm/pg-core';
import { pgEnum } from 'drizzle-orm/pg-core';

export const userRoleEnum = pgEnum('user_role', ['admin', 'editor', 'viewer']);

export const users = table('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  role: userRoleEnum('role').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const households = table('households', {
  id: uuid('id').defaultRandom().primaryKey(),
  createdBy: uuid('created_by').notNull().references(() => users.id),
});

export const memberships = table('memberships', {
  userId: uuid('user_id').notNull().references(() => users.id),
  householdId: uuid('household_id').notNull().references(() => households.id),
}, (t) => [
  primaryKey({ columns: [t.userId, t.householdId] }),
]);

export const meals = table('meals', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull().unique(),
  url: varchar('url', { length: 2000 }),
});

export const schedules = table('schedules', {
  mealId: uuid('meal_id').notNull().references(() => meals.id),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  createdBy: uuid('created_by').notNull().references(() => users.id),
  updatedBy: uuid('updated_by').references(() => users.id),
});
