// Import Section
import { type Response, type Request } from "express";
import { APIError, APIResponse, asyncHandler } from "../../../handlers";
import { Library } from "../../../models";
import mongoose from "mongoose";

// Controller End-Points
const createLibrary = asyncHandler(async (req: Request, res: Response) => {
  const { title, url, logo, visibility } = req.body;

  const existingLibrary = await Library.findOne({ title }).lean();
  if (existingLibrary) {
    return res.status(409).json(APIError.send(409, "Library already exists!"));
  }

  await Library.create({
    title,
    url,
    logo,
    visibility,
  });

  return res
    .status(201)
    .json(APIResponse.send(201, "Library created successfully"));
});

const getLibraries = asyncHandler(async (req: Request, res: Response) => {
  const libraries = await Library.find().lean();
  return res
    .status(200)
    .json(APIResponse.send(200, "Libraries fetched successfully", libraries));
});

const updateLibrary = asyncHandler(async (req: Request, res: Response) => {
  const { library_id } = req.params;
  const { title, url, logo, visibility } = req.body;

  const existingLibrary = await Library.findById(library_id).lean();
  if (!existingLibrary) {
    return res
      .status(404)
      .json(APIError.send(404, "Library not found with given ID"));
  }

  if (title != existingLibrary.title) {
    const conflict = await Library.findOne({
      _id: { $ne: library_id },
      title: title,
    }).lean();
    if (conflict) {
      return res
        .status(409)
        .json(
          APIError.send(409, "Another library with this title already exists!")
        );
    }
  }

  await Library.findByIdAndUpdate(
    library_id,
    {
      title,
      url,
      logo,
      visibility,
    },
    {
      new: true,
      runValidators: true,
    }
  ).lean();

  return res
    .status(200)
    .json(APIResponse.send(200, "Library updated successfully"));
});

const deleteLibrary = asyncHandler(async (req: Request, res: Response) => {
  const { library_id } = req.params;

  const deletedLibrary = await Library.findByIdAndDelete(library_id).lean();

  if (!deletedLibrary) {
    return res
      .status(404)
      .json(APIError.send(404, "Library not found with given ID"));
  }

  return res
    .status(200)
    .json(APIResponse.send(200, "Library deleted successfully"));
});

// Export Secction
export default {
  createLibrary,
  getLibraries,
  updateLibrary,
  deleteLibrary,
};
