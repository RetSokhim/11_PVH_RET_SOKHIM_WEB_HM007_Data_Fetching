import React from "react";
const CardComponent = async ({movie}) => {
  return (
    <div>
           <a
        className="p-3 max-w-lg border bg-white border-indigo-300 bg-bls rounded-2xl hover:shadow-x flex flex-col items-center"
        href= {`/moviedeatil/${movie.movie_id}`}
        style={{ minWidth: "300px", maxWidth: "400px" }}
      >
        <img
          src={movie.image? movie.image:`https://i0.wp.com/pic0.iqiyipic.com/image/20230330/8f/20/a_100529467_m_601_en_m1_1600_900.jpg`}
          className="shadow rounded-lg overflow-hidden border"
        />
        <div className="mt-8">
          <h4 className="font-bold text-xl line-clamp-1">{movie.movie_title}</h4>
          <p className="mt-2 text-gray-600 line-clamp-2">
            {movie.description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default CardComponent;
