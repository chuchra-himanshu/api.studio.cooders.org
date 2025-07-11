// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";

// Configuration Section
const router: Router = express.Router();
const { createLibrary, getLibraries, updateLibrary, deleteLibrary } =
  CONTROLLERS.V1_CONTROLLERS.LIBRARY_CONTROLLERS;

// Routes Section
router.route("/").post(createLibrary).get(getLibraries);
router.route("/:library_id").patch(updateLibrary).delete(deleteLibrary);

// Export Section
export default router;
