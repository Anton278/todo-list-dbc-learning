export function handleDbcException(name) {
  const appEnv = "development";

  if (appEnv === "development") {
    throw new Error(name);
  }
  if (appEnv === "production") {
    // log to error logging service...
  }
}
