import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { Card } from "react-bootstrap/esm";
import { Link, useNavigate } from "react-router-dom";
import MovieContainer from "./MovieContainer";

function Home() {
  return (
    <>
      <Card className="bg-black justify-content-center">
        <Card.Body className="bg-black m-auto p-0">
          <div className=" bg-white" style={{ height: "800px" }}>
            <MovieContainer />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
