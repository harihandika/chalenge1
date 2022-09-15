import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieList({ id, title, movieImg, folowing, folower }) {
  return (
    <Link to={`/account/${id}`} className="text-decoration-none">
      <Card className="bg-black my-2" style={{ width: "500px" }}>
        <Card.Body>
          <Row>
            <Col md={3}>
              <Card.Img
                className="rounded-circle m-0"
                style={{ width: "100px" }}
                variant="top"
                src={movieImg}
              />
            </Col>
            <Col>
              <p className="text-white m-0">@{title}</p>
              <p className="text-white">Follower: {folower}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieList;
