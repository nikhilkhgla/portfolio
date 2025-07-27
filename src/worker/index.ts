import { Hono } from "hono";

// Define the 'env' type
type env = Record<string, unknown>;

const app = new Hono<{ Bindings: env }>();

export default app;
