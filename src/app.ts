import express from 'express'; 
import blogRouter from './route/blog.route';
import userRouter from './route/user.route';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/v1/user', userRouter);

app.use('/api/v1/blog', blogRouter);

export default app;
