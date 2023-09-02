import express from 'express';

import productsRouter from './products';

const root = express.Router({ mergeParams: true });

root.use('/products', productsRouter);

export default root;
