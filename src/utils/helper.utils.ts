import { type NextFunction, type Request, type Response } from "express";
import { type ZodObject } from "zod";
import { APIError } from "../handlers";

export const validateBody =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json(APIError.send(400, "Validation failed", result));
    }
    next();
  };

export const validateParams =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
      return res
        .status(400)
        .json(APIError.send(400, "Invalid URL parameters", result));
    }
    next();
  };
