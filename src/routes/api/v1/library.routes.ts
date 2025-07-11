// Import Section
import express, { type Router } from "express";
import CONTROLLERS from "../../../controllers";
import { LIBRARY_VALIDATIONS } from "../../../validations";
import { validateBody, validateParams } from "../../../utils";

// Configuration Section
const router: Router = express.Router();
const { createLibrary, getLibraries, updateLibrary, deleteLibrary } =
  CONTROLLERS.V1_CONTROLLERS.LIBRARY_CONTROLLERS;
const {
  createLibraryBodyValidation,
  updateLibraryBodyValidation,
  updateLibraryParamsValidation,
  deleteLibraryParamsValidation,
} = LIBRARY_VALIDATIONS;

// Routes Section
router
  .route("/")
  .post(validateBody(createLibraryBodyValidation), createLibrary)
  .get(getLibraries);
router
  .route("/:library_id")
  .patch(
    validateBody(updateLibraryBodyValidation),
    validateParams(updateLibraryParamsValidation),
    updateLibrary
  )
  .delete(validateParams(deleteLibraryParamsValidation), deleteLibrary);

// Export Section
export default router;
