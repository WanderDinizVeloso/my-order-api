import { ObjectId } from 'mongodb';

import { models } from '@/models';

const { create } = models('products');

interface IPayload {
  name: string;
  price: number;
}

export const productsServiceCreate = async (payload: IPayload): Promise<{ _id: ObjectId }> => {
  const { insertedId: _id } = await create(payload);
  return { _id };
};
