import { ConvexProvider as BaseConvexProvider, ConvexReactClient } from "convex/react";
import { ConvexProviderWithHerculesAuth } from "@usehercules/auth/convex-react";
import { appEnv, hasAuthConfig } from "@/lib/env.ts";

const convex = new ConvexReactClient(appEnv.convexUrl!);

export function ConvexProvider({ children }: { children: React.ReactNode }) {
  if (!hasAuthConfig) {
    return <BaseConvexProvider client={convex}>{children}</BaseConvexProvider>;
  }

  return (
    <ConvexProviderWithHerculesAuth client={convex}>
      {children}
    </ConvexProviderWithHerculesAuth>
  );
}
