// Import Section
import { type Response, type Request } from "express";
import { asyncHandler } from "../../../handlers";

// Controller End-Points
const createProp = asyncHandler(async (req: Request, res: Response) => {});

const getProps = asyncHandler(async (req: Request, res: Response) => {});

const updateProp = asyncHandler(async (req: Request, res: Response) => {});

const deleteProp = asyncHandler(async (req: Request, res: Response) => {});

// Export Secction
export default {
  createProp,
  getProps,
  updateProp,
  deleteProp,
};
