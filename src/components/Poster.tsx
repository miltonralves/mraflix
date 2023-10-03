import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "../mock";

import "./Poster.css";
import Score from "./Score";

const Poster = ({ cover, title }: Movie, index: number, score = 5) => (
  <article
    className="relative transition-all duration-300 ease-in-out transform hover:scale-110 hover:z-10"
    key={index}
  >
    <img src={cover} alt={title} />
    <div className="poster cursor-pointer absolute inset-0 w-full h-full py-8 px-4 grid place-items-center bg-black bg-opacity-75 transition-all duration-300 ease-in-out opacity-0">
      <FontAwesomeIcon icon={faPlayCircle} size="5x" />
      <h2 className="text-2xl">{title}</h2>
      <Score value={score} />
    </div>
  </article>
);

export default Poster;
