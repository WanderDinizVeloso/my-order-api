import { ObjectId } from 'mongodb';

import { TId } from '@/types';

interface IId {
  _id: TId;
}

interface IProduct {
  _id: ObjectId;
  name: string;
  price: number;
}

interface ISale {
  _id: ObjectId;
  orderNumber: string;
  products: ISaleProduct[];
  grandTotal: number;
}

interface ISaleProduct extends IProduct {
  quantity: number;
  amount: number;
}

export { IId, IProduct, ISaleProduct, ISale };
