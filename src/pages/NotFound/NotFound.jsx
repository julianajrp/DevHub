import React from "react";
import "./NotFound.css";
import gifLoop from "../../assets/gifLoop.gif";
import {
  DivImg,
  H1NotFound,
} from "../../components/NotFoundStyledComponent/NotFoundComponent";

const NotFound = () => {
  return (
    <DivImg>
      <H1NotFound className="notFound">not found :(</H1NotFound>
      <img src={gifLoop} alt="gif loop" />
    </DivImg>
  );
};

export default NotFound;
