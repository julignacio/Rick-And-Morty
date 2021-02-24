import React from "react";
import { StyledInicio } from "./styled/StyledInicio.jsx";
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";

export default function Inicio({ random }) {
  return (
    <StyledInicio className="inicio">
      <div className="title">
        <h1>Rick and Morty</h1>
      </div>
      <Loader name="loading" />
      <div className="cards">
        {random.map((c) => {
          return (
            <Card
              key={c.id}
              name={c.name}
              status={c.status}
              specie={c.species}
              location={c.location}
              episodes={c.episodes}
              id={c.id}
            />
          );
        })}
      </div>
    </StyledInicio>
  );
}
