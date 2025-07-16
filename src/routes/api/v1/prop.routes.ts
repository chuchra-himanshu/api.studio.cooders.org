// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const { createProp, getProps, updateProp, deleteProp } =
  CONTROLLERS.V1_CONTROLLERS.PROP_CONTROLLERS;

// Routes Section
router.route("/").post(createProp).get(getProps);
router.route("/:prop_id").patch(updateProp).delete(deleteProp);

// Export Section
export default router;
