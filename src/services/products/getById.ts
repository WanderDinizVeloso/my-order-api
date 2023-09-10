import { Document, WithId } from 'mongodb';

import { IId } from '@/interfaces';
import { models } from '@/models';

const { getById } = models('products');

export const productsServiceGetById = async ({ _id }: IId): Promise<WithId<Document> | null> =>
  getById(_id);
