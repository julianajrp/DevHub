import React from "react";
import "./NotFound.css";
import gifLoop from "../../assets/gifLoop.gif";
import { DivImg } from "../../components/NotFoundStyledComponent/NotFoundComponent";

const NotFound = () => {
  return (
    <DivImg>
      <h1 className="notFound">not found :(</h1>
      <img src={gifLoop} alt="gif loop" />
    </DivImg>
  );
};

export default NotFound;
