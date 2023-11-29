import { prisma } from "@/db";

export async function createUserModel(_name: string, _email:string, _username:string, _password:string) {
    const user = await prisma.user.create({
        data: {
            name: _name,
            email: _email,
            userName: _username,
            password: _password
        }
    });

    return user
}

export async function findUserByEmail(_email:string) {
    const user = await prisma.user.findUnique({
        where: {
            email: _email

        }  
    });

    return user
}

export async function findUserByUsername(_username:string) {
    const user = await prisma.user.findUnique({
        where: {
            userName: _username
        }
    });

    return user;
}

export async function findUserLoginByEmail(_email: string, _password:string) {
    const user = await prisma.user.findFirst({
        where: {
            email: _email,
            password: _password
        }
    })
    return user
}

export async function findUserLoginByUsername(_username: string, _password:string) {
    const user = await prisma.user.findUnique({
        where: {
            userName: _username,
            password: _password
        }
    })
    return user
}