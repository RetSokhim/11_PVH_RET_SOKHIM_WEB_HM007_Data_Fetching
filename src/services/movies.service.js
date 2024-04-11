export async function getAllMovie () {
    const data = await fetch('https://movie-api-get-only-bmc3.vercel.app/api/',{cache: "no-store"})
    const allMoviesData = await data.json()
    return allMoviesData;
}

export async function getMovieById (movieId) {
    const data = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${movieId}`,{cache: "no-store"})
    const movieDataById = await data.json();
    return movieDataById;
}

export async function getMovieByGenre (genre) {
 const data = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`,{cache: "no-store"})
 const movie = await data.json();
 return movie;
}