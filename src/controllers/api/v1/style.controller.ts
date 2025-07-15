// Import Section
import { type Response, type Request } from "express";
import { asyncHandler } from "../../../handlers";

// Controller End-Points
const createStyle = asyncHandler(async (req: Request, res: Response) => {});

const getStyles = asyncHandler(async (req: Request, res: Response) => {});

const updateStyle = asyncHandler(async (req: Request, res: Response) => {});

const deleteStyle = asyncHandler(async (req: Request, res: Response) => {});

// Export Secction
export default {
  createStyle,
  getStyles,
  updateStyle,
  deleteStyle,
};
