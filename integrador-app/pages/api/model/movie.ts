import { prisma  } from "@/db";


export async function createMovieModel(_name:string, _releaseDate:number, _imageURL:string) {
    const movie = await prisma.movies.create({
        data: {
            name: _name,
            realeseDate: _releaseDate,
            imageURL: _imageURL
        }
    });

    return movie;
}


export async function findMovieByNameModel(_name:string) {
    const movie = await prisma.movies.findUnique({
        where: {
            name: _name
        },
        include: {
            ratings: true
        }
    });

    return movie;
}


export async function selectMoviesModel() {
    const movies = await prisma.movies.findMany();

    return movies;
}