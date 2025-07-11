// Import Section
import { type Response, type Request } from "express";
import { asyncHandler } from "../../../handlers";

// Controller End-Points
const createComponent = asyncHandler(async (req: Request, res: Response) => {});

const getComponents = asyncHandler(async (req: Request, res: Response) => {});

const updateComponent = asyncHandler(async (req: Request, res: Response) => {});

const deleteComponent = asyncHandler(async (req: Request, res: Response) => {});

// Export Secction
export default {
  createComponent,
  getComponents,
  updateComponent,
  deleteComponent,
};
