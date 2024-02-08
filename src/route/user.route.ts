import { Router } from "express";
import { registerUser, loginUser } from "../controller/user.controller";
import { validate } from "../middleware/validator.middleware";
import { UserRegisterSchema } from "../zod.domain/userRegister.domain";
import { UserLoginSchema } from "../zod.domain/userLogin.domain";
import { authorize } from "../middleware/authentication.middleware";
import { getBooks } from "../controller/book.controller";

const userRouter = Router();

userRouter.post('/register', validate(UserRegisterSchema), registerUser);
userRouter.post('/login', validate(UserLoginSchema), loginUser);

export default userRouter;
