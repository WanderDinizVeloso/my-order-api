import { json } from 'body-parser';
import cors from 'cors';
import express from 'express';

import root from '@/routers/root';
import { errorMiddleware } from '@/middlewares/error';

const app = express();

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(root);
app.use(errorMiddleware);

export default app;
