import { Document, ObjectId, WithId } from 'mongodb';

import { getConnection } from '../connection';

export const GET_BY_ID = async (
  collection: string,
  _id: string | ObjectId,
): Promise<WithId<Document> | null> =>
  (await getConnection()).collection(collection).findOne(new ObjectId(_id));
