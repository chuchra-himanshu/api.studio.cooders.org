// Import Section
import { type Response, type Request } from "express";
import { APIError, APIResponse, asyncHandler } from "../../../handlers";
import { Component } from "../../../models";

// Controller End-Points
const createComponent = asyncHandler(async (req: Request, res: Response) => {
  const { library_id } = req.params;
  const { title, icon, visibility } = req.body;

  const existingComponent = await Component.findOne({ title }).lean();
  if (existingComponent) {
    return res
      .status(409)
      .json(APIError.send(409, "Component already exists!"));
  }

  await Component.create({
    library: library_id,
    title,
    icon,
    visibility,
  });

  return res
    .status(201)
    .json(APIResponse.send(201, "Component created successfully"));
});

const getComponents = asyncHandler(async (req: Request, res: Response) => {
  const { library_id } = req.params;

  const components = await Component.find({ library: library_id }).lean();

  return res
    .status(200)
    .json(APIResponse.send(200, "Components fetched successfully", components));
});

const updateComponent = asyncHandler(async (req: Request, res: Response) => {
  const { component_id } = req.params;
  const { title, icon, visibility } = req.body;

  const existingComponent = await Component.findById(component_id).lean();
  if (!existingComponent) {
    return res
      .status(404)
      .json(APIError.send(404, "Component not found with given ID"));
  }

  if (title != existingComponent.title) {
    const conflict = await Component.findOne({
      _id: { $ne: component_id },
      title: title,
    }).lean();
    if (conflict) {
      return res
        .status(409)
        .json(
          APIError.send(
            409,
            "Another component with this title already exists!"
          )
        );
    }
  }

  await Component.findByIdAndUpdate(
    component_id,
    {
      title,
      icon,
      visibility,
    },
    {
      new: true,
      runValidators: true,
    }
  ).lean();

  return res
    .status(200)
    .json(APIResponse.send(200, "Component updated successfully"));
});

const deleteComponent = asyncHandler(async (req: Request, res: Response) => {
  const { component_id } = req.params;

  const deletedComponent = await Component.findByIdAndDelete(
    component_id
  ).lean();

  if (!deletedComponent) {
    return res
      .status(404)
      .json(APIError.send(404, "Component not found with given ID"));
  }

  return res
    .status(200)
    .json(APIResponse.send(200, "Component deleted successfully"));
});

// Export Section
export default {
  createComponent,
  getComponents,
  updateComponent,
  deleteComponent,
};
