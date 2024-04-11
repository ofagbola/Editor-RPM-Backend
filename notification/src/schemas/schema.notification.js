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

const notificationSchema = new mongoose.Schema({
  body: {
    type: {
      message: String,
    },
    required: true,
  },
  topics: {
    type: [String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String,
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
export const Notification = mongoose.model('Notifications', notificationSchema);
export const Subscription = mongoose.model('Subscriptions', subscriptionSchema);
