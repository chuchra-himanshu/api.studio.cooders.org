// Import Section
import express, { type Router } from "express";
import libraryRouter from "./library.routes";
import componentRouter from "./component.routes";
import propRouter from "./prop.routes";
import styleRouter from "./style.routes";
import designRouter from "./design.routes";
import cssPropRouter from "./cssprop.routes";

// Configuration Section
const router: Router = express.Router();

// Middleware Section
router.use(
  "/libraries/:library_id/components/component_id/styles",
  styleRouter
);
router.use("/libraries/:library_id/components/component_id/props", propRouter);
router.use("/libraries/:library_id/components", componentRouter);
router.use("/libraries", libraryRouter);
router.use("/css-props", cssPropRouter);
router.use("/designs", designRouter);

// Export Section
export default router;
