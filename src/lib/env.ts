const readEnv = (value: string | undefined) => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
};

export const appEnv = {
  convexUrl: readEnv(import.meta.env.VITE_CONVEX_URL),
  oidcAuthority: readEnv(import.meta.env.VITE_HERCULES_OIDC_AUTHORITY),
  oidcClientId: readEnv(import.meta.env.VITE_HERCULES_OIDC_CLIENT_ID),
  oidcPrompt: readEnv(import.meta.env.VITE_HERCULES_OIDC_PROMPT),
  oidcResponseType: readEnv(import.meta.env.VITE_HERCULES_OIDC_RESPONSE_TYPE),
  oidcScope: readEnv(import.meta.env.VITE_HERCULES_OIDC_SCOPE),
  oidcRedirectUri: readEnv(import.meta.env.VITE_HERCULES_OIDC_REDIRECT_URI),
};

export const hasConvexConfig = Boolean(appEnv.convexUrl);
export const hasAuthConfig = Boolean(
  appEnv.oidcAuthority && appEnv.oidcClientId,
);
