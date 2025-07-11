import { z } from "zod";

const createLibraryBodyValidation = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.url("URL must be valid"),
  logo: z.string().min(1, "Logo is required"),
  slug: z.string().min(1, "Slug is required"),
});

const updateLibraryBodyValidation = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.url("URL must be valid"),
  logo: z.string().min(1, "Logo is required"),
  slug: z.string().min(1, "Slug is required"),
});

const updateLibraryParamsValidation = z.object({
  library_id: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
    message: "Invalid MongoDB ObjectId",
  }),
});

const deleteLibraryParamsValidation = z.object({
  library_id: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
    message: "Invalid MongoDB ObjectId",
  }),
});

export default {
  createLibraryBodyValidation,
  updateLibraryBodyValidation,
  updateLibraryParamsValidation,
  deleteLibraryParamsValidation,
};
