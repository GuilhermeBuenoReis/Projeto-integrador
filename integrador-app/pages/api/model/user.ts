import { prisma } from '@/db';

export async function createUserModel( _name:string, _email:string, _username:string, _password:string) {
    const user = await prisma.user.create({
        data: {
            name: _name,
            username: _username,
            email: _email,
            password: _password
        }
    });
    return user;
}

export async function findUserByUsername(_username:string) {
    const user = await prisma.user.findUnique({
        where: {
            username: _username
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


export async function findUserByLogin(_email:string, _password:string) {
    const user = await prisma.user.findUnique({
        where : {
            email: _email,
            password: _password
        },
    })
    return user;
}