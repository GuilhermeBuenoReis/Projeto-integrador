import {prisma} from "@/db";

export async function createRatingModel(_value:number, _comment:string, _userID:number, _movieID:number) {
    
    const rating = await prisma.rating.create({
        data:{
            value: _value,
            comment: _comment,
            user: {
                connect: {
                    id:_userID
                }
            },
            movie: {
                connect: {
                    id:_movieID
                }
            }
        

        }
    });


    return rating
}

export async function findRatingByUserAndMovie(_userID: number , _movieID:number) {
    const rating = await prisma.rating.findFirst({
        where : {
            userId: _userID,
            movieId: _movieID
        }
    })
    return rating;
}

export async function deleteRatingModel(_id:number) {
    const rating = await prisma.rating.delete ({
        where: {
            id: _id
        }
    });

    return rating;
}