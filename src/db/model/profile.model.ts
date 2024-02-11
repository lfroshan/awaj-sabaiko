import mongoose, { Mongoose } from "mongoose";

const ProfileSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: false,
    trim: true
  },

  middlename: {
    type: String,
    required: false,
    trim: true
  },

  lastname: {
    type: String,
    required: false,
    trim: true
  },

  permanent_address: {
    type: String,
    required: false,
    trim: true
  },

  temporary_address: {
    type: String,
    required: false,
    trim: true
  },

  occupation: {
    type: String,
    required: false,
    trim: true
  },

  age: {
    type: String,
    required: false,
    trim: true
  },

  profile_pic: {
    type: String,
    required: false,
    trim: true
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },

  created_at: {
    type: Date,
    Default: Date.now
  },

  updated_at: {
    type: Date,
    requried: true,
    Default: Date.now
  }
});

ProfileSchema.pre('save', function (next) {
  this.updated_at = new Date();
  
  next();
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);

export default ProfileModel;
