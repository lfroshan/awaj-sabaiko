import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import GLOBAL_CONFIG from '../globalConfig';
import Forbidden from '../Error/Forbidden';

export async function authorize(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Forbidden();
    }

    const decoded = jwt.verify(token, GLOBAL_CONFIG.SECRET_KEY);

    // Attach the decoded user to the request object
    req.body.user = decoded;

  } catch (err) {
    if (err instanceof Forbidden) {
      return res.status(403).json({
        error: err.message,
        message: 'Unauthorized',
      });
    } else {
      console.error(err);
      return res.status(500).json({
        error: 'Internal Server Error',
        message: 'Unauthorized',
      });
    }
  }

  next();
}
