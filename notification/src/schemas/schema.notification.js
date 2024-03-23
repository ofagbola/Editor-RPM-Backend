import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  topics: {
    type: [String],
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  user_email: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model('users', userSchema);

export const Subscription = mongoose.model('Subscriptions', subscriptionSchema);
