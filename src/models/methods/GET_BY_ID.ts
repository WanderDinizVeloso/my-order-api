import { Document, ObjectId, WithId } from 'mongodb';

import { getConnection } from '../connection';
import { TId } from '@/types';

export const GET_BY_ID = async (collection: string, _id: TId): Promise<WithId<Document> | null> =>
  (await getConnection()).collection(collection).findOne(new ObjectId(_id));
