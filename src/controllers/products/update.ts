import { NextFunction, Request, Response } from 'express';
import { constants as StatusCodes } from 'http2';

import { productsServiceUpdate } from '@/services/products/update';

export const productsControllerUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { id: _id } = req.params;
    const payload = req.body;

    const product = await productsServiceUpdate({ _id, payload });

    if (!product) {
      return res.status(StatusCodes.HTTP_STATUS_NOT_FOUND).json({ message: 'Product not found.' });
    }

    return res.status(StatusCodes.HTTP_STATUS_OK).json({ message: 'Product updated.' });
  } catch (error) {
    return next(error);
  }
};
