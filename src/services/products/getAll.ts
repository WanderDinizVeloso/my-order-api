import { Document, WithId } from 'mongodb';

import { models } from '@/models';

const { getAll } = models('products');

export const productsServiceGetAll = async (): Promise<WithId<Document>[]> => getAll();
