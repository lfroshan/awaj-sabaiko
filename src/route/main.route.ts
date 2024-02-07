import { Router } from "express";

const mainRouter = Router();

mainRouter.get('/health', async (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'I am Ok! I am fine! tinchana...'
  })
});

export default mainRouter;
