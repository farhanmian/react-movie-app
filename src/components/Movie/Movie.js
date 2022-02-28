import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Movie.module.css";

function Movie(props) {
  const [nameLimit, setNameLimit] = useState(23);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setNameLimit(15);
    }
  }, []);

  return (
    <Link
      id={props.id}
      to={`/${props.type === "Tv Series" ? "tv" : props.type.toLowerCase()}/${
        props.id
      }`}
      className={classes.Movie}
    >
      <h4 className={classes.MovieRating}>{props.rating}</h4>
      <img src={props.image} alt="MovieImage" />
      <h3>
        {props.name.trim().length > nameLimit
          ? `${props.name.slice(0, nameLimit)}...`
          : props.name}
      </h3>
      <div className={classes.MovieTypeContainer}>
        <p>{props.type}</p> <p>{props.date}</p>
      </div>
    </Link>
  );
}

export default Movie;
