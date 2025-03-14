import { pgTable, text, serial, integer, boolean, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const BusinessType = {
  HOTEL: "hotel",
  TRAVEL_AGENCY: "travel_agency",
  HYBRID: "hybrid",
} as const;

export type BusinessTypeValues = typeof BusinessType[keyof typeof BusinessType];

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  businessName: text("business_name").notNull(),
  businessType: text("business_type", { enum: Object.values(BusinessType) }).notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  settings: json("settings").$type<{
    sellsHotels: boolean;
    sellsTours: boolean;
    sellsPackages: boolean;
  }>().notNull(),
});

export const insertUserSchema = createInsertSchema(users)
  .pick({
    username: true,
    password: true,
    businessName: true,
    businessType: true,
    email: true,
    phone: true,
    settings: true,
  })
  .extend({
    password: z.string().min(8),
    email: z.string().email(),
    phone: z.string().min(10),
  });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
