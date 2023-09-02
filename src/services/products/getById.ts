import { Document, ObjectId, WithId } from 'mongodb';

import { models } from '@/models';

const { getById } = models('products');

interface IProductsServiceGetById {
  _id: string | ObjectId;
}

export const productsServiceGetById = async ({
  _id,
}: IProductsServiceGetById): Promise<WithId<Document> | null> => getById(_id);
