import { and, eq, sql, type InferInsertModel } from "drizzle-orm";
import { db } from "./client.js";
import { users, households, memberships, meals, schedules } from "./schema.js";

type InsertUser = InferInsertModel<typeof users>;
type InsertMeal = InferInsertModel<typeof meals>;
type InsertSchedule = InferInsertModel<typeof schedules>;

export async function buildQueries() {
  return {
    users: {
      async findById(id: string) {
        return db
          .select()
          .from(users)
          .where(eq(users.id, id))
          .limit(1)
          .then((r) => r[0] ?? null);
      },

      async findByEmail(email: string) {
        return db
          .select()
          .from(users)
          .where(eq(users.email, email))
          .limit(1)
          .then((r) => r[0] ?? null);
      },

      async findAll() {
        return db
          .select()
          .from(users);
      },

      async create(data: InsertUser) {
        return db
          .insert(users)
          .values(data)
          .returning()
          .then((r) => r[0]);
      },

      async update(id: string, data: Partial<Pick<InsertUser, "name" | "role">>) {
        return db
          .update(users)
          .set(data)
          .where(eq(users.id, id))
          .returning()
          .then((r) => r[0] ?? null);
      },

      async delete(id: string) {
        return db
          .delete(users)
          .where(eq(users.id, id))
          .returning()
          .then((r) => r[0] ?? null);
      },
    },

    households: {
      async findById(id: string) {
        return db
          .select()
          .from(households)
          .where(eq(households.id, id))
          .limit(1)
          .then((r) => r[0] ?? null);
      },

      async findByCreator(createdBy: string) {
        return db
          .select()
          .from(households)
          .where(eq(households.createdBy, createdBy));
      },

      async findAll() {
        return db
          .select()
          .from(households);
      },

      async create(createdBy: string) {
        return db
          .insert(households)
          .values({ createdBy })
          .returning().then((r) => r[0]);
      },

      async delete(id: string) {
        return db
          .delete(households)
          .where(eq(households.id, id))
          .returning()
          .then((r) => r[0] ?? null);
      },
    },

    memberships: {
      async findByHousehold(householdId: string) {
        return db
          .select({ user: users, membership: memberships })
          .from(memberships)
          .innerJoin(users, eq(memberships.userId, users.id))
          .where(eq(memberships.householdId, householdId));
      },

      async findByUser(userId: string) {
        return db
          .select({ household: households, membership: memberships })
          .from(memberships)
          .innerJoin(households, eq(memberships.householdId, households.id))
          .where(eq(memberships.userId, userId));
      },

      async add(userId: string, householdId: string) {
        return db
          .insert(memberships)
          .values({ userId, householdId })
          .returning()
          .then((r) => r[0]);
      },

      async remove(userId: string, householdId: string) {
        return db
          .delete(memberships)
          .where(and(eq(memberships.userId, userId), eq(memberships.householdId, householdId)))
          .returning()
          .then((r) => r[0] ?? null);
      },
    },

    meals: {
      async findById(id: string) {
        return db
          .select()
          .from(meals)
          .where(eq(meals.id, id))
          .then((r) => r[0] ?? null);
      },

      async findByTitle(title: string) {
        return db
          .select()
          .from(meals)
          .where(eq(meals.title, title))
          .then((r) => r[0] ?? null);
      },

      async findAll() {
        return db
          .select()
          .from(meals);
      },

      async create(data: InsertMeal) {
        return db
          .insert(meals)
          .values(data)
          .returning()
          .then((r) => r[0]);
      },

      async update(id: string, data: Partial<Pick<InsertMeal, "title" | "url">>) {
        return db
          .update(meals)
          .set(data)
          .where(eq(meals.id, id))
          .returning()
          .then((r) => r[0] ?? null);
      },

      async delete(id: string) {
        return db
          .delete(meals)
          .where(eq(meals.id, id))
          .returning()
          .then((r) => r[0] ?? null);
      },
    },

    schedules: {
      async findByMeal(mealId: string) {
        return db
          .select({ schedule: schedules, meal: meals })
          .from(schedules)
          .innerJoin(meals, eq(schedules.mealId, meals.id))
          .where(eq(schedules.mealId, mealId));
      },

      async findByUser(userId: string) {
        return db
          .select({ schedule: schedules, meal: meals })
          .from(schedules)
          .innerJoin(meals, eq(schedules.mealId, meals.id))
          .where(eq(schedules.createdBy, userId));
      },

      async findByDateRange(startDate: string, endDate: string) {
        return db
          .select({ schedule: schedules, meal: meals })
          .from(schedules)
          .innerJoin(meals, eq(schedules.mealId, meals.id))
          .where(
            sql`${schedules.startDate} <= ${endDate}::date AND ${schedules.endDate} >= ${startDate}::date`
          );
      },

      async findOverlapping(mealId: string, startDate: string, endDate: string) {
        return db
          .select()
          .from(schedules)
          .where(
            and(
              eq(schedules.mealId, mealId),
              sql`${schedules.startDate} <= ${endDate}::date AND ${schedules.endDate} >= ${startDate}::date`
            )
          );
      },

      async create(data: InsertSchedule) {
        return db
          .insert(schedules)
          .values(data)
          .returning()
          .then((r) => r[0]);
      },

      async update(mealId: string, startDate: string, data: Partial<Pick<InsertSchedule, "endDate" | "updatedBy">>) {
        return db
          .update(schedules)
          .set(data)
          .where(and(eq(schedules.mealId, mealId), eq(schedules.startDate, startDate)))
          .returning()
          .then((r) => r[0] ?? null);
      },

      async delete(mealId: string, startDate: string) {
        return db
          .delete(schedules)
          .where(and(eq(schedules.mealId, mealId), eq(schedules.startDate, startDate)))
          .returning()
          .then((r) => r[0] ?? null);
      },
    },
  };
}

export type QueriesType = Awaited<ReturnType<typeof buildQueries>>;
