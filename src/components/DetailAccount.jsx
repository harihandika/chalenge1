import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Data from "../dataDummy/DataDummy";
import { useParams, Link } from "react-router-dom";
function Account() {
  const params = useParams();
  const datadetail = Data[params.id - 1];

  return (
    <div className="bg-black d-flex justify-content-center mt-4">
      <Card style={{ width: "18rem" }} className="bg-dark text-light">
        <Card.Img variant="top" src={datadetail.image} />
        <Card.Body>
          <Card.Title>{datadetail.username}</Card.Title>
          <Card.Text>Following{datadetail.follower}</Card.Text>
          <Button as={Link} to="/">
            back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Account;
