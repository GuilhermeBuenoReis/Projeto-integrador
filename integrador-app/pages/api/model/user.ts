import { prisma } from '@/db';

export async function createUserModel( _email:string, _name:string, _username:string, _password:string) {
    const user = await prisma.user.create({
        data: {
            name: _name,
            email: _email,
            username: _username,
            password: _password
        }
    });
    return user;
}

export async function findUserbyEmail(_email:string) {
    const user = await prisma.user.findUnique({
        where: {
            email: _email
        }
    });
    return user;   
}

export async function findUserbyUsername(_username:string) {
    const user = await prisma.user.findUnique({
        where: {
            username: _username
        }
    });
    return user;   
}


export async function findUserLoginByEmail(_email:string, _password:string) {
    const user = await prisma.user.findUnique({
        where : {
            email : _email,
            password : _password,
        }
    });
    return user;
}

export async function findUserLoginbyUsername(_username:string, _password:string) {
    const user = await prisma.user.findUnique({
        where : {
            username : _username,
            password : _password 
        }
    });
    return user;
}