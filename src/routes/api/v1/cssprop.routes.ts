// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const { createCSSProp, getCSSProps, updateCSSProp, deleteCSSProp } =
  CONTROLLERS.V1_CONTROLLERS.CSSPROP_CONTROLLERS;

// Routes Section
router.route("/").post(createCSSProp).get(getCSSProps);
router.route("/:cssprop_id").patch(updateCSSProp).delete(deleteCSSProp);

// Export Section
export default router;
