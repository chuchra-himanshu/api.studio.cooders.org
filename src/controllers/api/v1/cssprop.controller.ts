// Import Section
import { type Response, type Request } from "express";
import { asyncHandler } from "../../../handlers";

// Controller End-Points
const createCSSProp = asyncHandler(async (req: Request, res: Response) => {});

const getCSSProps = asyncHandler(async (req: Request, res: Response) => {});

const updateCSSProp = asyncHandler(async (req: Request, res: Response) => {});

const deleteCSSProp = asyncHandler(async (req: Request, res: Response) => {});

// Export Secction
export default {
  createCSSProp,
  getCSSProps,
  updateCSSProp,
  deleteCSSProp,
};
