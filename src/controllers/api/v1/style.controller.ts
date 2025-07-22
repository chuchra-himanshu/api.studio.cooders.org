// Import Section
import { type Response, type Request } from "express";
import { APIError, APIResponse, asyncHandler } from "../../../handlers";
import { Style } from "../../../models";

// Controller End-Points
const createStyle = asyncHandler(async (req: Request, res: Response) => {
  const { library_id, component_id } = req.params;
  const { inputStyles, cssSupport, tailwindSupport } = req.body;

  const existingComponentStyles = await Style.findOne({
    component: component_id,
  });
  if (existingComponentStyles) {
    return res
      .status(409)
      .json(APIError.send(409, "Component styles already exists!"));
  }

  const styles = await Style.create({
    library: library_id,
    component: component_id,
    inputStyles,
    cssSupport,
    tailwindSupport,
  });

  return res
    .status(201)
    .json(
      APIResponse.send(201, "Component Styles created successfully", styles)
    );
});

const getStyles = asyncHandler(async (req: Request, res: Response) => {
  const { library_id, component_id } = req.params;

  const styles = await Style.find({
    $and: [{ library: library_id }, { component: component_id }],
  });

  return res
    .status(200)
    .json(
      APIResponse.send(200, "Component styles fetched successfully", styles)
    );
});

const updateStyle = asyncHandler(async (req: Request, res: Response) => {
  const { style_id } = req.params;
  const { inputStyles, cssSupport, tailwindSupport } = req.body;

  const styles = await Style.findById(style_id);
  if (!styles) {
    return res
      .status(404)
      .json(APIError.send(404, "Requested style not found!"));
  }

  const updatedStyles = await Style.findByIdAndUpdate(
    style_id,
    {
      inputStyles,
      cssSupport,
      tailwindSupport,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res
    .status(200)
    .json(
      APIResponse.send(
        200,
        "Component style updated successfully",
        updatedStyles
      )
    );
});

const deleteStyle = asyncHandler(async (req: Request, res: Response) => {
  const { style_id } = req.params;

  const deletedStyle = await Style.findByIdAndDelete(style_id).lean();

  if (!deletedStyle) {
    return res
      .status(404)
      .json(APIError.send(404, "Component style not found with given ID"));
  }

  return res
    .status(200)
    .json(APIResponse.send(200, "Style deleted successfully"));
});

// Export Secction
export default {
  createStyle,
  getStyles,
  updateStyle,
  deleteStyle,
};
