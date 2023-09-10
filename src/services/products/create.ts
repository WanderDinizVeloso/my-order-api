import { ObjectId } from 'mongodb';

import { IProduct } from '@/interfaces';
import { models } from '@/models';

const { create } = models('products');

export const productsServiceCreate = async (
  payload: Omit<IProduct, '_id'>,
): Promise<{ _id: ObjectId }> => {
  const { insertedId: _id } = await create(payload);
  return { _id };
};
