import mongoose from 'mongoose';
import promise from 'bluebird';

mongoose.Promise = promise;

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  full_name: { type: String, required: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  profile_picture: {type: String, require: true},
  created_at: Date,
  updated_at: Date
});

memberSchema.pre('save', function(next){
  let currentDate = new Date();
  this.updated_at = currentDate;

  if(!this.created_at){
    this.created_at = currentDate;
  }
  next();
});

export default mongoose.model('members', memberSchema);
