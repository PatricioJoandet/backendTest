import bcrypt from 'bcrypt';

const hashPassword = (password) => {
  bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
};

const isValidPassword = (user, password) => {
  bcrypt.compareSync(password, user.password)
};

export const BCRYPT_VALIDATION = { hashPassword, isValidPassword };