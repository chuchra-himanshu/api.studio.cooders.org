// Import Section
import express, { type Router } from "express";
import libraryRouter from "./library.routes";
import componentRouter from "./component.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use("/libraries/:library_id/components", componentRouter);
router.use("/libraries", libraryRouter);

// Export Section
export default router;
