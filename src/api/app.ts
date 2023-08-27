import { json } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import root from '@/routers/root';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(root);

export default app;
