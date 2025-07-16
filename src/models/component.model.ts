// Import Section
import mongoose from "mongoose";

// Schema Section
const componentSchema = new mongoose.Schema<ComponentSchemaInterface>(
  {
    library: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Library",
      required: true,
    },
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
