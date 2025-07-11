// Import Section
import mongoose from "mongoose";

// Schema Section
const librarySchema = new mongoose.Schema<LibrarySchemaInterface>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    url: {
      type: String,
      trim: true,
      required: true,
    },
    logo: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model Section
const Library = mongoose.model<LibrarySchemaInterface>(
  "Library",
  librarySchema
);
export default Library;
