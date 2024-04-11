import NavbarDetailComponent from "@/components/NavbarDetailComponent";
import { getMovieById } from "@/services/movies.service";
import { FaStar } from "react-icons/fa";

export default async function MovieDetail({ params }) {
  const movieDetail = await getMovieById(params.movieId);
  const rating = Math.round(movieDetail.payload.rating);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
       stars.push(i < rating ? <FaStar key={i} color="#ffc107" /> : <FaStar key={i} color="#e4e5e9" />);
    }
    return stars;
   }

  const dateTime = movieDetail.payload.posted_at 
  const date = new Date(dateTime);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const formattedDate = date.toLocaleString("en-US", options);
  
  return (
    <main>
      <div>
        <NavbarDetailComponent/>
      </div>
      <div>
        <div className="dark:bg-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={movieDetail.payload.image? movieDetail.payload.image:`https://i0.wp.com/pic0.iqiyipic.com/image/20230330/8f/20/a_100529467_m_601_en_m1_1600_900.jpg`}
                    alt="Product Image"
                  />
                </div>
                <div className="flex -mx-2 mb-4"></div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-white dark:text-white mb-2">
                  {movieDetail.payload.director}
                </h2>
                <p className="text-white dark:text-gray-300 text-sm mb-4">
                  {`${movieDetail.payload.runtime} minutes`}
                  <br />
                  {movieDetail.payload.genre}
                </p>
                <div className="flex">{renderStars(rating)}</div>
                <div>
                  <span className="font-bold text-white dark:text-gray-300">
                    {`${movieDetail.payload.movie_title} (${movieDetail.payload.released_year})`}
                  </span>
                  <p className="text-white dark:text-gray-300 text-sm mt-2">
                    {movieDetail.payload.description}
                  </p>
                  <br/>
                  <br/>
                  <p className="text-white dark:text-gray-300 text-sm mt-2">
                    {formattedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
