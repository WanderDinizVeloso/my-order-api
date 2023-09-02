import { NextFunction, Request, Response } from 'express';
import { constants as StatusCodes } from 'http2';

import { productsServiceRemove } from '@/services/products/remove';

export const productsControllerRemove = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { id: _id } = req.params;

    const product = await productsServiceRemove({ _id });

    if (!product) {
      return res.status(StatusCodes.HTTP_STATUS_NOT_FOUND).json({ message: 'Product not found.' });
    }

    return res.status(StatusCodes.HTTP_STATUS_OK).json({ message: 'Product removed.' });
  } catch (error) {
    return next(error);
  }
};
