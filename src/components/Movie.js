import React, { useState } from "react";

export const Movie = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((res) => res.json())
      .then((value) => setData(value.Search));
      setSearch("");
  };
  return (
    <div>
      <center>
        <h1> Search Your Favorite Movie </h1>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="input_serach"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Search" className="btn" />
        </form>
        <div className="row">
          <div className="col-md-4">
            {data.map((movie) => (
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src={movie.Poster}
                  class="card-img-top"
                  alt={movie.Title}
                />
                <div class="card-body">
                  <h4 class="card-text">{movie.Title}</h4>
                  <a href={movie.Poster} className="btn btn-primary" download>
                    {" "}
                    Download Poster
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </center>
    </div>
  );
};
