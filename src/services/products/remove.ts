import { Document, ModifyResult, ObjectId } from 'mongodb';

import { models } from '@/models';

const { remove } = models('products');

interface IProductsServiceRemove {
  _id: string | ObjectId;
}

export const productsServiceRemove = async ({
  _id,
}: IProductsServiceRemove): Promise<ModifyResult<Document>> => remove(_id);
