import { Document, FindOptions, WithId } from 'mongodb';

import { getConnection } from '../connection';

export const GET_ALL = async (
  collection: string,
  filter: FindOptions<Document> = {},
): Promise<WithId<Document>[]> =>
  (await getConnection()).collection(collection).find(filter).toArray();
