// Import Section
import express, { type Router } from "express";
import libraryRouter from "./library.routes";
import componentRouter from "./component.routes";
import styleRouter from "./style.routes";
import designRouter from "./design.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use(
  "/libraries/:library_id/components/component_id/styles",
  styleRouter
);
router.use("/libraries/:library_id/components", componentRouter);
router.use("/libraries", libraryRouter);
router.use("/designs", designRouter);

// Export Section
export default router;
