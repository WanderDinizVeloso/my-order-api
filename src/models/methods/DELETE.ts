import { Document, ModifyResult, ObjectId } from 'mongodb';

import { getConnection } from '../connection';
import { TId } from '@/types';

export const DELETE = async (collection: string, _id: TId): Promise<ModifyResult<Document>> =>
  (await getConnection()).collection(collection).findOneAndDelete({ _id: new ObjectId(_id) });
