import { Document, InsertOneResult } from 'mongodb';

import { getConnection } from '../connection';

export const POST = async (
  collection: string,
  document: Document,
): Promise<InsertOneResult<Document>> =>
  (await getConnection()).collection(collection).insertOne(document);
