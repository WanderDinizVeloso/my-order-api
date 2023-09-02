import { Document, ObjectId, WithId } from 'mongodb';

import { models } from '@/models';

const { update } = models('products');

interface IUpdatePayload {
  name?: string;
  price?: number;
}

interface IProductsServiceUpdate {
  _id: string | ObjectId;
  payload: IUpdatePayload;
}

export const productsServiceUpdate = async ({
  _id,
  payload,
}: IProductsServiceUpdate): Promise<WithId<Document> | null> => {
  const { value } = await update(_id, payload);
  return value;
};
