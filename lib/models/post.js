import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {type: String, required: true},
  created_at: Date,
  updated_at: Date
});

postSchema.pre('save', function(next){
  let currentDate = new Date();
  this.updated_at = currentDate;
  if(!this.created_at){
    this.created_at = currentDate;
  }
  next();
});

export default mongoose.model('posts', postSchema);
