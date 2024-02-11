import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },

  lastname: {
    type: String,
    required: true,
    trim: true
  },

  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[a-zA-Z0-9]+$/, 'Username should only contain letters and numbers'] // should not contain special character
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email address']
  },

  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value: string) {
        // Minimum 8 characters, at least one uppercase letter, and at least one special character
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;
        return regex.test(value);
      },
      message: `Password doesn't match standard (must be 8 characters, include a special character and a uppercase).`
    }
  },

  editor: {
    type: Boolean,
    required: true,
    default: false
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

UserSchema.pre('save', function (next) {
  this.updated_at = new Date();
  
  next();
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
