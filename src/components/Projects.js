import React from "react";
import movie_database_giphy from "../components/Images/movie_database_giphy.gif";
import SQL_to_do_list from "../components/Images/SQL_to_do_list .gif";

export default function Projects() {
  const handleMovieClick = () => {
    window.location.href =
      "https://sleepy-chamber-76088-97ff43ff0d89.herokuapp.com/#/";
  };

  const handleListClick = () => {
    window.location.href =
      "https://mighty-everglades-74307-7a77b374e016.herokuapp.com/";
  };
  return (
    <>
      <div className="bg-secondary">
        <img src={movie_database_giphy}></img>
        <button
          onClick={handleMovieClick}
          className="btn bg-accent border-2 border-[#ADDEDC] text-white px-6 py-3 hover:bg-transparent hover:text-accent"
        >
          Click Here to be directed to this deployed project
        </button>
      </div>
      <div className="bg-secondary">
        <img src={SQL_to_do_list}></img>
        <button
          onClick={handleListClick}
          className="btn bg-accent border-2 border-[#ADDEDC] text-white px-6 py-3 hover:bg-transparent hover:text-accent"
        >
          Click Here to be directed to this deployed project
        </button>
      </div>
      <div>
        <h1>
          Solo Project coming soon, Presentations will take place on 10/23/23{" "}
        </h1>
      </div>
    </>
  );
}
