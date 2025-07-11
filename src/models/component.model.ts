// Import Section
import mongoose from "mongoose";

// Schema Section
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
      type: [
        {
          key: {
            type: String,
            required: true,
          },
          value: {
            type: String,
          },
          visibility: {
            type: Boolean,
            default: true,
            required: true,
          },
        },
      ],
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
