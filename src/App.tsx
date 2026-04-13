import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import { hasAuthConfig, hasConvexConfig } from "./lib/env.ts";
import AuthCallback from "./pages/auth/Callback.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

function AuthCallbackFallback() {
  return (
    <div className="flex min-h-svh items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-3">
        <h1 className="text-2xl font-semibold">Authentication is not configured</h1>
        <p className="text-sm text-muted-foreground">
          Add the required `VITE_HERCULES_*` and `VITE_CONVEX_URL` environment variables in
          Netlify, then redeploy the site.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/auth/callback"
            element={
              hasAuthConfig && hasConvexConfig ? (
                <AuthCallback />
              ) : (
                <AuthCallbackFallback />
              )
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
