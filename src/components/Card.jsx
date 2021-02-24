import React, { useState, useEffect } from "react";
import { StyledCard } from "./styled/StyledCard.jsx";

export default function Card({ name, status, specie, location, id, episodes }) {
  const [episode, setEpisode] = useState("");

  useEffect(() => {
    fetch(episodes[0])
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso) {
          setEpisode(recurso.name);
        }
      });
    document.querySelector(".loading").style.display = "none";
  }, []);

  return (
    <StyledCard status={status} className="card">
      <div className="contImg">
        <img
          src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
          alt=""
        />
      </div>

      <div className="info">
        <div>
          <h2>{name}</h2>
          <span className="status">
            <span className="status__icon"></span>
            {status} - {specie}
          </span>
        </div>

        <div>
          <h5>Last known location:</h5>
          <p>{location.name}</p>
        </div>

        <div>
          <h5>First seen in:</h5>
          <p>{episode}</p>
        </div>
      </div>
    </StyledCard>
  );
}
