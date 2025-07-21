// Import Section
import mongoose from "mongoose";

// Schema Section
const propSchema = new mongoose.Schema<PropSchemaInterface>(
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
  },
  {
    timestamps: true,
  }
);

// Model Section
const Prop = mongoose.model<PropSchemaInterface>("Prop", propSchema);
export default Prop;
