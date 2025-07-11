// Import Section
import express, { type Router } from "express";
import libraryRouter from "./library.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/libraries", libraryRouter);

// Export Section
export default router;
