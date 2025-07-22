// Import Section
import mongoose from "mongoose";

// Schema Section
const cssPropSchema = new mongoose.Schema<CSSPropSchemaInterface>(
  {
    title: {
      type: String,
      required: true,
    },
    displayType: {
      type: String,
      required: true,
      enum: ["GROUP", "SINGLE"],
    },
    items: [
      {
        itemTitle: {
          type: String,
          required: true,
        },
        propName: {
          type: String,
          required: true,
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
          required: true,
          default: true,
        },
      },
    ],
    visibility: {
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
const CSSProp = mongoose.model<CSSPropSchemaInterface>(
  "CSSProp",
  cssPropSchema
);
export default CSSProp;
