import { Router } from "express";

import { authorize } from "../middleware/authentication.middleware";
import { getBooks } from "../controller/book.controller";

const mainRouter = Router();

mainRouter.get('/health', async (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'I am Ok! I am fine! tinchana...'
  })
});

mainRouter.post('/books', authorize, getBooks);

export default mainRouter;
