import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    organization: v.string(),
    email: v.string(),
    type: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("collaborations", {
      name: args.name,
      organization: args.organization,
      email: args.email,
      type: args.type,
      message: args.message,
    });
  },
});
