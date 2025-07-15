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
