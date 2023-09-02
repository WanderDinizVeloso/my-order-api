import { NextFunction, Request, Response } from 'express';
import { constants as StatusCodes } from 'http2';

import { productsServiceGetById } from '@/services/products/getById';

export const productsControllerGetById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { id: _id } = req.params;

    const product = await productsServiceGetById({ _id });

    if (!product) {
      return res.status(StatusCodes.HTTP_STATUS_NOT_FOUND).json({ message: 'Product not found.' });
    }

    return res.status(StatusCodes.HTTP_STATUS_OK).json(product);
  } catch (error) {
    return next(error);
  }
};
