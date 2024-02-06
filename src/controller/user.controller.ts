import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

import { Request, Response } from "express";
import BadRequest from "../Error/BadRequest";
import UserModel from "../db/model/user.model";
import GenericError from "../Error/GenericError";
import { UserRegistrationPayload } from "../zod.domain/userRegister.domain";
import { UserLoginPayload } from '../zod.domain/userLogin.domain';
import Forbidden from '../Error/Forbidden';

export async function registerUser(req: Request, res: Response): Promise<any>{
  try {
    const userRegisterPayload: UserRegistrationPayload = req.body;
  
    if (userRegisterPayload.password !== userRegisterPayload.confirmPassword ) throw new BadRequest();

    const hashedPassword = await bcrypt.hash(userRegisterPayload.password, 10);

    const user = new UserModel({
      firstname: userRegisterPayload.firstname,
      lastname: userRegisterPayload.lastname,
      username: userRegisterPayload.username,
      email: userRegisterPayload.email,
      password: hashedPassword
    });

    await user.save();

    return res.status(201).json({
      message: 'Created'
    })
  } catch (err) {
    if (err instanceof BadRequest) {
      return res.status(err.statusCode).json({
        error: err.message
      })
    } else {
      const genericError = GenericError.handle(err);

      return res.status(genericError.statusCode).json({
        error: genericError.message
      })
    }
  }
}

export async function loginUser(req: Request, res: Response): Promise<any>{
  try {
    const userLoginPayload: UserLoginPayload = req.body;

  const user = await UserModel.findOne({username: userLoginPayload.username});

  if (!user) throw new BadRequest();

  const passwordMatch = await bcrypt.compare(userLoginPayload.password, user.password);
  
  if (!passwordMatch) throw new Forbidden();

  const token = Jwt.sign({userId: user._id}, user.password, {
    expiresIn: '1h'
  });

  return res.status(200).json({token});

  } catch (err) {
    if (err instanceof BadRequest) {
      return res.status(err.statusCode).json({
        error: err.message
      })
    } else {
      const genericError = GenericError.handle(err);

      return res.status(genericError.statusCode).json({
        error: genericError.message
      })
    }
  }
}
