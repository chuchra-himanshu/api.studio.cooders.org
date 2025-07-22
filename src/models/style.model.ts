// Import Section
import mongoose from "mongoose";

// Schema Section
const styleSchema = new mongoose.Schema<StyleSchemaInterface>(
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
    inputStyles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CSSProp",
      },
    ],
    cssSupport: {
      type: Boolean,
      required: true,
      default: true,
    },
    tailwindSupport: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model Section
const Style = mongoose.model<StyleSchemaInterface>("Style", styleSchema);
export default Style;
