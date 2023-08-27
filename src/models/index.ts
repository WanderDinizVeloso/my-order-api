import { Document, FindOptions, InsertOneResult, ModifyResult, ObjectId, WithId } from 'mongodb';
import { POST } from './methods/POST';
import { DELETE } from './methods/DELETE';
import { GET_ALL } from './methods/GET_ALL';
import { GET_BY_ID } from './methods/GET_BY_ID';
import { PATCH } from './methods/PATCH';

interface IModels {
  create: (document: Document) => Promise<InsertOneResult<Document>>;
  delete: (_id: string | ObjectId) => Promise<ModifyResult<Document>>;
  getAll: (filter: FindOptions<Document>) => Promise<WithId<Document>[]>;
  getById: (_id: string | ObjectId) => Promise<WithId<Document> | null>;
  update: (_id: string | ObjectId, document: Document) => Promise<ModifyResult<Document>>;
}

export const models = (collection: string): IModels => ({
  create: async (document) => await POST(collection, document),
  delete: async (_id) => await DELETE(collection, _id),
  getAll: async (filter = {}) => await GET_ALL(collection, filter),
  getById: async (_id) => await GET_BY_ID(collection, _id),
  update: async (_id, document) => await PATCH(collection, _id, document),
});
