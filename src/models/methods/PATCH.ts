import { Document, ModifyResult, ObjectId } from 'mongodb';

import { getConnection } from '../connection';

export const PATCH = async (
  collection: string,
  _id: string | ObjectId,
  document: Document,
): Promise<ModifyResult<Document>> =>
  (await getConnection())
    .collection(collection)
    .findOneAndUpdate({ _id: new ObjectId(_id) }, { $set: document });
