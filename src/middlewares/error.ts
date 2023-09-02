import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { constants as StatusCodes } from 'http2';

export const errorMiddleware = async (
  error: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Promise<Response> => {
  console.log({ ERROR_APP: error });

  return res
    .status(StatusCodes.HTTP_STATUS_INTERNAL_SERVER_ERROR)
    .json({ error: { message: 'internal server error' } });
};
