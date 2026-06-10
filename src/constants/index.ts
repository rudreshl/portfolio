export const QUERY_KEYS = {
  users:  ["users"] as const,
  user:   (id: string) => ["users", id] as const,
};

export const ROUTES = {
  home:       "/",
  dashboard:  "/dashboard",
  settings:   "/settings",
  login:      "/login",
};
