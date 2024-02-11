import { Router } from "express";
import { validate } from "../middleware/validator.middleware";
import { UserLoginSchema } from "../zod.domain/userLogin.domain";
import { authorize } from "../middleware/authentication.middleware";
import { UserRegisterSchema } from "../zod.domain/userRegister.domain";
import { registerUser, loginUser } from "../controller/user.controller";
import { getProfile, updateProfile } from "../controller/profile.controller";

const userRouter = Router();

userRouter.post('/register', validate(UserRegisterSchema), registerUser);
userRouter.post('/login', validate(UserLoginSchema), loginUser);
userRouter.get(`/profile`, getProfile);
userRouter.patch('/profile', authorize, updateProfile);

export default userRouter;
