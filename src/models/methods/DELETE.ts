import { Document, ModifyResult, ObjectId } from 'mongodb';

import { getConnection } from '../connection';

export const DELETE = async (
  collection: string,
  _id: string | ObjectId,
): Promise<ModifyResult<Document>> =>
  (await getConnection()).collection(collection).findOneAndDelete({ _id: new ObjectId(_id) });
