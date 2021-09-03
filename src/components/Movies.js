import moment from "moment";
import { useEffect, useState } from "react";
import "./Movies.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GET_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=1d29e799bb3728c10ef98df0f4ed823f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=1d29e799bb3728c10ef98df0f4ed823f&language=en-US&query=";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [cari, setCari] = useState("");
  useEffect(() => {
    fetch(GET_API)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + cari)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  };

  const handleOnChange = (e) => {
    setCari(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div id="search-bar">
        <form onSubmit={handleOnSubmit}>
          <input
            id="input-search"
            class="form-control me-2"
            type="search"
            value={cari}
            onChange={handleOnChange}
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        {/* <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="search"
            className="srch"
            value={cari}
            onChange={handleOnChange}
          />
        </form> */}
      </div>
      <div className="movies-container-box">
        {movies.map((item) => (
          <div className="movies-container">
            <img src={IMG_API + item.poster_path} />
            <div className="movies-info">
              <div className="movies-name">
                <div>
                  <p>{item.title}</p>
                </div>
                <div>
                  <p>{item.vote_average}</p>
                </div>
              </div>
              {/* <p>Release date : {item.release_date}</p> */}
            </div>
            <div className="movies-overview">
              <h3 className="title-h3">Overview :</h3>
              <p>{item.overview}</p>
              <h3 className="title-h3">Released date :</h3>
              <p>{moment(item.release_date).format("LL")}</p>
            </div>
          </div>
        ))}
      </div>
      <footer>&copy; Copyright 2021</footer>
    </>
  );
}

export default Movies;
