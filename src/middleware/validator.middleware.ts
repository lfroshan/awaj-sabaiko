import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  const payloadValidation = schema.safeParse({
    body: req.body,
    query: req.query,
    params: req.params,
  });
  
  if (payloadValidation.success === false) {
    return res.status(400).json(payloadValidation.error);
  }
  
  return next();
};
