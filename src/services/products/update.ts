import { Document, WithId } from 'mongodb';

import { IProduct } from '@/interfaces';
import { models } from '@/models';
import { TId } from '@/types';

const { update } = models('products');

interface IProductsServiceUpdate {
  _id: TId;
  payload: Partial<Omit<IProduct, '_id'>>;
}

export const productsServiceUpdate = async ({
  _id,
  payload,
}: IProductsServiceUpdate): Promise<WithId<Document> | null> => {
  const { value } = await update(_id, payload);
  return value;
};
