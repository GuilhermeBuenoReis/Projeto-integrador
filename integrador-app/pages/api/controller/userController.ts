import { createUserModel, findUserbyEmail, findUserbyUsername, findUserLoginByEmail, findUserLoginbyUsername } from "../model/user";
import { generateToken, checkToken } from '@/services/tokenConfig';

export async function createUser(email: string, name: string, username: string,
    password: string, confirmPassword: string) {
    try {
        if (password != confirmPassword) {
            return { message: 'Passwords dont match' };
        }

        const userByEmail = await findUserbyEmail(email);

        if (userByEmail != undefined) {
            return { message: 'Email already registered' };
        }

        const userByUsername = await findUserbyUsername(username);

        if (userByUsername != undefined) {
            return { message: 'Username already registered' };
        }

        const response = await createUserModel( email, name, username, password);

        return response;
    }
    catch (err) {
        return { message: 'Something went wrong' };
    }
}

export async function signIn(login: string, password: string) {
    try {
        const userByEmail = await findUserLoginByEmail(login, password);
        const userByUsername = await findUserLoginbyUsername(login, password);
        var email;

        if (userByEmail == undefined && userByUsername == undefined) {
            return { message: "Invalid Login or Password" };
        }

        if (userByEmail != undefined) {
            email = userByEmail.email;
        } else {
            email = userByUsername?.email;
        }

        const _token = generateToken(email);

        return { token: _token };

    }
    catch {
        return { message: 'Something went wrong' };
    }
}