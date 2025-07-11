// Import Section
import { type Response, type Request } from "express";
import { asyncHandler } from "../../../handlers";

// Controller End-Points
const createLibrary = asyncHandler(async (req: Request, res: Response) => {});

const getLibraries = asyncHandler(async (req: Request, res: Response) => {});

const updateLibrary = asyncHandler(async (req: Request, res: Response) => {});

const deleteLibrary = asyncHandler(async (req: Request, res: Response) => {});

// Export Secction
export default {
  createLibrary,
  getLibraries,
  updateLibrary,
  deleteLibrary,
};
