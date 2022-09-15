import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MovieList from "./MovieList";
import dataMovies from "../dataDummy/DataDummy";

function MovieContainer() {
  return (
    <div>
      <Container className="my-5 overflow-hidden" id="">
        {dataMovies.map((movies, index) => {
          return (
            <Row md={2} key={index}>
              <MovieList
                movieImg={movies.image}
                id={movies.id}
                title={movies.username}
                folower={movies.follower}
                folowing={movies.following}
              />
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default MovieContainer;
