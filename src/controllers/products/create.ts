import { NextFunction, Request, Response } from 'express';
import { constants as StatusCodes } from 'http2';

import { productsServiceCreate } from '@/services/products/create';

export const productsControllerCreate = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const payload = req.body;

    const { _id } = await productsServiceCreate(payload);

    return res.status(StatusCodes.HTTP_STATUS_CREATED).json({
      message: 'Product created.',
      _id,
    });
  } catch (error) {
    return next(error);
  }
};
