import NotFound from "../Error/NotFound";
import { Request, Response } from "express";
import Forbidden from "../Error/Forbidden";
import BadRequest from "../Error/BadRequest";
import GenericError from "../Error/GenericError";
import ProfileModel from "../db/model/profile.model";

export async function getProfile(req: Request, res: Response): Promise<any> {
  const userId = req.query.user_id;

  try {
    const profile = await ProfileModel.findOne({ 
      user: userId
    });

    if (!profile) throw new NotFound();

    res.status(200).json(profile)
  } catch (err) {
    if (err instanceof NotFound) {
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

export async function updateProfile(req: Request, res: Response): Promise<any> {
  const profileId = req.body?._id;
  const updateFields = req.body;

  try {
    if (!profileId) throw new BadRequest();
    const existingProfile = await ProfileModel.findOne({_id: profileId});

    if (req.body.user.userId !== existingProfile?.user ) throw new Forbidden();

    // removing the embedded user in request body.
    delete updateFields['user'];

    const updatedProfile = await ProfileModel.findOneAndUpdate(
      {_id: profileId},
      {$set: updateFields},
      {new: true}
    );

    res.status(200).json(updatedProfile);
  } catch(err) {
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
