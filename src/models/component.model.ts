// Import Section
import mongoose from "mongoose";

// Schema Section
const componentPropSchema = new mongoose.Schema<ComponentPropSchemaInterface>({
  propName: {
    type: String,
    required: true,
  },
  defaultValue: {
    type: String,
  },
  inputType: {
    type: String,
    required: true,
    enum: ["DROPDOWN", "TOGGLE", "RADIO", "TEXTFIELD"],
  },
  valuesType: {
    type: String,
    required: true,
  },
  visibility: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const componentSchema = new mongoose.Schema<ComponentSchemaInterface>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    icon: {
      type: String,
      trim: true,
      required: true,
    },
    visibility: {
      type: Boolean,
      default: true,
      required: true,
    },
    props: {
      type: [componentPropSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Model Section
const Component = mongoose.model<ComponentSchemaInterface>(
  "Component",
  componentSchema
);
export default Component;
