import express from 'express'; 

import mainRouter from './route/main.route';
import userRouter from './route/user.route';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/v1', mainRouter);

app.use('/api/v1/user', userRouter);

export default app;
