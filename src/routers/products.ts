import express from 'express';

import { productsControllerGetAll } from '@/controllers/products/getAll';
import { productsControllerGetById } from '@/controllers/products/getById';
import { productsControllerCreate } from '@/controllers/products/create';
import { productsControllerUpdate } from '@/controllers/products/update';
import { productsControllerRemove } from '@/controllers/products/remove';

const productsRouter = express.Router();

productsRouter.get('/', [productsControllerGetAll]);

productsRouter.get('/:id', [productsControllerGetById]);

productsRouter.post('/', [productsControllerCreate]);

productsRouter.patch('/:id', [productsControllerUpdate]);

productsRouter.delete('/:id', [productsControllerRemove]);

export default productsRouter;
