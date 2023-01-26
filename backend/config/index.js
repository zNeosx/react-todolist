export const port = process.env.APP_POST || 5000;
export const hostname = process.env.APP_HOSTNAME || "localhost";
export const mongoUrl =
  process.env.APP_MONGODB_URL || "mongodb://localhost:27017";
export const localClientURL =
  process.env.LOCAL_CLIENT_URL || "http://localhost:4200";
export const localServerURL =
  process.env.LOCAL_SERVER_URL || "http://localhost:5000";
export const jwtKeySecret = process.env.JWT_SECRET || "secret";
