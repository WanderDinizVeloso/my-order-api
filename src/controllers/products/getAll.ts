import { NextFunction, Request, Response } from 'express';
import { constants as StatusCodes } from 'http2';

import { productsServiceGetAll } from '@/services/products/getAll';

export const productsControllerGetAll = async (
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const products = await productsServiceGetAll();

    return res.status(StatusCodes.HTTP_STATUS_OK).json(products);
  } catch (error) {
    return next(error);
  }
};
