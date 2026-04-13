import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
  }).index("by_token", ["tokenIdentifier"]),

  collaborations: defineTable({
    name: v.string(),
    organization: v.string(),
    email: v.string(),
    type: v.string(),
    message: v.string(),
  }),
});
