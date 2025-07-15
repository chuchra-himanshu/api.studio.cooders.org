// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const { createDesign, getDesigns, updateDesign, deleteDesign } =
  CONTROLLERS.V1_CONTROLLERS.DESIGN_CONTROLLERS;

// Routes Section
router.route("/").post(createDesign).get(getDesigns);
router.route("/:design_id").patch(updateDesign).delete(deleteDesign);

// Export Section
export default router;
