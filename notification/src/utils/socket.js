import { Server } from 'socket.io';
import logger from './logger.js';
import {
  Subscription,
  User,
  Notification,
} from '../schemas/schema.notification.js';
import { v4 as uuidv4 } from 'uuid';

export let io = null;

export const InitSocket = (server) => {
  try {
    io = new Server(server, {
      path: '/',
      cors: {
        origin: ['http://localhost:5500'],
      },
    });

    io.on('connection', (socket) => {
      socket.on('NEW_USER', async (userId, user_email) => {
        try {
          await createUser(userId, user_email);
        } catch (error) {
          if (error.errorMessage) {
            socket.emit('NEW_USER', {
              message: error.errorMessage,
            });
          } else {
            socket.emit('NEW_USER', {
              message: 'failed to create new user',
            });
          }
        }
      });

      socket.on('REJOIN_SUBSCRIPTION', async (userId) => {
        try {
          const userSubscription = await userSubscriptions(userId);

          if (userSubscription !== null && userSubscription.topics.length > 0) {
            socket.join(userSubscription.topics);
          }
        } catch (error) {
          if (error.errorMessage) {
            socket.emit('REJOIN_SUBSCRIPTION', {
              message: error.errorMessage,
            });
          } else {
            socket.emit('REJOIN_SUBSCRIPTION', {
              message: 'failed to rejoin subscription',
            });
          }
        }
      });

      socket.on('NOTIFY', async (payload, topics = []) => {
        try {
          if (topics.length > 0) {
            const id = uuidv4();

            const data = {
              title: payload.title ?? '',
              body: payload.body ?? '',
              id,
              read: false,
            };

            notify(id, {
              ...data,
              topics,
            }).then(() => {
              io.to(topics).emit('RECEIVED_NOTIFICATION', data);
            });
          }
        } catch (error) {
          socket.emit('NOTIFY', {
            message: 'notification failed',
          });
        }
      });

      socket.on('SUBSCRIBE_TO_TOPIC', async (userId, topics) => {
        try {
          await subscribeToTopic(userId, topics);
          socket.join(topics);
        } catch (error) {
          if (error.errorMessage) {
            socket.emit('SUBSCRIBE_TO_TOPIC', {
              message: error.errorMessage,
            });
          } else {
            socket.emit('SUBSCRIBE_TO_TOPIC', {
              message: 'subscription to topic failed',
            });
          }
        }
      });

      socket?.on('GET_NOTIFICATIONS', async (topics) => {
        try {
          const notifications = await getNotifications(topics);
          socket.emit('NOTIFICATION_DATA', notifications);
        } catch (error) {
          socket.emit('GET_NOTIFICATIONS', {
            message: 'failed to get notification',
          });
        }
      });

      socket?.on('MARK_NOTIFICATION', async (id) => {
        try {
          await markNotification(id);
        } catch (error) {
          socket.emit('MARK_NOTIFICATION', {
            message: 'failed to mark notification',
          });
        }
      });
    });
  } catch (error) {
    logger.error(`Socket connection failed ${error}`);
  }
};

const getNotifications = async (topic) => {
  try {
    return await Notification.find({ topics: { $in: topic }, read: false });
  } catch (error) {
    throw error;
  }
};

const markNotification = async (id) => {
  try {
    await Notification.findOneAndUpdate(
      { id: id },
      { $set: { read: true } },
      { new: true }
    );
  } catch (error) {
    throw error;
  }
};

const userSubscriptions = async (userId) => {
  try {
    const query = { userId };

    const existUser = await User.findOne(query);

    if (existUser === null) {
      throw {
        errorMessage: 'User does not exist',
      };
    }

    return await Subscription.findOne(query);
  } catch (error) {
    throw error;
  }
};

const subscribeToTopic = async (userId, topics) => {
  try {
    const query = { userId };

    const existUser = await User.findOne(query);

    if (existUser === null) {
      throw {
        errorMessage: 'User does not exist',
      };
    }

    const newData = {
      userId,
      topics,
    };

    const options = {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    };

    await Subscription.findOneAndUpdate(query, newData, options);
  } catch (error) {
    throw error;
  }
};

const createUser = async (userId, user_email) => {
  try {
    const query = { user_email };

    const newData = {
      userId,
      user_email,
    };

    const options = {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    };

    await User.findOneAndUpdate(query, newData, options);
  } catch (error) {
    throw error;
  }
};

const notify = async (id, data) => {
  try {
    const query = { id };

    const options = {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    };

    await Notification.findOneAndUpdate(query, data, options);
  } catch (error) {
    throw error;
  }
};
