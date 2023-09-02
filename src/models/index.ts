import { Document, FindOptions, InsertOneResult, ModifyResult, ObjectId, WithId } from 'mongodb';
import { POST } from './methods/POST';
import { DELETE } from './methods/DELETE';
import { GET_ALL } from './methods/GET_ALL';
import { GET_BY_ID } from './methods/GET_BY_ID';
import { PATCH } from './methods/PATCH';

interface IModels {
  create: (_document: Document) => Promise<InsertOneResult<Document>>;
  getAll: (_filter?: FindOptions<Document>) => Promise<WithId<Document>[]>;
  getById: (_id: string | ObjectId) => Promise<WithId<Document> | null>;
  remove: (_id: string | ObjectId) => Promise<ModifyResult<Document>>;
  update: (_id: string | ObjectId, _document: Document) => Promise<ModifyResult<Document>>;
}

export const models = (collection: string): IModels => ({
  create: async (document) => POST(collection, document),
  getAll: async (filter = {}) => GET_ALL(collection, filter),
  getById: async (_id) => GET_BY_ID(collection, _id),
  remove: async (_id) => DELETE(collection, _id),
  update: async (_id, document) => PATCH(collection, _id, document),
});
