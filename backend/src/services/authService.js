import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/**
 * Generate JWT token
 * @param {string} userId
 * @param {string} role
 * @returns {string}
 */
export const generateToken = (userId, role) => {
  const secret = process.env.JWT_SECRET || 'fallback_secret_key_amrita_cms';
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

  return jwt.sign({ id: userId, role }, secret, { expiresIn });
};

/**
 * Register a new user
 * @param {Object} userData
 * @returns {Promise<{ user: Object, token: string }>}
 */
export const registerUser = async ({ name, email, password, role }) => {
  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    const error = new Error('A user with this email already exists');
    error.statusCode = 400;
    throw error;
  }

  const user = await User.create({
    name,
    email,
    password,
    role: role || 'admin',
  });

  const token = generateToken(user._id, user.role);

  return {
    user: user.toSafeObject(),
    token,
  };
};

/**
 * Login user with email and password
 * @param {Object} credentials
 * @returns {Promise<{ user: Object, token: string }>}
 */
export const loginUser = async ({ email, password }) => {
  // Explicitly select password since select: false in schema
  const user = await User.findOne({ email: email.toLowerCase() }).select('+password');

  if (!user) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const token = generateToken(user._id, user.role);

  return {
    user: user.toSafeObject(),
    token,
  };
};

/**
 * Get user profile by ID
 * @param {string} userId
 * @returns {Promise<Object>}
 */
export const getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }
  return user.toSafeObject ? user.toSafeObject() : user;
};
