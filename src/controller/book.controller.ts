import { Request, Response } from "express";
import UserModel from "../db/model/user.model";

export async function getBooks(req: Request, res: Response): Promise<any>{
  const user = await UserModel.findOne({_id: req.body.user.userId});

  return res.status(200).json({
    userDetail: user
  })
}
