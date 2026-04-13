import { useMemo } from "react";
import { ConvexProvider as BaseConvexProvider, ConvexReactClient } from "convex/react";
import { appEnv } from "@/lib/env.ts";

export function ConvexProvider({ children }: { children: React.ReactNode }) {
  const convexUrl = appEnv.convexUrl;

  if (!convexUrl) {
    return <>{children}</>;
  }

  try {
    new URL(convexUrl);
  } catch {
    return <>{children}</>;
  }

  const client = useMemo(() => new ConvexReactClient(convexUrl), [convexUrl]);

  return <BaseConvexProvider client={client}>{children}</BaseConvexProvider>;
}
