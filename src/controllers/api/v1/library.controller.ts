// Import Section
import { type Response, type Request } from "express";
import { APIError, APIResponse, asyncHandler } from "../../../handlers";
import { Library } from "../../../models";
import mongoose from "mongoose";

// Controller End-Points
const createLibrary = asyncHandler(async (req: Request, res: Response) => {
  const { title, url, logo, slug } = req.body;

  const existingLibrary = await Library.findOne({
    $or: [{ title }, { slug }],
  }).lean();

  if (existingLibrary) {
    const message =
      existingLibrary.title === title
        ? "Library with this title already exists!"
        : "Library with this slug already exists!";

    return res.status(409).json(APIError.send(409, message));
  }

  await Library.create({ title, url, logo, slug });
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
  const updateData = req.body;

  if (!mongoose.Types.ObjectId.isValid(library_id)) {
    return res.status(400).json(APIError.send(400, "Invalid Library ID"));
  }

  const existingLibrary = await Library.findById(library_id).lean();
  if (!existingLibrary) {
    return res
      .status(404)
      .json(APIError.send(404, "Library not found with given ID"));
  }

  const conflict = await Library.findOne({
    _id: { $ne: library_id },
    $or: [
      updateData.title ? { title: updateData.title } : {},
      updateData.slug ? { slug: updateData.slug } : {},
    ].filter(Boolean),
  }).lean();

  if (conflict) {
    const message =
      conflict.title === updateData.title
        ? "Another library with this title already exists!"
        : "Another library with this slug already exists!";
    return res.status(409).json(APIError.send(409, message));
  }

  await Library.findByIdAndUpdate(library_id, updateData, {
    new: true,
    runValidators: true,
  }).lean();
  return res
    .status(200)
    .json(APIResponse.send(200, "Library updated successfully"));
});

const deleteLibrary = asyncHandler(async (req: Request, res: Response) => {
  const { library_id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(library_id)) {
    return res.status(400).json(APIError.send(400, "Invalid Library ID"));
  }

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
