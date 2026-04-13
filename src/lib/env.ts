const readEnv = (value: string | undefined) => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
};

export const appEnv = {
  convexUrl: readEnv(import.meta.env.VITE_CONVEX_URL),
};

export const hasConvexConfig = Boolean(appEnv.convexUrl);
