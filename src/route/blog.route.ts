import { Router } from "express";
import { authorize } from "../middleware/authentication.middleware";
import { createBlog } from "../controller/blog.controller";
import { validate } from "../middleware/validator.middleware";
import { BlogCreateSchema } from "../zod.domain/blogCreatePayload";

const blogRouter = Router();

blogRouter.post('', validate(BlogCreateSchema), authorize, createBlog);

export default blogRouter;
