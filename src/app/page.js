import React from 'react';
import CardComponent from "@/components/CardComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { getAllMovie } from "@/services/movies.service";
import { FaGreaterThan } from "react-icons/fa";

const Home = async () => {
 const allMovies = await getAllMovie();
 const moviesByGenre = {};

 const genres = allMovies.payload.map(movie => movie.genre);
 console.log("genre : ",genres)
 genres.forEach(genre => {
    moviesByGenre[genre] = allMovies.payload.filter(movie => movie.genre === genre);
 });

 let genreSections = [];
 for (let genre in moviesByGenre) {
    if (moviesByGenre.hasOwnProperty(genre)) {
      genreSections.push(
        <div key={genre}>
          <h2 className="font-bold text-2xl text-white flex ">
            {genre} <FaGreaterThan className="m-1" />
          </h2>
          <div className="mt-[20px] overflow-x-scroll scrollbar-hide">
            <div className="flex mt-[20px] gap-3">
              {moviesByGenre[genre].map((movie) => (
                <CardComponent movie={movie} />
              ))}
            </div>
          </div>
        </div>
      );
    }
 }

 return (
    <main>
      <div>
        <NavbarComponent />
      </div>
      <div>
        <h2 className="font-bold text-2xl text-white flex ">
          All Movies <FaGreaterThan className="m-1" />
        </h2>
        <div className="mt-[20px] overflow-x-scroll scrollbar-hide">
          <div className="flex mt-[20px] gap-3">
            {allMovies.payload.map((movie) => (
              <CardComponent movie={movie} />
            ))}
          </div>
        </div>
      </div>

      {genreSections}
    </main>
 );
};

export default Home;
