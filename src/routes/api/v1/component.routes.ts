// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const { createComponent, getComponents, updateComponent, deleteComponent } =
  CONTROLLERS.V1_CONTROLLERS.COMPONENT_CONTROLLERS;

// Routes Section
router.route("/").post(createComponent).get(getComponents);
router.route("/:component_id").patch(updateComponent).delete(deleteComponent);

// Export Section
export default router;
