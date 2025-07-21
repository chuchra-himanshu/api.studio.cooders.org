// Import Section
import { type Response, type Request } from "express";
import { APIError, APIResponse, asyncHandler } from "../../../handlers";
import { Prop } from "../../../models";

// Controller End-Points
const createProp = asyncHandler(async (req: Request, res: Response) => {
  const { library_id, component_id } = req.params;
  const { propName, defaultValue, inputType, valuesType, visibility } =
    req.body;

  const prop = await Prop.create({
    library: library_id,
    component: component_id,
    propName,
    defaultValue,
    inputType,
    valuesType,
    visibility,
  });

  return res
    .status(201)
    .json(APIError.send(201, "Prop created successfully", prop));
});

const getProps = asyncHandler(async (req: Request, res: Response) => {
  const { library_id, component_id } = req.params;

  const props = await Prop.find({
    $and: [{ library: library_id }, { component: component_id }],
  }).lean();

  return res
    .status(200)
    .json(APIResponse.send(200, "Props fetched successfully", props));
});

const updateProp = asyncHandler(async (req: Request, res: Response) => {
  const { prop_id } = req.params;
  const { propName, defaultValue, inputType, valuesType, visibility } =
    req.body;

  const prop = await Prop.findByIdAndUpdate(
    prop_id,
    {
      propName,
      defaultValue,
      inputType,
      valuesType,
      visibility,
    },
    {
      new: true,
      runValidators: true,
    }
  ).lean();

  if (!prop) {
    return res.status(404).json(APIError.send(404, "Prop does not exists!"));
  }

  return res
    .status(200)
    .json(APIResponse.send(200, "Prop updated successfully", prop));
});

const deleteProp = asyncHandler(async (req: Request, res: Response) => {
  const { prop_id } = req.params;

  const prop = await Prop.findByIdAndDelete(prop_id);

  if (!prop) {
    return res.status(404).json(APIError.send(404, "Prop does not exists!"));
  }

  return res
    .status(200)
    .json(APIResponse.send(200, "Prop deleted successfully"));
});

// Export Secction
export default {
  createProp,
  getProps,
  updateProp,
  deleteProp,
};
