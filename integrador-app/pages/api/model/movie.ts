import { prisma } from "@/db";

export async function createMovieModel(_name:string , _releaseDate:string, _imageURL:string, _sinopse:string, _director:string) {
    const movie = await prisma.movie.create({
        data: {
            name: _name,
            releaseDate: _releaseDate,
            imageURL: _imageURL,
            sinopse: _sinopse,
            director: _director
        }
    });
    return movie
}



export async function findMovieByNameModel(_name:string) {
    const movie = await prisma.movie.findUnique ({
        where: {
            name: _name
        }
    });

    return movie
}

export async function selectMoviesModel(){
    const movies = await prisma.movie.findMany();

    return movies;
}