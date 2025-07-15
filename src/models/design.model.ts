// Import Section
import mongoose from "mongoose";

// Schema Section
const designSchema = new mongoose.Schema<DesignSchemaInterface>(
  {
    library: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Library",
      required: true,
    },
    component: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component",
      required: true,
    },
    props: [
      {
        propName: String,
        value: String,
      },
    ],
    inputStyles: [
      {
        propName: String,
        value: String,
      },
    ],
    cssValues: [
      {
        propName: String,
        value: String,
      },
    ],
    tailwindValues: String,
    exportedJSON: {
      type: mongoose.Schema.Types.Mixed,
      required: false,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

// Model Section
const Design = mongoose.model<DesignSchemaInterface>("Design", designSchema);
export default Design;
