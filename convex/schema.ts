import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  collaborations: defineTable({
    name: v.string(),
    organization: v.string(),
    email: v.string(),
    type: v.string(),
    message: v.string(),
  }),
});
