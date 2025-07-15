// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const { createStyle, getStyles, updateStyle, deleteStyle } =
  CONTROLLERS.V1_CONTROLLERS.STYLE_CONTROLLERS;

// Routes Section
router.route("/").post(createStyle).get(getStyles);
router.route("/:style_id").patch(updateStyle).delete(deleteStyle);

// Export Section
export default router;
