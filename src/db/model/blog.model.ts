import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true,
    trim: true
  },

  content: {
    type: String,
    required: true,
    trim: true
  },

  author: {
    type: mongoose.Schema.ObjectId, 
    ref: 'User',
    required: true
  },

  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },

  modified_at: {
    type: Date,
    default: Date.now,
    required: true
  }
});

BlogSchema.pre('save', function (next) {
  this.modified_at = new Date();

  next();
})

const BlogModel = mongoose.model('Blog', BlogSchema);

export default BlogModel;
