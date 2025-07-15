// Import Section
import { type Response, type Request } from "express";
import { asyncHandler } from "../../../handlers";

// Controller End-Points
const createDesign = asyncHandler(async (req: Request, res: Response) => {});

const getDesigns = asyncHandler(async (req: Request, res: Response) => {});

const updateDesign = asyncHandler(async (req: Request, res: Response) => {});

const deleteDesign = asyncHandler(async (req: Request, res: Response) => {});

// Export Secction
export default {
  createDesign,
  getDesigns,
  updateDesign,
  deleteDesign,
};
