import { Document, ModifyResult, ObjectId } from 'mongodb';

import { getConnection } from '../connection';
import { TId } from '@/types';

export const PATCH = async (
  collection: string,
  _id: TId,
  document: Document,
): Promise<ModifyResult<Document>> =>
  (await getConnection())
    .collection(collection)
    .findOneAndUpdate({ _id: new ObjectId(_id) }, { $set: document });
