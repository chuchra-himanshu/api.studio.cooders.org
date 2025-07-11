// Import Section
import express, { type Router } from "express";
import v1Router from "./v1/index.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/v1", v1Router);

// Export Section
export default router;
