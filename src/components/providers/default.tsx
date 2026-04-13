import { ConvexProvider } from "./convex.tsx";
import { QueryClientProvider } from "./query-client.tsx";
import { ThemeProvider } from "./theme.tsx";
import { Toaster } from "../ui/sonner.tsx";
import { TooltipProvider } from "../ui/tooltip.tsx";
import { hasConvexConfig } from "@/lib/env.ts";

export function DefaultProviders({ children }: { children: React.ReactNode }) {
  let tree = (
    <QueryClientProvider>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          {children}
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );

  if (hasConvexConfig) {
    tree = <ConvexProvider>{tree}</ConvexProvider>;
  }

  return tree;
}
