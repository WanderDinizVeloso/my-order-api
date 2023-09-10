import { Document, ModifyResult } from 'mongodb';

import { models } from '@/models';
import { IId } from '@/interfaces';

const { remove } = models('products');

export const productsServiceRemove = async ({ _id }: IId): Promise<ModifyResult<Document>> =>
  remove(_id);
