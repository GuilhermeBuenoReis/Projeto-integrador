import {
  createUserModel,
  findUserbyEmail,
  findUserByUsername,
  findUserByLogin,
} from '../model/user';
import { generateToken, checkToken } from '@/services/tokenConfig';

export async function createUser(
  name: string,
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
) {
  try {
    if (password != confirmPassword) {
      return { message: 'Passwords dont match' };
    }

    const userByEmail = await findUserbyEmail(email);

    if (userByEmail != undefined) {
      return { message: 'Email already registered' };
    }

    const userByUsername = await findUserByUsername(username);

    if (userByUsername != undefined) {
      return { message: 'Username already registered' };
    }

    const response = await createUserModel(name, email, username, password);

    return response;
  } catch (err) {
    return { message: 'Something went wrong' };
  }
}

export async function login(_email: string, _password: string) {
  try {
    const userLogin = await findUserByLogin(_email, _password);

    if (userLogin == undefined) {
      return { message: 'Incorrect email or password' };
    }
    const _token = generateToken(userLogin?.email);

    return { token: _token };
  } catch (err) {
    return { message: "Something went wrong" };
  }
}
