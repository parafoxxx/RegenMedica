import { HerculesAuthProvider } from "@usehercules/auth/react";
import { appEnv } from "@/lib/env.ts";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <HerculesAuthProvider
      authority={appEnv.oidcAuthority!}
      client_id={appEnv.oidcClientId!}
      userManagerSettings={{
        prompt: appEnv.oidcPrompt ?? "select_account",
        response_type: appEnv.oidcResponseType ?? "code",
        scope: appEnv.oidcScope ?? "openid profile email offline_access",
        redirect_uri: appEnv.oidcRedirectUri ?? `${window.location.origin}/auth/callback`,
      }}
    >
      {children}
    </HerculesAuthProvider>
  );
}
