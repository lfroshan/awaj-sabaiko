import { Request, Response } from "express";
import { BlogCreatePayload } from "../zod.domain/blogCreatePayload";
import BlogModel from "../db/model/blog.model";

export async function createBlog(req: Request, res: Response): Promise<any> {
  const userId = req.body.user.userId;

  const payload: BlogCreatePayload = req.body;

  const blog = new BlogModel({
    author: userId,
    title: payload.title,
    description: payload.description,
    content: payload.content
  });

  const createdBlog = await blog.save();

  return res.status(201).json({
    createdBlog
  })
}

export async function getBlogs(req: Request, res: Response): Promise<any> {
  
}
