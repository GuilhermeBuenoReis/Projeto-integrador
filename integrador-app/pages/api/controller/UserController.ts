import { createUserModel, findUserByEmail, findUserByUsername, findUserLoginByEmail, findUserLoginByUsername } from "../model/user";
import { generateToken, checkToken } from '@/services/tokenConfig'

export async function createUser(name:string, email:string, username:string, password:string, confirmpassword: string) {
    try {

        if (password != confirmpassword) {
            return {message: 'Passwords dont match'};
        }

        const UserByEmail = await findUserByEmail(email)

        if (UserByEmail != undefined) {
            return {message: 'Email already registered'}
        }

        const UserByUsername = await findUserByUsername(username);

        if (UserByUsername != undefined) {
            return {message: 'Username already registered'}
        }

        const response = await createUserModel(name, email, username, password);

        return response

    }
    catch(err) {
        return {message: 'Something went wrong'};
    }
}

export async function signIn(login:string, password:string) {
    try {
        const userByEmail = await findUserLoginByEmail(login, password);
        const UserByUsername = await findUserLoginByUsername(login, password);

        if (userByEmail == undefined && UserByUsername == undefined) {
            return {message: 'Invalid Login or Password'};
        }

        const _token = generateToken(login);

        return {token: _token};

    }
    catch {
        return {message: 'Something went wrong'};
    }
}