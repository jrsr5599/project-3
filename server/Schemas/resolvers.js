const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const stripe = require('stripe')('sk_test_51NunjlCC8LY2bILLcO8iXXeCPwrXI5ykFj3gb4dhdpFdirQwRZLAQLIquSruejZ4hlou8uacbAf3gVPExwCnGwjY00GgCD2dhp')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError(
        "You need to be logged in before you can perform that action."
      );
    },
    checkout: async (parent, args, context) => {
      // const url = new URL(context.headers.referer).origin;
      const url = 'http://localhost/3000/success'
      // save donation to database here ***
      // eslint-disable-next-line camelcase
      const line_items = [{price_data: {
        currency: 'usd',
        product_data: {
          name: 'Donations',
          description: 'Donations'
        },
        unit_amount: args.donationAmount * 100,
      },
      quantity: 1,
    }];

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("incorrect email or password");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("incorrect email or password");
      }

      const token = signToken(user);

      return { token, user };
    },
    saveMovie: async (parent, { newMovie }, context) => {
      if (context.user) {
        const movie = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedMovies: newMovie } },
          { new: true }
        );
        return movie;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    removeMovie: async (parent, { movieId }, context) => {
      if (context.user) {
        const movie = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedMovies: { movieId } } },
          { new: true }
        );
        return movie;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    addReview: async (parent, { newReview }, context) => {
      if (context.user) {
        const review = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { reviews: newReview } },
          { new: true }
        );
        return review;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    removeReview: async (parent, { reviewId }, context) => {
      if (context.user) {
        const review = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { reviews: { reviewId } } },
          { new: true }
        );
        return review;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    addComment: async (parent, { addComment }, context) => {
      if (context.user) {
        const comment = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { reviews: { comments: { addComment } } } },
          { new: true }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    removeComment: async (parent, { commentId }, context) => {
      if (context.user) {
        const comment = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { reviews: { comments: { commentId } } } },
          { new: true }
        );
        return comment
      }
      throw new AuthenticationError("You need to be logged in.");
    },
  },
};

module.exports = resolvers;
