import React from "react";
import { StyledLoader } from "./styled/StyledLoader.jsx";
import portal from "../img/portal.gif";

export default function Loader({ name }) {
  return (
    <StyledLoader className={name}>
      <img src={portal} alt="Rick and Morty portal" />
    </StyledLoader>
  );
}
